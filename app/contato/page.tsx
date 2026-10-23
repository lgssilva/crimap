import type { Metadata } from "next";
import { siteConfig, whatsappHref } from "@/lib/site-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato — CRIMAP",
  description:
    "Entre em contato com a CRIMAP. Localização no Downtown Barra da Tijuca, WhatsApp, telefone e formulário de contato.",
};

const hours = [
  { day: "Segunda a Sexta", time: "8h às 19h" },
  { day: "Sábado", time: "8h às 13h" },
  { day: "Domingo e Feriados", time: "Fechado" },
];

export default function ContatoPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-br from-connection-blue/5 via-canvas-clinical to-vitality-rose/5 py-16 md:py-24 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto">
          <div className="inline-flex items-center gap-2 text-connection-blue font-label-md text-label-md font-semibold tracking-wider uppercase mb-4">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            Contato
          </div>
          <h1 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight max-w-3xl" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Estamos prontos para ouvir&nbsp;você
          </h1>
          <p className="font-body-lg text-body-lg text-crimap-gray mt-4 max-w-2xl">
            Agende uma visita, tire suas dúvidas ou venha conhecer nosso espaço. Cada conversa é o primeiro passo
            para o cuidado do seu&nbsp;filho.
          </p>
        </div>
      </section>

      {/* Contact channels + Map */}
      <section className="w-full bg-surface-pure py-16 md:py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact info — left col */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* WhatsApp — primary CTA */}
            <a
              href={whatsappHref("Olá, gostaria de mais informações sobre a CRIMAP")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-progress-green/8 border border-progress-green/20 hover:bg-progress-green/12 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-progress-green/15 flex items-center justify-center flex-shrink-0 group-hover:bg-progress-green/20 transition-colors">
                <span className="material-symbols-outlined text-[28px] text-progress-green">chat</span>
              </div>
              <div>
                <p className="font-label-md text-label-md font-semibold text-ink-deep">WhatsApp</p>
                <p className="font-body-lg text-body-lg text-progress-green font-semibold">{siteConfig.whatsapp.display}</p>
                <p className="font-body-sm text-body-sm text-crimap-gray mt-0.5">Resposta rápida em horário comercial</p>
              </div>
            </a>

            {/* Address */}
            <a
              href={siteConfig.address.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl bg-canvas-clinical border border-soft-line hover:border-connection-blue/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-connection-blue/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[24px] text-connection-blue">location_on</span>
              </div>
              <div>
                <p className="font-label-md text-label-md font-semibold text-ink-deep">Endereço</p>
                <p className="font-body-md text-body-md text-crimap-gray mt-1">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.complement}<br />
                  {siteConfig.address.neighborhood}<br />
                  {siteConfig.address.city} — {siteConfig.address.state}
                </p>
                <p className="font-label-md text-label-md text-connection-blue font-medium mt-2 group-hover:underline">
                  Abrir no Google Maps →
                </p>
              </div>
            </a>

            {/* Hours */}
            <div className="p-5 rounded-2xl bg-canvas-clinical border border-soft-line">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[20px] text-energy-yellow">schedule</span>
                <p className="font-label-md text-label-md font-semibold text-ink-deep">Horário de Funcionamento</p>
              </div>
              <div className="flex flex-col gap-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between py-2 border-b border-soft-line last:border-0">
                    <span className="font-body-sm text-body-sm text-ink-deep font-medium">{h.day}</span>
                    <span className={`font-label-md text-label-md font-semibold ${h.time === "Fechado" ? "text-crimap-gray" : "text-progress-green"}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="font-body-sm text-body-sm text-crimap-gray mt-3 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">info</span>
                Horários sujeitos a confirmação
              </p>
            </div>

            {/* Instagram */}
            <a
              href={siteConfig.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-canvas-clinical border border-soft-line hover:border-vitality-rose/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-vitality-rose/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-vitality-rose" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <p className="font-label-md text-label-md font-semibold text-ink-deep">Instagram</p>
                <p className="font-body-md text-body-md text-vitality-rose font-semibold">{siteConfig.instagram.handle}</p>
                <p className="font-body-sm text-body-sm text-crimap-gray mt-0.5">Bastidores, dicas e conquistas</p>
              </div>
            </a>
          </div>

          {/* Map — right col */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden border border-soft-line shadow-sm aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[480px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5!2d-43.3636!3d-22.9994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sShopping+Downtown+Barra+da+Tijuca!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da CRIMAP no Downtown Barra da Tijuca"
              />
            </div>

            {/* Quick directions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-canvas-clinical border border-soft-line">
                <span className="material-symbols-outlined text-[20px] text-connection-blue mt-0.5">directions_car</span>
                <div>
                  <p className="font-label-md text-label-md font-semibold text-ink-deep">De carro</p>
                  <p className="font-body-sm text-body-sm text-crimap-gray">Estacionamento no subsolo do Downtown. Entrada pela Av. das Américas.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-canvas-clinical border border-soft-line">
                <span className="material-symbols-outlined text-[20px] text-connection-blue mt-0.5">directions_bus</span>
                <div>
                  <p className="font-label-md text-label-md font-semibold text-ink-deep">Transporte público</p>
                  <p className="font-body-sm text-body-sm text-crimap-gray">BRT: Estação Bosque Marapendi. Diversas linhas de ônibus pela Av. das Américas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full bg-canvas-clinical py-16 md:py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-connection-blue font-label-md text-label-md font-semibold tracking-wider uppercase mb-3">
              <span className="material-symbols-outlined text-[16px]">mail</span>
              Formulário de Contato
            </div>
            <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">
              Envie sua mensagem
            </h2>
            <p className="font-body-lg text-body-lg text-crimap-gray mt-2">
              Preencha o formulário e entraremos em contato em até 24&nbsp;horas.
            </p>
          </div>

          <form className="flex flex-col gap-5 p-6 md:p-8 rounded-2xl bg-surface-pure border border-soft-line shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nome" className="font-label-md text-label-md font-semibold text-ink-deep">
                  Nome completo
                </label>
                <input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  className="h-12 px-4 rounded-xl border border-soft-line bg-canvas-clinical text-ink-deep font-body-md placeholder:text-crimap-gray/50 focus:outline-none focus:ring-2 focus:ring-connection-blue/30 focus:border-connection-blue transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="telefone" className="font-label-md text-label-md font-semibold text-ink-deep">
                  Telefone / WhatsApp
                </label>
                <input
                  id="telefone"
                  type="tel"
                  placeholder="(21) 99999-9999"
                  className="h-12 px-4 rounded-xl border border-soft-line bg-canvas-clinical text-ink-deep font-body-md placeholder:text-crimap-gray/50 focus:outline-none focus:ring-2 focus:ring-connection-blue/30 focus:border-connection-blue transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-label-md text-label-md font-semibold text-ink-deep">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="h-12 px-4 rounded-xl border border-soft-line bg-canvas-clinical text-ink-deep font-body-md placeholder:text-crimap-gray/50 focus:outline-none focus:ring-2 focus:ring-connection-blue/30 focus:border-connection-blue transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="assunto" className="font-label-md text-label-md font-semibold text-ink-deep">
                Assunto
              </label>
              <select
                id="assunto"
                className="h-12 px-4 rounded-xl border border-soft-line bg-canvas-clinical text-ink-deep font-body-md focus:outline-none focus:ring-2 focus:ring-connection-blue/30 focus:border-connection-blue transition-colors"
                defaultValue=""
              >
                <option value="" disabled>Selecione o assunto</option>
                <option value="avaliacao">Agendar avaliação</option>
                <option value="informacoes">Informações sobre terapias</option>
                <option value="visita">Agendar visita</option>
                <option value="parceria">Parceria profissional</option>
                <option value="outro">Outro assunto</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="mensagem" className="font-label-md text-label-md font-semibold text-ink-deep">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={4}
                placeholder="Conte-nos como podemos ajudar..."
                className="px-4 py-3 rounded-xl border border-soft-line bg-canvas-clinical text-ink-deep font-body-md placeholder:text-crimap-gray/50 focus:outline-none focus:ring-2 focus:ring-connection-blue/30 focus:border-connection-blue transition-colors resize-y"
              />
            </div>

            <button
              type="submit"
              className="h-14 rounded-xl bg-connection-blue text-white font-label-md font-semibold hover:bg-connection-blue/90 transition-colors flex items-center justify-center gap-2 mt-2"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              Enviar mensagem
            </button>

            <p className="font-body-sm text-body-sm text-crimap-gray text-center">
              Prefere falar direto?{" "}
              <a href={whatsappHref("Olá, gostaria de informações sobre a CRIMAP")} target="_blank" rel="noopener noreferrer" className="text-progress-green font-semibold hover:underline">
                Chame no WhatsApp →
              </a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
