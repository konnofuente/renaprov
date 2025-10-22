import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { 
  GraduationCap, 
  Gift, 
  Calendar,
  Users,
  ArrowRight,
  Stethoscope
} from "lucide-react";

const flashNews = [
  {
    id: 1,
    title: "LE COMPLEXE HOSPITALIER LA MAMU, DÉSORMAIS OPÉRATIONNEL",
    date: "27 Mars 2024",
    category: "Santé",
    icon: Stethoscope,
    image: "/logo Complexe Hospitalier la MAMU.png",
    description: "Au cœur du paysage médical camerounais émerge une institution remarquable, le Complexe Hospitalier la MAMU. Le nom 'MAMU' porte en lui une signification profonde, évoquant bien plus qu'un simple acronyme.",
    highlights: [
      "Inauguration officielle le 27 mars 2024",
      "Plateau technique de pointe avec IRM, scanners, mammographes",
      "Mosquée inaugurée le 7 avril 2024 pour l'harmonie inter-religieuse",
      "Soins de qualité à des tarifs accessibles"
    ],
    featured: true
  },
  {
    id: 2,
    title: "TOMBOLA MASO ACTE 4, C'EST FAIT !",
    date: "13 Juillet 2024",
    category: "MASO",
    icon: Gift,
    image: "/MASO.png",
    description: "Le Palais Polyvalent des Sports de Yaoundé a accueilli la très attendue et grandiose cérémonie de tirage au sort de la TOMBOLA MASO ACTE 4.",
    highlights: [
      "Plus de 6 000 mutualistes physiquement présents",
      "Prix incroyables : maisons, taxis, équipements, financements",
      "Transparence absolue avec publication des résultats",
      "Acte 5 annoncé avec célébrations sur plusieurs jours"
    ],
    featured: true
  },
  {
    id: 3,
    title: "L'INSTITUT UNIVERSITAIRE BISSAÏ OUVRE SES PORTES",
    date: "2024",
    category: "Éducation",
    icon: GraduationCap,
    image: "/logo Institut Universitaire Bissai.png",
    description: "Un pas vers l'excellence académique. L'inauguration de ce nouvel institut supérieur marque une étape significative dans la croissance du Groupe RENAPROV.",
    highlights: [
      "Situé au quartier 2 chevaux à Yaoundé",
      "Formations BTS, HND, LMD",
      "Salles climatisées et équipements modernes",
      "7 filières : Gestion, Médico-sanitaire, Communication, etc."
    ],
    featured: false
  }
];

export const FlashNewsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 md:py-24 lg:py-32">
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
            FLASH RENEWS !
          </h2>
          <div className="w-24 h-1 bg-foundation-bluenormal mx-auto rounded-full mb-6"></div>
          <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            Les actualités importantes qui marquent l'année 2024 pour RENAPROV FINANCE S.A
          </p>
        </motion.div>

        {/* Featured News */}
        <div className="space-y-8">
          {flashNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 ${
                news.featured ? 'bg-gradient-to-br from-white to-blue-50/30' : 'bg-white'
              }`}>
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section - Optimisée */}
                  <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full rounded-lg h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/hero1.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-foundation-bluenormal text-white px-3 py-1.5 text-sm font-semibold shadow-lg">
                        <news.icon className="w-4 h-4 mr-2" />
                        {news.category}
                      </Badge>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/95 text-gray-700 px-3 py-1.5 text-sm shadow-lg">
                        <Calendar className="w-4 h-4 mr-2" />
                        {news.date}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section - Optimisée */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-lg sm:text-xl md:text-2xl leading-tight">
                        {news.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-700 text-sm sm:text-base leading-relaxed">
                        {news.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-3">
                        <h4 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluenormal text-base">
                          Points clés :
                        </h4>
                        <ul className="space-y-2">
                          {news.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-foundation-bluenormal rounded-full mt-2 flex-shrink-0"></div>
                              <span className="[font-family:'Roboto',Helvetica] font-normal text-gray-600 text-xs sm:text-sm">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button - Style cohérent */}
                      <div className="pt-4">
                        <Button 
                          className="bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg text-sm"
                        >
                          <span>En savoir plus</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-foundation-bluenormal to-foundation-bluedarker rounded-2xl p-6 sm:p-8 md:p-10">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-xl sm:text-2xl md:text-3xl mb-4">
              Restez informés de nos actualités
            </h3>
            <p className="[font-family:'Roboto',Helvetica] font-normal text-white/90 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
              Suivez toutes nos actualités et ne manquez aucune information importante sur RENAPROV FINANCE S.A
            </p>
            <Button 
              className="bg-white text-foundation-bluenormal hover:bg-white/95 font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span>Rejoindre notre communauté</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
