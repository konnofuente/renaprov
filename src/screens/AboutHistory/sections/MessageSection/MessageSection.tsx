import React from "react";

export const MessageSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_43%)] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-4 py-16 lg:px-20 lg:py-0 min-h-[642px]">
        <div className="flex-shrink-0 w-full lg:w-auto">
          <img
            className="w-full lg:w-[669px] h-auto lg:h-[642px] object-cover"
            alt="Whatsapp image"
            src="/whatsapp-image-2025-09-14-at-14-11-20-1.png"
          />
        </div>

        <div className="flex flex-col gap-8 max-w-[600px] lg:max-w-[468px] relative">
          <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-grayswhite text-3xl lg:text-[52px] tracking-[0] leading-tight lg:leading-[62.4px]">
            Mr M. Emmanuel Noël Bissai
          </h2>

          <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-grayswhite text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
            Depuis près de trois décennies, Renaprov s&apos;engage à rester
            proche de ses clients et à leur proposer des solutions financières
            solidaires. Notre ambition est de consolider cette proximité en
            développant des services modernes, adaptés aux besoins des familles,
            des entreprises et des collectivités. Ensemble, bâtissons une
            finance inclusive et durable pour le Cameroun.
          </p>

          <img
            className="absolute bottom-0 right-0 w-[150px] lg:w-[225px] h-auto lg:h-60 opacity-80"
            alt="Capa"
            src="/capa-1.svg"
          />
        </div>
      </div>
    </section>
  );
};
