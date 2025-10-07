import React, { useState, useEffect, useRef } from "react";

const statsData = [
  {
    icon: "/icon.svg",
    iconWidth: "w-[84px]",
    iconHeight: "h-[84px]",
    iconTop: "top-0",
    iconLeft: "left-0",
    number: 29,
    suffix: "+",
    description: "Années d'expérience",
  },
  {
    icon: "/layer-1.svg",
    iconWidth: "w-[79px]",
    iconHeight: "h-[78px]",
    iconTop: "top-0",
    iconLeft: "-left-px",
    number: 10000,
    suffix: "+",
    description: "Client satisfait au Cameroon",
  },
  {
    icon: "/layer-1-2.svg",
    iconWidth: "w-[89.00%]",
    iconHeight: "h-[86.17%]",
    iconTop: "top-0",
    iconLeft: "left-0",
    number: 28,
    suffix: "+",
    description: "Agences au Cameroon",
  },
];

// Hook pour l'animation des chiffres (avec progression pour transitions douces)
const useCountUp = (
  end: number,
  duration: number = 2000,
  startOnView: boolean = true
) => {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const t = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - t, 4);
      setProgress(easeOutQuart);
      setCount(Math.round(easeOutQuart * end));

      if (t < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, progress, ref };
};

// Composant pour chaque stat avec animation
const StatItem: React.FC<{ stat: (typeof statsData)[0]; index: number }> = ({
  stat,
  index,
}) => {
  const { count, progress, ref } = useCountUp(stat.number, 1800 + index * 200);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num.toString();
  };

  return (
    <div
      ref={ref}
      className="group flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-[17px] p-4 sm:p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      <div className="relative w-[60px] h-[60px] sm:w-[91px] sm:h-[92px] flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
        <img
          className={`absolute ${stat.iconTop} ${stat.iconLeft} ${stat.iconWidth} ${stat.iconHeight} transition-all duration-300 group-hover:brightness-110`}
          alt={`${stat.description} icon`}
          src={stat.icon}
        />
      </div>

      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <div
          className="[font-family:'Roboto',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-[55px] tracking-[-0.25px] leading-tight lg:leading-[64px] transition-all duration-300 group-hover:text-foundation-bluenormal"
          style={{
            opacity: Math.max(0.7, progress),
            transform: `translateY(${(1 - progress) * 8}px)`,
            transition: "opacity 200ms ease, transform 200ms ease",
          }}
        >
          {stat.suffix}
          {formatNumber(count)}
        </div>

        <div className="[font-family:'Roboto',Helvetica] font-medium text-gray-600 text-[11px] sm:text-xs md:text-sm lg:text-[13px] tracking-[0.15px] leading-5 lg:leading-6 mt-1 transition-colors duration-300 group-hover:text-gray-800">
          {stat.description}
        </div>
      </div>
    </div>
  );
};

export const StatsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-[21px] bg-white">
      <div className="w-full max-w-[1211px]">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          {statsData.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
