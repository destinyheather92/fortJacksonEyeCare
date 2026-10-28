# Team photos

All team photos use the same **4:5 portrait** frame (export at **1200×1500**) so the grid looks consistent.
Head-and-shoulders, similar background and lighting for everyone, subject centered (photos are cropped with `object-fit: cover`, never stretched).

| File | Used for |
|---|---|
| `doctor.jpg` | Dr. Hardison: Home page provider preview + Meet the Team feature. Generated from `asset-originals/team/doctor.jpg` by `npm run images` (low-resolution original; replace when a better headshot is available) |
| `doyle.jpg` | Kashia Doyle, Office Manager. Generated from `asset-originals/team/doyle.jpg` by `npm run images` |
| `alysia.jpeg` | Alysia, Optometry Assistant/Technician. Generated from `asset-originals/team/alysia.jpeg` by `npm run images` |
| `ashley.jpg` | Ashley. Generated from `asset-originals/team/ashley.jpg` by `npm run images` |
| `photo-coming-soon.svg` | Neutral placeholder portrait for team members without a photo yet (not currently in use) |

To add a new photo: put the original in `asset-originals/team/`, add a line to `scripts/optimize-images.mjs`,
run `npm run images -- team`, then point that person's entry in `src/config/images.ts` at the new file.
