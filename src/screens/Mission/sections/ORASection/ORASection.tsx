import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/ui/button";
import { MapPin, Phone } from "lucide-react";

// Design tokens pour la cohérence
const designTokens = {
  spacing: {
    section: "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16",
    content: "gap-6 md:gap-8 lg:gap-12",
    buttons: "gap-4 md:gap-6",
  },
  typography: {
    heading: "text-[56px] font-bold leading-tight",
    body: "text-base md:text-lg leading-relaxed",
    caption: "text-sm md:text-base",
  },
  layout: {
    container: "max-w-[1236px]",
    section: "py-8 sm:py-12 md:py-16 lg:py-20",
  },
};

// Composant modulaire pour les boutons d'action
interface ActionButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  variant,
  children,
  onClick,
}) => {
  const baseClasses =
    "w-full sm:w-auto font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg min-h-[48px] sm:min-h-[52px] md:min-h-[56px] flex items-center justify-center";

  const variantClasses = {
    primary:
      "bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-grayswhite",
    secondary:
      "bg-grayswhite hover:bg-foundation-greylight text-foundation-bluenormal",
  };

  return (
    <Button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

// Composant modulaire pour les informations de contact
interface ContactInfoProps {
  location?: string;
  phone: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ location, phone }) => {
  return (
    <div className="flex flex-row items-center gap-2 sm:gap-4 md:gap-6 mb-6 overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        {location &&
         (
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-foundation-bluenormal flex-shrink-0" />
          <span
            className={`text-xs sm:text-sm md:text-base  text-foundationbluelight whitespace-nowrap`}
          >
            {location}
          </span>
          </div>
        )
        }
        
      </div>
      <div className="flex items-center gap-1 sm:gap-2 border-b border-foundation-bluenormal-light pb-1 flex-shrink-0">
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-foundation-bluenormal flex-shrink-0" />
        <span
          className={`text-xs sm:text-sm md:text-base  text-foundationbluelight whitespace-nowrap`}
        >
          {phone}
        </span>
      </div>
    </div>
  );
};

const ImageGallery: React.FC<{ alt: string }> = ({ alt }) => (
  <div className="w-full h-64 md:h-80 lg:h-96">
    <div className="w-full h-full">
      <img
        className="w-full h-full rounded-lg md:rounded-xl object-contain bg-white p-8"
        alt={alt}
        src="/logo Royal FMRoyal FM.png"
      />
    </div>
  </div>
);

export const ORASection = (): JSX.Element => {
  const { t } = useTranslation("mission");
  const phones = t("royalFm.phones", { returnObjects: true }) as string[];

  return (
    <section
      className={`flex flex-col w-full items-center justify-between ${designTokens.spacing.section} ${designTokens.layout.section} bg-foundation-bluedarker`}
    >
      <div className={`flex flex-col w-full ${designTokens.layout.container}`}>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col order-2 lg:order-1">
            <header className="flex flex-col gap-6 md:gap-8">
              <div className="flex gap-2 flex-wrap">
                {phones.map((phone, i) => (
                  <ContactInfo key={i} phone={phone} />
                ))}
              </div>

              <h2
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight text-grayswhite`}
              >
                {t("royalFm.title")}
              </h2>
            </header>

            <div className="flex flex-col gap-6 md:gap-8">
              <p
                className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-foundation-greylight-hover`}
              >
                {t("royalFm.description")}
              </p>

              <div
                className={`flex flex-col sm:flex-row items-stretch sm:items-center ${designTokens.spacing.buttons}`}
              >
                <ActionButton
                  variant="primary"
                  onClick={() => window.open("https://royalfmcameroun.com/direct", "_blank")}
                >
                  {t("royalFm.ctaListen")}
                </ActionButton>
                <ActionButton
                  variant="secondary"
                  onClick={() => window.open("https://royalfmcameroun.com/", "_blank")}
                >
                  {t("royalFm.ctaDiscover")}
                </ActionButton>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <ImageGallery alt={t("royalFm.imageAlt")} />
          </div>
        </article>
      </div>
    </section>
  );
};
