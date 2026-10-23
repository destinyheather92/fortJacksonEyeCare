import { existsSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * `npm run preview` only: serve each prerendered page (dist/about/index.html
 * for /about) and dist/404.html for unknown paths — the same way a static
 * host serves the production build.
 */
function servePrerenderedPages(): Plugin {
  return {
    name: 'serve-prerendered-pages',
    configurePreviewServer(server) {
      const outDir = resolve(server.config.root, server.config.build.outDir);
      server.middlewares.use((req, _res, next) => {
        const path = decodeURIComponent((req.url ?? '/').split('?')[0]);
        if (path === '/' || extname(path)) return next();
        req.url = existsSync(join(outDir, path, 'index.html')) ? `${path.replace(/\/$/, '')}/index.html` : '/404.html';
        next();
      });
    },
  };
}

export default defineConfig(({ isPreview }) => ({
  plugins: [react(), servePrerenderedPages()],
  // Dev uses single-page fallback so client routes work without a build.
  appType: isPreview ? 'mpa' : 'spa',
}));
