import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SEO } from "../../components/SEO";
import { AdvantagesSubsection } from "./sections/AdvantagesSubsection";
import { CallToActionSubsection } from "./sections/CallToActionSubsection";
import { ExperienceSubsection } from "./sections/ExperienceSubsection";
import { HeroSectionSubsection } from "./sections/HeroSectionSubsection";
import { NosFillialeSubsection } from "./sections/NosFillialeSubsection";
import { OurAgencySubsection } from "./sections/OurAgencySubsection";
import { OurSolutionSubsection } from "./sections/OurSolutionSubsection";
import { ProductSubsection } from "./sections/ProductSubsection";
import { TestimonialSection } from "../../components/TestimonialSection";
import { AccountCreationForm } from "../../components/AccountCreationForm";

export const Accueil = (): JSX.Element => {
  const [isAccountFormOpen, setIsAccountFormOpen] = useState(false);
  const { t } = useTranslation('home');

  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
      />
      <main className="flex flex-col w-full bg-[#ffffff]">
        <HeroSectionSubsection onOpenAccountForm={() => setIsAccountFormOpen(true)} />
        <OurSolutionSubsection />
        <ExperienceSubsection />
        <ProductSubsection />
        <AdvantagesSubsection />
        <NosFillialeSubsection />
        <TestimonialSection />
        <OurAgencySubsection />
        <CallToActionSubsection />
      </main>
      
      {/* Account Creation Form Modal */}
      <AccountCreationForm 
        isOpen={isAccountFormOpen} 
        onClose={() => setIsAccountFormOpen(false)} 
      />
    </>
  );
};
