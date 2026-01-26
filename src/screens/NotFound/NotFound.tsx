import { Link, useLocation } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { Button } from "../../components/ui/button";
import { useTranslation } from "react-i18next";

const SUPPORTED_LANGS = ['fr', 'en'] as const;

export const NotFound = (): JSX.Element => {
  const { t } = useTranslation('notfound');
  const pathSegments = useLocation().pathname.split('/').filter(Boolean);
  const currentLang = SUPPORTED_LANGS.includes(pathSegments[0] as 'fr' | 'en')
    ? (pathSegments[0] as 'fr' | 'en')
    : 'fr';

  const getLocalizedPath = (path: string) => {
    return `/${currentLang}${path === '/' ? '' : path}`;
  };

  return (
    <>
      <SEO
        title={`${t('title')} - RENAPROV`}
        description={t('description')}
        keywords="404, page not found, error, RENAPROV"
      />
      <main className="flex flex-col w-full bg-[#ffffff] min-h-screen">
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="text-center max-w-2xl mx-auto">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-foundation-bluenormal opacity-20 leading-none">
                404
              </h1>
            </div>
            
            {/* Error Message */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foundation-greydarker mb-4">
                {t('title')}
              </h2>
              <p className="text-lg sm:text-xl text-foundationgreylight-active leading-relaxed">
                {t('description')}
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to={getLocalizedPath("/")}>
                <Button className="bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] text-white hover:opacity-90 px-8 py-3 rounded-[40px] font-medium">
                  {t('backHome')}
                </Button>
              </Link>
              
              <Link to={getLocalizedPath("/about")}>
                <Button variant="outline" className="border-foundation-bluenormal text-foundation-bluenormal hover:bg-foundation-bluenormal hover:text-white px-8 py-3 rounded-[40px] font-medium">
                  {t('aboutUs')}
                </Button>
              </Link>
            </div>
            
            {/* Additional Help */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-foundationgreylight-active">
                {t('helpText')}
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center items-center text-sm">
                <span className="text-foundation-bluenormal font-medium">{t('phone')}:</span>
                <span>690 228 890</span>
                <span className="hidden sm:inline">•</span>
                <span className="text-foundation-bluenormal font-medium">{t('email')}:</span>
                <span>stephaniebissai@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
