import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const masoAdvantagesData = [
  {
    number: "1",
    title: "-35% sur les frais de soins hospitaliers à la Mamu",
    description:
      "Effectuez vos dépôts et retraits quand vous le souhaitez, sans contraintes, pour un contrôle total de vos finances.",
    imageSrc: "/image-3-1.png",
    imageAlt: "Réduction frais hospitaliers MASO",
  },
  {
    number: "2",
    title: "Réduisez vos frais d'études et investissez dans votre avenir",
    description:
      "Grâce au partenariat entre RENAPROV et l'IUB, les membres MASO bénéficient de -20% sur les frais universitaires.",
    imageSrc: "/image-3.png",
    imageAlt: "Réduction frais universitaires MASO",
  },
  {
    number: "3",
    title: "Gagnez gros avec la Tombola MASO !",
    description:
      "Chaque membre participe automatiquement à notre tombola solidaire et peut remporter des maisons, motos, financements, et bien plus.",
    imageSrc: "/Gagnez gros avec la Tombola MASO !.png",
    imageAlt: "Tombola MASO",
  },
];

export const AdvantagesSubsection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % masoAdvantagesData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentAdvantage = masoAdvantagesData[currentSlide];

  return (
    <section className="flex flex-col items-center justify-center gap-10 sm:gap-12 md:gap-16 lg:gap-20 px-6 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-[94px] w-full bg-[#011b25]">
      <h2 className="w-full max-w-[707px] [font-family:'Bricolage_Grotesque',Helvetica] text-foundationbluelight text-3xl sm:text-4xl md:text-5xl text-center leading-tight md:leading-[57.6px] font-bold tracking-[0] px-4">
        Les Avantages de La Maso
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-[53px] w-full max-w-[1200px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full lg:w-[606px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[404px] object-cover rounded-lg"
            alt={currentAdvantage.imageAlt}
            src={currentAdvantage.imageSrc}
          />
        </AnimatePresence>

        <div className="flex flex-col w-full lg:w-[578px] items-start gap-6 md:gap-[31px]">
          <div className="flex flex-col items-start gap-6 md:gap-[27px] w-full flex-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-[10px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[105px] md:h-[106px] items-center justify-center gap-2.5 px-4 sm:px-5 md:px-[30px] py-2.5 bg-grayswhite rounded-[50px] flex-shrink-0"
                >
                  <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-6xl sm:text-7xl md:text-[95px] text-center tracking-[0] leading-none">
                    {currentAdvantage.number}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex-1 gap-4 flex flex-col items-start justify-center">
                <div className="gap-6 flex flex-col items-start justify-center w-full h-full">
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={currentSlide}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="[font-family:'Bricolage_Grotesque',Helvetica] text-foundationbluelight text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[57.6px] font-bold tracking-[0] line-clamp-2 overflow-hidden text-ellipsis text-left"
                    >
                      {currentAdvantage.title}
                    </motion.h3>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
                className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#ffffff] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] tracking-[0] leading-relaxed md:leading-[normal] h-[5rem] sm:h-[5.5rem] md:h-[6rem] lg:h-[6.5rem] overflow-hidden"
              >
                {currentAdvantage.description}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex w-full items-center justify-between gap-4 mt-4">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-[13px]">
              {masoAdvantagesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-6 h-6 sm:w-7 sm:h-7 md:w-[30px] md:h-[30px] rounded-full transition-colors duration-200 ${
                    index === currentSlide
                      ? "bg-[#00acee]"
                      : "bg-grayswhite hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="relative w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] flex-shrink-0 hover:opacity-80 transition-opacity duration-200 bg-[#00acee] rounded-full flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
