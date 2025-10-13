import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const cityTabs = [
  {
    id: "yaounde",
    label: "Yaoundé",
    active: true,
  },
  {
    id: "douala",
    label: "Douala et Environs",
    active: false,
  },
  {
    id: "autres",
    label: "Autres Villes",
    active: false,
  },
];

const locationCards = [
  // YAOUNDÉ AGENCIES
  {
    city: "Yaoundé",
    title: "Nkoabang",
    address: "Ngulzamba Nouvelle Route",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    title: "Odza",
    address: "Borne 12 Odza",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    title: "Centrale",
    address: "Immeuble Jaco",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    title: "Nkomo",
    address: "Carrefour Nkomo",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    title: "Ekoumou",
    address: "Mairie Ekoumou",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    title: "Mvog-Mbi",
    address: "Marché Mvog-Mbi",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    title: "Biyem Assi",
    address: "Carrefour Acacias",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    title: "Mokolo Marché",
    address: "Bata Mokolo",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    title: "Elig Effa",
    address: "Montée Elig Effa",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    title: "Mendong",
    address: "Entrée Simbock",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    title: "Ngousso",
    address: "Fabrique Ngousso",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    title: "Elig Edzoa",
    address: "Elig Edzoa Face Ancien Feicom",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    title: "Messassi",
    address: "Messassi Face Vision Confort",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    title: "Mimboman",
    address: "Terminus Mimboman",
    image: "/image-1-3.png",
  },

  // DOUALA & SES ENVIRONS
  {
    city: "Douala",
    title: "New Deido",
    address: "Marché New Deido",
    image: "/image-1-3.png",
  },
  {
    city: "Douala",
    title: "Ndokoti",
    address: "Entrée Bellavie",
    image: "/image-1-3.png",
  },
  {
    city: "Douala",
    title: "Boumnyebel",
    address: "Carrefour Boumnyebel",
    image: "/image-1-3.png",
  },
  {
    city: "Édéa",
    title: "Édéa",
    address: "Avenue des Banques",
    image: "/image-1-3.png",
  },

  // AUTRES VILLES
  {
    city: "Obala",
    title: "Obala",
    address: "Congelcam Obala",
    image: "/image-1-3.png",
  },
  {
    city: "Nkoteng",
    title: "Nkoteng",
    address: "Congelcam Obala",
    image: "/image-1-3.png",
  },
  {
    city: "Sa'a",
    title: "Sa'a",
    address: "Marché Sa'a",
    image: "/image-1-3.png",
  },
  {
    city: "Bafoussam",
    title: "Bafoussam",
    address: "Entrée Marché B",
    image: "/image-1-3.png",
  },
  {
    city: "Bertoua",
    title: "Bertoua",
    address: "Congelcam Bertoua",
    image: "/image-1-3.png",
  },
  {
    city: "Mbalmayo",
    title: "Mbalmayo",
    address: "Marché Mbalmayo",
    image: "/image-1-3.png",
  },
  {
    city: "Mfou",
    title: "Mfou",
    address: "Place des Fêtes de Mfou",
    image: "/image-1-3.png",
  },
  {
    city: "Buea",
    title: "Buea",
    address: "Molyko Presbyterian Church",
    image: "/image-1-3.png",
  },
  {
    city: "Kribi",
    title: "Kribi",
    address: "Montée Nkol Biteng",
    image: "/image-1-3.png",
  },
  {
    city: "Eseka",
    title: "Eseka",
    address: "Marché Eseka",
    image: "/image-1-3.png",
  },

  // NOS FILIALES
  {
    city: "Yaoundé",
    title: "Institut Universitaire Bissaï",
    address: "Ekoumou, Deux Chevaux",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    title: "Royal FM",
    address: "Sapeur Mimboman",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    title: "Complexe Hospitalier La Mamu",
    address: "Ngulzamba Nouvelle Route",
    image: "/image-1-3.png",
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

export const ValuesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[38px] px-[79px] py-[60px] bg-foundationbluelight">
      <div className="flex flex-col w-full max-w-[1280px] items-center" />

      <nav className="flex items-center gap-[34px] px-[31px]">
        {cityTabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            className={`h-auto px-16 py-0.5 rounded-3xl overflow-hidden ${
              tab.active
                ? "bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)]"
                : "bg-grayswhite shadow-[0px_0px_2px_#00000040]"
            }`}
          >
            <span
              className={`[font-family:'Roboto',Helvetica] font-medium text-2xl text-center tracking-[0] leading-[35px] whitespace-nowrap ${
                tab.active
                  ? "text-white"
                  : "bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]"
              }`}
            >
              {tab.label}
            </span>
          </Button>
        ))}
      </nav>

      <div className="flex flex-col items-start gap-[22px]">
        <div className="grid grid-cols-4 gap-[29px] w-full max-w-[1280px]">
          {locationCards.map((location, index) => (
            <Card
              key={index}
              className="bg-grayswhite rounded-[10px] overflow-hidden shadow-[0px_0px_2px_#00000040] border-0"
            >
              <CardContent className="flex flex-col items-start gap-2 p-6">
                <div className="flex flex-col items-start gap-[3px]">
                  <div className="flex items-center gap-[7px]">
                    <div className="w-2 h-2 bg-foundation-bluenormal rounded" />
                    <span className="font-m3-label-large font-[number:var(--m3-label-large-font-weight)] text-foundationgreylight-active text-[length:var(--m3-label-large-font-size)] tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] [font-style:var(--m3-label-large-font-style)]">
                      {location.city}
                    </span>
                  </div>

                  <div className="flex flex-col gap-[2px]">
                    <h3 className="bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-m3-title-large-emphasized font-[number:var(--m3-title-large-emphasized-font-weight)] text-[length:var(--m3-title-large-emphasized-font-size)] tracking-[var(--m3-title-large-emphasized-letter-spacing)] leading-[var(--m3-title-large-emphasized-line-height)] [font-style:var(--m3-title-large-emphasized-font-style)] whitespace-nowrap">
                      {location.title}
                    </h3>
                    <p className="[font-family:'Roboto',Helvetica] font-normal text-foundationgreylight-active text-[10px] tracking-[-0.18px] leading-[27px] whitespace-nowrap">
                      {location.address}
                    </p>
                  </div>
                </div>

                <div className="relative w-full">
                  <div className="w-full h-[147px] bg-grayswhite rounded-[10px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt={location.title}
                      src={location.image}
                    />
                  </div>

                  <Button className="absolute bottom-4 left-1/2 -translate-x-1/2 h-8 px-[26px] py-1 bg-foundation-bluenormal hover:bg-foundation-bluedark-hover rounded-[35px] overflow-hidden">
                    <span className="[font-family:'Karla',Helvetica] font-semibold text-light-text text-[17px] text-center tracking-[0.20px] leading-5 whitespace-nowrap">
                      Google Map
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[11px] p-2.5">
            {paginationDots.map((dot, index) => (
              <div
                key={index}
                className={`w-2 h-2 bg-black rounded ${
                  dot.active ? "" : "opacity-20"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-[25px]">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-[50px] border-black bg-white hover:bg-gray-50"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-[50px] border-black bg-white hover:bg-gray-50"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
