import React from "react";

// Design tokens pour la cohérence
const designTokens = {
  spacing: {
    section: "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16",
    content: "gap-6 md:gap-8 lg:gap-12",
    icons: "gap-4",
  },
  typography: {
    heading: "text-[56px] font-bold leading-tight",
    body: "text-lg leading-relaxed",
  },
  layout: {
    container: "max-w-[1236px]",
    section: "py-8 sm:py-12 md:py-16 lg:py-20",
  },
  images: {
    width: "w-[200px]",
    height: "h-96",
    borderRadius: "rounded-[20px]",
  },
};

// Composant modulaire pour les icônes de fond
const BackgroundIcons: React.FC = () => {
  const iconRows = Array(6)
    .fill(null)
    .map((_, rowIndex) =>
      Array(6)
        .fill(null)
        .map((_, colIndex) => ({
          left: colIndex * 32, // 8 * 4 = 32px spacing
          key: `icon-${rowIndex}-${colIndex}`,
        }))
    );

  return (
    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-20">
      <div className="flex flex-col gap-4">
        {iconRows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="relative w-44 h-4">
            {row.map((icon) => (
              <img
                key={icon.key}
                className="absolute top-0 w-4 h-4"
                style={{ left: `${icon.left}px` }}
                alt="Decorative icon"
                src="/icon---jam-icons---outline---logos---plus.svg"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Composant modulaire pour la galerie d'images
const ImageGallery: React.FC = () => {
  const images = [
    {
      url: "/picture.png",
      position: "bottom-0 left-0",
      alt: "Personne en costume bleu clair",
      zIndex: 10,
    },
    {
      url: "/picture-1.png",
      position: "top-0",
      alt: "Personne en costume bleu foncé avec smartphone",
      zIndex: 20,
      left: "calc(50% - 100px - 5px)", // Centré avec 10px d'espacement (5px de chaque côté)
    },
    {
      url: "/picture-2.png",
      position: "top-16 right-0",
      alt: "Personne en costume safari bleu",
      zIndex: 15,
    },
  ];

  return (
    <div className="relative w-full h-[500px] flex-1">
      {images.map((image, index) => (
        <div
          key={`image-${index}`}
          className={`absolute ${image.position}`}
          style={{
            zIndex: image.zIndex,
            left: image.left || undefined,
          }}
        >
          <div
            className={`${designTokens.images.width} ${designTokens.images.height} ${designTokens.images.borderRadius} bg-cover bg-center shadow-lg`}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
            role="img"
            aria-label={image.alt}
          />
        </div>
      ))}
    </div>
  );
};

// Composant modulaire pour le contenu textuel
const ContentSection: React.FC = () => {
  return (
    <div className="w-full max-w-[600px] flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h2 className={`${designTokens.typography.heading} text-blue-gray900`}>
          Un réseau au service de la proximité
        </h2>
      </header>

      <div className="flex flex-col gap-6">
        <p
          className={`${designTokens.typography.body} text-foundationgreynormal`}
        >
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
    <section
      className={`flex items-center ${designTokens.spacing.content} ${designTokens.spacing.section} ${designTokens.layout.section} bg-foundationbluelight relative`}
    >
      <div className={`flex flex-col w-full ${designTokens.layout.container}`}>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Section des images */}
          <div className="order-1 lg:order-1 relative">
            {/* <BackgroundIcons /> */}
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
