import type { Metadata } from "next";
import { whatsappHref } from "@/lib/site-config";
import { AI_IMAGES } from "@/lib/ai-images";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nossa Equipe | CRIMAP",
  description:
    "Conheça os profissionais da CRIMAP: uma equipe multidisciplinar especializada em reabilitação infantil na Barra da Tijuca.",
};

const team = [
  {
    name: "Kariny Peixoto",
    role: "Fundadora & Diretora Clínica",
    specialty: "Gestão Clínica",
    bio: "Mãe de Manuel Arthur e idealizadora da CRIMAP. Transformou sua jornada pessoal em uma missão de acolhimento para centenas de famílias.",
    color: "vitality-rose",
    icon: "favorite",
    photo: "/brand/kariny.webp",
  },
  {
    name: "Dra. Profissional",
    role: "Fisioterapeuta",
    specialty: "Fisioterapia Neurofuncional Pediátrica",
    bio: "Especialista em desenvolvimento motor infantil com experiência em Bobath e Therasuit. Foco em estimulação precoce e reabilitação neuromotora.",
    color: "progress-green",
    icon: "sprint",
    photo: null,
  },
  {
    name: "Dra. Profissional",
    role: "Fonoaudióloga",
    specialty: "Fonoaudiologia Pediátrica",
    bio: "Especialista em linguagem infantil e comunicação alternativa. Atua com crianças desde os primeiros meses de vida.",
    color: "connection-blue",
    icon: "record_voice_over",
    photo: null,
  },
  {
    name: "Dra. Profissional",
    role: "Terapeuta Ocupacional",
    specialty: "Integração Sensorial de Ayres",
    bio: "Certificada em Integração Sensorial. Ajuda crianças a conquistarem autonomia nas atividades diárias através do brincar terapêutico.",
    color: "energy-yellow",
    icon: "toys",
    photo: null,
  },
  {
    name: "Dra. Profissional",
    role: "Psicóloga Infantil",
    specialty: "Ludoterapia & Neuropsicologia",
    bio: "Especialista em ludoterapia e avaliação neuropsicológica infantil. Suporte emocional para crianças e orientação para famílias.",
    color: "vitality-rose",
    icon: "psychology",
    photo: null,
  },
  {
    name: "Dra. Profissional",
    role: "Psicopedagoga",
    specialty: "Psicopedagogia Clínica",
    bio: "Especialista em dificuldades de aprendizagem, avaliação diagnóstica e intervenção com estratégias lúdicas e concretas.",
    color: "connection-blue",
    icon: "menu_book",
    photo: null,
  },
];

export default function EquipePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full py-20 md:py-28 px-5 md:px-6 lg:px-12 border-b border-soft-line overflow-hidden">
        <img
          src={AI_IMAGES.speechTherapy}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/85 via-ink-deep/70 to-ink-deep/50" />
        <div className="relative z-10 max-w-[1360px] mx-auto">
          <div className="inline-flex items-center gap-2 text-energy-yellow font-label-md text-label-md font-semibold tracking-wider uppercase mb-4">
            <span className="material-symbols-outlined text-[16px]">groups</span>
            Nossa Equipe
          </div>
          <h1 className="font-headline-xl text-headline-xl text-white font-bold tracking-tight max-w-3xl" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Profissionais que cuidam com ciência e&nbsp;coração
          </h1>
          <p className="font-body-lg text-body-lg text-white/80 mt-4 max-w-2xl">
            Uma equipe multidisciplinar que trabalha de forma integrada — porque cada criança
            merece um time inteiro torcendo pelo seu&nbsp;progresso.
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="w-full bg-surface-pure py-12 md:py-16 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "groups", title: "Reuniões semanais", desc: "A equipe se reúne para alinhar o plano de cada criança, compartilhando conquistas e ajustando estratégias.", color: "connection-blue" },
            { icon: "assignment", title: "Plano individualizado", desc: "Cada criança tem um plano único, construído por todos os terapeutas envolvidos no seu cuidado.", color: "progress-green" },
            { icon: "family_restroom", title: "Parceria com a família", desc: "Pais participam ativamente: recebem orientações, acompanham evoluções e celebram cada conquista.", color: "vitality-rose" },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-canvas-clinical border border-soft-line">
              <div className={`w-11 h-11 rounded-xl bg-${item.color}/10 flex items-center justify-center flex-shrink-0`}>
                <span className={`material-symbols-outlined text-[22px] text-${item.color}`}>{item.icon}</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep mb-1">{item.title}</h3>
                <p className="font-body-sm text-body-sm text-crimap-gray">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team grid */}
      <section className="w-full bg-canvas-clinical py-16 md:py-20 px-5 md:px-6 lg:px-12 border-b border-soft-line">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name + member.role} className="group rounded-2xl bg-surface-pure border border-soft-line overflow-hidden hover:shadow-md transition-shadow duration-300">
                {/* Photo area */}
                <div className={`aspect-[4/3] bg-gradient-to-br from-${member.color}/10 to-${member.color}/5 flex items-center justify-center overflow-hidden`}>
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center">
                      <div className={`w-20 h-20 mx-auto rounded-full bg-${member.color}/15 flex items-center justify-center mb-3`}>
                        <span className={`material-symbols-outlined text-[40px] text-${member.color}`}>{member.icon}</span>
                      </div>
                      <span className="font-label-md text-label-md text-crimap-gray/60 font-medium">Foto em breve</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-${member.color}/8 text-${member.color} font-label-md text-label-md font-medium mb-3`}>
                    <span className={`material-symbols-outlined text-[12px]`}>{member.icon}</span>
                    {member.specialty}
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-ink-deep">{member.name}</h3>
                  <p className="font-label-md text-label-md text-crimap-gray font-medium mt-0.5">{member.role}</p>
                  <p className="font-body-sm text-body-sm text-crimap-gray mt-3 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder note */}
          <div className="mt-10 p-5 rounded-2xl bg-energy-yellow/8 border border-energy-yellow/20 flex items-start gap-3">
            <span className="material-symbols-outlined text-[20px] text-energy-yellow mt-0.5">info</span>
            <p className="font-body-sm text-body-sm text-crimap-gray">
              <strong className="text-ink-deep">Em construção:</strong> Nomes e fotos reais dos profissionais serão adicionados
              em breve. Cada membro da equipe CRIMAP é selecionado pela competência técnica e pela capacidade
              de criar conexão genuína com crianças e&nbsp;famílias.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-br from-connection-blue to-connection-blue/90 py-16 md:py-20 px-5 md:px-6 lg:px-12">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-headline-xl text-headline-xl text-white font-bold tracking-tight">
            Quer conversar com nossa&nbsp;equipe?
          </h2>
          <p className="font-body-lg text-body-lg text-white/85 max-w-xl">
            Entre em contato e tire suas dúvidas sobre nossos serviços e como podemos ajudar seu filho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappHref("Olá, gostaria de conversar com a equipe da CRIMAP")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 h-14 inline-flex items-center justify-center rounded-xl bg-white text-connection-blue font-label-md font-semibold hover:bg-white/95 transition-colors gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              Falar pelo WhatsApp
            </a>
            <Link
              href="/contato"
              className="px-8 h-14 inline-flex items-center justify-center rounded-xl border-2 border-white/40 text-white font-label-md font-semibold hover:bg-white/10 transition-colors gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">location_on</span>
              Ver localização
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
