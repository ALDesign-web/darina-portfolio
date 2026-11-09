import { callFigwrightTool } from './figwright-cli.mjs';

const SLIDES = [
  { id: '2041:15037', name: 'slide-01-cover' },
  { id: '2041:15061', name: 'slide-02-contents' },
  { id: '2041:15086', name: 'slide-03-statement' },
  { id: '2041:15177', name: 'slide-04-logos-divider' },
  { id: '2041:15225', name: 'slide-05-it-volunteering-logo' },
  { id: '2041:15389', name: 'slide-06-women-in-tech-logo' },
  { id: '2041:15634', name: 'slide-07-women-in-tech-guidelines' },
  { id: '2041:16061', name: 'slide-08-women-in-tech-visual' },
  { id: '2041:17242', name: 'slide-09-email-design-wit' },
  { id: '2041:17857', name: 'slide-10-email-design-systems' },
  { id: '2041:17909', name: 'slide-11-digest-cover' },
  { id: '2041:18076', name: 'slide-12-digest-grid' },
  { id: '2041:18122', name: 'slide-13-online-bookstore-ux' },
  { id: '2041:18155', name: 'slide-14-teams-channel-design' },
  { id: '2041:18273', name: 'slide-15-contacts-outro' }
];

async function run() {
  await callFigwrightTool('navigate_to_page', { pageId: '2041:11708' });
  const outDir = '/Users/design/HQplug/darina portfolio/public/assets/projects/presentation';

  for (const s of SLIDES) {
    try {
      console.log(`Exporting ${s.name} (${s.id})...`);
      const res = await callFigwrightTool('save_screenshots', {
        nodeIds: [s.id],
        outDir,
        format: 'PNG',
        scale: 1.5
      });
      const data = JSON.parse(res.content[0].text);
      console.log(`Saved ${s.name}:`, data.saved[0]?.path);
      await new Promise(r => setTimeout(r, 400));
    } catch (e) {
      console.error(`Failed on ${s.name}:`, e.message);
    }
  }
  console.log('All presentation slides exported!');
}

run();
