import { InstitutBissaiSection } from "./sections/InstitutBissaiSection";
import { HospitalLaMamuSection } from "./sections/HospitalLaMamuSection";
import { SocagiSection } from "./sections/SocagiSection";
import { ORASection } from "./sections/ORASection";
import { NetworkProximity } from "./sections/NetworkProximity";
import { FooterSubsection } from "../Accueil/sections/FooterSubsection";
import { CallToActionSubsection } from "../Accueil/sections/CallToActionSubsection";
import { OurAgencySubsection } from "../Accueil/sections/OurAgencySubsection";
import { HeaderSubsection } from "../Accueil/sections/HeaderSubsection";
import { HeroSection } from "./sections/IntroductionBanner/IntroductionBanner";
import { FilialesTitleSection } from "./sections/FilialesTitleSection";
import { SEO } from "../../components/SEO";

export const Mission = (): JSX.Element => {
  return (
    <>
      <SEO
        title="RENAPROV - Microfinance de Confiance au Cameroun"
        description="RENAPROV FINANCE SA - Institution de microfinance au Cameroun. Services financiers accessibles, épargne, crédits, inclusion financière. Devenez propriétaire avec MASO, épargnez avec ORA."
        keywords="microfinance, Cameroun, épargne, crédit, inclusion financière, RENAPROV, MASO, ORA, compte courant, compte épargne, finance, Yaoundé, Douala"
      />
      <main className="flex flex-col w-full">
        <HeaderSubsection />
        <HeroSection />
        <NetworkProximity />
        <OurAgencySubsection />

        <FilialesTitleSection />
        <InstitutBissaiSection />
        <HospitalLaMamuSection />
        <SocagiSection />
        <ORASection />

        <CallToActionSubsection />
        <FooterSubsection />
      </main>
    </>
  );
};
