import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Types pour les onglets
type CityTab = {
  id: string;
  label: string;
  city?: string;
  cities?: string[];
};

// Fonction pour générer dynamiquement les onglets basés sur les agences
const generateCityTabs = (
  agenciesList: Array<{
    city: string;
    name: string;
    address: string;
    coordinates: { lat: number; lng: number };
  }>
): CityTab[] => {
  // Compter les agences par ville
  const cityCount = agenciesList.reduce(
    (acc: Record<string, number>, agency) => {
      acc[agency.city] = (acc[agency.city] || 0) + 1;
      return acc;
    },
    {}
  );

  const tabs: CityTab[] = [];
  const otherCities: string[] = [];

  // Créer les onglets pour les villes avec 3+ agences
  Object.entries(cityCount).forEach(([city, count]) => {
    if (count >= 3) {
      tabs.push({
        id: city.toLowerCase().replace(/\s+/g, "-"),
        label: city,
        city: city,
      });
    } else {
      otherCities.push(city);
    }
  });

  // Ajouter l'onglet "Autres Villes" s'il y a des villes avec 1-2 agences
  if (otherCities.length > 0) {
    tabs.push({
      id: "autres",
      label: "Autres Villes",
      cities: otherCities,
    });
  }

  return tabs;
};

const agencies = [
  {
    city: "Yaounde",
    name: "Agence de Nkoabang",
    address: "Ngulzamba nouvelle route",
    coordinates: { lat: 3.848, lng: 11.5021 },
  },
  {
    city: "Yaounde",
    name: "Agence de Nkoabang",
    address: "Ngulzamba nouvelle route",
    coordinates: { lat: 3.848, lng: 11.5021 },
  },
  {
    city: "Yaounde",
    name: "Agence de Nkoabang",
    address: "Ngulzamba nouvelle route",
    coordinates: { lat: 3.848, lng: 11.5021 },
  },
  {
    city: "Yaounde",
    name: "Agence de Nkoabang",
    address: "Ngulzamba nouvelle route",
    coordinates: { lat: 3.848, lng: 11.5021 },
  },
  {
    city: "Yaounde",
    name: "Mokolo Marche",
    address: "Bata Mokolo",
    coordinates: { lat: 3.8667, lng: 11.5167 },
  },
  {
    city: "Yaounde",
    name: "Institut Universi Bissai",
    address: "Gp Coron",
    coordinates: { lat: 3.85, lng: 11.51 },
  },
  {
    city: "Douala",
    name: "Agence Centre Ville",
    address: "Carrefour Elig Edzoa",
    coordinates: { lat: 4.0483, lng: 9.7043 },
  },
  {
    city: "Douala",
    name: "Agence Akwa",
    address: "Quartier Akwa",
    coordinates: { lat: 4.05, lng: 9.7 },
  },
  {
    city: "Bafoussam",
    name: "Agence Bafoussam",
    address: "Centre ville",
    coordinates: { lat: 5.4737, lng: 10.4171 },
  },
  {
    city: "Limbe",
    name: "Agence Bafoussam",
    address: "Centre ville",
    coordinates: { lat: 5.4737, lng: 10.4171 },
  },
];

