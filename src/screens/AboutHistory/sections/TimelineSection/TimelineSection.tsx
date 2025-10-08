import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const timelineData = [
  {
    year: "1996 – Création",
    items: [
      "Fondation officielle de Renaprov",
      "Lancement du premier bureau pour accompagner les petits commerçants.",
      'Début de la mission : "Une banque solidaire au service des marchés."',
    ],
  },
  {
    year: "2006 – Expansion",
    items: [
      "Ouverture de nouvelles agences dans les principaux marchés.",
      "Développement des premiers produits de microfinance.",
      "Renaprov devient un acteur reconnu dans la proximité bancaire.",
    ],
  },
  {
    year: "2012 – Consolidation",
    items: [
      "Structuration du top management et modernisation de la gouvernance.",
      "Mise en place de nouveaux services financiers adaptés aux besoins locaux.",
      "Début des partenariats stratégiques avec des institutions locales.",
    ],
  },
  {
    year: "2018 – Diversification",
    items: [
      "Création et intégration des filiales (hôpital, université, radio, etc.).",
      "Lancement de projets sociaux et solidaires.",
      "Accent sur la transformation numérique des services.",
    ],
  },
];

// Composant pour chaque card de timeline
const TimelineCard: React.FC<{
  timeline: (typeof timelineData)[0];
  index: number;
}> = ({ timeline }) => {
  return (
    <Card className="w-full h-80 md:h-96 rounded-lg overflow-hidden bg-[linear-gradient(180deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] border-0 shadow-lg">
      <CardContent className="p-6 md:p-8 h-full flex flex-col">
        <h3 className="font-bold text-white text-sm md:text-base lg:text-lg leading-tight mb-6 md:mb-8 flex-shrink-0 whitespace-nowrap">
          {timeline.year}
        </h3>

        <div className="flex flex-col gap-3 md:gap-4 flex-1 justify-start">
          {timeline.items.map((item, itemIndex) => (
            <div key={itemIndex} className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                <img
                  className="w-5 h-5"
                  alt="CheckIcon icon"
                  src="/frame-1618873138.svg"
                />
              </div>
              <p className="font-normal text-white text-sm leading-relaxed flex-1">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Espacement du bas pour respecter la hauteur fixe */}
        <div className="flex-1"></div>
      </CardContent>
    </Card>
  );
};

export const TimelineSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Responsive cards calculation
  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsToShow(1); // Mobile: 1 carte
      } else if (width < 1024) {
        setCardsToShow(2); // Tablet: 2 cartes
      } else if (width < 1280) {
        setCardsToShow(3); // Desktop: 3 cartes
      } else {
        setCardsToShow(4); // Large: 4 cartes
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Calculer le nombre maximum de slides
  const maxSlide = Math.max(0, timelineData.length - cardsToShow);

  // Reset current slide when cardsToShow changes
  useEffect(() => {
    if (currentSlide > maxSlide) {
      setCurrentSlide(maxSlide);
    }
  }, [cardsToShow, currentSlide, maxSlide]);

  const nextSlide = () => {
    if (currentSlide < maxSlide) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Check if buttons should be disabled
  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= maxSlide;

  return (
    <section className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[77px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[52px] w-full bg-foundationbluelight">
      {/* Header Section */}
      <div className="w-full max-w-4xl xl:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 items-start">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <h2
              id="timeline-description"
              className="font-bold text-black text-[40px] leading-[120%]"
            >
              <span className="block">Historique de la</span>
              <span className="block text-foundation-bluenormal">
                RENAPROV FINANCE S.A
              </span>
            </h2>
          </div>

          <div className="xl:max-w-lg">
            <div className="space-y-4" aria-describedby="timeline-description">
              <p className="font-normal text-black text-[18px] leading-[150%]">
                Depuis 1996, Renaprov accompagne les Camerounais en proposant
                des services financiers accessibles et solidaires.
              </p>
              <p className="font-normal text-black text-[18px] leading-[150%]">
                D&apos;une petite institution ancrée dans le secteur informel,
                nous sommes devenus un réseau national de microfinance, reconnu
                pour notre proximité avec les clients et notre engagement pour
                le développement social et économique.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Cards */}
      <div className="w-full max-w-6xl">
        <div className="relative w-full overflow-hidden px-2">
          <div
            className="flex transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)`,
            }}
          >
            {timelineData.map((timeline, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-2 sm:px-3 flex ${
                  cardsToShow === 1
                    ? "w-full"
                    : cardsToShow === 2
                    ? "w-1/2"
                    : cardsToShow === 3
                    ? "w-1/3"
                    : "w-1/4"
                }`}
              >
                <TimelineCard timeline={timeline} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      {maxSlide > 0 && (
        <div className="flex w-full items-center justify-center">
          <div className="flex flex-row w-full items-center justify-between gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center gap-[11px] p-2.5">
              {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-foundation-bluenormal w-8"
                      : "bg-black opacity-20 hover:opacity-40"
                  }`}
                  aria-label={`Aller à la page ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-[25px]">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                disabled={isPrevDisabled}
                className={`inline-flex h-10 w-10 items-center justify-center gap-2 p-2 rounded-[50px] border border-solid transition-all duration-200 ${
                  isPrevDisabled
                    ? "bg-gray-100 border-gray-300 cursor-not-allowed opacity-50"
                    : "bg-[#ffffff] border-black hover:bg-[#ffffff]/90"
                }`}
                aria-label="Slide précédent"
              >
                <ChevronLeftIcon
                  className={`w-5 h-5 ${
                    isPrevDisabled ? "text-gray-400" : "text-black"
                  }`}
                />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                disabled={isNextDisabled}
                className={`inline-flex w-10 h-10 items-center justify-center gap-2 p-2 rounded-[50px] border border-solid transition-all duration-200 ${
                  isNextDisabled
                    ? "bg-gray-100 border-gray-300 cursor-not-allowed opacity-50"
                    : "bg-[#ffffff] border-black hover:bg-[#ffffff]/90"
                }`}
                aria-label="Slide suivant"
              >
                <ChevronRightIcon
                  className={`w-5 h-5 ${
                    isNextDisabled ? "text-gray-400" : "text-black"
                  }`}
                />
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
