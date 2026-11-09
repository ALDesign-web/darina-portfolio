import { callFigwrightTool } from './figwright-cli.mjs';
import fs from 'fs';
import path from 'path';

const BASE_DIR = '/Users/design/HQplug/darina portfolio/public/assets/projects';

// Master list of export tasks from "PORTFOLIO FOR SITE"
const EXPORT_PLAN = [
  // ================= 1. BEHANCE BANNER =================
  {
    folder: 'behance',
    items: [
      { id: '2086:41681', filename: 'behance-banner.png', scale: 1.5 }
    ]
  },
  // ================= 2. BOOKIFY =================
  {
    folder: 'bookify',
    items: [
      { id: '2085:33986', filename: 'cover.png', scale: 2 },
      { id: '2085:36845', filename: 'screen-01.png', scale: 2 },
      { id: '2085:36881', filename: 'screen-02.png', scale: 2 }
    ]
  },
  // ================= 3. DISBALANSER =================
  {
    folder: 'disbalanser',
    items: [
      { id: '2082:5068', filename: 'cover.png', scale: 2 },
      { id: '2082:5135', filename: 'detail-01.png', scale: 2 },
      { id: '2082:5136', filename: 'detail-02.png', scale: 2 }
    ]
  },
  // ================= 4. KYIVGAZ =================
  {
    folder: 'kyivgaz',
    items: [
      { id: '2082:6053', filename: 'cover.png', scale: 2 }
    ]
  },
  // ================= 5. ARCHETYPE =================
  {
    folder: 'archetype',
    items: [
      { id: '2082:6106', filename: 'cover.png', scale: 2 }
    ]
  },
  // ================= 6. RINA.TEACHES =================
  {
    folder: 'rina-teaches',
    items: [
      { id: '2079:354', filename: 'cover.png', scale: 1.5 },
      { id: '2080:99', filename: 'story-01.png', scale: 2 },
      { id: '2080:123', filename: 'story-02.png', scale: 2 },
      { id: '2080:38', filename: 'story-03.png', scale: 2 },
      { id: '2080:69', filename: 'story-04.png', scale: 2 },
      { id: '2080:151', filename: 'story-05.png', scale: 2 },
      { id: '2080:987', filename: 'post-01.png', scale: 2 },
      { id: '2080:1070', filename: 'post-02.png', scale: 2 },
      { id: '2080:1361', filename: 'post-03.png', scale: 2 },
      { id: '2080:1041', filename: 'post-04.png', scale: 2 }
    ]
  },
  // ================= 7. LOGOS =================
  {
    folder: 'brand-logos',
    items: [
      { id: '2086:42025', filename: 'cover.png', scale: 1.5 },
      { id: '2074:4232', filename: 'logo-01.png', scale: 2 },
      { id: '2074:4238', filename: 'logo-02.png', scale: 2 },
      { id: '2074:4246', filename: 'logo-03.png', scale: 2 },
      { id: '2074:4249', filename: 'logo-04.png', scale: 2 },
      { id: '2074:4274', filename: 'logo-05.png', scale: 2 },
      { id: '2074:4277', filename: 'logo-06.png', scale: 2 },
      { id: '2074:12756', filename: 'logo-07.png', scale: 2 },
      { id: '2074:13034', filename: 'logo-08.png', scale: 2 },
      { id: '2075:5', filename: 'logo-09.png', scale: 2 }
    ]
  },
  // ================= 8. EPAM AI MARATHON HEROES =================
  {
    folder: 'ai-marathon',
    items: [
      { id: '2085:29347', filename: 'cover.png', scale: 2 },
      { id: '2085:29346', filename: 'certificates.png', scale: 2 },
      { id: '2085:29416', filename: 'header-01.png', scale: 2 },
      { id: '2085:29417', filename: 'header-02.png', scale: 2 },
      { id: '2085:29389', filename: 'header-03.png', scale: 2 }
    ]
  },
  // ================= 9. EPAM DIIA.AI CONTEST HACKATHON =================
  {
    folder: 'diia-ai',
    items: [
      { id: '2085:30714', filename: 'cover.png', scale: 2 },
      { id: '2085:30770', filename: 'card-01.png', scale: 2 },
      { id: '2085:30790', filename: 'card-02.png', scale: 2 }
    ]
  },
  // ================= 10. EPAM OFFICE SURVEY 2026 =================
  {
    folder: 'office-survey',
    items: [
      { id: '2085:32560', filename: 'cover.png', scale: 2 },
      { id: '2085:31208', filename: 'survey-2025.png', scale: 2 },
      { id: '2085:32604', filename: 'poster-01.png', scale: 2 },
      { id: '2085:33953', filename: 'poster-02.png', scale: 2 }
    ]
  },
  // ================= 11. EPAM TEAMS CHANNEL DESIGNS =================
  {
    folder: 'teams-channels',
    items: [
      { id: '2073:65', filename: 'cover.png', scale: 2 },
      { id: '2073:72', filename: 'banner-02.png', scale: 2 },
      { id: '2073:127', filename: 'banner-03.png', scale: 2 },
      { id: '2073:62', filename: 'banners-grid.png', scale: 1.5 }
    ]
  },
  // ================= 12. EPAM DIGESTS =================
  {
    folder: 'corporate-digests',
    items: [
      { id: '2082:4982', filename: 'cover.png', scale: 2 },
      { id: '2082:4985', filename: 'ebsco-newsletter-2026.png', scale: 1.5 },
      { id: '2082:2819', filename: 'newsletter-2032.png', scale: 1.5 },
      { id: '2082:5067', filename: 'ua-south-digest.png', scale: 2 },
      { id: '2082:5055', filename: 'equifax-digest.png', scale: 2 },
      { id: '2083:14204', filename: 'ai-ua-digest.png', scale: 1.5 }
    ]
  },
  // ================= 13. EPAM LETTERS =================
  {
    folder: 'email-campaigns',
    items: [
      { id: '2084:29292', filename: 'cover.png', scale: 2 },
      { id: '2084:29291', filename: 'dou-letter.png', scale: 2 },
      { id: '2084:29293', filename: 'global-letter.png', scale: 2 },
      { id: '2082:10563', filename: 'ama-letter.png', scale: 2 },
      { id: '2083:14573', filename: 'ai-sdlc-talk.png', scale: 2 },
      { id: '2083:15949', filename: 'new-year-2025.png', scale: 1.5 }
    ]
  },
  // ================= 14. EPAM WELLNESS WEEK STICKERS =================
  {
    folder: 'wellness-week',
    items: [
      { id: '2085:39866', filename: 'cover.png', scale: 2 },
      { id: '2085:39989', filename: 'stickers-vision.png', scale: 2 }
    ]
  },
  // ================= 15. EPAM AMA MIC SESSIONS =================
  {
    folder: 'ama-sessions',
    items: [
      { id: '2085:40095', filename: 'cover.png', scale: 2 },
      { id: '2085:40187', filename: 'header-02.png', scale: 2 },
      { id: '2085:40270', filename: 'header-03.png', scale: 2 },
      { id: '2085:40328', filename: 'illustration-01.png', scale: 3 },
      { id: '2085:40366', filename: 'illustration-02.png', scale: 3 },
      { id: '2085:40411', filename: 'illustration-03.png', scale: 3 },
      { id: '2085:40448', filename: 'illustration-04.png', scale: 3 }
    ]
  },
  // ================= 16. EPAM HEADERS =================
  {
    folder: 'campaign-headers',
    items: [
      { id: '2085:39729', filename: 'cover.png', scale: 2 },
      { id: '2085:39712', filename: 'benefits-header.png', scale: 2 },
      { id: '2085:39830', filename: 'donor-day-header.png', scale: 2 },
      { id: '2085:39994', filename: 'frame-7-header.png', scale: 2 }
    ]
  }
];

