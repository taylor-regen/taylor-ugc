"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { WorkItem } from "@/lib/content";
import { ShowcaseVideoCard } from "@/components/portfolio/ShowcaseVideoCard";

export function CanvasScrollGallery({ items }: { items: WorkItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByPage(direction: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-white text-navy transition hover:border-teal hover:text-teal"
          aria-label="Scroll canvas videos left"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-white text-navy transition hover:border-teal hover:text-teal"
          aria-label="Scroll canvas videos right"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-4 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="w-[42%] shrink-0 snap-start sm:w-[30%] lg:w-[23%]"
          >
            <ShowcaseVideoCard item={item} showTitleBelow showLogoAbove={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
