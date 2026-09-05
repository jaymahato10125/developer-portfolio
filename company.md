# Company Website Implementation Plan — Obsidian Tech Solution (`obsidiantechsolution.in`)

> Goal: transform the existing personal developer portfolio (Next.js 15 + React 19 + Tailwind 3 + Framer Motion, Terracotta Editorial theme) into the official, premium, B2B technology company website for **Obsidian Tech Solution**.
> Strategy: **preserve the design system, layout engine, animations, and reusable components**; replace 100% of personal/developer content with company/service content.

Current stack (reuse as-is): `next@15`, `react@19`, `framer-motion@12`, `lucide-react`, `next-themes`, `tailwindcss@3`, fonts via `next/font/google` (Oswald + Plus Jakarta Sans + Space Mono + Geist). Single-page scaffold in `app/page.tsx`, central copy in `lib/content.ts`, tokens in `lib/tokens.ts`.

Services to feature (8):

1. Website Design & Development
2. Web Application Development
3. Mobile App Development
4. Custom Software Development
5. UI/UX Design
6. Business Automation
7. Website & Application Maintenance
8. Technology Consulting

Primary CTAs: **Start a Project** · **Get a Free Consultation** · **Contact Us**.

---

## 1. What to Preserve vs. What to Replace

### 1.1 Preserve (do not redesign)

| Asset                                                                 | Location                                                                                                                         | Why keep                                                                                                               |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Design tokens (colors, spacing, radii, type scale)                    | `lib/tokens.ts`, `tailwind.config.ts`                                                                                            | Terracotta/cream/forest + dark near-black layering already feels premium/agency-grade. Only re-map brand accents (§3). |
| Typography system (Oswald display / Jakarta body / Space Mono labels) | `tailwind.config.ts`, `app/layout.tsx`                                                                                           | Condensed Oswald headlines + mono kickers = strong agency voice. Keep sizes/line-heights.                              |
| Dot-grid texture, cream card shell, rounded-xl frame                  | `app/globals.css` (`.bg-dot-grid`), `app/layout.tsx`, `app/page.tsx`                                                             | Signature visual. Keep; only tune opacity if needed for denser B2B content.                                            |
| Dark/light theming                                                    | `components/ThemeProvider.tsx`, `ThemeToggle.tsx`, `.dark` variants everywhere                                                   | B2B buyers expect both; keep `next-themes` + `t-theme` 200ms transition pattern.                                       |
| Motion language                                                       | `components/Reveal.tsx` (Framer Motion scroll reveal), `Navbar.tsx` (`AnimatePresence` mobile menu), hover/grayscale transitions | Keep durations/easings; add `prefers-reduced-motion` respect (already in CSS).                                         |
| Layout primitives                                                     | `components/Eyebrow.tsx`, section `max-w-[1440px]` containers, `space-y-16 lg:space-y-24` rhythm, pill badges, card grids        | Reuse for every new company section.                                                                                   |
| Responsive pattern                                                    | Mobile-first Tailwind (`sm:`, `lg:`), fixed pill nav → hamburger `< lg`                                                          | Keep breakpoints; audit denser grids (§7).                                                                             |
| Footer architecture (bespoke footer + outer status footer)            | `components/Footer.tsx`                                                                                                          | Keep two-tier structure; rewrite content (§5.11).                                                                      |

### 1.2 Replace (100% of personal content)

Delete or rewrite every instance of: personal name (`Jay Mahato`), `Full Stack Developer`, `React · Node · Next.js`, `Open to Opportunities`, `Download CV`, `Book a Call` (personal), GitHub/LinkedIn/personal email/phone, `EMR Sync / Kanban / RBAC / Blog` personal case studies, `Peer & Leadership Testimonial` placeholders, `Notes on Building Software` journal, `Working Together FAQ` (job-seeker framing), `Designed & engineered by Jay Mahato`, watermark `JAY MAHATO`, `assets.*` remote `lh3.googleusercontent.com` portraits.

Terminology swap table — see §9.

---

## 2. Brand Identity — Obsidian Tech Solution

### 2.1 Brand positioning

