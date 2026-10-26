import type { Metadata } from "next";
import Link from "next/link";
import { whatsappHref } from "@/lib/site-config";
import { VideoPlaceholder } from "@/components/site/video-placeholder";
import { AI_IMAGES } from "@/lib/ai-images";

export const metadata: Metadata = {
  title: "Terapias e Tratamentos — CRIMAP",
  description:
    "Conheça os métodos terapêuticos da CRIMAP: PNF Kabat, RTA, Therasuit, Eletroestimulação, Kinesio Tape, Integração Sensorial e Conceito Bobath.",
};

const therapies = [
  {
    id: "pnf-kabat",
    icon: "accessibility_new",
    color: "connection-blue",
    title: "PNF — Facilitação Neuromuscular Proprioceptiva (Método Kabat)",
    shortTitle: "PNF Kabat",
    description:
      "O método PNF utiliza padrões de movimento em diagonais e espirais, estimulando receptores proprioceptivos para recuperar o controle motor e a postura funcional. Indicado para crianças com dificuldades de coordenação, tônus muscular alterado e atraso no desenvolvimento motor.",
    highlights: [
      "Padrões diagonais que imitam movimentos naturais do corpo",
      "Melhora da coordenação, equilíbrio e controle postural",
      "Técnicas de facilitação adaptadas ao universo infantil",
    ],
    poster: AI_IMAGES.sensoryWalk,
  },
  {
    id: "rta",
    icon: "pulmonology",
    color: "progress-green",
    title: "Reequilíbrio Toracoabdominal (RTA)",
    shortTitle: "RTA",
    description:
      "Terapia manual que trabalha a mecânica respiratória, promovendo o reequilíbrio dos músculos do tórax e abdômen. Melhora a expansibilidade pulmonar e a ventilação, essencial para crianças com comprometimento respiratório associado a condições neurológicas.",
    highlights: [
      "Técnicas manuais suaves e não-invasivas",
      "Melhora da função respiratória e do conforto da criança",
      "Integração com o plano terapêutico multidisciplinar",
    ],
    poster: AI_IMAGES.handHolding,
  },
  {
    id: "therasuit",
    icon: "fitness_center",
    color: "vitality-rose",
    title: "Therasuit — Programa Intensivo",
    shortTitle: "Therasuit",
    description:
      "Programa de terapia intensiva que utiliza uma estrutura tipo \"gaiola\" (cage), polias e um colete elástico especial. A vestimenta Therasuit alinha o corpo e fornece carga de compressão nos músculos, acelerando ganhos motores em períodos concentrados de tratamento.",
    highlights: [
      "Sessões intensivas com resultados visíveis em semanas",
      "Estrutura cage com polias para exercícios em suspensão",
      "Colete elástico que otimiza alinhamento postural e feedback sensorial",
    ],
    poster: AI_IMAGES.sensorySwing,
  },
  {
    id: "eletroestimulacao",
    icon: "bolt",
    color: "energy-yellow",
    title: "Eletroestimulação Funcional",
    shortTitle: "Eletroestimulação",
    description:
      "Técnica baseada nos estudos de Judy Carmick que utiliza estímulos elétricos de baixa intensidade para ativar grupos musculares específicos. Contribui para a melhora da função muscular em crianças com paralisia cerebral e outras condições neurológicas.",
    highlights: [
      "Protocolos seguros baseados em evidência científica",
      "Ativação muscular direcionada e indolor",
      "Integrada às sessões de fisioterapia para potencializar resultados",
    ],
    poster: AI_IMAGES.speechTherapy,
  },
  {
    id: "kinesio-tape",
    icon: "healing",
    color: "progress-green",
    title: "Kinesio Tape — Bandagem Terapêutica",
    shortTitle: "Kinesio Tape",
    description:
      "Fitas adesivas elásticas aplicadas estrategicamente na pele, oferecendo suporte muscular e articular sem restringir o movimento. Auxiliam na correção postural, redução de edemas e estímulo proprioceptivo durante as atividades do dia a dia.",
    highlights: [
      "Suporte contínuo sem limitar a amplitude de movimento",
      "Efeito prolongado entre as sessões de terapia",
      "Aplicação confortável e adaptável a crianças",
    ],
    poster: AI_IMAGES.sensoryWalk2,
  },
  {
    id: "integracao-sensorial",
    icon: "toys",
    color: "connection-blue",
    title: "Integração Sensorial de Ayres",
    shortTitle: "Integração Sensorial",
    description:
      "Desenvolvida por Jean Ayres, esta abordagem trata dificuldades no processamento sensorial — quando o cérebro tem dificuldade em organizar informações dos sentidos. Utiliza atividades lúdicas em ambiente especialmente preparado para estimular respostas adaptativas.",
    highlights: [
      "Ambiente sensorial seguro e estimulante",
      "Atividades lúdicas que engajam a criança naturalmente",
      "Melhora na regulação emocional, atenção e participação social",
    ],
    poster: AI_IMAGES.sensorySwing,
  },
  {
    id: "bobath",
    icon: "neurology",
    color: "vitality-rose",
    title: "Conceito Neuroevolutivo Bobath",
    shortTitle: "Bobath",
    description:
      "Abordagem holística e interdisciplinar para tratamento de patologias do sistema nervoso central. Trabalha a facilitação de padrões normais de movimento, inibindo padrões anormais e promovendo experiências sensório-motoras adequadas ao desenvolvimento da criança.",
    highlights: [
      "Abordagem personalizada ao perfil de cada criança",
      "Facilitação de padrões motores funcionais",
      "Integração entre fisioterapia, TO e fonoaudiologia",
    ],
    poster: AI_IMAGES.teamMeeting,
  },
];

