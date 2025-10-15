import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const subsidiaries = [
  {
    category: "Hospital",
    title: "Complexe Hospitalier la MAMU",
    description:
      "Un établissement de santé moderne offrant des soins de qualité et accessibles à tous.",
    imageUrl: "/logo  Complexe Hospitalier la MAMU.png",
  },
  {
    category: "Universite",
    title: "Institut Universitaire Bissai",
    description:
      "Un centre académique dédié à la formation de qualité et à l'excellence.",
    imageUrl: "/logo Institut Universitaire Bissai.png",
  },
  {
    category: "Immobilier",
    title: "La Socagi",
    description:
      "Société de gestion et d'investissement qui accompagne le développement économique à travers des solutions financières adaptées.",
    imageUrl: "/logo La Socagi.png",
  },
  {
    category: "Radio",
    title: "Royal FM",
    description:
      "Société de gestion et d’investissement qui accompagne le développement économique à travers des solutions financières adaptées.",
    imageUrl: "/logo Royal FMRoyal FM.png",
  },

];

export const NosFillialeSubsection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Responsive cards calculation - 3 cartes + 1 partiellement visible
  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width < 667) {
        setCardsToShow(1); // Mobile: 1 carte
      } else if (width < 1299) {
        setCardsToShow(2); // Tablet: 2 cartes (667px à 1299px)
      } else {
        setCardsToShow(3.2); // Desktop: 3 cartes + 0.2 de la 4ème (partiellement visible)
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const maxSlide = Math.max(0, subsidiaries.length - Math.floor(cardsToShow));

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

  return (
    <section className="flex flex-col items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 px-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-[87px] w-full">
      {/* Titre principal comme sur l'image */}
      <div className="w-full text-center">
        <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-[0] leading-tight lg:leading-[70.8px]">
          Voici nos differents
        </h2>
        <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-4xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[70.8px]">
          filiales
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out mb-4"
          style={{
            transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)`,
          }}
        >
          {subsidiaries.map((subsidiary, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-2 sm:px-3 md:px-4 flex ${
                cardsToShow === 1
                  ? "w-full"
                  : cardsToShow === 2
                  ? "w-1/2"
                  : "w-[31.25%]" // 100% / 3.2 = 31.25% pour 3 cartes + 0.2 de la 4ème
              }`}
            >
              <Card className="flex flex-col w-full bg-foundation-bluedarker rounded-2xl overflow-hidden border-0 h-full group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-40 sm:h-44 md:h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                    alt={`${subsidiary.title} - RENAPROV`}
                    src={subsidiary.imageUrl || "/hero1.png"}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/hero1.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="flex flex-col p-4 sm:p-5 md:p-6 flex-1">
                  <div className="flex flex-col gap-3 flex-1">
                    <div className="w-fit text-xs sm:text-sm font-medium text-white bg-white/20 px-2 py-1 rounded-full">
                      {subsidiary.category}
                    </div>
                    
                    <h3 className="font-bold text-xl sm:text-2xl md:text-3xl leading-tight text-white">
                      {subsidiary.title}
                    </h3>

                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3 overflow-hidden">
                      {subsidiary.description}
                    </p>
                  </div>

                  <Button
                    variant="link"
                    className="inline-flex items-center justify-start gap-2 p-0 h-auto mt-4 text-sm font-semibold text-white hover:text-gray-300 transition-colors duration-200"
                    aria-label={`En savoir plus sur ${subsidiary.title}`}
                  >
                    <span>En savoir plus</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

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
    </section>
  );
};
