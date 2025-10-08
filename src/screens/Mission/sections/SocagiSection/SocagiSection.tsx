import React from "react";
import { Button } from "../../../../components/ui/button";
import { MapPin, Phone } from "lucide-react";

export const SocagiSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[102px] py-8 sm:py-12 md:py-16 lg:py-[54px] bg-foundationbluelight">
      <div className="flex flex-col w-full max-w-[1236px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="order-1 lg:order-1">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <img
                className="w-full h-full rounded-lg md:rounded-xl object-cover"
                alt="La Socagi - Gestion et Investissement"
                src="/image-3-2.png"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2 flex flex-col gap-6 md:gap-8">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-foundation-bluenormal" />
                <span className="text-sm md:text-base text-foundation-bluedark-hover">
                  Quartier X, Ville Y
                </span>
              </div>
              <div className="flex items-center gap-2 border-b border-foundation-bluedark-hover pb-1">
                <Phone className="w-5 h-5 text-foundation-bluenormal" />
                <span className="text-sm md:text-base text-foundation-bluedark-hover">
                  +237 XXX XXX XXX
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-foundation-bluenormal to-foundation-bluedark bg-clip-text text-transparent">
              La Socagi
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg leading-relaxed text-foundation-bluedarker">
              Société spécialisée dans la gestion et l'investissement, La Socagi
              accompagne les entreprises et particuliers dans leurs projets
              économiques. Son objectif : favoriser la croissance durable,
              sécuriser les investissements et créer de la valeur à long terme.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
              <Button className="w-auto bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg min-h-[48px] sm:min-h-[52px] md:min-h-[56px] flex items-center justify-center">
                Nous rejoindre
              </Button>
              <Button className="w-auto bg-grayswhite hover:bg-foundation-greylight text-foundationbluenormal font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg min-h-[48px] sm:min-h-[52px] md:min-h-[56px] flex items-center justify-center">
                Découvrir nos offres
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