export default function TerapiasTratamentosPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-br from-connection-blue/5 via-canvas-clinical to-progress-green/5 py-16 md:py-24 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto">
          <div className="inline-flex items-center gap-2 text-connection-blue font-label-md text-label-md font-semibold tracking-wider uppercase mb-4">
            <span className="material-symbols-outlined text-[16px]">
              medical_services
            </span>
            Terapias e Tratamentos
          </div>
          <h1
            className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Métodos terapêuticos baseados em evidência&nbsp;científica
          </h1>
          <p className="font-body-lg text-body-lg text-crimap-gray mt-4 max-w-2xl">
            Cada técnica é selecionada com critério pela equipe da CRIMAP e
            integrada ao plano individual de cada criança, sempre priorizando
            resultados funcionais e qualidade de vida.
          </p>
        </div>
      </section>

      {/* Therapies */}
      <section className="w-full bg-surface-pure py-16 md:py-20 px-5 md:px-6 lg:px-12">
        <div className="max-w-[1360px] mx-auto flex flex-col gap-16 md:gap-20">
          {therapies.map((t, i) => {
            const isEven = i % 2 === 0;
            return (
              <article
                key={t.id}
                id={t.id}
                className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
              >
                {/* Video — alternates sides on desktop */}
                <div
                  className={`w-full lg:w-1/2 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <VideoPlaceholder
                    posterSrc={t.poster}
                    posterAlt={`Vídeo: ${t.shortTitle} na CRIMAP`}
                    label={t.shortTitle}
                  />
                </div>

                {/* Content */}
                <div
                  className={`w-full lg:w-1/2 flex flex-col gap-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-${t.color}/10 flex items-center justify-center`}
                  >
                    <span
                      className={`material-symbols-outlined text-[24px] text-${t.color}`}
                    >
                      {t.icon}
                    </span>
                  </div>

                  <h2 className="font-headline-lg text-headline-lg text-ink-deep font-bold tracking-tight">
                    {t.title}
                  </h2>

                  <p className="font-body-md text-body-md text-crimap-gray leading-relaxed">
                    {t.description}
                  </p>

                  <ul className="flex flex-col gap-3 mt-2">
                    {t.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span
                          className={`material-symbols-outlined text-[18px] text-${t.color} mt-0.5 shrink-0`}
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
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-soft-line" />

      {/* Cross-link to Serviços Especializados */}
      <section className="w-full bg-canvas-clinical py-14 md:py-16 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <h2 className="font-headline-lg text-headline-lg text-ink-deep font-bold tracking-tight">
              Conheça também nossos serviços&nbsp;especializados
            </h2>
            <p className="font-body-md text-body-md text-crimap-gray">
              Reforço escolar, nutrição infantil e neuropediatria — cuidados
              complementares para o desenvolvimento integral.
            </p>
          </div>
          <Link
            href="/servicos-especializados"
            className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-connection-blue text-white font-label-md font-semibold hover:bg-connection-blue/90 transition-colors whitespace-nowrap shrink-0"
          >
            Serviços Especializados
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-br from-connection-blue to-connection-blue/85 py-16 md:py-20 px-5 md:px-6 lg:px-12">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center">
            <span className="material-symbols-outlined text-[32px] text-white">
              healing
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-white font-bold tracking-tight">
            Cada criança merece um plano feito&nbsp;para&nbsp;ela
          </h2>
          <p className="font-body-lg text-body-lg text-white/85 max-w-xl">
            Agende uma avaliação e conheça de perto os métodos que fazem a
            diferença no desenvolvimento do seu filho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={whatsappHref(
                "Olá, gostaria de saber mais sobre as terapias e tratamentos da CRIMAP"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 h-14 inline-flex items-center justify-center rounded-xl bg-white text-connection-blue font-label-md font-semibold hover:bg-white/95 transition-colors gap-2"
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
