import { callFigwrightTool } from './figwright-cli.mjs';

const PAGES = [
  { id: '2041:11708', name: 'portfolio pdf' },
  { id: '2023:36096', name: 'AI Campaigns' },
  { id: '2024:42207', name: 'EPAM e-KIDS Brandbook + Assets' },
  { id: '2025:72156', name: 'DiiaAI Contest Hackathon' },
  { id: '2041:18361', name: 'rina.teaches (progect design) (Copy)' },
  { id: '2025:85338', name: 'Equifax Design' },
  { id: '2025:105972', name: 'Cloud Certification Campaign' },
  { id: '2025:59575', name: 'Chess Cup 2026' },
  { id: '2025:59576', name: 'Be well progect' }
];

async function scan() {
  console.log('=== STARTING SYSTEMATIC AUDIT OF DARINA PROJECTS ===\n');

  for (const p of PAGES) {
    try {
      await callFigwrightTool('navigate_to_page', { pageId: p.id });
      const framesRes = await callFigwrightTool('scan_nodes_by_types', { types: ['FRAME', 'SECTION'] });
      const frames = JSON.parse(framesRes.content[0].text).nodes || [];

      console.log(`PAGE: "${p.name}" (${p.id}) -> ${frames.length} frames`);
      
      const topFrames = frames
        .filter(f => f.width > 300 && f.height > 300)
        .slice(0, 8);

      for (const tf of topFrames) {
        console.log(`   - [${tf.id}] "${tf.name}" (${Math.round(tf.width)}x${Math.round(tf.height)})`);
      }
      console.log('');
    } catch (e) {
      console.error(`Error scanning page ${p.name}:`, e.message);
    }
  }
}

scan();
