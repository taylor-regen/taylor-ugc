"use client";

import Image from "next/image";
import { niches, workCategories } from "@/lib/content";
import { HeroCoverVideo } from "@/components/portfolio/HeroCoverVideo";
import { WorkVideoCard } from "@/components/portfolio/WorkVideoCard";
import { BrandLogoMarquee } from "@/components/portfolio/BrandLogoMarquee";
import {
  PenArrow,
  PenEnvelope,
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
        <PenStar className="absolute -left-1 top-8 hidden size-7 text-teal/70 md:block" />
        <PenHeart className="absolute bottom-24 left-[46%] hidden size-6 text-teal/60 md:block" />

        <div>
          <p className="font-pen text-2xl text-teal md:text-[1.7rem]">Canvas UGC creator</p>
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
              className="relative inline-flex px-1 pb-2 font-pen text-2xl text-teal transition hover:opacity-80"
            >
              work with me
              <PenUnderline className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-3 w-full text-teal" />
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("work");
              }}
              className="text-sm font-medium text-navy underline decoration-teal/40 underline-offset-4 transition hover:text-teal"
            >
              See my work
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] md:mx-0 md:ml-auto md:max-w-[400px]">
          <PenStar className="absolute -right-3 top-6 z-20 size-6 rotate-12 text-teal md:size-7" />
          <PenHeart className="absolute -left-2 bottom-16 z-20 size-5 -rotate-12 text-teal/80 md:size-6" />

          <div className="absolute left-[2%] top-[10%] z-0 h-[78%] w-[58%] -rotate-[8deg] overflow-hidden rounded-[28px] bg-navy shadow-[0_18px_40px_-20px_rgba(11,31,58,0.35)]">
            <video
              className="h-full w-full object-cover"
              src="/work/krea-shocked.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            />
          </div>
          <div className="absolute right-[2%] top-[10%] z-0 h-[78%] w-[58%] rotate-[8deg] overflow-hidden rounded-[28px] bg-navy shadow-[0_18px_40px_-20px_rgba(11,31,58,0.4)]">
            <video
              className="h-full w-full object-cover"
              src="/work/gojiberry.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            />
          </div>
          <HeroCoverVideo />
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-28 pb-20 md:pb-28">
        <div className="relative mb-12 text-center">
          <PenStar className="absolute left-[18%] top-0 size-5 text-teal/50" />
          <PenHeart className="absolute right-[20%] top-2 size-5 text-teal/50" />
          <p className="font-pen text-2xl text-teal">Canvas UGC</p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-navy md:text-4xl">
            Short-form that actually performs.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-text-muted md:text-base">
            Talking videos and expression clips for Meta Canvas ads.
          </p>
          <BrandLogoMarquee />
        </div>

        <div className="flex flex-col gap-14">
          {workCategories.map((category) => (
            <div key={category.name}>
              <div className="mb-5 flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-navy">{category.name}</h3>
              </div>
              {category.items.length > 0 ? (
                <div
                  className={
                    category.items.length < 4
                      ? "mx-auto grid w-full max-w-3xl grid-cols-2 justify-center gap-3 sm:gap-4 md:grid-cols-3"
                      : "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
                  }
                >
                  {category.items.map((item) => (
                    <WorkVideoCard key={item.title} item={item} />
                  ))}
                </div>
              ) : (
                <p className="rounded-[22px] border border-dashed border-border bg-white/60 px-5 py-8 text-sm text-text-muted">
                  Talking videos coming soon — drop clips in and we&apos;ll add them here.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-28 pb-20 md:pb-28">
        <div className="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
          <div className="relative mx-auto w-full max-w-md md:mx-0">
            <p className="font-pen text-[2rem] leading-none text-teal md:text-[2.35rem]">
              I can&apos;t wait to work with you
            </p>

            <div className="relative mt-6 flex justify-center">
              <PenHeart className="absolute -right-2 top-2 size-6 rotate-12 text-teal" />
              <PenStar className="absolute bottom-4 -right-4 size-5 text-teal/70" />
              <PenHeart className="absolute -bottom-1 left-4 size-5 -rotate-6 text-teal/70" />

              <div className="relative">
                <div className="relative h-64 w-48 -rotate-2 overflow-hidden rounded-sm shadow-[0_12px_30px_-16px_rgba(11,31,58,0.45)] ring-1 ring-black/5 md:h-72 md:w-56">
                  <Image
                    src="/taylor-about.jpg"
                    alt="Taylor Ashley"
                    fill
                    className="object-cover object-[50%_20%]"
                    sizes="(max-width: 768px) 192px, 224px"
                    priority
                  />
                </div>

                <div className="absolute -left-28 top-6 hidden text-teal sm:block md:-left-32">
                  <p className="mb-1 -rotate-6 font-pen text-2xl leading-[0.95]">
                    <span className="relative inline-block pr-5">
                      Taylor
                      <br />
                      Ashley
                      <PenUnderline className="absolute -bottom-1 left-0 h-3 w-[85%]" />
                      <PenStar className="absolute -right-1 top-0 size-5 rotate-12 text-teal" />
                    </span>
                  </p>
                  <PenArrow className="ml-8 h-14 w-20 rotate-[25deg]" />
                </div>
              </div>
            </div>

            <div className="mt-5 text-teal sm:hidden">
              <p className="font-pen text-3xl leading-[0.95]">
                <span className="relative inline-block pr-6">
                  Taylor
                  <br />
                  Ashley
                  <PenUnderline className="absolute -bottom-1 left-0 h-3 w-[85%]" />
                  <PenStar className="absolute -right-0 top-0 size-5 rotate-12 text-teal" />
                </span>
              </p>
              <p className="mt-3 font-pen text-xl leading-snug text-teal/80">
                B2B/B2C SaaS, AI tools, mobile apps, and digital software.
              </p>
            </div>
            <p className="mt-4 hidden max-w-xs font-pen text-xl leading-snug text-teal/80 sm:block">
              B2B/B2C SaaS, AI tools, mobile apps, and digital software.
            </p>
          </div>

          <div>
            <p className="font-pen text-2xl text-teal">about me</p>
            <h2 className="mt-2 max-w-xl font-display text-3xl tracking-tight text-navy md:text-4xl">
              8+ years in marketing strategy, now creating content for modern tech brands.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
              I&apos;ve spent over 8 years working in marketing and running my own agency. I
              know how performance marketing works, what hooks capture attention, and why
              traditional ads fail to convert.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="relative mt-8 inline-flex px-1 pb-2 font-pen text-2xl text-teal transition hover:opacity-80"
            >
              work with me
              <PenUnderline className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-3 w-full text-teal" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-28">
        <div className="relative overflow-hidden rounded-[32px] border border-border bg-white px-6 py-12 text-center md:px-12 md:py-16">
          <PenStar className="absolute left-8 top-8 size-6 text-teal/50" />
          <PenHeart className="absolute right-10 top-10 size-6 text-teal/50" />
          <PenStar className="absolute bottom-10 left-1/4 size-5 text-teal/40" />
          <p className="font-pen text-2xl text-teal">contact me</p>
          <h2 className="mt-3 font-display text-3xl text-navy md:text-4xl">
            Let&apos;s create high-converting content
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-text-muted md:text-base">
            Have an app, SaaS, or AI tool launch coming up? Drop me an email with your
            timeline and target goals.
          </p>
          <a
            href="mailto:taylorashley1@hotmail.co.uk"
            className="relative mt-8 inline-flex items-center gap-3 px-1 pb-2 font-pen text-2xl text-teal transition hover:opacity-80"
          >
            <PenEnvelope className="size-8 shrink-0 text-teal" />
            taylorashley1@hotmail.co.uk
            <PenUnderline className="pointer-events-none absolute inset-x-10 -bottom-0.5 h-3 text-teal" />
          </a>
        </div>
      </section>
    </div>
  );
}
