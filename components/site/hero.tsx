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
      <span className="">Bloco 4, Salas 210–212</span>
      <span className="text-soft-line hidden md:inline">|</span>
      <span className="hidden md:inline">Estacionamento &amp; Valet no subsolo do&nbsp;bloco</span>
      <span className="text-soft-line hidden lg:inline">|</span>
      <span className="hidden lg:inline text-ink-deep font-medium">Atendimento Particular Especializado</span>
      </div>
      
      </div>
      </div>
      {/* 2. Hero Section (Harmonious 2-Column Editorial with Video Frame Motif) */}
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
      {/* Headline with ring graphic indicator */}
      <div className="flex flex-col gap-2">
      <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-deep leading-tight overflow-visible">Cada conquista começa quando o cuidado se <span className="text-connection-blue relative inline-block">conecta.<svg className="absolute -bottom-1.5 left-0 w-full overflow-visible" fill="none" height="6" viewBox="0 0 160 6" xmlns="http://www.w3.org/2000/svg"><path d="M1 4C45 1.5 115 1.5 159 4" stroke="#0070B8" strokeLinecap="round" strokeWidth="2.5"></path></svg></span></h1>
      </div>
      {/* Paragraph Description */}
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Na CRIMAP, diferentes especialidades trabalham juntas em uma única mesa para compreender cada criança ou jovem por inteiro, respeitando sua história, seu ritmo e suas&nbsp;possibilidades.
              </p>
      {/* CTA cluster */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full min-w-0">
      <a className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-7 min-h-12 h-auto py-3 sm:h-12 w-full sm:w-auto bg-connection-blue text-on-primary font-label-lg text-label-lg rounded-xl shadow-[0_4px_16px_rgba(0,112,184,0.22)] hover:bg-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-connection-blue text-center" href="https://wa.me/5521988451234?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20acolhimento%20inicial%20na%20CRIMAP" rel="noopener noreferrer" target="_blank">
      <span className="material-symbols-outlined text-[20px]">chat</span>
                  Agendar Acolhimento Inicial via&nbsp;WhatsApp
                </a>
      <a className="inline-flex items-center justify-center gap-2 px-5 h-12 w-full sm:w-auto bg-surface-pure border border-soft-line text-ink-deep font-label-lg text-label-lg rounded-xl hover:bg-surface-container-low transition-colors" href="#como-funciona">
      <span className="material-symbols-outlined text-[18px] text-crimap-gray">schedule</span>
                  Como funciona a 1ª&nbsp;consulta
                </a>
      </div>
      {/* Micro-info Trust Note */}
      <div className="flex items-center gap-2 text-crimap-gray font-body-sm text-body-sm pt-1">
      <span className="material-symbols-outlined text-progress-green text-[18px]">verified</span>
      <span className="">Atendimento particular com relatórios completos para reembolso e apoio escolar&nbsp;contínuo.</span>
      </div>
      {/* Floating Quick-Stats / Highlights */}
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
      {/* Right Column: Institutional Video Frame Composition */}
      <div className="lg:col-span-5 relative reveal-scale min-w-0 overflow-hidden">
      <div className="relative rounded-3xl overflow-hidden bg-surface-pure border border-soft-line shadow-[0_12px_40px_-8px_rgba(23,33,43,0.08)] group">
      {/* Institutional Video Frame */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-ink-deep">
      <video autoPlay className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" loop muted playsInline poster="https://lh3.googleusercontent.com/aida-public/AB6AXuChRdRcePNyaJKatuWzNhV9JPO7oZjsVX4ZA2c6734wFNNNxuYHghdlRkYaRhzlrgEs0A6DvVy8EpjmijxZPFkhs9Aq-6oW8rTGg6dXE9zUhjXJMEiqg7izGFi1WECnuiWxdpfkbRvvko7sltxVju8brkQY04KbW37rtXsBgfRVbI5GezqdRzvVCU8XvTulyXOCkcaxn8y8slZx-CQVOdzZPiFfZmX4vKRc7qRMKLEEeIWs2ibrANE">
      <source src="https://assets.mixkit.co/videos/preview/mixkit-little-girl-playing-with-colorful-wooden-blocks-41916-large.mp4" type="video/mp4" />
      </video>
      {/* Gradient Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/85 via-ink-deep/20 to-transparent pointer-events-none"></div>
      {/* Top Badges Row */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-3 pointer-events-none">
      {/* Video Pill Badge */}
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
        <path className="st3" d="M78.3,26.9c-3.2-3.3-7-5.3-11.3-6,0,0,0,0,0,0-.8-.2-1.7-.3-2.6-.3-.4,0-.8,0-1.2,0-4.3,0-8.1,1.1-11.5,3.3-.3,0-5.5,4.5-10.6,3.8h0c-1.5-.2-4.5-2.6-6.9-3.7-3-1.6-6.3-2.4-9.9-2.4-5.9,0-11,2.1-15.2,6.3-4.2,4.2-6.3,9.3-6.3,15.2s2.1,11,6.3,15.2c3.5,3.5,7.5,5.5,12.2,6.1,0,0,0,0,0,0,.7.1,1.7.2,2.7.2,0,0,.2,0,.3,0s.2,0,.3,0c.3,0,.5,0,.7,0h0c.9,0,1.6,0,1.8-.2h0c4.3-.6,8.1-2.5,11.6-5.4,3.7-3.1,7.2-2.2,9.3-1.1.3.2,1.3.9,2.4,1.6.8.5,1.5,1.1,2.3,1.5,0,0,0,0,0,0,0,0,0,0,0,0,3.1,1.7,6.5,2.6,10.2,2.6,5.9,0,11-2.1,15.2-6.3,4.2-4.2,6.3-9.3,6.3-15.2s-2.1-11-6.3-15.2ZM75.8,54.7c-3.5,3.5-7.7,5.2-12.6,5.2s-6.2-.8-8.8-2.3c0,0-.1-.2-.2-.2-.7-.3-1.6-1.1-2.5-1.8-.3-.2-.5-.4-.8-.6-.5-.4-1-.7-1.4-.9h0c-5-2.5-10.7-.4-14.9,3.7-3,2.1-6.3,3.1-10.1,3.1s-1.8,0-2.6-.2c0,0-.1,0-.2,0-3.7-.6-7-2.2-9.8-5-3.5-3.5-5.2-7.7-5.2-12.6s1.7-9.2,5.2-12.7c3.5-3.5,7.7-5.2,12.6-5.2s6.6.9,9.4,2.6t0,0c.7.5,1.4,1.1,2.1,1.5,1.5,1.1,2.9,1.8,4.4,2.2.2,0,.4,0,.5.1,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,0,0,0,0,5.3.9,9.9-2.6,10.1-2.9,2.6-2.3,5.4-3.8,8.7-4.3,0,0,0,0,0,0,1.1-.2,2.2-.3,3.3-.3s1.8,0,2.7.2c0,0,0,0,0,0,.3,0,.5,0,.8.1,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,0,0,0,0h0c3.3.7,6.2,2.3,8.8,4.8,3.5,3.5,5.2,7.7,5.2,12.6,0,5-1.7,9.2-5.2,12.7Z"/>
        <g>
          <path className="st0" d="M9.2,27.9c.9-.9,1.7-1.6,2.7-2.3.7-3.4,2.3-6.4,4.9-9,2.3-2.3,4.9-3.8,7.8-4.6.9-1.4,1.9-2.7,3.2-4,0,0,.1-.1.2-.2-5.3.3-9.9,2.4-13.8,6.2-4.2,4.2-6.3,9.3-6.3,15.2h0c.4-.4.8-.9,1.3-1.3Z"/>
          <path className="st0" d="M16,41.5c0,0,.1-.1.2-.2-2.8-3-4.3-6.6-4.6-10.7-1.2,1.3-2.2,2.6-3,4,.9,3.5,2.6,6.6,5.2,9.3.7-.9,1.4-1.7,2.2-2.5Z"/>
          <path className="st0" d="M78.6,51.2c-.7-3.3-2.1-6.2-4.3-8.8-.4.4-.8.9-1.2,1.3-.5.5-.9.9-1.4,1.3,2.3,2.9,3.5,6.3,3.7,10.1.1-.1.3-.3.4-.4,1.1-1.1,2-2.2,2.8-3.5Z"/>
          <path className="st0" d="M78.3,57.3c-1.1,1.1-2.2,2-3.4,2.8-.7,3.2-2.3,6-4.8,8.5-2.3,2.3-4.9,3.8-7.8,4.6-.9,1.4-1.9,2.7-3.2,4,0,0-.1.1-.2.2,5.3-.3,9.9-2.4,13.8-6.2,4-4,6.1-8.9,6.2-14.6-.2.2-.4.5-.7.7Z"/>
          <path className="st0" d="M62.3,35c-.1-.1-2.4-.3-4.9-1.2h0s0,0-.1,0c0,0-.2,0-.3-.1,0,0-.1,0-.2,0,0,0-.2,0-.3-.1,0,0-.1,0-.2,0,0,0-.2,0-.2-.1,0,0-.1,0-.2,0,0,0-.2,0-.2-.1,0,0-.1,0-.2,0,0,0-.2,0-.2-.1,0,0-.1,0-.2-.1,0,0-.2,0-.2-.1,0,0-.1,0-.2-.1,0,0-.1,0-.2-.1,0,0-.1,0-.2-.1,0,0-.1-.1-.2-.2,0,0-.1,0-.2-.1,0,0-.1-.1-.2-.2,0,0-.1,0-.2-.1,0,0-.1-.1-.2-.2,0,0-.1,0-.2-.1,0,0-.1-.1-.2-.2,0,0-.1-.1-.2-.2,0,0-.1-.1-.2-.2,0,0,0-.1-.1-.2,0,0-.1-.2-.2-.2,0,0,0-.1-.1-.2,0,0-.1-.2-.2-.3,0,0,0,0,0-.1,0-.1-.2-.3-.3-.4-.3-.6-.5-1.6-.8-2.5,0-.2,0-.3,0-.5,0-.4,0-.7-.3-.9,0-.4-.1-.7-.2-1.1,0-.2,0-.3,0-.3h0c-.5-2.1-1.3-4-2.4-5.8,0,0,0,0,0,0-.1-.2-.3-.4-.4-.7,0,0,0,0,0-.1-.1-.2-.3-.4-.4-.6,0,0,0,0,0,0-.2-.2-.3-.4-.5-.6,0,0,0,0,0,0-.4-.5-.8-.9-1.1-1.3-.2-.2-.4-.4-.6-.6-3.2-3.2-7-5.2-11.3-5.9-1,.7-2,1.5-3,2.4-.3.3-.5.6-.8.8,4.2,0,8,1.3,11.1,4,0,0,0,0,0,0,.4.4.8.7,1.2,1.1,0,0,0,0,0,0,.1.1.3.3.4.4,0,0,.2.2.2.3,0,0,.1.1.2.2,0,.1.2.2.3.3,0,0,.2.2.2.3,0,0,0,.1.1.2,1.8,2.3,3,5,3.5,7.9h0s0,.6.2,1.4c0,.6.2,1.2.3,1.7.2.7.3,1.3.6,1.6,0,0,0,0,0,0,1.3,3,3.8,4.8,5.9,5.8h0c.1,0,.3.1.4.2,0,0,0,0,0,0,.1,0,.3.1.4.2h0c.6.2,1.2.4,1.9.6.7.2,1.3.3,1.5.3,1.4.2,2.6.3,2.7.3,3.1.6,5.8,1.9,8.2,4,.5-.4.9-.8,1.4-1.3.4-.4.8-.9,1.2-1.3-2.8-2.5-5.9-4.1-9.4-4.8Z"/>
          <path className="st0" d="M44.9,68.6c-.5-.5-1-1-1.4-1.6,0,0,0,0,0,0h0c-1.9-2.4-3.1-5-3.6-8.1,0-.4,0-.7-.1-1.1,0-.4,0-.8-.1-1.2,0,0,0,0,0,0,0-.7-.3-1.4-.5-2h0s0,0,0,0c0,0,0-.1,0-.2,0,0,0,0,0,0-.2-.5-.4-.8-.5-1-1.2-2.3-3.1-3.9-5.5-5h0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0-.1,0-.2,0,0,0,0,0,0,0,0,0-.1,0-.2,0,0,0,0,0,0,0,0,0-.2,0-.3,0h0c-.7-.2-1.5-.5-2.6-.7-.1,0-.3,0-.4,0,0,0,0,0,0,0-.9-.1-1.8-.2-2.7-.2-2.7-.5-5.1-1.5-7.2-3.1-.1.1-.2.2-.3.3-.8.8-1.4,1.6-2,2.4,2.4,1.8,5.1,3,8,3.7h0c.5.1,1,.2,1.5.3.8.1,1.5.2,2.3.3.4,0,.9.1,1.3.2,0,0,0,0,0,0,0,0,.1,0,.2,0h0c.1,0,.3,0,.4.1.1,0,.3,0,.4.1.1,0,.2,0,.3.1h0c1.9.8,3.1,2.1,3.9,3.4,0,0,0,0,0,.1.1.3.3.5.4.7,0,.2.1.4.2.5,0,.2.1.3.2.5.1.5.3,1,.4,1.5,0,.3,0,.5,0,.6.1.9.3,1.9.5,2.8,0,0,0,0,0,0h0c.7,2.9,2,5.5,3.9,7.8h0s0,0,0,0c.5.6,1.1,1.3,1.7,1.9,1.1,1.1,2.3,2,3.5,2.9.4.2.6.4.6.4h0c2.2,1.4,4.6,2.3,7.2,2.7,1.1-.7,2.1-1.5,3-2.5.3-.3.5-.5.8-.8-4.9,0-9-1.8-12.5-5.2Z"/>
        </g>
        <g>
          <g>
            <path className="st2" d="M29.9,50.9h0c0,0-.1,0-.2,0,0,0,0,0,0,0-.4,0-.8-.1-1.3-.2-.8,0-1.6-.2-2.3-.3,0,0-.1,0-.2,0-2.1,3.2-3.2,6.7-3.4,10.5.6,0,1.2,0,1.8,0s1.2,0,1.8,0c.2-3.6,1.4-6.9,3.6-9.8,0,0,0,0,.1-.1Z"/>
            <path className="st2" d="M25.4,64.6h0c-.2,0-.5,0-.7,0,0,0-.2,0-.3,0s-.2,0-.3,0c-.5,0-1,0-1.5,0,.4,3.4,1.5,6.5,3.4,9.3,1.6.5,3.4.7,5.2.7h0c-2.8-2.9-4.5-6.2-5-10-.3,0-.6,0-.9,0Z"/>
          </g>
          <path className="st2" d="M61.1,34.7c2.1-3.2,3.2-6.7,3.3-10.5-.4,0-.8,0-1.3,0-.8,0-1.6,0-2.4.1-.2,3.5-1.3,6.6-3.4,9.4,1.4.5,2.8.8,3.7,1Z"/>
          <path className="st2" d="M63.2,20.6c.4,0,.8,0,1.1,0-.4-3.6-1.7-6.9-3.8-9.8-.9-.1-1.7-.2-2.7-.2s-1.4,0-2.1.1c2.8,2.8,4.4,6.2,4.9,10,.8,0,1.6-.1,2.5-.1Z"/>
          <path className="st2" d="M58.9,77.4c0,0,.1-.1.2-.2.3-.3.6-.6.8-.9,0,0,.1-.1.2-.2.2-.2.4-.5.6-.7,0,0,.1-.1.2-.2.2-.3.4-.5.6-.8,0,0,0,0,0-.1.2-.3.4-.6.7-1,2.1-3.3,3.1-7,3.1-11.2s-1.3-8.3-3.6-11.8c-1.2-1.8-2.4-3.2-2.9-3.9h0c0,0,0-.1-.1-.2,0,0,0,0,0,0,0,0,0,0,0,0-1.8-3.1-1-6,0-7.9-.1,0-.3,0-.5,0-.2,0-.7,0-1.5-.3-.7-.1-1.3-.3-1.9-.6h0c-1.5,3.2-1.1,6.8.5,10.1,0,0,0,0,0,0,.3.9,1.5,2.5,2.2,3.3,0,0,0,0,0,0,.1.2.2.3.4.5,0,0,0,.1,0,.1h0c.2.2.4.5.6.7,2.1,3,3.1,6.3,3.1,10.1,0,4.9-1.7,9.1-5.2,12.6-.2.2-.5.5-.7.7,0,0,0,0-.1,0-.2.2-.4.4-.6.5,0,0,0,0,0,0-.2.2-.5.4-.7.6,0,0,0,0,0,0-.3.2-.5.4-.8.5t0,0h0c-2.8,1.8-6,2.8-9.6,2.8-3.1,0-6-.7-8.5-2.1-1.4.3-2.8.4-4.3.4-.5,0-1,0-1.4,0,4,3.6,8.7,5.4,14.2,5.4,5.8,0,10.8-2,15-6.1h0Z"/>
          <path className="st2" d="M42.9,1.7c-5.9,0-11,2.1-15.2,6.3-4.2,4.2-6.3,9.2-6.3,15.2,0,4.2,1.1,7.9,3.2,11.3,0,0,0,.1.1.2,0,0,.3.5.8,1.3,0,0,0,0,0,0,1.2,1.9,2.1,4,2.1,4h0c.9,2.1,1.3,4.7.3,7,.2,0,.5,0,.7,0,0,0,0,0,0,0,.1,0,.3,0,.4,0,1.1.2,2,.4,2.6.7h0c1.2-2.8,1-5.5.3-7.7h0s0,0,0,0c-.2-.6-.4-1.1-.6-1.6,0,0,0,0,0,0-.6-1.4-1.3-2.5-2-3.4,0,0,0,0,0,0,0,0-.1-.1-.2-.2-.4-.6-.8-1-1.1-1.4-.1-.2-.2-.3-.3-.5,0,0,0,0,0-.1-1.9-2.9-2.9-6.1-2.9-9.8s1.7-9.1,5.2-12.6c3.5-3.5,7.7-5.2,12.6-5.2,3.4,0,6.4.8,9.1,2.5,1.6-.4,3.3-.7,5-.7-4-3.6-8.7-5.4-14.2-5.4Z"/>
        </g>
        <g>
          <path className="st1" d="M57.6,50.6c-.7-.8-1.9-2.4-2.2-3.3,0,0,0,0,0,0-2.8,1.4-4.7,3.9-5.7,7,.3.2.7.4,1.1.7.3.2.5.4.8.6.4.3.8.7,1.2,1,.6-3.5,2.9-5.2,4.8-6Z"/>
          <path className="st1" d="M50.5,59.5c-.6-.4-1.2-.8-1.7-1.1,0,.5,0,1.1-.1,1.6-.6,3.2-1.9,6-4.1,8.4,0,0,.1.2.2.2.8.8,1.6,1.5,2.5,2.1,2.6-3,4.1-6.3,4.8-10.1-.6-.3-1.1-.7-1.7-1.1Z"/>
          <path className="st1" d="M29.6,35.1s0,0,.1.1c.1.1,1.1,1.4,1.9,3.2,4.3-1.2,6.4-4.6,7.5-7.2-1.1-.4-2.2-1-3.2-1.8-.1,0-.2-.2-.4-.3-1,2.6-2.8,5.2-5.9,6Z"/>
          <path className="st1" d="M40.1,27.3c.2-3.4,1.3-6.5,3.3-9.2,0,0-.2-.2-.2-.3,0-.1-.2-.2-.3-.3,0,0-.1-.1-.2-.2,0,0-.2-.2-.2-.3-.1-.1-.2-.3-.4-.4,0,0,0,0,0,0-.4-.4-.8-.8-1.2-1.1-1.9,2.5-3.2,5.2-3.9,8.3,0,0-.1.6-.3,1.5,1.2.8,2.5,1.6,3.5,2Z"/>
          <path className="st1" d="M73.1,13.3c-4.2-4.2-9.3-6.3-15.2-6.3-5.7,0-10.6,1.9-14.7,5.8.5.4.9.8,1.4,1.3.2.2.4.4.6.6.2.2.4.4.6.7,3.4-3.1,7.4-4.7,12.1-4.7s9.1,1.7,12.6,5.2c3.5,3.5,5.2,7.7,5.2,12.7s-1.3,8.1-4,11.3c-.4.4-.8.9-1.2,1.3-.5.4-.9.9-1.4,1.3-2.6,2.1-5.6,3.4-8.9,3.9,0,0,0,0,0,0-.4,0-.8,0-1.2,0h0c0,0,.1.2.2.3,0,0,0,0,0,0,0,0,.1.2.2.3,0,0,0,0,0,0,.4.5,1,1.3,1.7,2.1,0,0,0,0,0,0,.1.2.3.4.4.6,3.8-.6,7.2-2.2,10.1-4.7.5-.4,1-.9,1.4-1.3.4-.4.8-.8,1.2-1.2,3.4-3.9,5.1-8.6,5.1-13.9,0-5.9-2.1-11-6.3-15.2Z"/>
          <path className="st1" d="M42.4,71.2c-.1-.1-.2-.2-.3-.3-3.1,2.4-6.7,3.7-10.9,3.7s-9.1-1.7-12.6-5.2c-3.5-3.5-5.2-7.7-5.2-12.7,0-3.8,1.1-7.2,3.2-10.2.6-.8,1.3-1.7,2.1-2.4.1-.1.2-.2.3-.3,2.5-2.3,5.3-3.9,8.6-4.6-.6-1.3-1.3-2.4-1.8-3.2-3.6.9-6.7,2.7-9.4,5.4,0,0-.1.1-.2.2-.8.8-1.6,1.7-2.2,2.6-2.7,3.6-4.1,7.9-4.1,12.6,0,5.9,2.1,11,6.3,15.2,4.2,4.2,9.3,6.3,15.2,6.3,5.2,0,9.7-1.6,13.6-4.8-.8-.6-1.7-1.3-2.4-2.1Z"/>
        </g>
      </svg>
      </div>
      </div>
      {/* Center Translucent Play/Pause Indicator */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-14 h-14 rounded-full bg-surface-pure/85 backdrop-blur-md border border-white/50 text-connection-blue flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
      <span className="material-symbols-outlined text-[28px] translate-x-0.5">play_arrow</span>
      </div>
      </div>
      {/* Bottom Floating Badge inside image */}
      <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-surface-pure/95 backdrop-blur-md border border-soft-line text-ink-deep shadow-lg flex items-center justify-between">
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
      </div>
      {/* Decorative background subtle glow blur */}
      <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-connection-blue/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute -top-8 -right-8 w-48 h-48 bg-energy-yellow/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      </div>
      </div>
      </section>
    </>
  );
}
