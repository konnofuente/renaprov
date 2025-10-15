import { SEO } from "../../components/SEO";
import { FooterSubsection } from "../Accueil/sections/FooterSubsection";
import { CallToActionSubsection } from "../Accueil/sections/CallToActionSubsection";
import { HeroSection } from "./sections/HeroSection";
import { FeatureCardsSection } from "./sections/FeatureCardsSection";
import { ReusableSliderSection } from "./sections/ReusableSliderSection";
import { productCategories, Product } from "./data/productsData";
import { TestimonialSection } from "../../components/TestimonialSection";

export const Products = (): JSX.Element => {
  const handleProductClick = (product: Product) => {
    // Handle product click - could open modal, navigate to detail page, etc.
    console.log(`Clicked on product: ${product.name}`);
    // For now, just log. Later we can implement modal or navigation
  };

  return (
    <>
      <SEO
        title="Nos Produits - RENAPROV | Tous nos Services Financiers"
        description="Découvrez tous nos produits financiers : comptes épargne, comptes courant, ORA, SPMC, Bicard. Services financiers complets pour particuliers et entreprises au Cameroun."
        keywords="produits financiers, comptes épargne, comptes courant, ORA, SPMC, Bicard, microfinance, RENAPROV, Cameroun, services bancaires"
      />
      <main className="flex flex-col w-full bg-[#ffffff]">
        <HeroSection />
        <FeatureCardsSection />
        
        {/* Product Categories Sections */}
        {productCategories.map((category, index) => (
          <ReusableSliderSection
            key={index}
            title={category.title}
            description={category.description}
            products={category.products}
            onProductClick={handleProductClick}
          />
        ))}
        
        <TestimonialSection />
        <CallToActionSubsection />
        <FooterSubsection />
      </main>
    </>
  );
};
