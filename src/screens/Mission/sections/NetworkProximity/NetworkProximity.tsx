// Composant modulaire pour la galerie d'images (avec Flexbox)
const ImageGallery: React.FC = () => {
  return (
    <div className="w-full h-[500px] flex-1">
      {/* Container principal avec Flexbox pour organiser les images */}
      <div className="w-full h-full flex items-center justify-center gap-2">
        {/* Ligne du haut - Image 2 au centre */}

        <div
          className="w-[200px] h-96 rounded-[20px] bg-cover bg-center shadow-lg "
          style={{
            backgroundImage: `url("/picture.png")`,
          }}
          role="img"
          aria-label="Personne en costume bleu clair"
        />

        <div
          className="w-[200px] h-96 rounded-[20px] bg-cover bg-center shadow-lg transform -translate-y-16 "
          style={{
            backgroundImage: `url("/picture-1.png")`,
          }}
          role="img"
          aria-label="Personne en costume bleu foncé avec smartphone"
        />

        <div
          className="w-[200px] h-96 rounded-[20px] bg-cover bg-center shadow-lg transform  -translate-y-8"
          style={{
            backgroundImage: `url("/picture-2.png")`,
          }}
          role="img"
          aria-label="Personne en costume safari bleu"
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
          Un réseau au service de la proximité
        </h2>
      </header>

      <div className="flex flex-col gap-6">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-foundationgreynormal">
          Renaprov a construit au fil des années un maillage solide
          d&apos;agences implantées dans les marchés et quartiers stratégiques.
          Cette proximité nous permet d&apos;accompagner efficacement nos
          clients au quotidien, tandis que nos filiales renforcent notre mission
          et diversifient nos services.
        </p>
      </div>
    </div>
  );
};

export const NetworkProximity = (): JSX.Element => {
  return (
    <section className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 bg-foundationbluelight relative">
      <div className="flex flex-col w-full max-w-[1236px]">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
