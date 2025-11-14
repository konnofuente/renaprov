import { CircleCheck as CheckCircle2Icon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "maso",
    title: "MASO : Solidarité, assistance et opportunités pour tous",
    description: (
      <>
        La <span className="font-bold">MASO de RENAPROV FINANCE S.A </span>
        accompagne les Camerounais à sortir du cercle vicieux de la pauvreté,
        en donnant accès à des services sociaux essentiels et à des opportunités
        uniques.
      </>
    ),
    benefits: [
      {
        text: (
          <>
            <span className="font-bold">Education </span>
            <span>– Jusqu'à </span>
            <span className="font-bold">20% de réduction</span>
            <span> sur vos frais</span>
          </>
        ),
      },
      {
        text: (
          <>
            <span className="font-bold">Santé </span>
            <span>– Jusqu'à </span>
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
    imageSrc: "/logo maso solidarite.png",
    imageAlt: "MASO - Solidarité, assistance et opportunités pour tous",
  },
  {
    id: "ora",
    title: "ORA : Épargnez aujourd'hui, concrétisez vos projets demain",
    description:
      "ORA est le plan d'épargne de RENAPROV FINANCE S.A qui vous permet de préparer vos projets personnels et professionnels avec sécurité et flexibilité.",
    benefits: [
      {
        text: "Objectifs multiples – épargne pour terrain, études, business ou équipements",
      },
      {
        text: "Sécurité et rendement – vos fonds sont sécurisés et fructifient selon vos plan",
      },
    ],
    imagePosition: "right",
    imageSrc: "/new/different advanctage de Ora.jpeg",
    imageAlt: "ORA - Épargnez aujourd'hui, concrétisez vos projets demain",
  },
];

export const ProductSubsection = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section id="produits" className="flex flex-col items-center justify-between px-6 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] py-8 sm:py-10 md:py-12 lg:py-[63px] w-full bg-white gap-8 sm:gap-10 md:gap-12 lg:gap-[63px]">
      <h2 className="w-full max-w-[1320px] bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-3xl sm:text-4xl md:text-5xl text-center tracking-[-0.96px] leading-tight md:leading-[56.6px]">
        Nos Produits
      </h2>

      <div className="flex flex-col w-full max-w-[1261px] gap-8 sm:gap-10 md:gap-12 lg:gap-[63px]">
        {products.map((product) => (
          <article
            key={product.id}
            className={`flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-[70px] ${
              product.imagePosition === "right"
                ? "lg:flex-row-reverse"
                : "lg:flex-row"
            }`}
          >
            {/* Mobile: Title first (order-1), Desktop: Content first (lg:order-1) */}
            <div className="flex flex-col items-start gap-4 md:gap-[17px] flex-1 w-full lg:max-w-[577px] order-1 lg:order-1">
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
                  <div
                    key={index}
                    className="flex items-start gap-2 sm:gap-2.5 w-full"
                  >
                    <CheckCircle2Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-foundation-bluenormal mt-0.5" />
                    <p className="flex-1 [font-family:'Karla',Helvetica] font-normal text-foundationgreynormal text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed md:leading-[19px]">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => {
                  if (product.id === "maso") {
                    navigate("/maso");
                  }
                  // Pour ORA, on peut ajouter une logique spécifique plus tard
                }}
                className="w-full sm:w-auto bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg min-h-[48px] sm:min-h-[52px] md:min-h-[56px] flex items-center justify-center"
              >
                <span className="w-full text-center leading-tight">
                  {product.id === "ora" ? "Découvrir ORA" : "Rejoindre MASO dès aujourd'hui"}
                </span>
              </Button>
            </div>

            {/* Mobile: Image second (order-2), Desktop: Image second (lg:order-2) */}
            <div className="w-full lg:w-[594px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[420px] flex-shrink-0 rounded-lg overflow-hidden order-2 lg:order-2">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
