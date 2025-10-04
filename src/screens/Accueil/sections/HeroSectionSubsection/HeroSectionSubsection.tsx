import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

const slides = [
  {
    title: "Un compte simple et sécurisé, accessible à tous",
    description:
      "Chez RENAPROV, ouvrez un compte en quelques minutes et profitez de services adaptés à votre quotidien : dépôts, retraits, transferts et épargne, où que vous soyez.",
  },
  {
    title: "Épargnez facilement pour vos projets",
    description:
      "Constituez votre épargne à votre rythme avec nos solutions flexibles et sécurisées. Réalisez vos rêves avec RENAPROV.",
  },
  {
    title: "Des services financiers adaptés à vos besoins",
    description:
      "Profitez d'une gamme complète de services bancaires conçus pour simplifier votre vie financière au quotidien.",
  },
];

export const HeroSectionSubsection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="flex flex-col w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[102px] py-6 sm:py-8 md:py-10 lg:py-[54px] relative bg-foundationbluelight gap-6 sm:gap-8 md:gap-10 lg:gap-[54px]">
      <div className="flex flex-col sm:flex-row h-auto sm:h-[74px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[45px] py-3 sm:py-[11px] relative self-stretch w-full rounded-[13px] overflow-hidden rotate-180 bg-[linear-gradient(140deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] gap-4 sm:gap-2">
        <Button className="flex flex-col w-full sm:w-auto sm:min-w-[200px] md:min-w-[240px] lg:w-[276px] h-auto items-center justify-around px-4 sm:px-5 md:px-6 lg:px-[29px] py-3 sm:py-3.5 md:py-4 bg-grayswhite rotate-180 hover:bg-grayswhite/90 order-2 sm:order-1">
          <span className="inline-flex items-center gap-2.5 relative">
            <span className="relative w-fit [font-family:'Karla',Helvetica] font-semibold text-foundation-bluedark-active text-sm sm:text-base md:text-[17px] text-center tracking-[0.20px] leading-5 whitespace-nowrap">
              Je m&apos;inscris dès maintenant
            </span>
          </span>
        </Button>

        <div className="relative w-full sm:flex-1 h-auto rotate-180 [font-family:'Karla',Helvetica] font-normal text-[#ffffff] text-base sm:text-lg md:text-xl lg:text-[25px] tracking-[0.25px] leading-5 sm:leading-6 md:leading-7 order-1 sm:order-2">
          <span className="font-semibold tracking-[0.06px]">
            Devenez propriétaire de votre future{" "}
          </span>

          <span className="font-bold tracking-[0.06px]">Villa</span>

          <span className="font-semibold tracking-[0.06px]">
            {" "}
            avec MASO! <br />
          </span>

          <span className="font-semibold text-xs sm:text-sm md:text-[15px] tracking-[0.02px]">
            Inscriptions ouvertes jusqu&apos;au 31 octobre. Ne manquez pas cette
            opportunité.
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between relative self-stretch w-full flex-[0_0_auto] gap-6 lg:gap-8">
        <div className="flex flex-col w-full lg:w-[526px] items-start gap-4 md:gap-[15px] relative">
          <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-[34px] relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch h-auto [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[59px] tracking-[0] leading-tight sm:leading-[1.3] md:leading-[1.2] lg:leading-[70.8px]">
              {slides[currentSlide].title}
            </h1>

            <p className="relative w-full h-auto [font-family:'Bricolage_Grotesque',Helvetica] font-medium text-foundationgreylight-active text-sm sm:text-base md:text-[17px] tracking-[0] leading-relaxed md:leading-[20.4px]">
              {slides[currentSlide].description}
            </p>
          </div>

          <Button className="inline-flex flex-col h-auto items-center justify-center px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-foundation-bluenormal rounded-[35px] overflow-hidden hover:bg-foundation-bluedark-hover w-full sm:w-auto">
            <span className="relative w-full sm:w-auto [font-family:'Karla',Helvetica] font-semibold text-[#ffffff] text-sm sm:text-base md:text-[17px] text-center tracking-[0.20px] leading-5 whitespace-nowrap">
              Ouvrir mon compte aujourd&apos;hui
            </span>
          </Button>
        </div>

        <div className="inline-flex flex-col w-full lg:w-auto h-[250px] sm:h-[300px] md:h-[350px] lg:h-[366px] items-center justify-center gap-2.5 relative flex-[0_0_auto] rounded-[17px] bg-gray-200">
          <img className="relative w-full h-full object-cover rounded-[17px]" alt="Slide image" />
        </div>
      </div>

      <div className="flex items-center gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? "bg-foundation-bluenormal w-6" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 top-[calc(50%)] left-2 sm:left-4 md:left-6 lg:left-[37px] p-0 hover:bg-black/10 rounded-full bg-white/80 shadow-md"
      >
        <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 top-[calc(50%)] right-2 sm:right-4 md:right-6 lg:right-[37px] p-0 hover:bg-black/10 rounded-full bg-white/80 shadow-md"
      >
        <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
      </Button>
    </section>
  );
};
