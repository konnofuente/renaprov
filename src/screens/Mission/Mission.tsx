import { useState } from "react";
import { useTranslation } from "react-i18next";
import { InstitutBissaiSection } from "./sections/InstitutBissaiSection";
import { HospitalLaMamuSection } from "./sections/HospitalLaMamuSection";
import { SocagiSection } from "./sections/SocagiSection";
import { ORASection } from "./sections/ORASection";
import { NetworkProximity } from "./sections/NetworkProximity";
import { CallToActionSubsection } from "../Accueil/sections/CallToActionSubsection";
import { OurAgencySubsection } from "../Accueil/sections/OurAgencySubsection";
import { HeroSection } from "./sections/IntroductionBanner/IntroductionBanner";
import { FilialesTitleSection } from "./sections/FilialesTitleSection";
import { SEO } from "../../components/SEO";
import { TestimonialSection } from "../../components/TestimonialSection";
import { AccountCreationForm } from "../../components/AccountCreationForm";

export const Mission = (): JSX.Element => {
  const { t } = useTranslation("mission");
  const [isAccountFormOpen, setIsAccountFormOpen] = useState(false);

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
      />
      <main className="flex flex-col w-full">
        <HeroSection onOpenAccountForm={() => setIsAccountFormOpen(true)} />
        <NetworkProximity />
        <OurAgencySubsection />

        <FilialesTitleSection />
        <InstitutBissaiSection />
        <HospitalLaMamuSection />
        <SocagiSection />
        <ORASection />

        <TestimonialSection />
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
