import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "../../../../components/ui/card";

const gradientTextClass =
  "bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]";

const FEATURE_ICONS = ["/layer-1-1.svg", "/frame-1618873126.svg", "/frame-1618873126-1.svg"];

export const FeatureCardsSection = (): JSX.Element => {
  const { t } = useTranslation("products");

  const valuesData = useMemo(
    () =>
      [1, 2, 3].map((i) => ({
        icon: FEATURE_ICONS[i - 1],
        title: t(`features.items.item${i}.title`),
        description: t(`features.items.item${i}.description`),
      })),
    [t]
  );

  return (
    <section className="w-full bg-white flex flex-col items-center px-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
        <div className="w-full lg:max-w-2xl">
          <h2 className="font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 sm:mb-6">
            {t("features.title")}{" "}
            <span className={gradientTextClass}>{t("features.titleHighlight")}</span>
          </h2>
        </div>

        <div className="w-full lg:max-w-2xl">
          <p className="font-normal text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            {t("features.subtitle")}
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {valuesData.map((value, index) => (
            <Card
              key={index}
              className="h-[280px] md:h-[284px] flex flex-col w-full items-center justify-between bg-foundation-bluedarker rounded-[17px] overflow-hidden shadow-lg"
            >
              <CardContent className="flex flex-col items-start gap-4 md:gap-6 p-4 md:p-6 lg:p-8 h-full justify-between">
                <img
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-[71px] lg:h-[71px]"
                  alt={`${value.title} icon`}
                  src={value.icon}
                />

                <div className="flex flex-col gap-3 md:gap-4 w-full flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                    {value.title}
                  </h3>

                  <p className="text-xs md:text-sm text-white leading-relaxed flex-1">
                    {value.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
