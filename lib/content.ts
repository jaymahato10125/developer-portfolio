/**
 * Central site copy — Jay Mahato, Full Stack Developer.
 * Single source of truth for every content string on the site; components
 * render from here so future CV edits touch one file. Design tokens
 * (colors, spacing, type) stay in `lib/tokens.ts`.
 */

export const profile = {
  name: "Jay Mahato",
  firstName: "Jay",
  role: "Full Stack Developer",
  stack: "React · Node · Next.js",
  eyebrow: "Full Stack Developer",
  location: "Bengaluru, Karnataka",
  locationShort: "Bengaluru, IN",
  timezone: "BLR (IST)",
  email: "jaymahato10125@gmail.com",
  phone: "+91-7417041224",
  phoneHref: "tel:+917417041224",
  github: "https://github.com/jaymahato10125",
  linkedin: "https://linkedin.com/in/jaymahato10125",
  availability: "Open to Opportunities",
  experiencePill: "1+ YRS EXP",
  levelPill: "FULL STACK",
  resumePdf: "/Jay-Mahato-Resume.pdf",
  thesis:
    "Full Stack Developer building responsive, scalable web applications with React, Node.js, and Express. I pair seamless frontend interfaces with secure, well-architected backend systems.",
  metaTitle: "Jay Mahato — Full Stack Developer",
  metaDescription:
    "Full Stack Developer in Bengaluru building responsive, scalable web applications with React, Node.js, and Express. EMR systems, REST APIs, and performance optimization.",
} as const;

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#cases" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Journal", href: "#journal" },
  { label: "FAQ", href: "#faq" },
] as const;

export const featuredWork = {
  index: "01",
  kicker: "Featured case archive",
  title: "Healthcare Data & Workflow Engineering",
  cta: "Explore the Work",
  panel: {
    badge: "Healthcare platform",
    heading: "EMR Sync — Patient Data Synchronization Pipelines",
    body: "Built synchronization pipelines between Next.js frontend and NestJS backend services, cutting cross-module data mismatches across distributed patient record modules.",
    metrics: [
      { value: "▲ 90%", label: "Fewer Mismatches" },
      { value: "8+", label: "REST APIs Shipped" },
    ],
    console: {
      title: "EMR_SYNC // V2.4",
      syncLabel: "Module sync status",
      syncValue: "99.9% consistent",
      latencyLabel: "Avg response: <150ms",
      latencyStatus: "Ready to deploy",
    },
  },
} as const;

export const stats = {
  eyebrow: "Stats & Impact",
  heading: "Measured Outcomes",
  body: "A track record of pairing responsive frontend interfaces with secure, optimized backend systems in production healthcare software.",
  cards: [
    {
      kicker: "Tenure",
      value: "01+",
      body: "Years of professional experience across full-time and internship roles",
      badge: "EST. 2024",
    },
    {
      kicker: "Performance",
      value: "94%",
      valueAccent: true,
      body: "Faster backend responses after profiling and restructuring slow endpoints (2.5s → under 150ms)",
      badge: "NESTJS · 3 ENDPOINTS",
    },
    {
      kicker: "Reliability",
      value: "90%",
      body: "Fewer cross-module data mismatches across EMR synchronization pipelines",
      badge: "5+ MODULES",
    },
  ],
} as const;

export const caseStudies = {
  eyebrow: "Selected works",
  heading: "Case Studies & Shipped Work",
  body: "Production healthcare systems and full-stack applications built with React, Next.js, NestJS, and MongoDB.",
  indexLabel: "Indexing 04 featured builds",
  cases: [
    {
      index: "01 / Healthcare infrastructure",
      title: "EMR Sync Pipelines",
      tags: ["Next.js", "NestJS", "REST APIs"],
      status: "In production",
      active: true,
    },
    {
      index: "02 / Admin tooling",
      title: "Kanban Ticket System",
      tags: ["Next.js", "Redux", "Drag & Drop"],
      status: "Client work",
      active: false,
    },
    {
      index: "03 / Access control",
      title: "RBAC Permission System",
      tags: ["JSON Schema", "Permissions", "Admin Panel"],
      status: "In production",
      active: false,
    },
    {
      index: "04 / Full-stack app",
      title: "Blog Platform",
      tags: ["React", "Express", "MongoDB"],
      status: "Open source",
      active: false,
    },
  ],
} as const;

export const projectDetail = {
  chips: ["Healthcare platform", "Full stack", "2026 deploy"],
  title: "EMR Data Sync Engine",
  specLabel: "Verified system specification",
  specValue: "NestJS p95 response 2.5s → under 150ms",
  noteLabel: "[ Engineering note ]",
  noteBody:
    "Cut cross-module data mismatches by 90% across 5+ distributed patient-record modules with sync pipelines between Next.js and NestJS services — then profiled and restructured the slowest endpoints.",
  cta: "Discuss this build",
} as const;

