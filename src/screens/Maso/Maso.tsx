import { SEO } from "../../components/SEO";
import { AdvantagesSubsection } from "./sections/AdvantagesSubsection";
import { CallToActionSubsection } from "./sections/CallToActionSubsection";
import { FooterSubsection } from "./sections/FooterSubsection";
import { HeaderSubsection } from "./sections/HeaderSubsection";
import { HeroSectionSubsection } from "./sections/HeroSectionSubsection";
import { OurSolutionSubsection } from "./sections/OurSolutionSubsection";
import { ProductSubsection } from "./sections/ProductSubsection";

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
        <HeroSectionSubsection />
        <ProductSubsection />
        <OurSolutionSubsection />
        <AdvantagesSubsection />
        <CallToActionSubsection />
        <FooterSubsection />
      </main>
    </>
  );
};
