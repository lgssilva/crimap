import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const html = fs.readFileSync(path.join(root, "_reference/index.html"), "utf8");

function htmlToJsx(input) {
  let html = input;
  html = html.replace(/<!--([\s\S]*?)-->/g, (_, c) => `{/*${c.replace(/\*\//g, "* /")}*/}`);
  html = html.replace(/<script>document\.write\(new Date\(\)\.getFullYear\(\)\)<\/script>/g, `{new Date().getFullYear()}`);
  html = html.replace(/src="data:image\/webp;base64,[^"]+"/g, `src="/brand/kariny.webp"`);

  html = html.replace(/\sclass=/g, " className=");
  html = html.replace(/\sfor=/g, " htmlFor=");
  html = html.replace(/\stabindex=/g, " tabIndex=");
  html = html.replace(/\sxmlns:xlink=/g, " xmlnsXlink=");
  html = html.replace(/\sxml:space=/g, " xmlSpace=");
  html = html.replace(/\sstroke-width=/g, " strokeWidth=");
  html = html.replace(/\sstroke-linecap=/g, " strokeLinecap=");
  html = html.replace(/\sstroke-linejoin=/g, " strokeLinejoin=");
  html = html.replace(/\sstroke-miterlimit=/g, " strokeMiterlimit=");
  html = html.replace(/\sfill-rule=/g, " fillRule=");
  html = html.replace(/\sclip-rule=/g, " clipRule=");
  html = html.replace(/\sclip-path=/g, " clipPath=");
  html = html.replace(/\sstop-color=/g, " stopColor=");
  html = html.replace(/\sstop-opacity=/g, " stopOpacity=");
  html = html.replace(/\sfont-family=/g, " fontFamily=");
  html = html.replace(/\sfont-size=/g, " fontSize=");
  html = html.replace(/\sfont-weight=/g, " fontWeight=");
  html = html.replace(/\stext-anchor=/g, " textAnchor=");
  html = html.replace(/\senable-background=/g, " enableBackground=");
  html = html.replace(/\sxlink:href=/g, " xlinkHref=");

  html = html.replace(/\sonclick="([^"]*)"/g, (_, js) => {
    const escaped = js.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
    return ` onClick={() => { ${escaped} }}`;
  });

  html = html.replace(/\s(muted|loop|autoplay|playsinline|checked|disabled|required|selected|readonly|controls)=""/gi, " $1");
  html = html.replace(/\sautoplay\b/g, " autoPlay");
  html = html.replace(/\splaysinline\b/g, " playsInline");
  html = html.replace(/\sreadonly\b/g, " readOnly");

  html = html.replace(/<(img|input|br|hr|source|col|embed|area|base|link|meta)(\s[^>]*?)?(?<!\/)>/gi, "<$1$2 />");

  html = html.replace(/style="([^"]*)"/g, (_, css) => {
    const obj = css
      .split(";")
      .map((p) => p.trim())
      .filter(Boolean)
      .map((pair) => {
        const idx = pair.indexOf(":");
        const k = pair.slice(0, idx).trim();
        const v = pair.slice(idx + 1).trim();
        const camel = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        return `${camel}: ${JSON.stringify(v)}`;
      });
    return `style={{ ${obj.join(", ")} }}`;
  });

  return html.trim();
}

function wrap(name, jsx, client = false) {
  const dir = client ? `"use client";\n\n` : "";
  return `${dir}export function ${name}() {\n  return (\n    <>\n${jsx.replace(/^/gm, "      ")}\n    </>\n  );\n}\n`;
}

const bodyStart = html.indexOf(">", html.indexOf("<body")) + 1;
const bodyEnd = html.indexOf("</body>");
const body = html.slice(bodyStart, bodyEnd);

const headerEnd = body.indexOf("</header>") + "</header>".length;
const headerHtml = body.slice(0, headerEnd);
const afterHeader = body.slice(headerEnd);

const mainStart = afterHeader.indexOf("<main");
const drawerHtml = afterHeader.slice(0, mainStart);
const mainOpenEnd = afterHeader.indexOf(">", afterHeader.indexOf("<div class=\"flex flex-col w-full\"")) + 1;
const footerStart = afterHeader.indexOf("<footer");
const inner = afterHeader.slice(mainOpenEnd, afterHeader.indexOf("</div></main>"));
const footerHtml = afterHeader.slice(footerStart, afterHeader.indexOf("</footer>") + "</footer>".length);

const markers = [
  ["Hero", "<!-- 1. Top Utility", "<!-- 3. Quick Trust"],
  ["TrustStrip", "<!-- 3. Quick Trust", "<!-- 4. Needs First"],
  ["NeedsSection", "<!-- 4. Needs First", "<!-- 5. Specialized"],
  ["TherapiesSection", "<!-- 5. Specialized", "<!-- 6. 'O Que Esperar"],
  ["CareJourney", "<!-- 6. 'O Que Esperar", "<!-- 7. 'Benefícios"],
  ["BenefitsSection", "<!-- 7. 'Benefícios", "<!-- 8. Fundadora"],
  ["OriginStory", "<!-- 8. Fundadora", "<!-- 9. Depoimentos"],
  ["TestimonialsSection", "<!-- 9. Depoimentos", "<!-- 10. Estrutura"],
  ["StructureSection", "<!-- 10. Estrutura", "<!-- 11. Formulário"],
  ["InformationBoard", "<!-- 11. Formulário", "<!-- 12. Interactive"],
  ["LocationSection", "<!-- 12. Interactive", null],
];

const outDir = path.join(root, "components/site");
fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(
  path.join(outDir, "site-header.tsx"),
  wrap("SiteHeader", htmlToJsx(headerHtml), true),
);
fs.writeFileSync(
  path.join(outDir, "mobile-drawer.tsx"),
  wrap("MobileDrawer", htmlToJsx(drawerHtml), true),
);
fs.writeFileSync(
  path.join(outDir, "site-footer.tsx"),
  wrap("SiteFooter", htmlToJsx(footerHtml), false),
);

for (const [name, start, end] of markers) {
  const i = inner.indexOf(start);
  const j = end ? inner.indexOf(end) : inner.length;
  if (i < 0) throw new Error(`Missing marker ${start}`);
  const chunk = inner.slice(i, j);
  fs.writeFileSync(path.join(outDir, toFile(name)), wrap(name, htmlToJsx(chunk), false));
}

function toFile(name) {
  return (
    name
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .toLowerCase() + ".tsx"
  );
}

console.log("wrote components");