- **Name:** Obsidian Tech Solution (never "Obsidian Tech Solutions" — pick one and enforce).
- **Domain:** `https://obsidiantechsolution.in` (canonical, no `www` split — redirect `www → apex`).
- **Tagline (recommended):** `We build websites, apps & software that grow your business.` — short, outcome-led, non-jargony for SMB/decider audience.
- **Voice:** confident, plain-spoken, outcome-first. "We design, build, and maintain…" not "I built…". Every section answers _business outcome → capability → proof → CTA_.

### 2.2 Visual brand (minimal token changes)

Keep Terracotta Editorial theme; re-anchor meaning:

- **Obsidian** = near-black `dark-base #0B0B0A` / `carbon #0D0D0D` / `inverse-surface` — use for dark sections, nav, footer, logo block. This is the brand anchor.
- **Terracotta/ember** (`primary #AB2E14`, `ember #E85A3C`, `accent-bright #E0653A`) = action color — CTAs, active states, key metrics only. Do not dilute across decorative elements.
- **Cream/paper** (`surface #FEF9EE`, `cream #F3EEE3`) = light canvas. Keep.
- **Forest** (`forest #16261C`) = alternate dark panel (keep for one CTA/case panel to preserve contrast rhythm).

Concrete edits in `lib/tokens.ts`:

- Add `company` alias object: `brand: { name, domain, tagline, email, phone, location, hours }` — or better, create `lib/company.ts` (see §6.1) and leave `tokens.ts` for color/spacing only.
- Optional: introduce `obsidian: "#0B0B0A"` alias pointing at existing dark base for semantic clarity; no hex changes needed.
- Logo: replace text-only `profile.name` in `Navbar`/`Footer` with lockup: obsidian square/crosshair mark (reuse `Crosshair` or new `Hexagon`/`Layers` lucide icon in `bg-carbon text-cream` tile) + `OBSIDIAN` (Oswald) + `/ TECH SOLUTION` (mono small). Build once as `components/BrandMark.tsx` and reuse in nav, secondary bar, footer, OG image.

### 2.3 Assets to produce

- `public/logo.svg` + `public/favicon.ico` / `apple-touch-icon.png` (obsidian tile + "O" monogram).
- `public/og-cover.jpg` (1200×630, obsidian bg + tagline + 8 service chips — no personal photo).
- Replace all `assets.*` remote portraits with local abstract/company imagery or pure CSS (remove `lh3.googleusercontent.com` remotePattern from `next.config.mjs` once done).
- Optional: 3–4 abstract project covers under `public/work/` (WebP, <150KB each).

---

## 3. Information Architecture & Page Restructure

### 3.1 Recommended sitemap (Phase 1: single-page + 2 routes; Phase 2: full multi-page)

Phase 1 keeps the proven single-page scroll (fastest to ship, preserves `page.tsx` order) and adds clean anchors + two conversion routes:

```
/ (single-page, section order below)
  #hero          → company hero
  #trust         → NEW: client strip / trust bar
  #services      ← replaces FeaturedWork position (was #featured)
  #outcomes      ← reuses Stats (was generic stats)
  #work          ← reuses CaseStudies + ProjectDetail (rewritten as case studies)
  #process       ← NEW (was Capabilities position — repurpose or split)
  #capabilities  ← keep as "Technologies & Capabilities" (stack grid)
  #testimonials  ← rewritten B2B testimonials
  #pricing-engagements (optional strip inside process/FAQ area)
  #faq           ← rewritten B2B FAQ
  #contact       ← new lead form + info (replaces mailto-only CTA)
  #cta           ← CTABanner (Start a Project)
/contact         → NEW standalone page (form + details; good for ads/SEO landing)
/services        → Phase 2: index of 8 services (+ /services/[slug] detail pages)
/work            → Phase 2: case-study index (+ /work/[slug])
/privacy, /terms → lightweight legal pages (footer links must not be "#")
```

If SEO depth matters at launch, skip Phase 1 single-page and scaffold `/services/[slug]` + `/work/[slug]` immediately — App Router makes this cheap (see §6.3).

### 3.2 New section order for `app/page.tsx`

