import type { Metadata } from "next";
import Link from "next/link";
import { whatsappHref } from "@/lib/site-config";
import { VideoPlaceholder } from "@/components/site/video-placeholder";
import { AI_IMAGES } from "@/lib/ai-images";

export const metadata: Metadata = {
  title: "Serviços Especializados — CRIMAP",
  description:
    "Reforço escolar, nutrição infantil e neuropediatria: serviços complementares que ampliam o cuidado multidisciplinar da CRIMAP.",
};

/* Static class map — Tailwind v4 needs full class strings for scanning */
const colorStyles = {
  "connection-blue": {
    iconBg: "bg-connection-blue/15",
    iconText: "text-connection-blue",
    checkText: "text-connection-blue",
    linkText: "text-connection-blue",
  },
  "progress-green": {
    iconBg: "bg-progress-green/15",
    iconText: "text-progress-green",
    checkText: "text-progress-green",
    linkText: "text-progress-green",
  },
  "energy-yellow": {
    iconBg: "bg-energy-yellow/15",
    iconText: "text-energy-yellow",
    checkText: "text-energy-yellow",
    linkText: "text-energy-yellow",
  },
} as const;

type ColorKey = keyof typeof colorStyles;

const services = [
  {
    id: "reforco-escolar",
    icon: "school",
    color: "energy-yellow" as ColorKey,
    title: "Reforço Escolar Especializado",
    description:
      "Atendimento pedagógico individualizado que respeita o ritmo de cada criança. O reforço escolar da CRIMAP utiliza abordagem lúdica e estratégias personalizadas para superar dificuldades de aprendizagem, resgatar a autoconfiança e promover autonomia nos estudos.",
    highlights: [
      "Avaliação pedagógica inicial para entender as necessidades",
      "Estratégias lúdicas que tornam o aprendizado prazeroso",
      "Comunicação contínua com a escola para alinhar objetivos",
      "Foco em autonomia, não apenas no conteúdo escolar",
    ],
    poster: AI_IMAGES.sensoryWalk2,
  },
  {
    id: "nutricao",
    icon: "nutrition",
    color: "progress-green" as ColorKey,
    title: "Nutrição Infantil",
    description:
      "Orientação nutricional voltada para a saúde e o desenvolvimento infantil. A nutricionista da CRIMAP trabalha junto às famílias e cuidadores, orientando sobre alimentação adequada, seletividade alimentar e necessidades nutricionais específicas de crianças com condições neurológicas.",
    highlights: [
      "Avaliação nutricional completa e individualizada",
      "Orientação para manejo da seletividade alimentar",
      "Plano alimentar adequado às necessidades de cada criança",
      "Suporte e educação nutricional para pais e cuidadores",
    ],
    poster: AI_IMAGES.motherChild,
  },
  {
    id: "neuropediatria",
    icon: "neurology",
    color: "connection-blue" as ColorKey,
    title: "Neuropediatra",
    description:
      "Diagnóstico e acompanhamento de condições neurológicas e musculares em crianças. O neuropediatra da CRIMAP atua de forma integrada com toda a equipe terapêutica, garantindo que o plano de tratamento seja baseado em avaliação médica precisa e atualizada.",
    highlights: [
      "Avaliação diagnóstica detalhada do desenvolvimento neurológico",
      "Acompanhamento longitudinal com reavaliações periódicas",
      "Integração total com a equipe multidisciplinar",
      "Laudos e relatórios para escolas, planos de saúde e processos",
    ],
    poster: AI_IMAGES.teamMeeting,
  },
];

