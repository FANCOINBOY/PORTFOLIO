import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function convert() {
  const input = path.join(__dirname, '..', 'public', 'images', 'achievements', 'Simar Singh Rayat_62 (2).pdf');
  const output = path.join(__dirname, '..', 'public', 'images', 'achievements', 'comsia-best-paper.png');

  if (!fs.existsSync(input)) {
    console.error('Input PDF not found:', input);
    process.exit(2);
  }

  try {
    await sharp(input, { density: 300 })
      .png({ quality: 90 })
      .toFile(output);
    console.log('Converted to', output);
  } catch (err) {
    console.error('Conversion failed:', err);
    process.exit(1);
  }
}

convert();
