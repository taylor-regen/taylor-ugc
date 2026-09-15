"use client";

import { Play } from "lucide-react";
import { niches, workCategories } from "@/lib/content";
import {
  PenArrow,
  PenCircle,
  PenHeart,
  PenStar,
  PenUnderline,
} from "@/components/portfolio/PenDoodles";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-24 md:px-6 md:pt-28">
      {/* Hero */}
      <section className="relative grid items-center gap-10 pb-20 md:grid-cols-2 md:gap-12 md:pb-28">
        <PenStar className="absolute -left-1 top-8 hidden size-7 text-ink/70 md:block" />
        <PenHeart className="absolute bottom-24 left-[46%] hidden size-6 text-ink/60 md:block" />

        <div>
          <p className="font-pen text-2xl text-ink md:text-[1.7rem]">UGC creator</p>
          <h1 className="mt-3 max-w-xl font-display text-4xl leading-[1.05] tracking-tight text-navy md:text-5xl lg:text-[3.25rem]">
            I help tech and app brands convert viewers into users.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-muted md:text-lg">
            Authentic short-form videos that make complex digital products easy to
            understand.
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

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="relative inline-flex px-5 py-2 font-pen text-3xl text-ink transition hover:opacity-80"
            >
              work with me
              <PenCircle className="pointer-events-none absolute -inset-x-2 -inset-y-1 text-ink" />
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("work");
              }}
              className="text-sm font-medium text-navy underline decoration-ink/40 underline-offset-4 transition hover:text-ink"
            >
              See my work
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] md:mx-0 md:ml-auto md:max-w-[400px]">
          <PenStar className="absolute -right-3 top-6 z-20 size-6 rotate-12 text-ink md:size-7" />
          <PenHeart className="absolute -left-2 bottom-16 z-20 size-5 -rotate-12 text-ink/80 md:size-6" />

          <div
            aria-hidden
            className="absolute left-[2%] top-[10%] z-0 h-[78%] w-[58%] -rotate-[8deg] rounded-[28px] bg-gradient-to-br from-[#c5d0dc] to-[#9aadc0] shadow-[0_18px_40px_-20px_rgba(11,31,58,0.35)]"
          />
          <div
            aria-hidden
            className="absolute right-[2%] top-[10%] z-0 h-[78%] w-[58%] rotate-[8deg] rounded-[28px] bg-gradient-to-br from-navy-soft/80 to-teal/70 shadow-[0_18px_40px_-20px_rgba(11,31,58,0.4)]"
          />
          <div className="absolute left-1/2 top-[4%] z-10 h-[90%] w-[68%] -translate-x-1/2 overflow-hidden rounded-[28px] bg-gradient-to-br from-navy via-navy-soft to-teal shadow-[0_28px_50px_-18px_rgba(11,31,58,0.55)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.2),transparent_45%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-white/95 text-navy shadow-lg">
                <Play className="size-5 fill-current" />
              </span>
            </div>
            <p className="absolute bottom-8 left-5 right-5 font-display text-2xl leading-tight text-white md:text-[1.65rem]">
              How I edit
              <br />
              tech product clips
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-28 pb-20 md:pb-28">
        <div className="relative mb-12 text-center">
          <PenStar className="absolute left-[18%] top-0 size-5 text-ink/50" />
          <PenHeart className="absolute right-[20%] top-2 size-5 text-ink/50" />
          <p className="font-pen text-2xl text-ink">work</p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-navy md:text-4xl">
            Short-form that actually performs.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-text-muted md:text-base">
            Content creation and canvas UGC for tech brands.
          </p>
        </div>

        <div className="flex flex-col gap-14">
          {workCategories.map((category) => (
            <div key={category.name}>
              <div className="mb-5 flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-navy">{category.name}</h3>
                <span className="font-pen text-xl text-ink">{category.count}</span>
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
        <div className="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
          {/* Handwritten scrapbook side */}
          <div className="relative mx-auto w-full max-w-md md:mx-0">
            <p className="font-pen text-[2rem] leading-none text-ink md:text-[2.35rem]">
              I can&apos;t wait to work with you
            </p>

            <div className="relative mt-6 flex justify-center">
              <PenStar className="absolute -left-1 top-8 size-6 -rotate-12 text-ink" />
              <PenHeart className="absolute -right-2 top-2 size-6 rotate-12 text-ink" />
              <PenStar className="absolute bottom-4 -right-4 size-5 text-ink/70" />
              <PenHeart className="absolute -bottom-1 left-4 size-5 -rotate-6 text-ink/70" />

              <div className="relative">
                <div className="h-56 w-44 -rotate-2 overflow-hidden rounded-sm bg-gradient-to-br from-[#d6dde6] via-[#b8c4d1] to-[#8fa0b3] shadow-[0_12px_30px_-16px_rgba(11,31,58,0.45)] ring-1 ring-black/5 md:h-64 md:w-52">
                  <div className="flex h-full items-end justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.35),transparent_55%)] pb-4">
                    <span className="font-pen text-lg text-navy/40">photo soon</span>
                  </div>
                </div>

                <div className="absolute -left-16 top-10 hidden w-28 rotate-[-18deg] text-ink sm:block md:-left-20">
                  <PenArrow className="h-16 w-full rotate-90 scale-x-[-1]" />
                </div>
              </div>
            </div>

            <div className="mt-5 text-ink">
              <p className="font-pen text-3xl leading-none md:text-[2.1rem]">
                Taylor,{" "}
                <span className="relative inline-block">
                  English
                  <PenUnderline className="absolute -bottom-1 left-0 h-3 w-full" />
                </span>
              </p>
              <p className="mt-3 font-pen text-xl text-ink/80">UGC · tech &amp; apps</p>
            </div>
          </div>

          {/* About copy */}
          <div>
            <p className="font-pen text-2xl text-ink">about me</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-navy md:text-4xl">
              Built for tech brands
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
              I&apos;ve spent 8 years in marketing and now run my own marketing agency. I
              understand what makes audiences stop scrolling and take action.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="relative mt-8 inline-flex px-5 py-2 font-pen text-3xl text-ink transition hover:opacity-80"
            >
              work with me
              <PenCircle className="pointer-events-none absolute -inset-x-2 -inset-y-1 text-ink" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-28">
        <div className="relative overflow-hidden rounded-[32px] border border-border bg-white px-6 py-12 text-center md:px-12 md:py-16">
          <PenStar className="absolute left-8 top-8 size-6 text-ink/50" />
          <PenHeart className="absolute right-10 top-10 size-6 text-ink/50" />
          <PenStar className="absolute bottom-10 left-1/4 size-5 text-ink/40" />
          <p className="font-pen text-2xl text-ink">contact</p>
          <h2 className="mt-3 font-display text-3xl text-navy md:text-4xl">
            Let&apos;s make something scroll-stopping
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-muted md:text-base">
            Tell me about the product and timeline.
          </p>
          <a
            href="mailto:hello@example.com"
            className="relative mt-8 inline-flex px-5 py-2 font-pen text-3xl text-ink transition hover:opacity-80"
          >
            hello@example.com
            <PenCircle className="pointer-events-none absolute -inset-x-3 -inset-y-1 text-ink" />
          </a>
        </div>
      </section>
    </div>
  );
}
