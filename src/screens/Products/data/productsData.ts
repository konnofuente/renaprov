export interface Product {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  productType: "renaprov" | "coneexxe";
  brand: string;
  route?: string;
  key?: string;
}

export interface ProductCategory {
  title: string;
  description: string;
  products: Product[];
  productType: "renaprov" | "coneexxe";
  brand: string;
}

export type ProductFilter = "all" | "renaprov" | "connexes";

type CategoryKey = "bankAccounts" | "specialized" | "ora";
type ProductEntry = { key: string; route: string; imageSrc: string };

const productCategoriesStructure: {
  categoryKey: CategoryKey;
  productType: "renaprov" | "coneexxe";
  brand: string;
  products: ProductEntry[];
}[] = [
  {
    categoryKey: "bankAccounts",
    productType: "renaprov",
    brand: "RENAPROV",
    products: [
      { key: "cei", route: "/service/compte-epargne-individuel", imageSrc: "/service/Compte epargne individuel.jpg" },
      { key: "cee", route: "/service/compte-epargne-entreprise", imageSrc: "/service/Compte epargne entreprise.jpg" },
      { key: "cci", route: "/service/compte-courant-individuel", imageSrc: "/service/Compte courant individuel.jpg" },
      { key: "cce", route: "/service/compte-courant-entreprise", imageSrc: "/service/Compte courant entreprise.jpg" },
      { key: "cca", route: "/service/compte-courant-association", imageSrc: "/service/Compte courant association.jpg" },
    ],
  },
  {
    categoryKey: "specialized",
    productType: "renaprov",
    brand: "RENAPROV",
    products: [
      { key: "cs", route: "/service/compte-cheque-salaire-pension", imageSrc: "/service/compte salaire.jpg" },
      { key: "cp", route: "/service/compte-prive", imageSrc: "/service/Compte privé.jpg" },
      { key: "cpub", route: "/service/compte-public", imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png" },
      { key: "cpen", route: "/service/compte-pensionne", imageSrc: "/service/compte pensionne.jpg" },
      { key: "spmc", route: "/service/spmc", imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png" },
      { key: "bicard", route: "/service/bicard", imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png" },
    ],
  },
  {
    categoryKey: "ora",
    productType: "renaprov",
    brand: "RENAPROV",
    products: [
      { key: "oraFoncier", route: "/service/ora-foncier", imageSrc: "/ORA froncier.jpeg" },
      { key: "oraInvestissement", route: "/service/ora-investissement", imageSrc: "/ORA.png" },
      { key: "oraPrevoyance", route: "/service/ora-prevoyance", imageSrc: "/ORA provayance.jpeg" },
      { key: "oraScolaire", route: "/service/ora-scolaire", imageSrc: "/ORA School.jpeg" },
      { key: "oraAcademique", route: "/service/ora-academique", imageSrc: "/ORA.png" },
      { key: "oraEquipement", route: "/service/ora-equipement", imageSrc: "/ORA equipement.jpeg" },
      { key: "oraIslamique", route: "/service/ora-islamique", imageSrc: "/ORA.png" },
      { key: "oraSante", route: "/service/ora-sante", imageSrc: "/ORA.png" },
    ],
  },
];

export { productCategoriesStructure };

export const filterProductsByType = (
  categories: ProductCategory[],
  filter: ProductFilter
): ProductCategory[] => {
  if (filter === "all") return categories;
  if (filter === "renaprov") return categories.filter((c) => c.productType === "renaprov");
  return [];
};
