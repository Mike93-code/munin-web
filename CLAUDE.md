# CLAUDE.md — munin-web (marketing site for the Munin app)

## What this is

The public website for **Munin** ("Munin: Gratitude Journal"), the iOS gratitude
journal app. Two jobs:

1. **Privacy Policy** — a hosted, public policy page. **Apple requires a public
   Privacy Policy URL** to publish the app, so this is the release-critical part.
2. **Landing page** — icon, tagline, screenshots, App Store link. Positioning:
   privacy-first, minimalist — "no account, no cloud, your gratitude stays on
   your phone".

This is a **separate project** from the app (which lives in `../Tacksamhet-2.0`,
Expo/React Native). Do not mix the two toolchains.

## Working rules (same spirit as the app project)

1. **Plan before coding.** One user story per commit. Commit format:
   `feat: <story>` / `fix: <bug>`.
2. **Never expand scope.** No blog, no CMS, and **no analytics/tracking** — that
   would contradict the privacy-first message. New ideas go to the Notion backlog.
3. **Explain in plain language.** The product owner is a non-developer and
   verifies in a browser, not by reading code. After each change, say in 2–3
   non-technical sentences what changed and how to check it.
4. **Boring, well-documented tools only.**

## Tech stack (decided)

- **Astro** (static output, no adapter) + **TypeScript strict**.
- **Hosting:** Vercel (auto-deploy on push; Astro is auto-detected, zero config).
- Content in **English (default) + Swedish**. Reuse the app's privacy-policy text
  from `../Tacksamhet-2.0/src/i18n/en.ts` + `sv.ts` so app and web match exactly.

## Open items (product-owner actions, tracked in Notion)

- **Domain** not yet registered — candidates `muninjournal.app` / `getmunin.app`.
  Placeholder lives in `astro.config.mjs` (`site`). Change it there once locked.
- App Store badge/link — filled in at launch.
- Screenshots — placeholders until the real ones are ready.

## Commands

```bash
npm install       # once
npm run dev       # local preview (PO opens the shown URL in a browser)
npm run build     # production build into dist/
npm run check     # Astro + TypeScript typecheck
```
