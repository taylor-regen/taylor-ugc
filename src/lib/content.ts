export const navItems = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export const niches = ["Tech", "SaaS", "AI", "Software"] as const;

export type WorkItem = {
  title: string;
  platform?: string;
  tone?: string;
  /** Drop final mp4 into public/ and set this path to replace the grey placeholder */
  src?: string;
  /** Black/dark logo shown on hover (Canvas) or above the card */
  logo?: string;
  caption?: string;
};

/** Section 1 — Polarsteps editing styles */
export const editingStyleItems: WorkItem[] = [
  {
    title: "Creative Edits",
    caption: "Creative editing, playful transitions with dynamic pacing and animations.",
    tone: "from-[#d4d8de] to-[#b8c0ca]",
    src: "/work/polarsteps-creative-edits.mp4",
    logo: "/logos/polarsteps.svg",
  },
  {
    title: "Direct Response",
    caption: "Strong hooks, clear product benefits, engaging visuals and persuasive messaging.",
    tone: "from-[#d4d8de] to-[#b8c0ca]",
    src: "/work/polarsteps-direct-response.mp4",
    logo: "/logos/polarsteps.svg",
  },
  {
    title: "Talking to Camera",
    caption: "Natural delivery, personality, relatable opinions and conversational content.",
    tone: "from-[#d4d8de] to-[#b8c0ca]",
    src: "/work/polarsteps-talking-to-camera.mp4",
    logo: "/logos/polarsteps.svg",
  },
];

/** Canvas UGC gallery (existing assets; order = showcase priority) */
export const canvasItems: WorkItem[] = [
  {
    title: "Gojiberry",
    platform: "CANVAS",
    tone: "from-teal to-navy-soft",
    src: "/work/gojiberry.mp4",
    logo: "/logos/gojiberry.png",
  },
  {
    title: "Cantina",
    platform: "CANVAS",
    tone: "from-[#115e59] to-navy",
    src: "/work/cantina.mp4",
    logo: "/logos/cantina.png",
  },
  {
    title: "Krea",
    platform: "CANVAS",
    tone: "from-teal to-teal-bright",
    src: "/work/krea-shocked.mp4",
    logo: "/logos/krea.png",
  },
  {
    title: "Vibiz",
    platform: "CANVAS",
    tone: "from-[#0c4a6e] to-navy",
    src: "/work/vibiz.mp4",
    logo: "/logos/vibiz.png",
  },
  {
    title: "Spyglass",
    platform: "CANVAS",
    tone: "from-navy to-navy-soft",
    src: "/work/spyglass.mp4",
    logo: "/logos/spyglass.png",
  },
  {
    title: "Playad",
    platform: "CANVAS",
    tone: "from-navy via-navy-soft to-teal",
    src: "/work/playad.mp4",
    logo: "/logos/playad.png",
  },
];
