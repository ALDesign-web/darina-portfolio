import { callFigwrightTool } from './figwright-cli.mjs';

const ASSET_TASKS = [
  // --- 1. DIIA.AI CONTEST HACKATHON ---
  {
    pageId: '2025:72156',
    items: [
      { id: '2025:76412', name: 'merch-tshirt', dir: 'diia-ai', scale: 1.5 },
      { id: '2025:75826', name: 'badges-frame11', dir: 'diia-ai', scale: 1.5 },
      { id: '2025:75834', name: 'badges-frame16', dir: 'diia-ai', scale: 1.5 },
      { id: '2025:76131', name: 'certificate-diploma', dir: 'diia-ai', scale: 1.5 },
      { id: '2025:72724', name: 'social-facebook-1200x630', dir: 'diia-ai', scale: 1.5 },
      { id: '2025:72783', name: 'social-instagram-1080x1350', dir: 'diia-ai', scale: 1.5 }
    ]
  },
  // --- 2. EPAM e-KIDS ---
  {
    pageId: '2024:42207',
    items: [
      { id: '2024:52591', name: 'email-header-01', dir: 'epam-ekids', scale: 2 },
      { id: '2024:52595', name: 'email-header-02', dir: 'epam-ekids', scale: 2 },
      { id: '2024:53349', name: 'brand-shapes-tokens', dir: 'epam-ekids', scale: 2 }
    ]
  },
  // --- 3. AI SDLC MATURITY PROGRAM ---
  {
    pageId: '2023:36096',
    items: [
      { id: '2023:40921', name: 'keynote-slide-01', dir: 'ai-sdlc', scale: 1.5 },
      { id: '2023:40955', name: 'keynote-slide-02', dir: 'ai-sdlc', scale: 1.5 },
      { id: '2023:40095', name: 'full-email-newsletter-01', dir: 'ai-sdlc', scale: 1.5 },
      { id: '2023:40158', name: 'full-email-newsletter-02', dir: 'ai-sdlc', scale: 1.5 }
    ]
  }
];

async function run() {
  const baseDir = '/Users/design/HQplug/darina portfolio/public/assets/projects';

  for (const task of ASSET_TASKS) {
    console.log(`\nNavigating to page ${task.pageId}...`);
    await callFigwrightTool('navigate_to_page', { pageId: task.pageId });
    await new Promise(r => setTimeout(r, 600));

    for (const item of task.items) {
      const targetDir = `${baseDir}/${item.dir}`;
      console.log(`Exporting ${item.name} (${item.id}) to ${item.dir}...`);
      try {
        const res = await callFigwrightTool('save_screenshots', {
          nodeIds: [item.id],
          outDir: targetDir,
          format: 'PNG',
          scale: item.scale
        });
        const data = JSON.parse(res.content[0].text);
        console.log(`✓ Saved ${item.name}:`, data.saved?.[0]?.path);
      } catch (err) {
        console.error(`✗ Error on ${item.name}:`, err.message);
      }
      await new Promise(r => setTimeout(r, 400));
    }
  }

  console.log('\nAll expanded assets exported successfully!');
}

run();