export const capabilities = {
  eyebrow: "Capabilities",
  heading: "Stack & Engineering Competencies",
  body: "Production experience across the full stack — responsive interfaces, secure APIs, and the data layer behind them.",
  tiles: [
    {
      title: "Frontend Engineering",
      body: "Responsive interfaces with React, Next.js, Redux, and Tailwind CSS — SSR and code-splitting for fast loads on desktop and mobile.",
      dark: false,
      chips: ["React & Next.js", "Redux", "Tailwind CSS"],
    },
    {
      title: "Backend & APIs",
      body: "Secure REST APIs with Node.js, NestJS, and Express — JWT auth, role-based access for Admin, Doctor, and Staff workflows.",
      dark: true,
      chips: ["NestJS APIs", "JWT Auth", "RBAC"],
    },
    {
      title: "Data & DevOps",
      body: "MongoDB, MySQL, and PostgreSQL with indexing and pagination; Dockerized workflows and Git-based collaboration.",
      dark: false,
      chips: ["MongoDB", "PostgreSQL", "Docker & Git"],
    },
  ],
} as const;

export const journal = {
  eyebrow: "Notes & Writing",
  heading: "Notes on Building Software",
  body: "Short engineering notes drawn from production work — APIs, performance, and full-stack patterns.",
  meta: "Drafts — full posts soon",
  posts: [
    {
      badge: "NOTE // 001",
      meta: "DRAFT · PERFORMANCE",
      title: "Profiling Slow Endpoints: 2.5s to 150ms",
      body: "How request profiling found the bottlenecks in three NestJS endpoints — and the restructuring that cut p95 response time by 94%.",
    },
    {
      badge: "NOTE // 002",
      meta: "DRAFT · DATA",
      title: "Syncing State Across 5+ EMR Modules",
      body: "Keeping distributed patient records consistent between Next.js and NestJS services — and cutting mismatches by 90%.",
    },
  ],
} as const;

export const testimonials = {
  eyebrow: "Endorsements",
  heading: "Peer & Leadership Testimonial",
  // Placeholder quotes until real recommendations are available.
  placeholderNote: "Sample quotes — replace with real recommendations",
  quotes: [
    {
      quote:
        "Jay pairs a clean frontend sensibility with serious backend discipline. Our data pipelines got dramatically more reliable after his work.",
      name: "Sample Reviewer",
      role: "Engineering Manager · Placeholder",
    },
    {
      quote:
        "Fast, thorough, and documentation-first. The API specs Jay wrote cut our onboarding time noticeably.",
      name: "Sample Teammate",
      role: "Product Engineer · Placeholder",
    },
  ],
  summary: {
    label: "[ Engagement summary ]",
    rows: [
      { k: "Scope:", v: "Full-Stack Product Engineering" },
      { k: "Stack:", v: "Next.js · NestJS · MongoDB" },
      { k: "Impact:", v: "+94% API Performance", accent: true },
    ],
    badge: "References on request",
  },
} as const;

export const faq = {
  eyebrow: "Frequently asked",
  heading: "Working Together FAQ",
  body: "Clear answers on stack, availability, collaboration, and handoff.",
  cta: "Ask Custom Question",
  items: [
    {
      q: "What is your stack?",
      a: "React, Next.js, and Redux with Tailwind CSS on the frontend; Node.js, NestJS, and Express on the backend; MongoDB, MySQL, and PostgreSQL for data — with Git, Docker, and REST APIs throughout. JavaScript and C++ are my primary languages.",
    },
    {
      q: "Are you available for new work?",
      a: "If the badge at the top says Open to Opportunities, I'm taking calls. I'm based in Bengaluru and open to full-time roles as well as select freelance builds — email works best for first contact.",
    },
    {
      q: "How do you collaborate across time zones?",
      a: "Async-first with clear written specs — I document APIs and integration points as I build (a habit from shipping 15+ pages of API docs in a past role). I'm on IST and overlap EU mornings and US evenings for live syncs when needed.",
    },
    {
      q: "How do you handle handoff and QA?",
      a: "Production-minded from the start: role-based access, optimized queries with indexing, responsive checks across breakpoints, and Lighthouse audits. I review PRs carefully and stay in the loop through staging and release.",
    },
  ],
} as const;

export const cta = {
  badge: "Let's talk scope & timeline",
  heading: "Let's build something great together",
  body: "Currently open to full-time roles and select freelance builds — full-stack web apps, REST APIs, and performance work.",
  primary: "Get in Touch",
  secondary: "Direct Email",
} as const;

export const footer = {
  brandBlurb:
    "Full Stack Developer building responsive, scalable web applications with React, Node.js, and Express.",
  locations: "Bengaluru • Remote",
  network: [
    { label: "GitHub →", href: "https://github.com/jaymahato10125" },
    { label: "LinkedIn →", href: "https://linkedin.com/in/jaymahato10125" },
    { label: "Email →", href: "mailto:jaymahato10125@gmail.com" },
    { label: "Phone →", href: "tel:+917417041224" },
  ],
  legal: "Designed & engineered by Jay Mahato © 2026. All rights reserved.",
  latency: "Response < 24h • Time: BLR (IST)",
  statusTitle: "Current Status",
  statusBadge: "Open to opportunities",
  statusBody:
    "Full Stack Developer in Bengaluru, open to full-time roles and select freelance builds.",
  statusCta: "Send an Email →",
  bottomNote: "© 2026 Jay Mahato. All rights reserved.",
  colophon: "Typeset in Oswald & Space Mono",
} as const;
