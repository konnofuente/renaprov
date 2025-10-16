import { useState } from "react";
import { SEO } from "../../components/SEO";
import { AdvantagesSubsection } from "./sections/AdvantagesSubsection";
import { CallToActionSubsection } from "./sections/CallToActionSubsection";
import { FooterSubsection } from "./sections/FooterSubsection";
import { HeroSectionSubsection } from "./sections/HeroSectionSubsection";
import { OurSolutionSubsection } from "./sections/OurSolutionSubsection";
import { ProductSubsection } from "./sections/ProductSubsection";
import { TestimonialSection } from "../../components/TestimonialSection";
import { AdhesionConditionsSection } from "./sections/AdhesionConditionsSection";
import { MasoAdhesionForm } from "../../components/MasoAdhesionForm";

export const Maso = (): JSX.Element => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <SEO
        title="La MASO - RENAPROV | Ensemble, sortons du cercle de la pauvreté"
        description="La MASO est une initiative de RENAPROV FINANCE SA qui redonne du pouvoir aux Camerounais grâce à la solidarité. Bénéficiez d'avantages directs en santé, éducation et assistance sociale."
        keywords="MASO, RENAPROV, solidarité, Cameroun, santé, éducation, assistance sociale, microfinance, inclusion financière"
      />
      <main className="flex flex-col w-full bg-[#ffffff]">
        <HeroSectionSubsection onOpenForm={() => setIsFormOpen(true)} />
        <ProductSubsection onOpenForm={() => setIsFormOpen(true)} />
        <OurSolutionSubsection onOpenForm={() => setIsFormOpen(true)} />
        <AdvantagesSubsection />
        <AdhesionConditionsSection onOpenForm={() => setIsFormOpen(true)} />
        <TestimonialSection />
        <CallToActionSubsection />
        <FooterSubsection />
      </main>
      
      {/* Modal Form */}
      <MasoAdhesionForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
};
