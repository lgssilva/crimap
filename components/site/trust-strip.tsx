export function TrustStrip() {
  return (
    <>
      {/* 3. Quick Trust Strip (4 Core Pillars) */}
      <section className="w-full bg-surface-pure py-8 px-6 lg:px-12 border-b border-soft-line">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-children">
      {/* Pillar 1 */}
      <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-canvas-clinical border border-soft-line cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_32px_-4px_rgba(23,33,43,0.1)] hover:border-connection-blue/20">
      <span className="w-3 h-3 rounded-full bg-connection-blue mt-1.5 flex-shrink-0"></span>
      <div className="flex flex-col">
      <span className="font-label-lg text-label-lg font-bold text-ink-deep">Crianças &amp; Jovens</span>
      <span className="font-body-sm text-body-sm text-crimap-gray">Do recém-nascido até 18 anos, respeitando cada fase do&nbsp;desenvolvimento.</span>
      </div>
      </div>
      {/* Pillar 2 */}
      <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-canvas-clinical border border-soft-line cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_32px_-4px_rgba(23,33,43,0.1)] hover:border-connection-blue/20">
      <span className="w-3 h-3 rounded-full bg-progress-green mt-1.5 flex-shrink-0"></span>
      <div className="flex flex-col">
      <span className="font-label-lg text-label-lg font-bold text-ink-deep">Avaliação Multidisciplinar</span>
      <span className="font-body-sm text-body-sm text-crimap-gray">Sem fragmentação: uma equipe integrada discutindo o mesmo&nbsp;plano.</span>
      </div>
      </div>
      {/* Pillar 3 */}
      <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-canvas-clinical border border-soft-line cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_32px_-4px_rgba(23,33,43,0.1)] hover:border-connection-blue/20">
      <span className="w-3 h-3 rounded-full bg-energy-yellow mt-1.5 flex-shrink-0"></span>
      <div className="flex flex-col">
      <span className="font-label-lg text-label-lg font-bold text-ink-deep">Atendimento Particular</span>
      <span className="font-body-sm text-body-sm text-crimap-gray">Tempo e atenção dedicados, com laudos minuciosos para&nbsp;reembolso.</span>
      </div>
      </div>
      {/* Pillar 4 */}
      <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-canvas-clinical border border-soft-line cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_32px_-4px_rgba(23,33,43,0.1)] hover:border-connection-blue/20">
      <span className="w-3 h-3 rounded-full bg-vitality-rose mt-1.5 flex-shrink-0"></span>
      <div className="flex flex-col">
      <span className="font-label-lg text-label-lg font-bold text-ink-deep">Localização Segura</span>
      <span className="font-body-sm text-body-sm text-crimap-gray">Downtown Barra: pátio arborizado, sem fluxo de carros e acessibilidade&nbsp;total.</span>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
