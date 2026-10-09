import { cp, mkdir, readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(root, 'public');
const output = path.join(root, 'dist');
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });
async function countFiles(directory) {
  let count = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) count += await countFiles(file);
    else if (entry.isFile() && (await stat(file)).size > 0) count++;
  }
  return count;
}
console.log(`Static portfolio ready: ${await countFiles(output)} files in dist`);
