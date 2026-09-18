"use client";

import { useRef, useState, type MouseEvent } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import type { WorkItem } from "@/lib/content";

export function WorkVideoCard({ item }: { item: WorkItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

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
    <article className="group">
      <div
        className={`relative aspect-[9/16] w-full overflow-hidden rounded-[22px] bg-gradient-to-br ${item.tone} transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_-24px_rgba(11,31,58,0.5)]`}
      >
        {item.src ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={item.src}
            muted={muted}
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.16),transparent_45%)]" />
        )}

        <span className="absolute left-3 top-3 z-10 rounded-full bg-black/40 px-2 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur">
          {item.platform}
        </span>

        {item.src && (
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
          disabled={!item.src}
          className="absolute inset-0 z-10 flex items-center justify-center disabled:cursor-default"
          aria-label={playing ? "Pause video" : "Play video"}
        >
          {(!playing || !item.src) && (
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/90 text-navy transition group-hover:scale-110">
              <Play className="size-4 fill-current" />
            </span>
          )}
          {playing && item.src && (
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 transition group-hover:opacity-100">
              <Pause className="size-4 fill-current" />
            </span>
          )}
        </button>
      </div>
      <p className="mt-3 line-clamp-2 text-sm font-medium leading-snug text-navy">
        {item.title}
      </p>
    </article>
  );
}
