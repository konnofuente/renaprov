import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const productCards = [
  {
    title: "Compte courant",
    description: "Gérez vos finances en toute simplicité.",
    image: "",
  },
  {
    title: "Compte épargne",
    description: "Épargnez et faites fructifier vos revenus.",
    image: "",
  },
  {
    title: "MASO",
    description: "De locataire à propriétaire, concrétisez votre rêve",
    image: "",
  },
  {
    title: "ORA",
    description: "Objectif Rendement préparez vos projets pas à pas.",
    image: "",
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

export const OurSolutionSubsection = (): JSX.Element => {
  return (
    <section className="w-full justify-center gap-8 sm:gap-10 md:gap-[47px] bg-grayswhite flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] py-8 sm:py-10 md:py-12 lg:py-[60px] relative">
      <div className="flex w-full max-w-[1194px] items-center justify-between relative">
        <div className="flex-col w-full max-w-[552px] items-start gap-8 sm:gap-12 md:gap-20 flex relative">
          <div className="gap-8 sm:gap-12 md:gap-20 self-stretch flex items-center relative w-full">
            <p className="relative w-full [font-family:'Karla',Helvetica] font-normal text-black text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed md:leading-[27px]">
              Que vous soyez salarié, entrepreneur, commerçant ou étudiant,
              RENAPROV met à votre disposition une gamme de produits pensés pour
              vos besoins
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[1320px] items-center gap-5 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-[47px] w-full">
          {productCards.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col w-full max-w-[401px] mx-auto items-center gap-3 md:gap-[13px] pt-0 pb-4 md:pb-[15px] px-0 relative bg-[#ffffff] rounded-[15px] overflow-hidden shadow-[0px_1px_7px_#00000040] border-0"
            >
              <img
                className="relative self-stretch w-full h-[200px] sm:h-[220px] md:h-[243.85px] object-cover"
                alt="Placeholder image"
                src={product.image}
              />

              <CardContent className="flex flex-col w-full px-4 sm:px-5 md:px-6 items-start gap-3 md:gap-3.5 relative">
                <div className="gap-[5px] flex flex-col items-start relative self-stretch w-full">
                  <h3 className="self-stretch bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Roboto',Helvetica] text-transparent text-2xl sm:text-[28px] md:text-[32px] leading-tight md:leading-[44.8px] relative font-bold tracking-[0]">
                    {product.title}
                  </h3>

                  <p className="relative self-stretch [font-family:'Karla',Helvetica] font-normal text-foundationgreylight-active text-sm sm:text-[15px] md:text-base tracking-[0] leading-relaxed md:leading-6">
                    {product.description}
                  </p>
                </div>

                <Button
                  variant="link"
                  className="inline-flex items-center justify-center gap-2.5 relative h-auto p-0 rounded-[35px] overflow-hidden"
                >
                  <span className="relative w-fit bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Karla',Helvetica] font-semibold text-transparent text-xs text-center tracking-[0.20px] leading-[18px] underline whitespace-nowrap">
                    En savoir plus &gt;
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative w-full max-w-[1253px] h-auto sm:h-[50px] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-4">
          <div className="flex items-center gap-[11px] p-2.5">
            {paginationDots.map((dot, index) => (
              <div
                key={index}
                className={`relative w-2 h-2 rounded ${
                  dot.active
                    ? "bg-foundation-bluenormal"
                    : "bg-black opacity-20"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-4 sm:gap-5 md:gap-[25px]">
            <Button
              variant="outline"
              size="icon"
              className="inline-flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center gap-2 p-2 sm:p-2.5 md:p-3 bg-[#ffffff] rounded-[50px] border border-solid border-black hover:bg-[#ffffff]/90"
            >
              <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="inline-flex w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 items-center justify-center gap-2 p-2 sm:p-2.5 md:p-3 bg-[#ffffff] rounded-[50px] border border-solid border-black hover:bg-[#ffffff]/90"
            >
              <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
