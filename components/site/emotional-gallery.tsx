import { AI_IMAGES } from "@/lib/ai-images";

/**
 * Full-width editorial photo gallery — asymmetric grid with emotional captions.
 * Placed between CareJourney and BenefitsSection for visual storytelling.
 */
export function EmotionalGallery() {
  return (
    <section className="w-full bg-surface-pure py-16 md:py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line">
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-vitality-rose font-label-md text-label-md font-semibold tracking-wider uppercase">
            <span className="material-symbols-outlined text-[16px]">
              photo_camera
            </span>
            Momentos que Transformam
          </div>
          <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">
            Onde cada sessão é uma história de&nbsp;superação
          </h2>
        </div>

        {/* Asymmetric Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {/* Large — Criança no balanço */}
          <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden group">
            <img
              src={AI_IMAGES.sensorySwing}
              alt="Criança rindo no balanço sensorial durante sessão de terapia ocupacional"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <p className="font-headline-sm text-headline-sm font-bold text-white">
                A alegria de conquistar o&nbsp;equilíbrio
              </p>
              <p className="font-body-sm text-body-sm text-white/80 mt-1">
                Terapia Ocupacional — Integração Sensorial
              </p>
            </div>
          </div>

          {/* Top-right — Fonoaudiologia */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src={AI_IMAGES.speechTherapy}
              alt="Fonoaudióloga trabalhando comunicação com criança"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/50 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 font-label-md text-label-md font-semibold text-white">
              Primeiras palavras
            </p>
          </div>

          {/* Top-right — Mão segurando */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src={AI_IMAGES.handHolding}
              alt="Mão da criança segurando mão da terapeuta enquanto caminham"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/50 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 font-label-md text-label-md font-semibold text-white">
              Confiança a cada passo
            </p>
          </div>

          {/* Bottom-right — Equipe */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src={AI_IMAGES.teamMeeting}
              alt="Equipe multidisciplinar em reunião de planejamento terapêutico"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/50 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 font-label-md text-label-md font-semibold text-white">
              Equipe integrada
            </p>
          </div>

          {/* Bottom-right — Caminhada sensorial */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src={AI_IMAGES.sensoryWalk2}
              alt="Terapeuta auxiliando criança em atividade sensorial"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/50 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 font-label-md text-label-md font-semibold text-white">
              Descobrindo o mundo
            </p>
          </div>
        </div>

        {/* Emotional CTA below gallery */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-canvas-clinical border border-soft-line">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-vitality-rose/10 flex items-center justify-center text-vitality-rose flex-shrink-0">
              <span className="material-symbols-outlined text-[24px]">
                favorite
              </span>
            </div>
            <div>
              <p className="font-headline-sm text-headline-sm font-bold text-ink-deep">
                Cada sorriso é uma conquista que celebramos&nbsp;juntos
              </p>
              <p className="font-body-sm text-body-sm text-crimap-gray mt-0.5">
                Agende uma visita e conheça nosso espaço pensado para o
                desenvolvimento do seu&nbsp;filho.
              </p>
            </div>
          </div>
          <a
            className="px-6 h-12 inline-flex items-center justify-center rounded-xl bg-vitality-rose text-white font-label-md font-semibold hover:bg-vitality-rose/90 transition-colors whitespace-nowrap flex-shrink-0 gap-2"
            href="https://wa.me/5521988451234?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20%C3%A0%20CRIMAP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">
              calendar_month
            </span>
            Agendar Visita
          </a>
        </div>
      </div>
    </section>
  );
}
