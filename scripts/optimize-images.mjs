/**
 * Turns full-size original photos (asset-originals/) into web-ready files in
 * public/assets/. Run with:  npm run images
 * To process only some photos, pass part of a path:  npm run images -- team
 *
 * - Auto-rotates using the camera's orientation data
 * - Resizes/crops to the exact size each slot expects (never stretches)
 * - Strips ALL metadata, including phone GPS location data
 *
 * To add a photo: put the original in asset-originals/<folder>/, add a line
 * below, run `npm run images`, then set `ready: true` for that image in
 * src/config/images.ts.
 */
import { mkdir, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const only = process.argv[2];

/** source (in asset-originals/) → output (in public/), size, and crop focus. */
const sources = [
  { from: 'office/IMG_5447.jpeg', to: 'assets/office/exam-room.jpg', width: 1600, height: 1200 },
  { from: 'office/image0 (1).jpeg', to: 'assets/office/exam-room-2.jpg', width: 1200, height: 1600 },
  { from: 'office/image2 (2).jpeg', to: 'assets/office/waiting-area.jpg', width: 1600, height: 1200 },
  { from: 'office/image3 (1).jpeg', to: 'assets/office/office-entrance.jpg', width: 1200, height: 1600 },
  { from: 'office/image5.jpeg', to: 'assets/office/hallway.jpg', width: 1200, height: 1600 },
  // Not used on the site (identifiable bystanders + Exchange branding): office/image4 (1).jpeg

  // Supplied at only 226×325, so it is upscaled 2× and gently retouched (see retouchPortrait).
  // TODO: Replace with a higher-resolution headshot when available; the background still needs professional editing.
  { from: 'team/doctor.jpg', to: 'assets/team/doctor.jpg', width: 452, height: 565, position: 'north', retouch: true, quality: 88 },
  { from: 'team/doyle.jpg', to: 'assets/team/doyle.jpg', width: 1200, height: 1500 },

  // Stock photos from Pexels (free for commercial use, no attribution required). Sources: public/assets/services/README.md
  { from: 'stock/pexels-6749708-eye-exam-slit-lamp.jpg', to: 'assets/services/comprehensive-eye-exam.jpg', width: 1200, height: 900 },
  { from: 'stock/pexels-8317710-family-grandparents.jpg', to: 'assets/services/family-eye-care.jpg', width: 1200, height: 900 },
  { from: 'stock/pexels-5842842-contact-lens-fingertip.jpg', to: 'assets/services/contact-lens-care.jpg', width: 1200, height: 900 },
  { from: 'stock/pexels-326536-eye-close-up.jpg', to: 'assets/general/eye-health.jpg', width: 1600, height: 1200 },
];

/**
 * Gentle, non-generative clean-up for a low-resolution portrait: softens JPEG
 * blockiness, recovers slightly blown highlights, and sharpens. It never alters
 * facial features or replaces the background.
 */
async function retouchPortrait(image) {
  const deblocked = await image.median(3).png().toBuffer();
  return sharp(deblocked)
    .gamma(2.2, 2.5)
    .linear(1.05, -4)
    .modulate({ saturation: 1.06 })
    .sharpen({ sigma: 1.1, m1: 0.8, m2: 2 });
}

for (const { from, to, width, height, position = 'centre', retouch = false, quality = 78 } of sources) {
  if (only && !from.includes(only) && !to.includes(only)) continue;
  const input = join(root, 'asset-originals', from);
  const output = join(root, 'public', to);
  await mkdir(dirname(output), { recursive: true });
  let image = sharp(input).rotate().resize(width, height, { fit: 'cover', position });
  if (retouch) image = await retouchPortrait(image);
  await image.jpeg({ quality, progressive: true, mozjpeg: true }).toFile(output);
  const kb = Math.round((await stat(output)).size / 1024);
  console.log(`  ${from.padEnd(26)} → public/${to}  (${width}×${height}, ${kb} KB)`);
}
