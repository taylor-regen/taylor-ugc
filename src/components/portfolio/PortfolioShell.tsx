"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  LayoutDashboard,
  Clapperboard,
  FolderKanban,
  Workflow,
  UserRound,
  Mail,
  Menu,
  Search,
  X,
} from "lucide-react";
import { navItems } from "@/lib/content";

const icons = {
  overview: LayoutDashboard,
  work: Clapperboard,
  "case-studies": FolderKanban,
  process: Workflow,
  about: UserRound,
  contact: Mail,
} as const;

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("overview");

  function goTo(id: string) {
    setActive(id);
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-screen bg-bg-soft">
      <div className="mx-auto flex min-h-screen max-w-[1440px]">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-screen w-[232px] shrink-0 flex-col border-r border-border bg-bg px-4 py-6 md:flex">
          <div className="mb-8 px-2">
            <p className="font-display text-2xl tracking-tight text-navy">Taylor</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-teal">
              UGC Portfolio
            </p>
          </div>

          <nav className="flex flex-1 flex-col gap-1">
            {navItems.map((item) => {
              const Icon = icons[item.id];
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(item.id)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-navy text-white"
                      : "text-text-muted hover:bg-bg-muted hover:text-navy"
                  }`}
                >
                  <Icon className="size-4 shrink-0 opacity-80" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              goTo("contact");
            }}
            className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white transition hover:bg-navy-soft"
          >
            Work with me
            <ArrowUpRight className="size-4" />
          </a>
        </aside>

        {/* Main column */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur-md">
            <div className="flex items-center gap-3 px-4 py-3 md:px-6">
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-xl border border-border text-navy md:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>

              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-border bg-bg-soft px-3 py-2.5">
                <Search className="size-4 shrink-0 text-text-faint" />
                <input
                  type="search"
                  placeholder="Search work, formats, niches…"
                  className="w-full bg-transparent text-sm text-navy outline-none placeholder:text-text-faint"
                  aria-label="Search"
                />
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("contact");
                }}
                className="hidden items-center gap-1 rounded-full bg-teal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-bright sm:inline-flex"
              >
                Work with me
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>

            {open && (
              <nav className="border-t border-border bg-bg px-4 py-3 md:hidden">
                <div className="mb-3">
                  <p className="font-display text-xl text-navy">Taylor</p>
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-teal">
                    UGC Portfolio
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => goTo(item.id)}
                      className={`rounded-xl px-3 py-2.5 text-left text-sm font-medium ${
                        active === item.id
                          ? "bg-navy text-white"
                          : "text-text-muted hover:bg-bg-muted"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </nav>
            )}
          </header>

          <main className="flex-1 px-4 py-6 md:px-6 md:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
