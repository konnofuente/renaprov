import { CircleCheck as CheckCircle2Icon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const products = [
  {
    id: "maso",
    title: "MASO : Solidarité, assistance et opportunités pour tous",
    description: (
      <>
        La <span className="font-bold">MASO de RENAPROV </span>
        accompagne les Camerounais pour sortir du cercle vicieux de la pauvreté,
        en donnant accès à des services sociaux essentiels et à des opportunités
        uniques.
      </>
    ),
    benefits: [
      {
        text: (
          <>
            <span className="font-bold">Santé et Education </span>
            <span>– Jusqua </span>
            <span className="font-bold">35% de réduction</span>
            <span> sur vos frais</span>
          </>
        ),
      },
      {
        text: (
          <>
            <span className="font-bold">Tombola & communauté </span>
            <span>
              – Gagnez maisons, motos et financements tout en participant à une
              communauté solidaire
            </span>
          </>
        ),
      },
    ],
    imagePosition: "left",
  },
  {
    id: "ora",
    title: "ORA : Épargnez aujourd'hui, concrétisez vos projets demain",
    description:
      "ORA est le plan d'épargne intelligent de RENAPROV qui vous permet de préparer vos projets personnels et professionnels avec sécurité et flexibilité.",
    benefits: [
      {
        text: "Objectifs multiples – épargne pour terrain, études, business ou équipements",
      },
      {
        text: "Sécurité et rendement – vos fonds sont sécurisés et fructifient selon vos plan",
      },
    ],
    imagePosition: "right",
  },
];

export const ProductSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] py-8 sm:py-10 md:py-12 lg:py-[63px] w-full bg-white gap-8 sm:gap-10 md:gap-12 lg:gap-[63px]">
      <h2 className="w-full max-w-[1320px] bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-3xl sm:text-4xl md:text-5xl text-center tracking-[-0.96px] leading-tight md:leading-[56.6px]">
        Nos Produits
      </h2>

      <div className="flex flex-col w-full max-w-[1261px] gap-8 sm:gap-10 md:gap-12 lg:gap-[63px]">
        {products.map((product) => (
          <article
            key={product.id}
            className={`flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-[70px] ${
              product.imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className="w-full lg:w-[594px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[420px] flex-shrink-0 bg-gray-200 rounded-lg" />

            <div className="flex flex-col items-start gap-4 md:gap-[17px] flex-1 w-full lg:max-w-[577px]">
              <div className="flex flex-col items-start gap-3 md:gap-[15px] w-full">
                <div className="flex flex-col items-start gap-2 w-full">
                  <h3 className="w-full text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight md:leading-[44px] bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Bricolage_Grotesque',Helvetica] font-bold tracking-[0]">
                    {product.title}
                  </h3>
                </div>

                <p className="w-full [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-foundationgreynormal text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed md:leading-[19.8px]">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 md:gap-[7px] w-full">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-2.5 w-full">
                    <CheckCircle2Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-foundation-bluenormal mt-0.5" />
                    <p className="flex-1 [font-family:'Karla',Helvetica] font-normal text-foundationgreynormal text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed md:leading-[19px]">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>

              <Button className="w-full sm:w-auto sm:min-w-[300px] md:min-w-[350px] lg:max-w-[419px] h-auto px-6 md:px-8 py-3 md:py-4 bg-foundation-bluenormal hover:bg-foundation-bluedark-hover rounded-[35px]">
                <span className="[font-family:'Karla',Helvetica] font-semibold text-light-text text-base sm:text-lg md:text-xl text-center tracking-[0.20px] leading-5">
                  Rejoindre MASO dès aujourd&apos;hui
                </span>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
