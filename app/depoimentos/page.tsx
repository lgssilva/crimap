import type { Metadata } from "next";
import { whatsappHref } from "@/lib/site-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Depoimentos — CRIMAP",
  description:
    "Histórias reais de famílias que encontraram na CRIMAP o cuidado, acolhimento e transformação que buscavam para seus filhos.",
};

const testimonials = [
  {
    name: "Amanda Antunes",
    initials: "AA",
    role: "Mãe do Eduardo",
    color: "connection-blue",
    featured: true,
    quote:
      "A CRIMAP não é apenas uma clínica de reabilitação, a CRIMAP é uma experiência de AMOR! Vínhamos de uma peregrinação exaustiva entre consultórios desconectados. Quando entramos no Downtown e vimos a equipe toda sentada, conversando sobre o mesmo objetivo para ele, sentimos um alívio que não tem preço. Hoje ele fala, brinca e tem autonomia nas coisas que antes pareciam impossíveis.",
    specialty: "Acompanhamento em Fonoaudiologia & Terapia Ocupacional",
  },
  {
    name: "Madonna Nash",
    initials: "MN",
    role: "Terapeuta Ocupacional (EUA)",
    color: "progress-green",
    featured: false,
    quote:
      "If I had a child with special needs, CRIMAP would be the center I would choose. The dedication of the entire team, the modern structure and the genuine care for each child's development is something truly rare.",
    specialty: "Profissional visitante internacional",
    note: "Depoimento original em inglês",
  },
  {
    name: "Fabiane Andrade",
    initials: "FA",
    role: "Mãe do Léo",
    color: "energy-yellow",
    featured: false,
    quote:
      "CRIMAP é uma clínica super moderna com estrutura maravilhosa para todo suporte adequado aos seus pacientes. O ambiente do Downtown é perfeito: sem barulho de trânsito, seguro para descer do carro e caminhar. As terapeutas têm um carinho inacreditável e o diálogo com a escola do Léo mudou completamente o rendimento dele.",
    specialty: "Psicopedagogia & Ludoterapia",
  },
  {
    name: "Bruna Saldanha",
    initials: "BS",
    role: "Mãe da Izabel",
    color: "vitality-rose",
    featured: true,
    quote:
      "Uma profissional nota 10 e uma pessoa ímpar em nossas vidas! A Kariny e toda a equipe nos acolheram de braços abertos desde o primeiro dia. Nos sentimos em casa. Relatórios extremamente completos que facilitaram o processo de reembolso no meu plano. Além do profissionalismo, o respeito pelo ritmo motor da minha filha nos deu paz de espírito.",
    specialty: "Fisioterapia Neurofuncional",
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-1.5 text-energy-yellow">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-[20px]"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function DepoimentosPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-br from-energy-yellow/5 via-canvas-clinical to-vitality-rose/5 py-16 md:py-24 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto">
          <div className="inline-flex items-center gap-2 text-energy-yellow font-label-md text-label-md font-semibold tracking-wider uppercase mb-4">
            <span className="material-symbols-outlined text-[16px]">
              rate_review
            </span>
            Depoimentos
          </div>
          <h1
            className="font-headline-xl text-headline-xl text-ink-deep font-bold tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            A voz das famílias que caminham&nbsp;conosco
          </h1>
          <p className="font-body-lg text-body-lg text-crimap-gray mt-4 max-w-2xl">
            Histórias reais de pais, mães e profissionais que viveram a
            transformação de perto — e escolheram compartilhar.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-surface-pure py-16 md:py-20 px-5 md:px-6 lg:px-12">
        <div className="max-w-[1360px] mx-auto flex flex-col gap-10">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`${
                t.featured
                  ? "p-8 md:p-10 rounded-3xl bg-canvas-clinical border border-soft-line shadow-sm"
                  : "p-7 md:p-8 rounded-2xl bg-canvas-clinical border border-soft-line"
              }`}
            >
              <div className="flex flex-col gap-5">
                {/* Stars */}
                <div className="flex items-center gap-3">
                  <StarRow />
                  {t.note && (
                    <span className="font-label-sm text-label-sm text-crimap-gray italic">
                      {t.note}
                    </span>
                  )}
                </div>

                {/* Quote */}
                <blockquote
                  className={`${
                    t.featured
                      ? "font-body-lg text-body-lg"
                      : "font-body-md text-body-md"
                  } text-ink-deep leading-relaxed italic`}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-soft-line">
                  <div
                    className={`w-12 h-12 rounded-full bg-${t.color}/15 text-${t.color} flex items-center justify-center font-headline-sm font-bold`}
                  >
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm font-bold text-ink-deep">
                      {t.name}
                    </span>
                    <span className="font-body-sm text-body-sm text-crimap-gray">
                      {t.role} &bull; {t.specialty}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof strip */}
      <section className="w-full bg-canvas-clinical py-12 px-5 md:px-6 lg:px-12 border-y border-soft-line">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col gap-1">
            <span className="font-headline-xl text-headline-xl font-bold text-connection-blue">
              +8 Anos
            </span>
            <span className="font-body-sm text-body-sm text-crimap-gray">
              De história e famílias&nbsp;acolhidas
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-headline-xl text-headline-xl font-bold text-progress-green">
              100%
            </span>
            <span className="font-body-sm text-body-sm text-crimap-gray">
              Equipe integrada com reunião semanal de&nbsp;caso
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-headline-xl text-headline-xl font-bold text-vitality-rose">
              Downtown
            </span>
            <span className="font-body-sm text-body-sm text-crimap-gray">
              Barra da Tijuca — estrutura moderna e&nbsp;acolhedora
            </span>
          </div>
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
            Sua família também pode viver essa&nbsp;transformação
          </h2>
          <p className="font-body-lg text-body-lg text-white/85 max-w-xl">
            Converse com a CRIMAP e descubra como podemos ajudar no
            desenvolvimento do seu filho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={whatsappHref(
                "Olá, vi os depoimentos e gostaria de saber mais sobre a CRIMAP"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 h-14 inline-flex items-center justify-center rounded-xl bg-white text-energy-yellow font-label-md font-semibold hover:bg-white/95 transition-colors gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">
                chat
              </span>
              Conversar pelo WhatsApp
            </a>
            <Link
              href="/especialidades"
              className="px-8 h-14 inline-flex items-center justify-center rounded-xl border-2 border-white/40 text-white font-label-md font-semibold hover:bg-white/10 transition-colors gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">
                medical_services
              </span>
              Ver especialidades
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