export const OurAgencySubsection = (): JSX.Element => {
  // Générer les onglets dynamiquement
  const cityTabsData = generateCityTabs(agencies);

  // Définir l'onglet par défaut (premier onglet généré)
  const defaultTab = cityTabsData.length > 0 ? cityTabsData[0].id : "";

  const [activeTab, setActiveTab] = useState(defaultTab);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardsToShow = 4;

  // Filtrer les agences selon l'onglet actif
  const filteredAgencies = agencies.filter((agency) => {
    const currentTab = cityTabsData.find((tab) => tab.id === activeTab);

    if (!currentTab) return false;

    // Si c'est l'onglet "Autres Villes"
    if (currentTab.id === "autres" && currentTab.cities) {
      return currentTab.cities.includes(agency.city);
    }

    // Si c'est un onglet de ville spécifique
    if (currentTab.city) {
      return agency.city === currentTab.city;
    }

    return false;
  });

  // Calculer le nombre maximum de slides
  const maxSlide = Math.max(0, filteredAgencies.length - cardsToShow);

  const handleTabClick = (tabId: string) => {
    if (tabId === activeTab) return; // Éviter les clics sur l'onglet actif

    setIsTransitioning(true);
    setCurrentSlide(0); // Reset au premier slide

    // Animation de transition
    setTimeout(() => {
      setActiveTab(tabId);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 200);
  };

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

  // Check if buttons should be disabled
  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= maxSlide;

  const openGoogleMaps = (agency: (typeof agencies)[0]) => {
    if (agency.coordinates) {
      // Utiliser les coordonnées si disponibles
      const { lat, lng } = agency.coordinates;
      window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
    } else {
      // Fallback sur l'adresse textuelle
      const query = encodeURIComponent(`${agency.address}, ${agency.city}`);
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${query}`,
        "_blank"
      );
    }
  };
  return (
    <section className="w-full bg-foundationbluelight flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] py-8 sm:py-10 md:py-12 lg:py-[60px] gap-6 sm:gap-8 md:gap-[38px]">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-[34px] px-0 sm:px-4 md:px-[31px]">
        {cityTabsData.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            onClick={() => handleTabClick(tab.id)}
            className={`h-auto px-6 sm:px-8 md:px-12 lg:px-16 py-0.5 rounded-3xl overflow-hidden ${
              activeTab === tab.id
                ? "bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] text-[#ffffff] shadow-none"
                : "bg-grayswhite shadow-[0px_0px_2px_#00000040]"
            }`}
          >
            <span
              className={`text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-[35px] [font-family:'Roboto',Helvetica] font-medium text-center whitespace-nowrap ${
                activeTab === tab.id
                  ? ""
                  : "bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]"
              }`}
            >
              {tab.label}
            </span>
          </Button>
        ))}
      </div>

      <div className="flex flex-col items-center w-full gap-6 md:gap-[22px]">
        <div className="relative w-full overflow-hidden">
          <div
            className={`flex transition-all duration-500 ease-in-out mb-4 ${
              isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
            style={{
              transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)`,
            }}
          >
            {filteredAgencies.map((agency, index) => (
              <div key={index} className="w-[25%] flex-shrink-0 px-2 flex">
                <Card
                  className="w-full max-w-[313px] mx-auto bg-grayswhite rounded-[10px] overflow-hidden shadow-[0px_0px_2px_#00000040] border-0 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => openGoogleMaps(agency)}
                  role="button"
                  aria-label={`Ouvrir la carte pour ${agency.name}`}
                >
                  <CardContent className="flex flex-col items-start gap-2 px-4 sm:px-5 md:px-6 py-5 md:py-[26px]">
                    <div className="flex flex-col w-full items-start gap-[3px]">
                      <div className="relative w-auto h-[15px] flex items-center gap-2">
                        <div className="w-2 h-2 bg-foundation-bluenormal rounded" />
                        <div className="text-foundationgreylight-active text-xs sm:text-sm flex items-center font-m3-label-large font-[number:var(--m3-label-large-font-weight)] whitespace-nowrap">
                          {agency.city}
                        </div>
                      </div>

                      <div className="relative w-full min-h-[46px]">
                        <div className="h-auto flex items-center justify-start bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-m3-title-large-emphasized font-[number:var(--m3-title-large-emphasized-font-weight)] text-transparent text-lg sm:text-xl md:text-[length:var(--m3-title-large-emphasized-font-size)] tracking-[var(--m3-title-large-emphasized-letter-spacing)] leading-tight">
                          {agency.name}
                        </div>
                        <div className="mt-2 w-full h-auto flex items-center justify-start [font-family:'Roboto',Helvetica] font-normal text-foundationgreylight-active text-[10px] sm:text-xs tracking-[-0.18px] leading-relaxed">
                          {agency.address}
                        </div>
                      </div>
                    </div>

                    <div className="relative w-full h-auto mt-2">
                      <div className="w-full h-[140px] sm:h-[147px] flex bg-grayswhite rounded-[10px] overflow-hidden">
                        {(() => {
                          let embedUrl: string;

                          if (agency.coordinates) {
                            // Utiliser les coordonnées GPS
                            const { lat, lng } = agency.coordinates;
                            embedUrl = `https://www.google.com/maps?q=${lat},${lng}&output=embed`;
                          } else {
                            // Fallback sur l'adresse textuelle
                            const query = encodeURIComponent(
                              `${agency.address}, ${agency.city}`
                            );
                            embedUrl = `https://www.google.com/maps?q=${query}&output=embed`;
                          }

                          return (
                            <iframe
                              className="w-full h-full pointer-events-none"
                              src={embedUrl}
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title={`Carte de ${agency.name}`}
                            />
                          );
                        })()}
                      </div>

                      <Button
                        className="mt-3 mx-auto w-auto   h-auto px-4 sm:px-5 md:px-[26px] py-1.5 sm:py-2 bg-foundation-bluenormal rounded-[35px] overflow-hidden hover:bg-foundation-bluenormal/90 flex items-center justify-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          openGoogleMaps(agency);
                        }}
                      >
                        <span className="[font-family:'Karla',Helvetica] w-auto font-semibold text-light-text text-sm sm:text-base md:text-[17px] text-center tracking-[0.20px] leading-5 whitespace-nowrap">
                          Voir sur Google Map
                        </span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {maxSlide > 0 && (
          <div className="flex w-full items-center justify-center">
            <div className="flex flex-col w-full sm:flex-row items-center justify-between gap-4 sm:gap-0 ">
              <div className="flex items-center gap-[11px] p-2.5">
                {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-foundation-bluenormal w-8"
                        : "bg-black opacity-20 hover:opacity-40"
                    }`}
                    aria-label={`Aller à la page ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-4 sm:gap-5 md:gap-[25px]">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  disabled={isPrevDisabled}
                  className={`inline-flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center gap-2 p-2 sm:p-2.5 md:p-3 rounded-[50px] border border-solid transition-all duration-200 ${
                    isPrevDisabled
                      ? "bg-gray-100 border-gray-300 cursor-not-allowed opacity-50"
                      : "bg-[#ffffff] border-black hover:bg-[#ffffff]/90"
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
                  className={`inline-flex w-10 h-10 sm:w-11 sm:h-11 md:h-12 md:w-12 items-center justify-center gap-2 p-2 sm:p-2.5 md:p-3 rounded-[50px] border border-solid transition-all duration-200 ${
                    isNextDisabled
                      ? "bg-gray-100 border-gray-300 cursor-not-allowed opacity-50"
                      : "bg-[#ffffff] border-black hover:bg-[#ffffff]/90"
                  }`}
                  aria-label="Slide suivant"
                >
                  <ChevronRightIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      isNextDisabled ? "text-gray-400" : "text-black"
                    }`}
                  />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
