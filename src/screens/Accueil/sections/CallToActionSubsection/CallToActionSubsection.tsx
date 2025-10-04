import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const CallToActionSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-6 sm:gap-8 md:gap-[30px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-28 w-full bg-[linear-gradient(0deg,rgba(5,91,124,0.29)_0%,rgba(5,91,124,0.29)_100%)]">
      <div className="flex flex-col max-w-screen-xl w-full items-center gap-4 sm:gap-5">
        <div className="flex flex-col max-w-screen-md gap-4 sm:gap-5 md:gap-6 items-center w-full px-4">
          <h2 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[#ffffff] text-2xl sm:text-3xl md:text-4xl lg:text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-tight md:leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
            Abonnez vous à la newsletter
          </h2>
        </div>

        <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-foundationbluelight text-sm sm:text-base md:text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-relaxed md:leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] px-4">
          Recevez des recettes saines directement dans votre boîte mail.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:min-w-[350px] md:w-[400px] items-stretch sm:items-start gap-3 sm:gap-4 px-4 sm:px-0">
        <Input
          type="email"
          placeholder="Entrez votre email"
          className="flex-1 border-[#f5fcff] bg-transparent text-foundationbluelight placeholder:text-foundationbluelight font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-sm sm:text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] h-10 sm:h-auto"
        />

        <Button
          variant="outline"
          className="h-10 sm:h-auto px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border-[#f5fcff] bg-transparent text-foundationbluelight hover:bg-white/10 hover:text-foundationbluelight font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-sm sm:text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]"
        >
          S&#39;abonner
        </Button>
      </div>
    </section>
  );
};
