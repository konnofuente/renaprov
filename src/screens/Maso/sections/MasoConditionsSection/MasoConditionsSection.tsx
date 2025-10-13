import React from "react";
import { Button } from "../../../../components/ui/button";
import { Check } from "lucide-react";

export const MasoConditionsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Conditions d'Adhésion
          </h2>
          
          <p className="[font-family:'Bricolage_Grotesque',Helvetica] text-foundationgreylight-active text-sm sm:text-base md:text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            L'adhésion à la MASO est simple et accessible à tous les Camerounais. 
            Rejoignez notre réseau de solidarité en quelques étapes faciles.
          </p>

          {/* Conditions List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-foundationbluelight rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-foundation-bluenormal rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-greydarker text-lg mb-2">
                Pièce d'identité
              </h3>
              <p className="[font-family:'Bricolage_Grotesque',Helvetica] text-foundationgreylight-active text-sm">
                Carte nationale d'identité ou passeport valide
              </p>
            </div>

            <div className="bg-foundationbluelight rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-foundation-bluenormal rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-greydarker text-lg mb-2">
                500 FCFA pour le mois
              </h3>
              <p className="[font-family:'Bricolage_Grotesque',Helvetica] text-foundationgreylight-active text-sm">
                Frais d'inscription unique pour le premier mois
              </p>
            </div>

            <div className="bg-foundationbluelight rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-foundation-bluenormal rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-greydarker text-lg mb-2">
                Cotisation 100 FCFA/jour
              </h3>
              <p className="[font-family:'Bricolage_Grotesque',Helvetica] text-foundationgreylight-active text-sm">
                Soit 20 000 FCFA/an pour bénéficier de tous les avantages
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-lg">
            Remplir le formulaire d'adhésion
          </Button>
        </div>
      </div>
    </section>
  );
};
