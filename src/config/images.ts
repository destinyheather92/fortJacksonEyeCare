/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  IMAGE MANIFEST — every photo slot on the site.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * To add a real photo:
 *   1. Save the file at the exact `path` below, inside /public
 *      (e.g. public/assets/team/dr-andrew-hardison.jpg).
 *   2. Change that entry's `ready` from `false` to `true`.
 *
 * While `ready` is false, the site shows a labeled placeholder that names the
 * expected file, so no broken-image requests are made.
 *
 * `width` / `height` are the recommended export size. The component crops with
 * `object-fit: cover`, so photos are never stretched — keep subjects centered.
 */

export interface SiteImage {
  /** Public URL path; the file lives at /public + path. */
  path: string;
  /** Descriptive alt text used once the real image is in place. */
  alt: string;
  width: number;
  height: number;
  ready: boolean;
  /** Short note about what the photo should show — displayed on the placeholder. */
  brief: string;
}

const image = (img: SiteImage): SiteImage => img;

export const images = {
  /* ── /assets/general ──────────────────────────────────────── */
  homeHero: image({
    // Uses the exam room photo. To use a different hero, change the path (e.g. /assets/general/home-hero.jpg).
    path: '/assets/office/exam-room.jpg',
    alt: 'Exam room at Fort Jackson Eye Center with an exam chair, phoropter, and slit lamp',
    width: 1600,
    height: 1200,
    ready: true,
    brief: 'Warm, welcoming practice photo for the home page hero (4:3)',
  }),
  eyeHealthHero: image({
    // Stock photo (Pexels). Replace with a practice photo if one becomes available.
    path: '/assets/general/eye-health.jpg',
    alt: 'Close-up of a healthy eye with an amber iris',
    width: 1600,
    height: 1200,
    ready: true,
    brief: 'General eye-health image for the Eye Health page (4:3)',
  }),
  ogShare: image({
    path: '/assets/general/social-share.jpg',
    alt: 'Fort Jackson Eye Center',
    width: 1200,
    height: 630,
    ready: false,
    brief: 'Link preview image for social media / texts (1200×630)',
  }),

  /* ── /assets/office  (generated from asset-originals/ by `npm run images`) ── */
  officeInterior: image({
    path: '/assets/office/waiting-area.jpg',
    alt: 'Waiting area at Fort Jackson Eye Center with seating and framed diplomas on the wall',
    width: 1600,
    height: 1200,
    ready: true,
    brief: 'Reception or waiting area (4:3)',
  }),
  examRoom2: image({
    path: '/assets/office/exam-room-2.jpg',
    alt: 'Exam room at Fort Jackson Eye Center with eye exam equipment and a poster of eye anatomy',
    width: 1200,
    height: 1600,
    ready: true,
    brief: 'Second exam room (3:4 portrait)',
  }),
  officeEntrance: image({
    path: '/assets/office/office-entrance.jpg',
    alt: 'Glass-door entrance to the eye care office, with the reception area visible inside',
    width: 1200,
    height: 1600,
    ready: true,
    brief: 'Office entrance (3:4 portrait)',
  }),
  officeHallway: image({
    path: '/assets/office/hallway.jpg',
    alt: 'Hallway inside the Fort Jackson Exchange with the entrance to the eye care office',
    width: 1200,
    height: 1600,
    ready: true,
    brief: 'Approach to the office (3:4 portrait)',
  }),

  /* ── /assets/services  (stock photos from Pexels; alt text describes the photo, not the practice) ── */
  serviceComprehensive: image({
    path: '/assets/services/comprehensive-eye-exam.jpg',
    alt: 'A patient resting his chin on a slit lamp during an eye examination',
    width: 1200,
    height: 900,
    ready: true,
    brief: 'An eye exam in progress (4:3)',
  }),
  serviceFamily: image({
    path: '/assets/services/family-eye-care.jpg',
    alt: 'Smiling grandparents with their young granddaughter; the grandmother wears glasses',
    width: 1200,
    height: 900,
    ready: true,
    brief: 'Family or patients of different ages (4:3)',
  }),
  serviceContactLens: image({
    path: '/assets/services/contact-lens-care.jpg',
    alt: 'A soft contact lens balanced on a fingertip beside a lens case',
    width: 1200,
    height: 900,
    ready: true,
    brief: 'Contact lens fitting or lenses (4:3)',
  }),

  /* ── /assets/team  (all team photos 4:5 portrait, 1200×1500) ── */
  drHardison: image({
    // Generated from asset-originals/team/doctor.jpg by `npm run images`. The supplied photo is only
    // 226×325, so this is a 2× upscale. TODO: Replace with a higher-resolution professional headshot.
    path: '/assets/team/doctor.jpg',
    alt: 'Dr. Andrew Hardison, Fort Jackson Eye Center',
    width: 452,
    height: 565,
    ready: true,
    brief: 'Professional headshot, 4:5 portrait, head and shoulders',
  }),
  kashiaDoyle: image({
    // Generated from asset-originals/team/doyle.jpg by `npm run images`.
    path: '/assets/team/doyle.jpg',
    alt: 'Kashia Doyle, Office Manager at Fort Jackson Eye Center',
    width: 1200,
    height: 1500,
    ready: true,
    brief: 'Staff headshot, 4:5 portrait',
  }),
  alysia: image({
    // Neutral placeholder until Alysia's photo is provided. Then save it as /assets/team/alysia.jpg
    // (4:5 portrait, 1200×1500), update this path, and change the alt text to
    // 'Alysia, Optometry Assistant/Technician at Fort Jackson Eye Center'.
    path: '/assets/team/photo-coming-soon.svg',
    alt: 'Photo of Alysia coming soon',
    width: 1200,
    height: 1500,
    ready: true,
    brief: 'Staff headshot, 4:5 portrait',
  }),
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
