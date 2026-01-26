import { useTranslation } from "react-i18next";

export const FilialesTitleSection = (): JSX.Element => {
  const { t } = useTranslation("mission");

  return (
    <div className="flex flex-col items-center text-center mb-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
        <div className="text-black">{t("filiales.titlePart1")}</div>
        <div className="bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
          {t("filiales.titlePart2")}
        </div>
      </h2>
    </div>
  );
};
