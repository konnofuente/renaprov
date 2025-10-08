import React from "react";
import { Separator } from "../../../../components/ui/separator";

const linksData = [
  { text: "Accueil" },
  { text: "Notre histoire" },
  { text: "Nos filieres" },
  { text: "Contact" },
];

const servicesData = [
  { text: "Compte courant" },
  { text: "Compte employé / retraité" },
  { text: "Compte epargne" },
  { text: "Des produits" },
];

const addressData = [
  { text: "BP : 13809 Messa, Yaoundé" },
  { text: "Siège social : Montée Elig-Effa, Yaoundé" },
];

const contactData = [
  { text: "+237 693930231" },
  { text: "+237 695133343" },
  { text: "+237 690203176" },
  { text: "E-mail : service.digital@renaprov.com" },
];

const socialIcons = [
  { alt: "Icon facebook", src: "/icon---facebook.svg" },
  { alt: "Icon instagram", src: "/icon---instagram.svg" },
  { alt: "Icon x", src: "/icon---x.svg" },
  { alt: "Icon linkedin", src: "/icon---linkedin.svg" },
  { alt: "Icon youtube", src: "/icon---youtube.svg" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center justify-center gap-20 px-16 py-20 bg-[#011b26] w-full">
      <div className="flex flex-col items-start gap-20 w-full max-w-screen-xl">
        <div className="flex items-start gap-10 w-full">
          <div className="flex flex-col items-start flex-1">
            <img
              className="w-[217.46px] h-[118.84px]"
              alt="Image removebg"
              src="/image-removebg-preview-1-1.png"
            />
          </div>

          <nav className="flex flex-col w-[181px] items-start gap-4">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluelight-active text-lg tracking-[0] leading-[27px]">
              Liens
            </h3>
            <ul className="flex flex-col items-start w-full">
              {linksData.map((link, index) => (
                <li key={index} className="flex items-start px-0 py-2 w-full">
                  <a className="[font-family:'Karla',Helvetica] font-normal text-foundationbluelight text-base tracking-[0] leading-6 hover:underline cursor-pointer">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="flex flex-col w-[197px] items-start gap-4">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluelight-active text-lg tracking-[0] leading-[27px]">
              Services
            </h3>
            <ul className="flex flex-col items-start w-full">
              {servicesData.map((service, index) => (
                <li key={index} className="flex items-start px-0 py-2 w-full">
                  <a className="[font-family:'Karla',Helvetica] font-normal text-foundationbluelight text-base tracking-[0] leading-6 hover:underline cursor-pointer">
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col w-[184px] items-start gap-4">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluelight-active text-lg tracking-[0] leading-[27px]">
              Address
            </h3>
            <address className="flex flex-col items-start w-full not-italic">
              {addressData.map((addr, index) => (
                <div key={index} className="flex items-start px-0 py-2 w-full">
                  <p className="flex-1 [font-family:'Karla',Helvetica] font-normal text-foundationbluelight text-base tracking-[0] leading-6">
                    {addr.text}
                  </p>
                </div>
              ))}
            </address>
          </div>

          <div className="flex flex-col w-[185px] items-start gap-4">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluelight-active text-lg tracking-[0] leading-[27px]">
              Contact
            </h3>
            <address className="flex flex-col w-[184px] items-start not-italic">
              {contactData.map((contact, index) => (
                <div key={index} className="flex items-start px-0 py-2 w-full">
                  <p className="flex-1 [font-family:'Karla',Helvetica] font-normal text-foundationbluelight text-base tracking-[0] leading-6">
                    {contact.text}
                  </p>
                </div>
              ))}
            </address>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 w-full">
          <Separator className="bg-foundation-bluelight-active opacity-20" />

          <div className="flex items-start justify-between w-full">
            <div className="inline-flex items-center gap-6">
              <p className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-foundation-bluelight-active text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
                Copyright © 2025 RENAPROV All rights reserved.
              </p>

              <a className="font-text-small-link font-[number:var(--text-small-link-font-weight)] text-foundation-bluelight-active text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)] cursor-pointer hover:opacity-80">
                Design by Space kola
              </a>
            </div>

            <div className="inline-flex items-start gap-3">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img className="w-6 h-6" alt={icon.alt} src={icon.src} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
