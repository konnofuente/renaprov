import React from "react";
import { Button } from "../../../../components/ui/button";

const navItems = [
  { label: "Accueil" },
  { label: "A propos" },
  { label: "Notre mission" },
  { label: "Produits" },
  { label: "MASO" },
  { label: "Notre réseau" },
  { label: "Notre réseau" },
];

export const NavbarSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-white border-b border-black sticky top-0 z-50">
      <header className="h-[72px] justify-around px-[60px] py-0 w-full bg-transparent flex items-center relative">
        <div className="items-center justify-between flex-1 grow flex relative">
          <div className="inline-flex items-center gap-[150px] relative flex-[0_0_auto]">
            <img
              className="relative w-[96.94px] h-[52.98px]"
              alt="Image removebg"
              src="/image-removebg-preview-1.png"
            />

            <nav className="inline-flex items-center gap-[25px] relative flex-[0_0_auto]">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative w-fit mt-[-1.00px] [font-family:'Karla',Helvetica] font-medium text-black text-lg tracking-[0] leading-[27px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
                  style={
                    item.label === "Notre mission" ? { width: "135px" } : {}
                  }
                >
                  {item.label}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex flex-col w-[190px] items-start gap-[13px] relative">
            <div className="w-[204px] flex-[0_0_auto] mr-[-14.00px] flex flex-col items-center relative">
              <Button className="w-44 h-auto px-0 py-4 bg-foundationbluenormal hover:bg-foundationbluenormal/90 rounded-[35px] [font-family:'Karla',Helvetica] font-semibold text-light-text text-xl text-center tracking-[0.20px] leading-5">
                Postuler ici !
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
