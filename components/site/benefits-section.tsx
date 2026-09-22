export function BenefitsSection() {
  return (
    <>
      {/* 7. 'Benefícios Concretos Para a Sua Família' (Vantagens do Modelo Conectado) */}
      <section className="w-full bg-surface-pure py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line">
      <div className="max-w-[1360px] mx-auto flex flex-col gap-12">
      <div className="flex flex-col max-w-2xl gap-3">
      <div className="inline-flex items-center gap-2 text-connection-blue font-label-md text-label-md font-semibold tracking-wider uppercase">
      <span className="material-symbols-outlined text-[16px]">task_alt</span>
                Vantagens do Modelo Conectado
              </div>
      <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">Benefícios reais sentidos na rotina de&nbsp;casa</h2>
      <p className="font-body-lg text-body-lg text-crimap-gray">
                Quando a equipe terapêutica não se comunica, quem carrega o fardo da coordenação são os pais. Na CRIMAP, assumimos esse&nbsp;diálogo.
              </p>
      </div>
      {/* 6 Benefits Bento/Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Benefit 1 */}
      <div className="p-6 rounded-2xl bg-canvas-clinical border border-soft-line flex flex-col gap-3">
      <div className="w-10 h-10 rounded-xl bg-progress-green/10 text-progress-green flex items-center justify-center">
      <span className="material-symbols-outlined text-[20px]">psychiatry</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep">Redução da sobrecarga mental dos&nbsp;pais</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Você não precisa ser o mensageiro entre fono, terapeuta ocupacional e escola. Nós nos falamos diretamente e alinhamos a rota sem estresse.
                </p>
      </div>
      {/* Benefit 2 */}
      <div className="p-6 rounded-2xl bg-canvas-clinical border border-soft-line flex flex-col gap-3">
      <div className="w-10 h-10 rounded-xl bg-connection-blue/10 text-connection-blue flex items-center justify-center">
      <span className="material-symbols-outlined text-[20px]">accessibility</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep">Autonomia real nas tarefas do&nbsp;cotidiano</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Metas práticas voltadas para comer sozinho, calçar sapatos, segurar o lápis com firmeza e interagir com segurança nos momentos de recreio.
                </p>
      </div>
      {/* Benefit 3 */}
      <div className="p-6 rounded-2xl bg-canvas-clinical border border-soft-line flex flex-col gap-3">
      <div className="w-10 h-10 rounded-xl bg-energy-yellow/15 text-tertiary-container flex items-center justify-center">
      <span className="material-symbols-outlined text-[20px]">cast_for_education</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep">Alinhamento direto e visitas&nbsp;escolares</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Nossos terapeutas realizam contato e orientações com a coordenação e mediadores da escola na Barra, Recreio e Zona Oeste do Rio.
                </p>
      </div>
      {/* Benefit 4 */}
      <div className="p-6 rounded-2xl bg-canvas-clinical border border-soft-line flex flex-col gap-3">
      <div className="w-10 h-10 rounded-xl bg-vitality-rose/10 text-vitality-rose flex items-center justify-center">
      <span className="material-symbols-outlined text-[20px]">park</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep">Ambiente calmo e seguro no&nbsp;Downtown</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Pátio a céu aberto, sem circulação de carros, permitindo que a ida à clínica seja um momento prazeroso, arborizado e livre de ansiedade.
                </p>
      </div>
      {/* Benefit 5 */}
      <div className="p-6 rounded-2xl bg-canvas-clinical border border-soft-line flex flex-col gap-3">
      <div className="w-10 h-10 rounded-xl bg-progress-green/10 text-progress-green flex items-center justify-center">
      <span className="material-symbols-outlined text-[20px]">fact_check</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep">Planejamento terapêutico individual</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Nada de protocolos genéricos. O plano terapêutico respeita as forças e os limites do seu filho, com revisões constantes a cada avanço.
                </p>
      </div>
      {/* Benefit 6 */}
      <div className="p-6 rounded-2xl bg-canvas-clinical border border-soft-line flex flex-col gap-3">
      <div className="w-10 h-10 rounded-xl bg-connection-blue/10 text-connection-blue flex items-center justify-center">
      <span className="material-symbols-outlined text-[20px]">forum</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep">Canal aberto e contínuo com a&nbsp;coordenação</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Acesso facilitado para tirar dúvidas de conduta, receber dicas para momentos difíceis em casa e ajustar horários com flexibilidade.
                </p>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
