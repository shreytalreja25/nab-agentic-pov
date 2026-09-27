# NAB Quality Loop

Meeting companion for Mithun Kanchi (Head of Quality Engineering, NAB). Vite + React, static, deploys to Vercel with zero config.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Deploy to Vercel

```bash
npx vercel         # preview URL
npx vercel --prod  # production URL
```

Or push to a Git repo and import it in Vercel. The framework preset is detected as Vite; build is `npm run build`, output `dist`.
`vercel.json` sends `X-Robots-Tag: noindex` and `index.html` carries a `noindex` meta, so the page stays out of search results.

## Editing

- **All copy and demo data:** `src/content.js`
- **Live product links:** `LINKS` in `src/content.js`. `testkraft` is a placeholder until the real entry URL is confirmed.
- **Logos:** `public/brand/`, copied from `StatusNeo/StatusNeo_Branding` (see `StatusNeo/STATUSNEO_KNOWLEDGE_BASE.md`).

## Sections

I Thesis (Authentic AI Loop) · II Maturity Scan (interactive, copy summary) · III Quality Loop (animated walkthrough) · IV Banking scenarios · V Launchpad (TestKraft / NeoDataTest prompts + links) · VI Governance gates · VII 6-week pilot