```tsx
<Navbar />               // company nav + Start a Project CTA
<main>
  <SecondaryBar />       // company ticker: rating · projects · support
  <Hero />               // "We build websites, apps & software…"
  <TrustBar />           // NEW: "Trusted by…" + tech badges
  <Services />           // NEW (8 cards) — replaces FeaturedWork slot
  <Stats />              // "Outcomes we deliver" (business metrics)
  <CaseStudies />        // "Selected client work" (retitled)
  <ProjectDetail />      // flagship case spotlight
  <Process />            // NEW: 4–5 step delivery process
  <Capabilities />       // "Technologies we use" (keep 3-tile layout, expand)
  <Testimonials />       // B2B client quotes
  <FAQ />                // B2B buying questions
  <CTABanner />          // "Start a Project / Free Consultation"
  <ContactSection />     // NEW: form + contact details (id="contact")
  <Footer />
</main>
<SiteFooter />
```

Keep the Stitch contract: fixed nav → dot-grid wrapper → sections with `space-y-16 lg:space-y-24` → dark alternating panels → CTA → bespoke footer → outer footer.

### 3.3 Nav (`navLinks` in `lib/content.ts` → `lib/company.ts`)

Old: Home, About, Case Studies, Capabilities, Journal, FAQ + `Book a Call`.

New (desktop pill, max 6 + CTA to avoid crowding):

```ts
navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work" },
  { label: "Process",  href: "#process" },
  { label: "Pricing",  href: "#faq" },   // or "#process" anchor; Phase 2 → /pricing
  { label: "FAQ",      href: "#faq" },
  { label: "Contact",  href: "#contact" },
]
CTA = "Start a Project" → href="#contact" (not mailto)
Secondary CTA (hero) = "Get a Free Consultation" → href="#contact"
```

Mobile menu: same links + both CTAs stacked. `aria-label="Primary"` / `"Mobile"` unchanged.

---

## 4. Section-by-Section Content & Component Plan

All copy lives in `lib/company.ts` (successor to `lib/content.ts`). Components render from it — no hardcoded strings.

### 4.1 `Navbar.tsx` + `SecondaryBar`

- Logo → `<BrandMark />` (obsidian tile + wordmark). Remove avatar `<Image>` (personal photo) — replace with CTA-adjacent trust chip or remove.
- Availability pill (`Open to Opportunities` + ping dot) → **capacity pill**: `Accepting new projects` (green dot) — driven by `company.availability`. Keep ping animation.
- Primary button `Book a Call` (mailto) → `Start a Project` → `#contact`. Keep terracotta pill + dark glow classes.
- `SecondaryBar`: left = BrandMark + capacity pill; center links = Services / Work / Process / FAQ / Contact; right CTA = `Get Free Consultation` → `#contact`. Optional ticker variant: `★ 5.0 rated · 20+ projects delivered · Support included`.

### 4.2 `Hero.tsx` (+ `ThesisStatement.tsx` → repurpose as `HeroPanel.tsx`)

Old: `I'M JAY MAHATO` + portrait tile + `LOC / EXP / FULL STACK` pills + personal thesis.

New:

- `Eyebrow`: `Obsidian Tech Solution — Web · Apps · Software`.
- H1 (Oswald, same scale): `WE BUILD WEBSITES, APPS & SOFTWARE` with accent word in `text-primary` (e.g. `SOFTWARE`). Keep `text-display-xl-mobile sm:text-display-xl`, keep inline tile — but tile becomes **product collage / obsidian mark**, not a face (grayscale→color hover can stay for work thumbnails elsewhere; remove for logo tile).
- Pills: `Based in India · Serving Worldwide` · `8 Core Services` · `B2B Focused` (replaces LOC/EXP/LEVEL).
- Right panel (`ThesisStatement` → rename to `HeroProof`): heading `Your technology partner, end to end.` + 2-sentence value prop + dual CTA (`Start a Project` primary → `#contact`, `Explore Services` secondary → `#services`) + micro-trust row (`Free consultation · NDA-friendly · Response < 24h`). Reuse existing card styles.
- Sub-hero trust line: `Websites · Web Apps · Mobile Apps · Custom Software · UI/UX · Automation · Maintenance · Consulting`.

### 4.3 NEW `TrustBar.tsx` (small, high-ROI)

One-line strip under hero: `TRUSTED BY BUSINESSES LIKE YOURS` + monochrome text badges (industries served: Healthcare · Retail · Education · Real Estate · Services) + tech mini-badges (React · Next.js · Flutter · Node · WordPress). Pure text/CSS — no logo-permission risk. Reuse mono label + hairline styles from `Stats`.

### 4.4 `FeaturedWork.tsx` → `Services.tsx` (the core rewrite)

