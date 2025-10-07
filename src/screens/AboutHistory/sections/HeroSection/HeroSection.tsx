import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-between px-[102px] py-[54px] bg-foundationbluelight">
      <div className="flex items-start justify-between w-full max-w-[1236px] gap-8">
        <div className="flex flex-col flex-1 max-w-[526px] items-start gap-[15px]">
          <div className="flex flex-col items-start gap-[34px] w-full">
            <h1 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-[59px] tracking-[0] leading-[70.8px]">
              La microfinance au service du développement
            </h1>

            <p className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-foundationgreylight-active text-[17px] tracking-[0] leading-[20.4px]">
              Depuis plus de 30 ans, RENAPROV FINANCE SA accompagne les
              Camerounais dans leurs projets personnels et professionnels.
            </p>
          </div>

          <Button className="h-[50px] px-3 bg-foundation-bluenormal hover:bg-foundation-bluedark-hover rounded-[35px] [font-family:'Karla',Helvetica] font-semibold text-white text-[17px] tracking-[0.20px] leading-5">
            Ouvrir mon compte aujourd&apos;hui
          </Button>
        </div>

        <div className="flex-shrink-0">
          <img
            className="w-[579px] h-[365px] rounded-[23px] object-cover"
            alt="Image"
            src="/image-13.png"
          />
        </div>
      </div>
    </section>
  );
};
