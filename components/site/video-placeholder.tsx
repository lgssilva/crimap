"use client";

import { useState } from "react";

interface VideoPlaceholderProps {
  videoId?: string;
  posterSrc: string;
  posterAlt: string;
  label?: string;
  className?: string;
}

/**
 * Click-to-play video embed with landscape aspect ratio (16:10).
 * When no videoId is provided, shows a "coming soon" state.
 * When videoId is provided, clicking loads the YouTube iframe.
 */
export function VideoPlaceholder({
  videoId,
  posterSrc,
  posterAlt,
  label,
  className = "",
}: VideoPlaceholderProps) {
  const [playing, setPlaying] = useState(false);

  if (playing && videoId) {
    return (
      <div className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden ${className}`}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={posterAlt}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => videoId && setPlaying(true)}
      className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden ${videoId ? "cursor-pointer" : "cursor-default"} group ${className}`}
      aria-label={videoId ? `Assistir vídeo: ${posterAlt}` : posterAlt}
    >
      <img
        src={posterSrc}
        alt={posterAlt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-ink-deep/15 to-transparent pointer-events-none" />

      {/* Center play button or coming soon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {videoId ? (
          <div className="w-14 h-14 rounded-full bg-surface-pure/85 backdrop-blur-md border border-white/50 text-connection-blue flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
            <span className="material-symbols-outlined text-[28px] translate-x-0.5">
              play_arrow
            </span>
          </div>
        ) : (
          <div className="px-4 py-2 rounded-full bg-surface-pure/85 backdrop-blur-md border border-white/50 shadow-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-connection-blue">
              videocam
            </span>
            <span className="font-label-sm text-label-sm font-semibold text-ink-deep">
              Vídeo em breve
            </span>
          </div>
        )}
      </div>

      {/* Bottom label */}
      {label && (
        <div className="absolute bottom-0 left-0 right-0 px-5 py-3 pointer-events-none">
          <span className="font-label-sm text-label-sm font-semibold text-white/90 drop-shadow-md">
            {label}
          </span>
        </div>
      )}
    </button>
  );
}
