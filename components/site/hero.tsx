import { AI_IMAGES } from "@/lib/ai-images";
import { YouTubePlayer } from "@/components/site/youtube-player";

export function Hero() {
  return (
    <>
      {/* 1. Top Utility & Location Bar */}
      <div className="hidden md:block w-full bg-surface-pure border-b border-soft-line py-2.5 px-5 md:px-6 lg:px-12 text-body-sm font-body-sm text-crimap-gray">
        <div className="max-w-[1360px] mx-auto flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-connection-blue font-medium">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              Downtown Barra da&nbsp;Tijuca
            </span>
            <span className="text-soft-line">|</span>
            <span>Bloco 4, Salas 210–212</span>
            <span className="text-soft-line hidden md:inline">|</span>
            <span className="hidden md:inline">Estacionamento &amp; Valet no subsolo do&nbsp;bloco</span>
            <span className="text-soft-line hidden lg:inline">|</span>
            <span className="hidden lg:inline text-ink-deep font-medium">Atendimento Particular Especializado</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="w-full bg-canvas-clinical pt-12 pb-20 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-w-0">

          {/* Left Column: Editorial & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col gap-6 min-w-0">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-pure border border-soft-line w-fit max-w-full shadow-sm">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-connection-blue"></span>
                <span className="w-2 h-2 rounded-full bg-energy-yellow"></span>
                <span className="w-2 h-2 rounded-full bg-vitality-rose"></span>
                <span className="w-2 h-2 rounded-full bg-progress-green"></span>
              </div>
              <span className="font-label-md text-label-md text-crimap-gray font-medium">Clínica multidisciplinar para crianças e jovens na Barra da Tijuca</span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-deep leading-tight overflow-visible">
                Cada conquista começa quando o cuidado se{" "}
                <span className="text-connection-blue relative inline-block">
                  conecta.
                  <svg className="absolute -bottom-1.5 left-0 w-full overflow-visible" fill="none" height="6" viewBox="0 0 160 6" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4C45 1.5 115 1.5 159 4" stroke="#0070B8" strokeLinecap="round" strokeWidth="2.5" />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Na CRIMAP, diferentes especialidades trabalham juntas em uma única mesa para compreender cada criança ou jovem por inteiro, respeitando sua história, seu ritmo e suas&nbsp;possibilidades.
            </p>

            {/* CTA cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full min-w-0">
              <a
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-7 min-h-12 h-auto py-3 sm:h-12 w-full sm:w-auto bg-connection-blue text-on-primary font-label-lg text-label-lg rounded-xl shadow-[0_4px_16px_rgba(0,112,184,0.22)] hover:bg-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-connection-blue text-center"
                href="https://wa.me/5521988451234?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20acolhimento%20inicial%20na%20CRIMAP"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Agendar Acolhimento Inicial via&nbsp;WhatsApp
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 px-5 h-12 w-full sm:w-auto bg-surface-pure border border-soft-line text-ink-deep font-label-lg text-label-lg rounded-xl hover:bg-surface-container-low transition-colors"
                href="#como-funciona"
              >
                <span className="material-symbols-outlined text-[18px] text-crimap-gray">schedule</span>
                Como funciona a 1ª&nbsp;consulta
              </a>
            </div>

            {/* Trust Note */}
            <div className="flex items-center gap-2 text-crimap-gray font-body-sm text-body-sm pt-1">
              <span className="material-symbols-outlined text-progress-green text-[18px]">verified</span>
              <span>Atendimento particular com relatórios completos para reembolso e apoio escolar&nbsp;contínuo.</span>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-soft-line min-w-0">
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md font-bold text-ink-deep">+8&nbsp;Anos</span>
                <span className="font-body-sm text-body-sm text-crimap-gray leading-tight">De história e dedicação contínua no&nbsp;Downtown</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md font-bold text-ink-deep">100% Integrada</span>
                <span className="font-body-sm text-body-sm text-crimap-gray leading-tight">Equipe transdisciplinar em reunião semanal de&nbsp;caso</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md font-bold text-ink-deep">Centrado na Família</span>
                <span className="font-body-sm text-body-sm text-crimap-gray leading-tight">Acolhimento real, plano conjunto e escuta&nbsp;aberta</span>
              </div>
            </div>
          </div>

          {/* Right Column: Video Frame */}
          <div className="lg:col-span-5 relative reveal-scale min-w-0 overflow-hidden">
            <div className="relative rounded-3xl overflow-hidden bg-surface-pure border border-soft-line shadow-[0_12px_40px_-8px_rgba(23,33,43,0.08)] group">
              {/* Video Pill Badge (above the player) */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-3 pointer-events-none z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-pure/90 backdrop-blur-md border border-soft-line/80 shadow-sm pointer-events-auto">
                  <span className="w-2 h-2 rounded-full bg-vitality-rose animate-pulse"></span>
                  <span className="font-label-sm text-label-sm font-semibold text-ink-deep">Vídeo institucional • Rotina clínica em&nbsp;movimento</span>
                </div>
                {/* CRIMAP Icon Badge */}
                <div className="w-12 h-12 rounded-2xl bg-surface-pure/90 backdrop-blur-md flex items-center justify-center shadow-sm pointer-events-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.5 85.2" width="36" height="36">
                    <defs>
                      <style>{`.st0{fill:#ec174c}.st1{fill:#fcb415}.st2{fill:#0070b8}.st3{fill:#68bc49}`}</style>
                    </defs>
                    <path className="st3" d="M78.3,26.9c-3.2-3.3-7-5.3-11.3-6,0,0,0,0,0,0-.8-.2-1.7-.3-2.6-.3-.4,0-.8,0-1.2,0-4.3,0-8.1,1.1-11.5,3.3-.3,0-5.5,4.5-10.6,3.8h0c-1.5-.2-4.5-2.6-6.9-3.7-3-1.6-6.3-2.4-9.9-2.4-5.9,0-11,2.1-15.2,6.3-4.2,4.2-6.3,9.3-6.3,15.2s2.1,11,6.3,15.2c3.5,3.5,7.5,5.5,12.2,6.1,0,0,0,0,0,0,.7.1,1.7.2,2.7.2,0,0,.2,0,.3,0s.2,0,.3,0c.3,0,.5,0,.7,0h0c.9,0,1.6,0,1.8-.2h0c4.3-.6,8.1-2.5,11.6-5.4,3.7-3.1,7.2-2.2,9.3-1.1.3.2,1.3.9,2.4,1.6.8.5,1.5,1.1,2.3,1.5,0,0,0,0,0,0,0,0,0,0,0,0,3.1,1.7,6.5,2.6,10.2,2.6,5.9,0,11-2.1,15.2-6.3,4.2-4.2,6.3-9.3,6.3-15.2s-2.1-11-6.3-15.2ZM75.8,54.7c-3.5,3.5-7.7,5.2-12.6,5.2s-6.2-.8-8.8-2.3c0,0-.1-.2-.2-.2-.7-.3-1.6-1.1-2.5-1.8-.3-.2-.5-.4-.8-.6-.5-.4-1-.7-1.4-.9h0c-5-2.5-10.7-.4-14.9,3.7-3,2.1-6.3,3.1-10.1,3.1s-1.8,0-2.6-.2c0,0-.1,0-.2,0-3.7-.6-7-2.2-9.8-5-3.5-3.5-5.2-7.7-5.2-12.6s1.7-9.2,5.2-12.7c3.5-3.5,7.7-5.2,12.6-5.2s6.6.9,9.4,2.6t0,0c.7.5,1.4,1.1,2.1,1.5,1.5,1.1,2.9,1.8,4.4,2.2.2,0,.4,0,.5.1,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,0,0,0,0,5.3.9,9.9-2.6,10.1-2.9,2.6-2.3,5.4-3.8,8.7-4.3,0,0,0,0,0,0,1.1-.2,2.2-.3,3.3-.3s1.8,0,2.7.2c0,0,0,0,0,0,.3,0,.5,0,.8.1,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,0,0,0,0h0c3.3.7,6.2,2.3,8.8,4.8,3.5,3.5,5.2,7.7,5.2,12.6,0,5-1.7,9.2-5.2,12.7Z" />
                  </svg>
                </div>
              </div>

              {/* YouTube Player (click-to-play) */}
              <YouTubePlayer
                videoId="4mqHm27fopk"
                posterSrc={AI_IMAGES.sensorySwing}
                posterAlt="Criança em sessão de terapia sensorial na CRIMAP"
              />

              {/* Bottom Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-surface-pure/95 backdrop-blur-md border border-soft-line text-ink-deep shadow-lg flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-connection-blue/10 flex items-center justify-center text-connection-blue flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px]">diversity_1</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm font-semibold text-ink-deep leading-tight">Plano Terapêutico Singular</h4>
                    <p className="font-label-sm text-label-sm text-crimap-gray">Metas compartilhadas entre fono, fisio, TO e&nbsp;psicologia</p>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-progress-green animate-pulse"></span>
              </div>
            </div>

            {/* Decorative background glows */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-connection-blue/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-energy-yellow/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          </div>
        </div>
      </section>
    </>
  );
}
