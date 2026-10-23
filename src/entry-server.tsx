import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';
import { pendingPracticeInfo } from './config/practice';
import { renderHeadHtml } from './seo/head';
import { metaForPath, pageMeta, prerenderRoutes } from './seo/pages';

/** Build-time only: used by scripts/prerender.mjs to write static HTML for each page. */
export function render(url: string): { html: string; head: string } {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  return { html, head: renderHeadHtml(metaForPath(url)) };
}

export const routes = prerenderRoutes.map((key) => pageMeta[key].path);
export const notFoundPath = '/__not-found__';
export { pendingPracticeInfo };
