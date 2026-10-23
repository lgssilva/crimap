import type { Metadata } from "next";
import { whatsappHref } from "@/lib/site-config";
import { AI_IMAGES } from "@/lib/ai-images";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Especialidades Terapêuticas — CRIMAP",
  description:
    "Conheça as 6 especialidades da CRIMAP: Fisioterapia, Fonoaudiologia, Terapia Ocupacional, Psicologia, Psicopedagogia e Neuropediatria.",
};

const specialties = [
  {
    id: "fisioterapia",
    icon: "sprint",
    title: "Fisioterapia Motora & Neurofuncional",
    color: "progress-green",
    image: AI_IMAGES.sensoryWalk,
    description:
      "Tratamento especializado para desenvolver e aprimorar as capacidades motoras da criança, desde marcos como sentar e engatinhar até movimentos complexos do dia a dia.",
    focuses: [
      "Atraso no desenvolvimento motor (não senta, não anda na idade esperada)",
      "Paralisia cerebral e síndromes neurológicas",
      "Hipotonia e alterações de tônus muscular",
      "Pós-operatório ortopédico e neurológico",
      "Estimulação precoce (0-3 anos)",
      "Doenças neuromusculares progressivas",
    ],
    approach:
      "Utilizamos técnicas como Bobath, Therasuit, integração sensorial motora e cinesioterapia funcional, sempre com abordagem lúdica para engajar a criança no processo terapêutico.",
  },
  {
    id: "fonoaudiologia",
    icon: "record_voice_over",
    title: "Fonoaudiologia Pediátrica",
    color: "connection-blue",
    image: AI_IMAGES.speechTherapy,
    description:
      "Desenvolvimento da comunicação, linguagem oral e escrita, fala, voz, fluência e funções orofaciais — do balbucio às primeiras conversas.",
    focuses: [
      "Atraso na fala e linguagem",
      "Transtorno do Espectro Autista (comunicação)",
      "Distúrbios de processamento auditivo",
      "Dificuldades de alimentação e deglutição",
      "Gagueira e distúrbios de fluência",
      "Comunicação alternativa e aumentativa (CAA)",
    ],
    approach:
      "Trabalhamos com abordagem naturalística, PROMPT, PECS e comunicação aumentativa, adaptando cada sessão ao ritmo e interesse da criança.",
  },
  {
    id: "terapia-ocupacional",
    icon: "toys",
    title: "Terapia Ocupacional & Integração Sensorial de Ayres",
    color: "energy-yellow",
    image: AI_IMAGES.sensorySwing,
    description:
      "Ajuda a criança a participar com autonomia das atividades do dia a dia — brincar, comer, vestir-se, escrever — regulando respostas sensoriais para um desenvolvimento pleno.",
    focuses: [
      "Dificuldades sensoriais (hipo ou hiper-responsividade)",
      "Atraso nas habilidades motoras finas",
      "Dificuldades com atividades de vida diária (AVDs)",
      "Transtorno do processamento sensorial",
      "Coordenação motora e planejamento motor (dispraxia)",
      "Regulação emocional e comportamental",
    ],
    approach:
      "Integração Sensorial de Ayres em circuito especializado, com balanços, rampas táteis e materiais sensoriais, combinada com treinamento de AVDs e habilidades motoras finas.",
  },
  {
    id: "psicologia",
    icon: "psychology",
    title: "Psicologia Infantil & Ludoterapia",
    color: "vitality-rose",
    image: AI_IMAGES.motherChild,
    description:
      "Suporte emocional e comportamental para crianças e suas famílias através do brincar terapêutico, criando um espaço seguro para expressão e crescimento.",
    focuses: [
      "Ansiedade, medos e fobias infantis",
      "Dificuldades de socialização e comportamento",
      "Luto, separação e mudanças familiares",
      "Avaliação neuropsicológica infantil",
      "Orientação parental e familiar",
      "Regulação emocional e habilidades sociais",
    ],
    approach:
      "Ludoterapia centrada na criança, Terapia Cognitivo-Comportamental adaptada, avaliação neuropsicológica e grupos de habilidades sociais.",
  },
  {
    id: "psicopedagogia",
    icon: "menu_book",
    title: "Psicopedagogia Clínica",
    color: "connection-blue",
    image: AI_IMAGES.sensoryWalk2,
    description:
      "Avaliação e intervenção nas dificuldades de aprendizagem, ajudando a criança a desenvolver estratégias cognitivas para aprender com confiança.",
    focuses: [
      "Dificuldades de leitura e escrita (dislexia)",
      "Discalculia e dificuldades com matemática",
      "Transtorno de Déficit de Atenção (TDAH)",
      "Dificuldades de memória e atenção",
      "Baixo rendimento escolar",
      "Avaliação psicopedagógica clínica",
    ],
    approach:
      "Avaliação diagnóstica completa, intervenção com jogos e materiais concretos, orientação escolar e parceria direta com professores e coordenadores.",
  },
  {
    id: "neuropediatria",
    icon: "neurology",
    title: "Avaliação Neuropediátrica",
    color: "progress-green",
    image: AI_IMAGES.teamMeeting,
    description:
      "Avaliação médica especializada em desenvolvimento neurológico infantil, diagnóstico diferencial e acompanhamento contínuo integrado ao plano terapêutico.",
    focuses: [
      "Avaliação do desenvolvimento neuropsicomotor",
      "Diagnóstico de Transtorno do Espectro Autista",
      "Epilepsias e crises convulsivas",
      "Acompanhamento de prematuridade",
      "Distúrbios do sono na infância",
      "Encaminhamento e coordenação terapêutica",
    ],
    approach:
      "Consulta detalhada com anamnese completa, aplicação de escalas padronizadas (Denver, M-CHAT, CARS), coordenação do plano terapêutico e reavaliações periódicas.",
  },
];

