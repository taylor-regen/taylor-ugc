"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

export function HeroCoverVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="absolute left-1/2 top-[4%] z-10 h-[90%] w-[68%] -translate-x-1/2 overflow-hidden rounded-[28px] bg-navy shadow-[0_28px_50px_-18px_rgba(11,31,58,0.55)]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/ugc-cover.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="UGC cover video"
      />

      <button
        type="button"
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/0 transition hover:bg-black/15"
        aria-label={playing ? "Pause cover video" : "Play cover video"}
      >
        {!playing && (
          <span className="inline-flex size-14 items-center justify-center rounded-full bg-white/95 text-navy shadow-lg">
            <Play className="size-5 fill-current" />
          </span>
        )}
      </button>
    </div>
  );
}
