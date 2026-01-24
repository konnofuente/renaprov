import { CircleCheck as CheckCircle2Icon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "../../../../components/ui/button";

const bulletPoints = [
  {
    text: (
      <>
        Avec son réseau étendu sur l'ensemble du territoire camerounais avec plus de <span className="font-bold">28 Agences</span>
      </>
    ),
  },
  {
    text: "Des filiales créées pour la satisfaction de tous",
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
      className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-20 px-6 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] py-8 sm:py-10 md:py-12 lg:py-[60px] w-full bg-foundationbluelight"
    >
      <div className="flex flex-col items-start justify-center gap-4 sm:gap-5 md:gap-6 flex-1 w-full">
        <img
          src="/renaprov%2030%20ans%20experience.png"
          alt="RENAPROV 30 ans d'expérience"
          className="w-[80%] h-48 sm:h-56 md:h-64 lg:h-72 object-cover object-top shadow-shadow-dark-XL rounded-[5px]"
        />

        <div className="h-48 sm:h-56 md:h-64 lg:h-72 gap-4 sm:gap-5 md:gap-6 flex items-start w-full">
          <div className="flex-1 h-full rounded-[5px] overflow-hidden relative">
            <img
              src="/renaprov%2030%20ans%20experience%202.png"
              alt="RENAPROV 30 ans d'expérience 3"
              className="absolute top-0 left-0 w-full h-full"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                margin: 0,
                padding: 0,
                display: "block",
              }}
            />
          </div>

          <div className="flex-1 h-full rounded-[5px] overflow-hidden relative">
            <img
              src="/other/fem.jpg"
              alt="RENAPROV 30 ans d'expérience 3"
              className="absolute  top-0 left-0 w-full h-full"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                margin: 0,
                padding: 0,
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-5 md:gap-6 flex-1 w-full">
        <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-yellow-500 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-[0] leading-tight md:leading-[70.4px]">
              + {count} ANNÉES
            </h2>

            <p className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-foundationgreynormal text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-tight md:leading-[52.8px]">
              D&apos;EXPÉRIENCE
            </p>
          </div>

          <p className="[font-family:'Karla',Helvetica] font-normal text-foundationgreynormal text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed md:leading-[28.8px]">
            Depuis sa création, RENAPROV FINANCE S.A à su gagner la confiance de milliers de personnes à travers le monde et spécifiquement au Cameroun de par sa marque de distinction qui est l'Économie solidaire.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 md:gap-2.5 w-full">
          {bulletPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-2 sm:gap-2.5 w-full"
            >
              <CheckCircle2Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-foundation-bluenormal mt-0.5" />
              <p className="[font-family:'Karla',Helvetica] font-normal text-foundationgreynormal text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed md:leading-[28.8px]">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        <Button className="w-full sm:w-auto bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg min-h-[48px] sm:min-h-[52px] md:min-h-[56px] flex items-center justify-center">
          <span className="w-full text-center leading-tight">
            Contactez nous
          </span>
        </Button>
      </div>
    </section>
  );
};
