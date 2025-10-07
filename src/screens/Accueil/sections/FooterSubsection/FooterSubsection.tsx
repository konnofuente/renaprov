import React from "react";
import { Separator } from "../../../../components/ui/separator";

const footerLinks = [
  { label: "Accueil" },
  { label: "Notre histoire" },
  { label: "Nos filieres" },
  { label: "Contact" },
];

const footerServices = [
  { label: "Compte courant" },
  { label: "Compte employé / retraité" },
  { label: "Compte epargne" },
  { label: "Des produits" },
];

const footerAddress = [
  { label: "BP : 13809 Messa, Yaoundé" },
  { label: "Siège social : Montée Elig-Effa, Yaoundé" },
];

const footerContact = [
  { label: "+237 693930231" },
  { label: "+237 695133343" },
  { label: "+237 690203176" },
  { label: "E-mail : service.digital@renaprov.com" },
];

const socialIcons = [
  { alt: "Icon facebook", src: "/icon---facebook.svg" },
  { alt: "Icon instagram", src: "/icon---instagram.svg" },
  { alt: "Icon x", src: "/icon---x.svg" },
  { alt: "Icon linkedin", src: "/icon---linkedin.svg" },
  { alt: "Icon youtube", src: "/icon---youtube.svg" },
];

export const FooterSubsection = (): JSX.Element => {
  return (
    <footer className="items-center justify-center gap-10 sm:gap-12 md:gap-16 lg:gap-20 px-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-16 lg:py-20 bg-[#011b26] flex flex-col w-full">
      <div className="flex-col max-w-screen-xl items-start gap-10 sm:gap-12 md:gap-16 lg:gap-20 w-full flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start gap-8 sm:gap-10 w-full">
          <div className="flex flex-col items-start col-span-1 sm:col-span-2 md:col-span-1">
            <img
              src="/logo.png"
              className="w-[180px] sm:w-[200px] md:w-[217.46px] h-auto"
              alt="Image removebg"
            />
          </div>

          <div className="flex flex-col w-full items-start gap-3 sm:gap-4">
            <div className="self-stretch [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluelight-active text-base sm:text-lg tracking-[0] leading-[27px]">
              Liens
            </div>

            <div className="items-start flex flex-col self-stretch w-full">
              {footerLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex items-start px-0 py-1.5 sm:py-2 self-stretch w-full"
                >
                  <div className="w-full [font-family:'Karla',Helvetica] font-normal text-foundationbluelight text-sm sm:text-base tracking-[0] leading-6">
                    {link.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full items-start gap-3 sm:gap-4">
            <div className="self-stretch [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluelight-active text-base sm:text-lg tracking-[0] leading-[27px]">
              Services
            </div>

            <div className="items-start flex flex-col self-stretch w-full">
              {footerServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start px-0 py-1.5 sm:py-2 self-stretch w-full"
                >
                  <div className="w-full [font-family:'Karla',Helvetica] font-normal text-foundationbluelight text-sm sm:text-base tracking-[0] leading-6">
                    {service.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full items-start gap-3 sm:gap-4">
            <div className="self-stretch [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluelight-active text-base sm:text-lg tracking-[0] leading-[27px]">
              Address
            </div>

            <div className="items-start flex flex-col self-stretch w-full">
              {footerAddress.map((address, index) => (
                <div
                  key={index}
                  className="flex items-start px-0 py-1.5 sm:py-2 self-stretch w-full"
                >
                  <div className="flex-1 [font-family:'Karla',Helvetica] font-normal text-foundationbluelight text-sm sm:text-base tracking-[0] leading-6">
                    {address.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full items-start gap-3 sm:gap-4">
            <div className="self-stretch [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluelight-active text-base sm:text-lg leading-[27px] tracking-[0]">
              Contact
            </div>

            <div className="flex flex-col w-full items-start">
              {footerContact.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-start px-0 py-1.5 sm:py-2 self-stretch w-full"
                >
                  <div className="flex-1 [font-family:'Karla',Helvetica] font-normal text-foundationbluelight text-sm sm:text-base tracking-[0] leading-6">
                    {contact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 sm:gap-8 self-stretch w-full">
          <Separator className="bg-foundation-bluelight-active" />

          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-4 self-stretch w-full">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <div className="w-fit font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-foundation-bluelight-active text-xs sm:text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                Copyright © 2025 RENAPROV All rights reserved.
              </div>

              <div className="w-fit font-text-small-link font-[number:var(--text-small-link-font-weight)] text-foundation-bluelight-active text-xs sm:text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline [font-style:var(--text-small-link-font-style)]">
                Design by Space kola
              </div>
            </div>

            <div className="inline-flex items-start gap-3">
              {socialIcons.map((icon, index) => (
                <img
                  key={index}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  alt={icon.alt}
                  src={icon.src}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
