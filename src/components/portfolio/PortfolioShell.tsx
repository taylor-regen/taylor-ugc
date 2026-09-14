"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/content";

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  function goTo(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-navy">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-6 md:pt-5">
        <header className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full bg-[#14171c] px-3 py-2.5 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.55)] md:px-4">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 pl-1"
          >
            <span className="inline-flex size-8 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
              T
            </span>
            <span className="text-sm font-semibold text-white">Taylor</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                goTo("contact");
              }}
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#14171c] transition hover:bg-teal-soft sm:inline-flex"
            >
              Work with me
            </a>
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-full text-white md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </header>

        {open && (
          <div className="pointer-events-auto mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl bg-[#14171c] p-3 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(item.id)}
                  className="rounded-2xl px-4 py-3 text-left text-sm text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => goTo("contact")}
                className="mt-1 rounded-full bg-white px-4 py-3 text-sm font-semibold text-[#14171c]"
              >
                Work with me
              </button>
            </div>
          </div>
        )}
      </div>

      <main id="top">{children}</main>
    </div>
  );
}
