"use client";

import { ShowcaseVideoCard } from "@/components/portfolio/ShowcaseVideoCard";
import type { WorkItem } from "@/lib/content";

/** Back-compat wrapper used by any remaining imports */
export function WorkVideoCard({ item }: { item: WorkItem }) {
  return <ShowcaseVideoCard item={item} />;
}
