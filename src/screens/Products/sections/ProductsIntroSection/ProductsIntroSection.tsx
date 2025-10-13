import React from "react";

// CSS Classes extraites pour la maintenabilité
const gradientTextClass =
  "bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]";

export const ProductsIntroSection = (): JSX.Element => {
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
    </section>
  );
};
