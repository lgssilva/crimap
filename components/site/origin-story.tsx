export function OriginStory() {
  return (
    <>
      {/* 8. Fundadora & Propósito (A história de Kariny e Manuel Arthur - 2016) */}
      <section className="w-full bg-canvas-clinical py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line" id="origem">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      {/* Left Column: Emotional Founder Portrait */}
      <div className="lg:col-span-5 relative reveal-scale">
      <div className="rounded-3xl overflow-hidden bg-surface-pure border border-soft-line shadow-md relative">
      <img className="w-full aspect-[4/5] object-cover" data-alt="Editorial portrait of Kariny Peixoto, founder of CRIMAP, a warm empathetic clinical professional in soft white and blue clinical attire, in a quiet library and clinical assessment room, smiling reassuringly, gentle soft natural lighting, high architectural aesthetics, portraying deep parental empathy, clinical rigor and therapeutic commitment." src="/brand/kariny.webp" />
      <div className="p-6 bg-surface-pure border-t border-soft-line flex flex-col gap-1">
      <span className="font-headline-sm text-headline-sm font-bold text-ink-deep">Kariny Peixoto</span>
      <span className="font-label-sm text-label-sm text-crimap-gray">Fundadora, Mãe de Manuel Arthur &amp; Diretora Clínica</span>
      </div>
      </div>
      </div>
      {/* Right Column: Narrative & Origin Story */}
      <div className="lg:col-span-7 flex flex-col gap-6">
      <div className="inline-flex items-center gap-2 text-connection-blue font-label-md text-label-md font-semibold uppercase tracking-wider">
      <span className="material-symbols-outlined text-[16px]">favorite</span>
                Origem &amp; Propósito
              </div>
      <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">Nascida da vivência real de quem sentiu na pele a necessidade de um cuidado&nbsp;integrado.</h2>
      <div className="flex flex-col gap-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
      <p className="">
                  A CRIMAP não nasceu de um plano de negócios convencional. Em 2016, quando o pequeno <strong className="text-ink-deep font-medium">Manuel Arthur</strong> precisou de reabilitação intensa, sua família vivenciou o desgaste de percorrer consultórios isolados por toda a cidade — onde cada profissional via apenas uma parte do problema e nenhum conversava entre&nbsp;si.
                </p>
      <p className="">
                  Dessa busca incansável nasceu o compromisso inegociável da clínica: reunir, no mesmo espaço físico no Shopping Downtown, especialistas que realmente dialogam, compartilham decisões e colocam o bem-estar da criança e a paz da família no centro de&nbsp;tudo.
                </p>
      </div>
      {/* Editorial Quote Callout */}
      <blockquote className="p-6 rounded-2xl bg-surface-pure border-l-4 border-connection-blue border-t border-r border-b border-soft-line my-2">
      <p className="font-headline-sm text-headline-sm italic text-ink-deep leading-relaxed">
                  "Não tratamos apenas diagnósticos ou tabelas de marcos do desenvolvimento; acolhemos o potencial de cada criança e sustentamos a esperança da família a cada pequeno&nbsp;passo."
                </p>
      </blockquote>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-2">
      <div className="flex items-center gap-2 text-crimap-gray font-body-sm">
      <span className="material-symbols-outlined text-connection-blue text-[18px]">workspace_premium</span>
      <span className="">Excelência técnica com certificação contínua</span>
      </div>
      <div className="flex items-center gap-2 text-crimap-gray font-body-sm">
      <span className="material-symbols-outlined text-vitality-rose text-[18px]">volunteer_activism</span>
      <span className="">Acolhimento humanizado e afetuoso</span>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
