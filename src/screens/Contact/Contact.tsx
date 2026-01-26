import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";
import { HeroSection } from "./sections/HeroSection";
import { ContactFormSection } from "./sections/ContactFormSection";

export const Contact: React.FC = () => {
  const { t } = useTranslation("contact");

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
      />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50"
      >
        <HeroSection />
        <ContactFormSection />
      </motion.main>
    </>
  );
};
