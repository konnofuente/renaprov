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
        name: "ORA Académie",
        description: "Épargne pour les études supérieures et la formation professionnelle.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "ORA Académie RENAPROV"
      },
      {
        name: "ORA Scolaire",
        description: "Épargne pour l'éducation des enfants et les frais scolaires.",
        imageSrc: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
        imageAlt: "ORA Scolaire RENAPROV"
      },
      {
        name: "ORA Habitat",
        description: "Épargne pour l'achat de logement et les projets immobiliers.",
        imageSrc: "/De%20locataire%20à%20propriétaire%20grâce%20à%20RENAPROV.png",
        imageAlt: "ORA Habitat RENAPROV"
      },
      {
        name: "ORA Foncier",
        description: "Épargne pour l'achat de terrain et les investissements fonciers.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "ORA Foncier RENAPROV"
      },
      {
        name: "ORA Équipement",
        description: "Épargne pour l'achat d'équipements professionnels et personnels.",
        imageSrc: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
        imageAlt: "ORA Équipement RENAPROV"
      },
      {
        name: "ORA Prévoyance",
        description: "Épargne de précaution pour faire face aux imprévus de la vie.",
        imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
        imageAlt: "ORA Prévoyance RENAPROV"
      },
      {
        name: "ORA Islamique",
        description: "Épargne conforme à la charia pour les clients musulmans.",
        imageSrc: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
        imageAlt: "ORA Islamique RENAPROV"
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
