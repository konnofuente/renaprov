import { HeroSection } from "./sections/HeroSection";
import { StatsSection } from "./sections/StatsSection";
import { TimelineSection } from "./sections/TimelineSection";
import { MessageSection } from "./sections/MessageSection";
import { ValuesSection } from "./sections/ValuesSection";
import { TeamSection } from "./sections/TeamSection";
import { SEO } from "../../components/SEO";
import { FooterSubsection } from "../Accueil/sections/FooterSubsection";
import { CallToActionSubsection } from "../Accueil/sections/CallToActionSubsection";
import { OurAgencySubsection } from "../Accueil/sections/OurAgencySubsection";
import { HeaderSubsection } from "../Accueil/sections/HeaderSubsection";

export const AboutHistory = (): JSX.Element => {
  return (
    <>
      <SEO
        title="RENAPROV - Microfinance de Confiance au Cameroun"
        description="RENAPROV FINANCE SA - Institution de microfinance au Cameroun. Services financiers accessibles, épargne, crédits, inclusion financière. Devenez propriétaire avec MASO, épargnez avec ORA."
        keywords="microfinance, Cameroun, épargne, crédit, inclusion financière, RENAPROV, MASO, ORA, compte courant, compte épargne, finance, Yaoundé, Douala"
      />
      <main className="flex flex-col w-full relative overflow-hidden">
        <HeaderSubsection />
        <HeroSection />
        <StatsSection />
        <TimelineSection />
        <MessageSection />
        <ValuesSection />
        <TeamSection />
        <OurAgencySubsection />
        <CallToActionSubsection />
        <FooterSubsection />
      </main>
    </>
  );
};
