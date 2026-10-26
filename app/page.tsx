import Link from "next/link";
import { AI_IMAGES } from "@/lib/ai-images";
import { EmotionalDivider } from "@/components/site/emotional-divider";
import { Hero } from "@/components/site/hero";
import { NeedsSection } from "@/components/site/needs-section";
import { TestimonialsSection } from "@/components/site/testimonials-section";
import { TrustStrip } from "@/components/site/trust-strip";
import { whatsappHref } from "@/lib/site-config";

/* ── Therapy preview cards (compact version for homepage) ── */
const therapies = [
  {
    icon: "sprint",
    title: "Fisioterapia Motora",
    description: "Desenvolvimento motor e funcional com técnicas especializadas para cada fase.",
    color: "progress-green",
  },
  {
    icon: "record_voice_over",
    title: "Fonoaudiologia",
    description: "Linguagem, fala e comunicação funcional desde os primeiros sons.",
    color: "connection-blue",
  },
  {
    icon: "toys",
    title: "Terapia Ocupacional",
    description: "Autonomia nas atividades diárias e integração sensorial de Ayres.",
    color: "energy-yellow",
  },
  {
    icon: "psychology",
    title: "Psicologia Infantil",
    description: "Ludoterapia e suporte emocional para crianças e famílias.",
    color: "vitality-rose",
  },
  {
    icon: "menu_book",
    title: "Psicopedagogia",
    description: "Estratégias clínicas para aprendizagem e desenvolvimento cognitivo.",
    color: "connection-blue",
  },
  {
    icon: "neurology",
    title: "Neuropediatria",
    description: "Avaliação diagnóstica e acompanhamento do desenvolvimento neurológico.",
    color: "progress-green",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustStrip />
      <NeedsSection />

      {/* Emotional divider — transition from concerns to solutions */}
      <EmotionalDivider
        imageSrc={AI_IMAGES.sensoryWalk}
        imageAlt="Terapeuta ajudando criança a caminhar em tapete sensorial na CRIMAP"
        quote="Cada pequeno passo do seu filho é uma grande conquista que celebramos juntos"
        overlayColor="from-connection-blue/80 to-ink-deep/70"
      />

      {/* ── Therapy Preview (compact grid → link to /terapias-tratamentos) ── */}
      <section className="w-full bg-surface-pure py-16 md:py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line" id="terapias">
        <div className="max-w-[1360px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-connection-blue font-label-md text-label-md font-semibold tracking-wider uppercase">
                <span className="material-symbols-outlined text-[16px]">medical_services</span>
                Especialidades Terapêuticas
              </div>
              <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">
                Cuidado especializado para cada&nbsp;necessidade
              </h2>
            </div>
            <Link
              href="/terapias-tratamentos"
              className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-connection-blue text-white font-label-md font-semibold hover:bg-connection-blue/90 transition-colors whitespace-nowrap flex-shrink-0"
            >
              Ver terapias e tratamentos
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {therapies.map((t) => (
              <Link
                key={t.title}
                href="/terapias-tratamentos"
                className="group p-6 rounded-2xl bg-canvas-clinical border border-soft-line hover:border-soft-line/80 hover:shadow-md transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-${t.color}/10 flex items-center justify-center mb-4`}>
                  <span className={`material-symbols-outlined text-[24px] text-${t.color}`}>{t.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep mb-2">{t.title}</h3>
                <p className="font-body-sm text-body-sm text-crimap-gray">{t.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional divider */}
      <EmotionalDivider
        imageSrc={AI_IMAGES.motherChild}
        imageAlt="Mãe abraçando filho com emoção após sessão de terapia"
        quote="O maior presente é ver seu filho brilhar com as próprias conquistas"
        attribution="Para todas as famílias da CRIMAP"
        overlayColor="from-vitality-rose/70 to-ink-deep/60"
      />

      {/* Testimonials highlight */}
      <TestimonialsSection />

      {/* Final CTA */}
      <section className="w-full bg-gradient-to-br from-connection-blue to-connection-blue/90 py-16 md:py-20 px-5 md:px-6 lg:px-12">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center">
            <span className="material-symbols-outlined text-[32px] text-white">favorite</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-white font-bold tracking-tight">
            Dê o primeiro passo para o desenvolvimento do&nbsp;seu&nbsp;filho
          </h2>
          <p className="font-body-lg text-body-lg text-white/85 max-w-xl">
            Agende uma avaliação e conheça nosso espaço pensado para transformar vidas com acolhimento e ciência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={whatsappHref("Olá, gostaria de agendar uma avaliação na CRIMAP")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 h-14 inline-flex items-center justify-center rounded-xl bg-white text-connection-blue font-label-md font-semibold hover:bg-white/95 transition-colors gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              Agendar pelo WhatsApp
            </a>
            <Link
              href="/contato"
              className="px-8 h-14 inline-flex items-center justify-center rounded-xl border-2 border-white/40 text-white font-label-md font-semibold hover:bg-white/10 transition-colors gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">location_on</span>
              Como chegar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
