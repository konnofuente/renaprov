import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Building2,
  Heart,
  ArrowRight,
  Star,
  Award,
  Home,
  Car
} from "lucide-react";

const actualites = [
  {
    id: 1,
    title: "BOUMNYEBEL & NGOUSSO désormais couverts",
    date: "2023-2024",
    category: "Expansion",
    icon: MapPin,
    image: "/hero1.png",
    description: "Au cœur de notre mission se trouve la volonté de transformer des vies en facilitant l'accès équitable aux services financiers. L'ouverture de ces nouvelles agences s'inscrit dans notre vision d'étendre notre portée.",
    highlights: [
      "Agence NGOUSSO ouverte le 17 Avril 2023",
      "Agence Boumnyebel ouverte le 03 Novembre 2023",
      "Emplacement stratégique sur la route Yaoundé-Edea",
      "Service de proximité pour les communautés locales"
    ],
    featured: true
  },
  {
    id: 2,
    title: "FEMME À L'HONNEUR - Journée Internationale des droits de la femme",
    date: "8 Mars 2024",
    category: "Événement",
    icon: Heart,
    image: "/hero1.png",
    description: "RENAPROV Finance S.A. célèbre la 39ème édition de la Journée Internationale des droits de la femme avec éclat. Sous le thème 'Investir en faveur des femmes : accélérer le rythme'.",
    highlights: [
      "Match de Gala : RENAPROV 5-1 contre CANAL 2",
      "Table Ronde & Journée Culturelle",
      "Concours culinaire inter-agence",
      "Descente au Marché Nsam pour l'inclusion financière"
    ],
    featured: false
  },
  {
    id: 3,
    title: "LE TRAIN DE LA SOLIDARITÉ EN MARCHE DEPUIS 2020",
    date: "2023-2024",
    category: "MASO",
    icon: Home,
    image: "/hero1.png",
    description: "Les festivités commencent cette année avec la remise des clés aux mutualistes bénéficiaires des Villas. Après le tour du propriétaire, les clés des deux villas ultra-modernes ont été remises solennellement.",
    highlights: [
      "Remise des clés par le gouverneur de la région du centre",
      "Deux villas ultra-modernes remises aux bénéficiaires",
      "Constituées d'un grand salon, 3 chambres, 2 douches",
      "Cuisine moderne et barrière de sécurité"
    ],
    featured: true
  },
  {
    id: 4,
    title: "TOUJOURS PLUS PRÈS DE NOS PARTENAIRES - Canal 2",
    date: "2024",
    category: "Partenariat",
    icon: Star,
    image: "/hero1.png",
    description: "Le Groupe RENAPROV a récemment scellé un partenariat stratégique avec la chaîne de télévision Canal2. Cette collaboration promet d'apporter une nouvelle dimension à la visibilité de RENAPROV.",
    highlights: [
      "Partenariat stratégique avec Canal2 Internationale",
      "Accompagnement médiatique de premier plan",
      "Match de gala organisé entre les équipes",
      "Présence aux Canal 2'or pour récompenser les talents"
    ],
    featured: false
  }
];

export const ActualitesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-4">
            ACTUALITÉS
          </h2>
          <div className="w-24 h-1 bg-foundation-bluenormal mx-auto rounded-full mb-6"></div>
          <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            Découvrez les dernières nouvelles et événements marquants de RENAPROV FINANCE S.A
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {actualites.map((actualite, index) => (
            <motion.div
              key={actualite.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className={`h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                actualite.featured ? 'border-2 border-foundation-bluenormal/20' : 'border border-gray-200'
              }`}>
                {/* Image Section */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={actualite.image}
                    alt={actualite.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/hero1.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-foundation-bluenormal text-white px-3 py-1 text-sm font-semibold">
                      <actualite.icon className="w-4 h-4 mr-2" />
                      {actualite.category}
                    </Badge>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700 px-3 py-1 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {actualite.date}
                    </Badge>
                  </div>

                  {/* Featured Badge */}
                  {actualite.featured && (
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-yellow-500 text-white px-3 py-1 text-sm font-semibold">
                        <Star className="w-4 h-4 mr-2" />
                        À la une
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <CardHeader className="p-6">
                  <CardTitle className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-lg sm:text-xl leading-tight line-clamp-2">
                    {actualite.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-6 pt-0 space-y-4">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {actualite.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {actualite.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-foundation-bluenormal rounded-full mt-2 flex-shrink-0"></div>
                        <span className="[font-family:'Roboto',Helvetica] font-normal text-gray-600 text-xs sm:text-sm">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-foundation-bluenormal text-foundation-bluenormal hover:bg-foundation-bluenormal hover:text-white transition-all duration-200"
                    >
                      <span>Lire la suite</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Success Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-foundation-bluenormal to-foundation-bluedarker rounded-2xl p-8 sm:p-12 md:p-16"
        >
          <div className="text-center mb-12">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl mb-4">
              Témoignages de réussite
            </h3>
            <p className="[font-family:'Roboto',Helvetica] font-normal text-white/90 text-lg sm:text-xl max-w-3xl mx-auto">
              Découvrez comment RENAPROV transforme des vies et réalise des rêves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Success Story 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-lg">
                    EBODE NTSAMA Joséphine
                  </h4>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-white/80 text-sm">
                    Bénéficiaire Villa MASO
                  </p>
                </div>
              </div>
              <p className="[font-family:'Roboto',Helvetica] font-normal text-white/90 text-sm sm:text-base italic">
                "Je suis très émue car jusqu'ici je pensais rêver. Je n'y croyais pas au départ. La MASO a fait de moi propriétaire d'une aussi belle et grande maison merci MASO merci RENAPROV..."
              </p>
            </div>

            {/* Success Story 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-lg">
                    NANA NGONGANG Rosa
                  </h4>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-white/80 text-sm">
                    Bénéficiaire Villa MASO - 32 ans
                  </p>
                </div>
              </div>
              <p className="[font-family:'Roboto',Helvetica] font-normal text-white/90 text-sm sm:text-base italic">
                "Mon rêve est réalisé. La MASO n'est pas du vol. Vous qui doutez encore venez-vous inscrire, vous serez aussi propriétaire."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
