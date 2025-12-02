import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// CSS Classes extraites pour la maintenabilité
const gradientTextClass =
  "bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]";

const masoPrizes = [
  {
    title: "Votre financement",
    description: "bénéficiez d’un financement à taux zéro de 100 000 FCFA à 2 000 000 FCFA valeur, grâce à la tombola MASO",
    image: "/maso/masoL.jpg",
  },
  {
    title: "Véhicules Personnels",
    description: "Bénéficiez d’un véhicule personnel d'une valeur de 5,000,000 XAF, grâce à la tombola MASO",
    image: "/maso gagner vehicule.png",
  },
  {
    title: "Taxi à gagner",
    description: "Bénéficiez d’un véhicule taxi d'une valeur de 4,000,000 XAF, grâce à la tombola MASO",
    image: "/maso/masoT.jpg",
  },
  {
    title: "Tricycle",
    description: "Bénéficiez d’un tricycle d'une valeur de 1,800,000 XAF, grâce à la tombola MASO",
    image: "/maso/masoTr.jpg",
  },
  {
    title: "Votre Villa",
    description: "Bénéficiez d’une villa d'une valeur de 30,000,000 XAF, grâce à la tombola MASO",
    image: "/maso/maso gagner villa.jpg",
  },
];

interface OurSolutionSubsectionProps {
  onOpenForm: () => void;
}

export const OurSolutionSubsection: React.FC<OurSolutionSubsectionProps> = ({ onOpenForm }): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Responsive cards calculation
  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsToShow(1); // Mobile: 1 card
      } else if (width < 1024) {
        setCardsToShow(2); // Tablet: 2 cards
      } else {
        setCardsToShow(3); // Desktop: 3 cards
      }
    };

    // Set initial value
    updateCardsToShow();

    // Add event listener
    window.addEventListener("resize", updateCardsToShow);

    // Cleanup
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const maxSlide = Math.max(0, masoPrizes.length - cardsToShow);

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

  // Reset current slide when cardsToShow changes
  useEffect(() => {
    if (currentSlide > maxSlide) {
      setCurrentSlide(maxSlide);
    }
  }, [cardsToShow, currentSlide, maxSlide]);

  // Check if buttons should be disabled
  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= maxSlide;

  // Calculate which dots to show (sliding window of 3)
  const getVisibleDots = () => {
    const totalSlides = maxSlide + 1;
    const maxVisibleDots = 3;
    
    if (totalSlides <= maxVisibleDots) {
      // Show all dots if total is 3 or less
      return Array.from({ length: totalSlides }, (_, i) => i);
    }
    
    // Calculate start index for sliding window
    let startIndex = Math.max(0, currentSlide - 1);
    let endIndex = Math.min(totalSlides - 1, startIndex + maxVisibleDots - 1);
    
    // Adjust if we're near the end
    if (endIndex - startIndex < maxVisibleDots - 1) {
      startIndex = Math.max(0, endIndex - maxVisibleDots + 1);
    }
    
    return Array.from({ length: endIndex - startIndex + 1 }, (_, i) => startIndex + i);
  };

  const visibleDots = getVisibleDots();

  return (
    <section className="w-full bg-white flex flex-col items-center px-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Header Section - Simplifié */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
        <div className="w-full lg:max-w-2xl">
          <h2 className="font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 sm:mb-6">
            Avec la MASO Gagnez votre{" "}
            <span className={gradientTextClass}>
              prochain
            </span>
          </h2>
        </div>

        <div className="w-full lg:max-w-2xl">
          <p className="font-normal text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Participez à nos tirages au sort et gagnez des véhicules, des villas et bien plus encore. La MASO vous offre la chance de réaliser vos rêves tout en bénéficiant de nos services de solidarité.
          </p>
        </div>
      </div>

      {/* Cards Section - Amélioré */}
      <div className="w-full max-w-7xl flex flex-col items-center gap-6 sm:gap-8">
        <div className="w-full overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)`,
            }}
          >
              {masoPrizes.map((prize, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-3 flex ${
                  cardsToShow === 1
                    ? "w-full"
                    : cardsToShow === 2
                    ? "w-1/2"
                    : "w-1/3"
                }`}
              >
                <Card className="flex flex-col w-full bg-white rounded-2xl overflow-hidden border-0 h-full group hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      className="w-full h-40 sm:h-44 md:h-48 object-cover object-top  bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                      alt={`${prize.title} - MASO`}
                            src={prize.image || "/hero1.png"}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardContent className="flex flex-col p-4 sm:p-5 md:p-6 flex-1">
                    <div className="flex flex-col gap-3 flex-1">
                      <h3
                        className={`font-bold text-xl sm:text-2xl md:text-3xl leading-tight ${gradientTextClass}`}
                      >
                            {prize.title}
                      </h3>

                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 overflow-hidden">
                        {prize.description}
                      </p>
                    </div>

                    <Button
                      variant="link"
                      onClick={onOpenForm}
                      className="inline-flex items-center justify-start gap-2 p-0 h-auto mt-4 text-sm font-semibold text-foundation-bluenormal hover:text-foundation-bluedark-hover transition-colors duration-200"
                      aria-label={`Rejoindre MASO pour ${prize.title}`}
                    >
                      <span>Rejoindre MASO</span>
                      <ChevronRightIcon className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Section - Optimisée */}
        <div className="w-full flex flex-row items-center justify-between gap-4 sm:gap-6 mx-auto">
          {/* Pagination Dots */}
          <div className="flex items-center gap-3">
            {visibleDots.map((index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-foundation-bluenormal focus:ring-offset-2 ${
                  currentSlide === index
                    ? "bg-foundation-bluenormal w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
                aria-current={currentSlide === index ? "true" : "false"}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 sm:gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={isPrevDisabled}
              className={`h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foundation-bluenormal focus:ring-offset-2 ${
                isPrevDisabled
                  ? "bg-gray-100 border-gray-300 cursor-not-allowed opacity-50"
                  : "bg-white border-gray-300 hover:border-foundation-bluenormal hover:bg-foundation-bluenormal/5"
              }`}
              aria-label="Slide précédent"
            >
              <ChevronLeftIcon
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  isPrevDisabled ? "text-gray-400" : "text-black"
                }`}
              />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={isNextDisabled}
              className={`h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foundation-bluenormal focus:ring-offset-2 ${
                isNextDisabled
                  ? "bg-gray-100 border-gray-300 cursor-not-allowed opacity-50"
                  : "bg-white border-gray-300 hover:border-foundation-bluenormal hover:bg-foundation-bluenormal/5"
              }`}
              aria-label="Slide suivant"
            >
              <ChevronRightIcon
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  isNextDisabled ? "text-gray-400" : "text-gray-700"
                }`}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
