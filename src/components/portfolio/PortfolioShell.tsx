"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/content";
import { PenCircle } from "@/components/portfolio/PenDoodles";

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  function goTo(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-navy">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40">
        {/* Solid white only behind the nav, then a short soft fade (~1cm) */}
        <div className="bg-white px-4 pt-5 md:px-8 md:pt-7">
          <header className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-4">
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(item.id)}
                  className="text-[13px] lowercase tracking-wide text-navy/70 transition hover:text-teal"
                >
                  {item.label.toLowerCase()}
                </button>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("contact");
                }}
                className="relative hidden px-6 py-2 font-pen text-2xl leading-none text-teal transition hover:opacity-80 sm:inline-flex"
              >
                work with me
                <PenCircle className="pointer-events-none absolute -inset-x-2 -inset-y-1 text-teal" />
              </a>

              <button
                type="button"
                className="inline-flex size-10 items-center justify-center text-navy md:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </header>

          {open && (
            <div className="pointer-events-auto mx-auto mt-3 max-w-6xl border border-border/70 bg-white/95 p-4 backdrop-blur md:hidden">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(item.id)}
                    className="rounded-xl px-3 py-2.5 text-left text-sm lowercase text-navy/80 hover:bg-bg-muted"
                  >
                    {item.label.toLowerCase()}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => goTo("contact")}
                  className="relative mt-2 self-start px-6 py-2 font-pen text-2xl leading-none text-teal"
                >
                  work with me
                  <PenCircle className="pointer-events-none absolute -inset-x-2 -inset-y-1 text-teal" />
                </button>
              </div>
            </div>
          )}

          {/* Short soft dissolve right under the menu */}
          <div
            className="-mx-4 h-10 md:-mx-8 md:h-11"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0.2) 75%, rgba(255,255,255,0) 100%)",
            }}
          />
        </div>
      </div>

      <main id="top">{children}</main>
    </div>
  );
}
