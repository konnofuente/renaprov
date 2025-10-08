import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[102px] sm:py-12 md:py-16 lg:py-[54px] bg-foundationbluelight">
      <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between w-full max-w-[1236px] gap-6 sm:gap-8">
        {/* Image first on mobile/tablet, stays inline with text on desktop */}
        <div className="w-full xl:w-auto flex-shrink-0 order-1 xl:order-2">
          <img
            className="w-full xl:w-[579px] h-[200px] sm:h-[250px] md:h-[300px] xl:h-[365px] rounded-[16px] xl:rounded-[23px] object-cover"
            alt="Image"
            src="/image-13.png"
          />
        </div>

        {/* Text block */}
        <div className="flex flex-col flex-1 max-w-none xl:max-w-[526px] items-start gap-4 sm:gap-[15px] order-2 xl:order-1">
          <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-[34px] w-full">
            <h1 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-3xl sm:text-4xl md:text-5xl lg:text-[59px] tracking-[0] leading-tight lg:leading-[70.8px]">
              La microfinance au service du développement
            </h1>

            <p className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-foundationgreylight-active text-sm sm:text-base lg:text-[17px] tracking-[0] leading-[1.35] lg:leading-[20.4px]">
              Depuis plus de 30 ans, RENAPROV FINANCE SA accompagne les
              Camerounais dans leurs projets personnels et professionnels.
            </p>
          </div>

          <Button className="h-12 sm:h-[50px] px-5 sm:px-6 bg-foundation-bluenormal hover:bg-foundation-bluedark-hover rounded-[35px] [font-family:'Karla',Helvetica] font-semibold text-white text-sm sm:text-[17px] tracking-[0.20px] leading-5 w-full sm:w-auto">
            Ouvrir mon compte aujourd&apos;hui
          </Button>
        </div>
      </div>
    </section>
  );
};
