const fs = require('fs');
const path = require('path');

async function downloadVideo(url, filename) {
  try {
    const response = await fetch('https://api.cobalt.tools/api/json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: url })
    });
    const data = await response.json();
    
    if (data && data.status === 'redirect' || data.status === 'stream') {
      const videoRes = await fetch(data.url);
      const buffer = await videoRes.arrayBuffer();
      fs.writeFileSync(path.join(__dirname, 'src', 'assets', filename), Buffer.from(buffer));
      console.log(`Downloaded ${filename}`);
    } else if (data && data.status === 'picker') {
        const videoRes = await fetch(data.picker[0].url);
        const buffer = await videoRes.arrayBuffer();
        fs.writeFileSync(path.join(__dirname, 'src', 'assets', filename), Buffer.from(buffer));
        console.log(`Downloaded ${filename} from picker`);
    } else {
      console.log(`Failed to get download URL for ${url}`, data);
    }
  } catch (error) {
    console.error(`Error downloading ${url}:`, error);
  }
}

async function main() {
  await downloadVideo('https://www.instagram.com/p/DYFjEcWxm7B/', 'depoimento1.mp4');
  await downloadVideo('https://www.instagram.com/p/DYXJGWoS2AE/', 'depoimento2.mp4');
  await downloadVideo('https://www.instagram.com/p/DXh_ITmEYvF/', 'depoimento3.mp4');
}

main();
