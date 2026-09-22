export function TestimonialsSection() {
  return (
    <>
      {/* 9. Depoimentos Reais de Pais (Trusted Editorial Reviews) */}
      <section className="w-full bg-surface-pure py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line" id="depoimentos">
      <div className="reveal max-w-[1360px] mx-auto flex flex-col gap-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="flex flex-col gap-2 max-w-2xl">
      <div className="inline-flex items-center gap-2 text-connection-blue font-label-md text-label-md font-semibold tracking-wider uppercase">
      <span className="material-symbols-outlined text-[16px]">rate_review</span>
                  Histórias de Superação
                </div>
      <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">A voz das famílias que caminham&nbsp;conosco</h2>
      <p className="font-body-lg text-body-lg text-crimap-gray">
                  Depoimentos autênticos sobre desenvolvimento, segurança e transformação&nbsp;diária.
                </p>
      </div>
      </div>
      {/* Testimonials Grid: 1 Featured Large + 2 Secondary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Large Featured Review: Amanda Antunes */}
      <div className="lg:col-span-7 p-8 rounded-3xl bg-canvas-clinical border border-soft-line flex flex-col justify-between gap-8 shadow-sm">
      <div className="flex flex-col gap-4">
      <div className="flex items-center gap-1.5 text-energy-yellow">
      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
      <span className="text-crimap-gray font-label-sm text-label-sm ml-2">Avaliação verificada</span>
      </div>
      <p className="font-body-lg text-body-lg text-ink-deep leading-relaxed italic">
                    "A CRIMAP foi um divisor de águas na vida do meu filho e na nossa sanidade como família. Vínhamos de uma peregrinação exaustiva entre consultórios desconectados. Quando entramos no Downtown e vimos a equipe toda sentada, conversando sobre o mesmo objetivo para ele, sentimos um alívio que não tem preço. Hoje ele fala, brinca e tem autonomia nas coisas que antes pareciam impossíveis."
                  </p>
      </div>
      <div className="flex items-center gap-4 pt-4 border-t border-soft-line">
      <div className="w-12 h-12 rounded-full bg-connection-blue/15 text-connection-blue flex items-center justify-center font-headline-sm font-bold">
                    AA
                  </div>
      <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm font-bold text-ink-deep">Amanda Antunes</span>
      <span className="font-body-sm text-body-sm text-crimap-gray">Mãe do Theo (5 anos) • Acompanhamento em Fonoaudiologia &amp; Terapia Ocupacional</span>
      </div>
      </div>
      </div>
      {/* 2 Secondary Reviews Column */}
      <div className="lg:col-span-5 flex flex-col gap-6">
      {/* Review 2: Fabiane Andrade */}
      <div className="p-7 rounded-2xl bg-canvas-clinical border border-soft-line flex flex-col justify-between gap-4 shadow-sm">
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    "O ambiente do Downtown é perfeito: sem barulho de trânsito, seguro para descer do carro e caminhar. As terapeutas têm um carinho inacreditável e o diálogo com a escola do Lucas mudou completamente o rendimento dele."
                  </p>
      <div className="flex items-center gap-3 pt-3 border-t border-soft-line">
      <div className="w-10 h-10 rounded-full bg-progress-green/20 text-progress-green flex items-center justify-center font-label-lg font-bold">
                      FA
                    </div>
      <div className="flex flex-col">
      <span className="font-label-lg text-label-lg font-bold text-ink-deep">Fabiane Andrade</span>
      <span className="font-body-sm text-body-sm text-crimap-gray">Mãe do Lucas (7 anos) • Psicopedagogia &amp; Ludoterapia</span>
      </div>
      </div>
      </div>
      {/* Review 3: Bruna Saldanha */}
      <div className="p-7 rounded-2xl bg-canvas-clinical border border-soft-line flex flex-col justify-between gap-4 shadow-sm">
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    "Relatórios extremamente completos que facilitaram o processo de reembolso no meu plano. Além do profissionalismo, o respeito pelo ritmo motor da minha filha nos deu paz de espírito."
                  </p>
      <div className="flex items-center gap-3 pt-3 border-t border-soft-line">
      <div className="w-10 h-10 rounded-full bg-energy-yellow/25 text-tertiary-container flex items-center justify-center font-label-lg font-bold">
                      BS
                    </div>
      <div className="flex flex-col">
      <span className="font-label-lg text-label-lg font-bold text-ink-deep">Bruna Saldanha</span>
      <span className="font-body-sm text-body-sm text-crimap-gray">Mãe da Alice (3 anos) • Fisioterapia Neurofuncional</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
