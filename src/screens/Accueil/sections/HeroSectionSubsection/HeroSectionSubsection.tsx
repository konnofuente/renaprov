import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../../../components/ui/button";

const slides = [
  {
    title: "Un compte simple et sécurisé, accessible à tous",
    description:
      "Chez RENAPROV, ouvrez un compte en quelques minutes et profitez de services adaptés à votre quotidien : dépôts, retraits, transferts et épargne, où que vous soyez.",
    image: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
    fallbackImage: "/hero1.png",
    cta: "Ouvrir mon compte aujourd'hui"
  },
  {
    title: "De locataire à propriétaire grâce à RENAPROV",
    description:
      "Constituez votre épargne à votre rythme avec nos solutions flexibles et sécurisées. Réalisez vos rêves avec RENAPROV.",
    image: "/De%20locataire%20à%20propriétaire%20grâce%20à%20RENAPROV.png",
    fallbackImage: "/hero1.png",
    cta: "Découvrir MASO"
  },
  {
    title: "Faites grandir vos projets, nous finançons vos ambitions",
    description:
      "Profitez d'une gamme complète de services bancaires conçus pour simplifier votre vie financière au quotidien.",
    image: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
    fallbackImage: "/hero1.png",
    cta: "Nos solutions"
  },
];

// Unified soft animation variants for the entire hero section
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.98
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 40 : -40,
    opacity: 0,
    scale: 0.98
  })
};

export const HeroSectionSubsection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imageError, setImageError] = useState<boolean[]>(new Array(slides.length).fill(false));

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
  };

  const handleImageError = (index: number) => {
    setImageError(prev => {
      const newError = [...prev];
      newError[index] = true;
      return newError;
    });
  };

  return (
    <section id="accueil" className="relative w-full bg-foundationbluelight overflow-hidden">
      {/* Navigation Arrows - Section Level */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white hover:bg-white/95 shadow-2xl rounded-full transition-all duration-200 z-50 border-2 border-gray-200 hover:border-foundation-bluenormal"
        aria-label="Slide précédent"
      >
        <ChevronLeftIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-foundation-bluenormal" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white hover:bg-white/95 shadow-2xl rounded-full transition-all duration-200 z-50 border-2 border-gray-200 hover:border-foundation-bluenormal"
        aria-label="Slide suivant"
      >
        <ChevronRightIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-foundation-bluenormal" />
      </Button>

      {/* MASO Promotion Banner */}
      <div className="w-full flex justify-center mt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-gradient-to-r from-foundation-bluenormal to-foundation-bluedarker py-4 sm:py-5 rounded-[20px]">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="text-center sm:text-left flex-1">
                  <p className="text-white font-bold text-base sm:text-lg md:text-xl leading-tight">
                    Devenez propriétaire de votre future <span className="font-black">Villa</span> avec MASO!
                  </p>
                  <p className="text-white/90 text-sm sm:text-base mt-2">
                    Inscriptions ouvertes jusqu'au 31 octobre. Ne manquez pas cette opportunité.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button 
                    className="bg-white text-foundation-bluenormal hover:bg-white/95 font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg"
                    onClick={() => goToSlide(1)}
                  >
                    Je m'inscris dès maintenant
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">

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
              scale: { type: "tween", duration: 0.6, ease: "easeInOut" }
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foundation-bluenormal leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-foundationgreylight-active leading-relaxed max-w-2xl">
                  {slides[currentSlide].description}
                </p>
              </div>
              
              <div className="w-full">
                <Button 
                  className="w-1/2 bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white font-semibold px-6 sm:px-8 py-4 sm:py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                  onClick={() => {
                    if (currentSlide === 0) {
                      // Scroll to contact or open account
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    } else if (currentSlide === 1) {
                      // Scroll to MASO section
                      const element = document.querySelector('#produits');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      // Scroll to solutions
                      const element = document.querySelector('#produits');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {slides[currentSlide].cta}
                </Button>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full h-[200px] sm:h-[400px] md:h-[500px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <img 
                  src={imageError[currentSlide] ? slides[currentSlide].fallbackImage : slides[currentSlide].image}
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
        <div className="flex justify-center items-center gap-2 mt-8 sm:mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "bg-foundation-bluenormal w-8" 
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
