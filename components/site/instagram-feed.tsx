/**
 * Instagram feed section — links to @crimaprj with visual CTA.
 * Uses a styled card approach since embedding requires client-side API token.
 */
export function InstagramFeed() {
  return (
    <section className="w-full bg-canvas-clinical py-16 md:py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line">
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-vitality-rose font-label-md text-label-md font-semibold tracking-wider uppercase">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Siga a CRIMAP
            </div>
            <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">
              Acompanhe nosso dia a dia no&nbsp;Instagram
            </h2>
            <p className="font-body-lg text-body-lg text-crimap-gray">
              Bastidores, conquistas, dicas para pais e momentos que mostram o
              que é a reabilitação com afeto na&nbsp;prática.
            </p>
          </div>
          <a
            href="https://www.instagram.com/crimaprj/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-label-md font-semibold hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @crimaprj
          </a>
        </div>

        {/* Instagram Content Teasers — styled cards that link to Instagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 — Reels de terapia */}
          <a
            href="https://www.instagram.com/crimaprj/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl overflow-hidden bg-surface-pure border border-soft-line hover:border-vitality-rose/30 transition-all duration-300 hover:shadow-lg"
          >
            <div className="aspect-square bg-gradient-to-br from-vitality-rose/5 to-energy-yellow/5 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-vitality-rose/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px] text-vitality-rose">
                    play_circle
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep mb-2">
                  Reels de Terapia
                </h3>
                <p className="font-body-sm text-body-sm text-crimap-gray">
                  Veja momentos reais das sessões — abraços, primeiros passos e
                  conquistas que emocionam.
                </p>
              </div>
            </div>
            <div className="p-4 border-t border-soft-line flex items-center justify-between">
              <span className="font-label-md text-label-md font-semibold text-vitality-rose">
                Ver no Instagram
              </span>
              <span className="material-symbols-outlined text-[16px] text-vitality-rose group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>

          {/* Card 2 — Dicas para pais */}
          <a
            href="https://www.instagram.com/crimaprj/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl overflow-hidden bg-surface-pure border border-soft-line hover:border-connection-blue/30 transition-all duration-300 hover:shadow-lg"
          >
            <div className="aspect-square bg-gradient-to-br from-connection-blue/5 to-progress-green/5 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-connection-blue/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px] text-connection-blue">
                    lightbulb
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep mb-2">
                  Dicas para Pais
                </h3>
                <p className="font-body-sm text-body-sm text-crimap-gray">
                  Orientações práticas de como estimular o desenvolvimento do
                  seu filho em casa com segurança.
                </p>
              </div>
            </div>
            <div className="p-4 border-t border-soft-line flex items-center justify-between">
              <span className="font-label-md text-label-md font-semibold text-connection-blue">
                Ver no Instagram
              </span>
              <span className="material-symbols-outlined text-[16px] text-connection-blue group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>

          {/* Card 3 — Bastidores da equipe */}
          <a
            href="https://www.instagram.com/crimaprj/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl overflow-hidden bg-surface-pure border border-soft-line hover:border-progress-green/30 transition-all duration-300 hover:shadow-lg"
          >
            <div className="aspect-square bg-gradient-to-br from-progress-green/5 to-energy-yellow/5 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-progress-green/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px] text-progress-green">
                    groups
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep mb-2">
                  Nossa Equipe
                </h3>
                <p className="font-body-sm text-body-sm text-crimap-gray">
                  Conheça os profissionais por trás de cada plano terapêutico e
                  acompanhe os bastidores.
                </p>
              </div>
            </div>
            <div className="p-4 border-t border-soft-line flex items-center justify-between">
              <span className="font-label-md text-label-md font-semibold text-progress-green">
                Ver no Instagram
              </span>
              <span className="material-symbols-outlined text-[16px] text-progress-green group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-8 flex items-center justify-center gap-6 text-crimap-gray">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-vitality-rose">
              favorite
            </span>
            <span className="font-label-md text-label-md font-medium">
              2.8k seguidores
            </span>
          </div>
          <div className="w-1 h-1 rounded-full bg-soft-line" />
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-connection-blue">
              verified
            </span>
            <span className="font-label-md text-label-md font-medium">
              Conteúdo semanal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
