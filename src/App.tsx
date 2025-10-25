import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { ComptePrive } from "./screens/ServiceDetail/ComptePrive";
import { ComptePublic } from "./screens/ServiceDetail/ComptePublic";
import { ComptePensionne } from "./screens/ServiceDetail/ComptePensionne";
import { NotFound } from "./screens/NotFound";
import { HeaderSubsection } from "./screens/Accueil/sections/HeaderSubsection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <HeaderSubsection />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/about" element={<AboutHistory />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/products" element={<Products />} />
        <Route path="/maso" element={<Maso />} />
        <Route path="/renews" element={<Renews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/compte-courant-individuel" element={<CompteCourantIndividuel />} />
        <Route path="/service/compte-cheque-salaire-pension" element={<CompteChequeSalairePension />} />
        <Route path="/service/compte-epargne-individuel" element={<CompteEpargneIndividuel />} />
        <Route path="/service/depots-a-terme" element={<DepotsATerme />} />
        <Route path="/service/credit" element={<Credit />} />
        <Route path="/service/processus-demande-pret" element={<ProcessusDemandePret />} />
        <Route path="/service/compte-courant-entreprise" element={<CompteCourantEntreprise />} />
        <Route path="/service/compte-courant-association" element={<CompteCourantAssociation />} />
        <Route path="/service/compte-epargne-entreprise" element={<CompteEpargneEntreprise />} />
        <Route path="/service/compte-prive" element={<ComptePrive />} />
        <Route path="/service/compte-public" element={<ComptePublic />} />
        <Route path="/service/compte-pensionne" element={<ComptePensionne />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatingWhatsAppButton 
        phoneNumber="237690160047"
        message="Bonjour, je souhaite obtenir plus d'informations sur les services de RENAPROV."
      />
    </Router>
  );
};
