import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const cities = [
  { id: "yaounde", label: "Yaoundé" },
  { id: "douala", label: "Douala et Environs" },
  { id: "autres", label: "Autres Villes" },
];

const agencies = [
  // YAOUNDÉ AGENCIES
  {
    city: "Yaoundé",
    name: "Nkoabang",
    address: "Ngulzamba Nouvelle Route",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    name: "Odza",
    address: "Borne 12 Odza",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    name: "Centrale",
    address: "Immeuble Jaco",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    name: "Nkomo",
    address: "Carrefour Nkomo",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    name: "Ekoumou",
    address: "Mairie Ekoumou",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    name: "Mvog-Mbi",
    address: "Marché Mvog-Mbi",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    name: "Biyem Assi",
    address: "Carrefour Acacias",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    name: "Mokolo Marché",
    address: "Bata Mokolo",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    name: "Elig Effa",
    address: "Montée Elig Effa",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    name: "Mendong",
    address: "Entrée Simbock",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    name: "Ngousso",
    address: "Fabrique Ngousso",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    name: "Elig Edzoa",
    address: "Elig Edzoa Face Ancien Feicom",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    name: "Messassi",
    address: "Messassi Face Vision Confort",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    name: "Mimboman",
    address: "Terminus Mimboman",
    image: "/image-1-3.png",
  },

  // DOUALA & SES ENVIRONS
  {
    city: "Douala",
    name: "New Deido",
    address: "Marché New Deido",
    image: "/image-1-3.png",
  },
  {
    city: "Douala",
    name: "Ndokoti",
    address: "Entrée Bellavie",
    image: "/image-1-3.png",
  },
  {
    city: "Douala",
    name: "Boumnyebel",
    address: "Carrefour Boumnyebel",
    image: "/image-1-3.png",
  },
  {
    city: "Édéa",
    name: "Édéa",
    address: "Avenue des Banques",
    image: "/image-1-3.png",
  },

  // AUTRES VILLES
  {
    city: "Obala",
    name: "Obala",
    address: "Congelcam Obala",
    image: "/image-1-3.png",
  },
  {
    city: "Nkoteng",
    name: "Nkoteng",
    address: "Congelcam Obala",
    image: "/image-1-3.png",
  },
  {
    city: "Sa'a",
    name: "Sa'a",
    address: "Marché Sa'a",
    image: "/image-1-3.png",
  },
  {
    city: "Bafoussam",
    name: "Bafoussam",
    address: "Entrée Marché B",
    image: "/image-1-3.png",
  },
  {
    city: "Bertoua",
    name: "Bertoua",
    address: "Congelcam Bertoua",
    image: "/image-1-3.png",
  },
  {
    city: "Mbalmayo",
    name: "Mbalmayo",
    address: "Marché Mbalmayo",
    image: "/image-1-3.png",
  },
  {
    city: "Mfou",
    name: "Mfou",
    address: "Place des Fêtes de Mfou",
    image: "/image-1-3.png",
  },
  {
    city: "Buea",
    name: "Buea",
    address: "Molyko Presbyterian Church",
    image: "/image-1-3.png",
  },
  {
    city: "Kribi",
    name: "Kribi",
    address: "Montée Nkol Biteng",
    image: "/image-1-3.png",
  },
  {
    city: "Eseka",
    name: "Eseka",
    address: "Marché Eseka",
    image: "/image-1-3.png",
  },

  // NOS FILIALES
  {
    city: "Yaoundé",
    name: "Institut Universitaire Bissaï",
    address: "Ekoumou, Deux Chevaux",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    name: "Royal FM",
    address: "Sapeur Mimboman",
    image: "/image-1-3.png",
  },
  {
    city: "Yaoundé",
    name: "Complexe Hospitalier La Mamu",
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

export const BranchLocator = (): JSX.Element => {
  const [selectedCity, setSelectedCity] = useState("yaounde");

  // Filtrer les agences selon la ville sélectionnée
  const filteredAgencies = agencies.filter((agency) => {
    if (selectedCity === "yaounde") {
      return agency.city === "Yaoundé";
    } else if (selectedCity === "douala") {
      return agency.city === "Douala" || agency.city === "Édéa";
    } else if (selectedCity === "autres") {
      return !["Yaoundé", "Douala", "Édéa"].includes(agency.city);
    }
    return false;
  });

  return (
    <section className="flex flex-col items-center gap-[38px] px-[79px] py-[60px] bg-foundationbluelight">
      <div className="flex flex-col items-center w-full max-w-[1280px]">
        <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-black text-5xl text-center tracking-[-0.96px] leading-[56.6px]">
          Trouvez une agence
          <br />
          RENAPROV FINANCE SA
        </h2>
      </div>

      <div className="flex items-center gap-[34px] px-[31px]">
        {cities.map((city) => (
          <Button
            key={city.id}
            onClick={() => setSelectedCity(city.id)}
            className={`h-auto px-16 py-0.5 rounded-3xl overflow-hidden ${
              selectedCity === city.id
                ? "bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] text-white hover:bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)]"
                : "bg-grayswhite shadow-[0px_0px_2px_#00000040] hover:bg-grayswhite"
            }`}
          >
            <span
              className={`[font-family:'Roboto',Helvetica] font-medium text-2xl tracking-[0] leading-[35px] whitespace-nowrap ${
                selectedCity === city.id
                  ? "text-white"
                  : "bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]"
              }`}
            >
              {city.label}
            </span>
          </Button>
        ))}
      </div>

      <div className="flex flex-col items-start gap-[22px]">
        <div className="flex items-start gap-[29px] overflow-x-auto">
          {filteredAgencies.map((agency, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[313px] bg-grayswhite rounded-[10px] overflow-hidden shadow-[0px_0px_2px_#00000040] border-0"
            >
              <CardContent className="flex flex-col items-start gap-2 p-6">
                <div className="flex flex-col w-[210px] items-start gap-[3px]">
                  <div className="flex items-center gap-[7px] h-[15px]">
                    <div className="w-2 h-2 bg-foundationbluenormal rounded" />
                    <div className="text-foundationgreylight-active text-[length:var(--m3-label-large-font-size)] tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] font-m3-label-large font-[number:var(--m3-label-large-font-weight)] [font-style:var(--m3-label-large-font-style)]">
                      {agency.city}
                    </div>
                  </div>

                  <div className="flex flex-col gap-[3px] w-full">
                    <h3 className="bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-m3-title-large-emphasized font-[number:var(--m3-title-large-emphasized-font-weight)] text-[length:var(--m3-title-large-emphasized-font-size)] tracking-[var(--m3-title-large-emphasized-letter-spacing)] leading-[var(--m3-title-large-emphasized-line-height)] [font-style:var(--m3-title-large-emphasized-font-style)] whitespace-nowrap">
                      {agency.name}
                    </h3>
                    <p className="[font-family:'Roboto',Helvetica] font-normal text-foundationgreylight-active text-[10px] tracking-[-0.18px] leading-[27px] whitespace-nowrap">
                      {agency.address}
                    </p>
                  </div>
                </div>

                <div className="relative w-[265px] h-[163px]">
                  <div className="w-[265px] h-[147px] bg-grayswhite rounded-[10px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Agency location"
                      src={agency.image}
                    />
                  </div>

                  <Button className="absolute top-[calc(50%+50px)] left-1/2 -translate-x-1/2 h-8 px-[26px] py-1 bg-foundationbluenormal hover:bg-foundationbluenormal rounded-[35px] overflow-hidden">
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
                className={`w-2 h-2 rounded ${
                  dot.active ? "bg-black" : "bg-black opacity-20"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-[25px]">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-[50px] border-black"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-[50px] border-black"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
