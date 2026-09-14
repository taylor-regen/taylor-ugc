"use client";

import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import {
  caseStudies,
  filters,
  processSteps,
  proofStats,
  testimonials,
  workCategories,
} from "@/lib/content";

export function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:gap-12">
      {/* Overview */}
      <section id="overview" className="scroll-mt-24">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-[28px] border border-border bg-bg p-6 md:p-8">
            <span className="inline-flex rounded-full bg-teal-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-teal">
              Overview
            </span>
            <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-tight text-navy md:text-5xl">
              Short-form that sells tech.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-text-muted md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Product demos,
              app walkthroughs, and lifestyle tech for SaaS, hardware, and AI brands.
            </p>

            <div className="mt-8 overflow-hidden rounded-[22px] border border-border bg-gradient-to-br from-navy via-navy-soft to-teal">
              <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
                <div className="relative aspect-video md:aspect-auto md:min-h-[220px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(20,184,166,0.35),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      className="inline-flex size-14 items-center justify-center rounded-full bg-white/95 text-navy shadow-lg transition hover:scale-105"
                      aria-label="Play featured reel"
                    >
                      <Play className="size-5 fill-current" />
                    </button>
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                    Featured reel
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-3 p-5 text-white md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-bright">
                    In focus
                  </p>
                  <h2 className="text-xl font-semibold leading-snug">
                    Lorem ipsum dolor sit amet product walkthrough
                  </h2>
                  <p className="text-sm leading-relaxed text-white/75">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-white/10 px-2.5 py-1">SaaS</span>
                    <span className="rounded-full bg-white/10 px-2.5 py-1">48s</span>
                    <span className="rounded-full bg-white/10 px-2.5 py-1">1.2M views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3 rounded-[28px] border border-border bg-bg p-4">
              {proofStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-bg-soft px-3 py-4 transition hover:-translate-y-0.5 hover:bg-bg-muted"
                >
                  <p className="font-display text-2xl text-navy md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-text-faint">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-1 flex-col gap-3 rounded-[28px] border border-border bg-bg p-4">
              <p className="px-1 text-xs font-semibold uppercase tracking-[0.12em] text-text-faint">
                Recent feedback
              </p>
              {testimonials.slice(0, 2).map((t) => (
                <article
                  key={t.name}
                  className={`rounded-2xl ${t.tint} p-4 transition hover:-translate-y-0.5`}
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-faint">
                    {t.date}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy">{t.quote}</p>
                  <a
                    href="#about"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal"
                  >
                    Open note <ArrowUpRight className="size-3.5" />
                  </a>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-24">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-teal-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-teal">
              Work
            </span>
            <h2 className="mt-3 font-display text-3xl text-navy md:text-4xl">
              Performance-led clips
            </h2>
            <p className="mt-2 max-w-md text-sm text-text-muted md:text-base">
              Lorem ipsum dolor sit amet — formats tech brands hire for.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => {
              const selected = filter === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                    selected
                      ? "border-navy bg-navy text-white"
                      : "border-border bg-bg text-text-muted hover:border-navy/30 hover:text-navy"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {workCategories.map((category) => (
            <div key={category.name}>
              <div className="mb-4 flex items-baseline gap-2">
                <h3 className="text-lg font-semibold text-navy">{category.name}</h3>
                <span className="text-sm text-text-faint">{category.count}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {category.items.map((item) => (
                  <article
                    key={item.title}
                    className="group cursor-pointer"
                  >
                    <div
                      className={`relative aspect-[9/16] overflow-hidden rounded-[22px] bg-gradient-to-br ${item.tone} transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_-24px_rgba(11,31,58,0.55)]`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
                      <span className="absolute left-3 top-3 rounded-full bg-black/35 px-2 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur">
                        {item.platform}
                      </span>
                      <span className="absolute right-3 top-3 rounded-full bg-teal px-2 py-1 text-[10px] font-bold text-white">
                        {item.views}
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/90 text-navy opacity-90 transition group-hover:scale-110">
                          <Play className="size-4 fill-current" />
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm font-medium leading-snug text-navy">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.1em] text-teal">
                      {item.metric}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="scroll-mt-24">
        <div className="mb-6 flex flex-col gap-4 border-b border-border pb-5 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="font-display text-3xl text-navy md:text-5xl">
              Case Studies <span className="align-super text-base text-text-faint">(03)</span>
            </h2>
            <span className="mt-4 inline-flex rounded-full bg-navy px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
              Showcase of selected project
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-text-muted md:text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. High-end aesthetics
            meet conversion-focused short-form for tech.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <article key={study.name} className="group">
              <div
                className={`relative aspect-[4/5] overflow-hidden rounded-[24px] bg-gradient-to-br ${study.tone} transition duration-300 group-hover:-translate-y-1`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.16),transparent_50%)]" />
                {index === 0 && (
                  <div className="absolute bottom-4 right-4 flex max-w-[70%] flex-col items-end gap-1.5">
                    {study.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold tracking-wide text-navy shadow-sm"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-navy">{study.name}</p>
                  <p className="mt-0.5 text-xs text-text-muted">{study.blurb}</p>
                </div>
                <button
                  type="button"
                  className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-navy transition group-hover:text-teal"
                >
                  {index === 0 ? "See Detail" : ""}
                  <ArrowUpRight className="size-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-24">
        <div className="mb-6">
          <span className="inline-flex rounded-full bg-teal-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-teal">
            Process
          </span>
          <h2 className="mt-3 font-display text-3xl text-navy md:text-4xl">
            Easy from brief to deliverable
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.step}
              className="rounded-[22px] border border-border bg-bg p-5 transition hover:-translate-y-0.5 hover:border-teal/40"
            >
              <p className="text-xs font-bold tracking-[0.14em] text-teal">{step.step}</p>
              <h3 className="mt-3 text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About + testimonials */}
      <section id="about" className="scroll-mt-24">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-border bg-bg p-6 md:p-8">
            <span className="inline-flex rounded-full bg-teal-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-teal">
              About
            </span>
            <h2 className="mt-3 font-display text-3xl text-navy md:text-4xl">
              Built for tech buyers
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-text-muted">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Niche: SaaS, hardware, AI tools, developer products.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["SaaS", "Hardware", "AI Tools", "Developer"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-bg-soft px-3 py-1.5 text-xs font-semibold text-navy"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className={`rounded-[22px] ${t.tint} p-5 transition hover:-translate-y-0.5`}
              >
                <p className="text-sm leading-relaxed text-navy">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-3 text-sm font-semibold text-navy">{t.name}</p>
                <p className="text-xs text-text-muted">{t.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 pb-8">
        <div className="overflow-hidden rounded-[28px] border border-border bg-navy text-white">
          <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-teal-bright">
                Contact
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Let&apos;s ship the next campaign
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tell me about the
                product, timeline, and platforms.
              </p>
              <a
                href="mailto:hello@example.com"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-bright transition hover:text-white"
              >
                hello@example.com
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-white/60">Name</span>
                <input
                  type="text"
                  placeholder="Lorem Ipsum"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-teal"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-white/60">Email</span>
                <input
                  type="email"
                  placeholder="you@brand.com"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-teal"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-white/60">
                  Project notes
                </span>
                <textarea
                  rows={3}
                  placeholder="Lorem ipsum dolor sit amet…"
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-teal"
                />
              </label>
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-bright"
              >
                Send inquiry
                <ArrowUpRight className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
