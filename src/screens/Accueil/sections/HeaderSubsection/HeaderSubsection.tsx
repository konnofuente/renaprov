import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AccountCreationForm } from "../../../../components/AccountCreationForm";
import { ServicesDropdown } from "../../../../components/ServicesDropdown";

const navigationItems = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/about" },
  { label: "Mission", path: "/mission" },
  { label: "Produits", path: "/products", isDropdown: true },
  { label: "MASO", path: "/maso" },
  { label: "RENEWS", path: "/renews" },
  { label: "Contact", path: "/contact" },
];

export const HeaderSubsection = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAccountFormOpen, setIsAccountFormOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/" || location.pathname === "/accueil";
    }
    return location.pathname === path;
  };

  const serviceCategories = {
    "Comptes Courant": [
      { title: "Compte courant individuel", route: "/service/compte-courant-individuel" },
      { title: "Compte courant entreprise", route: "/service/compte-courant-entreprise" },
      { title: "Compte courant association", route: "/service/compte-courant-association" },
    ],
    "Comptes Épargne": [
      { title: "Compte épargne individuel", route: "/service/compte-epargne-individuel" },
      { title: "Compte épargne entreprise", route: "/service/compte-epargne-entreprise" },
    ],
    "Comptes Spéciaux": [
      { title: "Compte salarié secteur Public ou Privé", route: "/service/compte-cheque-salaire-pension" },
      { title: "Compte pensionné secteur Public ou Privé", route: "/service/compte-pensionne" },
    ],
    ORA: [
      { title: "ORA Foncier", route: "/service/ora-foncier" },
      { title: "ORA Investissement", route: "/service/ora-investissement" },
      { title: "ORA Prévoyance", route: "/service/ora-prevoyance" },
      { title: "ORA Scolaire", route: "/service/ora-scolaire" },
      { title: "ORA Académique", route: "/service/ora-academique" },
      { title: "ORA Équipement", route: "/service/ora-equipement" },
      { title: "ORA Islamique", route: "/service/ora-islamique" },
      { title: "ORA Santé", route: "/service/ora-sante" },
    ],
    "Autres Services": [
      { title: "MASO", route: "/maso" },
      { title: "SPMC", route: "/service/spmc" },
      { title: "Bicard", route: "/service/bicard" },
    ],
  };

  return (
    <header className="w-full bg-foundationbluelight sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 hover:opacity-80 transition-opacity duration-200">
            <img
              src="/logo.png"
              alt="RENAPROV FINANCE SA - Logo"
              className="w-12 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12 object-contain"
            />
            <div className="hidden sm:block max-w-[200px] md:max-w-[280px]">
              <h1 className="font-bold text-foundation-greydarker text-xs sm:text-sm md:text-base leading-tight">
                Réserve Nationale de l&apos;Épargne et de la Provision
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-3 xl:space-x-4 2xl:space-x-6"
            role="navigation"
            aria-label="Navigation principale"
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

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              className="w-auto  bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white font-semibold px-6 py-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg"
              onClick={() => setIsAccountFormOpen(true)}
            >
              Ouvrir mon compte
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-black hover:bg-white/20 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
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
              aria-label="Navigation mobile"
            >
              {navigationItems.map((item, index) => (
                item.isDropdown ? (
                  <div key={index}>
                    <button
                      onClick={() => setOpenDropdown(!openDropdown)}
                      className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-black hover:text-foundation-bluenormal"
                    >
                      <span>Produits</span>
                      {openDropdown ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    {openDropdown && (
                      <div className="ml-4 mt-2 space-y-3 animate-fade-in">
                        <Link
                          to="/products"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-gray-500 hover:text-foundation-bluenormal py-1"
                        >
                          Produits
                        </Link>
                        {Object.entries(serviceCategories).map(([category, services]) => (
                          <div key={category}>
                            <div className="text-sm font-semibold text-gray-600 mb-1">
                              {category}
                            </div>
                            {services.map((s) => (
                              <Link
                                key={s.title}
                                to={s.route}
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

              <div className="pt-4 border-t border-foundation-greydarker/10">
                <Button
                  className="w-full sm:w-auto bg-white font-bold text-foundation-bluenormal hover:bg-white/95  px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1 sm:py-1.5 md:py-2 lg:py-4 xl:py-3 transition-all duration-200 shadow-lg hover:shadow-xl text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsAccountFormOpen(true);
                  }}
                >
                  Ouvrir mon compte
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
