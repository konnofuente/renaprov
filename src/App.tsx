import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Accueil } from "./screens/Accueil";
import { AboutHistory } from "./screens/AboutHistory";
import { Mission } from "./screens/Mission";
import { Products } from "./screens/Products";
import { Maso } from "./screens/Maso";
import { Renews } from "./screens/Renews";
import { NotFound } from "./screens/NotFound";
import { HeaderSubsection } from "./screens/Accueil/sections/HeaderSubsection";
import { ScrollToTop } from "./components/ScrollToTop";

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
