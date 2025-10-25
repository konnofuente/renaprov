import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";

export const HeroSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[102px] py-8 sm:py-12 md:py-16 lg:py-[54px] bg-foundationbluelight min-h-[70vh] sm:min-h-auto"
    >
      <div className="flex flex-col xl:flex-row items-center xl:items-center justify-center xl:justify-between w-full max-w-[1236px] gap-6 sm:gap-8">
        {/* Image first on mobile/tablet, stays inline with text on desktop */}
        <div className="w-full xl:w-auto flex-shrink-0 order-1 xl:order-2 h-full min-h-[300px]">
          <img
            className="w-full xl:w-[579px] h-full min-h-[300px] rounded-[16px] xl:rounded-[23px] object-cover object-center"
            alt="Équipe RENAPROV - Contactez-nous"
            src="/contact us.png"
          />
        </div>

        {/* Text block */}
        <div className="flex flex-col flex-1 max-w-none xl:max-w-[526px] items-center xl:items-start gap-4 sm:gap-[15px] order-2 xl:order-1 text-center xl:text-left">
          <div className="flex flex-col items-center xl:items-start gap-6 sm:gap-8 lg:gap-[34px] w-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-3xl sm:text-4xl md:text-5xl lg:text-[59px] tracking-[0] leading-tight lg:leading-[70.8px]"
            >
              Contactez Nous
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-foundationgreylight-active text-sm sm:text-base lg:text-[17px] tracking-[0] leading-[1.35] lg:leading-[20.4px]"
            >
              Notre équipe est à votre disposition pour répondre à toutes vos questions sur nos services de microfinance au Cameroun.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="h-12 sm:h-[50px] px-5 sm:px-6 bg-foundation-bluenormal hover:bg-foundation-bluedark-hover rounded-[35px] [font-family:'Karla',Helvetica] font-semibold text-white text-sm sm:text-[17px] tracking-[0.20px] leading-5 w-full sm:w-auto">
              Envoyer un message
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
