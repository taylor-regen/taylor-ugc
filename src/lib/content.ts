export const navItems = [
  { id: "overview", label: "Overview" },
  { id: "work", label: "Work" },
  { id: "case-studies", label: "Case Studies" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export const filters = [
  "All",
  "Product Demo",
  "Unboxing",
  "Talking Head",
  "Lifestyle Tech",
  "App Walkthrough",
] as const;

export const proofStats = [
  { label: "Avg. engagement", value: "6.4%" },
  { label: "Save rate", value: "11.2%" },
  { label: "Brands shipped", value: "28+" },
  { label: "Avg. turnaround", value: "72 hrs" },
] as const;

export const workCategories = [
  {
    name: "SaaS",
    count: 4,
    items: [
      {
        title: "Lorem ipsum dolor sit amet dashboard walkthrough",
        platform: "TIKTOK",
        views: "1.2M",
        metric: "12% CTR",
        tone: "from-navy to-navy-soft",
      },
      {
        title: "Consectetur adipiscing elit onboarding hook",
        platform: "REELS",
        views: "840K",
        metric: "8.1% ENG",
        tone: "from-teal to-teal-bright",
      },
      {
        title: "Sed do eiusmod tempor feature highlight",
        platform: "SHORTS",
        views: "620K",
        metric: "9.4% SAVES",
        tone: "from-[#1e3a5f] to-teal",
      },
      {
        title: "Ut labore et dolore pricing objection clip",
        platform: "TIKTOK",
        views: "410K",
        metric: "14% CTR",
        tone: "from-navy-soft to-[#0f766e]",
      },
    ],
  },
  {
    name: "Hardware",
    count: 3,
    items: [
      {
        title: "Magna aliqua unboxing first impressions",
        platform: "YOUTUBE",
        views: "980K",
        metric: "7.8% ENG",
        tone: "from-[#0c4a6e] to-navy",
      },
      {
        title: "Quis nostrud desk setup integration",
        platform: "REELS",
        views: "550K",
        metric: "10% SAVES",
        tone: "from-teal-bright to-navy-soft",
      },
      {
        title: "Exercitation ullamco mic & webcam demo",
        platform: "TIKTOK",
        views: "730K",
        metric: "5.9% ENG",
        tone: "from-navy to-[#134e4a]",
      },
    ],
  },
  {
    name: "AI Tools",
    count: 3,
    items: [
      {
        title: "Duis aute irure prompt-to-product reel",
        platform: "SHORTS",
        views: "2.1M",
        metric: "15% CTR",
        tone: "from-[#115e59] to-navy",
      },
      {
        title: "In reprehenderit workflow before/after",
        platform: "TIKTOK",
        views: "1.4M",
        metric: "11% SAVES",
        tone: "from-navy-soft to-teal-bright",
      },
      {
        title: "Voluptate velit esse AI assistant demo",
        platform: "REELS",
        views: "890K",
        metric: "9.2% ENG",
        tone: "from-[#164e63] to-teal",
      },
    ],
  },
  {
    name: "Developer",
    count: 2,
    items: [
      {
        title: "Cillum dolore CLI tip in 30 seconds",
        platform: "SHORTS",
        views: "360K",
        metric: "8.6% ENG",
        tone: "from-navy to-[#0e7490]",
      },
      {
        title: "Fugiat nulla API docs made visual",
        platform: "TIKTOK",
        views: "290K",
        metric: "13% CTR",
        tone: "from-teal to-navy-soft",
      },
    ],
  },
] as const;

export const caseStudies = [
  {
    name: "Lumen Sync™",
    blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    metrics: ["FEATURED LAUNCH", "+128% CTR", "2.4M VIEWS"],
    tone: "from-[#0b1f3a] via-[#134e4a] to-[#0d9488]",
  },
  {
    name: "Northgrid OS",
    blurb: "Sed do eiusmod tempor incididunt ut labore et dolore.",
    metrics: [],
    tone: "from-[#1a3358] to-[#0f766e]",
  },
  {
    name: "ParcelKit©",
    blurb: "Ut enim ad minim veniam, quis nostrud exercitation.",
    metrics: [],
    tone: "from-[#115e59] to-[#0b1f3a]",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Brief",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Brand goals and hooks aligned.",
  },
  {
    step: "02",
    title: "Script",
    body: "Sed do eiusmod tempor incididunt. Hook, demo beats, and CTA locked before filming.",
  },
  {
    step: "03",
    title: "Film",
    body: "Ut labore et dolore magna aliqua. Clean framing, natural delivery, tech-first lighting.",
  },
  {
    step: "04",
    title: "Deliver",
    body: "Quis nostrud exercitation. Edited cuts, captions, and platform-ready exports.",
  },
] as const;

export const testimonials = [
  {
    date: "Mar 2026",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Content that finally matched our product voice.",
    name: "Alex Rivera",
    role: "Growth Lead · SaaS",
    tint: "bg-teal-soft",
  },
  {
    date: "Jan 2026",
    quote:
      "Ut enim ad minim veniam. Fast turnaround, sharp hooks, and measurable lift on paid.",
    name: "Jordan Lee",
    role: "Brand Manager · Hardware",
    tint: "bg-[#e0f2fe]",
  },
  {
    date: "Nov 2025",
    quote:
      "Duis aute irure dolor in reprehenderit. Easy process from brief to final cut.",
    name: "Sam Okonkwo",
    role: "Founder · AI Tools",
    tint: "bg-bg-muted",
  },
] as const;
