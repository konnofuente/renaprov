import React from "react";
import { Button } from "../../../../components/ui/button";
import { MapPin, Phone } from "lucide-react";

export const HospitalLaMamuSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[102px] py-8 sm:py-12 md:py-16 lg:py-[54px] bg-foundation-bluedarker">
      <div className="flex flex-col w-full max-w-[1236px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:grid-flow-col-dense">
          {/* Content */}
          <div className="order-2 lg:order-1 lg:col-start-1 flex flex-col gap-6 md:gap-8">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-foundation-bluenormal" />
                <span className="text-sm md:text-base text-foundationbluelight">
                  Quartier X, Ville Y
                </span>
              </div>
              <div className="flex items-center gap-2 border-b border-foundationbluelight pb-1">
                <Phone className="w-5 h-5 text-foundation-bluenormal" />
                <span className="text-sm md:text-base text-foundationbluelight">
                  +237 XXX XXX XXX
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-[56px] font-bold leading-tight text-grayswhite">
              Complexe Hospitalier La Mamu
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg leading-relaxed text-foundation-greylight">
              Un établissement moderne offrant des soins accessibles et de
              qualité, avec une approche humaine et proche des patients. Notre
              mission est de fournir des soins médicaux de haute qualité dans un
              environnement chaleureux et professionnel.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
              <Button className="w-auto bg-grayswhite hover:bg-foundation-greylight text-foundationbluenormal font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg min-h-[48px] sm:min-h-[52px] md:min-h-[56px] flex items-center justify-center">
                Prendre rendez-vous
              </Button>
              <Button className="w-auto bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg min-h-[48px] sm:min-h-[52px] md:min-h-[56px] flex items-center justify-center">
                Découvrir nos services
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 lg:col-start-2">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <img
                className="absolute top-0 left-0 w-full h-3/4 rounded-lg md:rounded-xl object-cover"
                alt="Complexe Hospitalier La Mamu"
                src="/image-3-1.png"
              />
              <img
                className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-lg object-cover"
                alt="Complexe Hospitalier La Mamu - Services"
                src="/image-2.png"
              />
              <img
                className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-lg object-cover"
                alt="Complexe Hospitalier La Mamu - Équipements"
                src="/image-4.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
