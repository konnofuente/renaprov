import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";

const masoSlides = [
  {
    title: "La MASO – Ensemble, sortons du cercle de la pauvreté",
    description:
      "Une initiative de RENAPROV FINANCE SA qui redonne du pouvoir aux Camerounais grâce à la solidarité. Avec La MASO, vous bénéficiez d'avantages directs en santé, éducation, assistance sociale et bien-être.",
    image: "/De%20locataire%20à%20propriétaire%20grâce%20à%20RENAPROV.png",
    fallbackImage: "/hero1.png",
    cta: "Adhérez dès aujourd'hui",
  },
  {
    title: "Une solidarité camerounaise qui change des vies",
    description:
      "La MASO incarne l'esprit de solidarité camerounaise en créant un réseau d'entraide qui permet à chaque membre de bénéficier de services essentiels dans les domaines de la santé, de l'éducation et de l'assistance sociale.",
    image: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
    fallbackImage: "/hero1.png",
    cta: "Découvrir nos services",
  },
  {
    title: "Avec la MASO, gagnez votre prochain",
    description:
      "Participez à nos tirages au sort et gagnez des véhicules, des villas et bien plus encore. La MASO vous offre la chance de réaliser vos rêves tout en bénéficiant de nos services de solidarité.",
    image: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
    fallbackImage: "/hero1.png",
    cta: "Participer aux tirages",
  },
];

export const MasoHeroSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % masoSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + masoSlides.length) % masoSlides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const slideTransition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  };

  const currentSlideData = masoSlides[currentSlide];

  return (
    <section className="relative w-full bg-foundationbluelight py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Top Banner */}
      <div className="w-full flex justify-center mb-5">
        <div className="w-[70%] bg-gradient-to-r from-foundation-bluenormal to-foundation-bluedark rounded-[20px] px-4 sm:px-6 py-3 sm:py-4 text-center">
          <p className="text-white font-bold text-sm sm:text-base md:text-lg">
            <span className="font-black">MASO</span> - Initiative de solidarité RENAPROV
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="flex flex-col xl:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12"
            >
              {/* Content */}
              <div className="flex flex-col flex-1 max-w-none xl:max-w-[526px] items-start gap-4 sm:gap-[15px] order-2 xl:order-1">
                <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-[34px] w-full">
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-3xl sm:text-4xl md:text-5xl lg:text-[59px] tracking-[0] leading-tight lg:leading-[70.8px]"
                  >
                    {currentSlideData.title}
                  </motion.h1>

                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                    className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-foundationgreylight-active text-sm sm:text-base lg:text-[17px] tracking-[0] leading-[1.35] lg:leading-[20.4px]"
                  >
                    {currentSlideData.description}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                >
                  <Button className="h-12 sm:h-[50px] px-5 sm:px-6 bg-foundation-bluenormal hover:bg-foundation-bluedark-hover rounded-[35px] [font-family:'Karla',Helvetica] font-semibold text-white text-sm sm:text-[17px] tracking-[0.20px] leading-5 w-full sm:w-auto">
                    {currentSlideData.cta}
                  </Button>
                </motion.div>
              </div>

              {/* Image */}
              <div className="w-full xl:w-auto flex-shrink-0 order-1 xl:order-2">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                  className="relative"
                >
                  <img
                    className="w-full xl:w-[579px] h-[200px] sm:h-[250px] md:h-[300px] xl:h-[365px] rounded-[16px] xl:rounded-[23px] object-cover"
                    alt={currentSlideData.title}
                    src={currentSlideData.image}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = currentSlideData.fallbackImage;
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Slide précédent"
          >
            <ChevronLeftIcon className="w-6 h-6 text-foundation-bluenormal" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Slide suivant"
          >
            <ChevronRightIcon className="w-6 h-6 text-foundation-bluenormal" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {masoSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-foundation-bluenormal scale-125"
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