export default function EspecialidadesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-br from-connection-blue/5 via-canvas-clinical to-progress-green/5 py-16 md:py-24 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto">
          <div className="inline-flex items-center gap-2 text-connection-blue font-label-md text-label-md font-semibold tracking-wider uppercase mb-4">
            <span className="material-symbols-outlined text-[16px]">medical_services</span>
            Especialidades Terapêuticas
          </div>
          <h1 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight max-w-3xl" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Cuidado especializado para cada fase do&nbsp;desenvolvimento
          </h1>
          <p className="font-body-lg text-body-lg text-crimap-gray mt-4 max-w-2xl">
            6 áreas terapêuticas integradas, com profissionais que trabalham juntos para construir
            um plano personalizado ao seu filho.
          </p>
        </div>
      </section>

      {/* Specialties */}
      <section className="w-full bg-surface-pure py-16 md:py-20 px-5 md:px-6 lg:px-12">
        <div className="max-w-[1360px] mx-auto flex flex-col gap-16 md:gap-20">
          {specialties.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              {/* Image side */}
              <div className={`rounded-3xl overflow-hidden shadow-md ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full aspect-[16/10] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content side */}
              <div className={`flex flex-col gap-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className={`w-14 h-14 rounded-2xl bg-${s.color}/10 flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-[28px] text-${s.color}`}>{s.icon}</span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">{s.title}</h2>
                <p className="font-body-lg text-body-lg text-crimap-gray leading-relaxed">{s.description}</p>

                {/* Approach */}
                <div className="p-4 rounded-xl bg-canvas-clinical border border-soft-line">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`material-symbols-outlined text-[16px] text-${s.color}`}>science</span>
                    <span className="font-label-md text-label-md font-semibold text-ink-deep">Nossa Abordagem</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-crimap-gray">{s.approach}</p>
                </div>

                {/* Focuses */}
                <div>
                  <h3 className="font-label-md text-label-md font-semibold text-ink-deep mb-3">Principais Focos</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.focuses.map((f) => (
                      <li key={f} className="flex items-start gap-2 font-body-sm text-body-sm text-crimap-gray">
                        <span className={`material-symbols-outlined text-[14px] text-${s.color} mt-0.5 flex-shrink-0`}>check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href={whatsappHref(`Olá, gostaria de saber mais sobre ${s.title} na CRIMAP`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-${s.color} text-white font-label-md font-semibold hover:opacity-90 transition-opacity w-fit`}
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  Agendar {s.title.split(" ")[0]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrated approach CTA */}
      <section className="w-full bg-gradient-to-br from-connection-blue to-connection-blue/90 py-16 md:py-20 px-5 md:px-6 lg:px-12">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center">
            <span className="material-symbols-outlined text-[32px] text-white">hub</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-white font-bold tracking-tight">
            Abordagem integrada: todas as áreas trabalhando&nbsp;juntas
          </h2>
          <p className="font-body-lg text-body-lg text-white/85 max-w-xl">
            Na CRIMAP, terapeutas de todas as especialidades se reúnem semanalmente para construir
            e ajustar o plano de cada criança — porque o desenvolvimento não acontece em caixas separadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={whatsappHref("Olá, gostaria de agendar uma avaliação multidisciplinar na CRIMAP")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 h-14 inline-flex items-center justify-center rounded-xl bg-white text-connection-blue font-label-md font-semibold hover:bg-white/95 transition-colors gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              Agendar avaliação
            </a>
            <Link
              href="/equipe"
              className="px-8 h-14 inline-flex items-center justify-center rounded-xl border-2 border-white/40 text-white font-label-md font-semibold hover:bg-white/10 transition-colors gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">groups</span>
              Conheça a equipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
