import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const prizes = [
  {
    title: "VÉHICULES PERSONNELS",
    description: "Gagnez un véhicule personnel d'une valeur de 2,000,000 XAF",
    image: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
    value: "2,000,000 XAF"
  },
  {
    title: "TAXI",
    description: "Gagnez un véhicule taxi d'une valeur de 2,000,000 XAF",
    image: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
    value: "2,000,000 XAF"
  },
  {
    title: "TRICYCLE",
    description: "Gagnez un tricycle d'une valeur de 1,500,000 XAF",
    image: "/De%20locataire%20à%20propriétaire%20grâce%20à%20RENAPROV.png",
    value: "1,500,000 XAF"
  },
  {
    title: "VILLA",
    description: "Gagnez une villa d'une valeur de 1,000,000 XAF",
    image: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
    value: "1,000,000 XAF"
  },
  {
    title: "VILLA",
    description: "Gagnez une villa d'une valeur de 1,000,000 XAF",
    image: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
    value: "1,000,000 XAF"
  }
];

export const MasoPrizesSection = (): JSX.Element => {
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

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const maxSlide = Math.max(0, prizes.length - cardsToShow);

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

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= maxSlide;

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Avec la MASO Gagnez votre prochain
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)`,
              }}
            >
              {prizes.map((prize, index) => (
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
                  <div className="flex flex-col w-full bg-white rounded-2xl overflow-hidden border-0 h-full group hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        className="w-full h-40 sm:h-44 md:h-48 object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                        alt={prize.title}
                        src={prize.image}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/hero1.png";
                        }}
                      />
                      <div className="absolute top-4 left-4 bg-foundation-bluenormal text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {prize.value}
                      </div>
                    </div>

                    <div className="flex flex-col p-4 sm:p-5 md:p-6 flex-1">
                      <div className="flex flex-col gap-3 flex-1">
                        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl leading-tight text-foundation-bluenormal">
                          {prize.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {prize.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isPrevDisabled}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
              isPrevDisabled
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-foundation-bluenormal hover:bg-foundationbluelight hover:scale-110"
            }`}
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isNextDisabled}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
              isNextDisabled
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-foundation-bluenormal hover:bg-foundationbluelight hover:scale-110"
            }`}
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-foundation-bluenormal scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Aller à la slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
