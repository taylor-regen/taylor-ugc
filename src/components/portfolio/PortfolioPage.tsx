"use client";

import { ArrowUpRight, Play } from "lucide-react";
import { niches, workCategories } from "@/lib/content";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-28 md:px-6 md:pt-32">
      {/* Hero */}
      <section className="grid items-center gap-10 pb-20 md:grid-cols-2 md:gap-12 md:pb-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
            UGC creator & content specialist
          </p>
          <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-tight text-navy md:text-5xl lg:text-[3.25rem]">
            I help tech &amp; app brands convert viewers into users.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-muted md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Short-form for tech,
            SaaS, and product brands — clean demos, clear hooks, easy to ship.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {niches.map((niche) => (
              <span
                key={niche}
                className="rounded-full bg-white px-3.5 py-1.5 text-sm text-navy ring-1 ring-border"
              >
                {niche}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[#14171c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy"
            >
              Work with me
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-teal text-white">
                <ArrowUpRight className="size-3.5" />
              </span>
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("work");
              }}
              className="text-sm font-semibold text-navy underline-offset-4 transition hover:text-teal hover:underline"
            >
              See my work
            </a>
          </div>
        </div>

        {/* Stacked video hero */}
        <div className="relative mx-auto h-[420px] w-full max-w-[340px] md:mx-0 md:ml-auto md:h-[480px] md:max-w-[380px]">
          <div className="absolute left-0 top-10 h-[78%] w-[72%] -rotate-6 rounded-[28px] bg-gradient-to-br from-[#94a3b8] to-[#64748b] opacity-50 shadow-lg" />
          <div className="absolute left-6 top-4 h-[82%] w-[76%] -rotate-3 rounded-[28px] bg-gradient-to-br from-navy-soft to-teal opacity-70 shadow-xl" />
          <div className="absolute bottom-0 right-0 h-[88%] w-[82%] overflow-hidden rounded-[28px] bg-gradient-to-br from-navy via-navy-soft to-teal shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.2),transparent_45%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-white/95 text-navy shadow-lg">
                <Play className="size-5 fill-current" />
              </span>
            </div>
            <p className="absolute bottom-8 left-6 right-6 font-display text-2xl leading-tight text-white md:text-3xl">
              How I edit
              <br />
              tech product clips
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-28 pb-20 md:pb-28">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-teal-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">
            Work
          </span>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-navy md:text-4xl">
            Short-form that actually performs.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-text-muted md:text-base">
            Lorem ipsum dolor sit amet — content creation and canvas UGC for tech brands.
          </p>
        </div>

        <div className="flex flex-col gap-14">
          {workCategories.map((category) => (
            <div key={category.name}>
              <div className="mb-5 flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-navy">{category.name}</h3>
                <span className="text-sm text-text-faint">{category.count}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {category.items.map((item) => (
                  <article key={item.title} className="group cursor-pointer">
                    <div
                      className={`relative aspect-[9/16] overflow-hidden rounded-[22px] bg-gradient-to-br ${item.tone} transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_-24px_rgba(11,31,58,0.5)]`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.16),transparent_45%)]" />
                      <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur">
                        {item.platform}
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/90 text-navy transition group-hover:scale-110">
                          <Play className="size-4 fill-current" />
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm font-medium leading-snug text-navy">
                      {item.title}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-28 pb-20 md:pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-teal-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">
            About
          </span>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-navy md:text-4xl">
            Built for tech brands
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Clean framing, natural delivery,
            and hooks that make product stories feel human.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-28">
        <div className="rounded-[32px] bg-[#14171c] px-6 py-12 text-center text-white md:px-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-bright">
            Contact
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            Let&apos;s make something scroll-stopping
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/65 md:text-base">
            Lorem ipsum dolor sit amet. Tell me about the product and timeline.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#14171c] transition hover:bg-teal-soft"
          >
            hello@example.com
            <ArrowUpRight className="size-4 text-teal" />
          </a>
        </div>
      </section>
    </div>
  );
}
