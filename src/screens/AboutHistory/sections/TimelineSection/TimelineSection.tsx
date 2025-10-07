import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const timelineData = [
  {
    year: "1996 – Création",
    items: [
      "Fondation officielle de Renaprov",
      "Lancement du premier bureau pour accompagner les petits commerçants.",
      'Début de la mission : "Une banque solidaire au service des marchés."',
    ],
  },
  {
    year: "2006 – Expansion",
    items: [
      "Ouverture de nouvelles agences dans les principaux marchés.",
      "Développement des premiers produits de microfinance.",
      "Renaprov devient un acteur reconnu dans la proximité bancaire.",
    ],
  },
  {
    year: "2012 – Consolidation",
    items: [
      "Structuration du top management et modernisation de la gouvernance.",
      "Mise en place de nouveaux services financiers adaptés aux besoins locaux.",
      "Début des partenariats stratégiques avec des institutions locales.",
    ],
  },
  {
    year: "2018 – Diversification",
    items: [
      "Création et intégration des filiales (hôpital, université, radio, etc.).",
      "Lancement de projets sociaux et solidaires.",
      "Accent sur la transformation numérique des services.",
    ],
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

export const TimelineSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-10 px-[77px] py-[52px] w-full bg-foundationbluelight">
      <div className="flex flex-col items-start gap-20 max-w-screen-xl w-full">
        <div className="flex items-center gap-20 w-full max-w-[612px] ml-auto">
          <p className="[font-family:'Karla',Helvetica] font-normal text-black text-lg tracking-[0] leading-[27px]">
            Depuis 1996, Renaprov accompagne les Camerounais en proposant des
            services financiers accessibles et solidaires. D&apos;une petite
            institution ancrée dans le secteur informel, nous sommes devenus un
            réseau national de microfinance, reconnu pour notre proximité avec
            les clients et notre engagement pour le développement social et
            économique.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-9 w-full max-w-[1232px]">
        {timelineData.map((timeline, index) => (
          <Card
            key={index}
            className="flex-1 rounded-[11px] overflow-hidden bg-[linear-gradient(180deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] border-0"
          >
            <CardContent className="p-[25px] pt-[30px]">
              <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-10 mb-[70px]">
                {timeline.year}
              </h3>

              <div className="flex flex-col gap-[21px]">
                {timeline.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-[16px]">
                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                      <img
                        className="w-5 h-5"
                        alt="CheckIcon icon"
                        src="/frame-1618873138.svg"
                      />
                    </div>
                    <p className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm tracking-[0] leading-[14px] flex-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between w-full max-w-[1253px]">
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
    </section>
  );
};
