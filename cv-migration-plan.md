# CV Migration Plan — Kai Chen template → Jay Mahato

Source: CV pasted in chat (LaTeX; no `cv.md` exists in the repo yet).
Goal: keep the design system, layout, dark mode, and animations untouched;
swap every fictional "Kai Chen, Product Designer" content unit for real
Jay Mahato, Full Stack Developer content.

## 0. New central content file (do first)

Create `lib/content.ts` exporting `profile`, `experience[]`, `projects[]`,
`skills`, `stats[]`, `faqs[]`, `socials`, `testimonials[]`. Then refactor
components to read from it instead of hardcoded strings, so future CV edits
touch one file. Files to refactor: `Hero`, `ThesisStatement`, `Stats`,
`CaseStudies`, `ProjectDetail`, `Capabilities`, `FAQ`, `CTABanner`, `Footer`,
`Navbar` (uses `content.navLinks` from `lib/tokens.ts` — move to `content.ts`).

## 1. Global brand + contact (all files, mechanical)

| Now (fictional)                               | Replace with (CV)                                                        |
| --------------------------------------------- | ------------------------------------------------------------------------ |
| Kai Chen                                      | Jay Mahato                                                               |
| Principal Interface & Systems Architect       | Full Stack Developer — React · Node · Next.js                            |
| San Francisco, CA / SF (PST)                  | Bengaluru, Karnataka / IST                                               |
| hello@kaichen.design                          | jaymahato10125@gmail.com                                                 |
| Twitter/X, ReadCV, Dribbble, Substack, Are.na | GitHub `jaymahato10125`, LinkedIn `jaymahato10125`, phone +91-7417041224 |
| Metadata title/description (`app/layout.tsx`) | "Jay Mahato — Full Stack Developer" + profile summary                    |

Watermark `KAI CHEN` → `JAY MAHATO` (same char count, no layout change).
**Decision needed:** availability badge — "Available for Q2/Q3 Projects" →
suggest "Open to Opportunities" (confirm wording).

## 2. Hero (`Hero.tsx`, `ThesisStatement.tsx`)

- H1 `I'M KAI CHEN` → `I'M JAY MAHATO`.
- Pills: `LOC: BENGALURU, IN` · `10+ YRS EXP` → honest value (~1.5 yrs by
  mid-2026: Jun–Nov 2024 intern + Feb 2026–present full-time — **confirm how
  to phrase**) · `DIR. LEVEL` → `FULL STACK`.
- Thesis paragraph → CV profile summary (trim to ~35 words).
- CTAs: keep "View Selected Works"; "Download CV" → link
  `/Jay-Mahato-Resume.pdf` (**you must supply the PDF** → `public/`);
  email pill → new address.

## 3. Featured work (`FeaturedWork.tsx`)

Replace Apex OS fiction with strongest CV item: **EMR data-synchronization
pipelines (Media NV)**. Keep forest console, relabel it:
`OS_KERNEL // V4.20.9` → `EMR_SYNC // V2.4`; `TOPOLOGY SYNCHRONIZATION` →
`MODULE SYNC STATUS`; `LATENCY SPREAD: 14MS` → `AVG RESPONSE: <150MS`;
metric badges → `▲ 90% mismatch reduction` / `8+ REST APIs`;
tags → `NEXT.JS`, `NESTJS`, `REST APIS`.

## 4. Stats (`Stats.tsx`)

| Card                                  | Now       | Replace with                                   |
| ------------------------------------- | --------- | ---------------------------------------------- |
| Tenure `09+`                          | fictional | years of experience (**confirm phrasing**, §2) |
| Capital `$140M+`                      | fictional | `94%` faster backend (2.5s → 150ms)            |
| Adoption `99.4%`                      | fictional | `90%` fewer data mismatches                    |
| Badges `EST. 2015`, `SERIES SEED → C` | fictional | `BENGALURU, IN`, `MEDICAL · MERN`              |

## 5. Case studies (`CaseStudies.tsx`, 4 rows)

1. EMR Sync Pipelines — Healthcare infra — Next.js / NestJS / REST
2. Kanban Ticket System — Admin panel — Next.js / Redux / DnD (40% faster resolution)
3. RBAC Permission System — features→widgets→attributes JSON, 10+ modules
4. Blog Platform — React / Express / Mongo / JWT (60% faster queries, 200ms APIs)

Statuses (`LIVE ARCHIVAL` etc.) → `IN PRODUCTION`, `CLIENT WORK`, `OPEN SOURCE`.

## 6. Project detail (`ProjectDetail.tsx`)

`KINETIC LIQUIDITY MATRIX` → flagship pick (recommend EMR sync):
chips `HEALTHCARE PLATFORM` / `FULL STACK` / `2026 DEPLOY`;
spec line → `NestJS p95 response 2.5s → under 150ms`;
note card → engineering note on profiling + restructuring 3 endpoints.

## 7. Capabilities (`Capabilities.tsx`, 3 tiles)

1. Frontend Engineering — React, Next.js, Redux, Tailwind, EJS
2. Backend & APIs — Node, NestJS, Express, REST, JWT auth
3. Data & DevOps — MongoDB, MySQL, PostgreSQL, Docker, Git
   Keep forest middle tile. Chips = CV skills verbatim.

## 8. Journal (`Journal.tsx`) — **decision needed, no CV source**

Options: (a) keep 2 placeholder essays, clearly marked; (b) retitle section
"Notes / Docs" for future writing; (c) delete section + nav link.
Recommend (b). Do not invent publications.

## 9. Testimonials (`Testimonials.tsx`) — **decision needed, no CV source**

Current quotes (Sarah Jenkins…) are Stitch fiction. Options: (a) keep as
visually-marked placeholders; (b) use real LinkedIn recommendations if you
have them (**send text**); (c) delete section. Recommend (a) until (b).

## 10. FAQ (`FAQ.tsx`)

Rewrite 4 answers: stack (MERN + Next/Nest), engagement/notice period
(**confirm current availability**), async collaboration IST overlap,
handoff (API docs habit from Virtual Teams: 15+ pages, −30% onboarding).

## 11. CTA + footers (`CTABanner.tsx`, `Footer.tsx`)

Email/phone/socials/locations per §1; foliage panel + watermark unchanged
except name; colophon type line unchanged.

## 12. Assets

- Replace all `lh3.googleusercontent.com/aida-*` portraits with local
  `/public` photos (**you supply**: portrait, avatar, testimonial photos;
  journal/CTA art can stay abstract or be swapped).
- Add `public/Jay-Mahato-Resume.pdf` for Download CV.
- Keep `next.config.mjs` remotePatterns only if remote images remain.

## 13. Verification (per phase)

`npm run format`, `npx tsc --noEmit`, `npm run build`, serve + curl section
check; re-run contrast script if any chip/badge color changes (accent
unchanged → existing AA results hold); mobile spot-check hero/cases.

## Suggested order

Phase A: §0–§2 (brand, hero) → Phase B: §3–§7 (work content) →
Phase C: §8–§11 after decisions → Phase D: §12–§13.
