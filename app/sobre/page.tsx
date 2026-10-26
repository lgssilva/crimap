import type { Metadata } from "next";
import { AI_IMAGES } from "@/lib/ai-images";
import { whatsappHref } from "@/lib/site-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nós — CRIMAP",
  description:
    "Conheça a história da CRIMAP, fundada por Kariny Peixoto — mãe de Manuel Arthur — e nossa missão de transformar vidas através da reabilitação com afeto.",
};

const milestones = [
  { year: "2016", label: "Fundação da CRIMAP", description: "Kariny transforma sua experiência como mãe em missão: criar um espaço que acolhesse famílias como a dela." },
  { year: "2018", label: "Equipe multidisciplinar", description: "Formação da equipe integrada com fisioterapeutas, fonoaudiólogos, terapeutas ocupacionais e psicólogos." },
  { year: "2020", label: "Expansão do espaço", description: "Ampliação das salas terapêuticas e construção do circuito sensorial exclusivo." },
  { year: "2023", label: "Referência na Barra", description: "Reconhecida como referência em reabilitação infantil no Downtown Barra da Tijuca." },
];

const values = [
  { icon: "favorite", title: "Acolhimento", description: "Cada família é recebida como única. Ouvimos, entendemos e caminhamos juntos.", color: "vitality-rose" },
  { icon: "groups", title: "Integração", description: "Terapeutas trabalham em equipe, compartilhando estratégias e objetivos.", color: "connection-blue" },
  { icon: "trending_up", title: "Evidência", description: "Práticas baseadas em ciência, atualizadas e medidas por resultados reais.", color: "progress-green" },
  { icon: "child_care", title: "Humanização", description: "O brincar é a linguagem. A criança é protagonista do próprio progresso.", color: "energy-yellow" },
];

