import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/ui/button";

interface HeroSectionProps {
  onOpenAccountForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAccountForm }): JSX.Element => {
  const { t } = useTranslation("about");

  return (
    <section className="flex flex-col w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[102px] py-8 sm:py-12 md:py-16 lg:py-[54px] bg-foundationbluelight min-h-[70vh] sm:min-h-auto">
      <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between w-full max-w-[1236px] gap-6 sm:gap-8">
        {/* Image first on mobile/tablet, stays inline with text on desktop */}
        <div className="w-full xl:w-auto flex-shrink-0 order-1 xl:order-2 h-full min-h-[300px]">
          <img
            className="w-full xl:w-[579px] h-full min-h-[300px] rounded-[16px] xl:rounded-[23px] object-cover object-center"
            alt={t("hero.title")}
            src="/image-13.png"
          />
        </div>

        {/* Text block */}
        <div className="flex flex-col flex-1 max-w-none xl:max-w-[526px] items-start gap-4 sm:gap-[15px] order-2 xl:order-1">
          <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-[34px] w-full">
            <h1 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-3xl sm:text-4xl md:text-5xl lg:text-[59px] tracking-[0] leading-tight lg:leading-[70.8px]">
              {t("hero.title")}
            </h1>

            <p className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-foundationgreylight-active text-sm sm:text-base lg:text-[17px] tracking-[0] leading-[1.35] lg:leading-[20.4px]">
              {t("hero.description")}
            </p>
          </div>

          <Button 
            onClick={onOpenAccountForm}
            className="h-12 sm:h-[50px] px-5 sm:px-6 bg-foundation-bluenormal hover:bg-foundation-bluedark-hover rounded-[35px] [font-family:'Karla',Helvetica] font-semibold text-white text-sm sm:text-[17px] tracking-[0.20px] leading-5 w-full sm:w-auto"
          >
            {t("hero.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
};
