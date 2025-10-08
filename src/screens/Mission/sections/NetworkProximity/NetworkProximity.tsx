import React from "react";

export const NetworkProximity = (): JSX.Element => {
  const iconRows = Array(6)
    .fill(null)
    .map((_, rowIndex) =>
      Array(6)
        .fill(null)
        .map((_, colIndex) => ({
          left: `left-${colIndex * 8}`,
          key: `icon-${rowIndex}-${colIndex}`,
        })),
    );

  const images = [
    {
      url: "/picture.png",
      containerClass: "pt-20 pb-0 px-0",
      imageClass: "flex-1 grow",
    },
    {
      url: "/picture-1.png",
      containerClass: "",
      imageClass: "w-[201.33px]",
    },
    {
      url: "/picture-2.png",
      containerClass: "pt-10 pb-0 px-0",
      imageClass: "flex-1 grow",
    },
  ];

  return (
    <section className="flex items-center gap-[60px] px-20 py-[60px] bg-foundationbluelight relative">
      <div className="inline-flex flex-col items-start gap-4 absolute top-[242px] left-5">
        {iconRows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="relative w-44 h-4">
            {row.map((icon) => (
              <img
                key={icon.key}
                className={`absolute top-0 ${icon.left} w-4 h-4`}
                alt="Icon jam icons"
                src="/icon---jam-icons---outline---logos---plus.svg"
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-start gap-2 flex-1">
        {images.map((image, index) => (
          <div
            key={`image-${index}`}
            className={`flex items-start gap-2.5 ${image.containerClass} ${index === 1 ? "" : "flex-1 grow"}`}
          >
            <div
              className={`${image.imageClass} bg-[url(${image.url})] h-96 rounded-[20px] bg-cover bg-[50%_50%]`}
            />
          </div>
        ))}
      </div>

      <div className="w-[600px] flex flex-col items-start gap-6">
        <div className="flex flex-col items-start gap-2 self-stretch w-full">
          <h2 className="text-blue-gray900 self-stretch [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[56px] tracking-[0] leading-[61.6px]">
            Un réseau au service de la proximité
          </h2>
        </div>

        <p className="text-foundationgreynormal self-stretch [font-family:'Karla',Helvetica] font-normal text-lg tracking-[0] leading-[28.8px]">
          Renaprov a construit au fil des années un maillage solide
          d&apos;agences implantées dans les marchés et quartiers stratégiques.
          Cette proximité nous permet d&apos;accompagner efficacement nos
          clients au quotidien, tandis que nos filiales renforcent notre mission
          et diversifient nos services.
        </p>
      </div>
    </section>
  );
};
