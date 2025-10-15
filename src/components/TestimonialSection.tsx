import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Quote,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Clarisse N.",
    role: "Commerçante",
    company: "CEO de Shop and more",
    quote:
      "Grâce à RENAPROV, j'ai pu lancer ma boutique à Bafoussam. Leur accompagnement m'a permis d'obtenir un crédit adapté et d'apprendre à bien gérer mon activité.",
    image: "/hero1.png",
  },
  {
    name: "Jean-Paul M.",
    role: "Entrepreneur",
    company: "Fondateur de TechStart",
    quote:
      "RENAPROV m'a accompagné dans le développement de mon entreprise. Leur expertise et leur proximité ont été essentielles pour la réussite de mes projets.",
    image: "/hero1.png",
  },
  {
    name: "Marie K.",
    role: "Agricultrice",
    company: "Coopérative Agricole",
    quote:
      "Avec le soutien de RENAPROV, j'ai pu moderniser mon exploitation agricole et augmenter mes revenus. Un vrai partenaire de confiance.",
    image: "/hero1.png",
  },
];

export const TestimonialSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="w-full bg-white flex flex-col items-center px-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      {/* Header */}
      <div className="w-full max-w-7xl text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-[0] leading-tight mb-2">
          Ils témoignent de leur
        </h2>
        <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-4xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-[0] leading-tight">
          Expérience MASO
        </h2>
      </div>

      {/* Testimonial Carousel */}
      <div className="w-full max-w-7xl relative">
        <div className="relative overflow-hidden">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch bg-white rounded-2xl overflow-hidden shadow-lg">
            {/* Left Side - Image */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover transition-all duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/hero1.png";
                }}
              />
              {/* Side Previews - Hidden on mobile */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-24 opacity-30">
                <img
                  src={
                    testimonials[
                      (currentSlide - 1 + testimonials.length) % testimonials.length
                    ].image
                  }
                  alt="Previous"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-24 opacity-30">
                <img
                  src={testimonials[(currentSlide + 1) % testimonials.length].image}
                  alt="Next"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Testimonial Content */}
            <div className="bg-foundation-bluedarker p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center relative">
              {/* Quote Icon */}
              <Quote
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white/40 mb-4 sm:mb-6"
                strokeWidth={1.5}
              />

              {/* Quote Text */}
              <p className="[font-family:'Roboto',Helvetica] font-normal text-white !text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8">
                {currentTestimonial.quote}
              </p>

              {/* CTA Link */}
              <Button
                variant="link"
                className="inline-flex items-center justify-start gap-2 p-0 h-auto mb-6 sm:mb-8 text-sm sm:text-base font-semibold text-foundation-bluenormal hover:text-foundation-bluenormal/80 transition-colors duration-200"
                aria-label="En savoir plus"
              >
                <span>Savoir plus sur nos crédit bancaire</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              {/* Author Info */}
              <div className="flex flex-col gap-1">
                <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-lg sm:text-xl md:text-2xl">
                  {currentTestimonial.name}, {currentTestimonial.role}
                </h3>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-300 text-sm sm:text-base">
                  {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-row w-full items-center justify-between gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
          {/* Pagination Dots */}
          <div className="flex items-center gap-[11px] p-2.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-black w-8"
                    : "bg-black/20 w-2 hover:bg-black/40"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-[25px]">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center gap-2 p-2 rounded-full border border-solid bg-white border-black hover:bg-gray-100 transition-all duration-200"
              aria-label="Témoignage précédent"
            >
              <ChevronLeftIcon className="w-5 h-5 text-black" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center gap-2 p-2 rounded-full border border-solid bg-white border-black hover:bg-gray-100 transition-all duration-200"
              aria-label="Témoignage suivant"
            >
              <ChevronRightIcon className="w-5 h-5 text-black" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

