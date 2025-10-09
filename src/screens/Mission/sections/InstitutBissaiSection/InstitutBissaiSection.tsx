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
      "bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white",
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
          className={`${designTokens.typography.caption} text-foundation-bluedark-hover`}
        >
          {location}
        </span>
      </div>
      <div className="flex items-center gap-2 border-b border-foundation-bluedark-hover pb-1">
        <Phone className="w-5 h-5 text-foundation-bluenormal" />
        <span
          className={`${designTokens.typography.caption} text-foundation-bluedark-hover`}
        >
          {phone}
        </span>
      </div>
    </div>
  );
};

// Composant modulaire pour l'image
const HeroImage: React.FC = () => {
  return (
    <div className="w-full h-full">
      <img
        className="w-full h-full rounded-lg md:rounded-xl object-cover"
        alt="Institut Universitaire Bissai"
        src="/image-3.png"
      />
    </div>
  );
};

export const InstitutBissaiSection = (): JSX.Element => {
  return (
    <section
      className={`flex flex-col w-full items-center justify-between ${designTokens.spacing.section} ${designTokens.layout.section} bg-foundationbluelight`}
    >
      <div className={`flex flex-col w-full ${designTokens.layout.container}`}>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Image */}
          <div className="order-1 lg:order-1 flex">
            <HeroImage />
          </div>

          {/* Contenu principal */}
          <div className="flex flex-col order-2 lg:order-2">
            {/* Contact Info - en haut mais plus compact */}
            <div className="mb-4">
              <ContactInfo
                location="Quartier X, Ville Y"
                phone="+237 XXX XXX XXX"
              />
            </div>

            {/* Header avec titre aligné avec l'image */}
            <header className="flex flex-col gap-6 md:gap-8">
              <h2
                className={`${designTokens.typography.heading} bg-gradient-to-r from-foundation-bluenormal to-foundation-bluedark bg-clip-text text-transparent`}
              >
                Institut Universitaire Bissai
              </h2>
            </header>

            {/* Contenu sous le titre */}
            <div className="flex flex-col gap-6 md:gap-8 mt-6">
              <p
                className={`${designTokens.typography.body} text-foundation-bluedarker`}
              >
                Un établissement d'enseignement supérieur reconnu pour la
                qualité de ses formations. L'Institut Universitaire Bissai
                prépare les jeunes aux métiers d'avenir grâce à des programmes
                adaptés, un corps enseignant qualifié et une ouverture sur
                l'innovation.
              </p>

              <div
                className={`flex flex-col sm:flex-row items-start sm:items-center ${designTokens.spacing.buttons}`}
              >
                <ActionButton variant="primary">S'inscrire</ActionButton>
                <ActionButton variant="secondary">
                  Découvrir les formations
                </ActionButton>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
