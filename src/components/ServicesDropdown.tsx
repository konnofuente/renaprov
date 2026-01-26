import { useState, useRef, useEffect, useMemo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalizedPath, getLangFromPath } from "../lib/utils";

interface Service {
  title: string;
  route: string;
  category: string;
  categoryKey: string;
}

interface ServicesDropdownProps {
  isActive: boolean;
  mainPath: string;
}

export const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ isActive, mainPath }) => {
  const { t } = useTranslation(["services", "header"]);
  const pathname = useLocation().pathname;
  const currentLang = getLangFromPath(pathname) ?? "fr";
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const localized = (path: string) => getLocalizedPath(path, currentLang);

  // Build services array with translations
  const services: Service[] = useMemo(() => [
    // Comptes Courant
    { title: t('services.currentAccountIndividual'), route: "/service/compte-courant-individuel", category: t('categories.currentAccounts'), categoryKey: "currentAccounts" },
    { title: t('services.currentAccountBusiness'), route: "/service/compte-courant-entreprise", category: t('categories.currentAccounts'), categoryKey: "currentAccounts" },
    { title: t('services.currentAccountAssociation'), route: "/service/compte-courant-association", category: t('categories.currentAccounts'), categoryKey: "currentAccounts" },
    
    // Comptes Épargne
    { title: t('services.savingsAccountIndividual'), route: "/service/compte-epargne-individuel", category: t('categories.savingsAccounts'), categoryKey: "savingsAccounts" },
    { title: t('services.savingsAccountBusiness'), route: "/service/compte-epargne-entreprise", category: t('categories.savingsAccounts'), categoryKey: "savingsAccounts" },
    
    // Comptes Spéciaux
    { title: t('services.employeeAccount'), route: "/service/compte-cheque-salaire-pension", category: t('categories.specialAccounts'), categoryKey: "specialAccounts" },
    { title: t('services.pensionAccount'), route: "/service/compte-pensionne", category: t('categories.specialAccounts'), categoryKey: "specialAccounts" },
    
    // ORA
    { title: t('services.oraFoncier'), route: "/service/ora-foncier", category: t('categories.ora'), categoryKey: "ora" },
    { title: t('services.oraInvestissement'), route: "/service/ora-investissement", category: t('categories.ora'), categoryKey: "ora" },
    { title: t('services.oraPrevoyance'), route: "/service/ora-prevoyance", category: t('categories.ora'), categoryKey: "ora" },
    { title: t('services.oraScolaire'), route: "/service/ora-scolaire", category: t('categories.ora'), categoryKey: "ora" },
    { title: t('services.oraAcademique'), route: "/service/ora-academique", category: t('categories.ora'), categoryKey: "ora" },
    { title: t('services.oraEquipement'), route: "/service/ora-equipement", category: t('categories.ora'), categoryKey: "ora" },
    { title: t('services.oraIslamique'), route: "/service/ora-islamique", category: t('categories.ora'), categoryKey: "ora" },
    { title: t('services.oraSante'), route: "/service/ora-sante", category: t('categories.ora'), categoryKey: "ora" },
    
    // Autres Services
    { title: t('services.maso'), route: "/maso", category: t('categories.otherServices'), categoryKey: "otherServices" },
    { title: t('services.spmc'), route: "/service/spmc", category: t('categories.otherServices'), categoryKey: "otherServices" },
    { title: t('services.bicard'), route: "/service/bicard", category: t('categories.otherServices'), categoryKey: "otherServices" },
  ], [t]);

  // Group services by category
  const groupedServices = useMemo(() => {
    return services.reduce((acc, service) => {
      if (!acc[service.categoryKey]) {
        acc[service.categoryKey] = [];
      }
      acc[service.categoryKey].push(service);
      return acc;
    }, {} as Record<string, Service[]>);
  }, [services]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleServiceClick = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Small delay to prevent flickering
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center">
        <Link
          to={mainPath}
          className={`font-medium transition-colors duration-200 text-xs lg:text-sm xl:text-base whitespace-nowrap ${
            isActive
              ? "text-foundation-bluenormal"
              : "text-black hover:text-foundation-bluenormal"
          }`}
        >
          {t('header:nav.products')}
        </Link>
        <div className="ml-1 p-1">
          {isOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>
      </div>

      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <div className="p-4">
            {Object.entries(groupedServices).map(([categoryKey, categoryServices]) => {
              const firstService = categoryServices[0];
              return (
              <div key={categoryKey} className="mb-4 last:mb-0">
                <h3 className="font-semibold text-sm text-gray-700 mb-2 border-b border-gray-100 pb-1">
                  {firstService.category}
                </h3>
                <div className="space-y-1">
                  {categoryServices.map((service) => (
                    <Link
                      key={service.title}
                      to={localized(service.route)}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-foundation-bluenormal rounded-md transition-colors duration-150"
                      onClick={handleServiceClick}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
