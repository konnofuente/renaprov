import React from 'react';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import { Accueil } from './screens/Accueil';
import { AboutHistory } from './screens/AboutHistory';

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();

  switch (currentPage) {
    case 'accueil':
      return <Accueil />;
    case 'about':
      return <AboutHistory />;
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
