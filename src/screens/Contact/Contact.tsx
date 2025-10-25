import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";
import { HeroSection } from "./sections/HeroSection";
import { ContactFormSection } from "./sections/ContactFormSection";

export const Contact: React.FC = () => {
  return (
    <>
      <SEO
        title="Contactez-nous - RENAPROV FINANCE SA"
        description="Contactez RENAPROV FINANCE SA pour toutes vos questions sur nos services de microfinance au Cameroun. Notre équipe est à votre disposition."
        keywords="contact, RENAPROV, microfinance, Cameroun, service client, assistance"
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
