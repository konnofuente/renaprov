import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const connexProducts = [
  {
    id: "money-gram",
    name: "MoneyGram",
    description: "Transferts d'argent internationaux rapides et sécurisés vers plus de 200 pays.",
    image: "/money gram.jpg",
    category: "Transfert International"
  },
  {
    id: "mtn-mobile-money",
    name: "MTN Mobile Money",
    description: "Service de paiement mobile pour effectuer des transactions financières via votre téléphone.",
    image: "/mtn-mobile-money.jpg",
    category: "Paiement Mobile"
  },
  {
    id: "orange-money",
    name: "Orange Money",
    description: "Solution de paiement mobile pour gérer vos finances au quotidien.",
    image: "/orange money.jpeg",
    category: "Paiement Mobile"
  },
  {
    id: "ria",
    name: "RIA Money Transfer",
    description: "Transferts d'argent internationaux avec des taux compétitifs et un service fiable.",
    image: "/ria.png",
    category: "Transfert International"
  },
  {
    id: "wafacash",
    name: "WafaCash",
    description: "Service de transfert d'argent et de paiement mobile pour l'Afrique de l'Ouest.",
    image: "/wafacash.webp",
    category: "Transfert Régional"
  },
  {
    id: "western-union",
    name: "Western Union",
    description: "Transferts d'argent internationaux avec plus de 500 000 points de service dans le monde.",
    image: "/western money.jpeg",
    category: "Transfert International"
  }
];

export const ConnexProductsSection: React.FC = () => {
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

  const maxSlide = Math.max(0, connexProducts.length - cardsToShow);

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
    <section className="w-full bg-gradient-to-br from-purple-50 to-indigo-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Produits Connexes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos partenaires et produits complémentaires pour une expérience financière complète
          </p>
        </div>

        {/* Cards Section */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)`,
              }}
            >
              {connexProducts.map((product, index) => (
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
                  <Card className="flex flex-col w-full bg-white rounded-2xl overflow-hidden border-0 h-full group hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        className="w-full h-48 object-contain bg-gradient-to-br from-purple-50 to-indigo-50 group-hover:scale-105 transition-transform duration-300"
                        alt={`${product.name} - RENAPROV`}
                        src={product.image}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/hero1.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <CardContent className="flex flex-col p-6 flex-1">
                      <div className="flex flex-col gap-3 flex-1">
                        <h3 className="font-bold text-xl leading-tight bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                          {product.name}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 overflow-hidden">
                          {product.description}
                        </p>
                      </div>

                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            {/* Pagination Dots */}
            <div className="flex items-center gap-3">
              {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    currentSlide === index
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 w-8"
                      : "bg-gray-300 hover:bg-purple-300"
                  }`}
                  aria-label={`Aller au slide ${index + 1}`}
                  aria-current={currentSlide === index ? "true" : "false"}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                disabled={isPrevDisabled}
                className={`h-10 w-10 rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                  isPrevDisabled
                    ? "bg-gray-100 border-gray-300 cursor-not-allowed opacity-50"
                    : "bg-white border-gray-300 hover:border-purple-500 hover:bg-purple-50"
                }`}
                aria-label="Slide précédent"
              >
                <ChevronLeft
                  className={`w-5 h-5 ${
                    isPrevDisabled ? "text-gray-400" : "text-gray-700"
                  }`}
                />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                disabled={isNextDisabled}
                className={`h-10 w-10 rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                  isNextDisabled
                    ? "bg-gray-100 border-gray-300 cursor-not-allowed opacity-50"
                    : "bg-white border-gray-300 hover:border-purple-500 hover:bg-purple-50"
                }`}
                aria-label="Slide suivant"
              >
                <ChevronRight
                  className={`w-5 h-5 ${
                    isNextDisabled ? "text-gray-400" : "text-gray-700"
                  }`}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
