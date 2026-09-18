const brands = [
  "Spyglass",
  "Krea",
  "Vibiz",
  "Cantina",
  "Twisty",
  "Gojiberry",
  "Viktor",
  "PlayAd",
] as const;

function LogoSet({ suffix }: { suffix: string }) {
  return (
    <ul className="flex shrink-0 items-center gap-10 md:gap-14" aria-hidden={suffix !== "a"}>
      {brands.map((brand) => (
        <li
          key={`${brand}-${suffix}`}
          className="whitespace-nowrap text-lg font-semibold tracking-tight text-navy/35 md:text-xl"
        >
          {brand}
        </li>
      ))}
    </ul>
  );
}

export function BrandLogoMarquee() {
  return (
    <div className="relative mt-10 overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#fafafa] to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#fafafa] to-transparent md:w-28" />

      <div className="logo-marquee flex w-max items-center gap-10 md:gap-14">
        <LogoSet suffix="a" />
        <LogoSet suffix="b" />
      </div>
    </div>
  );
}
