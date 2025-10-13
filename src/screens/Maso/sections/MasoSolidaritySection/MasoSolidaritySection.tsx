import React from "react";
import { Button } from "../../../../components/ui/button";

// Composant modulaire pour la galerie d'images (avec Flexbox)
const ImageGallery: React.FC = () => {
  return (
    <div className="w-full h-[500px] flex-1">
      {/* Container principal avec Flexbox pour organiser les images */}
      <div className="w-full h-full flex items-center justify-center gap-2">
        {/* Ligne du haut - Image 2 au centre */}
        <div
          className="w-[200px] h-96 rounded-[20px] bg-cover bg-center shadow-lg"
          style={{
            backgroundImage: `url("/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png")`,
          }}
          role="img"
          aria-label="Solidarité MASO - Événement communautaire"
        />

        <div
          className="w-[200px] h-96 rounded-[20px] bg-cover bg-center shadow-lg transform -translate-y-16"
          style={{
            backgroundImage: `url("/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png")`,
          }}
          role="img"
          aria-label="Solidarité MASO - Assistance"
        />

        <div
          className="w-[200px] h-96 rounded-[20px] bg-cover bg-center shadow-lg transform -translate-y-8"
          style={{
            backgroundImage: `url("/De%20locataire%20à%20propriétaire%20grâce%20à%20RENAPROV.png")`,
          }}
          role="img"
          aria-label="Solidarité MASO - Communauté"
        />
      </div>
    </div>
  );
};

// Composant modulaire pour le contenu textuel (design original)
const ContentSection: React.FC = () => {
  return (
    <div className="w-full max-w-[600px] flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight text-blue-gray900">
          Une solidarité camerounaise qui change des vies
        </h2>
      </header>

      <div className="flex flex-col gap-6">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-foundationgreynormal">
          La MASO incarne l'esprit de solidarité camerounaise en créant un réseau d'entraide 
          qui permet à chaque membre de bénéficier de services essentiels. Cette initiative 
          favorise l'inclusion sociale et économique en offrant des avantages concrets dans 
          les domaines de la santé, de l'éducation et de l'assistance sociale.
        </p>
        
        <Button className="bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl w-fit">
          Découvrir nos services
        </Button>
      </div>
    </div>
  );
};

export const MasoSolidaritySection = (): JSX.Element => {
  return (
    <section className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 bg-foundationbluelight relative">
      <div className="flex flex-col w-full max-w-[1236px]">
        <article className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Section des images */}
          <div className="order-1 lg:order-1 relative">
            <ImageGallery />
          </div>

          {/* Section du contenu */}
          <div className="order-2 lg:order-2">
            <ContentSection />
          </div>
        </article>
      </div>
    </section>
  );
};
