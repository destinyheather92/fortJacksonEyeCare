import { images } from '../config/images';
import { isSchedulingConfigured, practice } from '../config/practice';
import type { PageMeta } from './pages';

/**
 * A framework-free description of a <head> tag. The build-time prerenderer
 * turns these into HTML strings; the client <Seo> component applies the same
 * list to the live document on navigation — so both always agree.
 */
export type HeadTag =
  | { tag: 'meta'; attrs: Record<string, string> }
  | { tag: 'link'; attrs: Record<string, string> }
  | { tag: 'script'; attrs: Record<string, string>; content: string };

export function absoluteUrl(path: string): string | null {
  return practice.siteUrl ? `${practice.siteUrl.replace(/\/$/, '')}${path}` : null;
}

/**
 * schema.org MedicalClinic data. Returned only when the essential verified
 * details (address and phone) exist — nothing is emitted from placeholders.
 * Deliberately excludes ratings, reviews, prices, and insurance.
 */
export function buildStructuredData(): Record<string, unknown> | null {
  const { address, phone } = practice;
  if (!address || !phone) return null;

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: practice.name,
    medicalSpecialty: 'Optometric',
    telephone: phone.tel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.suite ? `${address.street}, ${address.suite}` : address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: 'US',
    },
    employee: {
      '@type': 'Person',
      name: 'Andrew Hardison',
      honorificPrefix: 'Dr.',
      honorificSuffix: 'OD, MPH',
    },
  };

  const url = absoluteUrl('/');
  if (url) data.url = url;
  if (practice.email) data.email = practice.email;
  if (practice.social.length) data.sameAs = practice.social.map((s) => s.url);
  if (isSchedulingConfigured()) {
    data.potentialAction = {
      '@type': 'ReserveAction',
      target: practice.schedulingUrl,
      name: 'Schedule an appointment',
    };
  }
  return data;
}

export function buildHeadTags(meta: PageMeta): HeadTag[] {
  const tags: HeadTag[] = [
    { tag: 'meta', attrs: { name: 'description', content: meta.description } },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: practice.name } },
    { tag: 'meta', attrs: { property: 'og:title', content: meta.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: meta.description } },
    { tag: 'meta', attrs: { property: 'og:locale', content: 'en_US' } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: images.ogShare.ready ? 'summary_large_image' : 'summary' } },
  ];

  if (meta.noindex) {
    tags.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex' } });
  }

  const canonical = meta.noindex ? null : absoluteUrl(meta.path);
  if (canonical) {
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: canonical } });
    tags.push({ tag: 'meta', attrs: { property: 'og:url', content: canonical } });
  }

  const ogImage = images.ogShare.ready ? absoluteUrl(images.ogShare.path) : null;
  if (ogImage) {
    tags.push({ tag: 'meta', attrs: { property: 'og:image', content: ogImage } });
    tags.push({ tag: 'meta', attrs: { property: 'og:image:alt', content: images.ogShare.alt } });
  }

  if (meta.structuredData) {
    const data = buildStructuredData();
    if (data) {
      tags.push({
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        content: JSON.stringify(data).replace(/</g, '\\u003c'),
      });
    }
  }
  return tags;
}

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Serializes the page's head for the static prerender. */
export function renderHeadHtml(meta: PageMeta): string {
  const attrs = (a: Record<string, string>) =>
    Object.entries({ ...a, 'data-seo': '' })
      .map(([k, v]) => (v === '' ? k : `${k}="${escapeAttr(v)}"`))
      .join(' ');

  const lines = [`<title>${escapeAttr(meta.title)}</title>`];
  for (const t of buildHeadTags(meta)) {
    lines.push(t.tag === 'script' ? `<script ${attrs(t.attrs)}>${t.content}</script>` : `<${t.tag} ${attrs(t.attrs)} />`);
  }
  return lines.join('\n    ');
}
