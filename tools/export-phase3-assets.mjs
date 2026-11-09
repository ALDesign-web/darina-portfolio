import { callFigwrightTool } from './figwright-cli.mjs';
import fs from 'fs';

const TASKS = [
  // --- 1. CHESS CUP 2026 ---
  {
    pageId: '2025:59575',
    items: [
      { id: '2025:59578', out: 'chess-cup/cover.png', scale: 1.5 },
      { id: '2025:60488', out: 'chess-cup/stream-backdrop.png', scale: 1.5 },
      { id: '2025:59778', out: 'chess-cup/platform-header.png', scale: 1.5 },
      { id: '2025:59976', out: 'chess-cup/platform-banner.png', scale: 1.5 },
      { id: '2025:60277', out: 'chess-cup/email-header.png', scale: 1.5 }
    ]
  },
  // --- 2. CORPORATE EDITORIAL DIGESTS ---
  {
    pageId: '2011:2',
    items: [
      { id: '2022:2117', out: 'corporate-digests/ebsco-header.png', scale: 2 },
      { id: '2022:2135', out: 'corporate-digests/ebsco-newsletter-full.png', scale: 1 },
      { id: '2023:3569', out: 'corporate-digests/irish-digest-full.png', scale: 1 },
      { id: '2023:27852', out: 'corporate-digests/equifax-infographic.png', scale: 1.5 },
      { id: '2022:2635', out: 'corporate-digests/digest-banners.png', scale: 1.5 }
    ]
  },
  // --- 3. CLOUD CERTIFICATION CAMPAIGN ---
  {
    pageId: '2025:105972',
    items: [
      { id: '2025:105982', out: 'cloud-certification/cover.png', scale: 1 },
      { id: '2025:106231', out: 'cloud-certification/challenge-card-01.png', scale: 1.5 },
      { id: '2025:106238', out: 'cloud-certification/challenge-card-02.png', scale: 1.5 },
      { id: '2025:106178', out: 'cloud-certification/teams-header.png', scale: 2 },
      { id: '2025:106032', out: 'cloud-certification/email-header-01.png', scale: 2 },
      { id: '2025:106043', out: 'cloud-certification/email-header-02.png', scale: 2 }
    ]
  }
];

async function run() {
  const baseDir = '/Users/design/HQplug/darina portfolio/public/assets/projects';

  for (const task of TASKS) {
    console.log(`\nNavigating to page ${task.pageId}...`);
    await callFigwrightTool('navigate_to_page', { pageId: task.pageId });
    await new Promise(r => setTimeout(r, 600));

    for (const item of task.items) {
      const parts = item.out.split('/');
      const targetDir = `${baseDir}/${parts[0]}`;
      const targetFilename = parts[1];
      console.log(`Exporting ${item.id} -> ${item.out}...`);
      try {
        const res = await callFigwrightTool('save_screenshots', {
          nodeIds: [item.id],
          outDir: targetDir,
          format: 'PNG',
          scale: item.scale
        });
        const data = JSON.parse(res.content[0].text);
        const originalPath = data.saved?.[0]?.path;
        if (originalPath) {
          const finalPath = `${targetDir}/${targetFilename}`;
          fs.copyFileSync(originalPath, finalPath);
          console.log(`✓ Saved and renamed to: ${finalPath}`);
        }
      } catch (err) {
        console.error(`✗ Error on ${item.out}:`, err.message);
      }
      await new Promise(r => setTimeout(r, 400));
    }
  }

  // Also copy master presentation deck slides to corporate-digests
  try {
    fs.copyFileSync(
      `${baseDir}/presentation/2041-17909.png`,
      `${baseDir}/corporate-digests/cover.png`
    );
    fs.copyFileSync(
      `${baseDir}/presentation/2041-18076.png`,
      `${baseDir}/corporate-digests/digest-grid-architecture.png`
    );
    console.log('✓ Copied master digest presentation slides into corporate-digests!');
  } catch (e) {
    console.error('Copy presentation error:', e.message);
  }

  console.log('\nAll Phase 3 assets exported successfully!');
}

run();
