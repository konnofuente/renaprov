import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";

const linksData = [
  { label: "Accueil" },
  { label: "Notre histoire" },
  { label: "Nos filieres" },
  { label: "Contact" },
];

const servicesData = [
  { label: "Compte courant" },
  { label: "Compte employé / retraité" },
  { label: "Compte epargne" },
  { label: "Des produits" },
];

const addressData = [
  { label: "BP : 13809 Messa, Yaoundé" },
  { label: "Siège social : Montée Elig-Effa, Yaoundé" },
];

const contactData = [
  { label: "+237 693930231" },
  { label: "+237 695133343" },
  { label: "+237 690203176" },
  { label: "E-mail : service.digital@renaprov.com" },
];

const socialIcons = [
  { Icon: FacebookIcon, alt: "Facebook" },
  { Icon: InstagramIcon, alt: "Instagram" },
  { Icon: TwitterIcon, alt: "X" },
  { Icon: LinkedinIcon, alt: "LinkedIn" },
  { Icon: YoutubeIcon, alt: "YouTube" },
];

export const NewsletterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center justify-center gap-20 px-16 py-20 bg-[#011b26] w-full">
      <div className="flex flex-col items-start gap-20 w-full max-w-screen-xl">
        <div className="flex items-start gap-10 w-full">
          <div className="flex-1 flex flex-col items-start">
            <img
              className="w-[217.46px] h-[118.84px]"
              alt="Image removebg"
              src="/image-removebg-preview-1-1.png"
            />
          </div>

          <nav className="w-[181px] flex flex-col items-start gap-4">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluelight-active text-lg tracking-[0] leading-[27px]">
              Liens
            </h3>
            <ul className="flex flex-col items-start w-full">
              {linksData.map((link, index) => (
                <li key={index} className="flex items-start px-0 py-2 w-full">
                  <a className="[font-family:'Karla',Helvetica] font-normal text-foundationbluelight text-base tracking-[0] leading-6 cursor-pointer hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="w-[197px] flex flex-col items-start gap-4">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluelight-active text-lg tracking-[0] leading-[27px]">
              Services
            </h3>
            <ul className="flex flex-col items-start w-full">
              {servicesData.map((service, index) => (
                <li key={index} className="flex items-start px-0 py-2 w-full">
                  <a className="[font-family:'Karla',Helvetica] font-normal text-foundationbluelight text-base tracking-[0] leading-6 cursor-pointer hover:underline">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-[184px] flex flex-col items-start gap-4">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluelight-active text-lg tracking-[0] leading-[27px]">
              Address
            </h3>
            <div className="flex flex-col items-start w-full">
              {addressData.map((address, index) => (
                <div key={index} className="flex items-start px-0 py-2 w-full">
                  <p className="flex-1 [font-family:'Karla',Helvetica] font-normal text-foundationbluelight text-base tracking-[0] leading-6">
                    {address.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[185px] flex flex-col items-start gap-4">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluelight-active text-lg tracking-[0] leading-[27px]">
              Contact
            </h3>
            <div className="flex flex-col items-start w-full">
              {contactData.map((contact, index) => (
                <div key={index} className="flex items-start px-0 py-2 w-full">
                  <p className="flex-1 [font-family:'Karla',Helvetica] font-normal text-foundationbluelight text-base tracking-[0] leading-6">
                    {contact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 w-full">
          <img
            className="w-full h-px object-cover"
            alt="Divider"
            src="/divider.svg"
          />

          <div className="flex items-start justify-between w-full">
            <div className="inline-flex items-center gap-6">
              <p className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-foundation-bluelight-active text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
                Copyright © 2025 RENAPROV All rights reserved.
              </p>

              <a className="font-text-small-link font-[number:var(--text-small-link-font-weight)] text-foundation-bluelight-active text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)] cursor-pointer">
                Design by Space kola
              </a>
            </div>

            <div className="inline-flex items-start gap-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  className="w-6 h-6 text-foundation-bluelight-active cursor-pointer hover:text-foundation-bluenormal transition-colors"
                  aria-label={social.alt}
                >
                  <social.Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
