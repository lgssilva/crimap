# Instrução para Claude Code — CRIMAP: do HTML para Next.js

## Contexto

O repositório `lgssilva/crimap` contém um `index.html` com a home da CRIMAP, uma clínica de reabilitação infantil na Barra da Tijuca, RJ. Esse HTML foi gerado pelo Google Stitch e ajustado manualmente. Funciona como protótipo visual aprovado pelo cliente, mas tem problemas sérios no mobile e precisa virar um projeto Next.js de produção.

## O que fazer

### Fase 1: Setup do projeto Next.js

1. Leia o repositório atual (tem só o `index.html` e um README)
2. Inicialize um projeto **Next.js com App Router, TypeScript e Tailwind CSS**
3. Mova o `index.html` para uma pasta `_reference/` como documentação visual (não apague)
4. Configure as fontes **Outfit** (headings) e **Manrope** (body) via `next/font`
5. Copie o logotipo SVG da CRIMAP para `public/brand/crimap.svg`
6. Crie o arquivo `lib/site-config.ts` com dados centralizados (telefone, email, endereço, WhatsApp, Instagram) marcados como `requiresValidation: true`

### Fase 2: Componentização

Converta o HTML em componentes React seguindo esta estrutura:

```
components/
  site/
    site-header.tsx
    mobile-drawer.tsx
    hero.tsx
    trust-strip.tsx
    needs-section.tsx
    therapies-section.tsx
    care-journey.tsx
    origin-story.tsx
    testimonials-section.tsx
    structure-section.tsx
    location-section.tsx
    information-board.tsx
    instagram-section.tsx
    final-cta.tsx
    site-footer.tsx
content/
  site-content.ts    (todos os textos centralizados)
```

Mantenha a maior parte como Server Components. Use Client Components só para: menu mobile, animações com interação, depoimentos com scroll.

### Fase 3: Correções mobile (URGENTE)

O HTML atual tem estes problemas no mobile que precisam ser resolvidos:

1. **Scroll horizontal** — o site mexe pro lado no mobile. Garantir `overflow-x: hidden` e que nenhum elemento vaze
2. **Botões CTA do hero** — "Agendar Acolhimento" e "Como funciona a 1ª consulta" estão com tamanhos diferentes. No mobile, ambos devem ser full-width, mesma altura, empilhados
3. **Seção de stats** (+8 Anos, 100% Integrada, Centrado na Família) — no mobile, empilhar verticalmente com título bold à esquerda e texto à direita, em linha
4. **Ícone no vídeo** — o badge com ícone da CRIMAP sobre o vídeo não funciona no mobile. Esconder em telas < 640px
5. **"Cuidado transdisciplinar estruturado"** — o título está cortando no mobile. Garantir `overflow-wrap: break-word` e tamanho responsivo
6. **Badges de categoria** (ex: "Emocional & Comportamento") — muito grandes no mobile, reduzir
7. **Seções "Acesso com Valet" e "Espaço Família"** — layout quebrado no mobile, precisa de redesign responsivo
8. **Menu mobile** — já tem drawer implementado, mas verificar se funciona bem (foco, Escape, clique fora)

### Fase 4: Aplicar Apple Design Skills

Use as skills `/apple-design`, `/transitions-dev` e `/transitions-polish` para:

**Animações de entrada (scroll reveal):**
- Usar springs, não ease-in/ease-out genérico
- Damping 1.0 (critically damped) para elementos de conteúdo
- Response entre 0.3 e 0.4
- Respeitar `prefers-reduced-motion` (trocar por cross-fade)

**Hover states:**
- Feedback no pointer-down, não no release
- Cards de terapia e trust strip: lift suave com spring
- Botões: scale(0.97) no active, instantâneo

**Transições do header:**
- Header transparente → sólido no scroll: usar transição suave de backdrop-filter e background
- Material translúcido estilo Apple: `backdrop-filter: blur(20px) saturate(180%)`

**Depoimentos:**
- Scroll horizontal com momentum projection
- Snap suave com spring, não snap rígido
- Rubber-banding nas bordas

**Menu mobile:**
- Entrada com spring (damping 0.9, response 0.35)
- Saída mais rápida que entrada
- Dimming scrim no fundo
- Fechar por Escape, clique fora, ou botão

**Geral:**
- Nunca travar input durante animação
- Animar só transform e opacity (compositor-friendly)
- Nada de ease-in para entradas (usar ease-out ou spring)
- Tipografia: tracking negativo em headings grandes, positivo em texto pequeno

### Fase 5: SEO e metadata

- `lang="pt-BR"`
- Title: `Clínica Multidisciplinar para Crianças e Jovens | CRIMAP`
- Meta description otimizada
- JSON-LD `MedicalClinic` com dados confirmados apenas
- `robots.ts` e `sitemap.ts`
- Open Graph metadata
- Exatamente um H1

### Fase 6: Testes e build

Rodar e mostrar output real de:
```bash
npm run lint
npm run build
```

Verificar visualmente em 390×844 (iPhone), 768×1024 (iPad) e 1440×900 (desktop).

## Design System de referência

O arquivo `_reference/DESIGN.md` (se existir no repo) contém o design system gerado pelo Google Stitch. Usar como referência para tokens de cor, tipografia e spacing, mas **não copiar cegamente** — adaptar ao que faz sentido no Tailwind/Next.js.

Paleta oficial da marca:
- Azul: `#0070B8` (CTA principal, links, foco)
- Amarelo: `#FCB415` (marcadores editoriais)
- Rosa: `#EC174C` (marcadores editoriais)
- Verde: `#68BC49` (marcadores editoriais)
- Cinza texto: `#5E6168`

## Regras invioláveis

- Não inventar dados (telefone, endereço, horários, avaliações)
- Não usar fotos como se fossem da clínica real (são stock temporárias)
- Não redesenhar o logotipo
- Não usar emojis como ícones
- Não criar carrossel automático
- Não usar ease-in para animações de entrada
- Mobile é prioridade, não redução do desktop
- Cada seção deve ter layout visualmente distinto das outras

## Forma de entrega

1. Manter `npm run dev` rodando pra eu ver
2. Mostrar resultado em desktop e mobile
3. Não fazer push sem eu pedir
