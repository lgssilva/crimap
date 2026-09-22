"use client";

export function MobileDrawer() {
  return (
    <>
      {/* Mobile Menu Drawer */}
      <div id="mobileDrawer" className="fixed inset-0 z-[60] translate-x-full transition-transform duration-300 ease-in-out">
      <div className="absolute inset-0 bg-ink-deep/40 backdrop-blur-sm" onClick={() => { document.getElementById('mobileDrawer')?.classList.add('translate-x-full') }}></div>
      <div className="absolute right-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-surface-pure shadow-2xl flex flex-col">
      <div className="flex items-center justify-between px-6 h-20 border-b border-soft-line">
      <span className="font-headline-sm text-headline-sm font-bold text-ink-deep">Menu</span>
      <button className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Fechar menu" onClick={() => { document.getElementById('mobileDrawer')?.classList.add('translate-x-full') }}>
      <span className="material-symbols-outlined text-[24px] text-crimap-gray">close</span>
      </button>
      </div>
      <nav className="flex flex-col py-4 flex-1 overflow-y-auto">
      <a className="px-6 py-3.5 font-label-lg text-[15px] text-on-surface-variant hover:text-connection-blue hover:bg-surface-container-low transition-colors" href="#terapias" onClick={() => { document.getElementById('mobileDrawer')?.classList.add('translate-x-full') }}>Terapias</a>
      <a className="px-6 py-3.5 font-label-lg text-[15px] text-on-surface-variant hover:text-connection-blue hover:bg-surface-container-low transition-colors" href="#como-funciona" onClick={() => { document.getElementById('mobileDrawer')?.classList.add('translate-x-full') }}>Como cuidamos</a>
      <a className="px-6 py-3.5 font-label-lg text-[15px] text-on-surface-variant hover:text-connection-blue hover:bg-surface-container-low transition-colors" href="#origem" onClick={() => { document.getElementById('mobileDrawer')?.classList.add('translate-x-full') }}>A CRIMAP</a>
      <a className="px-6 py-3.5 font-label-lg text-[15px] text-on-surface-variant hover:text-connection-blue hover:bg-surface-container-low transition-colors" href="#depoimentos" onClick={() => { document.getElementById('mobileDrawer')?.classList.add('translate-x-full') }}>Depoimentos</a>
      <a className="px-6 py-3.5 font-label-lg text-[15px] text-on-surface-variant hover:text-connection-blue hover:bg-surface-container-low transition-colors" href="#estrutura" onClick={() => { document.getElementById('mobileDrawer')?.classList.add('translate-x-full') }}>Estrutura</a>
      <a className="px-6 py-3.5 font-label-lg text-[15px] text-on-surface-variant hover:text-connection-blue hover:bg-surface-container-low transition-colors" href="#localizacao" onClick={() => { document.getElementById('mobileDrawer')?.classList.add('translate-x-full') }}>Localização</a>
      </nav>
      <div className="px-6 py-5 border-t border-soft-line">
      <a className="flex items-center justify-center gap-2 w-full h-12 bg-connection-blue text-on-primary font-label-lg text-[15px] rounded-xl shadow-[0_4px_16px_rgba(0,112,184,0.18)] hover:bg-primary transition-all" href="https://wa.me/5521988451234" rel="noopener noreferrer" target="_blank" onClick={() => { document.getElementById('mobileDrawer')?.classList.add('translate-x-full') }}>
      <span className="material-symbols-outlined text-[20px]">chat</span>
      Conversar pelo WhatsApp
      </a>
      </div>
      </div>
      </div>
    </>
  );
}
