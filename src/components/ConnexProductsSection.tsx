import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CONNEX_IDS = ["moneygram", "mtn", "orange", "ria", "wafacash", "westernunion"] as const;
const CONNEX_IMAGES = [
  "/money gram.jpg",
  "/mtn-mobile-money.jpg",
  "/orange money.jpeg",
  "/ria.png",
  "/wafacash.webp",
  "/western money.jpeg",
];

export const ConnexProductsSection: React.FC = () => {
  const { t } = useTranslation("products");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const connexProducts = useMemo(
    () =>
      CONNEX_IDS.map((id, i) => ({
        id,
        name: t(`connex.products.${id}.name`),
        description: t(`connex.products.${id}.description`),
        category: t(`connex.products.${id}.category`),
        image: CONNEX_IMAGES[i],
      })),
    [t]
  );

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
    <section className="w-full bg-gradient-to-br from-purple-50 to-indigo-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            {t("connex.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("connex.subtitle")}
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
              {visibleDots.map((index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    currentSlide === index
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 w-8"
                      : "bg-gray-300 hover:bg-purple-300"
                  }`}
                  aria-label={`${t("aria.goToSlide")} ${index + 1}`}
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
                aria-label={t("aria.prevSlide")}
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
                aria-label={t("aria.nextSlide")}
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
