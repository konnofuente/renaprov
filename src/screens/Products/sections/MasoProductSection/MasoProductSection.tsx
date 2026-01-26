import React from "react";
import { Button } from "../../../../components/ui/button";
import { Check } from "lucide-react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const SUPPORTED_LANGS = ['fr', 'en'] as const;
const normalizeLang = (l: string | undefined): 'fr' | 'en' => {
  const base = (l || 'fr').split('-')[0].toLowerCase();
  return SUPPORTED_LANGS.includes(base as 'fr' | 'en') ? (base as 'fr' | 'en') : 'fr';
};

export const MasoProductSection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams<{ lang?: string }>();
  
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentLang = SUPPORTED_LANGS.includes(pathSegments[0] as 'fr' | 'en')
    ? (pathSegments[0] as 'fr' | 'en')
    : normalizeLang(lang);

  const getLocalizedPath = (path: string) => {
    return `/${currentLang}${path === '/' ? '' : path}`;
  };
  return (
    <section className="w-full bg-gradient-to-br from-white to-foundationbluelight/10 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foundation-bluenormal leading-tight">
            Nos Produits
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left - Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              <img
                src="/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png"
                alt="MASO - Solidarité et assistance pour tous"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/hero1.png";
                }}
              />
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="flex flex-col gap-6 sm:gap-8 order-1 lg:order-2">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foundation-bluenormal leading-tight">
                MASO : Solidarité, assistance et opportunités pour tous
              </h3>
              
              <p className="text-lg sm:text-xl md:text-2xl text-foundation-greydarker leading-relaxed">
                La MASO de RENAPROV accompagne les Camerounais pour sortir du cercle vicieux de la pauvreté, 
                en donnant accès à des services sociaux essentiels et à des opportunités uniques.
              </p>
            </div>
            
            {/* Benefits List */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-foundation-bluenormal rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-lg md:text-xl text-foundation-greydarker leading-relaxed">
                    <span className="font-semibold">Santé et Éducation</span> - Jusqu'à 30% de réduction sur vos frais
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-foundation-bluenormal rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-lg md:text-xl text-foundation-greydarker leading-relaxed">
                    <span className="font-semibold">Tombola & communauté</span> - Gagnez maisons, motos et financements tout en participant à une communauté solidaire
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => navigate(getLocalizedPath("/maso"))}
                className="bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] text-white hover:opacity-90 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-[40px] font-semibold text-lg sm:text-xl md:text-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Je rejoins MASO dès aujourd'hui
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
