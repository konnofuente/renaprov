import React from "react";
import { Button } from "../../../../components/ui/button";
import { MapPin, Phone } from "lucide-react";

// Design tokens pour la cohérence
const designTokens = {
  spacing: {
    section: "",
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
      "bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white",
    secondary:
      "bg-grayswhite hover:bg-foundation-greylight text-foundationbluenormal",
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
    <div className="flex flex-row items-center gap-3 sm:gap-6 mb-6 overflow-hidden">
      <div className="flex items-center gap-2 flex-shrink-0">
        {
          location && (
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-foundation-bluenormal flex-shrink-0" />
              <span
                className={`${designTokens.typography.caption} text-foundationbluelight whitespace-nowrap`}
              >
                {location}
              </span>
            </div>
          )
        }
      </div>
      <div className="flex items-center gap-2 border-b border-foundationbluelight pb-1 flex-shrink-0">
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-foundation-bluenormal flex-shrink-0" />
        <span
          className={`${designTokens.typography.caption} text-foundationbluelight whitespace-nowrap`}
        >
          {phone}
        </span>
      </div>
    </div>
  );
};

export const HospitalLaMamuSection = (): JSX.Element => {
  return (
    <section className="bg-foundation-bluedarker py-12 sm:py-16 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-0">
      <article className="max-w-[1236px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-[75px] items-center">
        {/* Contenu principal */}
        <div className="w-full lg:max-w-[600px] space-y-6 sm:space-y-8 lg:space-y-[45px] order-2 lg:order-1">
          <header className=" space-y-[17px] ">
            <div className="flex gap-2 flex-wrap">
              <ContactInfo
                phone="+237 6 55 01 18 49"
              />
              <ContactInfo
                phone="+237 6 55 00 94 83"
              />
              <ContactInfo
                phone=" +237 6 90 22 88 90"
              />
            </div>

            <div className="space-y-4 sm:space-y-6 lg:space-y-[24px]">
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight text-grayswhite`}
              >
                Complexe Hospitalier La Mamu
              </h2>

              <p
                className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-foundation-greylight-hover`}
              >
                Un établissement moderne offrant des soins accessibles et de
                qualité, avec une approche humaine et proche des patients.
              </p>
            </div>
          </header>

          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center ${designTokens.spacing.buttons}`}
          >
            <ActionButton 
              variant="secondary"
              onClick={() => window.open('https://lamamu.cm/', '_blank')}
            >
              Prendre rendez-vous
            </ActionButton>
            <ActionButton 
              variant="primary"
              onClick={() => window.open('https://lamamu.cm/', '_blank')}
            >
              Découvrir nos services
            </ActionButton>
          </div>
        </div>

        {/* Galerie d'images */}
        <div className="relative w-full lg:flex-1 order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              className="w-full h-64 sm:h-80 lg:h-auto object-cover transition-transform duration-300 hover:scale-105"
              alt="Complexe Hospitalier La Mamu"
              src="/chm/mam3.jpg"
              loading="lazy"
            />
          </div>

          {/* Images superposées- uniquement sur très grands écrans (xl et plus) */}
          <div className="hidden xl:flex absolute gap-3 bottom-4 right-4 transform translate-y-[48px] translate-x-[48px]">
            <div className="relative group">
              <img
                className="h-[200px] w-[290px] rounded-lg object-cover shadow-xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                alt="Complexe Hospitalier La Mamu - Équipements"
              src="/chm/mam2.jpg"
                loading="lazy"
              />
            </div>
            <div className="relative group">
              <img
                className="h-[200px] w-[290px] rounded-lg object-top object-cover shadow-xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                alt="Complexe Hospitalier La Mamu - Services"
              src="/chm/mam1.jpg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
