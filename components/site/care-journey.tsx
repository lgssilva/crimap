export function CareJourney() {
  return (
    <>
      {/* 6. 'O Que Esperar da Sua Primeira Visita' (5-Step Journey Inspired by 101 Physio) */}
      <section className="w-full bg-canvas-clinical py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line" id="como-funciona">
      <div className="reveal max-w-[1360px] mx-auto flex flex-col gap-16">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-3">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-connection-blue/10 text-connection-blue font-label-md font-semibold">
      <span className="material-symbols-outlined text-[16px]">linear_scale</span>
                A Jornada de Cuidado
              </div>
      <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">O que esperar da sua primeira&nbsp;visita</h2>
      <p className="font-body-lg text-body-lg text-crimap-gray">
                Um percurso transparente, sem pressa e estruturado para que sua família sinta segurança desde o primeiro contato no&nbsp;Downtown.
              </p>
      </div>
      {/* 5-Step Horizontal/Vertical Connected Journey */}
      <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
      {/* Step 1 */}
      <div className="flex flex-col gap-4 relative">
      <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-2xl bg-connection-blue text-on-primary font-headline-sm font-bold flex items-center justify-center shadow-md">
                    01
                  </div>
      <div className="h-0.5 bg-soft-line flex-1 hidden md:block"></div>
      </div>
      <div className="flex flex-col gap-2">
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep">Acolhimento &amp;&nbsp;Escuta</h3>
      <p className="font-body-sm text-body-sm text-crimap-gray leading-relaxed">
                    Primeira conversa dedicada exclusivamente aos pais ou responsáveis. Compreendemos a rotina em casa, o histórico clínico e as queixas escolares.
                  </p>
      </div>
      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-connection-blue font-medium mt-auto">
      <span className="material-symbols-outlined text-[14px]">timer</span> 50 a 60 min de escuta
                </span>
      </div>
      {/* Step 2 */}
      <div className="flex flex-col gap-4 relative">
      <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-2xl bg-surface-pure border-2 border-progress-green text-progress-green font-headline-sm font-bold flex items-center justify-center shadow-sm">
                    02
                  </div>
      <div className="h-0.5 bg-soft-line flex-1 hidden md:block"></div>
      </div>
      <div className="flex flex-col gap-2">
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep">Avaliação Integrada</h3>
      <p className="font-body-sm text-body-sm text-crimap-gray leading-relaxed">
                    Sessões com as especialidades indicadas em ambiente lúdico e confortável, respeitando o tempo de adaptação da criança sem sobrecarga.
                  </p>
      </div>
      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-progress-green font-medium mt-auto">
      <span className="material-symbols-outlined text-[14px]">psychology</span> Abordagem lúdica
                </span>
      </div>
      {/* Step 3 */}
      <div className="flex flex-col gap-4 relative">
      <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-2xl bg-surface-pure border-2 border-energy-yellow text-tertiary-container font-headline-sm font-bold flex items-center justify-center shadow-sm">
                    03
                  </div>
      <div className="h-0.5 bg-soft-line flex-1 hidden md:block"></div>
      </div>
      <div className="flex flex-col gap-2">
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep">Construção do PTS</h3>
      <p className="font-body-sm text-body-sm text-crimap-gray leading-relaxed">
                    A equipe multidisciplinar se reúne internamente em mesa clínica para cruzar achados e formular o Plano Terapêutico Singular com metas claras.
                  </p>
      </div>
      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary-container font-medium mt-auto">
      <span className="material-symbols-outlined text-[14px]">group_work</span> Reunião semanal de caso
                </span>
      </div>
      {/* Step 4 */}
      <div className="flex flex-col gap-4 relative">
      <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-2xl bg-surface-pure border-2 border-vitality-rose text-vitality-rose font-headline-sm font-bold flex items-center justify-center shadow-sm">
                    04
                  </div>
      <div className="h-0.5 bg-soft-line flex-1 hidden md:block"></div>
      </div>
      <div className="flex flex-col gap-2">
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep">Terapias Conectadas</h3>
      <p className="font-body-sm text-body-sm text-crimap-gray leading-relaxed">
                    Início das sessões regulares, mantendo ponte constante com a escola da criança e com os médicos assistentes de fora da clínica.
                  </p>
      </div>
      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-vitality-rose font-medium mt-auto">
      <span className="material-symbols-outlined text-[14px]">school</span> Ponte com colégio
                </span>
      </div>
      {/* Step 5 */}
      <div className="flex flex-col gap-4 relative">
      <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-2xl bg-connection-blue text-on-primary font-headline-sm font-bold flex items-center justify-center shadow-md">
                    05
                  </div>
      </div>
      <div className="flex flex-col gap-2">
      <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep">Devolutivas &amp;&nbsp;Casa</h3>
      <p className="font-body-sm text-body-sm text-crimap-gray leading-relaxed">
                    Feedback contínuo para os pais com orientações simples e práticas de como reforçar os ganhos no dia a dia em família com autonomia.
                  </p>
      </div>
      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-connection-blue font-medium mt-auto">
      <span className="material-symbols-outlined text-[14px]">home</span> Generalização de ganhos
                </span>
      </div>
      </div>
      {/* Trust Callout Banner */}
      <div className="p-6 rounded-2xl bg-surface-pure border border-soft-line flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-progress-green/10 flex items-center justify-center text-progress-green flex-shrink-0">
      <span className="material-symbols-outlined text-[24px]">description</span>
      </div>
      <div>
      <h4 className="font-headline-sm text-headline-sm font-semibold text-ink-deep">Relatórios detalhados para reembolso de&nbsp;convênios</h4>
      <p className="font-body-sm text-body-sm text-crimap-gray">Fornecemos laudos terapêuticos completos com CID, plano de metas e evolução periódica para facilitar o processo junto ao seu plano de&nbsp;saúde.</p>
      </div>
      </div>
      <a className="px-5 h-11 inline-flex items-center justify-center rounded-xl bg-connection-blue text-on-primary font-label-md font-semibold hover:bg-primary transition-colors whitespace-nowrap flex-shrink-0" href="https://wa.me/5521988451234?text=Ol%C3%A1%2C%20gostaria%20de%20entender%20como%20funciona%20o%20reembolso%20na%20CRIMAP" rel="noopener noreferrer" target="_blank">
                Entender Reembolso
              </a>
      </div>
      </div>
      </section>
    </>
  );
}