Do not keep the EMR-console panel. Build `components/Services.tsx` reusing the section shell (eyebrow + headline + body + grid) and the forest/dark panel language:

- Eyebrow: `What we do` · H2: `Services built for business growth` · Body: one line on end-to-end delivery.
- Grid: 8 cards (4×2 desktop, 2-col tablet, 1-col mobile). Each: lucide icon, title, 1-line outcome, 3 tag chips, `Learn more →` anchor (Phase 2 → `/services/[slug]`).
- Icon map: Globe (Website Design & Dev) · AppWindow (Web Apps) · Smartphone (Mobile Apps) · Boxes/Cpu (Custom Software) · PenTool (UI/UX) · Workflow/Zap (Automation) · ShieldCheck/Wrench (Maintenance) · Compass (Consulting).
- Middle/featured card keeps `dark: true` forest treatment (e.g. Web App Development as flagship). Keep `Reveal` stagger.
- Data shape in `lib/company.ts`: `services: { eyebrow, heading, body, items: [{ slug, icon, title, outcome, chips }] }`.

### 4.5 `Stats.tsx` → Outcomes

Keep 3-card layout + badges. Rewrite metrics from personal performance stats to **business outcomes** (mark as representative until real numbers exist — never fabricate client results; use `+`/`up to` or process SLAs):

- `20+` Projects delivered (badge: `WEB · APPS · SOFTWARE`).
- `< 24h` Response time (badge: `CONSULTATION · FREE`).
- `8` Core services, end-to-end (badge: `DESIGN → MAINTENANCE`).
- Alternative once real data exists: on-time delivery %, avg. rating, support SLA. Keep `valueAccent` on middle card.

### 4.6 `CaseStudies.tsx` + `ProjectDetail.tsx` → Client Work

Keep the 4-row index + dark panel + spotlight architecture; rewrite rows as **service-led case studies** (anonymized until permissions exist — `Industry + outcome`, not fake company names):

1. `01 / Business website` — `Service Company Website + Lead Forms` — tags: Next.js · SEO · Contact → status `Delivered`.
2. `02 / Web application` — `Custom Booking & Billing Dashboard` — tags: React · Node · Automation → `In production`.
3. `03 / Mobile app` — `Customer & Orders App (Android/iOS)` — tags: Flutter · API · Push → `Delivered`.
4. `04 / Automation` — `Spreadsheet → Automated Workflow` — tags: CRM · WhatsApp · Reports → `In production`.

`ProjectDetail` spotlight → flagship: chips `FLAGSHIP / WEB + AUTOMATION / 2026`; spec line `Website + automation that cut manual follow-ups`; note card = delivery note (timeline, handoff, maintenance). CTA `Discuss this build` → `Start a similar project` → `#contact`.

Rule: no invented logos, names, or % lifts without a real client sign-off. Use capability framing until then.

### 4.7 NEW `Process.tsx` (replaces `Journal.tsx` slot)

Delete `Journal.tsx` (personal engineering notes have no B2B place; do not keep as placeholder). Insert `Process.tsx` reusing the dark-panel + numbered-badge language:

1. `Discover` — free consultation, goals, scope & quote.
2. `Design` — UI/UX, prototype, your approval.
3. `Build` — weekly demos, staging link.
4. `Launch` — testing, SEO, deploy to `obsidiantechsolution.in`-hosted or client infra.
5. `Maintain` — updates, backups, support plan.

Each step: 1-line business description + deliverable chip (`Quote in 48h`, `Figma prototype`, `Staging link`, `Go-live checklist`, `AMC available`). 5-col → wrap on tablet, stack on mobile. Eyebrow `How we work`, H2 `From idea to launch, without the chaos`.

### 4.8 `Capabilities.tsx` → Technologies

Keep 3-tile grid (incl. dark middle tile). Retitle: eyebrow `Capabilities`, H2 `Technologies & tools we use`, body `Modern, proven stacks — chosen for speed, SEO, and maintainability.`

- Tile 1 `Websites & Frontend` — Next.js · React · WordPress · Tailwind.
- Tile 2 `Apps, APIs & Data` (dark) — Flutter · Node.js · REST APIs · MongoDB/PostgreSQL.
- Tile 3 `Design, Automation & Care` — Figma · UI/UX · CRM/WhatsApp Automation · AMC & SEO.

