export const navItems = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export const niches = ["Tech", "SaaS", "AI", "Software"] as const;

export const workCategories = [
  {
    name: "Content Creation",
    count: 4,
    items: [
      {
        title: "Lorem ipsum product walkthrough",
        platform: "TIKTOK",
        tone: "from-navy to-navy-soft",
      },
      {
        title: "Consectetur app onboarding hook",
        platform: "REELS",
        tone: "from-teal to-teal-bright",
      },
      {
        title: "Sed do eiusmod feature highlight",
        platform: "SHORTS",
        tone: "from-[#1e3a5f] to-teal",
      },
      {
        title: "Ut labore lifestyle tech reel",
        platform: "TIKTOK",
        tone: "from-navy-soft to-[#0f766e]",
      },
    ],
  },
  {
    name: "Canvas UGC",
    count: 4,
    items: [
      {
        title: "Magna aliqua canvas ad concept",
        platform: "REELS",
        tone: "from-[#0c4a6e] to-navy",
      },
      {
        title: "Quis nostrud hook stack sample",
        platform: "TIKTOK",
        tone: "from-teal-bright to-navy-soft",
      },
      {
        title: "Exercitation ullamco demo cut",
        platform: "SHORTS",
        tone: "from-navy to-[#134e4a]",
      },
      {
        title: "Duis aute irure testimonial style",
        platform: "YOUTUBE",
        tone: "from-[#115e59] to-navy",
      },
    ],
  },
] as const;
