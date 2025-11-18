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
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownContentRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const categoryHoverTimeoutRef = useRef<Record<string, NodeJS.Timeout>>({});

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

  // Gestion du scroll : rendre le scroll du menu complètement indépendant de la page
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = element;
    
    // Calculer les limites avec une petite marge pour une meilleure détection
    const isAtTop = scrollTop <= 1;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
    const isScrollingDown = e.deltaY > 0;
    const isScrollingUp = e.deltaY < 0;
    
    // TOUJOURS empêcher la propagation sauf si on est vraiment aux limites ET qu'on essaie de scroller au-delà
    // Cela rend le scroll du menu complètement indépendant du scroll de la page
    
    // Si on scroll vers le bas et qu'on est vraiment en bas, permettre le scroll de la page
    if (isScrollingDown && isAtBottom) {
      // Ne pas empêcher - laisser se propager
      return;
    }
    
    // Si on scroll vers le haut et qu'on est vraiment en haut, permettre le scroll de la page
    if (isScrollingUp && isAtTop) {
      // Ne pas empêcher - laisser se propager
      return;
    }
    
    // Dans tous les autres cas (on peut encore scroller dans le menu), 
    // EMPÊCHER COMPLÈTEMENT la propagation vers la page
    e.preventDefault();
    e.stopPropagation();
    
    // Appliquer le scroll manuellement dans le menu
    const newScrollTop = scrollTop + e.deltaY;
    element.scrollTop = Math.max(0, Math.min(newScrollTop, scrollHeight - clientHeight));
  };

  const handleServiceClick = () => {
    setIsOpen(false);
  };

  const handleCategoryMouseEnter = (category: string) => {
    // Annuler le timeout de fermeture s'il existe
    if (categoryHoverTimeoutRef.current[category]) {
      clearTimeout(categoryHoverTimeoutRef.current[category]);
      delete categoryHoverTimeoutRef.current[category];
    }
    setExpandedCategory(category);
  };

  const handleCategoryMouseLeave = (category: string) => {
    // Délai avant de fermer la catégorie
    categoryHoverTimeoutRef.current[category] = setTimeout(() => {
      setExpandedCategory(null);
      delete categoryHoverTimeoutRef.current[category];
    }, 150);
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
          ref={dropdownContentRef}
          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-[500px] overflow-y-auto"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
          onWheel={handleWheel}
          style={{ 
            overscrollBehavior: 'contain',
            overscrollBehaviorY: 'contain',
            overscrollBehaviorX: 'none',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-y'
          }}
        >
          <div className="p-2">
            {Object.entries(groupedServices).map(([category, categoryServices]) => {
              const isExpanded = expandedCategory === category;
              return (
                <div 
                  key={category} 
                  className="mb-1 last:mb-0 relative"
                  onMouseEnter={() => handleCategoryMouseEnter(category)}
                  onMouseLeave={() => handleCategoryMouseLeave(category)}
                >
                  <div className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-150 group cursor-pointer">
                    <span>{category}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-gray-500 group-hover:text-foundation-bluenormal transition-colors" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-foundation-bluenormal transition-colors" />
                    )}
                  </div>
                  {isExpanded && (
                    <div className="ml-2 mt-1 space-y-0.5 border-l-2 border-gray-100 pl-2 animate-in fade-in slide-in-from-top-1 duration-200">
                      {categoryServices.map((service) => (
                        <Link
                          key={service.title}
                          to={service.route}
                          className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-foundation-bluenormal rounded-md transition-colors duration-150"
                          onClick={handleServiceClick}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
