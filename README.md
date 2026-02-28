# Strikepoint Security Marketing Website

Production-ready Next.js marketing site for **Strikepoint Security** and the **SafeLink** phishing link analyzer.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`.
5. Output: `.next` (default).
6. Add your production domain (for example `www.strikepointsec.com`).

## Brand asset swap notes

- **Logo placeholder**: update the header branding text in `components/header.tsx` (replace with your logo/image component when ready).
- **Screenshots / report visuals**: update the mock content in `app/products/safelink/page.tsx` and any future image assets in `public/`.
- **Brand colors**: edit Tailwind extension values in `tailwind.config.ts` and shared utility classes in `app/globals.css`.

## File tree

```text
app/
  about/page.tsx
  contact/page.tsx
  how-it-works/page.tsx
  pricing/page.tsx
  privacy/page.tsx
  products/safelink/page.tsx
  terms/page.tsx
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  footer.tsx
  header.tsx
  page-shell.tsx
  site-data.ts
  ui.tsx
```
