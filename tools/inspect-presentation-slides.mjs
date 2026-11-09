import { callFigwrightTool } from './figwright-cli.mjs';

async function inspectSlides() {
  await callFigwrightTool('navigate_to_page', { pageId: '2041:11708' });
  const pres = await callFigwrightTool('get_node', { nodeId: '2041:15036', depth: 4 });
  const data = JSON.parse(pres.content[0].text);
  const slides = data.node.children || [];

  console.log(`Found ${slides.length} slides in presentation 2025:\n`);

  function extractText(node, texts = []) {
    if (node.characters && typeof node.characters === 'string' && node.characters.trim()) {
      texts.push(node.characters.trim());
    }
    if (node.children) {
      for (const c of node.children) extractText(c, texts);
    }
    return texts;
  }

  for (let i = 0; i < slides.length; i++) {
    const s = slides[i];
    const texts = extractText(s);
    console.log(`--- SLIDE ${i + 1} [${s.id}] ---`);
    if (texts.length > 0) {
      console.log(texts.slice(0, 10).join('\n'));
    } else {
      console.log('(No direct text found, visual/image slide)');
    }
    console.log('\n');
  }
}

inspectSlides();
