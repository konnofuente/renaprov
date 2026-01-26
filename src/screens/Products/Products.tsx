import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { CallToActionSubsection } from "../Accueil/sections/CallToActionSubsection";
import { HeroSection } from "./sections/HeroSection";
import { FeatureCardsSection } from "./sections/FeatureCardsSection";
import { ReusableSliderSection } from "./sections/ReusableSliderSection";
import { ProductFilter } from "./components/ProductFilter";
import {
  productCategoriesStructure,
  Product,
  ProductCategory,
  ProductFilter as FilterType,
  filterProductsByType,
} from "./data/productsData";
import { TestimonialSection } from "../../components/TestimonialSection";
import { ConnexProductsSection } from "../../components/ConnexProductsSection";

const SUPPORTED_LANGS = ["fr", "en"] as const;
const normalizeLang = (l: string | undefined): "fr" | "en" => {
  const base = (l || "fr").split("-")[0].toLowerCase();
  return SUPPORTED_LANGS.includes(base as "fr" | "en") ? (base as "fr" | "en") : "fr";
};

export const Products = (): JSX.Element => {
  const { t } = useTranslation("products");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams<{ lang?: string }>();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentLang = SUPPORTED_LANGS.includes(pathSegments[0] as "fr" | "en")
    ? (pathSegments[0] as "fr" | "en")
    : normalizeLang(lang);

  const getLocalizedPath = (path: string) => {
    return `/${currentLang}${path === "/" ? "" : path}`;
  };

  // Create a map of categoryKey to section ID for easy lookup
  const categoryKeyToSectionId: Record<string, string> = {
    bankAccounts: "bank-accounts",
    specialized: "specialised-services",
    ora: "ora-section",
  };

  const productCategories = useMemo<ProductCategory[]>(() => {
    return productCategoriesStructure.map((cat) => ({
      title: t(`categories.${cat.categoryKey}.title`),
      description: t(`categories.${cat.categoryKey}.description`),
      productType: cat.productType,
      brand: cat.brand,
      products: cat.products.map((p) => ({
        name: t(`categories.${cat.categoryKey}.products.${p.key}.name`),
        description: t(`categories.${cat.categoryKey}.products.${p.key}.description`),
        imageAlt: t(`categories.${cat.categoryKey}.products.${p.key}.imageAlt`),
        imageSrc: p.imageSrc,
        productType: cat.productType,
        brand: cat.brand,
        route: p.route,
        key: p.key,
      })) as Product[],
    }));
  }, [t]);

  // Create a map from category title to categoryKey for filtered categories
  const titleToCategoryKey = useMemo(() => {
    const map: Record<string, string> = {};
    productCategoriesStructure.forEach((cat, index) => {
      const category = productCategories[index];
      if (category) {
        map[category.title] = cat.categoryKey;
      }
    });
    return map;
  }, [productCategories]);

  const handleProductClick = (product: Product) => {
    if (product.route) {
      navigate(getLocalizedPath(product.route));
    } else {
      alert(t("alerts.productNotFound"));
    }
  };

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  const filteredCategories = filterProductsByType(productCategories, activeFilter);

  // Handle hash navigation and scroll to section
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && (hash === "bank-accounts" || hash === "specialised-services" || hash === "ora-section")) {
      // If we have a hash for a main section and filter is not "all", set it to "all" to show all sections
      if (activeFilter !== "all") {
        setActiveFilter("all");
        // Wait for filter change to render, then scroll
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 100; // Offset for fixed header if any
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 600);
      } else {
        // Filter is already "all", just scroll
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 100; // Offset for fixed header if any
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 300);
      }
    }
  }, [location.hash, activeFilter]);

  // Helper function to get section ID from category key
  const getSectionId = (categoryKey: string): string => {
    return categoryKeyToSectionId[categoryKey] || categoryKey;
  };

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
      />
      <main className="flex flex-col w-full bg-[#ffffff]">
        <HeroSection />
        <FeatureCardsSection />

        <section className="w-full bg-gray-50 py-8 sm:py-12">
          <ProductFilter
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </section>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeFilter === "all" && (
              <>
                {productCategories.map((category, index) => {
                  const categoryKey = productCategoriesStructure[index]?.categoryKey || "";
                  const sectionId = getSectionId(categoryKey);
                  return (
                    <div key={`${category.productType}-${index}`} id={sectionId}>
                      <ReusableSliderSection
                        title={category.title}
                        description={category.description}
                        products={category.products}
                        onProductClick={(product) => handleProductClick(product)}
                        productType={category.productType}
                        brand={category.brand}
                      />
                    </div>
                  );
                })}
                <ConnexProductsSection />
              </>
            )}

            {activeFilter === "renaprov" &&
              filteredCategories.map((category, index) => {
                const categoryKey = titleToCategoryKey[category.title] || "";
                const sectionId = getSectionId(categoryKey);
                return (
                  <div key={`${category.productType}-${index}`} id={sectionId}>
                    <ReusableSliderSection
                      title={category.title}
                      description={category.description}
                      products={category.products}
                      onProductClick={(product) => handleProductClick(product)}
                      productType={category.productType}
                      brand={category.brand}
                    />
                  </div>
                );
              })}

            {activeFilter === "connexes" && <ConnexProductsSection />}
          </motion.div>
        </AnimatePresence>
        <TestimonialSection />
        <CallToActionSubsection />
      </main>
    </>
  );
};
