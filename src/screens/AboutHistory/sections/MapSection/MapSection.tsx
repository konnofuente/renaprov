import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "../../../../components/ui/card";

const VALUES_ICONS = [
  "/layer-1-1.svg",
  "/frame-1618873126.svg",
  "/frame-1618873126-1.svg",
];

export const MapSection = (): JSX.Element => {
  const { t } = useTranslation("about");

  const valuesData = useMemo(
    () =>
      [1, 2, 3].map((i) => ({
        icon: VALUES_ICONS[i - 1],
        title: t(`values.items.item${i}.title`),
        description: t(`values.items.item${i}.description`),
      })),
    [t]
  );

  return (
    <section className="flex flex-col w-full items-center gap-8 md:gap-16 lg:gap-[71px] py-12 md:py-16 lg:py-[91px] px-4 md:px-8 lg:px-[103px] bg-white">
      <div className="flex flex-col w-full max-w-[1280px] items-center">
        <h2 className="bg-gradient-to-br from-blue-400 to-slate-800 bg-clip-text text-transparent font-bold text-3xl md:text-4xl lg:text-5xl text-center tracking-tight leading-tight">
          {t("values.title")}
        </h2>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full"
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
    </section>
  );
};
