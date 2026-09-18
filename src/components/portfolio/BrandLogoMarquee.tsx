import Image from "next/image";

const logos = [
  { name: "Spyglass", src: "/logos/spyglass.png", width: 120 },
  { name: "Krea", src: "/logos/krea.png", width: 96 },
  { name: "Twisty", src: "/logos/twisty.png", width: 40 },
  { name: "Cantina", src: "/logos/cantina.png", width: 112 },
  { name: "Gojiberry", src: "/logos/gojiberry.png", width: 128 },
  { name: "Playad", src: "/logos/playad.png", width: 108 },
  { name: "Vibiz", src: "/logos/vibiz.png", width: 112 },
] as const;

function LogoSet({ suffix }: { suffix: string }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-8 md:gap-10"
      aria-hidden={suffix !== "a"}
    >
      {logos.map((logo) => (
        <li key={`${logo.name}-${suffix}`} className="flex shrink-0 items-center">
          <Image
            src={logo.src}
            alt={suffix === "a" ? logo.name : ""}
            width={logo.width}
            height={28}
            className="h-5 w-auto object-contain opacity-70 md:h-6"
            unoptimized
          />
        </li>
      ))}
    </ul>
  );
}

export function BrandLogoMarquee() {
  return (
    <div className="relative mx-auto mt-6 max-w-3xl overflow-hidden py-1.5 md:mt-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#fafafa] to-transparent md:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#fafafa] to-transparent md:w-16" />

      <div className="logo-marquee flex w-max items-center gap-8 md:gap-10">
        <LogoSet suffix="a" />
        <LogoSet suffix="b" />
      </div>
    </div>
  );
}
