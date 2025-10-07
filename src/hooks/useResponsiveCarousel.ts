import { useState, useEffect } from "react";
import { useMediaQuery } from "./useMediaQuery";

interface UseResponsiveCarouselProps {
  totalItems: number;
}

interface UseResponsiveCarouselReturn {
  currentIndex: number;
  itemsPerView: number;
  totalPages: number;
  canGoNext: boolean;
  canGoPrev: boolean;
  goToNext: () => void;
  goToPrev: () => void;
  goToPage: (page: number) => void;
  getVisibleItems: () => number[];
}

export const useResponsiveCarousel = ({
  totalItems,
}: UseResponsiveCarouselProps): UseResponsiveCarouselReturn => {
  const is2xl = useMediaQuery("(min-width: 1536px)");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isMd = useMediaQuery("(min-width: 768px)");

  // Calcul du nombre d'éléments par vue selon le breakpoint
  const itemsPerView = is2xl ? totalItems : isLg ? 3 : isMd ? 2 : 1;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerView));
  const maxIndex = Math.max(0, totalPages - 1);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Recaler l'index si le viewport change
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const goToNext = () => {
    if (canGoNext) setCurrentIndex(currentIndex + 1);
  };

  const goToPrev = () => {
    if (canGoPrev) setCurrentIndex(currentIndex - 1);
  };

  const goToPage = (page: number) => {
    if (page >= 0 && page <= maxIndex) setCurrentIndex(page);
  };

  const getVisibleItems = () => {
    const startIndex = currentIndex * itemsPerView;
    const endIndex = Math.min(startIndex + itemsPerView, totalItems);
    return Array.from({ length: endIndex - startIndex }, (_, i) => startIndex + i);
  };

  return {
    currentIndex,
    itemsPerView,
    totalPages,
    canGoNext,
    canGoPrev,
    goToNext,
    goToPrev,
    goToPage,
    getVisibleItems,
  };
};
