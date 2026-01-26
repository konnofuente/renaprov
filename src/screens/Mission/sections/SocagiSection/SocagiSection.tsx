import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/ui/button";
import { MapPin, Phone } from "lucide-react";

export const SocagiSection = (): JSX.Element => {
  const { t } = useTranslation("mission");

  return (
    <section className="flex flex-col w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[102px] py-8 sm:py-12 md:py-16 lg:py-[54px] bg-foundationbluelight">
      <div className="flex flex-col w-full max-w-[1236px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-1 lg:order-1">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <img
                className="w-full h-full rounded-lg md:rounded-xl object-cover"
                alt={t("socagi.imageAlt")}
                src="/other/socagi.jpg"
              />
            </div>
          </div>

          <div className="order-2 lg:order-2 flex flex-col gap-6 md:gap-8">
            <div className="flex flex-row items-center gap-2 sm:gap-4 md:gap-6 mb-6 overflow-x-auto scrollbar-hide">
              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-foundation-bluenormal flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-foundation-bluedark-hover whitespace-nowrap">
                  {t("socagi.location")}
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 border-b border-foundation-bluedark-hover pb-1 flex-shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-foundation-bluenormal flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-foundation-bluedark-hover whitespace-nowrap">
                  {t("socagi.phone")}
                </span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight bg-gradient-to-r from-foundation-bluenormal to-foundation-bluedark bg-clip-text text-transparent">
              {t("socagi.title")}
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-foundation-bluedarker">
              {t("socagi.description")}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6">
              <Button
                className="w-full sm:w-auto bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg min-h-[48px] sm:min-h-[52px] md:min-h-[56px] flex items-center justify-center"
                onClick={() => window.open("https://www.instagram.com/socagiofficiel_/", "_blank")}
              >
                {t("socagi.ctaJoin")}
              </Button>
              <Button
                className="w-full sm:w-auto bg-grayswhite hover:bg-foundation-greylight text-foundation-bluenormal font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg min-h-[48px] sm:min-h-[52px] md:min-h-[56px] flex items-center justify-center"
                onClick={() => window.open("https://www.instagram.com/socagiofficiel_/", "_blank")}
              >
                {t("socagi.ctaDiscover")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
