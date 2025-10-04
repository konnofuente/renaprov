import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const subsidiaries = [
  {
    category: "Hospitalier",
    title: "Complexe Hospitalier la MAMU",
    description:
      "Un établissement de santé moderne offrant des soins de qualité et accessibles à tous.",
    imageUrl: "",
  },
  {
    category: "Universitaire",
    title: "Institut Universitaire Bissai",
    description:
      "Un centre académique dédié à la formation de qualité et à l'excellence.",
    imageUrl: "",
  },
  {
    category: "investissement",
    title: "La Socagi",
    description:
      "Société de gestion et d'investissement qui accompagne le développement économique à travers des solutions financières adaptées.",
    imageUrl: "",
  },
  {
    category: "Hospotalier",
    title: "La Maso",
    description:
      "Un établissement de santé moderne offrant des soins de qualité et accessibles à tous.",
    imageUrl: "",
  },
];

const paginationDots = [
  { active: true },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
];

export const NosFillialeSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-16 lg:py-[87px] w-full">
      <div className="flex flex-col w-full max-w-[1280px] items-center" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-5 sm:gap-6 md:gap-8 lg:gap-[65px]">
        {subsidiaries.map((subsidiary, index) => (
          <Card
            key={index}
            className="flex flex-col w-full max-w-[355px] mx-auto h-auto min-h-[450px] sm:min-h-[480px] md:h-[504px] items-start bg-foundation-bluedark-hover rounded-[18px] overflow-hidden shadow-[0px_0px_9px_#00000040] border-0"
          >
            <CardContent className="p-0 w-full h-full flex flex-col">
              <div className="flex flex-col h-auto min-h-[180px] sm:min-h-[200px] md:h-[211px] items-start gap-3 md:gap-3.5 pt-8 sm:pt-10 md:pt-[42px] pb-10 sm:pb-12 md:pb-[53px] px-5 sm:px-6 md:px-[29px] w-full bg-foundation-bluedarker">
                <div className="w-fit font-m3-label-large font-[number:var(--m3-label-large-font-weight)] text-[#ffffff] text-sm sm:text-[length:var(--m3-label-large-font-size)] tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] whitespace-nowrap [font-style:var(--m3-label-large-font-style)]">
                  {subsidiary.category}
                </div>

                <div className="flex flex-col w-full items-start gap-2 sm:gap-2.5">
                  <h3 className="self-stretch [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#ffffff] text-xl sm:text-2xl md:text-[28px] tracking-[0] leading-tight md:leading-[30.8px]">
                    {subsidiary.title}
                  </h3>

                  <p className="w-full [font-family:'Roboto',Helvetica] font-normal text-[#bdbdbd] text-[10px] sm:text-xs tracking-[0.40px] leading-relaxed md:leading-4">
                    {subsidiary.description}
                  </p>
                </div>
              </div>

              <div className="w-full h-[250px] sm:h-[280px] md:h-[293px] bg-cover bg-[50%_50%] bg-gray-300">
                {subsidiary.imageUrl && (
                  <img
                    className="w-full h-full object-cover"
                    alt={subsidiary.title}
                    src={subsidiary.imageUrl}
                  />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-4 sm:gap-0">
        <div className="flex items-center gap-[11px] p-2.5">
          {paginationDots.map((dot, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded ${
                dot.active ? "bg-black" : "bg-black opacity-20"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4 sm:gap-5 md:gap-[25px]">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-[50px] border-black bg-[#ffffff] hover:bg-[#f5f5f5]"
          >
            <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-[50px] border-black bg-[#ffffff] hover:bg-[#f5f5f5]"
          >
            <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
