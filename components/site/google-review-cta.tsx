import { siteConfig } from "@/lib/site-config";

/**
 * Compact CTA banner encouraging families to leave a Google review.
 * Reused on the homepage (inside TestimonialsSection area) and on /depoimentos.
 */
export function GoogleReviewCta() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl bg-surface-pure border border-soft-line shadow-sm">
      <div className="flex items-center gap-4">
        {/* Google "G" logo */}
        <div className="w-12 h-12 rounded-full bg-white border border-soft-line flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        </div>
        <div>
          <h4 className="font-headline-sm text-headline-sm font-semibold text-ink-deep">
            Sua experiência importa para outras&nbsp;famílias
          </h4>
          <p className="font-body-sm text-body-sm text-crimap-gray">
            Deixe sua avaliação no Google e ajude pais que estão buscando o
            melhor cuidado para seus&nbsp;filhos.
          </p>
        </div>
      </div>
      <a
        href={siteConfig.googleReview.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-white border border-soft-line text-ink-deep font-label-md font-semibold hover:bg-canvas-clinical transition-colors whitespace-nowrap flex-shrink-0 shadow-sm"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Avaliar no Google
      </a>
    </div>
  );
}