### 4.9 `Testimonials.tsx` → Client testimonials

Keep quote-card + engagement-summary architecture. Replace placeholder peer quotes with **client-framed** entries. Until real reviews exist, use one of: (a) hide section behind `testimonials.enabled = false` flag, (b) show `Google reviews coming soon — ask us for references` + 2 anonymized short lines marked as sample, or (c) real client quotes once collected. Never ship `Sample Reviewer · Placeholder` to production domain. Summary rows → `Scope: Website + Automation` · `Timeline: 4 weeks` · `Support: 6-month AMC` + badge `References on request`.

### 4.10 `FAQ.tsx` → Buying FAQ (6 items, keep accordion behavior)

Rewrite from job-seeker to buyer questions:

1. `How much does a website / app cost?` — scoped quote in 48h; indicative ranges only.
2. `How long does a typical project take?` — business site 2–4 wks, web/mobile app 6–12 wks.
3. `Do you redesign existing websites?` — yes: audit → redesign → migrate without losing SEO.
4. `Will I be able to update content myself?` — yes: CMS/admin + handover video.
5. `Do you provide maintenance after launch?` — AMC plans: updates, backups, monitoring, small changes.
6. `How do we start?` — free consultation → proposal → advance → build. CTA `Ask a Custom Question` → `#contact`.

Keep existing accordion a11y (buttons, `aria-expanded`, keyboard operable).

### 4.11 `CTABanner.tsx` + NEW `ContactSection.tsx`

`CTABanner` (keep forest panel + foliage bleed): badge `Free consultation · No commitment` · H2 `Have a project in mind? Let's talk.` · body `Tell us about your goals — we'll reply within 24 hours with next steps and a rough quote.` · primary `Start a Project` → `#contact` · secondary `Get a Free Consultation` → `#contact`.

NEW `ContactSection.tsx` (`id="contact"`) — the conversion core the current site lacks (today both CTAs are `mailto:`):

- Left: contact details (email `hello@obsidiantechsolution.in`*, phone/WhatsApp, hours, service area `India · Remote worldwide`), response-time badge, NDA note.
- Right: lead form (name, phone/email, service select [8 services], budget select, message) → `POST /api/contact` (validate + rate-limit; send via Resend/Nodemailer or store + notify; never expose SMTP creds client-side). Success/error states, honeypot + time-trap spam guard, `aria-live` status.
- *Confirm real inbox before launch; do not ship personal Gmail as the company address.

### 4.12 `Footer.tsx` + `SiteFooter`

- Brand row → BrandMark + `/ Company` suffix + blurb: `Obsidian Tech Solution designs, builds, and maintains websites, apps, and custom software for businesses.`
- Directory → Services / Work / Process / FAQ / Contact (real anchors, no `#` dead links).
- Company col (replaces Colophon): About, Services, Work, Contact, Privacy Policy, Terms.
- Network → real company channels only (website, email, phone/WhatsApp, LinkedIn/Instagram once created). Remove personal GitHub/LinkedIn/phone.
- Watermark `JAY MAHATO` → `OBSIDIAN` (check char-count/layout at 64/120/180px; `OBSIDIAN` is 8 chars vs 10 — increase tracking or use `OBSIDIAN TECH` after visual check).
- Legal: `© 2026 Obsidian Tech Solution · obsidiantechsolution.in. All rights reserved.` Latency line → `Response < 24h · Mon–Sat, IST`.
- Status card → `Accepting new projects` + `Currently onboarding clients for [quarter]` + CTA `Start a Project →`.

---

## 5. Lead Generation & Conversion System

1. **CTA hierarchy (enforce globally):** Primary `Start a Project` (terracotta pill, every viewport: nav, hero, process, case spotlight, CTA banner, footer status card) · Secondary `Get a Free Consultation` (ghost/outline) · Tertiary `Contact Us` (footer/links). All → `#contact` (Phase 2: `/contact`).
2. **Sticky mobile CTA:** add fixed bottom bar on `< lg` with `Start a Project` + call icon (appears after hero, hides when `#contact` in view). High-impact for Indian SMB mobile traffic.
3. **Form strategy:** single `ContactSection` form with service + budget qualifiers → routes to consultation. Keep fields ≤6. Add `budget` select (ranges, not open text) for lead qualification.
4. **Trust builders adjacent to every CTA:** response SLA, free-consultation note, NDA-friendly, maintenance availability. No fake counters/reviews.
5. **Analytics:** add privacy-friendly events (`cta_click`, `form_start`, `form_submit`, `form_success`) via Vercel Analytics or Plausible; track which CTA position converts.
6. **WhatsApp path:** optional `Chat on WhatsApp` deep link (`wa.me/<number>`) as secondary contact — common B2B expectation in India. Confirm number before launch.

