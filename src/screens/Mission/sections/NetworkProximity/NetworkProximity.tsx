import { useTranslation } from "react-i18next";

const ImageGallery: React.FC<{ aria1: string; aria2: string; aria3: string }> = ({ aria1, aria2, aria3 }) => {
  return (
    <div className="w-full h-[500px] flex-1">
      <div className="w-full h-full flex items-center justify-center gap-2">
        <div
          className="w-[200px] h-96 rounded-[20px] bg-cover bg-center shadow-lg "
          style={{ backgroundImage: `url("/picture.png")` }}
          role="img"
          aria-label={aria1}
        />
        <div
          className="w-[200px] h-96 rounded-[20px] bg-cover bg-center shadow-lg transform -translate-y-16 "
          style={{ backgroundImage: `url("/picture-1.png")` }}
          role="img"
          aria-label={aria2}
        />
        <div
          className="w-[200px] h-96 rounded-[20px] bg-cover bg-center shadow-lg transform  -translate-y-8"
          style={{ backgroundImage: `url("/picture-2.png")` }}
          role="img"
          aria-label={aria3}
        />
      </div>
    </div>
  );
};

const ContentSection: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="w-full max-w-[600px] flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight text-blue-gray900">
          {title}
        </h2>
      </header>
      <div className="flex flex-col gap-6">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-foundationgreynormal">
          {description}
        </p>
      </div>
    </div>
  );
};

export const NetworkProximity = (): JSX.Element => {
  const { t } = useTranslation("mission");
  return (
    <section className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 bg-foundationbluelight relative">
      <div className="flex flex-col w-full max-w-[1236px]">
        <article className="grid grid-cols-1 lg:grid-cols-2  lg:gap-12 items-center">
          <div className="order-1 lg:order-1 relative">
            <ImageGallery
              aria1={t("networkProximity.ariaLabels.img1")}
              aria2={t("networkProximity.ariaLabels.img2")}
              aria3={t("networkProximity.ariaLabels.img3")}
            />
          </div>
          <div className="order-2 lg:order-2">
            <ContentSection
              title={t("networkProximity.title")}
              description={t("networkProximity.description")}
            />
          </div>
        </article>
      </div>
    </section>
  );
};
