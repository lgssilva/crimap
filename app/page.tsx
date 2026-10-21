import { AI_IMAGES } from "@/lib/ai-images";
import { BenefitsSection } from "@/components/site/benefits-section";
import { CareJourney } from "@/components/site/care-journey";
import { EmotionalDivider } from "@/components/site/emotional-divider";
import { EmotionalGallery } from "@/components/site/emotional-gallery";
import { Hero } from "@/components/site/hero";
import { InformationBoard } from "@/components/site/information-board";
import { InstagramFeed } from "@/components/site/instagram-feed";
import { LocationSection } from "@/components/site/location-section";
import { MobileDrawer } from "@/components/site/mobile-drawer";
import { NeedsSection } from "@/components/site/needs-section";
import { OriginStory } from "@/components/site/origin-story";
import { SiteEffects } from "@/components/site/site-effects";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { StructureSection } from "@/components/site/structure-section";
import { TestimonialsSection } from "@/components/site/testimonials-section";
import { TherapiesSection } from "@/components/site/therapies-section";
import { TrustStrip } from "@/components/site/trust-strip";

export default function HomePage() {
  return (
    <>
      <SiteEffects />
      <SiteHeader />
      <MobileDrawer />
      <main className="w-full pt-20 bg-canvas-clinical overflow-x-hidden">
        <div className="flex flex-col w-full">
          <Hero />
          <TrustStrip />
          <NeedsSection />

          {/* Emotional divider — transition from concerns to solutions */}
          <EmotionalDivider
            imageSrc={AI_IMAGES.sensoryWalk}
            imageAlt="Terapeuta ajudando criança a caminhar em tapete sensorial na CRIMAP"
            quote="Cada pequeno passo do seu filho é uma grande conquista que celebramos juntos"
            overlayColor="from-connection-blue/80 to-ink-deep/70"
          />

          <TherapiesSection />
          <CareJourney />

          {/* Photo gallery — visual storytelling between journey and benefits */}
          <EmotionalGallery />

          <BenefitsSection />

          {/* Emotional divider — transition to Kariny's story */}
          <EmotionalDivider
            imageSrc={AI_IMAGES.motherChild}
            imageAlt="Mãe abraçando filho com emoção após sessão de terapia"
            quote="O maior presente é ver seu filho brilhar com as próprias conquistas"
            attribution="Para todas as famílias da CRIMAP"
            overlayColor="from-vitality-rose/70 to-ink-deep/60"
          />

          <OriginStory />
          <TestimonialsSection />
          <StructureSection />
          <InstagramFeed />
          <InformationBoard />
          <LocationSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
