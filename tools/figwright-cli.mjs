#!/usr/bin/env node
import { spawn } from 'child_process';
import http from 'http';

const RELAY_PING_URL = 'http://127.0.0.1:3055/ping';

export async function checkRelayStatus() {
  return new Promise((resolve) => {
    http.get(RELAY_PING_URL, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch {
          resolve({ ok: false, error: 'Invalid JSON response from relay' });
        }
      });
    }).on('error', (err) => {
      resolve({ ok: false, error: err.message });
    });
  });
}

export async function callFigwrightTool(toolName, args = {}, timeoutMs = 30000) {
  return new Promise((resolve, reject) => {
    const child = spawn('npx', ['-y', '@figwright/mcp@latest'], {
      stdio: ['pipe', 'pipe', 'pipe']
    });

    let buffer = '';
    let isInitialized = false;
    let timer = setTimeout(() => {
      child.kill();
      reject(new Error(`Tool ${toolName} timed out after ${timeoutMs}ms. Ensure Figma file is open and Figwright plugin is running.`));
    }, timeoutMs);

    child.stdout.on('data', (d) => {
      buffer += d.toString();
      const lines = buffer.split('\n');
      buffer = lines.pop();

      for (const line of lines) {
        if (!line.trim()) continue;
        try {
          const msg = JSON.parse(line);
          if (msg.id === 1) {
            isInitialized = true;
            child.stdin.write(
              JSON.stringify({
                jsonrpc: '2.0',
                id: 2,
                method: 'tools/call',
                params: {
                  name: toolName,
                  arguments: args
                }
              }) + '\n'
            );
          } else if (msg.id === 2) {
            clearTimeout(timer);
            child.kill();
            if (msg.error) {
              reject(new Error(`MCP error [${msg.error.code}]: ${msg.error.message}`));
            } else {
              resolve(msg.result);
            }
          }
        } catch {
          // ignore non-json log lines
        }
      }
    });

    child.stderr.on('data', (d) => {
      // debug stream
    });

    child.on('error', (err) => {
      clearTimeout(timer);
      reject(err);
    });

    // Send initialize
    child.stdin.write(
      JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'initialize',
        params: {
          protocolVersion: '2024-11-05',
          capabilities: {},
          clientInfo: { name: 'figwright-cli', version: '1.0.0' }
        }
      }) + '\n'
    );
  });
}

// CLI Interface
if (process.argv[1] && process.argv[1].endsWith('figwright-cli.mjs')) {
  const cmd = process.argv[2];
  if (cmd === 'status') {
    checkRelayStatus().then((res) => {
      console.log(JSON.stringify(res, null, 2));
      process.exit(0);
    });
  } else if (cmd === 'call') {
    const toolName = process.argv[3];
    const argsJson = process.argv[4] ? JSON.parse(process.argv[4]) : {};
    callFigwrightTool(toolName, argsJson)
      .then((res) => {
        console.log(JSON.stringify(res, null, 2));
        process.exit(0);
      })
      .catch((err) => {
        console.error('Error:', err.message);
        process.exit(1);
      });
  } else {
    console.log('Usage:');
    console.log('  node tools/figwright-cli.mjs status');
    console.log('  node tools/figwright-cli.mjs call <toolName> [argsJson]');
    process.exit(0);
  }
}
