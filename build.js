import fs from 'fs/promises';
import path from 'path';
import { copyFolder } from './build_lib.js';
import { itemHTMLTemplate, aboutHTML } from './build_item-html-template.js';

const appDir = path.resolve('./app');
const publicDir = path.resolve('./app/public');
const dataDir = path.resolve('./app/public/data/json');

async function recreatePublicFolder() {
  await fs.rm(publicDir, { recursive: true, force: true });

  const entries = await fs.readdir(appDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(appDir, entry.name);
    const destPath = path.join(publicDir, entry.name);

    if (entry.name === 'public') continue;

    if (entry.isDirectory()) {
      await copyFolder(srcPath, destPath);
    } else {
      await fs.mkdir(path.dirname(destPath), { recursive: true });
      await fs.copyFile(srcPath, destPath);
    }
  }
}

await recreatePublicFolder();

try {
  const files = await fs.readdir(dataDir);

  for (const file of files) {
    const filePath = path.join(dataDir, file);

    const data = await fs.readFile(filePath, 'utf8');
    const item = JSON.parse(data);

    if (item.id !== 'about') {
      await fs.writeFile(
        path.join(publicDir, `${item.id}.html`),
        itemHTMLTemplate(item), // function with html text
        'utf8'
      );
    } else {
      await fs.writeFile(
        path.join(publicDir, `${item.id}.html`),
        aboutHTML, // /about html
        'utf8'
      );
    }
  }

  console.log('HTML страницы успешно сгенерированы.');
} catch (err) {
  console.error('Произошла ошибка при обработке файлов:', err);
}
