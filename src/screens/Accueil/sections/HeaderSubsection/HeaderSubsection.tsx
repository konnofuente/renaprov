import { useState, useMemo, useRef, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AccountCreationForm } from "../../../../components/AccountCreationForm";
import { ServicesDropdown } from "../../../../components/ServicesDropdown";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";
import { getLocalizedPath, getLangFromPath, pathWithNewLang, SUPPORTED_LANGS } from "../../../../lib/utils";

const normalizeLang = (l: string | undefined): "fr" | "en" => {
  const base = (l || "fr").split("-")[0].toLowerCase();
  return SUPPORTED_LANGS.includes(base as "fr" | "en") ? (base as "fr" | "en") : "fr";
};

export const HeaderSubsection = (): JSX.Element => {
  const { t } = useTranslation(["header", "common", "services"]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAccountFormOpen, setIsAccountFormOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const mobileLanguageDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const langFromUrl = getLangFromPath(location.pathname);
  const currentLang = langFromUrl ?? normalizeLang(i18n.language);

  const localized = (path: string) => getLocalizedPath(path, currentLang);

  const navigationItems = useMemo(
    () => [
      { label: t("header:nav.home"), path: localized("/") },
      { label: t("header:nav.about"), path: localized("/about") },
      { label: t("header:nav.mission"), path: localized("/mission") },
      { label: t("header:nav.products"), path: localized("/products"), isDropdown: true },
      { label: t("header:nav.maso"), path: localized("/maso") },
      { label: t("header:nav.renews"), path: localized("/renews") },
      { label: t("header:nav.contact"), path: localized("/contact") },
    ],
    [t, currentLang]
  );

  const serviceCategories = useMemo(() => ({
    [t('services:categories.currentAccounts')]: [
      { title: t('services:services.currentAccountIndividual'), route: "/service/compte-courant-individuel" },
      { title: t('services:services.currentAccountBusiness'), route: "/service/compte-courant-entreprise" },
      { title: t('services:services.currentAccountAssociation'), route: "/service/compte-courant-association" },
    ],
    [t('services:categories.savingsAccounts')]: [
      { title: t('services:services.savingsAccountIndividual'), route: "/service/compte-epargne-individuel" },
      { title: t('services:services.savingsAccountBusiness'), route: "/service/compte-epargne-entreprise" },
    ],
    [t('services:categories.specialAccounts')]: [
      { title: t('services:services.employeeAccount'), route: "/service/compte-cheque-salaire-pension" },
      { title: t('services:services.pensionAccount'), route: "/service/compte-pensionne" },
    ],
    [t('services:categories.ora')]: [
      { title: t('services:services.oraFoncier'), route: "/service/ora-foncier" },
      { title: t('services:services.oraInvestissement'), route: "/service/ora-investissement" },
      { title: t('services:services.oraPrevoyance'), route: "/service/ora-prevoyance" },
      { title: t('services:services.oraScolaire'), route: "/service/ora-scolaire" },
      { title: t('services:services.oraAcademique'), route: "/service/ora-academique" },
      { title: t('services:services.oraEquipement'), route: "/service/ora-equipement" },
      { title: t('services:services.oraIslamique'), route: "/service/ora-islamique" },
      { title: t('services:services.oraSante'), route: "/service/ora-sante" },
    ],
    [t('services:categories.otherServices')]: [
      { title: t('services:services.maso'), route: "/maso" },
      { title: t('services:services.spmc'), route: "/service/spmc" },
      { title: t('services:services.bicard'), route: "/service/bicard" },
    ],
  }), [t]);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ];

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  const changeLanguage = (langCode: string) => {
    const code = normalizeLang(langCode);
    i18n.changeLanguage(code);
    setLanguageDropdownOpen(false);

    const target = pathWithNewLang(location.pathname, code);
    const search = location.search;
    const hash = location.hash;
    navigate(target + search + hash, { replace: true });
  };

  // Close language dropdown when clicking outside (desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Close language dropdown when clicking outside (mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (mobileLanguageDropdownRef.current && !mobileLanguageDropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
      };
    }
  }, [mobileMenuOpen]);

  const isActivePath = (path: string) => {
    const currentPath = location.pathname;
    const homePath = `/${currentLang}`;
    if (path === homePath) {
      return currentPath === homePath || currentPath === `/accueil/${currentLang}`;
    }
    return currentPath === path || currentPath.startsWith(path + "/");
  };

  return (
    <header className="w-full bg-foundationbluelight sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-3">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-24">
          {/* Logo */}
          <Link to={localized("/")} className="flex items-center gap-2 sm:gap-3 flex-shrink-0 hover:opacity-80 transition-opacity duration-200">
            <img
              src="/logo.png"
              alt={t('common:logoAlt')}
              className="w-12 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12 object-contain"
            />
            <div className="hidden sm:block max-w-[200px] md:max-w-[280px]">
              <h1 className="font-bold text-foundation-greydarker text-xs sm:text-sm md:text-base leading-tight">
                {t('header:logoTagline')}
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-3 xl:space-x-4 2xl:space-x-6"
            role="navigation"
            aria-label={t('header:desktopNav.ariaLabel')}
          >
            {navigationItems.map((item, index) =>
              item.isDropdown ? (
                <ServicesDropdown
                  key={index}
                  isActive={isActivePath(item.path)}
                  mainPath={item.path}
                />
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 text-xs lg:text-sm xl:text-base whitespace-nowrap ${
                    isActivePath(item.path)
                      ? "text-foundation-bluenormal"
                      : "text-black hover:text-foundation-bluenormal"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Language Dropdown & CTA Button */}
          <div className="hidden md:flex items-center gap-2 xl:gap-3">
            {/* Language Dropdown */}
            <div className="relative" ref={languageDropdownRef}>
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-sm font-medium text-black hover:text-foundation-bluenormal transition-colors duration-200 whitespace-nowrap"
                aria-label={t('common:switchLanguage')}
                aria-expanded={languageDropdownOpen}
              >
                <span className="text-lg">{currentLanguage.flag}</span>
                <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${languageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {languageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 ${
                        i18n.language === lang.code
                          ? 'bg-foundation-bluenormal/10 text-foundation-bluenormal font-semibold'
                          : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                      {i18n.language === lang.code && (
                        <span className="ml-auto text-foundation-bluenormal">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Button
              className="w-auto  bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white font-semibold px-6 py-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg"
              onClick={() => setIsAccountFormOpen(true)}
            >
              {t('header:openAccount')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-black hover:bg-white/20 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t('header:mobileMenu.close') : t('header:mobileMenu.open')}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t h-[90vh] overflow-y-scroll  border-foundation-greydarker/10 bg-foundationbluelight">
            <nav
              className="px-6 py-4 space-y-2"
              role="navigation"
              aria-label={t('header:mobileMenu.ariaLabel')}
            >
              {navigationItems.map((item, index) => (
                item.isDropdown ? (
                  <div key={index}>
                    <button
                      onClick={() => setOpenDropdown(!openDropdown)}
                      className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-black hover:text-foundation-bluenormal"
                    >
                      <span>{t('header:nav.products')}</span>
                      {openDropdown ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    {openDropdown && (
                      <div className="ml-4 mt-2 space-y-3 animate-fade-in">
                        <Link
                          to={localized("/products")}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-gray-500 hover:text-foundation-bluenormal py-1"
                        >
                          {t('header:nav.products')}
                        </Link>
                        {Object.entries(serviceCategories).map(([category, services]) => (
                          <div key={category}>
                            <div className="text-sm font-semibold text-gray-600 mb-1">
                              {category}
                            </div>
                            {services.map((s) => (
                              <Link
                                key={s.title}
                                to={localized(s.route)}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-sm text-gray-500 hover:text-foundation-bluenormal py-1"
                              >
                                {s.title}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      isActivePath(item.path)
                        ? "text-foundation-bluenormal bg-white/20"
                        : "text-black hover:bg-white/20"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}

              <div className="pt-4 border-t border-foundation-greydarker/10 space-y-3">
                {/* Language Dropdown for Mobile */}
                <div className="relative" ref={mobileLanguageDropdownRef}>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setLanguageDropdownOpen(!languageDropdownOpen);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-black hover:text-foundation-bluenormal transition-colors duration-200 border border-gray-300"
                    aria-label={t('common:switchLanguage')}
                    aria-expanded={languageDropdownOpen}
                  >
                    <span className="text-lg">{currentLanguage.flag}</span>
                    <span>{currentLanguage.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${languageDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {languageDropdownOpen && (
                    <div className="mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-[100] overflow-hidden" style={{ touchAction: 'manipulation' }}>
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            changeLanguage(lang.code);
                          }}
                          className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 ${
                            i18n.language === lang.code
                              ? 'bg-foundation-bluenormal/10 text-foundation-bluenormal font-semibold'
                              : 'text-gray-700'
                          }`}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span>{lang.name}</span>
                          {i18n.language === lang.code && (
                            <span className="ml-auto text-foundation-bluenormal">✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <Button
                  className="w-full sm:w-auto bg-white font-bold text-foundation-bluenormal hover:bg-white/95  px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1 sm:py-1.5 md:py-2 lg:py-4 xl:py-3 transition-all duration-200 shadow-lg hover:shadow-xl text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsAccountFormOpen(true);
                  }}
                >
                  {t('header:openAccount')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Modal Form */}
      <AccountCreationForm
        isOpen={isAccountFormOpen}
        onClose={() => setIsAccountFormOpen(false)}
      />
    </header>
  );
};
