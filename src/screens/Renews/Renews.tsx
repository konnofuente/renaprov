import { useTranslation } from "react-i18next";
import { SEO } from "../../components/SEO";
import { CallToActionSubsection } from "../Accueil/sections/CallToActionSubsection";
import { HeroSection } from "./sections/HeroSection";
import { FlashNewsSection } from "./sections/FlashNewsSection";
import { AgencesSection } from "./sections/AgencesSection";
import { FilialesSection } from "./sections/FilialesSection";
import { DirigeantsSection } from "./sections/DirigeantsSection";
import { GalerieSection } from "./sections/GalerieSection";

export const Renews = (): JSX.Element => {
  const { t } = useTranslation("renews");

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
      />
      <main className="flex flex-col w-full bg-[#ffffff]">
        <HeroSection />
        <FlashNewsSection />
        <AgencesSection />
        <FilialesSection />
        <DirigeantsSection />
        <GalerieSection />
        <CallToActionSubsection />
      </main>
    </>
  );
};
