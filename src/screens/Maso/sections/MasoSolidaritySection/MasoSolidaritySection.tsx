import React from "react";
import { Button } from "../../../../components/ui/button";

export const MasoSolidaritySection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Une solidarité camerounaise qui change des vies
            </h2>
            
            <p className="[font-family:'Bricolage_Grotesque',Helvetica] text-foundationgreylight-active text-sm sm:text-base md:text-lg leading-relaxed mb-8">
              La MASO incarne l'esprit de solidarité camerounaise en créant un réseau d'entraide 
              qui permet à chaque membre de bénéficier de services essentiels. Cette initiative 
              favorise l'inclusion sociale et économique en offrant des avantages concrets dans 
              les domaines de la santé, de l'éducation et de l'assistance sociale.
            </p>

            <Button className="bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
              Découvrir nos services
            </Button>
          </div>

          {/* Image Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <img
                  className="w-full h-48 sm:h-56 rounded-lg object-cover"
                  alt="Solidarité MASO - Événement communautaire"
                  src="/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/hero1.png";
                  }}
                />
              </div>
              <div className="space-y-4">
                <img
                  className="w-full h-22 sm:h-26 rounded-lg object-cover"
                  alt="Solidarité MASO - Assistance"
                  src="/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/hero1.png";
                  }}
                />
                <img
                  className="w-full h-22 sm:h-26 rounded-lg object-cover"
                  alt="Solidarité MASO - Communauté"
                  src="/De%20locataire%20à%20propriétaire%20grâce%20à%20RENAPROV.png"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/hero1.png";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
