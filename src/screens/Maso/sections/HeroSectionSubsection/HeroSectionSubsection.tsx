import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";

const slides = [
  {
    title: "La MASO – Ensemble, sortons du cercle de la pauvreté",
    description:
      "Une initiative de RENAPROV FINANCE SA qui redonne du pouvoir aux Camerounais grâce à la solidarité. Avec La MASO, vous bénéficiez d'avantages directs en santé, éducation, assistance sociale et bien-être.",
    image: "/De locataire à propriétaire grâce à RENAPROV.png",
    fallbackImage: "/hero1.png",
    cta: "Adhérez dès aujourd'hui",
  },
  {
    title: "Une solidarité camerounaise qui change des vies",
    description:
      "La MASO incarne l'esprit de solidarité camerounaise en créant un réseau d'entraide qui permet à chaque membre de bénéficier de services essentiels dans les domaines de la santé, de l'éducation et de l'assistance sociale.",
    image: "/Un compte simple et sécurisé, accessible à tous.png",
    fallbackImage: "/hero1.png",
    cta: "Découvrir nos services",
  },
  {
    title: "Avec la MASO, gagnez votre prochain",
    description:
      "Participez à nos tirages au sort et gagnez des véhicules, des villas et bien plus encore. La MASO vous offre la chance de réaliser vos rêves tout en bénéficiant de nos services de solidarité.",
    image: "/Faites grandir vos projets, nous finançons vos ambitions.png",
    fallbackImage: "/hero1.png",
    cta: "Participer aux tirages",
  },
  {
    title: "Conditions d'adhésion simples et accessibles",
    description:
      "Rejoignez la MASO avec seulement 500 FCFA pour le carnet et 100 FCFA par jour. Une cotisation accessible qui vous ouvre les portes de tous nos avantages et services.",
    image: "/Rendes-vous en Agence.png",
    fallbackImage: "/hero1.png",
    cta: "S'inscrire maintenant",
  },

  {
    title: "Rejoignez notre réseau de solidarité",
    description:
      "Devenez membre de la MASO et bénéficiez d'un accompagnement personnalisé, de formations et d'un réseau de solidarité qui vous soutient dans tous vos projets.",
    image: "/Bienvenu a RENAPROV.png",
    fallbackImage: "/hero1.png",
    cta: "Rejoindre la MASO",
  },
  {
    title: "Rejoignez - nous",
    description:
      "Faites partie de la communauté RENAPROV et profitez d’un réseau solide qui soutient vos ambitions. Que vous soyez entrepreneur, salarié ou étudiant.",
    image: "/Rejoignez - nous.png",
    fallbackImage: "/hero1.png",
    cta: "Ouvrir mon compte aujourd’hui",
  },
];

// Unified soft animation variants for the entire hero section
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 40 : -40,
    opacity: 0,
    scale: 0.98,
  }),
};

interface HeroSectionSubsectionProps {
  onOpenForm: () => void;
}

export const HeroSectionSubsection: React.FC<HeroSectionSubsectionProps> = ({ onOpenForm }): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imageError, setImageError] = useState<boolean[]>(
    new Array(slides.length).fill(false)
  );
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoPlayRef = useRef<number | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000); // 6 seconds per slide
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    // Pause auto-play when user manually navigates
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  const handleImageError = (index: number) => {
    setImageError((prev) => {
      const newError = [...prev];
      newError[index] = true;
      return newError;
    });
  };

  // Touch handlers for swipe functionality
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

    if (isLeftSwipe) {
      nextSlide();
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
    if (isRightSwipe) {
      prevSlide();
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  };

  return (
    <section
      id="accueil"
      className="relative w-full bg-foundationbluelight overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Navigation Arrows - Visible only on very large screens (≥1464px) */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="hidden 2xl:flex absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 w-14 h-14 xl:w-16 xl:h-16 bg-white hover:bg-white/95 shadow-2xl rounded-full transition-all duration-200 z-50 border-2 border-gray-200 hover:border-foundation-bluenormal"
        aria-label="Slide précédent"
      >
        <ChevronLeftIcon className="w-7 h-7 xl:w-8 xl:h-8 text-foundation-bluenormal" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="hidden 2xl:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 w-14 h-14 xl:w-16 xl:h-16 bg-white hover:bg-white/95 shadow-2xl rounded-full transition-all duration-200 z-50 border-2 border-gray-200 hover:border-foundation-bluenormal"
        aria-label="Slide suivant"
      >
        <ChevronRightIcon className="w-7 h-7 xl:w-8 xl:h-8 text-foundation-bluenormal" />
      </Button>
      {/* MASO Promotion Banner */}
      <div className="w-full flex justify-center mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 xl:mt-3">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 w-full">
          <div className="bg-gradient-to-r from-foundation-bluenormal to-foundation-bluedarker py-2 sm:py-2 md:py-2 lg:py-2.5 xl:py-3 rounded-[10px] sm:rounded-[12px] md:rounded-[14px] lg:rounded-[16px]">
            <div className="px-1.5 sm:px-2 md:px-3 lg:px-4 xl:px-5">
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 xl:gap-3">
                <div className="text-center sm:text-left flex-1 max-w-2xl">
                  <p className="text-white font-bold text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg leading-tight">
                    Rejoignez la{" "}
                    <span className="font-black">MASO</span> - Solidarité et avantages pour tous!
                  </p>
                  <p className="text-white/90 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base mt-0.5 sm:mt-0.5 md:mt-1 lg:mt-1 xl:mt-1.5">
                    Adhésion simple : 500 FCFA + 100 FCFA/jour. Bénéficiez de tous nos avantages.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <Button
                    className="w-full sm:w-auto bg-white text-foundation-bluenormal hover:bg-white/95 font-bold px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 transition-all duration-200 shadow-lg hover:shadow-xl text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg"
                    onClick={() => goToSlide(1)}
                  >
                    Adhérer à la MASO
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.6, ease: "easeInOut" },
              opacity: { duration: 0.6, ease: "easeInOut" },
              scale: { type: "tween", duration: 0.6, ease: "easeInOut" },
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center"
          >
            {/* Content Section */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                <h1 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] tracking-[0] leading-tight lg:leading-[1.1] line-clamp-3">
                  {slides[currentSlide].title}
                </h1>
                <p className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-foundationgreylight-active text-sm sm:text-base lg:text-[17px] tracking-[0] leading-[1.35] lg:leading-[20.4px]">
                  {slides[currentSlide].description}
                </p>
              </div>

              <div className="w-auto flex justify-center lg:justify-start">
                <Button
                  className="w-auto  bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg min-h-[48px] sm:min-h-[52px] md:min-h-[56px] flex items-center justify-center"
                  onClick={onOpenForm}
                >
                  <span className=" w-full text-center leading-tight">
                    {slides[currentSlide].cta}
                  </span>
                </Button>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative order-1 lg:order-2 flex justify-center">
              <div
                className="relative  overflow-hidden shadow-2xl bg-gray-100
              
              
              
              
              w-full xl:w-[579px] h-[200px] sm:h-[250px] md:h-[300px] xl:h-[365px] rounded-[16px] xl:rounded-[23px] object-cover
              
              
              
              
              
              
              
              "
              >
                <img
                  src={
                    imageError[currentSlide]
                      ? slides[currentSlide].fallbackImage
                      : slides[currentSlide].image
                  }
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(currentSlide)}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="flex justify-center items-center gap-3 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-foundation-bluenormal w-8 sm:w-10"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