export default function ServicosEspecializadosPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full py-20 md:py-28 px-5 md:px-6 lg:px-12 border-b border-soft-line overflow-hidden">
        <img
          src={AI_IMAGES.teamMeeting}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/85 via-ink-deep/70 to-ink-deep/50" />
        <div className="relative z-10 max-w-[1360px] mx-auto">
          <div className="inline-flex items-center gap-2 text-energy-yellow font-label-md text-label-md font-semibold tracking-wider uppercase mb-4">
            <span className="material-symbols-outlined text-[16px]">
              support
            </span>
            Serviços Especializados
          </div>
          <h1
            className="font-headline-xl text-headline-xl text-white font-bold tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Cuidado completo que vai além da&nbsp;terapia
          </h1>
          <p className="font-body-lg text-body-lg text-white/80 mt-4 max-w-2xl">
            Serviços complementares que ampliam o desenvolvimento da criança,
            unindo educação, saúde e acompanhamento médico em um só lugar.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="w-full bg-surface-pure py-16 md:py-20 px-5 md:px-6 lg:px-12">
        <div className="max-w-[1360px] mx-auto flex flex-col gap-20">
          {services.map((s, i) => {
            const isEven = i % 2 === 0;
            const cs = colorStyles[s.color];
            return (
              <article
                key={s.id}
                id={s.id}
                className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
              >
                {/* Video */}
                <div
                  className={`w-full lg:w-1/2 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <VideoPlaceholder
                    posterSrc={s.poster}
                    posterAlt={`Vídeo: ${s.title} na CRIMAP`}
                    label={s.title}
                  />
                </div>

                {/* Content */}
                <div
                  className={`w-full lg:w-1/2 flex flex-col gap-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${cs.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <span
                        className={`material-symbols-outlined text-[24px] ${cs.iconText}`}
                      >
                        {s.icon}
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-ink-deep font-bold tracking-tight">
                      {s.title}
                    </h2>
                  </div>

                  <p className="font-body-md text-body-md text-crimap-gray leading-relaxed">
                    {s.description}
                  </p>

                  <ul className="flex flex-col gap-3 mt-2">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span
                          className={`material-symbols-outlined text-[18px] ${cs.checkText} mt-0.5 shrink-0`}
                          style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                          check_circle
                        </span>
                        <span className="font-body-sm text-body-sm text-ink-deep">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappHref(
                      `Olá, gostaria de saber mais sobre ${s.title} na CRIMAP`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 mt-2 font-label-md text-label-md font-semibold ${cs.linkText} hover:underline underline-offset-4 transition-colors w-fit`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      chat
                    </span>
                    Saiba mais pelo WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-soft-line" />

      {/* Cross-link to Terapias */}
      <section className="w-full bg-canvas-clinical py-14 md:py-16 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <h2 className="font-headline-lg text-headline-lg text-ink-deep font-bold tracking-tight">
              Conheça nossas terapias e&nbsp;tratamentos
            </h2>
            <p className="font-body-md text-body-md text-crimap-gray">
              PNF Kabat, Therasuit, Bobath, Integração Sensorial e mais — os
              métodos que fazem a diferença na reabilitação.
            </p>
          </div>
          <Link
            href="/terapias-tratamentos"
            className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-connection-blue text-white font-label-md font-semibold hover:bg-connection-blue/90 transition-colors whitespace-nowrap shrink-0"
          >
            Terapias e Tratamentos
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-br from-energy-yellow to-energy-yellow/85 py-16 md:py-20 px-5 md:px-6 lg:px-12">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center">
            <span className="material-symbols-outlined text-[32px] text-white">
              family_restroom
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-white font-bold tracking-tight">
            Um espaço completo para o desenvolvimento&nbsp;do&nbsp;seu&nbsp;filho
          </h2>
          <p className="font-body-lg text-body-lg text-white/85 max-w-xl">
            Na CRIMAP, terapia, educação e saúde trabalham juntas. Converse
            conosco e descubra o melhor caminho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={whatsappHref(
                "Olá, gostaria de agendar uma avaliação na CRIMAP"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 h-14 inline-flex items-center justify-center rounded-xl bg-white text-energy-yellow font-label-md font-semibold hover:bg-white/95 transition-colors gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">
                chat
              </span>
              Agendar avaliação
            </a>
            <Link
              href="/contato"
              className="px-8 h-14 inline-flex items-center justify-center rounded-xl border-2 border-white/40 text-white font-label-md font-semibold hover:bg-white/10 transition-colors gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">
                location_on
              </span>
              Como chegar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
