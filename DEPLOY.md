# Deploying the static export (e.g. Hostinger)

## Why images/favicon might not load

1. **Wrong upload structure** – The contents of the `out` folder must be in your **document root** (e.g. `public_html`), not inside a folder named `out`.

   **Wrong:** Uploading the `out` folder so you get:
   - `public_html/out/index.html`
   - `public_html/out/elitehub.webp`
   - `public_html/out/_next/...`  
   Then the site is at `yourdomain.com/out/` but assets still point to `yourdomain.com/elitehub.webp` → 404.

   **Correct:** Upload the **contents** of `out` into the root:
   - `public_html/index.html`
   - `public_html/elitehub.webp`
   - `public_html/_next/...`
   - `public_html/about/`
   - etc.

2. **Site in a subdirectory** – If the site must run from a subfolder (e.g. `yourdomain.com/my-site/`), set the base path and rebuild:
   ```bash
   set NEXT_PUBLIC_BASE_PATH=/my-site
   npm run build
   ```
   Then upload the contents of `out` into that subfolder (e.g. `public_html/my-site/`).

## Steps for Hostinger (or similar)

1. Run `npm run build` locally.
2. Open the `out` folder. Select **all files and folders inside it** (not the `out` folder itself).
3. In Hostinger File Manager, go to `public_html` (or your domain’s root).
4. Upload so that `index.html`, `elitehub.webp`, `_next`, `about`, `contact`, `media`, `properties` (and any other files from `out`) are **directly inside** `public_html`.
5. If you use a subdirectory, set `NEXT_PUBLIC_BASE_PATH` to that path, rebuild, then upload the new `out` contents into that subfolder.

## After uploading

- Homepage: `https://yourdomain.com/` or `https://yourdomain.com/index.html`
- Assets (images, favicon) will load from the same origin (e.g. `https://yourdomain.com/elitehub.webp`).
