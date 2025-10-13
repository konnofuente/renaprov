import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Clarisse N.",
    role: "Commerçante",
    quote: "Grâce à RENAPROV, j'ai pu lancer ma boutique à Bafoussam. Leur accompagnement m'a permis d'obtenir un crédit adapté et d'apprendre à bien gérer mon activité.",
    image: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png"
  },
  {
    name: "Jean M.",
    role: "Agriculteur",
    quote: "La MASO m'a aidé à financer mes équipements agricoles. Grâce aux avantages santé, j'ai pu soigner ma famille sans me ruiner.",
    image: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png"
  },
  {
    name: "Marie K.",
    role: "Enseignante",
    quote: "L'assistance éducative de la MASO a permis à mes enfants de continuer leurs études. Je recommande vivement cette initiative.",
    image: "/De%20locataire%20à%20propriétaire%20grâce%20à%20RENAPROV.png"
  }
];

export const MasoTestimonialsSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Responsive cards calculation
  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width < 1024) {
        setCardsToShow(1); // Mobile/Tablet: 1 card
      } else {
        setCardsToShow(1); // Desktop: 1 card centered
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-greydarker text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Ils témoignent de leur Expérience MASO
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center">
                      <div className="mb-8">
                        <img
                          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mx-auto mb-6"
                          alt={testimonial.name}
                          src={testimonial.image}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/hero1.png";
                          }}
                        />
                      </div>
                      
                      <blockquote className="[font-family:'Bricolage_Grotesque',Helvetica] text-foundationgreylight-active text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div>
                        <h4 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-greydarker text-lg sm:text-xl">
                          {testimonial.name}
                        </h4>
                        <p className="[font-family:'Bricolage_Grotesque',Helvetica] text-foundation-bluenormal text-sm sm:text-base">
                          {testimonial.role}
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 bg-white text-foundation-bluenormal hover:bg-foundationbluelight hover:scale-110"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 bg-white text-foundation-bluenormal hover:bg-foundationbluelight hover:scale-110"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-foundation-bluenormal scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
