import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { label: "Accueil" },
  { label: "A propos" },
  { label: "Notre mission" },
  { label: "Produits" },
  { label: "Notre réseau" },
];

export const HeaderSubsection = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex-col w-full justify-center bg-foundationbluelight flex items-center sticky top-0 z-50">
      <div className="min-h-[72px] justify-around px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] py-4 self-stretch w-full flex items-center">
        <div className="items-center justify-between flex-1 w-full flex">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <img className="w-[60px] h-[33px] sm:w-[75px] sm:h-[41px] md:w-[91px] md:h-[50px] flex-shrink-0" alt="Logo" />

            <div className="hidden sm:flex items-center justify-center [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-greydarker text-xs sm:text-sm md:text-[15px] tracking-[0] leading-tight max-w-[150px] sm:max-w-[180px] md:max-w-[236px]">
              Réserve Nationale de l&apos;Epargne et de la Provision
            </div>
          </div>

          <nav className="hidden lg:inline-flex items-center gap-4 xl:gap-[25px] mx-4">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className="[font-family:'Karla',Helvetica] font-medium text-black text-base xl:text-lg tracking-[0] leading-[27px] whitespace-nowrap hover:opacity-80 transition-opacity"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex flex-col w-auto min-w-[180px] lg:min-w-[200px] xl:w-[242px] items-end">
            <Button className="px-6 lg:px-8 py-3 lg:py-4 w-full h-auto bg-foundation-bluenormal hover:bg-foundation-bluedark-hover rounded-[35px]">
              <span className="[font-family:'Karla',Helvetica] font-semibold text-light-text text-base lg:text-lg xl:text-xl text-center tracking-[0.20px] leading-5 whitespace-nowrap">
                Ouvrire mon compte
              </span>
            </Button>
          </div>

          <button
            className="lg:hidden ml-4 p-2 text-black hover:opacity-80 transition-opacity"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-foundationbluelight border-t border-foundation-greydarker/10">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className="[font-family:'Karla',Helvetica] font-medium text-black text-base tracking-[0] leading-[27px] text-left py-2 hover:opacity-80 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </button>
            ))}
            <div className="md:hidden mt-2">
              <Button className="px-6 py-3 w-full h-auto bg-foundation-bluenormal hover:bg-foundation-bluedark-hover rounded-[35px]">
                <span className="[font-family:'Karla',Helvetica] font-semibold text-light-text text-base text-center tracking-[0.20px] leading-5">
                  Ouvrire mon compte
                </span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
