# Fort Jackson Eye Center website

A multi-page marketing website for Fort Jackson Eye Center, built with React, TypeScript, and Vite.
Every page is prerendered to static HTML at build time, with its own title, meta description, and
content, so it loads fast, is search-engine friendly, and can be hosted on any static web host.

The site does **not** collect or store patient health information. Appointment scheduling is handled
by the practice's existing secure EHR/scheduling portal, and every "Schedule an Appointment" button links there.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (first time only) |
| `npm run dev` | Local development server with live reload |
| `npm run build` | Type-check, build, and prerender every page into `dist/`. It ends by listing any practice info still missing. |
| `npm run preview` | Serve the finished `dist/` build locally (http://localhost:4173) |
| `npm run images` | Regenerate web-sized photos from `asset-originals/` (`npm run images -- team` processes only matching paths) |

## Updating practice information

All office details live in **one file**: [`src/config/practice.ts`](src/config/practice.ts).

| Setting | Effect |
|---|---|
| `EHR_SCHEDULING_URL` | The secure scheduling portal (the practice's iTrust booking page). Every Schedule button uses it and opens it in a new tab. If it's ever cleared, Schedule buttons go to the Contact page. |
| `address` | Shown in the footer (as a Google Maps link), home page, and Contact page. Also drives the Google Maps embed and directions links, adds the city to page titles and descriptions, and (together with `phone`) adds structured data for search engines. |
| `phone` | Header (large screens), footer, "Call Our Office" buttons, and `tel:` links |
| `officeHours`, `email`, `fax` | Footer and Contact page (email and fax are optional and hidden until set) |
| `insurance`, `insurancePlans` | The practice's insurance statement and the plans it has confirmed, shown on the home page and Contact page with a note to verify benefits. Only list plans the practice confirms. |
| `visitorAccess`, `visitorPassUrl` | The "Visiting from off post?" note on the home page and Contact page, linking to Fort Jackson's official visitor-pass page |
| `mapEmbedUrl` | Optional. While `null`, the home and Contact page maps use Google's key-free embed of `address` (no API key). To override, paste a Google Maps → Share → Embed a map `src` value here. |
| `siteUrl` | Final domain. Enables canonical URLs and Open Graph link previews. |
| `social` | Social media links in the footer |
| `contactFormEndpoint` | Leave `null` unless the practice approves a form service. While it's null, the Contact page shows contact details instead of a form. |

Missing values appear on the site as labeled **"To be added"** placeholders. Never replace them with
guessed information.

Other content:

- **Services:** [`src/data/services.ts`](src/data/services.ts)
- **Team members and Dr. Hardison's bio:** [`src/data/team.ts`](src/data/team.ts). Add a staff member by adding an entry; a card appears automatically. `role` is optional and is hidden when not set.
- **Patients we serve (military & civilian welcome message):** [`src/data/patients.ts`](src/data/patients.ts)
- **Eye Health topics:** [`src/data/eyeHealth.ts`](src/data/eyeHealth.ts)
- **Navigation:** [`src/data/navigation.ts`](src/data/navigation.ts)
- **Page titles and meta descriptions:** [`src/seo/pages.ts`](src/seo/pages.ts)

## Adding photos

Every photo slot is listed in [`src/config/images.ts`](src/config/images.ts), with its file path, size, and
alt text. A slot shows a labeled placeholder (with the expected file name) until its entry is marked `ready: true`.

**Option A (already sized):** Save the file at the listed path under `public/`, for example
`public/assets/team/dr-andrew-hardison.jpg`. Then set `ready: true`.

**Option B (straight from a phone or camera):** Put the original in `asset-originals/<folder>/`, add a line to
[`scripts/optimize-images.mjs`](scripts/optimize-images.mjs), and run `npm run images`. This resizes and crops
the photo without stretching it and removes metadata such as GPS location. Then set `ready: true`.

Each `public/assets/*/README.md` lists what belongs in that folder:

| Folder | Contents |
|---|---|
| `public/assets/team/` | Headshots, all **4:5 portrait (1200×1500)** so the team grid stays consistent |
| `public/assets/office/` | Exam rooms, waiting area, hallway, entrance (supplied) |
| `public/assets/services/` | Photos for individual services (currently Pexels stock photos; sources listed in its README) |
| `public/assets/general/` | Eye Health page image, social link-preview image |

## Hosting

Upload the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or a
standard web server). Each page is a real file (`dist/about/index.html` and so on), so no server-side
configuration is needed. Configure the host to use `dist/404.html` for missing pages; most hosts do this
automatically.

## Project structure

```
src/
  config/     practice.ts (office info), images.ts (photo manifest)
  data/       services, team, eye health topics, navigation
  seo/        page titles/descriptions, meta tags, structured data
  components/ Header, Footer, ScheduleButton, ImageSlot, TeamMemberCard, …
  pages/      Home, About, Services, Meet the Team, Eye Health, Contact, 404
  styles/     tokens.css (colors, type, spacing), base, layout, components, pages
scripts/
  prerender.mjs        writes static HTML for each page after the build
  optimize-images.mjs  produces web-ready photos from asset-originals/
asset-originals/       full-size original photos (not published)
public/assets/         web-ready images served by the site
```

## Content notes

- Dr. Hardison's biography is used exactly as provided. His credentials ("OD, MPH") were confirmed by him.
- Staff biographies (Kashia Doyle, Alysia) are used as provided. Alysia's card uses a neutral placeholder
  photo (`public/assets/team/photo-coming-soon.svg`) until her photo is supplied.
- Dr. Hardison's photo was supplied at only 226×325, so it has been upscaled and lightly retouched (no
  background replacement or facial changes). Replace it with a higher-resolution professional headshot.
- The site includes no testimonials, reviews, ratings, statistics, awards, or pricing. Insurance shows the
  practice's statement and the plans it confirmed, plus a note to verify benefits; coverage is never promised.
- The practice name is "Fort Jackson Eye Center" (confirmed; some client materials said "Eye Care").
  The practice has no logo, so the header and footer show
  only the text wordmark (`src/components/Logo.tsx`). Do not create a logo unless the practice provides one.
- The Services, About, and Eye Health pages use stock photos from Pexels (free for commercial use); see
  `public/assets/services/README.md` and `public/assets/general/README.md`. Replace them with real practice
  photos when available.
- The site does not claim to be "HIPAA compliant."
- There is no website privacy page (removed at the practice's request). If a contact form, analytics, or
  the practice's Notice of Privacy Practices is added later, add a page or footer link for it.
