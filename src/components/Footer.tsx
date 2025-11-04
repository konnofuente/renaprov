import React from "react";
import { Separator } from "./ui/separator";

const footerLinks = [
  { label: "Accueil" },
  { label: "Notre histoire" },
  { label: "Nos filières" },
  { label: "Contact" },
];

const footerServices = [
  { label: "Compte courant" },
  { label: "Compte employé / retraité" },
  { label: "Compte épargne" },
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
  { alt: "Facebook", src: "/icon---facebook.svg", href: "https://www.facebook.com/renaprovonline" },
  { alt: "Instagram", src: "/icon---instagram.svg", href: "https://www.instagram.com/renaprov_finance/" },
  { alt: "LinkedIn", src: "/icon---linkedin.svg", href: "https://www.linkedin.com/company/renaprov-finance-s-a/" },
  { alt: "X (Twitter)", src: "/icon---x.svg", href: "https://x.com/RenaprovS" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="items-center justify-center gap-10 sm:gap-12 md:gap-16 lg:gap-20 px-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-16 lg:py-20 bg-[#011b26] flex flex-col w-full">
      <div className="flex-col max-w-screen-xl items-start gap-10 sm:gap-12 md:gap-16 lg:gap-20 w-full flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start gap-8 sm:gap-10 w-full">
          {/* Logo Section */}
          <div className="flex flex-col items-start col-span-1 sm:col-span-2 md:col-span-1">
            <img
              src="/logo.png"
              className="w-[180px] sm:w-[200px] md:w-[217.46px] h-auto"
              alt="RENAPROV FINANCE SA Logo"
            />
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-start gap-4 sm:gap-6">
            <h3 className="font-text-h3 font-[number:var(--text-h3-font-weight)] text-white text-[length:var(--text-h3-font-size)] tracking-[var(--text-h3-letter-spacing)] leading-[var(--text-h3-line-height)] [font-style:var(--text-h3-font-style)]">
              Liens
            </h3>
            <div className="flex flex-col items-start gap-3 sm:gap-4">
              {footerLinks.map((link, index) => (
                <span key={index} className="font-text-body font-[number:var(--text-body-font-weight)] text-foundation-bluelight-active text-[length:var(--text-body-font-size)] tracking-[var(--text-body-letter-spacing)] leading-[var(--text-body-line-height)] [font-style:var(--text-body-font-style)]">
                  {link.label}
                </span>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="flex flex-col items-start gap-4 sm:gap-6">
            <h3 className="font-text-h3 font-[number:var(--text-h3-font-weight)] text-white text-[length:var(--text-h3-font-size)] tracking-[var(--text-h3-letter-spacing)] leading-[var(--text-h3-line-height)] [font-style:var(--text-h3-font-style)]">
              Services
            </h3>
            <div className="flex flex-col items-start gap-3 sm:gap-4">
              {footerServices.map((service, index) => (
                <span key={index} className="font-text-body font-[number:var(--text-body-font-weight)] text-foundation-bluelight-active text-[length:var(--text-body-font-size)] tracking-[var(--text-body-letter-spacing)] leading-[var(--text-body-line-height)] [font-style:var(--text-body-font-style)]">
                  {service.label}
                </span>
              ))}
            </div>
          </div>

          {/* Address Section */}
          <div className="flex flex-col items-start gap-4 sm:gap-6">
            <h3 className="font-text-h3 font-[number:var(--text-h3-font-weight)] text-white text-[length:var(--text-h3-font-size)] tracking-[var(--text-h3-letter-spacing)] leading-[var(--text-h3-line-height)] [font-style:var(--text-h3-font-style)]">
              Adresse
            </h3>
            <div className="flex flex-col items-start gap-3 sm:gap-4">
              {footerAddress.map((address, index) => (
                <span key={index} className="font-text-body font-[number:var(--text-body-font-weight)] text-foundation-bluelight-active text-[length:var(--text-body-font-size)] tracking-[var(--text-body-letter-spacing)] leading-[var(--text-body-line-height)] [font-style:var(--text-body-font-style)]">
                  {address.label}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-start gap-4 sm:gap-6">
            <h3 className="font-text-h3 font-[number:var(--text-h3-font-weight)] text-white text-[length:var(--text-h3-font-size)] tracking-[var(--text-h3-letter-spacing)] leading-[var(--text-h3-line-height)] [font-style:var(--text-h3-font-style)]">
              Contact
            </h3>
            <div className="flex flex-col items-start gap-3 sm:gap-4">
              {footerContact.map((contact, index) => (
                <span key={index} className="font-text-body font-[number:var(--text-body-font-weight)] text-foundation-bluelight-active text-[length:var(--text-body-font-size)] tracking-[var(--text-body-letter-spacing)] leading-[var(--text-body-line-height)] [font-style:var(--text-body-font-style)]">
                  {contact.label}
                </span>
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
            </div>

            <div className="inline-flex items-start gap-3">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  aria-label={icon.alt}
                >
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    alt={icon.alt}
                    src={icon.src}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
