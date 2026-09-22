export function LocationSection() {
  return (
    <>
      {/* 12. Interactive Direct Map & Downtown Directions Module */}
      <section className="w-full bg-canvas-clinical py-16 px-5 md:px-6 lg:px-12" id="localizacao">
      <div className="reveal max-w-[1360px] mx-auto rounded-3xl bg-surface-pure border border-soft-line p-5 sm:p-8 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-w-0">
      <div className="lg:col-span-6 flex flex-col gap-4">
      <div className="inline-flex items-center gap-2 text-connection-blue font-label-md font-semibold uppercase tracking-wider">
      <span className="material-symbols-outlined text-[16px]">pin_drop</span>
                Como Chegar
              </div>
      <h3 className="font-headline-lg text-headline-lg font-bold text-ink-deep">
                Av. das Américas, 500 Bloco 4, Salas 210–212
              </h3>
      <p className="font-body-md text-body-md text-crimap-gray leading-relaxed">
                No centro do Shopping Downtown. O Bloco 4 fica a poucos passos da praça central de alimentação, facilitando pausas para lanche antes ou após a&nbsp;terapia.
              </p>
      <div className="flex flex-col gap-3 pt-2">
      <p className="font-body-sm text-body-sm text-crimap-gray">Estação Jardim Oceânico com acesso por passarela integrada.</p>
      <p className="font-body-sm text-body-sm text-crimap-gray">Acesso direto pela Av. das Américas com Valet no Bloco 4.</p>
      </div>
      </div>
      <div className="lg:col-span-6">
      <div className="w-full h-72 rounded-2xl bg-cover bg-center border border-soft-line shadow-inner flex items-end p-4" data-location="Shopping Downtown Barra da Tijuca, Rio de Janeiro" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjVvq2tlN3fSvPsi7uS8MKQ05poxob8052IafxWeAct4m89wyQEMgfvSM3nAe-4Is7uWpQT_XZQj75ZWYtGwee2aaL34ulLmbm50Gb4wzs95HE5JepRR7cKDPoXEkP1wnqClncueGdQ15sElzXG3UGIK83Vjm6OMsqIrc0G8amEwuE063dWssM5gx2OyfvKzTs4_FzzJXfc-mh2mSsRS2lilIweKMaaqxlRsv1CyMMYf3RBzwvoOA")' }}>
      <div className="px-4 py-2.5 rounded-xl bg-surface-pure/95 backdrop-blur-md border border-soft-line flex flex-col items-start gap-1 w-full shadow-sm">
      <div className="flex items-center gap-2 min-w-0">
      <span className="material-symbols-outlined text-connection-blue">location_on</span>
      <span className="font-label-md font-bold text-ink-deep">CRIMAP — Bloco 4 Downtown</span>
      </div>
      <a className="text-connection-blue font-label-sm font-semibold hover:underline flex items-center gap-1 pl-8" href="https://maps.google.com/?q=Shopping+Downtown+Barra+da+Tijuca" rel="noopener noreferrer" target="_blank">
                    Abrir no GPS <span className="material-symbols-outlined text-[14px]">open_in_new</span>
      </a>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
