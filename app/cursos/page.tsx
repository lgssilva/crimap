import type { Metadata } from "next";
import { whatsappHref } from "@/lib/site-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cursos e Eventos — CRIMAP",
  description:
    "Cursos, workshops e eventos da CRIMAP para pais, educadores e profissionais de saúde voltados ao desenvolvimento infantil.",
};

const pastCourses = [
  {
    title: "Curso de Marcha",
    edition: "2ª Turma",
    year: "2018",
    description:
      "Capacitação prática sobre avaliação e estimulação da marcha em crianças com alterações neuromotoras.",
    icon: "sprint",
    color: "progress-green",
  },
];

const upcomingTopics = [
  {
    title: "Integração Sensorial para Pais",
    description:
      "Como reconhecer sinais de disfunção sensorial em casa e estratégias para o dia a dia.",
    icon: "toys",
    color: "energy-yellow",
  },
  {
    title: "Comunicação Alternativa na Prática",
    description:
      "Workshop para pais e educadores sobre sistemas de comunicação aumentativa e alternativa (CAA).",
    icon: "record_voice_over",
    color: "connection-blue",
  },
  {
    title: "Inclusão Escolar: da Teoria à Prática",
    description:
      "Orientações para professores e coordenadores sobre adaptações curriculares e acolhimento em sala.",
    icon: "school",
    color: "vitality-rose",
  },
  {
    title: "Manejo Comportamental em Casa",
    description:
      "Estratégias baseadas em evidência para famílias lidarem com desafios comportamentais no cotidiano.",
    icon: "psychology",
    color: "progress-green",
  },
];

export default function CursosPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-br from-progress-green/5 via-canvas-clinical to-connection-blue/5 py-16 md:py-24 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto">
          <div className="inline-flex items-center gap-2 text-progress-green font-label-md text-label-md font-semibold tracking-wider uppercase mb-4">
            <span className="material-symbols-outlined text-[16px]">
              school
            </span>
            Cursos e Eventos
          </div>
          <h1
            className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Conhecimento que transforma o cuidado&nbsp;diário
          </h1>
          <p className="font-body-lg text-body-lg text-crimap-gray mt-4 max-w-2xl">
            Capacitações, workshops e eventos para pais, educadores e
            profissionais de saúde — porque cuidar melhor começa por
            entender&nbsp;mais.
          </p>
        </div>
      </section>

      {/* Coming soon banner */}
      <section className="w-full bg-canvas-clinical py-12 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto">
          <div className="p-8 md:p-10 rounded-3xl bg-surface-pure border-2 border-dashed border-connection-blue/30 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-16 h-16 rounded-2xl bg-connection-blue/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[32px] text-connection-blue">
                event_upcoming
              </span>
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h2 className="font-headline-md text-headline-md font-bold text-ink-deep">
                Novas turmas em breve
              </h2>
              <p className="font-body-lg text-body-lg text-crimap-gray max-w-2xl">
                Estamos preparando uma nova programação de cursos e workshops
                para 2025. Quer ser avisado quando abrirem as inscrições?
                Fale com a gente pelo WhatsApp.
              </p>
              <div className="mt-3">
                <a
                  href={whatsappHref(
                    "Olá, gostaria de ser avisado sobre os próximos cursos da CRIMAP"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-connection-blue text-white font-label-md font-semibold hover:opacity-90 transition-opacity"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    notifications_active
                  </span>
                  Quero ser avisado
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temas previstos */}
      <section className="w-full bg-surface-pure py-16 md:py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col gap-2 mb-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-energy-yellow font-label-md text-label-md font-semibold tracking-wider uppercase">
              <span className="material-symbols-outlined text-[16px]">
                lightbulb
              </span>
              Temas Previstos
            </div>
            <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">
              O que estamos preparando para&nbsp;você
            </h2>
            <p className="font-body-md text-body-md text-crimap-gray">
              Estes são alguns dos temas que a equipe CRIMAP está desenvolvendo.
              Datas e formatos serão divulgados em breve.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {upcomingTopics.map((topic) => (
              <div
                key={topic.title}
                className="p-6 rounded-2xl bg-canvas-clinical border border-soft-line flex gap-5"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-${topic.color}/10 flex items-center justify-center flex-shrink-0`}
                >
                  <span
                    className={`material-symbols-outlined text-[24px] text-${topic.color}`}
                  >
                    {topic.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep">
                    {topic.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-crimap-gray">
                    {topic.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-connection-blue font-medium mt-1">
                    <span className="material-symbols-outlined text-[14px]">
                      schedule
                    </span>
                    Data a confirmar
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edições anteriores */}
      <section className="w-full bg-canvas-clinical py-16 md:py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col gap-2 mb-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-crimap-gray font-label-md text-label-md font-semibold tracking-wider uppercase">
              <span className="material-symbols-outlined text-[16px]">
                history
              </span>
              Edições Anteriores
            </div>
            <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">
              Cursos já realizados
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {pastCourses.map((course) => (
              <div
                key={course.title}
                className="p-6 rounded-2xl bg-surface-pure border border-soft-line flex items-center gap-5"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-${course.color}/10 flex items-center justify-center flex-shrink-0`}
                >
                  <span
                    className={`material-symbols-outlined text-[24px] text-${course.color}`}
                  >
                    {course.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep">
                      {course.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-crimap-gray/10 font-label-sm text-label-sm text-crimap-gray">
                      {course.edition} &bull; {course.year}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-crimap-gray">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-br from-progress-green to-progress-green/85 py-16 md:py-20 px-5 md:px-6 lg:px-12">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center">
            <span className="material-symbols-outlined text-[32px] text-white">
              workspace_premium
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-white font-bold tracking-tight">
            Quer trazer um tema para a&nbsp;CRIMAP?
          </h2>
          <p className="font-body-lg text-body-lg text-white/85 max-w-xl">
            Se você é profissional de saúde ou educação e gostaria de propor
            uma parceria ou sugerir um tema, entre em contato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={whatsappHref(
                "Olá, tenho interesse em uma parceria/sugestão de curso na CRIMAP"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 h-14 inline-flex items-center justify-center rounded-xl bg-white text-progress-green font-label-md font-semibold hover:bg-white/95 transition-colors gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">
                chat
              </span>
              Falar com a CRIMAP
            </a>
            <Link
              href="/contato"
              className="px-8 h-14 inline-flex items-center justify-center rounded-xl border-2 border-white/40 text-white font-label-md font-semibold hover:bg-white/10 transition-colors gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">
                location_on
              </span>
              Ver localização
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
