import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Notre mission", href: "#mission" },
  { label: "Produits", href: "#produits" },
  { label: "Notre réseau", href: "#reseau" },
];

export const HeaderSubsection = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-foundationbluelight sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
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
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" role="navigation" aria-label="Navigation principale">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-medium text-black hover:text-foundation-bluenormal transition-colors duration-200 text-sm xl:text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button 
              className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-foundation-bluenormal hover:bg-foundation-bluedark-hover rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
              onClick={() => handleNavClick('#contact')}
            >
              <span className="font-semibold text-white text-sm lg:text-base">
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
            <nav className="px-4 py-4 space-y-2" role="navigation" aria-label="Navigation mobile">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block px-3 py-2 text-base font-medium text-black hover:bg-white/20 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-foundation-greydarker/10">
                <Button 
                  className="w-full px-6 py-3 bg-foundation-bluenormal hover:bg-foundation-bluedark-hover rounded-full"
                  onClick={() => handleNavClick('#contact')}
                >
                  <span className="font-semibold text-white text-base">
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
