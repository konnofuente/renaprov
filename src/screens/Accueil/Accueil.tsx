import React from "react";
import { AdvantagesSubsection } from "./sections/AdvantagesSubsection";
import { CallToActionSubsection } from "./sections/CallToActionSubsection";
import { ExperienceSubsection } from "./sections/ExperienceSubsection";
import { FooterSubsection } from "./sections/FooterSubsection";
import { HeaderSubsection } from "./sections/HeaderSubsection";
import { HeroSectionSubsection } from "./sections/HeroSectionSubsection";
import { NosFillialeSubsection } from "./sections/NosFillialeSubsection";
import { OurAgencySubsection } from "./sections/OurAgencySubsection";
import { OurSolutionSubsection } from "./sections/OurSolutionSubsection";
import { ProductSubsection } from "./sections/ProductSubsection";

export const Accueil = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-[#ffffff]">
      <HeaderSubsection />
      <HeroSectionSubsection />
      <OurSolutionSubsection />
      <ExperienceSubsection />
      <ProductSubsection />
      <AdvantagesSubsection />
      <NosFillialeSubsection />
      <OurAgencySubsection />
      <CallToActionSubsection />
      <FooterSubsection />
    </div>
  );
};
