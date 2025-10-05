import { SEO } from "../../components/SEO";
import { AdvantagesSubsection } from "./sections/AdvantagesSubsection";
import { CallToActionSubsection } from "./sections/CallToActionSubsection";
import { ExperienceSubsection } from "./sections/ExperienceSubsection";
import { FooterSubsection } from "./sections/FooterSubsection";
import { HeaderSubsection } from "./sections/HeaderSubsection";
import { HeroSectionSubsection } from "./sections/HeroSectionSubsection";
import { NosFillialeSubsection } from "./sections/NosFillialeSubsection";
import { OurAgencySubsection } from "./sections/OurAgencySubsection";
import { OurSolutionSubsection } from "./sections/OurSolutionSubsection";
import { ProductSubsection } from "./sections/ProductSubsection";

export const Accueil = (): JSX.Element => {
  return (
    <>
      <SEO 
        title="RENAPROV - Microfinance de Confiance au Cameroun"
        description="RENAPROV FINANCE SA - Institution de microfinance au Cameroun. Services financiers accessibles, épargne, crédits, inclusion financière. Devenez propriétaire avec MASO, épargnez avec ORA."
        keywords="microfinance, Cameroun, épargne, crédit, inclusion financière, RENAPROV, MASO, ORA, compte courant, compte épargne, finance, Yaoundé, Douala"
      />
      <main className="flex flex-col w-full bg-[#ffffff]">
        <HeaderSubsection />
        <HeroSectionSubsection />
        <OurSolutionSubsection />
        <ExperienceSubsection />
        <ProductSubsection />
        <AdvantagesSubsection />
        <NosFillialeSubsection />
        <OurAgencySubsection />
        <CallToActionSubsection />
        <FooterSubsection />
      </main>
    </>
  );
};
