import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const NewsletterSubscription = (): JSX.Element => {
  return (
    <section className="w-full px-16 py-28 bg-[linear-gradient(0deg,rgba(5,91,124,0.29)_0%,rgba(5,91,124,0.29)_100%),url(..//header---54--.png)_50%_50%_/_cover] flex items-center justify-center">
      <div className="flex flex-col items-center gap-[30px] max-w-screen-xl w-full">
        <div className="flex flex-col items-center gap-5 w-full max-w-[1036px]">
          <div className="flex flex-col items-center gap-6 w-full max-w-screen-md">
            <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
              Abonnez-vous à la newsletter
            </h1>
          </div>

          <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-foundationbluelight text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
            Recevez nos actualités directement par email.
          </p>
        </div>

        <div className="flex items-start gap-4 w-[400px]">
          <Input
            type="email"
            placeholder="Entrez votre email"
            className="flex-1 h-12 px-3 py-3 border border-solid border-[#f5fcff] bg-transparent text-foundationbluelight font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] placeholder:text-foundationbluelight"
          />

          <Button className="h-12 px-6 py-3 border border-solid border-[#f5fcff] bg-transparent text-foundationbluelight font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-[#f5fcff]/10">
            S&#39;abonner
          </Button>
        </div>
      </div>
    </section>
  );
};
