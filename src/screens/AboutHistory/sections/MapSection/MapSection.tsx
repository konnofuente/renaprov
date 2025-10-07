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
    <section className="flex flex-col w-full items-center gap-8 md:gap-16 lg:gap-[71px] py-12 md:py-16 lg:py-[91px] px-4 md:px-8 lg:px-[103px] bg-white">
      <div className="flex flex-col w-full max-w-[1280px] items-center">
        <h2 className="bg-gradient-to-br from-blue-400 to-slate-800 bg-clip-text text-transparent font-bold text-3xl md:text-4xl lg:text-5xl text-center tracking-tight leading-tight">
          Nos valeurs
        </h2>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full"
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
    </section>
  );
};
