"use client";

import Image from "next/image";
import { useRef, useState, type MouseEvent } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import type { WorkItem } from "@/lib/content";

type ShowcaseVideoCardProps = {
  item: WorkItem;
  /** Brand logo above the card */
  showLogoAbove?: boolean;
  /** Style / format title above the card */
  showTitleAbove?: boolean;
};

export function ShowcaseVideoCard({
  item,
  showLogoAbove = false,
  showTitleAbove = false,
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
      {(showLogoAbove || showTitleAbove) && (
        <div className="mb-3 flex min-h-7 flex-col justify-end gap-1 px-0.5">
          {showLogoAbove && item.logo && (
            <Image
              src={item.logo}
              alt={item.caption || item.title}
              width={120}
              height={28}
              className="h-5 w-auto max-w-[75%] object-contain object-left"
              unoptimized
            />
          )}
          {showTitleAbove && (
            <p className="text-sm font-semibold tracking-tight text-navy">{item.title}</p>
          )}
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
    </article>
  );
}
