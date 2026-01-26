import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SEO } from "../../components/SEO";
import { AdvantagesSubsection } from "./sections/AdvantagesSubsection";
import { CallToActionSubsection } from "./sections/CallToActionSubsection";
import { HeroSectionSubsection } from "./sections/HeroSectionSubsection";
import { OurSolutionSubsection } from "./sections/OurSolutionSubsection";
import { ProductSubsection } from "./sections/ProductSubsection";
import { TestimonialSection } from "../../components/TestimonialSection";
import { AdhesionConditionsSection } from "./sections/AdhesionConditionsSection";
import { MasoAdhesionForm } from "../../components/MasoAdhesionForm";

export const Maso = (): JSX.Element => {
  const { t } = useTranslation("maso");
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
      />
      <main className="flex flex-col w-full bg-[#ffffff]">
        <HeroSectionSubsection onOpenForm={() => setIsFormOpen(true)} />
        <ProductSubsection onOpenForm={() => setIsFormOpen(true)} />
        <OurSolutionSubsection onOpenForm={() => setIsFormOpen(true)} />
        <AdvantagesSubsection />
        <AdhesionConditionsSection onOpenForm={() => setIsFormOpen(true)} />
        <TestimonialSection />
        <CallToActionSubsection />
      </main>
      
      {/* Modal Form */}
      <MasoAdhesionForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
};
