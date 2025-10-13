import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const advantages = [
  {
    number: 1,
    title: "-35% sur les frais de soins hospitaliers",
    description: "Profitez de jusqu'à -35% de réduction sur vos frais de soins médicaux et hospitaliers dans nos centres partenaires."
  },
  {
    number: 2,
    title: "Assistance éducative",
    description: "Bénéficiez d'un soutien financier pour les frais de scolarité et les fournitures scolaires de vos enfants."
  },
  {
    number: 3,
    title: "Aide sociale d'urgence",
    description: "Accédez à une assistance financière rapide en cas de situation d'urgence ou de difficultés temporaires."
  },
  {
    number: 4,
    title: "Formation professionnelle",
    description: "Participez à des programmes de formation gratuits pour développer vos compétences professionnelles."
  }
];

export const MasoAdvantagesSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % advantages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentAdvantage = advantages[currentSlide];

  return (
    <section className="w-full bg-foundation-bluedarker py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <img
                className="w-full h-full object-contain"
                alt="Avantages MASO - Santé, Finance, Éducation"
                src="/benef%201.png"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/hero1.png";
                }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              Les Avantages de La Maso
            </h2>

            {/* Slider Content */}
            <div className="relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-foundation-bluenormal rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{currentAdvantage.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-white text-lg sm:text-xl md:text-2xl leading-tight mb-3">
                    {currentAdvantage.title}
                  </h3>
                  <p className="[font-family:'Bricolage_Grotesque',Helvetica] text-foundation-greylight-hover text-sm sm:text-base leading-relaxed">
                    {currentAdvantage.description}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                {/* Pagination Dots */}
                <div className="flex space-x-2">
                  {advantages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide
                          ? "bg-white scale-125"
                          : "bg-gray-400 hover:bg-gray-300"
                      }`}
                      aria-label={`Aller à l'avantage ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <Button
                  onClick={nextSlide}
                  className="bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200"
                  aria-label="Avantage suivant"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
