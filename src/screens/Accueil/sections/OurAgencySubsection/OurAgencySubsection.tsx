import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const cityTabs = [
  { id: "yaounde", label: "Yaounde", active: true },
  { id: "douala", label: "Douala et Environs", active: false },
  { id: "autres", label: "Autres Villes", active: false },
];

const agencies = [
  {
    city: "Yaounde",
    name: "Agence de Nkoabang",
    address: "Ngulzamba nouvelle route",
    image: "",
  },
  {
    city: "Yaounde",
    name: "Mokolo Marche",
    address: " Bata Mokolo",
    image: "",
  },
  {
    city: "Yaounde",
    name: "Institut Universi Bissai",
    address: "Gp Coron",
    image: "",
  },
  {
    city: "Yaounde",
    name: "Institut Universi Bissai",
    address: "Gp Coron",
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

export const OurAgencySubsection = (): JSX.Element => {
  return (
    <section className="w-full bg-foundationbluelight flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] py-8 sm:py-10 md:py-12 lg:py-[60px] gap-6 sm:gap-8 md:gap-[38px]">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-[34px] px-0 sm:px-4 md:px-[31px]">
        {cityTabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            className={`h-auto px-6 sm:px-8 md:px-12 lg:px-16 py-0.5 rounded-3xl overflow-hidden ${
              tab.active
                ? "bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] text-[#ffffff] shadow-none"
                : "bg-grayswhite shadow-[0px_0px_2px_#00000040]"
            }`}
          >
            <span
              className={`text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-[35px] [font-family:'Roboto',Helvetica] font-medium text-center whitespace-nowrap ${
                tab.active
                  ? ""
                  : "bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]"
              }`}
            >
              {tab.label}
            </span>
          </Button>
        ))}
      </div>

      <div className="flex flex-col items-center w-full gap-6 md:gap-[22px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-[29px] w-full">
          {agencies.map((agency, index) => (
            <Card
              key={index}
              className="w-full max-w-[313px] mx-auto bg-grayswhite rounded-[10px] overflow-hidden shadow-[0px_0px_2px_#00000040] border-0"
            >
              <CardContent className="flex flex-col items-start gap-2 px-4 sm:px-5 md:px-6 py-5 md:py-[26px]">
                <div className="flex flex-col w-full items-start gap-[3px]">
                  <div className="relative w-auto h-[15px] flex items-center gap-2">
                    <div className="w-2 h-2 bg-foundation-bluenormal rounded" />
                    <div className="text-foundationgreylight-active text-xs sm:text-sm flex items-center font-m3-label-large font-[number:var(--m3-label-large-font-weight)] whitespace-nowrap">
                      {agency.city}
                    </div>
                  </div>

                  <div className="relative w-full min-h-[46px]">
                    <div className="h-auto flex items-center justify-start bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-m3-title-large-emphasized font-[number:var(--m3-title-large-emphasized-font-weight)] text-transparent text-lg sm:text-xl md:text-[length:var(--m3-title-large-emphasized-font-size)] tracking-[var(--m3-title-large-emphasized-letter-spacing)] leading-tight">
                      {agency.name}
                    </div>
                    <div className="mt-2 w-full h-auto flex items-center justify-start [font-family:'Roboto',Helvetica] font-normal text-foundationgreylight-active text-[10px] sm:text-xs tracking-[-0.18px] leading-relaxed">
                      {agency.address}
                    </div>
                  </div>
                </div>

                <div className="relative w-full h-auto mt-2">
                  <div className="w-full h-[140px] sm:h-[147px] flex bg-grayswhite rounded-[10px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Image"
                      src={agency.image}
                    />
                  </div>

                  <Button className="mt-3 mx-auto w-3/5 sm:w-[57%] h-auto px-4 sm:px-5 md:px-[26px] py-1.5 sm:py-2 bg-foundation-bluenormal rounded-[35px] overflow-hidden hover:bg-foundation-bluenormal/90 flex items-center justify-center">
                    <span className="[font-family:'Karla',Helvetica] font-semibold text-light-text text-sm sm:text-base md:text-[17px] text-center tracking-[0.20px] leading-5 whitespace-nowrap">
                      Google Map
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative w-full h-auto sm:h-[50px] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-4">
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
              className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-[50px] border-black bg-[#ffffff] hover:bg-[#ffffff]/90"
            >
              <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-[50px] border-black bg-[#ffffff] hover:bg-[#ffffff]/90"
            >
              <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
