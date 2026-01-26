import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "../../../../components/ui/card";

const TEAM_IMAGES = [
  "..//frame-2087326088.png",
  "..//frame-2087326092.png",
  "..//frame-2087326090.png",
  "..//frame-2087326091.png",
  "..//frame-2087326089.png",
  "..//frame-2087326093.png",
];

export const TeamSection = (): JSX.Element => {
  const { t } = useTranslation("about");

  const teamMembers = useMemo(
    () =>
      [1, 2, 3, 4, 5, 6].map((i) => ({
        name: t(`team.members.member${i}.name`),
        title: t(`team.members.member${i}.title`),
        image: TEAM_IMAGES[i - 1],
      })),
    [t]
  );

  return (
    <section className="flex flex-col items-start gap-2.5 pt-[30px] pb-40 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full bg-white">
      <div className="flex flex-col items-center gap-10 w-full">
        <h2 className="bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-transparent text-5xl text-center tracking-[-0.96px] leading-[56.6px]">
          {t("team.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-[30px_20px] w-full">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="flex flex-col items-start justify-end aspect-[3/4] rounded-lg border-t-8 border-b-8 border-[#00acee] border-x-0 overflow-hidden w-full"
              style={{
                background: `url(${member.image}) 50% 50% / contain no-repeat`,
              }}
            >
              <CardContent className="flex flex-col w-full items-center justify-end p-0 bg-[#12121233] h-24">
                <div className="py-4 px-4 flex flex-col items-center justify-center gap-2 w-full h-full">
                  <h3 className="w-full [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-lg text-center tracking-[0] leading-6">
                    {member.name}
                  </h3>
                  <p className="w-full [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-sm text-center tracking-[0] leading-5">
                    {member.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
