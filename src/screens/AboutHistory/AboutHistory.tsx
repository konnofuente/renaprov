import { useState } from "react";
import { useTranslation } from "react-i18next";
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
import { AccountCreationForm } from "../../components/AccountCreationForm";

export const AboutHistory = (): JSX.Element => {
  const { t } = useTranslation("about");
  const [isAccountFormOpen, setIsAccountFormOpen] = useState(false);

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
      />
      <main className="flex flex-col w-full relative overflow-hidden">
        <HeroSection onOpenAccountForm={() => setIsAccountFormOpen(true)} />
        <StatsSection />
        <TimelineSection />
        <MessageSection />
        <MapSection />
        <TeamSection />
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
