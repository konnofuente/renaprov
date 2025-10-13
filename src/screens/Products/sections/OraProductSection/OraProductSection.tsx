import React from "react";
import { Button } from "../../../../components/ui/button";
import { Check } from "lucide-react";

const oraProducts = [
  "ORA SCOLAIRE",
  "ORA PRÉVOYANCE", 
  "ORA ACADÉMIQUE",
  "ORA IMMOBILIER",
  "ORA ÉQUIPEMENT",
  "ORA SANTÉ"
];

export const OraProductSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left - Content */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foundation-bluenormal leading-tight">
                ORA : Épargnez aujourd'hui, concrétisez vos projets demain
              </h3>
              
              <p className="text-lg sm:text-xl md:text-2xl text-foundation-greydarker leading-relaxed">
                ORA est le plan d'épargne intelligent de RENAPROV qui vous permet de préparer vos projets personnels 
                et professionnels avec sécurité et flexibilité.
              </p>
            </div>
            
            {/* Benefits List */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-foundation-bluenormal rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-lg md:text-xl text-foundation-greydarker leading-relaxed">
                    <span className="font-semibold">Objectifs multiples</span> - Épargne pour terrain, études, business ou équipements
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-foundation-bluenormal rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-lg md:text-xl text-foundation-greydarker leading-relaxed">
                    <span className="font-semibold">Sécurité et rendement</span> - vos fonds sont sécurisés et fructifient selon vos plans
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] text-white hover:opacity-90 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-[40px] font-semibold text-lg sm:text-xl md:text-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                Je rejoins ORA dès aujourd'hui
              </Button>
            </div>
          </div>
          
          {/* Right - ORA Products Graphic */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              <div className="bg-gradient-to-br from-foundationbluelight to-foundation-bluenormal rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl">
                {/* Central Figure */}
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-4xl sm:text-5xl">👩‍💻</span>
                  </div>
                </div>
                
                {/* ORA Products Grid */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {oraProducts.map((product, index) => (
                    <div
                      key={index}
                      className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center"
                    >
                      <div className="text-white font-semibold text-xs sm:text-sm md:text-base leading-tight">
                        {product}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* RENAPROV Logo */}
                <div className="flex justify-end mt-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-white font-bold text-sm sm:text-base">RENAPROV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