export default function SobrePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero banner */}
      <section className="relative w-full py-20 md:py-28 px-5 md:px-6 lg:px-12 border-b border-soft-line overflow-hidden">
        <img
          src={AI_IMAGES.handHolding}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/85 via-ink-deep/70 to-ink-deep/50" />
        <div className="relative z-10 max-w-[1360px] mx-auto">
          <div className="inline-flex items-center gap-2 text-energy-yellow font-label-md text-label-md font-semibold tracking-wider uppercase mb-4">
            <span className="material-symbols-outlined text-[16px]">info</span>
            Sobre a CRIMAP
          </div>
          <h1 className="font-headline-xl text-headline-xl text-white font-bold tracking-tight max-w-3xl" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Uma mãe que transformou dor em&nbsp;missão
          </h1>
          <p className="font-body-lg text-body-lg text-white/80 mt-4 max-w-2xl">
            A CRIMAP nasceu do coração de uma mãe que entendeu, na própria pele, o que é buscar ajuda
            para o desenvolvimento do filho — e decidiu criar o lugar que gostaria de ter encontrado.
          </p>
        </div>
      </section>

      {/* Origin Story — expanded */}
      <section className="w-full bg-surface-pure py-16 md:py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/brand/kariny.webp"
                alt="Kariny Peixoto, fundadora da CRIMAP, com seu filho Manuel Arthur"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-energy-yellow/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-connection-blue/10 -z-10" />
          </div>

          {/* Narrative */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-vitality-rose font-label-md text-label-md font-semibold tracking-wider uppercase">
              <span className="material-symbols-outlined text-[16px]">auto_stories</span>
              Origem &amp; Propósito
            </div>
            <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">
              Quando o amor de mãe vira ciência&nbsp;aplicada
            </h2>
            <p className="font-body-lg text-body-lg text-crimap-gray leading-relaxed">
              Quando Manuel Arthur nasceu, Kariny Peixoto descobriu que o caminho da reabilitação
              infantil exigia mais do que tratamento — exigia acolhimento. Peregrinando entre clínicas
              frias e filas de espera intermináveis, ela sentiu na pele o desamparo de pais que só
              querem o melhor para seus filhos.
            </p>
            <p className="font-body-lg text-body-lg text-crimap-gray leading-relaxed">
              Em 2016, Kariny decidiu transformar essa dor em propósito. Fundou a CRIMAP — Clínica de
              Reabilitação Integrada Manuel Arthur Peixoto — nomeada em homenagem ao filho que inspira
              cada decisão. O objetivo: criar um espaço onde ciência e afeto se encontram, e onde
              cada criança é vista pelo seu potencial, não pela limitação.
            </p>
            <p className="font-body-lg text-body-lg text-crimap-gray leading-relaxed">
              Hoje a CRIMAP é referência em reabilitação infantil na Barra da Tijuca, com uma equipe
              multidisciplinar que trabalha de forma integrada — porque o desenvolvimento de uma criança
              não pode ser tratado em&nbsp;pedaços.
            </p>
            <blockquote className="border-l-4 border-vitality-rose pl-5 py-2 italic text-ink-deep font-body-lg text-body-lg">
              &ldquo;Eu queria que cada mãe sentisse o que eu senti quando finalmente encontrei um
              lugar que olhava pro meu filho com amor e competência ao mesmo tempo.&rdquo;
              <span className="block text-crimap-gray text-sm mt-2 not-italic font-semibold">— Kariny Peixoto, Fundadora</span>
            </blockquote>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-connection-blue/8 text-connection-blue font-label-md text-label-md font-medium">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                Desde 2016
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-progress-green/8 text-progress-green font-label-md text-label-md font-medium">
                <span className="material-symbols-outlined text-[14px]">groups</span>
                Equipe Multidisciplinar
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-vitality-rose/8 text-vitality-rose font-label-md text-label-md font-medium">
                <span className="material-symbols-outlined text-[14px]">favorite</span>
                Reabilitação com Afeto
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="w-full bg-canvas-clinical py-16 md:py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col gap-2 mb-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-progress-green font-label-md text-label-md font-semibold tracking-wider uppercase">
              <span className="material-symbols-outlined text-[16px]">diamond</span>
              Nossos Valores
            </div>
            <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">
              O que guia cada decisão na&nbsp;CRIMAP
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-surface-pure border border-soft-line">
                <div className={`w-12 h-12 rounded-xl bg-${v.color}/10 flex items-center justify-center mb-4`}>
                  <span className={`material-symbols-outlined text-[24px] text-${v.color}`}>{v.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep mb-2">{v.title}</h3>
                <p className="font-body-sm text-body-sm text-crimap-gray">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full bg-surface-pure py-16 md:py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col gap-2 mb-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-energy-yellow font-label-md text-label-md font-semibold tracking-wider uppercase">
              <span className="material-symbols-outlined text-[16px]">timeline</span>
              Nossa Trajetória
            </div>
            <h2 className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight">
              Marcos que construíram a&nbsp;CRIMAP
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative p-6 rounded-2xl bg-canvas-clinical border border-soft-line">
                <div className="text-3xl font-bold text-connection-blue/20 font-headline-xl mb-3">{m.year}</div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep mb-2">{m.label}</h3>
                <p className="font-body-sm text-body-sm text-crimap-gray">{m.description}</p>
                {i < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-soft-line" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery strip */}
      <section className="w-full bg-canvas-clinical py-12 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={AI_IMAGES.sensorySwing} alt="Criança no balanço sensorial" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={AI_IMAGES.speechTherapy} alt="Sessão de fonoaudiologia" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={AI_IMAGES.teamMeeting} alt="Reunião da equipe multidisciplinar" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={AI_IMAGES.handHolding} alt="Terapeuta e criança caminhando juntos" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-br from-vitality-rose to-vitality-rose/85 py-16 md:py-20 px-5 md:px-6 lg:px-12">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-headline-xl text-headline-xl text-white font-bold tracking-tight">
            Quer conhecer nosso espaço de&nbsp;perto?
          </h2>
          <p className="font-body-lg text-body-lg text-white/85 max-w-xl">
            Agende uma visita e veja como a CRIMAP pode fazer parte da jornada do seu filho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappHref("Olá, gostaria de conhecer a CRIMAP")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 h-14 inline-flex items-center justify-center rounded-xl bg-white text-vitality-rose font-label-md font-semibold hover:bg-white/95 transition-colors gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              Falar com a CRIMAP
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
