import React from "react";
import { ReusableSliderSection } from "../../../Products/sections/ReusableSliderSection";

const prizes = [
  {
    name: "VÉHICULES PERSONNELS",
    description: "Gagnez un véhicule personnel d'une valeur de 2,000,000 XAF",
    imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
    imageAlt: "Véhicules personnels MASO"
  },
  {
    name: "TAXI",
    description: "Gagnez un véhicule taxi d'une valeur de 2,000,000 XAF",
    imageSrc: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
    imageAlt: "Taxi MASO"
  },
  {
    name: "TRICYCLE",
    description: "Gagnez un tricycle d'une valeur de 1,500,000 XAF",
    imageSrc: "/De%20locataire%20à%20propriétaire%20grâce%20à%20RENAPROV.png",
    imageAlt: "Tricycle MASO"
  },
  {
    name: "VILLA",
    description: "Gagnez une villa d'une valeur de 1,000,000 XAF",
    imageSrc: "/Un%20compte%20simple%20et%20sécurisé,%20accessible%20à%20tous.png",
    imageAlt: "Villa MASO"
  },
  {
    name: "VILLA",
    description: "Gagnez une villa d'une valeur de 1,000,000 XAF",
    imageSrc: "/Faites%20grandir%20vos%20projets,%20nous%20finançons%20vos%20ambitions.png",
    imageAlt: "Villa MASO"
  }
];

export const MasoPrizesSection = (): JSX.Element => {
  const handlePrizeClick = (prize: any) => {
    console.log(`Clicked on prize: ${prize.name}`);
  };

  return (
    <ReusableSliderSection
      title="Avec la MASO Gagnez votre prochain"
      description="Participez à nos tirages au sort et gagnez des véhicules, des villas et bien plus encore. La MASO vous offre la chance de réaliser vos rêves tout en bénéficiant de nos services de solidarité."
      products={prizes}
      onProductClick={handlePrizeClick}
    />
  );
};
