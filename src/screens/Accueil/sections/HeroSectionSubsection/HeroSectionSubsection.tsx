import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Bienvenue à RENAPROV FINANCE S.A",
    description:
      "ORA Académique, Scolaire, Habitat, Équipement... Préparez vos ambitions ! Que vous soyez salarié, pensionné, entrepreneur, commerçant ou étudiant, RENAPROV FINANCE S.A met à votre disposition une gamme de produits adaptés à vos besoins.",
    image: "/Bienvenu  RENAPROV.png",
    fallbackImage: "Bienvenu a RENAPROV.png",
    cta: "Ouvrir mon compte aujourd'hui",
  },
  {
    title: "Un compte simple et sécurisé, accessible à tous",
    description:
      "Chez RENAPROV, ouvrez un compte en quelques minutes et profitez de services adaptés à votre quotidien : dépôts, retraits, transferts et épargne, où que vous soyez.",
    image: "/other/condition.jpg",
    fallbackImage: "/hero1.png",
    cta: "Ouvrir mon compte aujourd'hui",
  },
  {
    title: "MASO",
    description:
      "MASO (Mutuelle d'Assistance et de Solidarité) est un produit solidaire mis en place par RENAPROV FINANCE SA qui vous permet de couvrir les besoins sociaux de base.",
    image: "/logo maso solidarite.png",
    fallbackImage: "/hero1.png",
    cta: "Découvrir MASO",
  },
  {
    title: "Faites grandir vos projets, nous finançons vos ambitions",
    description:
      "Profitez d'une gamme complète de services bancaires conçus pour simplifier votre vie financière au quotidien.",
    image: "/maso/win.png",
    fallbackImage: "/hero1.png",
    cta: "Nos solutions",
  },
  {
    title: "Rendez-vous en agence",
    description:
      "Nos équipes vous accueillent dans toutes nos agences pour vous conseiller et vous aider à atteindre vos objectifs financiers.",
    image: "/Rendes-vous en Agence.png",
    fallbackImage: "/hero1.png",
    cta: "Ouvrir mon compte aujourd’hui",
  },
  {
    title: "Rejoignez - nous",
    description:
      "Faites partie de la communauté RENAPROV et profitez d’un réseau solide qui soutient vos ambitions. Que vous soyez entrepreneur, salarié ou étudiant.",
    image: "/other/join.jpg",
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
  onOpenAccountForm: () => void;
}

export const HeroSectionSubsection: React.FC<HeroSectionSubsectionProps> = ({ onOpenAccountForm }): JSX.Element => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imageError, setImageError] = useState<boolean[]>(
    new Array(slides.length).fill(false)
  );
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoPlayRef = useRef<number | null>(null);
  
  // Top bar rotation state
  const [currentOffer, setCurrentOffer] = useState(0);
  const topBarRef = useRef<number | null>(null);

  // Top bar auto-rotation
  useEffect(() => {
    topBarRef.current = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % topOffers.length);
    }, 4000); // 4 seconds per offer

    return () => {
      if (topBarRef.current) {
        clearInterval(topBarRef.current);
      }
    };
  }, []);

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

  // Top information bar offers
  const topOffers = [
    {
      title: "Devenez propriétaire de votre future Villa avec MASO!",
      subtitle: "Inscriptions ouvertes jusqu'au 29 juin. Ne manquez pas cette opportunité.",
      cta: "Je m'inscris dès maintenant",
      action: () => navigate("/maso"), // Navigate to MASO page
    },
    {
      title: "Épargnez avec ORA pour vos projets d'avenir",
      subtitle: "ORA Académie, Scolaire, Habitat, Équipement... Préparez vos ambitions!",
      cta: "Découvrir ORA",
      action: () => {
        const element = document.querySelector("#produits");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, // Scroll to products section
    },
    {
      title: "Ouvrez votre compte RENAPROV en quelques minutes",
      subtitle: "Compte courant, épargne, SPMC, Bicard... Tous nos services à portée de main!",
      cta: "Créer mon compte",
      action: () => onOpenAccountForm(), // Open account creation form
    },
    {
      title: "Rejoignez notre réseau d'agences partout au Cameroun",
      subtitle: "Plus de 30 agences pour vous accompagner dans vos projets financiers.",
      cta: "Trouvez une agence",
      action: () => {
        const element = document.querySelector("#agences");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, // Scroll to agencies section
    },
  ];

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
      className="relative w-full bg-foundationbluelight overflow-hidden min-h-[70vh] sm:min-h-auto"
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
      {/* Rotating Top Information Bar */}
      <div className="w-full flex justify-center mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 xl:mt-3">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 w-full">
          <div className="bg-gradient-to-r from-foundation-bluenormal to-foundation-bluedarker py-2 sm:py-2 md:py-2 lg:py-2.5 xl:py-3 rounded-[10px] sm:rounded-[12px] md:rounded-[14px] lg:rounded-[16px] overflow-hidden">
            <div className="px-1.5 sm:px-2 md:px-3 lg:px-4 xl:px-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentOffer}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 xl:gap-3"
                >
                  <div className="text-center sm:text-left flex-1 max-w-2xl">
                    <p className="text-white font-bold text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg leading-tight">
                      {topOffers[currentOffer].title}
                    </p>
                    <p className="text-white/90 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base mt-0.5 sm:mt-0.5 md:mt-1 lg:mt-1 xl:mt-1.5">
                      {topOffers[currentOffer].subtitle}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-full sm:w-auto">
                    <Button
                      className="w-full sm:w-auto bg-white text-foundation-bluenormal hover:bg-white/95 font-bold px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 transition-all duration-200 shadow-lg hover:shadow-xl text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg"
                      onClick={topOffers[currentOffer].action}
                    >
                      {topOffers[currentOffer].cta}
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
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
                  onClick={() => {
                    if (currentSlide === 2) {
                      // "Découvrir MASO" button - navigate to MASO page
                      navigate("/maso");
                    } else if (currentSlide === 0 || currentSlide === 1 || currentSlide === 4 || currentSlide === 5) {
                      // "Ouvrir mon compte" buttons - open account creation form
                      onOpenAccountForm();
                    } else if (currentSlide === 3) {
                      // "Nos solutions" button - scroll to products section
                      const element = document.querySelector("#produits");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
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
                className="relative overflow-hidden shadow-2xl bg-gray-100 w-full xl:w-[579px] h-[200px] sm:h-[250px] md:h-[300px] xl:h-[365px] rounded-[16px] xl:rounded-[23px]"
              >
                <img
                  src={
                    imageError[currentSlide]
                      ? slides[currentSlide].fallbackImage
                      : slides[currentSlide].image
                  }
                  alt={slides[currentSlide].title}
                  className={`w-full h-full ${
                    slides[currentSlide].image.toLowerCase().includes("logo") || 
                    slides[currentSlide].image.toLowerCase().includes("maso")
                      ? "object-contain"
                      : "object-cover"
                  }`}
                  onError={() => handleImageError(currentSlide)}
                  loading="lazy"
                />
                {!slides[currentSlide].image.toLowerCase().includes("logo") && 
                 !slides[currentSlide].image.toLowerCase().includes("maso") && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                )}
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
