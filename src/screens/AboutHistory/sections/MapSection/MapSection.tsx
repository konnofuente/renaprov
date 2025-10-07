import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const valuesData = [
  {
    icon: "/layer-1-1.svg",
    title: "Intégrité & Transparence",
    description:
      "Nous agissons avec honnêteté dans toutes nos opérations, en garantissant une communication claire, des pratiques loyales et une transparence totale avec nos clients",
  },
  {
    icon: "/frame-1618873126.svg",
    title: "Solidarité & Proximité",
    description:
      "Proches des marchés, des familles et des commerçants, nous mettons la solidarité au cœur de nos actions .",
  },
  {
    icon: "/frame-1618873126-1.svg",
    title: "Excellence Opérationnelle",
    description:
      "Nous nous engageons à offrir des services de microfinance fiables, efficaces et adaptés, avec un personnel compétent.",
  },
];

export const MapSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[71px] py-[91px] px-[103px] bg-white">
      <div className="flex flex-col w-full max-w-[1280px] items-center">
        <h2 className="bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-transparent text-5xl text-center tracking-[-0.96px] leading-[56.6px] whitespace-nowrap">
          Nos valeurs
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-[49px] w-full max-w-[1280px]">
        {valuesData.map((value, index) => (
          <Card
            key={index}
            className="flex flex-col w-[363px] bg-foundation-bluedarker rounded-[17px] overflow-hidden shadow-[0px_4px_8px_#00000040] border-0"
          >
            <CardContent className="flex flex-col items-start gap-[27px] p-[42px_29px]">
              <img
                className="w-[72px] h-[72px]"
                alt={`${value.title} icon`}
                src={value.icon}
              />

              <div className="flex flex-col gap-[15px] w-full">
                <h3 className="font-m3-headline-medium-emphasized font-[number:var(--m3-headline-medium-emphasized-font-weight)] text-white text-[length:var(--m3-headline-medium-emphasized-font-size)] tracking-[var(--m3-headline-medium-emphasized-letter-spacing)] leading-[var(--m3-headline-medium-emphasized-line-height)] [font-style:var(--m3-headline-medium-emphasized-font-style)]">
                  {value.title}
                </h3>

                <p className="font-body-small font-[number:var(--body-small-font-weight)] text-white text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                  {value.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
