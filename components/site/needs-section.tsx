export function NeedsSection() {
  return (
    <>
      {/* 4. Needs First (O que seu filho precisa agora?) */}
      <section className="w-full bg-canvas-clinical py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line">
      <div className="max-w-[1360px] mx-auto flex flex-col gap-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-3xl">
      <div className="flex flex-col gap-2">
      <div className="inline-flex items-center gap-2 text-connection-blue font-label-md text-label-md font-semibold tracking-wider uppercase">
      <span className="material-symbols-outlined text-[16px]">help_center</span>
                  Direcionamento de Acolhimento
                </div>
      <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">O que seu filho precisa&nbsp;agora?</h2>
      <p className="font-body-lg text-body-lg text-crimap-gray">
                  Antes de pensar em siglas clínicas, acolhemos as dúvidas do dia a dia da sua família. Selecione a área que mais gera&nbsp;inquietação:
                </p>
      </div>
      </div>
      {/* Needs Grid (6 Editorial Concern Tiles) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Concern 01 */}
      <a className="group flex flex-col justify-between p-7 rounded-2xl bg-surface-pure border border-soft-line hover:border-connection-blue transition-all duration-200 shadow-sm hover:shadow-md" href="#terapias">
      <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-mono text-label-sm font-bold text-crimap-gray">01</span>
      <span className="w-2.5 h-2.5 rounded-full bg-progress-green"></span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep group-hover:text-connection-blue transition-colors">
                    Desenvolvimento motor, postura e&nbsp;marcha
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Quedas frequentes, atraso para sentar ou andar, andar nas pontas dos pés, alterações de tônus ou reabilitação neuromuscular.
                  </p>
      </div>
      <div className="pt-5 mt-4 border-t border-soft-line flex items-center justify-between text-connection-blue font-label-md">
      <span className="">Ver Fisioterapia Neurofuncional</span>
      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
      </a>
      {/* Concern 02 */}
      <a className="group flex flex-col justify-between p-7 rounded-2xl bg-surface-pure border border-soft-line hover:border-connection-blue transition-all duration-200 shadow-sm hover:shadow-md" href="#terapias">
      <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-mono text-label-sm font-bold text-crimap-gray">02</span>
      <span className="w-2.5 h-2.5 rounded-full bg-connection-blue"></span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep group-hover:text-connection-blue transition-colors">
                    Comunicação, atraso na fala e&nbsp;deglutição
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Poucas palavras para a idade, dificuldade de compreensão, gagueira, engasgos, respiração oral ou comunicação alternativa (PECS/CAA).
                  </p>
      </div>
      <div className="pt-5 mt-4 border-t border-soft-line flex items-center justify-between text-connection-blue font-label-md">
      <span className="">Ver Fonoaudiologia Pediátrica</span>
      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
      </a>
      {/* Concern 03 */}
      <a className="group flex flex-col justify-between p-7 rounded-2xl bg-surface-pure border border-soft-line hover:border-connection-blue transition-all duration-200 shadow-sm hover:shadow-md" href="#terapias">
      <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-mono text-label-sm font-bold text-crimap-gray">03</span>
      <span className="w-2.5 h-2.5 rounded-full bg-energy-yellow"></span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep group-hover:text-connection-blue transition-colors">
                    Processamento sensorial e rotina&nbsp;diária
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Incômodo com etiquetas, sons altos ou toques, recusa alimentar severa, agitação corporal excessiva ou dependência para se vestir e comer.
                  </p>
      </div>
      <div className="pt-5 mt-4 border-t border-soft-line flex items-center justify-between text-connection-blue font-label-md">
      <span className="">Ver Terapia Ocupacional</span>
      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
      </a>
      {/* Concern 04 */}
      <a className="group flex flex-col justify-between p-7 rounded-2xl bg-surface-pure border border-soft-line hover:border-connection-blue transition-all duration-200 shadow-sm hover:shadow-md" href="#terapias">
      <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-mono text-label-sm font-bold text-crimap-gray">04</span>
      <span className="w-2.5 h-2.5 rounded-full bg-vitality-rose"></span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep group-hover:text-connection-blue transition-colors">
                    Comportamento, limites e regulação&nbsp;emocional
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Crises frequentes de frustração, ansiedade infantil, medos intensos, dificuldades nas relações sociais e necessidade de orientação parental.
                  </p>
      </div>
      <div className="pt-5 mt-4 border-t border-soft-line flex items-center justify-between text-connection-blue font-label-md">
      <span className="">Ver Psicologia Infantil &amp; Ludoterapia</span>
      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
      </a>
      {/* Concern 05 */}
      <a className="group flex flex-col justify-between p-7 rounded-2xl bg-surface-pure border border-soft-line hover:border-connection-blue transition-all duration-200 shadow-sm hover:shadow-md" href="#terapias">
      <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-mono text-label-sm font-bold text-crimap-gray">05</span>
      <span className="w-2.5 h-2.5 rounded-full bg-connection-blue"></span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep group-hover:text-connection-blue transition-colors">
                    Aprendizagem, alfabetização e&nbsp;foco
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Dificuldades na leitura e escrita, desorganização com tarefas, suspeita de TDAH ou Dislexia, e necessidade de mediação junto ao colégio.
                  </p>
      </div>
      <div className="pt-5 mt-4 border-t border-soft-line flex items-center justify-between text-connection-blue font-label-md">
      <span className="">Ver Psicopedagogia Clínica</span>
      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
      </a>
      {/* Concern 06 */}
      <a className="group flex flex-col justify-between p-7 rounded-2xl bg-surface-pure border border-soft-line hover:border-connection-blue transition-all duration-200 shadow-sm hover:shadow-md" href="#terapias">
      <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-mono text-label-sm font-bold text-crimap-gray">06</span>
      <span className="w-2.5 h-2.5 rounded-full bg-progress-green"></span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep group-hover:text-connection-blue transition-colors">
                    Diagnóstico global e&nbsp;neuropediatria
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Investigação de marcos atípicos (TEA, paralisia cerebral, síndromes genéticas) com acompanhamento médico alinhado com os terapeutas.
                  </p>
      </div>
      <div className="pt-5 mt-4 border-t border-soft-line flex items-center justify-between text-connection-blue font-label-md">
      <span className="">Ver Avaliação Neuropediátrica</span>
      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
      </a>
      </div>
      </div>
      </section>
    </>
  );
}
