export interface Product {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProductCategory {
  title: string;
  description: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    title: "Comptes Épargne",
    description: "Épargnez pour vos projets personnels et professionnels avec des taux attractifs et des conditions flexibles.",
    products: [
      {
        name: "Compte épargne individuel",
        description: "Épargnez pour vos projets personnels avec des taux attractifs et une gestion simplifiée.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "Compte épargne individuel RENAPROV"
      },
      {
        name: "Compte épargne personne morale",
        description: "Épargne pour les entreprises et organisations avec des avantages dédiés.",
        imageSrc: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
        imageAlt: "Compte épargne entreprise RENAPROV"
      }
    ]
  },
  {
    title: "Comptes Courant",
    description: "Gérez vos finances quotidiennes en toute simplicité avec nos comptes courants adaptés à vos besoins.",
    products: [
      {
        name: "Compte courant individuel",
        description: "Gérez vos finances quotidiennes en toute simplicité avec des services complets.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "Compte courant individuel RENAPROV"
      },
      {
        name: "Compte courant personne morale",
        description: "Compte professionnel pour entreprises avec des services bancaires complets.",
        imageSrc: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
        imageAlt: "Compte courant entreprise RENAPROV"
      },
      {
        name: "Compte courant association",
        description: "Compte pour associations et ONG avec des conditions préférentielles.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "Compte courant association RENAPROV"
      }
    ]
  },
  {
    title: "Comptes Spéciaux",
    description: "Des comptes dédiés aux différents profils avec des avantages spécifiques et des conditions adaptées.",
    products: [
      {
        name: "Compte salarié",
        description: "Compte dédié aux employés avec des avantages et des services privilégiés.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "Compte salarié RENAPROV"
      },
      {
        name: "Compte privé",
        description: "Compte privé avec avantages exclusifs et services personnalisés.",
        imageSrc: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
        imageAlt: "Compte privé RENAPROV"
      },
      {
        name: "Compte public",
        description: "Compte pour les fonctionnaires avec des conditions spéciales.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "Compte public RENAPROV"
      },
      {
        name: "Compte pensionné",
        description: "Compte pour les retraités avec des avantages dédiés et des services adaptés.",
        imageSrc: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
        imageAlt: "Compte pensionné RENAPROV"
      }
    ]
  },
  {
    title: "ORA - Objectif Réalisation d'Ambitions",
    description: "Des produits d'épargne spécialisés pour concrétiser vos projets de vie les plus importants.",
    products: [
      {
        name: "ORA Foncier",
        description: "Plan d'épargne permettant au client de constituer un fond qui permet au client d'acquérir un terrain viabilisé, sécurisé, avec eau et électricité, assorti d'un titre foncier à moindre coût.",
        imageSrc: "/ORA froncier.jpeg",
        imageAlt: "ORA Foncier RENAPROV"
      },
      {
        name: "ORA Investissement",
        description: "Plan d'épargne permettant au client de constituer un fond pour promouvoir son investissement et réaliser son projet.",
        imageSrc: "/ORA.png",
        imageAlt: "ORA Investissement RENAPROV"
      },
      {
        name: "ORA Prévoyance",
        description: "Plan d'épargne permettant au client de constituer un fond afin de prévenir les évènements heureux ou malheureux.",
        imageSrc: "/ORA provayance.jpeg",
        imageAlt: "ORA Prévoyance RENAPROV"
      },
      {
        name: "ORA Scolaire",
        description: "Plan d'épargne permettant au client de constituer un fond à partir de 350 FCFA dans le but de solutionner les problèmes liés à la rentrée scolaire.",
        imageSrc: "/ORA School.jpeg",
        imageAlt: "ORA Scolaire RENAPROV"
      },
      {
        name: "ORA Académique",
        description: "Plan d'épargne permettant au client de constituer un fond à partir de 1000 FCFA pour assurer les frais de scolarité pour la rentrée académique au sein de la filiale académique du groupe IUB (Institut Universitaire BISSAÏ).",
        imageSrc: "/ORA.png",
        imageAlt: "ORA Académique RENAPROV"
      },
      {
        name: "ORA Équipement",
        description: "Plan d'épargne permettant au client de constituer un fond pour acquisition des équipements mobiliers, informatiques, électroniques, électroménager, etc.",
        imageSrc: "/ORA equipement.jpeg",
        imageAlt: "ORA Équipement RENAPROV"
      },
      {
        name: "ORA Islamique",
        description: "Plan d'épargne permettant au client de constituer une épargne non rémunérée.",
        imageSrc: "/ORA.png",
        imageAlt: "ORA Islamique RENAPROV"
      },
      {
        name: "ORA Santé",
        description: "Plan d'épargne permettant de bénéficier à partir de 1000 fcfa/jour d'une couverture sanitaire au Complexe Hospitalier La MAMU.",
        imageSrc: "/ORA.png",
        imageAlt: "ORA Santé RENAPROV"
      }
    ]
  },
  {
    title: "SPMC - Système de Paiement Mobile",
    description: "Le système de paiement mobile camerounais pour des transactions rapides et sécurisées.",
    products: [
      {
        name: "SPMC",
        description: "Système de Paiement Mobile Camerounais pour des transactions rapides et sécurisées.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "SPMC RENAPROV"
      }
    ]
  },
  {
    title: "Bicard",
    description: "La carte de paiement multi-services qui simplifie vos transactions quotidiennes.",
    products: [
      {
        name: "Bicard",
        description: "Carte de paiement multi-services pour tous vos achats et retraits.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "Bicard RENAPROV"
      }
    ]
  }
];
