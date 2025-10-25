import { HeroSection } from "./sections/HeroSection";
import { StatsSection } from "./sections/StatsSection";
import { TimelineSection } from "./sections/TimelineSection";
import { MessageSection } from "./sections/MessageSection";
import { TeamSection } from "./sections/TeamSection";
import { SEO } from "../../components/SEO";
import { CallToActionSubsection } from "../Accueil/sections/CallToActionSubsection";
import { OurAgencySubsection } from "../Accueil/sections/OurAgencySubsection";
import { MapSection } from "./sections/MapSection";
import { TestimonialSection } from "../../components/TestimonialSection";

export const AboutHistory = (): JSX.Element => {
  return (
    <>
      <SEO
        title="RENAPROV - Microfinance de Confiance au Cameroun"
        description="RENAPROV FINANCE SA - Institution de microfinance au Cameroun. Services financiers accessibles, épargne, crédits, inclusion financière. Devenez propriétaire avec MASO, épargnez avec ORA."
        keywords="microfinance, Cameroun, épargne, crédit, inclusion financière, RENAPROV, MASO, ORA, compte courant, compte épargne, finance, Yaoundé, Douala"
      />
      <main className="flex flex-col w-full relative overflow-hidden">
        <HeroSection />
        <StatsSection />
        <TimelineSection />
        <MessageSection />
        <MapSection />
        <TeamSection />
        <TestimonialSection />
        <OurAgencySubsection />
        <CallToActionSubsection />
      </main>
    </>
  );
};
