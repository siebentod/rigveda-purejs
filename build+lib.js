import fs from 'fs/promises'; // Используем асинхронные функции для работы с файлами
import path from 'path';

export async function copyFolder(src, dest) {
  // Создаем папку назначения
  await fs.mkdir(dest, { recursive: true });

  // Читаем содержимое папки
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyFolder(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}
