import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "../../components/SEO";
import { CallToActionSubsection } from "../Accueil/sections/CallToActionSubsection";
import { HeroSection } from "./sections/HeroSection";
import { FeatureCardsSection } from "./sections/FeatureCardsSection";
import { ReusableSliderSection } from "./sections/ReusableSliderSection";
import { ProductFilter } from "./components/ProductFilter";
import { productCategories, Product, ProductFilter as FilterType, filterProductsByType } from "./data/productsData";
import { TestimonialSection } from "../../components/TestimonialSection";
import { ConnexProductsSection } from "../../components/ConnexProductsSection";
import { useNavigate } from "react-router-dom";

export const Products = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const navigate = useNavigate(); // Navigation hook

  const productShow = [
    {
      productName: 'Compte épargne individuel',
      productLink: '/service/compte-epargne-individuel',
    },
    {
      productName: 'Compte épargne personne morale',
      productLink: '/service/compte-epargne-entreprise',
    },
    {
      productName: 'Compte courant individuel',
      productLink: '/service/compte-courant-individuel',
    },
    {
      productName: 'Compte courant personne morale',
      productLink: '/service/compte-courant-entreprise',
    },
    {
      productName: 'Compte courant association',
      productLink: '/service/compte-courant-association',
    },
    {
      productName :'Compte salarié',
      productLink: '/service/compte-cheque-salaire-pension',
    },
    {
      productName: 'Compte privé',
      productLink: '/service/compte-prive',
    },
    {
      productName: 'Compte public',
      productLink: '/service/compte-public',
    },
    {
      productName: 'Compte pensionné',
      productLink: '/service/compte-pensionne',
    },
    {
      productName: 'SPMC',
      productLink: '/service/spmc',
    },
    {
      productName: 'Bicard',
      productLink: '/service/bicard',
    },
    {
      productName: 'ORA Foncier',
      productLink: '/service/ora-foncier',
    },
    {
      productName: 'ORA Investissement',
      productLink: '/service/ora-investissement',
    },
    {
      productName: 'ORA Prévoyance',
      productLink: '/service/ora-prevoyance',
    },
    {
      productName: 'ORA Scolaire',
      productLink: '/service/ora-scolaire',
    },
    {
      productName: 'ORA Académique',
      productLink: '/service/ora-academique',
    },
    {
      productName: 'ORA Équipement',
      productLink: '/service/ora-equipement',
    },
    {
      productName: 'ORA Islamique',
      productLink: '/service/ora-islamique',
    },
    {
      productName: 'ORA Santé',
      productLink: '/service/ora-sante',
    },
    {
      productName: 'MASO',
      productLink: '/maso',
    },
  ]

  const handleProductClick = (product: Product) => {
    // Handle product click - could open modal, navigate to detail page, etc.
    const productLink = productShow.find((p) => p.productName === product.name)?.productLink;
    if (productLink) {
      navigate(productLink);
    }
    else{
      alert('Produit non trouvé');
    }
  };

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  // Filter categories based on active filter
  const filteredCategories = filterProductsByType(productCategories, activeFilter);

  return (
    <>
      <SEO
        title="Nos Produits - RENAPROV | Services Financiers et Microfinance"
        description="Découvrez tous nos produits financiers RENAPROV : comptes épargne, comptes courant, produits ORA, SPMC, Bicard et bien plus encore."
        keywords="produits financiers, comptes épargne, ORA, SPMC, Bicard, microfinance, RENAPROV, Cameroun, services financiers"
      />
      <main className="flex flex-col w-full bg-[#ffffff]">
        <HeroSection />
        <FeatureCardsSection />
        
        {/* Product Filter */}
        <section className="w-full bg-gray-50 py-8 sm:py-12">
          <ProductFilter 
            activeFilter={activeFilter} 
            onFilterChange={handleFilterChange} 
          />
        </section>
        
        {/* Product Categories Sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeFilter === 'all' && (
              <>
                {productCategories.map((category, index) => (
                  <ReusableSliderSection
                    key={`${category.productType}-${index}`}
                    title={category.title}
                    description={category.description}
                    products={category.products}
                    onProductClick={(product) => handleProductClick(product as any)}
                    productType={category.productType}
                    brand={category.brand}
                  />
                ))}
                <ConnexProductsSection />
              </>
            )}
            
            {activeFilter === 'renaprov' && filteredCategories.map((category, index) => (
              <ReusableSliderSection
                key={`${category.productType}-${index}`}
                title={category.title}
                description={category.description}
                products={category.products}
                onProductClick={(product) => handleProductClick(product as any)}
                productType={category.productType}
                brand={category.brand}
              />
            ))}
            
            {activeFilter === 'connexes' && <ConnexProductsSection />}
          </motion.div>
        </AnimatePresence>
        <TestimonialSection />
        <CallToActionSubsection />
      </main>
    </>
  );
};
