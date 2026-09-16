# Hero art spec

Two files. Both are currently **placeholders** — overwrite them in place and
keep the filenames exactly. No code changes needed when the real art lands.

| File | Size | Aspect | Used when |
|---|---|---|---|
| `assets/hero/hero.jpg` | 1800 × 2000 | 9:10 portrait | viewport wider than 900px |
| `assets/hero/hero-wide.jpg` | 1800 × 1000 | 9:5 landscape | viewport 900px and under |

## Why two files

The art is full-bleed — it fills its box completely with `object-fit: cover`,
which crops rather than letterboxes. On desktop the box is a tall portrait
column; on a phone the layout stacks and the box becomes a wide banner. One
portrait file forced into a banner loses about two thirds of its height, so
the wide crop is a separate file.

## Safe area

`cover` crops from the centre outward, and how much it crops depends on the
visitor's screen. Anything that must survive goes in the middle.

- **`hero.jpg`** — keep the subject inside the centre **70%** (a 1260 × 1260
  square, centred). Measured range of the rendered box is 0.63 to 0.90 aspect,
  which corresponds exactly to that square. The pink guide in the placeholder
  marks it.
- **`hero-wide.jpg`** — keep the subject inside the centre **86% wide × 80%
  tall**. Rendered aspect runs 1.5 (small phone) to 2.25 (900px), so the
  vertical crop is the tight one here.

Don't put text or anything that reads as a hard edge near the outer margins —
it will get sliced on some screens.

## Everything else

- The art sits against `--plum-dark` (`#3A1025`) with a pink `--pink`
  (`#C9538C`) accent. Palette is in `:root` at the top of `index.html`.
- Right side of the hero is white/pink type on the dark plum, right-aligned.
  Busy detail on the **right edge** of `hero.jpg` will fight the headline —
  keep that side quieter.
- JPEG, quality ~85. Keep each file under ~400KB; it's the largest-contentful
  paint element, so weight is felt directly.
- **Alt text**: `index.html` has `alt=""` with a TODO. Once the art exists,
  describe it there. Empty alt is only correct if it's purely decorative.
