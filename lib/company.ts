/**
 * Central company copy — Obsidian Tech Solution (obsidiantechsolution.in).
 * Single source of truth for every content string on the site; components
 * render from here so future edits touch one file. Design tokens
 * (colors, spacing, type) stay in `lib/tokens.ts`.
 */

export const company = {
  name: "Obsidian Tech Solution",
  shortName: "Obsidian",
  suffix: "Tech Solution",
  domain: "obsidiantechsolution.in",
  url: "https://obsidiantechsolution.in",
  tagline: "We build websites, apps & software that grow your business.",
  email: "hello@obsidiantechsolution.in",
  phoneDisplay: "+91-98765-43210",
  phoneHref: "tel:+919876543210",
  whatsapp:
    "https://wa.me/919876543210?text=Hi%20Obsidian%20Tech%20Solution%2C%20I%20want%20a%20free%20consultation.",
  location: "India · Serving Worldwide",
  hours: "Mon–Sat · 10am–7pm IST",
  availability: "Accepting new projects",
  responseSla: "Response < 24h",
  metaTitle: "Obsidian Tech Solution — Websites, Apps & Software for Business",
  metaDescription:
    "Obsidian Tech Solution designs, builds, and maintains high-converting websites, web & mobile apps, custom software, and automations for businesses. Get a free consultation.",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Technologies", href: "#capabilities" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Obsidian Tech Solution — Web · Apps · Software",
  titleA: "We build websites,",
  titleB: "apps & software",
  titleAccent: "software",
  pills: ["Based in India · Serving Worldwide", "8 Core Services", "B2B Focused"],
  panelLabel: "[ Your technology partner, end to end ]",
  panelBody:
    "We design, build, and maintain websites, web and mobile apps, and custom software for businesses — from first idea to launch and long-term support.",
  primaryCta: "Start a Project",
  secondaryCta: "Explore Services",
  microTrust: "Free consultation · NDA-friendly · Response < 24h",
  serviceStrip:
    "Websites · Web Apps · Mobile Apps · Custom Software · UI/UX · Automation · Maintenance · Consulting",
} as const;

export const trustBar = {
  label: "Trusted by businesses like yours",
  industries: ["Healthcare", "Retail", "Education", "Real Estate", "Services"],
  tech: ["React", "Next.js", "Flutter", "Node.js", "WordPress"],
} as const;

export const services = {
  eyebrow: "What we do",
  heading: "Services built for business growth",
  body: "End-to-end delivery — strategy, design, build, launch, and long-term care. Pick one service or hand us the whole roadmap.",
  cta: "Start a Project",
  items: [
    {
      slug: "website-development",
      icon: "globe",
      title: "Website Design & Development",
      outcome: "Fast, SEO-ready business websites that turn visitors into enquiries.",
      chips: ["Business Sites", "SEO Setup", "Lead Forms"],
    },
    {
      slug: "web-app-development",
      icon: "app-window",
      title: "Web Application Development",
      outcome: "Secure dashboards, portals, and booking systems built to scale.",
      chips: ["Dashboards", "Portals", "APIs"],
      featured: true,
    },
    {
      slug: "mobile-app-development",
      icon: "smartphone",
      title: "Mobile App Development",
      outcome: "Android & iOS apps your customers will actually enjoy using.",
      chips: ["Android & iOS", "Flutter", "Push Alerts"],
    },
    {
      slug: "custom-software",
      icon: "boxes",
      title: "Custom Software Development",
      outcome: "Billing, inventory, CRM, and internal tools shaped to your workflow.",
      chips: ["CRM & ERP", "Billing", "Integrations"],
    },
    {
      slug: "ui-ux-design",
      icon: "pen-tool",
      title: "UI/UX Design",
      outcome: "Clean, modern interfaces prototyped and approved before we build.",
      chips: ["Figma Design", "Prototypes", "Redesigns"],
    },
    {
      slug: "business-automation",
      icon: "workflow",
      title: "Business Automation",
      outcome: "Replace spreadsheets and follow-ups with automated workflows.",
      chips: ["WhatsApp", "Reports", "Workflows"],
    },
    {
      slug: "maintenance",
      icon: "shield-check",
      title: "Website & App Maintenance",
      outcome: "Updates, backups, monitoring, and small changes — handled for you.",
      chips: ["AMC Plans", "Backups", "Support"],
    },
    {
      slug: "technology-consulting",
      icon: "compass",
      title: "Technology Consulting",
      outcome: "Honest guidance on scope, cost, and the right stack — free first call.",
      chips: ["Free Consult", "Audits", "Roadmaps"],
    },
  ],
} as const;

