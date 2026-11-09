import { callFigwrightTool } from './figwright-cli.mjs';

function extractAllText(node, list = []) {
  if (node.characters && typeof node.characters === 'string' && node.characters.trim()) {
    list.push(node.characters.trim());
  }
  if (node.children) {
    for (const c of node.children) extractAllText(c, list);
  }
  return list;
}

async function inspectProjects() {
  const targets = [
    { pageId: '2024:42207', name: 'EPAM e-KIDS' },
    { pageId: '2025:72156', name: 'DiiaAI Contest Hackathon' },
    { pageId: '2023:36096', name: 'AI Campaigns' },
    { pageId: '2041:18361', name: 'rina.teaches' }
  ];

  for (const t of targets) {
    await callFigwrightTool('navigate_to_page', { pageId: t.pageId });
    const res = await callFigwrightTool('scan_nodes_by_types', { types: ['FRAME'] });
    const frames = JSON.parse(res.content[0].text).nodes || [];

    console.log(`=== PAGE: ${t.name} (${frames.length} frames) ===`);
    
    // sample 3 large frames
    const large = frames.filter(f => f.width > 500 && f.height > 400).slice(0, 3);
    for (const lf of large) {
      const nodeDetail = await callFigwrightTool('get_node', { nodeId: lf.id, depth: 3 });
      const d = JSON.parse(nodeDetail.content[0].text);
      if (d.node) {
        const texts = extractAllText(d.node);
        console.log(`Frame [${lf.id}] "${lf.name}":`);
        console.log(texts.slice(0, 5).join(' | '));
      }
    }
    console.log('\n');
  }
}

inspectProjects();
