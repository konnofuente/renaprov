import React from "react";
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
    "w-auto font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg min-h-[48px] sm:min-h-[52px] md:min-h-[56px] flex items-center justify-center";

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
  location: string;
  phone: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ location, phone }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-6">
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-foundation-bluenormal" />
        <span
          className={`${designTokens.typography.caption} text-foundationbluelight`}
        >
          {location}
        </span>
      </div>
      <div className="flex items-center gap-2 border-b border-foundationbluelight pb-1">
        <Phone className="w-5 h-5 text-foundation-bluenormal" />
        <span
          className={`${designTokens.typography.caption} text-foundationbluelight`}
        >
          {phone}
        </span>
      </div>
    </div>
  );
};

// Composant modulaire pour la galerie d'images
const ImageGallery: React.FC = () => {
  return (
    <div className="w-full h-64 md:h-80 lg:h-96">
      <div className="relative w-full h-full">
        {/* Image principale comme arrière-plan */}
        <img
          className="absolute inset-0 w-full h-full rounded-lg md:rounded-xl object-cover"
          alt="ORA - Épargne Collective"
          src="/image-3-3.png"
        />

        {/* Première image superposée - décalée vers le bas et à droite */}
        <img
          className="absolute bottom-2 right-2 w-[48%] h-1/2 rounded-lg object-cover shadow-lg transform translate-y-16 translate-x-8"
          alt="ORA - Épargne Solidaire"
          src="/image-2-1.png"
        />

        {/* Deuxième image superposée - décalée vers le bas et à droite */}
        <img
          className="absolute bottom-2 left-2 w-[48%] h-1/2 rounded-lg object-cover shadow-lg transform translate-y-16 translate-x-8"
          alt="ORA - Inclusion Financière"
          src="/image-4-1.png"
        />
      </div>
    </div>
  );
};

export const ORASection = (): JSX.Element => {
  return (
    <section
      className={`flex flex-col w-full items-center justify-between ${designTokens.spacing.section} ${designTokens.layout.section} bg-foundation-bluedarker`}
    >
      <div className={`flex flex-col w-full ${designTokens.layout.container}`}>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenu principal */}
          <div className="flex flex-col order-2 lg:order-1">
            <header className="flex flex-col gap-6 md:gap-8">
              <ContactInfo
                location="Quartier X, Ville Y"
                phone="+237 XXX XXX XXX"
              />

              <h2
                className={`${designTokens.typography.heading} text-grayswhite`}
              >
                ORA , Cotiser Petit a Petit
              </h2>
            </header>

            <div className="flex flex-col gap-6 md:gap-8">
              <p
                className={`${designTokens.typography.body}  text-foundation-greylight-hover `}
              >
                Un établissement moderne offrant des soins accessibles et de
                qualité, avec une approche humaine et proche des patients.
              </p>

              <div
                className={`flex flex-col sm:flex-row items-start sm:items-center ${designTokens.spacing.buttons}`}
              >
                <ActionButton variant="primary">
                  Commencer à épargner
                </ActionButton>
                <ActionButton variant="secondary">Découvrir ORA</ActionButton>
              </div>
            </div>
          </div>

          {/* Galerie d'images */}
          <div className="order-1 lg:order-2">
            <ImageGallery />
          </div>
        </article>
      </div>
    </section>
  );
};
