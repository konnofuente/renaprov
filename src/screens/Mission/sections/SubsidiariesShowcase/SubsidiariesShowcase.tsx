import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const agenciesData = [
  {
    id: 1,
    type: "light",
    location: "Quartier X, Ville Y",
    phone: "+237 XXX XXX XXX",
    title: "Institut Universitaire Bissai",
    description:
      "Un établissement d'enseignement supérieur reconnu pour la qualité de ses formations. L'Institut Universitaire Bissai prépare les jeunes aux métiers d'avenir grâce à des programmes adaptés, un corps enseignant qualifié et une ouverture sur l'innovation.",
    mainImage: "/image-3.png",
    additionalImages: [],
    buttons: [
      { text: "S'inscrire", variant: "primary" },
      { text: "Découvrir les formations", variant: "secondary" },
    ],
    imagePosition: "left",
  },
  {
    id: 2,
    type: "dark",
    location: "Quartier X, Ville Y",
    phone: "+237 XXX XXX XXX",
    title: "Complexe Hospitalier La Mamu",
    description:
      "Un établissement moderne offrant des soins accessibles et de qualité, avec une approche humaine et proche des patients.",
    mainImage: "/image-3-1.png",
    additionalImages: ["/image-2.png", "/image-4.png"],
    buttons: [
      { text: "Prendre rendez-vous", variant: "secondary" },
      { text: "Découvrir nos services", variant: "primary" },
    ],
    imagePosition: "right",
  },
  {
    id: 3,
    type: "light",
    location: "Quartier X, Ville Y",
    phone: "+237 XXX XXX XXX",
    title: "La Socagi",
    description:
      "Société spécialisée dans la gestion et l'investissement, La Socagi accompagne les entreprises et particuliers dans leurs projets économiques. Son objectif : favoriser la croissance durable, sécuriser les investissements et créer de la valeur à long terme",
    mainImage: "/image-3-2.png",
    additionalImages: [],
    buttons: [
      { text: "Nous rejoindre", variant: "primary" },
      { text: "Découvrir nos offres", variant: "secondary" },
    ],
    imagePosition: "left",
  },
  {
    id: 4,
    type: "dark",
    location: "Quartier X, Ville Y",
    phone: "+237 XXX XXX XXX",
    title: "ORA , Cotiser Petit a Petit",
    description:
      "Un établissement moderne offrant des soins accessibles et de qualité, avec une approche humaine et proche des patients.",
    mainImage: "/image-3-3.png",
    additionalImages: ["/image-2-1.png", "/image-4-1.png"],
    buttons: [
      { text: "Prendre rendez-vous", variant: "secondary" },
      { text: "Découvrir nos services", variant: "primary" },
    ],
    imagePosition: "right",
  },
];

export const SubsidiariesShowcase = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[27px] px-0 py-[37px] bg-foundationbluelight">
      {agenciesData.map((agency) => (
        <Card
          key={agency.id}
          className={`w-full max-w-[1440px] border-0 shadow-none ${
            agency.type === "light"
              ? "bg-foundationbluelight"
              : "bg-foundation-bluedarker"
          }`}
        >
          <CardContent className="p-20">
            <div
              className={`flex items-center gap-[75px] ${
                agency.imagePosition === "right" ? "flex-row-reverse" : ""
              }`}
            >
              {agency.imagePosition === "left" && (
                <div className="relative w-[567px] h-[413px] flex-shrink-0">
                  <img
                    className="w-full h-full rounded-[13px] object-cover"
                    alt={agency.title}
                    src={agency.mainImage}
                  />
                </div>
              )}

              {agency.imagePosition === "right" &&
                agency.additionalImages.length > 0 && (
                  <div className="relative w-[607px] h-[455px] flex-shrink-0">
                    <img
                      className="absolute top-0 left-0 w-[567px] h-[413px] rounded-[13px] object-cover"
                      alt={agency.title}
                      src={agency.mainImage}
                    />
                    <img
                      className="absolute top-[262px] left-[318px] w-[289px] h-[193px] rounded-[14px] object-cover"
                      alt={`${agency.title} additional`}
                      src={agency.additionalImages[0]}
                    />
                    <img
                      className="absolute top-[255px] left-[39px] w-[267px] h-[200px] rounded-2xl object-cover"
                      alt={`${agency.title} additional`}
                      src={agency.additionalImages[1]}
                    />
                  </div>
                )}

              <div className="flex flex-col w-[600px] items-start gap-[45px]">
                <div className="flex flex-col items-start gap-[17px] w-full">
                  <div className="inline-flex items-center gap-3">
                    <div className="flex items-center gap-[9px]">
                      <img
                        className="w-[25px] h-[25px]"
                        alt="Location"
                        src="/carbon-location-filled.svg"
                      />
                      <p
                        className={`[font-family:'Karla',Helvetica] font-normal text-[21px] tracking-[0] leading-[75.0px] whitespace-nowrap ${
                          agency.type === "light"
                            ? "text-foundation-bluedark-hover"
                            : "text-foundationbluelight"
                        }`}
                      >
                        {agency.location}
                      </p>
                    </div>

                    <div
                      className={`flex items-center gap-3 border-b ${
                        agency.type === "light"
                          ? "border-[#00678f]"
                          : "border-[#f5fcff]"
                      }`}
                    >
                      <img
                        className="w-[23px] h-[23px]"
                        alt="Phone"
                        src="/famicons-call.svg"
                      />
                      <p
                        className={`[font-family:'Karla',Helvetica] font-normal text-[21px] tracking-[0] leading-[75.0px] whitespace-nowrap ${
                          agency.type === "light"
                            ? "text-foundation-bluedark-hover"
                            : "text-foundationbluelight"
                        }`}
                      >
                        {agency.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-6 w-full">
                    <h2
                      className={`w-full [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[56px] tracking-[0] leading-[61.6px] ${
                        agency.type === "light"
                          ? "bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]"
                          : "text-grayswhite"
                      }`}
                    >
                      {agency.title}
                    </h2>

                    <p
                      className={`w-full [font-family:'Karla',Helvetica] font-normal text-lg tracking-[0] leading-[28.8px] ${
                        agency.type === "light"
                          ? "text-foundation-bluedarker"
                          : "text-foundation-greylight"
                      }`}
                    >
                      {agency.description}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-[31px]">
                  {agency.buttons.map((button, index) => (
                    <Button
                      key={index}
                      className={`h-auto px-[26px] py-4 rounded-[35px] [font-family:'Karla',Helvetica] font-semibold text-xl text-center tracking-[0.20px] leading-5 whitespace-nowrap ${
                        button.variant === "primary"
                          ? agency.type === "light"
                            ? "bg-foundation-bluedark text-foundationbluelight hover:bg-foundation-bluedark-hover"
                            : "bg-foundationbluenormal text-grayswhite hover:bg-foundation-bluedark"
                          : "bg-grayswhite text-foundationbluenormal hover:bg-foundation-greylight"
                      }`}
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
