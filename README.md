# MarketHub (demo)

Social-commerce style front end: marketplace, product detail, cart & checkout, video ad feed, messaging UI, seller dashboard, and admin screens. Data is **mock-only** (no API).

## Scripts

- `npm run dev` — Vite dev server
- `npm run build` — TypeScript check + production build
- `npm run lint` — ESLint
- `npm run preview` — Preview production build

## Stack

React 19, TypeScript, Vite 8, React Router 7, Tailwind CSS 4, Framer Motion, Lucide icons.

## Notes

- Fonts load from Google Fonts via `index.html` (avoids CSS `@import` ordering issues with Tailwind).
- Lucide no longer ships some brand icons; the footer uses generic icons instead.
- **Sign out** clears the demo user; **Sign in** restores the default mock account.
- **Settings** (`/settings`) is wired for theme toggle and placeholder rows.

If you have a separate implementation plan document, drop it in the project root and we can align features (e.g. real auth, API, payments) in a follow-up.