async function runExport() {
  console.log('🚀 Starting Comprehensive Export from "PORTFOLIO FOR SITE"...\n');

  // Navigate to PORTFOLIO FOR SITE
  await callFigwrightTool('navigate_to_page', { pageId: '2073:9' });
  await new Promise(r => setTimeout(r, 600));

  let totalSuccess = 0;
  let totalErrors = 0;

  for (const group of EXPORT_PLAN) {
    const targetDir = path.join(BASE_DIR, group.folder);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    console.log(`\n📁 Group: [${group.folder}] (${group.items.length} assets)`);

    for (const item of group.items) {
      const outPath = path.join(targetDir, item.filename);
      process.stdout.write(`  - Exporting ${item.id} -> ${item.filename} (scale: ${item.scale})... `);

      try {
        const res = await callFigwrightTool('save_screenshots', {
          nodeIds: [item.id],
          outDir: targetDir,
          format: 'PNG',
          scale: item.scale || 2
        });

        const data = JSON.parse(res.content?.[0]?.text || '{}');
        const savedPath = data.saved?.[0]?.path;

        if (savedPath && fs.existsSync(savedPath)) {
          if (savedPath !== outPath) {
            fs.copyFileSync(savedPath, outPath);
            fs.unlinkSync(savedPath); // Clean up the default filename
          }
          console.log('✓ OK');
          totalSuccess++;
        } else {
          console.log('⚠ No file returned');
          totalErrors++;
        }
      } catch (err) {
        console.log(`✗ Error: ${err.message}`);
        totalErrors++;
      }

      await new Promise(r => setTimeout(r, 300));
    }
  }

  console.log(`\n==============================================`);
  console.log(`🎉 Export Complete! Success: ${totalSuccess}, Errors: ${totalErrors}`);
  console.log(`==============================================\n`);
}

runExport();
