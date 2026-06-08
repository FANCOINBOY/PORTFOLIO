import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {
  const pdfPath = path.join(__dirname, '..', 'public', 'images', 'achievements', 'Simar Singh Rayat_62 (2).pdf');
  const outPath = path.join(__dirname, '..', 'public', 'images', 'achievements', 'comsia-best-paper.png');

  if (!fs.existsSync(pdfPath)) {
    console.error('PDF not found:', pdfPath);
    process.exit(2);
  }

  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  try {
    const page = await browser.newPage();
    // Set a large viewport to capture a high-resolution screenshot
    await page.setViewport({ width: 1600, height: 1200, deviceScaleFactor: 2 });
    const fileUrl = 'file:///' + pdfPath.split('\\').join('/');
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    // Wait a moment for the browser PDF viewer to render
    await new Promise((res) => setTimeout(res, 1000));
    // Take full page screenshot
    await page.screenshot({ path: outPath, fullPage: true });
    console.log('Saved PNG to', outPath);
  } catch (err) {
    console.error('Puppeteer conversion failed:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
