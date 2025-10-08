import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Page = 'accueil' | 'about' | 'mission';

interface NavigationContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<Page>('accueil');

  return (
    <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </NavigationContext.Provider>
  );
};
