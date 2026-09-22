export function StructureSection() {
  return (
    <>
      {/* 10. Estrutura no Downtown & Galeria Expandida dos Espaços */}
      <section className="w-full bg-canvas-clinical py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line" id="estrutura">
      <div className="reveal max-w-[1360px] mx-auto flex flex-col gap-12">
      <div className="flex flex-col max-w-3xl gap-3">
      <div className="inline-flex items-center gap-2 text-connection-blue font-label-md text-label-md font-semibold tracking-wider uppercase">
      <span className="material-symbols-outlined text-[16px]">apartment</span>
                Infraestrutura Terapêutica
              </div>
      <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">Projetada para o bem-estar sensorial e&nbsp;familiar</h2>
      <p className="font-body-lg text-body-lg text-crimap-gray">
                Espaços amplos, luminosos e cuidadosamente projetados no Shopping Downtown para estimular o desenvolvimento com afeto, tecnologia assistiva e segurança&nbsp;total.
              </p>
      </div>
      {/* Primary Rooms Gallery: 3 Main Clinical Environments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Room 1: Integração Sensorial */}
      <div className="rounded-3xl bg-surface-pure border border-soft-line overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
      <div className="w-full aspect-[4/3] overflow-hidden relative">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Pediatric clinic sensory integration therapy room with suspended equipment, swing, soft foam mats, natural sunlight, pastel warm colors, calm therapeutic setting with child and therapist from behind/candid, high-end architectural clinic space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI1ippo2rD5gRP4sblWkuhuHhqPv_YHX-7jJfh4q2QpvZm3rjLhCS6lVYSktzaMEGn79ZoxJe6G_7FcNFPLabvC-tzT5jMsBJtHT8Ocjuo1DemzNJ-LrYTB6rye7eoWOf-IukusEaOeG7LPTNmeEtI1clBABA4drkFcjqPVJKRj2dUVcc7F79qxs6RSZayapLmZQI8JwCG3VSFjDHackRZWGoq1TrEBV3xUYF1f6EDrRyqV4MzcCw" />
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md text-ink-deep font-label-sm font-semibold flex items-center gap-1.5 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-energy-yellow"></span> Integração Sensorial
      </div>
      </div>
      <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
      <div className="flex flex-col gap-1.5">
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep leading-snug">Sala de Integração Sensorial &amp; I.S. de&nbsp;Ayres</h3>
      <p className="font-body-sm text-body-sm text-crimap-gray leading-relaxed">
      Equipamentos suspensos, solo amortecido, tirolesa e iluminação natural suave para organização de respostas motoras e autonomia.
      </p>
      </div>
      <div className="pt-3 border-t border-soft-line flex items-center justify-between text-label-sm text-connection-blue font-semibold">
      <span className="">Ambiente lúdico certificado</span>
      <span className="material-symbols-outlined text-[16px]">verified</span>
      </div>
      </div>
      </div>
      {/* Room 2: Fonoaudiologia & Comunicação */}
      <div className="rounded-3xl bg-surface-pure border border-soft-line overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
      <div className="w-full aspect-[4/3] overflow-hidden relative">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Pediatric speech therapy consultation room, warm bright wooden table with educational toys, mirror, modern cozy clinical interior in Barra da Tijuca clinic, professional and welcoming" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPwlxOlphn98e3g1HCchFoPsVKq9_DUSkT4NXo2w0R-_EwOGwpoofgFzWzEP3igkq1JhKJE3HPhZKuZpah8oWXv020FcO_oktQQE7g5mypyifGznqCUl_YS-xH-k3lzUyzv7kNQtjoeL788pefKsXW--6g1POW0fn0M_wcL4Kb43bFZ7dgzFb55vjrmriYSy2QBsV8ozRye7wPuthSOZOTKCyEIM7li9lb_Jo-lBz5JuIIRWPCtbM" />
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md text-ink-deep font-label-sm font-semibold flex items-center gap-1.5 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-connection-blue"></span> Fonoaudiologia
      </div>
      </div>
      <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
      <div className="flex flex-col gap-1.5">
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep leading-snug">Consultório de Fonoaudiologia &amp;&nbsp;Comunicação</h3>
      <p className="font-body-sm text-body-sm text-crimap-gray leading-relaxed">
      Mobiliário ergonômico, espelho terapêutico, recursos táteis e tecnologia assistiva para linguagem expressiva, fluência e mastigação.
      </p>
      </div>
      <div className="pt-3 border-t border-soft-line flex items-center justify-between text-label-sm text-connection-blue font-semibold">
      <span className="">Estímulo orofacial e de fala</span>
      <span className="material-symbols-outlined text-[16px]">verified</span>
      </div>
      </div>
      </div>
      {/* Room 3: Psicologia & Neurodesenvolvimento */}
      <div className="rounded-3xl bg-surface-pure border border-soft-line overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
      <div className="w-full aspect-[4/3] overflow-hidden relative">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Pediatric psychology and neurodevelopment clinic room with play therapy setup, comfortable miniature armchair, books, soft tactile textures, natural sunlight, clean modern architecture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUAPhTV_XAcr0hL7KgyJK_u3QZU-awfY-pbJ-ci2L-TKRr3i39mNWAkg49l4LHWeKOrvYTlwDd02F7cXSQCRw7BSS7dAnidxbDazC45IaAFmn5v7pD2hZChCO-mBX534hBiz8aZ4NhMyqz0HbRftS5Csz3CWntst1j1s3y9nQRXTaJqaJwDA5gotEW9M2CpSuROVaSLRFIRXuMBfPQIElczFI9-AI_M3oPhQgS0h3Rr4MmYHx_huw" />
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md text-ink-deep font-label-sm font-semibold flex items-center gap-1.5 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-vitality-rose"></span> Ludoterapia &amp; Emoções
      </div>
      </div>
      <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
      <div className="flex flex-col gap-1.5">
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep leading-snug">Espaço de Psicologia Infantil &amp;&nbsp;Ludoterapia</h3>
      <p className="font-body-sm text-body-sm text-crimap-gray leading-relaxed">
      Ambiente acolhedor e seguro com jogos expressivos, cantinho de leitura e poltronas confortáveis para escuta da criança e dos pais.
      </p>
      </div>
      <div className="pt-3 border-t border-soft-line flex items-center justify-between text-label-sm text-connection-blue font-semibold">
      <span className="">Acolhimento emocional seguro</span>
      <span className="material-symbols-outlined text-[16px]">verified</span>
      </div>
      </div>
      </div>
      </div>
      {/* Secondary Facility & Comfort Features: 2 Complementary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
      {/* Facility Feature 1: Downtown & Parking */}
      <div className="rounded-2xl bg-surface-pure border border-soft-line overflow-hidden shadow-sm flex flex-col md:flex-row md:items-center md:p-7 md:gap-6">
      <div className="w-full aspect-video md:w-28 md:h-28 md:aspect-auto md:rounded-2xl overflow-hidden flex-shrink-0 bg-canvas-clinical md:border md:border-soft-line">
      <img className="w-full h-full object-cover" data-alt="Shopping Downtown Barra exterior walkways and quiet car-free zones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZH7jiyrmt8DwhSPLNV70640d9R_ijEBkFmUesXJED5mSMUAhcwm0d085iNAnBLZdlQCXxc3dEk0Bc8wY9shR_6-Hw7qBerVbhsDB81Y8nDsMZM_CoTtb_kJJRsvnb9F2_ghRwvfFULaPqyBnagbKz0KGYwNvuAyHPhU3saae2uyp0JQWMKQZoZULELRY2VoRE8loHRZS9PcnJ6Mn1q7iTdOfAUnO6VvyzCzyCJxa0BSYjuaZzdqY" />
      </div>
      <div className="flex flex-col gap-2 flex-1 p-5 md:p-0">
      <div className="flex items-start gap-3 text-connection-blue font-label-md font-bold">
      <span className="material-symbols-outlined text-[36px] md:text-[22px] leading-none shrink-0">local_parking</span>
      <span className="leading-snug pt-0.5">Acesso Facilitado com Valet no Bloco 4</span>
      </div>
      <h4 className="font-headline-sm text-headline-sm font-bold text-ink-deep">Estacionamento Coberto e Elevadores Diretos</h4>
      <p className="font-body-sm text-body-sm text-crimap-gray leading-relaxed">
      Estacione no subsolo do próprio bloco da clínica com total acessibilidade motora, rampas suaves e pátio livre de trânsito de automóveis.
      </p>
      </div>
      </div>
      {/* Facility Feature 2: Family Room */}
      <div className="rounded-2xl bg-surface-pure border border-soft-line overflow-hidden shadow-sm flex flex-col md:flex-row md:items-center md:p-7 md:gap-6">
      <div className="w-full aspect-video md:w-28 md:h-28 md:aspect-auto md:rounded-2xl overflow-hidden flex-shrink-0 bg-canvas-clinical md:border md:border-soft-line">
      <img className="w-full h-full object-cover" data-alt="Warm welcoming lounge and family breastfeeding room in clinic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiRTp8ccvkGZTPc8wty-l9JQJQseHOCUIFManwgVFddt2PhBsHxDGJNLPNbooP9FHPr2K7XL0e2QePJe9q8AVR4hQg0l1bXFEGGEDt40w3Jg24xDEXJHmhhS5UoTefgmL-yWpwXPZ3toIqi0_9dQNIXcNpeYwB2_kAexIE8GEAsnVym2jU33hB8xebWB63-X8RmnvHz-sfMeUyKJ4miA6zP4fnMpacLGCw2bJ-VH4yHsC6RpY8bd0" />
      </div>
      <div className="flex flex-col gap-2 flex-1 p-5 md:p-0">
      <div className="flex items-start gap-3 text-vitality-rose font-label-md font-bold">
      <span className="material-symbols-outlined text-[36px] md:text-[22px] leading-none shrink-0">child_friendly</span>
      <span className="leading-snug pt-0.5">Espaço Família &amp; Sala de Amamentação</span>
      </div>
      <h4 className="font-headline-sm text-headline-sm font-bold text-ink-deep">Conforto para Pais e Irmãos</h4>
      <p className="font-body-sm text-body-sm text-crimap-gray leading-relaxed">
      Lounge silencioso para aguardar as sessões com Wi-Fi ultrarrápido, água filtrada, café, poltrona de amamentação e trocador higienizado.
      </p>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
