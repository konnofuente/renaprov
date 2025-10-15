import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const subsidiaries = [
  {
    category: "Hospitalier",
    title: "Complexe Hospitalier la MAMU",
    description:
      "Un établissement de santé moderne offrant des soins de qualité et accessibles à tous.",
    imageUrl: "/logo  Complexe Hospitalier la MAMU.png",
  },
  {
    category: "Universitaire",
    title: "Institut Universitaire Bissai",
    description:
      "Un centre académique dédié à la formation de qualité et à l'excellence.",
    imageUrl: "/logo Institut Universitaire Bissai.png",
  },
  {
    category: "investissement",
    title: "La Socagi",
    description:
      "Société de gestion et d'investissement qui accompagne le développement économique à travers des solutions financières adaptées.",
    imageUrl: "/logo La Socagi.png",
  },
  {
    category: "Investissement",
    title: "Royal FM",
    description:
      "Société de gestion et d’investissement qui accompagne le développement économique à travers des solutions financières adaptées.",
    imageUrl: "/logo Royal FMRoyal FM.png",
  },
  {
    category: "Solidarite",
    title: "Maso",
    description: "Pour la valorisation de la solidarité africaine",
    imageUrl: "/logo maso solidarite.png",
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
              <Card className="flex flex-col w-full h-auto min-h-[350px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[450px] xl:min-h-[480px] items-start rounded-[18px] overflow-hidden shadow-[0px_0px_9px_#00000040] border-0 hover:shadow-[0px_0px_15px_#00000060] transition-shadow duration-300">
                <CardContent className="p-0 w-full h-full flex flex-col">
                  <div className="flex flex-col h-[211px] items-start gap-3 md:gap-3.5 lg:gap-4 pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-[42px]  sm:pb-8 md:pb-10 lg:pb-12 xl:pb-[53px] px-4 sm:px-5 md:px-6 lg:px-8 xl:px-[29px] w-full bg-foundation-bluedarker">
                    <div className="w-fit font-m3-label-large font-[number:var(--m3-label-large-font-weight)] text-[#ffffff] text-xs sm:text-sm md:text-base lg:text-lg xl:text-[14px] tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] whitespace-nowrap [font-style:var(--m3-label-large-font-style)]">
                      {subsidiary.category}
                    </div>

                    <div className="flex flex-col w-full items-start gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5">
                      <h3 className="self-stretch [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#ffffff]  sm:text-xl md:text-2xl lg:text-3xl xl:text-[28px]  tracking-[0] leading-tight line-clamp-3 overflow-hidden text-ellipsis">
                        {subsidiary.title}
                      </h3>

                      <p className="w-full [font-family:'Roboto',Helvetica] font-normal text-[#bdbdbd] sm:text-[10px]  text-[14px]    tracking-[0.40px] leading-relaxed">
                        {subsidiary.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/10] lg:aspect-[5/3] xl:aspect-[2/1] bg-cover bg-[50%_50%] bg-gray-300">
                    {subsidiary.imageUrl && (
                      <img
                        className="w-full h-full object-cover"
                        alt={subsidiary.title}
                        src={subsidiary.imageUrl}
                      />
                    )}
                  </div>
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
