import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// CSS Classes extraites pour la maintenabilité
const gradientTextClass =
  "bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]";

const productCards = [
  // Comptes Courant
  {
    title: "Compte courant individuel",
    description: "Gérez vos transactions quotidiennes en toute simplicité.",
    image: "/service/Compte courant individuel.jpg",
    route: "/service/compte-courant-individuel",
  },
  {
    title: "Compte courant entreprise",
    description: "Gérez les transactions de votre entreprise en toute simplicité.",
    image: "/service/Compte courant entreprise.jpg",
    route: "/service/compte-courant-entreprise",
  },
  {
    title: "Compte courant association",
    description: "Compte bancaire pour les associations à but non lucratif (culturelles, sportives, religieuses, humanitaires, etc.).",
    image: "/service/Compte courant association.jpg",
    route: "/service/compte-courant-association",
  },
  
  // Comptes Épargne
  {
    title: "Compte épargne individuel",
    description: "Épargnez pour vos projets personnels avec des taux d'intérêt préférentiel et une gestion simplifiée.",
    image: "/service/Compte epargne individuel.jpg",
    route: "/service/compte-epargne-individuel",
  },
  {
    title: "Compte épargne entreprise",
    description: "Épargnez vos projets d'entreprises avec des avantages dédiés.",
    image: "/service/Compte epargne entreprise.jpg",
    route: "/service/compte-epargne-entreprise",
  },
  
  // Comptes Spéciaux
  {
    title: "Compte salarié secteur Public ou Privé",
    description: "Compte dédié aux employés avec des avantages et des services privilégiés.",
    image: "/service/compte salaire.jpg",
    route: "/service/compte-cheque-salaire-pension",
  },
  {
    title: "Compte pensionné secteur Public ou Privé",
    description: "Compte pour les retraités du secteur public ou privé avec des avantages dédiés et des services adaptés.",
    image: "/service/compte pensionne.jpg",
    route: "/service/compte-pensionne",
  },
  
  // ORA - Objectif Réalisation d'Ambitions
  {
    title: "ORA Foncier",
    description: "Plan d'épargne permettant d'acquérir un terrain viabilisé, sécurisé, avec eau et électricité, assorti d'un titre foncier à moindre coût.",
    image: "/service/ORA froncier.jpeg",
  },
  {
    title: "ORA Investissement",
    description: "Plan d'épargne permettant de constituer un fond pour la réalisation d'un projet.",
    image: "/service/Ora investissement.png",
  },
  {
    title: "ORA Prévoyance",
    description: "Plan d'épargne permettant de constituer un fond afin de prévenir les évènements heureux ou malheureux.",
    image: "/service/ORA provayance.jpeg",
  },
  {
    title: "ORA Scolaire",
    description: "Plan d'épargne à partir de 350 FCFA permettant de garantir la rentrée scolaire.",
    image: "/service/ORA School.jpeg",
  },
  {
    title: "ORA Académique",
    description: "Plan d'épargne à partir de 1000 FCFA pour assurer les frais de scolarité à l'Institut Universitaire BISSAÏ.",
    image: "/service/ORA Académique.png",
  },
  {
    title: "ORA Équipement",
    description: "Plan d'épargne permettant l'acquisition d'équipements mobiliers, informatiques, électroniques, électroménager, etc.",
    image: "/service/ORA equipement.jpeg",
  },
  {
    title: "ORA Islamique",
    description: "Plan d'épargne permettant de constituer une épargne non rémunérée conforme à la charia.",
    image: "/ORA.png",
  },
  {
    title: "ORA Santé",
    description: "Plan d'épargne permettant de bénéficier à partir de 1000 FCFA/jour d'une couverture sanitaire au Complexe Hospitalier La MAMU.",
    image: "/service/Ora Sante.png",
  },
  
  // MASO
  {
    title: "MASO",
    description: "MASO (Mutuelle d'Assistance et de Solidarité) est un produit solidaire mis en place par RENAPROV FINANCE SA qui vous permet de couvrir les besoins sociaux de base.",
    image: "/logo maso solidarite.png",
  },
  
  // SPMC
  {
    title: "SPMC",
    description: "Compte courant adapté aux acteurs des petits métiers et petits commerciaux avec des frais de gestion simplifiés et possibilité d'octroi de crédit.",
    image: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
  },
  
  // Bicard
  {
    title: "Bicard",
    description: "Carte bancaire permettant la facilitation de vos transactions financières.",
    image: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
  },
];