---

## 6. Technical Implementation

### 6.1 Content layer

- Create `lib/company.ts` exporting `company` (name, domain, tagline, email, phone, whatsapp, location, hours, socials), `navLinks`, `hero`, `trustBar`, `services[8]`, `stats`, `cases[4]`, `spotlight`, `process[5]`, `capabilities`, `testimonials`, `faq[6]`, `cta`, `contact`, `footer`, `seo`.
- Migrate components off `lib/content.ts` one by one; then delete `content.ts` (or keep as re-export shim during migration). Update `app/layout.tsx` metadata import.
- Add `testimonials.enabled` and per-case `published` flags so unfinished proof can be hidden without code edits.

### 6.2 Routes & files

| Action        | File                                                                                                                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rewrite       | `app/layout.tsx` (SEO/OG §8), `app/page.tsx` (new order §3.2)                                                                                                                             |
| Rewrite       | `Navbar.tsx`, `Hero.tsx`, `Stats.tsx`, `CaseStudies.tsx`, `ProjectDetail.tsx`, `Capabilities.tsx`, `Testimonials.tsx`, `FAQ.tsx`, `CTABanner.tsx`, `Footer.tsx`                           |
| New           | `components/BrandMark.tsx`, `components/Services.tsx`, `components/Process.tsx`, `components/TrustBar.tsx`, `components/ContactSection.tsx`, `components/StickyCTA.tsx`, `lib/company.ts` |
| Delete        | `components/Journal.tsx`, `components/ThesisStatement.tsx` (fold into `HeroProof`), `components/FeaturedWork.tsx` (replaced by `Services.tsx`) — or keep behind flag during migration     |
| New API       | `app/api/contact/route.ts` (validation + send + rate limit)                                                                                                                               |
| New (Phase 1) | `app/contact/page.tsx` (reuses `ContactSection`), `app/privacy/page.tsx`, `app/terms/page.tsx`                                                                                            |
| New (Phase 2) | `app/services/page.tsx`, `app/services/[slug]/page.tsx`, `app/work/page.tsx`, `app/work/[slug]/page.tsx` (MDX or `company.ts` data + `generateStaticParams` + JSON-LD)                    |
| Config        | `next.config.mjs` (drop remotePatterns, add security headers), `public/` assets, `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`                                                     |

### 6.3 URL & routing notes

- Hash anchors on `/` for Phase 1 (`#services`, `#work`, `#process`, `#faq`, `#contact`) — keep lowercase, stable.
- Phase 2 slugs: `/services/website-development`, `/services/web-app-development`, `/services/mobile-app-development`, `/services/custom-software`, `/services/ui-ux-design`, `/services/business-automation`, `/services/maintenance`, `/services/technology-consulting`. Use `generateStaticParams` + `generateMetadata` per slug.
- No personal paths (`/Jay-Mahato-Resume.pdf`, GitHub links) anywhere in output.

### 6.4 Contact API sketch

`POST /api/contact` — zod-validate `{ name, contact (email|phone), service, budget?, message }`, honeypot field, per-IP rate limit (e.g. 5/hr), send via Resend (or SMTP), return `{ ok }` without leaking internals. Client form uses `fetch` + `aria-live` region. Add `RESEND_API_KEY`, `CONTACT_TO` env vars (document in `.env.example`; never commit secrets).

---

## 7. Responsive Plan (desktop / tablet / mobile)

Keep Tailwind breakpoints; audit each rewritten section:

