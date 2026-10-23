/**
 * Writes a static, fully rendered HTML file for every page into dist/ so that
 * each URL has its own <title>, meta description, and content for search
 * engines and fast first paint. The React app then hydrates in the browser.
 *
 * Run automatically by `npm run build`.
 */
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const serverDir = join(root, 'dist-server');

const template = await readFile(join(dist, 'index.html'), 'utf-8');
const { render, routes, notFoundPath, pendingPracticeInfo } = await import(
  pathToFileURL(join(serverDir, 'entry-server.js')).href
);

const fill = ({ html, head }) =>
  template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);

for (const route of routes) {
  const file = route === '/' ? join(dist, 'index.html') : join(dist, route.slice(1), 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, fill(render(route)));
  console.log(`  prerendered ${route.padEnd(16)} → ${file.slice(root.length + 1)}`);
}

await writeFile(join(dist, '404.html'), fill(render(notFoundPath)));
console.log(`  prerendered 404              → dist/404.html`);

await rm(serverDir, { recursive: true, force: true });

const pending = pendingPracticeInfo();
if (pending.length) {
  console.log('\n  Practice information still to be provided (src/config/practice.ts):');
  for (const item of pending) console.log(`    • ${item}`);
  console.log('');
}
