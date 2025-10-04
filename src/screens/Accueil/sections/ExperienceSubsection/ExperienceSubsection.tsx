import { CircleCheck as CheckCircle2Icon } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../../../components/ui/button";

const bulletPoints = [
  {
    text: (
      <>
        Plus de <span className="font-bold">4 Millions</span> de clients actifs
      </>
    ),
  },
  {
    text: "Plus de 10 fillial qui participe activement a la croisant du Cameroon",
  },
  {
    text: "Tombola MASO : Gagnez maisons, motos, financements…",
  },
];

export const ExperienceSubsection = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start counting animation
          let currentCount = 0;
          const targetCount = 30;
          const duration = 3000; // 3 seconds
          const increment = targetCount / (duration / 16); // 60fps

          const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= targetCount) {
              setCount(targetCount);
              clearInterval(timer);
            } else {
              setCount(Math.floor(currentCount));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] py-8 sm:py-10 md:py-12 lg:py-[60px] w-full bg-foundationbluelight"
    >
      <div className="flex flex-col items-start justify-center gap-4 sm:gap-5 md:gap-6 flex-1 w-full">
        <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 shadow-shadow-dark-XL rounded-[5px] bg-cover bg-[50%_50%] bg-gray-200" />

        <div className="h-48 sm:h-56 md:h-64 lg:h-72 gap-4 sm:gap-5 md:gap-6 flex items-start w-full">
          <div className="flex-1 h-full shadow-shadow-dark-XL rounded-[5px] bg-cover bg-[50%_50%] bg-gray-200" />
          <div className="flex-1 h-full rounded-[5px] bg-cover bg-[50%_50%] bg-gray-200" />
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-5 md:gap-6 flex-1 w-full">
        <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-foundation-bluenormal text-4xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-[0] leading-tight md:leading-[70.4px]">
              + {count} ANNÉES
            </h2>

            <p className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-foundationgreynormal text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-tight md:leading-[52.8px]">
              D&apos;EXPÉRIENCE
            </p>
          </div>

          <p className="[font-family:'Karla',Helvetica] font-normal text-foundationgreynormal text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed md:leading-[28.8px]">
            Depuis sa création, RENAPROV a gagné la confiance de milliers de
            clients à travers le Cameroun. Notre expérience et notre solidité
            sont les garanties de votre sécurité financière.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 md:gap-2.5 w-full">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-2 sm:gap-2.5 w-full">
              <CheckCircle2Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-foundation-bluenormal mt-0.5" />
              <p className="[font-family:'Karla',Helvetica] font-normal text-foundationgreynormal text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed md:leading-[28.8px]">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        <Button className="w-full sm:w-auto sm:min-w-[200px] md:w-[230px] h-auto px-6 md:px-8 py-3 md:py-4 bg-foundation-bluenormal hover:bg-foundation-bluedark-hover rounded-[35px]">
          <span className="[font-family:'Karla',Helvetica] font-semibold text-light-text text-base sm:text-lg md:text-xl text-center tracking-[0.20px] leading-5">
            Contactez nous
          </span>
        </Button>
      </div>
    </section>
  );
};
