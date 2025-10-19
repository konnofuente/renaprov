export interface Product {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  productType: 'renaprov' | 'coneexxe';
  brand: string;
}

export interface ProductCategory {
  title: string;
  description: string;
  products: Product[];
  productType: 'renaprov' | 'coneexxe';
  brand: string;
}

export const productCategories: ProductCategory[] = [
  // RENAPROV PRODUCTS
  {
    title: "Comptes Bancaires",
    description: "Gérez vos finances quotidiennes et épargnez pour vos projets avec nos comptes adaptés à tous vos besoins.",
    productType: 'renaprov',
    brand: 'RENAPROV',
    products: [
      {
        name: "Compte épargne individuel",
        description: "Épargnez pour vos projets personnels avec des taux attractifs et une gestion simplifiée.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "Compte épargne individuel RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "Compte épargne personne morale",
        description: "Épargne pour les entreprises et organisations avec des avantages dédiés.",
        imageSrc: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
        imageAlt: "Compte épargne entreprise RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "Compte courant individuel",
        description: "Gérez vos finances quotidiennes en toute simplicité avec des services complets.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "Compte courant individuel RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "Compte courant personne morale",
        description: "Compte professionnel pour entreprises avec des services bancaires complets.",
        imageSrc: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
        imageAlt: "Compte courant entreprise RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "Compte courant association",
        description: "Compte pour associations et ONG avec des conditions préférentielles.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "Compte courant association RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      }
    ]
  },
  {
    title: "Services Spécialisés",
    description: "Des comptes et services dédiés aux différents profils avec des avantages spécifiques et des conditions adaptées.",
    productType: 'renaprov',
    brand: 'RENAPROV',
    products: [
      {
        name: "Compte salarié",
        description: "Compte dédié aux employés avec des avantages et des services privilégiés.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "Compte salarié RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "Compte privé",
        description: "Compte privé avec avantages exclusifs et services personnalisés.",
        imageSrc: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
        imageAlt: "Compte privé RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "Compte public",
        description: "Compte pour les fonctionnaires avec des conditions spéciales.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "Compte public RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "Compte pensionné",
        description: "Compte pour les retraités avec des avantages dédiés et des services adaptés.",
        imageSrc: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
        imageAlt: "Compte pensionné RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "SPMC",
        description: "Système de Paiement Mobile Camerounais pour des transactions rapides et sécurisées.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "SPMC RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "Bicard",
        description: "Carte de paiement multi-services pour tous vos achats et retraits.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "Bicard RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      }
    ]
  },
  {
    title: "ORA - Objectif Réalisation d'Ambitions",
    description: "Des produits d'épargne spécialisés pour concrétiser vos projets de vie les plus importants.",
    productType: 'renaprov',
    brand: 'RENAPROV',
    products: [
      {
        name: "ORA Foncier",
        description: "Plan d'épargne permettant au client de constituer un fond qui permet au client d'acquérir un terrain viabilisé, sécurisé, avec eau et électricité, assorti d'un titre foncier à moindre coût.",
        imageSrc: "/ORA froncier.jpeg",
        imageAlt: "ORA Foncier RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "ORA Investissement",
        description: "Plan d'épargne permettant au client de constituer un fond pour promouvoir son investissement et réaliser son projet.",
        imageSrc: "/ORA.png",
        imageAlt: "ORA Investissement RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "ORA Prévoyance",
        description: "Plan d'épargne permettant au client de constituer un fond afin de prévenir les évènements heureux ou malheureux.",
        imageSrc: "/ORA provayance.jpeg",
        imageAlt: "ORA Prévoyance RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "ORA Scolaire",
        description: "Plan d'épargne permettant au client de constituer un fond à partir de 350 FCFA dans le but de solutionner les problèmes liés à la rentrée scolaire.",
        imageSrc: "/ORA School.jpeg",
        imageAlt: "ORA Scolaire RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "ORA Académique",
        description: "Plan d'épargne permettant au client de constituer un fond à partir de 1000 FCFA pour assurer les frais de scolarité pour la rentrée académique au sein de la filiale académique du groupe IUB (Institut Universitaire BISSAÏ).",
        imageSrc: "/ORA.png",
        imageAlt: "ORA Académique RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "ORA Équipement",
        description: "Plan d'épargne permettant au client de constituer un fond pour acquisition des équipements mobiliers, informatiques, électroniques, électroménager, etc.",
        imageSrc: "/ORA equipement.jpeg",
        imageAlt: "ORA Équipement RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "ORA Islamique",
        description: "Plan d'épargne permettant au client de constituer une épargne non rémunérée.",
        imageSrc: "/ORA.png",
        imageAlt: "ORA Islamique RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      },
      {
        name: "ORA Santé",
        description: "Plan d'épargne permettant de bénéficier à partir de 1000 fcfa/jour d'une couverture sanitaire au Complexe Hospitalier La MAMU.",
        imageSrc: "/ORA.png",
        imageAlt: "ORA Santé RENAPROV",
        productType: 'renaprov',
        brand: 'RENAPROV'
      }
    ]
  }
];

// Filter types
export type ProductFilter = 'all' | 'renaprov' | 'connexes';

// Helper function to filter products by type
export const filterProductsByType = (categories: ProductCategory[], filter: ProductFilter): ProductCategory[] => {
  if (filter === 'all') {
    return categories;
  }
  
  if (filter === 'renaprov') {
    return categories.filter(category => category.productType === 'renaprov');
  }
  
  // For 'connexes', we'll return an empty array since we don't have connexes products in this data
  // The connexes section is handled separately in the ConnexProductsSection component
  return [];
};