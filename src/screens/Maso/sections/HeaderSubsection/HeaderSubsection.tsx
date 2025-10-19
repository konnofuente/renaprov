import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/about" },
  { label: "Mission", path: "/mission" },
  { label: "Produits", path: "/products" },
  { label: "MASO", path: "/maso" },
  { label: "RENEWS", path: "/renews" },
  // { label: "Notre réseau", href: "#reseau" },
];

export const HeaderSubsection = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/" || location.pathname === "/accueil";
    }
    return location.pathname === path;
  };

  return (
    <header className="w-full bg-foundationbluelight sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo and Company Name */}
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
            className="hidden lg:flex items-center space-x-6 xl:space-x-8"
            role="navigation"
            aria-label="Navigation principale"
          >
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`font-medium transition-colors duration-200 text-sm xl:text-base ${
                  isActivePath(item.path)
                    ? "text-foundation-bluenormal"
                    : "text-black hover:text-foundation-bluenormal"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              className="w-auto bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg min-h-[48px] sm:min-h-[52px] md:min-h-[56px] flex items-center justify-center"
              onClick={() => handleNavClick("#contact")}
            >
              <span className="w-full text-center leading-tight">
                Ouvrir mon compte
              </span>
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

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-foundation-greydarker/10 bg-foundationbluelight">
            <nav
              className="px-6 py-4 space-y-2"
              role="navigation"
              aria-label="Navigation mobile"
            >
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActivePath(item.path)
                      ? "text-foundation-bluenormal bg-white/20"
                      : "text-black hover:bg-white/20"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-foundation-greydarker/10">
                <Button
                  className="w-full bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg min-h-[48px] sm:min-h-[52px] md:min-h-[56px] flex items-center justify-center"
                  onClick={() => handleNavClick("#contact")}
                >
                  <span className="w-full text-center leading-tight">
                    Ouvrir mon compte
                  </span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
