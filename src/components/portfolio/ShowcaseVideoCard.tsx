"use client";

import Image from "next/image";
import { useRef, useState, type MouseEvent } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import type { WorkItem } from "@/lib/content";

type ShowcaseVideoCardProps = {
  item: WorkItem;
  /** Brand logo above the card (SaaS section) */
  showLogoAbove?: boolean;
  /** Style / format title under the card */
  showTitleBelow?: boolean;
};

export function ShowcaseVideoCard({
  item,
  showLogoAbove = false,
  showTitleBelow = true,
}: ShowcaseVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const hasVideo = Boolean(item.src);

  function togglePlay() {
    const video = videoRef.current;
    if (!video || !item.src) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  function toggleMute(e: MouseEvent) {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || !item.src) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
  }

  return (
    <article className="group flex w-full min-w-0 flex-col">
      {showLogoAbove && item.logo && (
        <div className="mb-3 flex h-7 items-center">
          <Image
            src={item.logo}
            alt={item.caption || item.title}
            width={120}
            height={28}
            className="h-5 w-auto max-w-[70%] object-contain object-left opacity-80"
            unoptimized
          />
        </div>
      )}

      <div
        className={`relative aspect-[9/16] w-full overflow-hidden rounded-[22px] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_-24px_rgba(11,31,58,0.5)] ${
          hasVideo
            ? `bg-gradient-to-br ${item.tone || "from-navy to-teal"}`
            : "bg-[#cfd5dd]"
        }`}
      >
        {hasVideo ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={item.src}
            muted={muted}
            loop
            playsInline
            preload="metadata"
          />
        ) : null}

        {item.platform && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-black/40 px-2 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur">
            {item.platform}
          </span>
        )}

        {hasVideo && (
          <button
            type="button"
            onClick={toggleMute}
            className="absolute right-3 top-3 z-20 inline-flex size-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-black/60"
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </button>
        )}

        {!showLogoAbove && item.logo && hasVideo && (
          <div className="pointer-events-none absolute bottom-3 left-3 z-20 max-w-[42%] opacity-0 transition duration-300 group-hover:opacity-100">
            <Image
              src={item.logo}
              alt={item.title}
              width={120}
              height={28}
              className="h-3.5 w-auto object-contain brightness-0 invert drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] sm:h-4"
              unoptimized
            />
          </div>
        )}

        <button
          type="button"
          onClick={togglePlay}
          disabled={!hasVideo}
          className="absolute inset-0 z-10 flex items-center justify-center disabled:cursor-default"
          aria-label={
            hasVideo
              ? playing
                ? `Pause ${item.title}`
                : `Play ${item.title}`
              : `${item.title} coming soon`
          }
        >
          {hasVideo && (!playing || !item.src) && (
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/90 text-navy transition group-hover:scale-110">
              <Play className="size-4 fill-current" />
            </span>
          )}
          {playing && hasVideo && (
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 transition group-hover:opacity-100">
              <Pause className="size-4 fill-current" />
            </span>
          )}
        </button>
      </div>

      {showTitleBelow && (
        <div className="mt-3 px-0.5">
          <p className="text-sm font-semibold tracking-tight text-navy">{item.title}</p>
          {item.caption && !showLogoAbove && (
            <p className="mt-1 text-xs leading-snug text-text-muted">{item.caption}</p>
          )}
        </div>
      )}
    </article>
  );
}
