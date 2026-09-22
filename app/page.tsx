import { BenefitsSection } from "@/components/site/benefits-section";
import { CareJourney } from "@/components/site/care-journey";
import { Hero } from "@/components/site/hero";
import { InformationBoard } from "@/components/site/information-board";
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
      <main className="w-full pt-20 bg-canvas-clinical">
        <div className="flex flex-col w-full">
          <Hero />
          <TrustStrip />
          <NeedsSection />
          <TherapiesSection />
          <CareJourney />
          <BenefitsSection />
          <OriginStory />
          <TestimonialsSection />
          <StructureSection />
          <InformationBoard />
          <LocationSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
