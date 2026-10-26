"use client";

import { useState } from "react";

interface YouTubePlayerProps {
  videoId: string;
  posterSrc: string;
  posterAlt: string;
  className?: string;
}

/**
 * Click-to-play YouTube embed.
 * Shows a poster image with a play button; on click, replaces with
 * a YouTube iframe. Keeps the hero lightweight and avoids loading
 * YouTube scripts until the user actually wants to watch.
 */
export function YouTubePlayer({
  videoId,
  posterSrc,
  posterAlt,
  className = "",
}: YouTubePlayerProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={`relative w-full aspect-[4/5] ${className}`}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="Vídeo institucional CRIMAP"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`relative w-full aspect-[4/5] overflow-hidden cursor-pointer group ${className}`}
      aria-label="Assistir vídeo institucional"
    >
      <img
        src={posterSrc}
        alt={posterAlt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/85 via-ink-deep/20 to-transparent pointer-events-none" />
      {/* Center play button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-14 h-14 rounded-full bg-surface-pure/85 backdrop-blur-md border border-white/50 text-connection-blue flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
          <span className="material-symbols-outlined text-[28px] translate-x-0.5">
            play_arrow
          </span>
        </div>
      </div>
    </button>
  );
}
