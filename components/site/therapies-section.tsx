export function TherapiesSection() {
  return (
    <>
      {/* 5. Specialized Services Grid */}
      <section className="w-full bg-surface-pure py-20 px-6 lg:px-12 border-b border-soft-line" id="galeria-momentos">
        <div className="reveal max-w-[1360px] mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col max-w-3xl gap-3">
            <div className="inline-flex items-center gap-2 text-connection-blue font-label-md text-label-md font-semibold tracking-wider uppercase">
              <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
              Conexão &amp; Afeto na Prática
            </div>
            <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">
              Momentos reais de descoberta, escuta e&nbsp;evolução
            </h2>
            <p className="font-body-lg text-body-lg text-crimap-gray leading-relaxed">
              Mais do que técnicas e protocolos, o desenvolvimento acontece no vínculo de confiança estabelecido entre cada terapeuta, a criança e sua&nbsp;família.
            </p>
          </div>
      
          {/* 3-Column Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Terapia Ocupacional */}
            <div className="group rounded-2xl bg-canvas-clinical border border-soft-line overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-dim">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2WDcGYm3LrsbcqIPlMHwMJb74Loozb6Ii4rulReJ-8PZiFCcr7WhlE3atQb8pfSaTtBcLmMg-Dexq7IK9nxwZyWdXvQHX74new9T3zN7HzAL6dHtw10_Vzm2SvDSCjZ1cCCPkNgwvswPQ_SlCYWw_gAF5xxS43Oryexs-9rZohlNBhrf-GAiv-TjiWl7cFgUI2TDZZkYKzz3lq3HISbwXpZsQw5sO1904FhNvk9_dbbfgOxQmz4s" alt="Terapeuta ocupacional e criança em atividade sensorial com blocos de montar coloridos" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-surface-pure/90 backdrop-blur-md border border-soft-line/80 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-energy-yellow"></span>
                  <span className="font-label-sm text-label-sm font-semibold text-ink-deep">Terapia Ocupacional &amp; I.S.</span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep leading-snug">
                    Sensorial &amp; Motricidade
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Estímulo lúdico e ganho de autonomia motora através de brincadeiras estruturadas e acolhedoras.
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-soft-line flex items-center gap-2 text-label-sm text-connection-blue font-semibold">
                  <span className="material-symbols-outlined text-[16px]">palette</span>
                  <span className="">Desenvolvimento lúdico</span>
                </div>
              </div>
            </div>
      
            {/* Card 2: Centerpiece with Video Frame Accent (Fonoaudiologia & Comunicação Ativa) */}
            <div className="group rounded-2xl bg-canvas-clinical border border-soft-line overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-ink-deep">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA18qHYkA7Jpl0cYHIwwxQR2RXYg51zRcUW6xTIX2jKZvSFOHgQocYOBa5XLUcHJZS0u3l0_ZUgg-c0IjHmltdC55UhvLhIR5VrRyGmuRuuz9vvuk3LzMjHTJyQcoPRDhQ5BXwlNC8oUHfBKGeDZ6vvPB-BAn8xIMrOosUlFmVBJfGpJPtuOHDEpcspT_sSpRGSunOnnWQh31MDsm7N8NPTJk6XwbgYuuxRUK9X8A7fnb6UBuqdqr8" alt="Fonoaudióloga em interação acolhedora com criança e mãe na CRIMAP" />
                {/* Top Video Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-pure/90 backdrop-blur-md border border-soft-line/80 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-vitality-rose animate-pulse"></span>
                    <span className="font-label-sm text-label-sm font-semibold text-ink-deep">Vídeo Institucional • O vínculo</span>
                  </div>
                </div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-surface-pure/90 backdrop-blur-md border border-white/60 text-connection-blue flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <span className="material-symbols-outlined text-[24px] translate-x-0.5">play_arrow</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-1.5 text-connection-blue font-label-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-connection-blue"></span>
                    Fonoaudiologia &amp; Comunicação Ativa
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep leading-snug">
                    Alegria compartilhada em cada conquista
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Alegria compartilhada em cada conquista e nova palavra expressa com naturalidade e leveza.
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-soft-line flex items-center gap-2 text-label-sm text-connection-blue font-semibold">
                  <span className="material-symbols-outlined text-[16px]">record_voice_over</span>
                  <span className="">Expressão &amp; Comunicação</span>
                </div>
              </div>
            </div>
      
            {/* Card 3: Acolhimento Familiar & Espaço Amplo */}
            <div className="group rounded-2xl bg-canvas-clinical border border-soft-line overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-dim">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/seguranca-liberdade.jpg" alt="Sala ampla de integração sensorial com equipamentos de suspensão e luz natural" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-surface-pure/90 backdrop-blur-md border border-soft-line/80 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-progress-green"></span>
                  <span className="font-label-sm text-label-sm font-semibold text-ink-deep">Acolhimento Familiar</span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep leading-snug">
                    Segurança &amp; Liberdade
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Ambiente sereno no Shopping Downtown onde a família participa ativamente de cada passo.
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-soft-line flex items-center gap-2 text-label-sm text-progress-green font-semibold">
                  <span className="material-symbols-outlined text-[16px]">spa</span>
                  <span className="">Espaço livre de estímulos agressivos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><section className="w-full bg-surface-pure py-20 px-6 lg:px-12 border-b border-soft-line" id="terapias">
      <div className="reveal max-w-[1360px] mx-auto flex flex-col gap-14">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="flex flex-col gap-2 max-w-2xl">
      <div className="inline-flex items-center gap-2 text-connection-blue font-label-md text-label-md font-semibold tracking-wider uppercase">
      <span className="material-symbols-outlined text-[16px]">medical_services</span>
                  Especialidades Terapêuticas
                </div>
      <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">Cuidado transdisciplinar&nbsp;estruturado</h2>
      <p className="font-body-lg text-body-lg text-crimap-gray">
                  Salas equipadas com tecnologia e recursos lúdicos pensados para a infância e juventude, orientadas por evidências científicas e&nbsp;afeto.
                </p>
      </div>
      <div>
      <a className="inline-flex items-center gap-2 text-connection-blue font-label-lg font-semibold hover:underline" href="https://wa.me/5521988451234" rel="noopener noreferrer" target="_blank">
                  Tirar dúvidas sobre as&nbsp;especialidades
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
      </div>
      </div>
      {/* 6 Service Cards with Colored Top Accent Borders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1: Fisioterapia Motora & Neurofuncional (Green Accent) */}
      <div className="flex flex-col justify-between p-8 rounded-2xl bg-canvas-clinical border border-soft-line relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="absolute top-0 left-0 right-0 h-1 bg-progress-green"></div>
      <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-progress-green/10 text-ink-deep font-label-sm font-semibold">
      <span className="w-1.5 h-1.5 rounded-full bg-progress-green"></span>
                      Neurofuncional
                    </span>
      <span className="material-symbols-outlined text-progress-green text-[26px]">directions_walk</span>
      </div>
      <h3 className="font-headline-md text-headline-md font-bold text-ink-deep">Fisioterapia Motora &amp;&nbsp;Neurofuncional</h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Trabalho contínuo para o ganho de controle postural, alinhamento biomecânico, facilitação de marcha, modulação de tônus e ganho de independência nas atividades cotidianas.
                  </p>
      <div className="flex flex-col gap-2 pt-2">
      <span className="font-label-sm text-label-sm font-bold text-ink-deep uppercase tracking-wider">Principais Focos:</span>
      <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-crimap-gray">
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-progress-green"></span>Reabilitação motora em atrasos do desenvolvimento</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-progress-green"></span>Treino de marcha e equilíbrio em solo e esteira</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-progress-green"></span>Indicação e adaptação de órteses e tecnologia assistiva</li>
      </ul>
      </div>
      </div>
      <div className="pt-6 mt-6 border-t border-soft-line flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-crimap-gray">Salas com tatames e suspensão</span>
      <a className="text-connection-blue font-label-md font-bold hover:underline flex items-center gap-1" href="https://wa.me/5521988451234?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Fisioterapia%20na%20CRIMAP">
                    Agendar <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      </div>
      </div>
      {/* Card 2: Fonoaudiologia Pediátrica (Blue Accent) */}
      <div className="flex flex-col justify-between p-8 rounded-2xl bg-canvas-clinical border border-soft-line relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="absolute top-0 left-0 right-0 h-1 bg-connection-blue"></div>
      <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-connection-blue/10 text-ink-deep font-label-sm font-semibold">
      <span className="w-1.5 h-1.5 rounded-full bg-connection-blue"></span>
                      Linguagem &amp; Fala
                    </span>
      <span className="material-symbols-outlined text-connection-blue text-[26px]">record_voice_over</span>
      </div>
      <h3 className="font-headline-md text-headline-md font-bold text-ink-deep">Fonoaudiologia Pediátrica</h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Estimulação da intenção comunicativa, aquisição dos sons da fala, fluência, motricidade orofacial e segurança nas fases de deglutição e transição alimentar.
                  </p>
      <div className="flex flex-col gap-2 pt-2">
      <span className="font-label-sm text-label-sm font-bold text-ink-deep uppercase tracking-wider">Principais Focos:</span>
      <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-crimap-gray">
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-connection-blue"></span>Intervenção precoce em atrasos expressivos de fala</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-connection-blue"></span>Comunicação Aumentativa e Alternativa (CAA)</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-connection-blue"></span>Deglutição atípica e mastigação funcional</li>
      </ul>
      </div>
      </div>
      <div className="pt-6 mt-6 border-t border-soft-line flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-crimap-gray">Abordagem lúdica e estruturada</span>
      <a className="text-connection-blue font-label-md font-bold hover:underline flex items-center gap-1" href="https://wa.me/5521988451234?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Fonoaudiologia%20na%20CRIMAP">
                    Agendar <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      </div>
      </div>
      {/* Card 3: Terapia Ocupacional & Integração Sensorial (Yellow Accent) */}
      <div className="flex flex-col justify-between p-8 rounded-2xl bg-canvas-clinical border border-soft-line relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="absolute top-0 left-0 right-0 h-1 bg-energy-yellow"></div>
      <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-energy-yellow/15 text-ink-deep font-label-sm font-semibold">
      <span className="w-1.5 h-1.5 rounded-full bg-energy-yellow"></span>
                      Sensorial &amp; Autonomia
                    </span>
      <span className="material-symbols-outlined text-energy-yellow text-[26px]">accessibility_new</span>
      </div>
      <h3 className="font-headline-md text-headline-md font-bold text-ink-deep">Terapia Ocupacional &amp; I.S. de&nbsp;Ayres</h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Equipamento completo de suspensão e estímulos sensoriais planejados para organizar respostas motoras, coordenação fina e autonomia nas Atividades de Vida Diária (AVDs).
                  </p>
      <div className="flex flex-col gap-2 pt-2">
      <span className="font-label-sm text-label-sm font-bold text-ink-deep uppercase tracking-wider">Principais Focos:</span>
      <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-crimap-gray">
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-energy-yellow"></span>Regulação vestibular, proprioceptiva e tátil</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-energy-yellow"></span>Autonomia: banho, vestir, calçar e alimentação</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-energy-yellow"></span>Coordenação motora fina, preensão e escrita</li>
      </ul>
      </div>
      </div>
      <div className="pt-6 mt-6 border-t border-soft-line flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-crimap-gray">Sala com balanços e tirolesa</span>
      <a className="text-connection-blue font-label-md font-bold hover:underline flex items-center gap-1" href="https://wa.me/5521988451234?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Terapia%20Ocupacional%20na%20CRIMAP">
                    Agendar <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      </div>
      </div>
      {/* Card 4: Psicologia Infantil & Ludoterapia (Pink Accent) */}
      <div className="flex flex-col justify-between p-8 rounded-2xl bg-canvas-clinical border border-soft-line relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="absolute top-0 left-0 right-0 h-1 bg-vitality-rose"></div>
      <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vitality-rose/10 text-ink-deep font-label-sm font-semibold">
      <span className="w-1.5 h-1.5 rounded-full bg-vitality-rose"></span>
                      Emocional &amp; Comportamento
                    </span>
      <span className="material-symbols-outlined text-vitality-rose text-[26px]">psychology</span>
      </div>
      <h3 className="font-headline-md text-headline-md font-bold text-ink-deep">Psicologia Infantil &amp;&nbsp;Ludoterapia</h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    O brincar como ferramenta clínica de expressão das emoções, elaboração de conflitos, manejo de ansiedade, autorregulação e orientação contínua aos pais.
                  </p>
      <div className="flex flex-col gap-2 pt-2">
      <span className="font-label-sm text-label-sm font-bold text-ink-deep uppercase tracking-wider">Principais Focos:</span>
      <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-crimap-gray">
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vitality-rose"></span>Manejo de birras, ansiedade de separação e medos</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vitality-rose"></span>Habilidades sociais e regulação comportamental</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vitality-rose"></span>Sessões periódicas de alinhamento com a família</li>
      </ul>
      </div>
      </div>
      <div className="pt-6 mt-6 border-t border-soft-line flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-crimap-gray">Espaço seguro e confidencial</span>
      <a className="text-connection-blue font-label-md font-bold hover:underline flex items-center gap-1" href="https://wa.me/5521988451234?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Psicologia%20na%20CRIMAP">
                    Agendar <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      </div>
      </div>
      {/* Card 5: Psicopedagogia Clínica (Blue Accent) */}
      <div className="flex flex-col justify-between p-8 rounded-2xl bg-canvas-clinical border border-soft-line relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="absolute top-0 left-0 right-0 h-1 bg-connection-blue"></div>
      <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-connection-blue/10 text-ink-deep font-label-sm font-semibold">
      <span className="w-1.5 h-1.5 rounded-full bg-connection-blue"></span>
                      Cognição &amp; Aprendizagem
                    </span>
      <span className="material-symbols-outlined text-connection-blue text-[26px]">menu_book</span>
      </div>
      <h3 className="font-headline-md text-headline-md font-bold text-ink-deep">Psicopedagogia Clínica</h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Investigação e intervenção nas dificuldades de aquisição do código escrito, raciocínio lógico-matemático, atenção sustentada e funções executivas para a vida acadêmica.
                  </p>
      <div className="flex flex-col gap-2 pt-2">
      <span className="font-label-sm text-label-sm font-bold text-ink-deep uppercase tracking-wider">Principais Focos:</span>
      <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-crimap-gray">
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-connection-blue"></span>Avaliação de dislexia, discalculia e disgrafia</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-connection-blue"></span>Estratégias de estudo e mediação escolar</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-connection-blue"></span>Desenvolvimento de memória de trabalho e planejamento</li>
      </ul>
      </div>
      </div>
      <div className="pt-6 mt-6 border-t border-soft-line flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-crimap-gray">Articulação direta com a escola</span>
      <a className="text-connection-blue font-label-md font-bold hover:underline flex items-center gap-1" href="https://wa.me/5521988451234?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Psicopedagogia%20na%20CRIMAP">
                    Agendar <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      </div>
      </div>
      {/* Card 6: Avaliação & Acompanhamento Neuropediátrico (Green Accent) */}
      <div className="flex flex-col justify-between p-8 rounded-2xl bg-canvas-clinical border border-soft-line relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="absolute top-0 left-0 right-0 h-1 bg-progress-green"></div>
      <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-progress-green/10 text-ink-deep font-label-sm font-semibold">
      <span className="w-1.5 h-1.5 rounded-full bg-progress-green"></span>
                      Medicina Pediátrica
                    </span>
      <span className="material-symbols-outlined text-progress-green text-[26px]">neurology</span>
      </div>
      <h3 className="font-headline-md text-headline-md font-bold text-ink-deep">Avaliação Neuropediátrica</h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Diagnóstico clínico detalhado e coordenação médica compartilhada com toda a equipe terapêutica, garantindo que o plano singular responda às necessidades neurológicas da criança.
                  </p>
      <div className="flex flex-col gap-2 pt-2">
      <span className="font-label-sm text-label-sm font-bold text-ink-deep uppercase tracking-wider">Principais Focos:</span>
      <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-crimap-gray">
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-progress-green"></span>Diagnóstico diferencial (TEA, TDAH, Transtornos Motores)</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-progress-green"></span>Acompanhamento de desenvolvimento global e neurobiológico</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-progress-green"></span>Alinhamento clínico com relatórios e condutas das terapias</li>
      </ul>
      </div>
      </div>
      <div className="pt-6 mt-6 border-t border-soft-line flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-crimap-gray">Olhar integral e acolhedor</span>
      <a className="text-connection-blue font-label-md font-bold hover:underline flex items-center gap-1" href="https://wa.me/5521988451234?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Neuropediatria%20na%20CRIMAP">
                    Agendar <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
