import React from "react";

const advantageData = {
  number: "1",
  title: "Gérez votre argent à votre rythme",
  description:
    "Effectuez vos dépôts et retraits quand vous le souhaitez, sans contraintes, pour un contrôle total de vos finances.",
  imageSrc: "",
  imageAlt: "Image",
};

const paginationDots = [
  { active: false },
  { active: false },
  { active: false },
  { active: true },
];

export const AdvantagesSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 sm:gap-12 md:gap-16 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-[94px] w-full bg-[#011b25]">
      <h2 className="w-full max-w-[707px] [font-family:'Bricolage_Grotesque',Helvetica] text-foundationbluelight text-3xl sm:text-4xl md:text-5xl text-center leading-tight md:leading-[57.6px] font-bold tracking-[0] px-4">
        Bénéfices clients
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-[53px] w-full max-w-[1200px]">
        <img
          className="w-full lg:w-[606px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[404px] object-cover rounded-lg"
          alt={advantageData.imageAlt}
          src={advantageData.imageSrc}
        />

        <div className="flex flex-col w-full lg:w-[578px] items-start gap-6 md:gap-[31px]">
          <div className="flex flex-col items-start gap-6 md:gap-[27px] w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 w-full">
              <div className="flex flex-col w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[105px] md:h-[106px] items-center justify-center gap-2.5 px-4 sm:px-5 md:px-[30px] py-2.5 bg-grayswhite rounded-[50px] flex-shrink-0">
                <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-6xl sm:text-7xl md:text-[95px] text-center tracking-[0] leading-none">
                  {advantageData.number}
                </div>
              </div>

              <div className="flex-1 gap-4 flex flex-col items-start">
                <div className="gap-6 flex flex-col items-start w-full">
                  <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] text-foundationbluelight text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[57.6px] font-bold tracking-[0]">
                    {advantageData.title}
                  </h3>
                </div>
              </div>
            </div>

            <p className="h-auto [font-family:'Arial-Regular',Helvetica] font-normal text-[#ffffff] text-lg sm:text-xl md:text-2xl lg:text-[28px] tracking-[0] leading-relaxed md:leading-[normal]">
              {advantageData.description}
            </p>
          </div>

          <div className="flex w-full items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-[13px]">
              {paginationDots.map((dot, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 sm:w-7 sm:h-7 md:w-[30px] md:h-[30px] rounded-full ${
                    dot.active ? "bg-[#00acee]" : "bg-grayswhite"
                  }`}
                />
              ))}
            </div>

            <div className="relative w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] flex-shrink-0">
              <img
                className="w-full h-full"
                alt="Vector"
                src="/vector-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
