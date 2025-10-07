import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";

const timelineData = [
  {
    year: "1996 – Création",
    items: [
      "Fondation officielle de Renaprov",
      "Lancement du premier bureau pour accompagner les petits commerçants.",
      'Début de la mission : "Une banque solidaire au service des marchés."',
    ],
  },
  {
    year: "2006 – Expansion",
    items: [
      "Ouverture de nouvelles agences dans les principaux marchés.",
      "Développement des premiers produits de microfinance.",
      "Renaprov devient un acteur reconnu dans la proximité bancaire.",
    ],
  },
  {
    year: "2012 – Consolidation",
    items: [
      "Structuration du top management et modernisation de la gouvernance.",
      "Mise en place de nouveaux services financiers adaptés aux besoins locaux.",
      "Début des partenariats stratégiques avec des institutions locales.",
    ],
  },
  {
    year: "2018 – Diversification",
    items: [
      "Création et intégration des filiales (hôpital, université, radio, etc.).",
      "Lancement de projets sociaux et solidaires.",
      "Accent sur la transformation numérique des services.",
    ],
  },
];

// Composant pour chaque card de timeline
const TimelineCard: React.FC<{
  timeline: (typeof timelineData)[0];
  index: number;
}> = ({ timeline }) => {
  return (
    <Card className="flex-1 w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[332px] h-[280px] sm:h-[300px] md:h-[320px] lg:h-[353px] rounded-[11px] overflow-hidden bg-[linear-gradient(180deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      <CardContent className="p-4 sm:p-5 md:p-6 lg:p-[25px] pt-5 sm:pt-6 md:pt-8 lg:pt-[30px] h-full flex flex-col">
        <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-base sm:text-lg md:text-xl lg:text-[20px] tracking-[0] leading-tight sm:leading-tight md:leading-tight lg:leading-6 mb-4 sm:mb-6 md:mb-8 lg:mb-[50px] flex-shrink-0">
          {timeline.year}
        </h3>

        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[18px] flex-1 justify-start">
          {timeline.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="flex items-start gap-3 sm:gap-4 lg:gap-[16px]"
            >
              <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center mt-0.5">
                <img
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  alt="CheckIcon icon"
                  src="/frame-1618873138.svg"
                />
              </div>
              <p className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm sm:text-sm md:text-sm lg:text-sm tracking-[0] leading-tight sm:leading-tight md:leading-tight lg:leading-[14px] flex-1">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Espacement du bas pour respecter la hauteur fixe */}
        <div className="flex-1"></div>
      </CardContent>
    </Card>
  );
};

export const TimelineSection = (): JSX.Element => {
  const is2xl = useMediaQuery("(min-width: 1536px)");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isMd = useMediaQuery("(min-width: 768px)");

  const itemsPerView = is2xl ? timelineData.length : isLg ? 3 : isMd ? 2 : 1; // 4 sur 2xl, 3 sur lg, 2 tablette, 1 mobile
  const pages = Math.max(1, Math.ceil(timelineData.length / itemsPerView));
  const maxSlide = pages - 1;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    // Recaler currentSlide si le viewport change
    setCurrentSlide((prev) => Math.min(prev, maxSlide));
  }, [maxSlide]);

  const goTo = (next: number) => {
    if (next < 0 || next > maxSlide || next === currentSlide) return;
    setCurrentSlide(next);
  };

  const nextSlide = () => goTo(currentSlide + 1);
  const prevSlide = () => goTo(currentSlide - 1);
  const goToSlide = (index: number) => goTo(index);

  // Gestion des gestes tactiles
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  // Navigation clavier
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  return (
    <section className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[77px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[52px] w-full bg-foundationbluelight">
      {/* Header Section */}
      <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 w-full max-w-screen-xl">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[59px] tracking-[0] leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            Historique de la{" "}
            <span className="text-foundation-bluenormal block sm:inline">
              RENAPROV FINANCE S.A
            </span>
          </h2>
        </div>

        <div className="flex-1 max-w-none xl:max-w-[612px]">
          <p className="[font-family:'Karla',Helvetica] font-normal text-black text-base sm:text-lg md:text-lg lg:text-lg tracking-[0] leading-relaxed sm:leading-relaxed">
            Depuis 1996, Renaprov accompagne les Camerounais en proposant des
            services financiers accessibles et solidaires. D&apos;une petite
            institution ancrée dans le secteur informel, nous sommes devenus un
            réseau national de microfinance, reconnu pour notre proximité avec
            les clients et notre engagement pour le développement social et
            économique.
          </p>
        </div>
      </div>

      {/* Timeline Cards */}
      <div
        className="w-full max-w-[1232px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Timeline des étapes de RENAPROV"
        aria-live="polite"
      >
        {/* Desktop XL: Show all 4 cards */}
        <div className="hidden 2xl:flex items-start justify-center gap-4 xl:gap-6 2xl:gap-9">
          {timelineData.map((timeline, index) => (
            <TimelineCard key={index} timeline={timeline} index={index} />
          ))}
        </div>

        {/* Desktop: Show 3 cards */}
        <div className="hidden lg:flex 2xl:hidden items-start justify-center gap-4 xl:gap-6">
          <AnimatePresence mode="wait">
            {timelineData
              .slice(currentSlide, currentSlide + 3)
              .map((timeline, index) => (
                <motion.div
                  key={currentSlide + index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <TimelineCard
                    timeline={timeline}
                    index={currentSlide + index}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Tablet: Show 2 cards */}
        <div className="hidden md:flex lg:hidden items-start justify-center gap-4 sm:gap-6">
          <AnimatePresence mode="wait">
            {timelineData
              .slice(currentSlide, currentSlide + 2)
              .map((timeline, index) => (
                <motion.div
                  key={currentSlide + index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <TimelineCard
                    timeline={timeline}
                    index={currentSlide + index}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden relative overflow-hidden rounded-[11px] w-full max-w-[320px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full flex justify-center px-2"
            >
              <TimelineCard
                timeline={timelineData[currentSlide]}
                index={currentSlide}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 w-full max-w-[1253px]">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2 sm:gap-3" aria-live="polite">
          {Array.from({ length: pages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-foundation-bluenormal focus:ring-offset-2 ${
                currentSlide === index
                  ? "bg-foundation-bluenormal w-6 sm:w-8 h-2 sm:h-3"
                  : "bg-black opacity-20 hover:opacity-40 w-2 sm:w-3 h-2 sm:h-3"
              }`}
              aria-label={`Aller à la page ${index + 1}`}
              aria-current={currentSlide === index ? "true" : "false"}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3 sm:gap-4 md:gap-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-2 border-gray-200 bg-white hover:bg-white/95 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-foundation-bluenormal"
            aria-label="Page précédente"
          >
            <ChevronLeftIcon className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-foundation-bluenormal" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
            className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-2 border-gray-200 bg-white hover:bg-white/95 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-foundation-bluenormal"
            aria-label="Page suivante"
          >
            <ChevronRightIcon className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-foundation-bluenormal" />
          </Button>
        </div>
      </div>
    </section>
  );
};