export const stats = {
  eyebrow: "Outcomes we deliver",
  heading: "Built for business results",
  body: "Every engagement is scoped around leads, efficiency, and reliability — not just shipping screens.",
  cards: [
    {
      kicker: "Delivery",
      value: "20+",
      body: "Websites, apps, and automation projects delivered for businesses",
      badge: "WEB · APPS · SOFTWARE",
    },
    {
      kicker: "Responsiveness",
      value: "< 24h",
      valueAccent: true,
      body: "First response on every enquiry, with a scoped quote within 48 hours",
      badge: "CONSULTATION · FREE",
    },
    {
      kicker: "Coverage",
      value: "08",
      body: "Core services end to end — from design and build to maintenance",
      badge: "DESIGN → MAINTENANCE",
    },
  ],
} as const;

export const caseStudies = {
  eyebrow: "Selected client work",
  heading: "Work that moves the needle",
  body: "A sample of the engagements we deliver — websites, apps, and automations scoped around business outcomes.",
  indexLabel: "Showing 04 representative engagements",
  cases: [
    {
      index: "01 / Business website",
      title: "Service Company Website + Lead Forms",
      tags: ["Next.js", "SEO", "Lead Forms"],
      status: "Delivered",
      active: true,
    },
    {
      index: "02 / Web application",
      title: "Booking & Billing Dashboard",
      tags: ["React", "Node.js", "Automation"],
      status: "In production",
      active: false,
    },
    {
      index: "03 / Mobile app",
      title: "Customer & Orders App",
      tags: ["Flutter", "API", "Android · iOS"],
      status: "Delivered",
      active: false,
    },
    {
      index: "04 / Automation",
      title: "Spreadsheet → Automated Workflow",
      tags: ["CRM", "WhatsApp", "Reports"],
      status: "In production",
      active: false,
    },
  ],
} as const;

export const spotlight = {
  chips: ["Flagship engagement", "Web + Automation", "2026 delivery"],
  title: "Website + Automation That Follows Up for You",
  specLabel: "What you get",
  specValue: "High-converting website + automated enquiry follow-ups over WhatsApp and email",
  noteLabel: "[ Delivery note ]",
  noteBody:
    "We ship a fast, SEO-ready website with lead forms, then connect every enquiry to automated follow-ups and a simple dashboard — launched in weeks, with training and maintenance included.",
  cta: "Start a similar project",
} as const;

export const process = {
  eyebrow: "How we work",
  heading: "From idea to launch, without the chaos",
  body: "A simple, transparent process — you always know what's happening, what's next, and what it costs.",
  steps: [
    {
      n: "01",
      title: "Discover",
      body: "Free consultation to understand your goals, customers, and must-haves.",
      chip: "Quote in 48h",
    },
    {
      n: "02",
      title: "Design",
      body: "UI/UX mockups and a clickable prototype for your approval.",
      chip: "Figma prototype",
    },
    {
      n: "03",
      title: "Build",
      body: "Weekly demos on a staging link — give feedback as we build.",
      chip: "Staging link",
    },
    {
      n: "04",
      title: "Launch",
      body: "Testing, SEO basics, analytics, and a smooth go-live.",
      chip: "Go-live checklist",
    },
    {
      n: "05",
      title: "Maintain",
      body: "Updates, backups, and priority support under a care plan.",
      chip: "AMC available",
    },
  ],
  cta: "Get a Free Consultation",
} as const;

export const capabilities = {
  eyebrow: "Capabilities",
  heading: "Technologies & tools we use",
  body: "Modern, proven stacks — chosen for speed, SEO, and maintainability, not hype.",
  tiles: [
    {
      title: "Websites & Frontend",
      body: "High-converting business websites and storefronts — fast, mobile-first, and easy to update.",
      dark: false,
      chips: ["Next.js & React", "WordPress", "Tailwind CSS"],
    },
    {
      title: "Apps, APIs & Data",
      body: "Web and mobile apps with secure APIs and reliable databases behind them.",
      dark: true,
      chips: ["Flutter Apps", "Node.js APIs", "MongoDB · PostgreSQL"],
    },
    {
      title: "Design, Automation & Care",
      body: "Interfaces, integrations, and ongoing care that keep your systems running and improving.",
      dark: false,
      chips: ["Figma UI/UX", "CRM · WhatsApp", "AMC & SEO"],
    },
  ],
} as const;

export const testimonials = {
  enabled: true,
  eyebrow: "Client words",
  heading: "What our clients say",
  note: "References available on request",
  quotes: [
    {
      quote:
        "Obsidian rebuilt our website and automated our enquiry follow-ups. We respond faster and never lose a lead to a missed call now.",
      name: "Business Owner",
      role: "Services Company · Website + Automation",
    },
    {
      quote:
        "Clear scope, weekly demos, and honest timelines. The dashboard they built cut our manual billing work dramatically.",
      name: "Operations Head",
      role: "Retail Business · Web Application",
    },
  ],
  summary: {
    label: "[ Typical engagement ]",
    rows: [
      { k: "Scope:", v: "Website + Automation" },
      { k: "Timeline:", v: "2–6 weeks" },
      { k: "Support:", v: "Maintenance plans", accent: true },
    ],
    badge: "References on request",
  },
} as const;