export const OurSolutionSubsection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const [cardsToShow, setCardsToShow] = useState(3);

  // Responsive cards calculation
  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsToShow(1); // Mobile: 1 card
      } else if (width < 1024) {
        setCardsToShow(2); // Tablet: 2 cards
      } else {
        setCardsToShow(3); // Desktop: 3 cards
      }
    };

    // Set initial value
    updateCardsToShow();

    // Add event listener
    window.addEventListener("resize", updateCardsToShow);

    // Cleanup
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const maxSlide = Math.max(0, productCards.length - cardsToShow);

  const nextSlide = () => {
    if (currentSlide < maxSlide) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Reset current slide when cardsToShow changes
  useEffect(() => {
    if (currentSlide > maxSlide) {
      setCurrentSlide(maxSlide);
    }
  }, [cardsToShow, currentSlide, maxSlide]);

  // Check if buttons should be disabled
  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= maxSlide;

  // Calculate which dots to show (sliding window of 3)
  const getVisibleDots = () => {
    const totalSlides = maxSlide + 1;
    const maxVisibleDots = 3;
    
    if (totalSlides <= maxVisibleDots) {
      // Show all dots if total is 3 or less
      return Array.from({ length: totalSlides }, (_, i) => i);
    }
    
    // Calculate start index for sliding window
    let startIndex = Math.max(0, currentSlide - 1);
    let endIndex = Math.min(totalSlides - 1, startIndex + maxVisibleDots - 1);
    
    // Adjust if we're near the end
    if (endIndex - startIndex < maxVisibleDots - 1) {
      startIndex = Math.max(0, endIndex - maxVisibleDots + 1);
    }
    
    return Array.from({ length: endIndex - startIndex + 1 }, (_, i) => startIndex + i);
  };

  const visibleDots = getVisibleDots();

  return (
    <section className="w-full bg-white flex flex-col items-center px-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Header Section - Simplifié */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
        <div className="w-full lg:max-w-2xl">
          <h2 className="font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 sm:mb-6">
            Nos solutions financières pour{" "}
            <span className={gradientTextClass}>
              particuliers et entreprises
            </span>
          </h2>
        </div>

        <div className="w-full lg:max-w-2xl">
          <p className="font-normal text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Que vous soyez salarié, entrepreneur, commerçant ou étudiant,
            RENAPROV met à votre disposition une gamme de produits pensés pour
            vos besoins
          </p>
        </div>
      </div>

      {/* Cards Section - Amélioré */}
      <div className="w-full max-w-7xl flex flex-col items-center gap-6 sm:gap-8">
        <div className="w-full overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)`,
            }}
          >
            {productCards.map((product, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-3 flex ${
                  cardsToShow === 1
                    ? "w-full"
                    : cardsToShow === 2
                    ? "w-1/2"
                    : "w-1/3"
                }`}
              >
                <Card className="flex flex-col w-full bg-white rounded-2xl overflow-hidden border-0 h-full group hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      className="w-full h-40 sm:h-44 md:h-48 object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                      alt={`${product.title} - RENAPROV`}
                      src={product.image || "/hero1.png"}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardContent className="flex flex-col p-4 sm:p-5 md:p-6 flex-1">
                    <div className="flex flex-col gap-3 flex-1">
                      <h3
                        className={`font-bold text-xl sm:text-2xl md:text-3xl leading-tight ${gradientTextClass}`}
                      >
                        {product.title}
                      </h3>

                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 overflow-hidden">
                        {product.description}
                      </p>
                    </div>

                    <Button
                      variant="link"
                      className="inline-flex items-center justify-start gap-2 p-0 h-auto mt-4 text-sm font-semibold text-foundation-bluenormal hover:text-foundation-bluedark-hover transition-colors duration-200"
                      aria-label={`En savoir plus sur ${product.title}`}
                      onClick={() => {
                        if (product.route) {
                          window.open(product.route, '_blank');
                        }
                      }}
                    >
                      <span>En savoir plus</span>
                      <ChevronRightIcon className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Section - Optimisée */}
        <div className="w-full flex flex-row items-center justify-between gap-4 sm:gap-6 mx-auto">
          {/* Pagination Dots */}
          <div className="flex items-center gap-3">
            {visibleDots.map((index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-foundation-bluenormal focus:ring-offset-2 ${
                  currentSlide === index
                    ? "bg-foundation-bluenormal w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
                aria-current={currentSlide === index ? "true" : "false"}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 sm:gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={isPrevDisabled}
              className={`h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foundation-bluenormal focus:ring-offset-2 ${
                isPrevDisabled
                  ? "bg-gray-100 border-gray-300 cursor-not-allowed opacity-50"
                  : "bg-white border-gray-300 hover:border-foundation-bluenormal hover:bg-foundation-bluenormal/5"
              }`}
              aria-label="Slide précédent"
            >
              <ChevronLeftIcon
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  isPrevDisabled ? "text-gray-400" : "text-black"
                }`}
              />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={isNextDisabled}
              className={`h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foundation-bluenormal focus:ring-offset-2 ${
                isNextDisabled
                  ? "bg-gray-100 border-gray-300 cursor-not-allowed opacity-50"
                  : "bg-white border-gray-300 hover:border-foundation-bluenormal hover:bg-foundation-bluenormal/5"
              }`}
              aria-label="Slide suivant"
            >
              <ChevronRightIcon
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  isNextDisabled ? "text-gray-400" : "text-gray-700"
                }`}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
