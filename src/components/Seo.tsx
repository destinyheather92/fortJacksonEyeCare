import { useEffect } from 'react';
import { buildHeadTags } from '../seo/head';
import { pageMeta, type PageKey } from '../seo/pages';

/**
 * Keeps <title> and meta tags in sync during client-side navigation.
 * The same tags are written into each page's static HTML at build time
 * (scripts/prerender.mjs), so crawlers see them without running JavaScript.
 */
export function Seo({ page }: { page: PageKey }) {
  useEffect(() => {
    const meta = pageMeta[page];
    document.title = meta.title;

    document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
    for (const t of buildHeadTags(meta)) {
      const el = document.createElement(t.tag);
      for (const [k, v] of Object.entries(t.attrs)) el.setAttribute(k, v);
      if (t.tag === 'script') el.textContent = t.content;
      el.setAttribute('data-seo', '');
      document.head.appendChild(el);
    }
  }, [page]);

  return null;
}
