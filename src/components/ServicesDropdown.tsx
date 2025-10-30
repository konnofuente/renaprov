import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  route: string;
  category: string;
}

const services: Service[] = [
  // Comptes Courant
  { title: "Compte courant individuel", route: "/service/compte-courant-individuel", category: "Comptes Courant" },
  { title: "Compte courant entreprise", route: "/service/compte-courant-entreprise", category: "Comptes Courant" },
  { title: "Compte courant association", route: "/service/compte-courant-association", category: "Comptes Courant" },
  
  // Comptes Épargne
  { title: "Compte épargne individuel", route: "/service/compte-epargne-individuel", category: "Comptes Épargne" },
  { title: "Compte épargne entreprise", route: "/service/compte-epargne-entreprise", category: "Comptes Épargne" },
  
  // Comptes Spéciaux
  { title: "Compte salarié secteur Public ou Privé", route: "/service/compte-cheque-salaire-pension", category: "Comptes Spéciaux" },
  { title: "Compte pensionné secteur Public ou Privé", route: "/service/compte-pensionne", category: "Comptes Spéciaux" },
  
  // ORA
  { title: "ORA Foncier", route: "/service/ora-foncier", category: "ORA" },
  { title: "ORA Investissement", route: "/service/ora-investissement", category: "ORA" },
  { title: "ORA Prévoyance", route: "/service/ora-prevoyance", category: "ORA" },
  { title: "ORA Scolaire", route: "/service/ora-scolaire", category: "ORA" },
  { title: "ORA Académique", route: "/service/ora-academique", category: "ORA" },
  { title: "ORA Équipement", route: "/service/ora-equipement", category: "ORA" },
  { title: "ORA Islamique", route: "/service/ora-islamique", category: "ORA" },
  { title: "ORA Santé", route: "/service/ora-sante", category: "ORA" },
  
  // Autres Services
  { title: "MASO", route: "/maso", category: "Autres Services" },
  { title: "SPMC", route: "/service/spmc", category: "Autres Services" },
  { title: "Bicard", route: "/service/bicard", category: "Autres Services" },
];

// Group services by category
const groupedServices = services.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }
  acc[service.category].push(service);
  return acc;
}, {} as Record<string, Service[]>);

interface ServicesDropdownProps {
  isActive: boolean;
  mainPath: string;
}

export const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ isActive, mainPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
          Produits
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
            {Object.entries(groupedServices).map(([category, categoryServices]) => (
              <div key={category} className="mb-4 last:mb-0">
                <h3 className="font-semibold text-sm text-gray-700 mb-2 border-b border-gray-100 pb-1">
                  {category}
                </h3>
                <div className="space-y-1">
                  {categoryServices.map((service) => (
                    <Link
                      key={service.title}
                      to={service.route}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-foundation-bluenormal rounded-md transition-colors duration-150"
                      onClick={handleServiceClick}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
