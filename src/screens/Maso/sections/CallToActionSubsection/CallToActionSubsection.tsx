import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const CallToActionSubsection = (): JSX.Element => {
  const { t } = useTranslation("maso");

  return (
    <section
      className="relative flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 px-6 py-12 sm:py-16 md:py-20 w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
      style={{
        backgroundImage: "url('/call to action.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(5, 91, 124, 0.2)" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 md:gap-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl w-full px-4 sm:px-0">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight">
          {t("newsletter.title")}
        </h2>

        <p className="text-white text-sm sm:text-base md:text-lg text-center leading-relaxed">
          {t("newsletter.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full max-w-md sm:max-w-lg">
          <Input
            type="email"
            placeholder={t("newsletter.placeholder")}
            className="w-full sm:w-64 h-10 sm:h-12 bg-transparent text-white placeholder:text-white/80 border border-white/30 focus:border-white/60 px-3 sm:px-4 text-sm sm:text-base"
          />

          <Button className="w-full sm:w-auto h-10 sm:h-12 px-4 sm:px-6 bg-transparent border-white border-[1px] text-white hover:bg-white/10 text-sm sm:text-base font-semibold transition-all duration-200">
            {t("newsletter.button")}
          </Button>
        </div>
      </div>
    </section>
  );
};
