import { SEO } from "../../components/SEO";
import { HeaderSubsection } from "../Accueil/sections/HeaderSubsection";
import { FooterSubsection } from "../Accueil/sections/FooterSubsection";
import { CallToActionSubsection } from "../Accueil/sections/CallToActionSubsection";
import { MasoHeroSection } from "./sections/MasoHeroSection";
import { MasoSolidaritySection } from "./sections/MasoSolidaritySection";
import { MasoPrizesSection } from "./sections/MasoPrizesSection";
import { MasoAdvantagesSection } from "./sections/MasoAdvantagesSection";
import { MasoConditionsSection } from "./sections/MasoConditionsSection";
import { MasoTestimonialsSection } from "./sections/MasoTestimonialsSection";
import { MasoFormSection } from "./sections/MasoFormSection";

export const Maso = (): JSX.Element => {
  return (
    <>
      <SEO
        title="La MASO - RENAPROV | Ensemble, sortons du cercle de la pauvreté"
        description="La MASO est une initiative de RENAPROV FINANCE SA qui redonne du pouvoir aux Camerounais grâce à la solidarité. Bénéficiez d'avantages directs en santé, éducation et assistance sociale."
        keywords="MASO, RENAPROV, solidarité, Cameroun, santé, éducation, assistance sociale, microfinance, inclusion financière"
      />
      <main className="flex flex-col w-full bg-[#ffffff]">
        <HeaderSubsection />
        <MasoHeroSection />
        <MasoSolidaritySection />
        <MasoPrizesSection />
        <MasoAdvantagesSection />
        <MasoConditionsSection />
        <MasoTestimonialsSection />
        <MasoFormSection />
        <CallToActionSubsection />
        <FooterSubsection />
      </main>
    </>
  );
};
