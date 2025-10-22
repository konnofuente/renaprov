import { SEO } from "../../components/SEO";
import { FooterSubsection } from "../Accueil/sections/FooterSubsection";
import { CallToActionSubsection } from "../Accueil/sections/CallToActionSubsection";
import { HeroSection } from "./sections/HeroSection";
import { EditorialSection } from "./sections/EditorialSection";
import { FlashNewsSection } from "./sections/FlashNewsSection";
import { AgencesSection } from "./sections/AgencesSection";
import { FilialesSection } from "./sections/FilialesSection";
import { DirigeantsSection } from "./sections/DirigeantsSection";
import { GalerieSection } from "./sections/GalerieSection";

export const Renews = (): JSX.Element => {
  return (
    <>
      <SEO
        title="RENEWS 2024 - RENAPROV | Magazine d'actualités"
        description="Découvrez les actualités 2024 de RENAPROV FINANCE SA : ouverture du Complexe Hospitalier LA MAMU, Tombola MASO Acte 4, Institut Universitaire BISSAÏ, nouvelles agences et bien plus."
        keywords="RENEWS, RENAPROV, actualités 2024, LA MAMU, MASO, Institut BISSAÏ, microfinance, Cameroun, magazine d'entreprise"
      />
      <main className="flex flex-col w-full bg-[#ffffff]">
        <HeroSection />
        <EditorialSection />
        <FlashNewsSection />
        <AgencesSection />
        <FilialesSection />
        <DirigeantsSection />
        <GalerieSection />
        <CallToActionSubsection />
        <FooterSubsection />
      </main>
    </>
  );
};
