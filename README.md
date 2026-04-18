# acme-site

Website for **Acme Coffee Roasters** — a small-batch coffee roastery on Maple
Street in Springfield. Two roasters, one drum, Saturday mornings only.

## Local dev

```sh
npm install
npm run dev
```

Astro dev server boots on `http://localhost:4321`.

## Structure

- `src/pages/` — one `.astro` file per route.
- `src/layouts/Base.astro` — site chrome (masthead, nav, footer).
- `public/` — static assets served as-is.

## Editing

Prose lives directly in the `.astro` files — open the page, edit, save. No CMS.
If you want a new page, add `src/pages/<name>.astro` and link it from the nav.

---

Hosted on [pliosoft](https://pliosoft.com).
