import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Accueil } from "./screens/Accueil";
import { AboutHistory } from "./screens/AboutHistory";
import { Mission } from "./screens/Mission";
import { Products } from "./screens/Products";
import { Maso } from "./screens/Maso";
import { Renews } from "./screens/Renews";
import { Contact } from "./screens/Contact";
import { CompteCourantIndividuel } from "./screens/ServiceDetail/CompteCourantIndividuel";
import { CompteChequeSalairePension } from "./screens/ServiceDetail/CompteChequeSalairePension";
import { CompteEpargneIndividuel } from "./screens/ServiceDetail/CompteEpargneIndividuel";
import { DepotsATerme } from "./screens/ServiceDetail/DepotsATerme";
import { Credit } from "./screens/ServiceDetail/Credit";
import { ProcessusDemandePret } from "./screens/ServiceDetail/ProcessusDemandePret";
import { CompteCourantEntreprise } from "./screens/ServiceDetail/CompteCourantEntreprise";
import { CompteCourantAssociation } from "./screens/ServiceDetail/CompteCourantAssociation";
import { CompteEpargneEntreprise } from "./screens/ServiceDetail/CompteEpargneEntreprise";
import { ComptePensionne } from "./screens/ServiceDetail/ComptePensionne";
import { OraFoncier } from "./screens/ServiceDetail/OraFoncier";
import { OraInvestissement } from "./screens/ServiceDetail/OraInvestissement";
import { OraAcademique } from "./screens/ServiceDetail/OraAcademique";
import { OraScolaire } from "./screens/ServiceDetail/OraScolaire";
import { OraPrevoyance } from "./screens/ServiceDetail/OraPrevoyance";
import { OraEquipement } from "./screens/ServiceDetail/OraEquipement";
import { OraIslamique } from "./screens/ServiceDetail/OraIslamique";
import { OraSante } from "./screens/ServiceDetail/OraSante";
import { Spmc } from "./screens/ServiceDetail/Spmc";
import { NotFound } from "./screens/NotFound";
import { HeaderSubsection } from "./screens/Accueil/sections/HeaderSubsection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";
import { LanguageRouter } from "./components/LanguageRouter";

const AppContent: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <LanguageRouter>
      <ScrollToTop />
      <HeaderSubsection />
      <Routes>
        <Route path="/:lang" element={<Accueil />} />
        <Route path="/accueil/:lang" element={<Accueil />} />
        <Route path="/about/:lang" element={<AboutHistory />} />
        <Route path="/mission/:lang" element={<Mission />} />
        <Route path="/products/:lang" element={<Products />} />
        <Route path="/maso/:lang" element={<Maso />} />
        <Route path="/renews/:lang" element={<Renews />} />
        <Route path="/contact/:lang" element={<Contact />} />
        <Route path="/service/compte-courant-individuel/:lang" element={<CompteCourantIndividuel />} />
        <Route path="/service/compte-cheque-salaire-pension/:lang" element={<CompteChequeSalairePension />} />
        <Route path="/service/compte-epargne-individuel/:lang" element={<CompteEpargneIndividuel />} />
        <Route path="/service/depots-a-terme/:lang" element={<DepotsATerme />} />
        <Route path="/service/credit/:lang" element={<Credit />} />
        <Route path="/service/processus-demande-pret/:lang" element={<ProcessusDemandePret />} />
        <Route path="/service/compte-courant-entreprise/:lang" element={<CompteCourantEntreprise />} />
        <Route path="/service/compte-courant-association/:lang" element={<CompteCourantAssociation />} />
        <Route path="/service/compte-epargne-entreprise/:lang" element={<CompteEpargneEntreprise />} />
        <Route path="/service/compte-pensionne/:lang" element={<ComptePensionne />} />
        <Route path="/service/ora-foncier/:lang" element={<OraFoncier />} />
        <Route path="/service/ora-investissement/:lang" element={<OraInvestissement />} />
        <Route path="/service/ora-academique/:lang" element={<OraAcademique />} />
        <Route path="/service/ora-scolaire/:lang" element={<OraScolaire />} />
        <Route path="/service/ora-prevoyance/:lang" element={<OraPrevoyance />} />
        <Route path="/service/ora-equipement/:lang" element={<OraEquipement />} />
        <Route path="/service/ora-islamique/:lang" element={<OraIslamique />} />
        <Route path="/service/ora-sante/:lang" element={<OraSante />} />
        <Route path="/service/spmc/:lang" element={<Spmc />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatingWhatsAppButton 
        phoneNumber="237693930231"
        message={t('whatsappDefaultMessage')}
      />
    </LanguageRouter>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};
