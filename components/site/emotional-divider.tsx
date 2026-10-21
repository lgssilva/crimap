/**
 * Full-width emotional image divider with overlay quote.
 * Designed to break text-heavy sections with visual impact.
 */
export function EmotionalDivider({
  imageSrc,
  imageAlt,
  quote,
  attribution,
  overlayColor = "from-connection-blue/80 to-ink-deep/70",
}: {
  imageSrc: string;
  imageAlt: string;
  quote: string;
  attribution?: string;
  overlayColor?: string;
}) {
  return (
    <section className="relative w-full h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden">
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`}
      />
      {/* Quote Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12">
        <div className="max-w-3xl text-center">
          <svg
            className="w-10 h-10 mx-auto mb-6 text-white/40"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
          <blockquote className="font-headline-xl text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] text-white font-bold leading-tight tracking-tight">
            {quote}
          </blockquote>
          {attribution && (
            <p className="mt-6 font-body-md text-body-md text-white/70 font-medium">
              — {attribution}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
