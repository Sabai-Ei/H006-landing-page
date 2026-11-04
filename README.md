# WaterSource H006 landing page

Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind CSS 4. Implements the approved Claude Design (1440 / 390 artboards).

## Run locally
```bash
npm install
cp .env.example .env.local   # optional
npm run dev                  # http://localhost:3000
npm run typecheck && npm run lint && npm run build && npm start
```
Requires Node 20.9+ (tested on 22).

## Where things live
- `src/config/site.ts` — single source for prices (S$450 usual; S$350 / S$590 / S$750), phone `+65 6933 8471`, merchant details and feature flags.
- `src/content/` — copy (functions, how-it-works, Health Check, FAQ, navigation, gallery).
- `src/components/` — Header, Hero, ProductOverview, FourFunctions, HowItWorks, VideoPlayer, HealthCheck, PricingOffers, FAQ, FinalCTA, Footer, StructuredData.
- `src/app/globals.css` — design tokens (`@theme`) and the approved background system.
- `src/lib/structured-data.ts` — JSON-LD (Organization, Brand, Product, Offer, BreadcrumbList, FAQPage), built from the same config/content as the visible page.
- `public/images/` — supplied H006 imagery; `public/og-image.jpg` — social image (screenshot of the hero; replace with a designed asset if desired).

## Feature flags (environment variables, read at build time)
| Variable | Default | Effect |
|---|---|---|
| `SHOW_HEALTH_CHECK` | `false` in production, `true` in dev | Controls the Health Check section, its 2 FAQ entries, nav/footer links and FAQ schema entries together. |
| `SHOW_DEMO_VIDEO` | `false` | Shows the optional video block. Add `public/video/h006-demo.mp4` and `public/images/h006-demo-poster.jpg` first. |
| `NEXT_PUBLIC_SITE_URL` | empty | Enables canonical URL, `metadataBase`, sitemap entry, absolute JSON-LD ids. Set once the domain is confirmed. |

Because flags are read at build time, changing one requires a rebuild.

## Deployment (not performed)
Any Node host or Vercel works: set the env vars above, run `npm run build`, then `npm start` (or deploy the repo). Keep `SHOW_HEALTH_CHECK` unset/false until the Health Check claims and terms are approved.

## Enquiry flow
All "Enquire Now" buttons currently go to `#enquire` (pricing, FAQ) or `tel:+6569338471` (hero, final CTA). There is no form, checkout, payment or WhatsApp. If an enquiry form is wanted later it needs a backend destination (email service, CRM or API route) — to be decided.

## Accessibility notes
- Automated axe-core scan (WCAG 2.0/2.1/2.2 A/AA tags) at 390 and 1440 reports one issue: white text on the primary blue `#05A5CD` buttons is about 2.9:1 (AA needs 4.5:1). White was kept because it is the approved design. To fix, change `--color-on-primary` in `globals.css` to `#0e1a22` (about 6:1).
- Mobile menu, FAQ and Health Check accordions are keyboard operable; focus-visible styles and `prefers-reduced-motion` are in place; a skip link is provided.
- Some elements are rendered twice and toggled by breakpoint (hero price strip vs card, hero callouts vs mobile grid, Health Check cards vs accordion). Hidden copies are `display:none`, so assistive tech sees only one.

## Not yet done / needs input
- Demo video file not included (flag off).
- Real domain, canonical URL, Privacy policy page and a designed OG image.
- "What is included in each set", charging, delivery and warranty details are not specified in the approved content, so the site refers visitors to the phone number.
