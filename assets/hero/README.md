# Hero art

One file: `assets/hero/hero-wide.jpg`, 1800 × 1000 (9:5). It's a full-bleed
banner on top of the page at every screen size.

- `object-fit: cover` fills the box and trims the rest. On phones the box is
  close to the file's shape; on wide screens it's wider, so the top and bottom
  get trimmed and the crop is biased toward the upper part (the faces).
- Keep the subject inside the centre 86% wide × 80% tall.
- JPEG, quality ~85, under ~400KB. It's the largest-contentful-paint element.
- Alt text lives on the `<img>` in `index.html`; update it if the art changes.
