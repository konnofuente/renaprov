import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { useState } from "react";
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
    category: "Investissement",
    title: "Royal FM",
    description:
      "Société de gestion et d’investissement qui accompagne le développement économique à travers des solutions financières adaptées.",
    imageUrl: "/logo Royal FMRoyal FM.png",
  },
];

export const NosFillialeSubsection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Show exactly 4 cards at once, slide one by one (like OurSolutionSubsection)
  const cardsToShow = 4;
  const maxSlide = subsidiaries.length - cardsToShow; // Maximum slide index

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
    <section className="flex flex-col items-start gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-16 lg:py-[87px] w-full">
      <div className="flex flex-col w-full max-w-[1280px] items-center" />

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out mb-4"
          style={{
            transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)`,
          }}
        >
          {subsidiaries.map((subsidiary, index) => (
            <div key={index} className="w-[25%] flex-shrink-0 px-2 flex">
              <Card className="flex flex-col w-full max-w-[355px] mx-auto h-auto min-h-[450px] sm:min-h-[480px] md:h-[504px] items-start bg-foundation-bluedark-hover rounded-[18px] overflow-hidden shadow-[0px_0px_9px_#00000040] border-0 hover:shadow-[0px_0px_15px_#00000060] transition-shadow duration-300">
                <CardContent className="p-0 w-full h-full flex flex-col">
                  <div className="flex flex-col h-auto min-h-[180px] sm:min-h-[200px] md:h-[211px] items-start gap-3 md:gap-3.5 pt-8 sm:pt-10 md:pt-[42px] pb-10 sm:pb-12 md:pb-[53px] px-5 sm:px-6 md:px-[29px] w-full bg-foundation-bluedarker">
                    <div className="w-fit font-m3-label-large font-[number:var(--m3-label-large-font-weight)] text-[#ffffff] text-sm sm:text-[length:var(--m3-label-large-font-size)] tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] whitespace-nowrap [font-style:var(--m3-label-large-font-style)]">
                      {subsidiary.category}
                    </div>

                    <div className="flex flex-col w-full items-start gap-2 sm:gap-2.5">
                      <h3 className="self-stretch [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#ffffff] text-xl sm:text-2xl md:text-[28px] tracking-[0] leading-tight md:leading-[30.8px] line-clamp-2 overflow-hidden text-ellipsis">
                        {subsidiary.title}
                      </h3>

                      <p className="w-full [font-family:'Roboto',Helvetica] font-normal text-[#bdbdbd] text-[10px] sm:text-xs tracking-[0.40px] leading-relaxed md:leading-4">
                        {subsidiary.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-[250px] sm:h-[280px] md:h-[293px] bg-cover bg-[50%_50%] bg-gray-300">
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

      <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-4 sm:gap-0">
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

        <div className="flex gap-4 sm:gap-5 md:gap-[25px]">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={isPrevDisabled}
            className={`inline-flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center gap-2 p-2 sm:p-2.5 md:p-3 rounded-[50px] border border-solid transition-all duration-200 ${
              isPrevDisabled
                ? "bg-gray-100 border-gray-300 cursor-not-allowed opacity-50"
                : "bg-[#ffffff] border-black hover:bg-[#ffffff]/90"
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
            className={`inline-flex w-10 h-10 sm:w-11 sm:h-11 md:h-12 md:w-12 items-center justify-center gap-2 p-2 sm:p-2.5 md:p-3 rounded-[50px] border border-solid transition-all duration-200 ${
              isNextDisabled
                ? "bg-gray-100 border-gray-300 cursor-not-allowed opacity-50"
                : "bg-[#ffffff] border-black hover:bg-[#ffffff]/90"
            }`}
            aria-label="Slide suivant"
          >
            <ChevronRightIcon
              className={`w-5 h-5 sm:w-6 sm:h-6 ${
                isNextDisabled ? "text-gray-400" : "text-black"
              }`}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