- **Nav:** desktop pill (≤6 links + CTA); tablet collapses to hamburger at `lg` (unchanged); mobile menu lists all links + stacked dual CTA.
- **Hero:** `lg:grid-cols-12` split → stack on mobile; H1 `text-display-xl-mobile` (56px) must not overflow 360px — verify `OBSIDIAN`-length words; pills wrap.
- **Services 8-grid:** `grid-cols-1 sm:grid-cols-2 xl:grid-cols-4`, equal-height cards, icon + title never clip; chips wrap.
- **Process 5 steps:** `md:grid-cols-3 xl:grid-cols-5` with wrap; numbers stay aligned.
- **Cases/spotlight/testimonials/FAQ/contact:** single-column on mobile;2859 form inputs `min-h-[48px]`, labels above, full-width submit.
- **Sticky mobile CTA** (`lg:hidden`) with safe-area padding; ensure it never covers form submit (hide on `#contact`).
- Verify at 360×640, 768×1024, 1440×900 in both themes; check dot-grid + dark panels for contrast at each size.

---

## 8. SEO, Metadata, Performance, Accessibility

### 8.1 SEO / metadata (`app/layout.tsx` + per-page `generateMetadata`)

```ts
metadataBase: new URL("https://obsidiantechsolution.in")
title: { default: "Obsidian Tech Solution — Websites, Apps & Software for Business",
         template: "%s | Obsidian Tech Solution" }
description: "Obsidian Tech Solution designs, builds, and maintains high-converting websites, web & mobile apps, custom software, and automations for businesses. Get a free consultation."
keywords: [website development india, web app development, mobile app development, custom software, ui ux design, business automation, website maintenance, technology consulting]
alternates: { canonical: "/" }
openGraph: { type: "website", url, siteName: "Obsidian Tech Solution",
             title, description, images: [{ url: "/og-cover.jpg", width: 1200, height: 630 }] }
twitter: { card: "summary_large_image", title, description, images: ["/og-cover.jpg"] }
robots: { index: true, follow: true }
```

Add `app/sitemap.ts` (/, /contact, /privacy, /terms; Phase 2 + services/work slugs), `app/robots.ts` (allow /, sitemap URL), `app/manifest.ts`, favicons. JSON-LD `Organization` (+ Phase 2 `Service`/`FAQPage`) via `<script type="application/ld+json">` in layout/page.

### 8.2 Semantic HTML & a11y

- One `h1` per page (hero); sections use `h2` in order; no skipped levels. `header/nav/main/section/footer` landmarks; `aria-label` on navs (already present — keep).
- All CTAs are real `<a href="#contact">`; form uses `<label>` + `aria-describedby` errors + `aria-live="polite"` status; focus-visible rings on every interactive element; color contrast re-check if any chip color changes (terracotta-on-cream and `accent-bright`-on-dark already AA — keep pairings).
- Keyboard-operable accordion + mobile menu (`aria-expanded`, Esc closes, focus returns). `prefers-reduced-motion` already disables `t-theme` — extend to Framer reveals (`useReducedMotion`).

### 8.3 Performance budget

Keep static-first: all marketing sections are RSC/static; only `Navbar` (menu), `FAQ` (accordion), `ContactSection` (form), `Reveal` stay client components. `next/font` with `display: swap` (already); local images with `<Image>` + `sizes`, WebP, lazy below fold (`priority` only on hero tile). Target: Lighthouse ≥90 mobile, LCP <2.5s, zero remote image hosts, `next build` clean.

---

## 9. Terminology Map (portfolio → company)

| Portfolio term                           | Company term                                           |
| ---------------------------------------- | ------------------------------------------------------ |
| Jay Mahato / I'm Jay                     | Obsidian Tech Solution / We                            |
| Full Stack Developer                     | Technology partner / Web & software company            |
| My stack / Capabilities (personal)       | Services / Technologies we use                         |
| Featured case archive / Selected works   | Services / Selected client work                        |
| Stats & Impact (personal tenure)         | Outcomes / Results we deliver for clients              |
| Notes & Writing / Journal                | How we work / Process (delete journal)                 |
| Peer & Leadership Testimonial            | Client testimonials / What our clients say             |
| Working Together FAQ                     | FAQs / Questions, answered                             |
| Open to Opportunities                    | Accepting new projects                                 |
| Book a Call / Get in Touch / Download CV | Start a Project / Get a Free Consultation / Contact Us |
| Discuss this build                       | Start a similar project                                |
| Explorer pity phrases (hire me, roles)   | Business outcomes (leads, sales, efficiency, growth)   |
| Personal GitHub/LinkedIn/Gmail/phone     | Company email/phone/WhatsApp/domain + company socials  |

