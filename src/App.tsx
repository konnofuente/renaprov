import React from "react";
import {
  NavigationProvider,
  useNavigation,
} from "./contexts/NavigationContext";
import { Accueil } from "./screens/Accueil";
import { AboutHistory } from "./screens/AboutHistory";
import { Mission } from "./screens/Mission";

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();

  switch (currentPage) {
    case "accueil":
      return <Mission />;
    // return <Accueil />;
    case "about":
      return <AboutHistory />;
    case "mission":
    default:
      return <Accueil />;
  }
};

export const App: React.FC = () => {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
};