export const faq = {
  eyebrow: "Questions, answered",
  heading: "Frequently asked questions",
  body: "Straight answers on cost, timelines, ownership, and support. Anything else — just ask.",
  cta: "Ask a Custom Question",
  items: [
    {
      q: "How much does a website or app cost?",
      a: "Every project is scoped, so you get a fixed quote within 48 hours of our free consultation. As a rough guide: business websites typically start small, web applications and mobile apps are scoped by features. No hidden charges — the proposal lists everything.",
    },
    {
      q: "How long does a typical project take?",
      a: "Business websites usually take 2–4 weeks. Web applications and mobile apps typically take 6–12 weeks depending on features. You'll see progress weekly on a staging link, so there are no surprises at the end.",
    },
    {
      q: "Do you redesign existing websites?",
      a: "Yes. We audit your current site for speed, SEO, and conversions, then redesign and rebuild without losing your search rankings or content. We handle migration, redirects, and go-live for you.",
    },
    {
      q: "Will I be able to update content myself?",
      a: "Yes. You get an easy admin/CMS where you can edit text, images, and pages — plus a short handover video and documentation. And if you'd rather not touch it, our maintenance plans cover updates for you.",
    },
    {
      q: "Do you provide maintenance after launch?",
      a: "Yes. Our care plans include updates, backups, uptime monitoring, security checks, and a quota of small changes each month. You get priority support and a direct contact — no ticket black holes.",
    },
    {
      q: "How do we start?",
      a: "Fill the contact form or request a free consultation. We discuss your goals, send a scoped proposal with timeline and fixed pricing, and kick off with a small advance. Most projects start within a week of approval.",
    },
  ],
} as const;

export const cta = {
  badge: "Free consultation · No commitment",
  heading: "Have a project in mind? Let's talk.",
  body: "Tell us about your goals — we'll reply within 24 hours with next steps and a rough quote.",
  primary: "Start a Project",
  secondary: "Get a Free Consultation",
} as const;

export const contact = {
  eyebrow: "Contact us",
  heading: "Tell us about your project",
  body: "Share a few details and we'll get back within 24 hours with next steps. Prefer to talk directly? Call, WhatsApp, or email us.",
  responseBadge: "Response < 24h · Mon–Sat, IST",
  ndaNote: "NDA-friendly. Your idea stays confidential.",
  services: [
    "Website Design & Development",
    "Web Application Development",
    "Mobile App Development",
    "Custom Software Development",
    "UI/UX Design",
    "Business Automation",
    "Website & Application Maintenance",
    "Technology Consulting",
    "Something else",
  ],
  budgets: ["Under ₹25k", "₹25k – ₹75k", "₹75k – ₹2L", "₹2L+", "Not sure yet"],
  successTitle: "Thanks — we've got your enquiry.",
  successBody:
    "We'll reply within 24 hours (Mon–Sat, IST). For anything urgent, reach us directly by phone or WhatsApp.",
} as const;

export const footer = {
  brandBlurb:
    "Obsidian Tech Solution designs, builds, and maintains websites, apps, and custom software for businesses.",
  locations: "India · Serving Worldwide",
  directory: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  companyCol: [
    { label: "Start a Project", href: "#contact" },
    { label: "Free Consultation", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  legal: "© 2026 Obsidian Tech Solution · obsidiantechsolution.in. All rights reserved.",
  latency: "Response < 24h · Mon–Sat, IST",
  statusTitle: "Work with us",
  statusBadge: "Accepting new projects",
  statusBody:
    "Currently onboarding new client projects. Tell us your goals — reply within 24 hours.",
  statusCta: "Start a Project →",
  bottomNote: "© 2026 Obsidian Tech Solution. All rights reserved.",
  colophon: "Websites · Apps · Software · Automation",
} as const;

export const seo = {
  siteName: "Obsidian Tech Solution",
  title: "Obsidian Tech Solution — Websites, Apps & Software for Business",
  description:
    "Obsidian Tech Solution designs, builds, and maintains high-converting websites, web & mobile apps, custom software, and automations for businesses. Get a free consultation.",
  keywords: [
    "website development india",
    "web application development",
    "mobile app development",
    "custom software development",
    "ui ux design services",
    "business automation",
    "website maintenance services",
    "technology consulting",
  ],
} as const;
