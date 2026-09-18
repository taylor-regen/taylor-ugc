export const navItems = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export const niches = ["Tech", "SaaS", "AI", "Software"] as const;

export type WorkItem = {
  title: string;
  platform: string;
  tone: string;
  src?: string;
};

export type WorkCategory = {
  name: string;
  items: WorkItem[];
};

export const workCategories: WorkCategory[] = [
  {
    name: "Canvas UGC talking video",
    items: [
      {
        title: "Playad",
        platform: "CANVAS",
        tone: "from-navy via-navy-soft to-teal",
        src: "/work/playad.mp4",
      },
      {
        title: "Gojiberry",
        platform: "CANVAS",
        tone: "from-teal to-navy-soft",
        src: "/work/gojiberry.mp4",
      },
      {
        title: "Cantina",
        platform: "CANVAS",
        tone: "from-[#115e59] to-navy",
        src: "/work/cantina.mp4",
      },
    ],
  },
  {
    name: "Canvas UGC expressions",
    items: [
      {
        title: "Spyglass",
        platform: "CANVAS",
        tone: "from-navy to-navy-soft",
        src: "/work/spyglass.mp4",
      },
      {
        title: "Krea shocked",
        platform: "CANVAS",
        tone: "from-teal to-teal-bright",
        src: "/work/krea-shocked.mp4",
      },
      {
        title: "Vibiz",
        platform: "CANVAS",
        tone: "from-[#0c4a6e] to-navy",
        src: "/work/vibiz.mp4",
      },
    ],
  },
];
