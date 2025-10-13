import { Card, CardContent } from "../../../../components/ui/card";

// CSS Classes extraites pour la maintenabilité
const gradientTextClass =
  "bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]";

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

export const FeatureCardsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white flex flex-col items-center px-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Header Section - Même design que la page d'accueil */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
        <div className="w-full lg:max-w-2xl">
          <h2 className="font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 sm:mb-6">
            Tous sur les{" "}
            <span className={gradientTextClass}>
              Produit Renaprov
            </span>
          </h2>
        </div>

        <div className="w-full lg:max-w-2xl">
          <p className="font-normal text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Depuis 1995, Renaprov accompagne les Camerounais en proposant des services financiers accessibles et solidaires. 
            D'une petite institution ancrée dans le secteur informel, nous sommes devenus un réseau national de microfinance, 
            reconnu pour notre proximité avec les clients et notre engagement pour le développement social et économique.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-7xl">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {valuesData.map((value, index) => (
            <Card
              key={index}
              className="h-[280px] md:h-[284px] flex flex-col w-full items-center justify-between bg-foundation-bluedarker rounded-[17px] overflow-hidden shadow-lg"
            >
              <CardContent className="flex flex-col items-start gap-4 md:gap-6 p-4 md:p-6 lg:p-8 h-full justify-between">
                <img
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-[71px] lg:h-[71px]"
                  alt={`${value.title} icon`}
                  src={value.icon}
                />

                <div className="flex flex-col gap-3 md:gap-4 w-full flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                    {value.title}
                  </h3>

                  <p className="text-xs md:text-sm text-white leading-relaxed flex-1">
                    {value.description}
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
