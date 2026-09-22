"use client";

export function InformationBoard() {
  return (
    <>
      {/* 11. Formulário Rápido de Acolhimento / Triagem Inicial */}
      <section className="w-full bg-surface-pure py-20 px-6 lg:px-12 border-b border-soft-line" id="triagem">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      {/* Left Column: Context & Reassurance */}
      <div className="lg:col-span-5 flex flex-col gap-6">
      <div className="inline-flex items-center gap-2 text-connection-blue font-label-md text-label-md font-semibold tracking-wider uppercase">
      <span className="material-symbols-outlined text-[16px]">edit_calendar</span>
                Primeiro Passo
              </div>
      <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">Solicite o contato da nossa equipe de&nbsp;acolhimento</h2>
      <p className="font-body-lg text-body-lg text-crimap-gray leading-relaxed">
                Preencha os dados básicos. Nossa recepção clínica entrará em contato via WhatsApp com discrição e rapidez para compreender a necessidade da sua família e agendar a escuta&nbsp;inicial.
              </p>
      <div className="flex flex-col gap-3 pt-2">
      <div className="flex items-center gap-3 text-ink-deep font-body-md">
      <span className="w-6 h-6 rounded-full bg-progress-green/10 text-progress-green flex items-center justify-center flex-shrink-0">
      <span className="material-symbols-outlined text-[16px]">check</span>
      </span>
      <span className="">Retorno rápido em até 2 horas úteis</span>
      </div>
      <div className="flex items-center gap-3 text-ink-deep font-body-md">
      <span className="w-6 h-6 rounded-full bg-progress-green/10 text-progress-green flex items-center justify-center flex-shrink-0">
      <span className="material-symbols-outlined text-[16px]">check</span>
      </span>
      <span className="">Orientações claras sobre horários e vagas</span>
      </div>
      <div className="flex items-center gap-3 text-ink-deep font-body-md">
      <span className="w-6 h-6 rounded-full bg-progress-green/10 text-progress-green flex items-center justify-center flex-shrink-0">
      <span className="material-symbols-outlined text-[16px]">check</span>
      </span>
      <span className="">Sem compromisso de continuidade imediata</span>
      </div>
      </div>
      <div className="p-5 rounded-2xl bg-canvas-clinical border border-soft-line flex items-center gap-4 mt-2">
      <span className="material-symbols-outlined text-connection-blue text-[28px]">lock</span>
      <p className="font-body-sm text-body-sm text-crimap-gray">
                  Seus dados são protegidos sob sigilo médico-hospitalar conforme a LGPD e normas do Conselho de&nbsp;Saúde.
                </p>
      </div>
      </div>
      {/* Right Column: Interactive Clean Non-Intimidating Intake Form */}
      <div className="lg:col-span-7">
      <form className="p-8 sm:p-10 rounded-3xl bg-canvas-clinical border border-soft-line shadow-[0_4px_24px_-2px_rgba(23,33,43,0.06)] flex flex-col gap-6" onSubmit={(event) => { event.preventDefault(); document.getElementById('form-feedback')?.classList.remove('hidden'); }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Parent Name */}
      <div className="flex flex-col gap-2">
      <label className="font-label-md text-label-md font-bold text-ink-deep" htmlFor="parent-name">Seu Nome (Responsável)</label>
      <input className="w-full h-11 px-4 rounded-lg bg-surface-pure border border-soft-line text-ink-deep placeholder:text-crimap-gray focus:outline-none focus:border-connection-blue transition-colors font-body-md" id="parent-name" placeholder="Ex: Mariana Silveira" required type="text" />
      </div>
      {/* WhatsApp */}
      <div className="flex flex-col gap-2">
      <label className="font-label-md text-label-md font-bold text-ink-deep" htmlFor="parent-whatsapp">WhatsApp para contato</label>
      <input className="w-full h-11 px-4 rounded-lg bg-surface-pure border border-soft-line text-ink-deep placeholder:text-crimap-gray focus:outline-none focus:border-connection-blue transition-colors font-body-md" id="parent-whatsapp" placeholder="(21) 99999-9999" required type="tel" />
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Child Name */}
      <div className="flex flex-col gap-2">
      <label className="font-label-md text-label-md font-bold text-ink-deep" htmlFor="child-name">Nome da criança ou jovem</label>
      <input className="w-full h-11 px-4 rounded-lg bg-surface-pure border border-soft-line text-ink-deep placeholder:text-crimap-gray focus:outline-none focus:border-connection-blue transition-colors font-body-md" id="child-name" placeholder="Ex: Gabriel" required type="text" />
      </div>
      {/* Child Age */}
      <div className="flex flex-col gap-2">
      <label className="font-label-md text-label-md font-bold text-ink-deep" htmlFor="child-age">Idade</label>
      <input className="w-full h-11 px-4 rounded-lg bg-surface-pure border border-soft-line text-ink-deep placeholder:text-crimap-gray focus:outline-none focus:border-connection-blue transition-colors font-body-md" id="child-age" placeholder="Ex: 4 anos e 6 meses" required type="text" />
      </div>
      </div>
      {/* Main Need Dropdown / Selection */}
      <div className="flex flex-col gap-2">
      <label className="font-label-md text-label-md font-bold text-ink-deep" htmlFor="primary-need">Qual é a principal queixa ou necessidade atual?</label>
      <select className="w-full h-11 px-4 rounded-lg bg-surface-pure border border-soft-line text-ink-deep focus:outline-none focus:border-connection-blue transition-colors font-body-md" id="primary-need">
      <option value="fala">Atraso na fala / Dificuldade de comunicação</option>
      <option value="motor">Desenvolvimento motor / Marcha / Postura</option>
      <option value="sensorial">Integração sensorial / Seletividade alimentar</option>
      <option value="comportamento">Comportamento / Regulação emocional / Ansiedade</option>
      <option value="aprendizagem">Dificuldades escolares / Alfabetização / Foco</option>
      <option value="avaliacao">Avaliação Neuropediátrica Completa</option>
      <option value="duvida">Ainda não sei ao certo, gostaria de orientação</option>
      </select>
      </div>
      {/* Notes / Message */}
      <div className="flex flex-col gap-2">
      <label className="font-label-md text-label-md font-bold text-ink-deep" htmlFor="notes">Observações adicionais (opcional)</label>
      <textarea className="w-full p-4 rounded-lg bg-surface-pure border border-soft-line text-ink-deep placeholder:text-crimap-gray focus:outline-none focus:border-connection-blue transition-colors font-body-md resize-none" id="notes" placeholder="Ex: Houve encaminhamento da escola ou do pediatra? Alguma observação especial sobre rotina?" rows={3}></textarea>
      </div>
      {/* Submit Action */}
      <div className="flex flex-col gap-3 pt-2">
      <button className="w-full h-12 rounded-xl bg-connection-blue text-on-primary font-label-lg text-label-lg font-bold shadow-[0_4px_16px_rgba(0,112,184,0.25)] hover:bg-primary transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-connection-blue" type="submit">
      <span className="material-symbols-outlined text-[20px]">send</span>
                    Solicitar Contato da Recepção&nbsp;Clínica
                  </button>
      <p className="font-label-sm text-label-sm text-center text-crimap-gray">
                    Preferência de contato imediato? <a className="text-connection-blue underline font-semibold" href="https://wa.me/5521988451234" rel="noopener noreferrer" target="_blank">Chame diretamente no WhatsApp&nbsp;aqui</a>.
                  </p>
      </div>
      {/* Success Alert Placeholder */}
      <div className="hidden p-4 rounded-xl bg-progress-green/10 border border-progress-green/30 text-ink-deep flex items-center gap-3" id="form-feedback">
      <span className="material-symbols-outlined text-progress-green">check_circle</span>
      <div className="flex flex-col">
      <span className="font-label-md font-bold">Solicitação enviada com&nbsp;sucesso!</span>
      <span className="font-body-sm text-crimap-gray">Nossa equipe de recepção chamará você no WhatsApp informado em instantes.</span>
      </div>
      </div>
      </form>
      </div>
      </div>
      </section>
    </>
  );
}
