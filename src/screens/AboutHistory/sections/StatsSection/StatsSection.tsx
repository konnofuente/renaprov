import React from "react";

const statsData = [
  {
    icon: "/icon.svg",
    iconWidth: "w-[84px]",
    iconHeight: "h-[84px]",
    iconTop: "top-0",
    iconLeft: "left-0",
    number: "+29",
    description: "Années d'expérience",
  },
  {
    icon: "/layer-1.svg",
    iconWidth: "w-[79px]",
    iconHeight: "h-[78px]",
    iconTop: "top-0",
    iconLeft: "-left-px",
    number: "+10K",
    description: "Client satisfait au Cameroon",
  },
  {
    icon: "/layer-1-2.svg",
    iconWidth: "w-[89.00%]",
    iconHeight: "h-[86.17%]",
    iconTop: "top-0",
    iconLeft: "left-0",
    number: "+28",
    description: "Agences au Cameroon",
  },
];

export const StatsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-[23px] px-0 py-[21px] bg-white">
      <div className="w-full max-w-[1211px] px-4">
        <div className="flex flex-wrap items-start justify-between gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="inline-flex items-start gap-[17px]">
              <div className="relative w-[91px] h-[92px] flex-shrink-0">
                <img
                  className={`absolute ${stat.iconTop} ${stat.iconLeft} ${stat.iconWidth} ${stat.iconHeight}`}
                  alt={`${stat.description} icon`}
                  src={stat.icon}
                />
              </div>

              <div className="flex flex-col w-[196px] items-start">
                <div className="self-stretch h-[63px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-black text-[55px] tracking-[-0.25px] leading-[64px] whitespace-nowrap">
                  {stat.number}
                </div>

                <div className="self-stretch h-[18px] -mt-1 [font-family:'Roboto',Helvetica] font-medium text-black text-[13px] tracking-[0.15px] leading-6 whitespace-nowrap">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