Enforce via search pass: `rg -i "jay|mahato|portfolio|resume|cv|full.?stack developer|book a call|github\.com/jay|linkedin\.com/in/jay|7417041224|gmail" app components lib public` must return zero hits before launch (excluding this plan file).

---

## 10. Phased Execution & Verification

### Phase A — Brand & shell (½–1 day)

1. Create `lib/company.ts` (company, nav, hero, footer, SEO constants) + `components/BrandMark.tsx`.
2. Rewrite `Navbar`/`SecondaryBar`/`Footer`/`SiteFooter` (logo, links, CTAs, watermark, legal). Delete personal socials/avatar.
3. Update `app/layout.tsx` metadata/OG/viewport + favicons/manifest skeleton.
4. Verify: `npm run format && npx tsc --noEmit && npm run build`; visual check nav/footer both themes, mobile menu.

### Phase B — Core B2B sections (1–2 days)

4. Rewrite `Hero` (+ fold `ThesisStatement` → hero panel), add `TrustBar`.
5. Build `Services.tsx` (8 cards) to replace `FeaturedWork`; rewrite `Stats`, `Capabilities`.
6. Build `Process.tsx`; delete `Journal.tsx` (+ nav links, imports in `page.tsx`).
7. Verify per §7 breakpoints + contrast spot-check.

### Phase C — Proof & conversion (1–2 days)

8. Rewrite `CaseStudies` + `ProjectDetail` (anonymized, service-led), `Testimonials` (flag-gated), `FAQ` (6 buyer Qs).
9. Rewrite `CTABanner`; build `ContactSection` + `app/api/contact/route.ts` + `StickyCTA`.
10. Add `app/contact`, `app/privacy`, `app/terms`, `sitemap.ts`, `robots.ts`, JSON-LD.
11. Verify: form happy-path + validation + rate-limit tests; `rg` terminology pass (§9); Lighthouse + `curl` anchor check; full `format/typecheck/build`.

### Phase D — Domain launch

12. Set canonical `https://obsidiantechsolution.in` (www redirect), deploy (Vercel/host), connect company email, test `/contact` + WhatsApp + analytics events.
13. DNS/SSL check, OG debugger check (`og-cover.jpg` 1200×630), `robots.txt` + sitemap submit (Search Console), 404 page branded.
14. Final `rg` + Lighthouse + multi-device pass; remove `remotePatterns` if no remote images remain.

### Phase E — Growth (post-launch)

- Phase 2 routes (`/services/[slug]`, `/work/[slug]`, `/pricing`), blog/resources for SEO, real testimonials + client logos (with permission), case metrics, Hindi/regional landing variants if needed.

---

## 11. Decisions / Inputs Needed Before Build

1. Official company email + phone/WhatsApp + business hours + city (replaces all personal contact).
2. Confirm tagline + 8 service names/slugs + flagship service for dark feature card.
3. Real stats allowed on site (projects delivered, rating, SLA) — else ship SLA/process framing per §4.5.
4. Testimonial/photo/logo permissions — else ship gated/abstract per §4.6/§4.9.
5. Pricing stance (ranges on site vs. quote-only) + maintenance (AMC) offering details.
6. Hosting + form-delivery provider (Vercel + Resend recommended) + analytics choice.

---

## 12. Definition of Done (launch gate for `obsidiantechsolution.in`)

- [ ] Zero personal-portfolio strings per §9 `rg` pass; watermark reads `OBSIDIAN`.
- [ ] All 8 services + process + work + testimonials + FAQ + contact live, responsive 360→1440, light + dark.
- [ ] `Start a Project` / `Get a Free Consultation` / `Contact Us` present in nav, hero, post-proof, footer; all reach a working form (not bare `mailto:`).
- [ ] SEO: canonical domain, unique title/description per route, OG/Twitter cards, sitemap + robots + JSON-LD, semantic headings, single H1.
- [ ] A11y: keyboard + screen-reader pass on menu/accordion/form; contrast AA; reduced-motion respected.
- [ ] Perf: Lighthouse ≥90, local images only, `npm run format` + `tsc --noEmit` + `next build` green.
- [ ] Legal: branded `/privacy` + `/terms`, real company contact, no dead `#` links, favicon + OG image render.
