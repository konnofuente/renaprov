import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ProductFilter as FilterType } from "../data/productsData";

interface ProductFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const { t } = useTranslation("products");

  const filters = [
    { key: "all" as FilterType, labelKey: "filters.all", color: "bg-gray-600" },
    { key: "renaprov" as FilterType, labelKey: "filters.renaprov", color: "bg-[#00acee]" },
    { key: "connexes" as FilterType, labelKey: "filters.connexes", color: "bg-[#8b5cf6]" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-0">
          {t("filters.filterByBrand")}
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => onFilterChange(filter.key)}
              className={`
                relative px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base
                transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
                ${
                  activeFilter === filter.key
                    ? `${filter.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {t(filter.labelKey)}

              {/* Active indicator */}
              {activeFilter === filter.key && (
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Filter description */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-sm text-gray-500">
          {activeFilter === "all" && t("filters.filterDescAll")}
          {activeFilter === "renaprov" && t("filters.filterDescRenaprov")}
          {activeFilter === "connexes" && t("filters.filterDescConnexes")}
        </p>
      </motion.div>
    </div>
  );
};
