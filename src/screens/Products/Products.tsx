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

export const Products = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const handleProductClick = (product: Product) => {
    // Handle product click - could open modal, navigate to detail page, etc.
    console.log(`Clicked on product: ${product.name} (${product.brand})`);
    // For now, just log. Later we can implement modal or navigation
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
                    onProductClick={handleProductClick}
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
                onProductClick={handleProductClick}
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
