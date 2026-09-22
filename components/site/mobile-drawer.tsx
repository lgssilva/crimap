"use client";

import { siteConfig, whatsappHref } from "@/lib/site-config";

function openDrawer() {
  const drawer = document.getElementById("mobileDrawer");
  drawer?.classList.add("is-open");
  drawer?.classList.remove("invisible", "pointer-events-none");
  drawer?.setAttribute("aria-hidden", "false");
  drawer
    ?.querySelector("[data-drawer-panel]")
    ?.classList.remove("translate-x-full");
  document.body.classList.add("overflow-hidden");
}

function closeDrawer() {
  const drawer = document.getElementById("mobileDrawer");
  drawer?.classList.remove("is-open");
  drawer?.classList.add("invisible", "pointer-events-none");
  drawer?.setAttribute("aria-hidden", "true");
  drawer
    ?.querySelector("[data-drawer-panel]")
    ?.classList.add("translate-x-full");
  document.body.classList.remove("overflow-hidden");
}

const links = [
  { href: "#terapias", label: "Terapias" },
  { href: "#como-funciona", label: "Como cuidamos" },
  { href: "#origem", label: "A CRIMAP" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#localizacao", label: "Localização" },
];

export { openDrawer, closeDrawer };

export function MobileDrawer() {
  return (
    <div
      id="mobileDrawer"
      aria-hidden="true"
      className="fixed inset-0 z-[60] overflow-hidden invisible pointer-events-none"
    >
      <div
        className="absolute inset-0 bg-ink-deep/45"
        onClick={closeDrawer}
        aria-hidden="true"
      />
      <div
        data-drawer-panel
        className="absolute right-0 top-0 bottom-0 w-[min(100%,20.5rem)] bg-white flex flex-col translate-x-full transition-transform duration-300 ease-in-out"
      >
        <div className="flex items-center justify-between px-6 h-[72px] shrink-0">
          <span className="font-headline-sm text-[15px] tracking-[0.14em] uppercase text-ink-deep">
            CRIMAP
          </span>
          <button
            className="min-w-[48px] min-h-[48px] -mr-2 flex items-center justify-center text-crimap-gray"
            aria-label="Fechar menu"
            type="button"
            onClick={closeDrawer}
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 flex flex-col">
          <nav className="flex flex-col pb-2" aria-label="Navegação principal">
            {links.map((link) => (
              <a
                key={link.href}
                className="flex items-center min-h-12 font-headline-sm text-[20px] font-medium text-ink-deep tracking-tight"
                href={link.href}
                onClick={closeDrawer}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 mb-6 h-px bg-soft-line" />

          <section className="pb-8" aria-label="Contato">
            <p className="font-label-md text-[11px] font-semibold tracking-[0.14em] uppercase text-crimap-gray mb-5">
              Contato
            </p>
            <dl className="flex flex-col gap-5">
              <div>
                <dt className="font-label-md text-[11px] uppercase tracking-[0.08em] text-crimap-gray mb-1">
                  Endereço
                </dt>
                <dd className="font-body-md text-[14px] text-ink-deep leading-relaxed">
                  {siteConfig.address.neighborhood}
                  <br />
                  {siteConfig.address.complement}
                </dd>
              </div>
              <div>
                <dt className="font-label-md text-[11px] uppercase tracking-[0.08em] text-crimap-gray mb-1">
                  Telefone
                </dt>
                <dd className="font-body-md text-[14px] text-ink-deep">
                  A confirmar
                </dd>
              </div>
              <div>
                <dt className="font-label-md text-[11px] uppercase tracking-[0.08em] text-crimap-gray mb-1">
                  Horário
                </dt>
                <dd className="font-body-md text-[14px] text-ink-deep">
                  A confirmar
                </dd>
              </div>
            </dl>
          </section>
        </div>

        <div className="px-6 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] shrink-0 border-t border-soft-line">
          <a
            className="flex items-center justify-center w-full min-h-12 bg-connection-blue text-on-primary font-label-lg text-[14px] font-semibold rounded-[14px] hover:bg-primary transition-colors"
            href={whatsappHref()}
            rel="noopener noreferrer"
            target="_blank"
            onClick={closeDrawer}
          >
            Conversar pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
