export type ContactField = {
  value: string;
  requiresValidation: boolean;
};

export const siteConfig = {
  name: "CRIMAP",
  legalName: "Clínica de Reabilitação Integrada Manuel Arthur Peixoto",
  tagline: "Clínica multidisciplinar para crianças e jovens na Barra da Tijuca",
  locale: "pt-BR",
  url: "https://crimap.com.br",
  instagram: {
    handle: "@crimaprj",
    href: "https://www.instagram.com/crimaprj/",
    requiresValidation: false as const,
  },
  whatsapp: {
    value: "(21) 99096-2742",
    e164: "5521990962742",
    display: "(21) 99096-2742",
    href: "https://wa.me/5521990962742",
    requiresValidation: false,
  } satisfies ContactField & { e164: string; display: string; href: string },
  email: {
    value: "crimap@crimap.com.br",
    requiresValidation: false,
  } satisfies ContactField,
  hours: "Seg a Sex, 8h às 18h",
  address: {
    street: "Av. das Américas, 500",
    complement: "Bloco 8, Sala 301",
    neighborhood: "Downtown Barra da Tijuca",
    city: "Rio de Janeiro",
    state: "RJ",
    mapsHref:
      "https://maps.google.com/?q=Shopping+Downtown+Barra+da+Tijuca",
    requiresValidation: false,
  },
  googleReview: {
    href: "https://g.page/r/CRIMAP/review",
    requiresValidation: true,
  },
  founder: {
    name: "Kariny Peixoto",
    role: "Fundadora, mãe de Manuel Arthur e diretora clínica",
  },
} as const;

export function whatsappHref(text?: string) {
  if (!text) return siteConfig.whatsapp.href;
  return `${siteConfig.whatsapp.href}?text=${encodeURIComponent(text)}`;
}
