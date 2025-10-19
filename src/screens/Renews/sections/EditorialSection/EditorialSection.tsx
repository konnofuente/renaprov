import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export const EditorialSection = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      id="editorial"
      className="relative w-full overflow-hidden bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_43%)]"
      aria-labelledby="editorial-heading"
    >
      <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-0 transform sm:translate-y-2">
        <div className="flex-shrink-0 w-full md:w-auto py-[-32px]">
          <img
            className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[669px] aspect-[669/744] object-cover shadow-lg"
            alt="Portrait de REV PASTEUR EMMANUEL NOËL BISSAÏ, Président du Conseil d'Administration de RENAPROV"
            src="/frame-2087326088-removebg-preview.png"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/hero1.png";
            }}
          />
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[500px] xl:max-w-[600px] flex-1">
          <h2
            id="editorial-heading"
            className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] leading-[120%]"
          >
            <span className="block">REV PASTEUR EMMANUEL</span>
            <span className="block">NOËL BISSAÏ</span>
          </h2>

          {/* Premier paragraphe - toujours visible */}
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed w-full">
            C'est notre vision de la finance qui nous dicte une approche de proximité avec les plus petits revenus. 
            Comment transformer la société camerounaise en évitant à celle-ci de sombrer dans les méandres du capitalisme 
            à outrance et qui de façon sauvage dévore toutes les destinées économiques ? C'est la question qui anime 
            notre orientation managériale depuis 1996.
          </p>

          {/* Contenu étendu - conditionnel */}
          {isExpanded && (
            <div className="space-y-4 sm:gap-6">
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed w-full">
                Notre approche est de promouvoir l'économie solidaire. Depuis 2020, nous avons créé et mis en œuvre la 
                Mutuelle d'Assistance et de Solidarité, la MASO. Cette année 2024, La MASO est à son Acte 4. Elle est 
                terreau de la solidarité à l'africaine avec pour objectif de sortir les Camerounais en particulier et 
                les Africains en général du cercle vicieux de la pauvreté.
              </p>

              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed w-full font-semibold">
                Avec 100 francs CFA, les bourses les plus faibles peuvent changer leur quotidien en obtenant un habitat 
                décent, en se soignant à moindre coût, en obtenant un financement à taux zéro pour un projet de PME ou TPE.
              </p>

              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed w-full">
                Pour que cela soit explicite et dénué de toute incompréhension nous avons décidé de communiquer sur toutes 
                les activités et les actions du Groupe RENAPROV FINANCE S.A. La communication est la clé du succès. 
                Qu'elle soit interne ou externe elle favorise nos objectifs et rend compte chaque trimestre de nos activités.
              </p>
            </div>
          )}

          {/* Bouton Lire plus/moins */}
          <Button
            onClick={toggleExpanded}
            variant="outline"
            className="w-fit border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200 px-4 py-2 text-sm sm:text-base"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Lire moins
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                Lire plus
              </>
            )}
          </Button>

          <img
            className="absolute bottom-0 right-2 sm:right-4 md:right-6 lg:right-8 xl:right-12 w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] opacity-50 hover:opacity-70 transition-opacity duration-300 z-10"
            alt="Décoration graphique RENAPROV"
            src="/capa-1.svg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/vector.svg";
            }}
          />
        </div>
      </div>
    </section>
  );
};
