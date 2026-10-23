# Office photos

These files are **generated** from the full-size originals in `asset-originals/office/` by `npm run images`
(resized, auto-rotated, and stripped of metadata, including phone GPS location).

| File | Size | Used for |
|---|---|---|
| `exam-room.jpg` | 1600×1200 | Home page hero |
| `waiting-area.jpg` | 1600×1200 | About page header |
| `exam-room-2.jpg` | 1200×1600 | About page sidebar |
| `hallway.jpg` | 1200×1600 | Contact page, "Finding our office" |
| `office-entrance.jpg` | 1200×1600 | Contact page, "Finding our office" |

To add or replace a photo, put the original in `asset-originals/office/`, add or edit its line in
`scripts/optimize-images.mjs`, run `npm run images`, and make sure the matching entry in
`src/config/images.ts` has `ready: true`.
