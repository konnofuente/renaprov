import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const teamMembers = [
  {
    name: "rev Pasteur BISSAI EMMANUEL NOEL",
    title: "PRÉSIDENT DU CONSEIL D'ADMINISTRATION rev Pasteur BISSAI",
    image: "..//frame-2087326088.png",
  },
  {
    name: "Mme Bissai Stephanie",
    title: "DIRECTEUR DE L'EXPLOITATION ET DE LA PRODUCTION",
    image: "..//frame-2087326089.png",
  },
  {
    name: "MBALA NDONGO FERDINAND",
    title: "DIRECTEUR GÉNÉRAL DÉLÉGUÉ",
    image: "..//frame-2087326090.png",
  },
  {
    name: "DZOKOUO KENGNE ALEX FRIEDMAN",
    title: "DIRECTEUR GENERAL ADJOINT",
    image: "..//frame-2087326091.png",
  },
  {
    name: "EMMANUELLE NATACHA EPSE NYA",
    title: "ADMINISTRATEUR DIRECTEUR GÉNÉRALE",
    image: "..//frame-2087326092.png",
  },
  {
    name: "M. NYEMB MESSINGA CYRILLE",
    title: "DIRECTEUR DE L'ADMINISTRATION DU RÉSEAU",
    image: "..//frame-2087326093.png",
  },
];

export const TeamSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2.5 pt-[30px] pb-40 px-20 w-full bg-white">
      <div className="flex flex-col items-center gap-10 w-full">
        <h2 className="bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-transparent text-5xl text-center tracking-[-0.96px] leading-[56.6px]">
          En attendant les photos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px_20px] w-full">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="flex flex-col items-start justify-end h-[446px] rounded-lg border-t-8 border-b-8 border-[#00acee] border-x-0 overflow-hidden"
              style={{
                background: `url(${member.image}) 50% 50% / cover`,
              }}
            >
              <CardContent className="flex flex-col w-full items-center justify-center gap-2 p-0 bg-[#12121233]">
                <div className="py-4 px-4 flex flex-col items-center justify-center gap-2 w-full">
                  <h3 className="w-full [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-xl text-center tracking-[0] leading-8">
                    {member.name}
                  </h3>
                  <p className="w-full [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-sm text-center tracking-[0] leading-5">
                    {member.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
