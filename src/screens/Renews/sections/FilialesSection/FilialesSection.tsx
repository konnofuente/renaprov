import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { 
  Radio, 
  Stethoscope, 
  Home, 
  GraduationCap,
  ArrowRight,
  Users,
  Heart,
  Star,
  Shield,
  TrendingUp
} from "lucide-react";

const filiales = [
  {
    id: 1,
    name: "ROYAL FM",
    tagline: "C'est notre radio, c'est votre radio, c'est La radio des auditeurs !",
    icon: Radio,
    image: "/royal.jpg",
    description: "ROYAL FM 88.4 est la voix du Groupe RENAPROV, diffusant des programmes de qualité qui informent, éduquent et divertissent les auditeurs camerounais.",
    services: [
      "Programmes d'information et d'actualité",
      "Émissions éducatives et culturelles",
      "Divertissement et musique",
      "Couverture des événements RENAPROV"
    ],
    featured: true
  },
  {
    id: 2,
    name: "COMPLEXE HOSPITALIER LA MAMU",
    tagline: "Se soigner au prix les plus bas dans un établissement de haute facture, c'est désormais possible !",
    icon: Stethoscope,
    image: "/chm/mam1.jpg",
    description: "Le Complexe Hospitalier la MAMU offre des soins de santé de qualité avec un plateau technique de pointe, accessible à tous les Camerounais.",
    services: [
      "Plateau technique de pointe (IRM, scanners, mammographes)",
      "Salles d'opération équipées",
      "Personnel médical qualifié",
      "Tarifs accessibles pour tous"
    ],
    featured: true
  },
  {
    id: 3,
    name: "SOCAGI",
    tagline: "Avec son projet SOCAHABITAT, devenir propriétaire n'est plus un problème de petit budget !",
    icon: Home,
    image: "/logo La Socagi.png",
    description: "La Société Camerounaise de Gestion Immobilière (SOCAGI) facilite l'accès à la propriété grâce à des solutions innovantes et accessibles.",
    services: [
      "À partir de 80 000 FCFA/mois",
      "Location-vente accessible",
      "Projets immobiliers de qualité",
      "Accompagnement personnalisé"
    ],
    featured: false
  },
  {
    id: 4,
    name: "INSTITUT UNIVERSITAIRE BISSAÏ",
    tagline: "Notre institut en plus d'offrir des formations pratiques garantissant l'intégration de ses diplômés, assure un suivi continu durant l'année.",
    icon: GraduationCap,
    image: "/logo Institut Universitaire Bissai.png",
    description: "L'Institut Universitaire BISSAÏ forme les futurs leaders avec des programmes académiques complets et un suivi personnalisé.",
    services: [
      "Formations BTS, HND, LMD",
      "7 filières spécialisées",
      "Stages dans les filiales du groupe",
      "Suivi continu et accompagnement"
    ],
    featured: false
  }
];

export const FilialesSection = (): JSX.Element => {
  const { t } = useTranslation("renews");

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
            {t("filiales.sectionTitle")}
          </h2>
          <div className="w-24 h-1 bg-foundation-bluenormal mx-auto rounded-full mb-6"></div>
          <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            {t("filiales.sectionSubtitle")}
          </p>
        </motion.div>

        {/* Filiales Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filiales.map((filiale, index) => (
            <motion.div
              key={filiale.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className={`h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                filiale.featured ? 'border-2 border-foundation-bluenormal/20 bg-gradient-to-br from-white to-blue-50' : 'border border-gray-200'
              }`}>
                {/* Image Section */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={filiale.image}
                    alt={filiale.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/hero1.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  {filiale.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500 text-white px-3 py-1 text-sm font-semibold">
                        <Star className="w-4 h-4 mr-2" />
                        Filiale phare
                      </Badge>
                    </div>
                  )}

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <filiale.icon className="w-6 h-6 text-foundation-bluenormal" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <CardHeader className="p-6">
                  <CardTitle className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-xl sm:text-2xl leading-tight mb-2">
                    {filiale.name}
                  </CardTitle>
                  <p className="[font-family:'Roboto',Helvetica] font-medium text-gray-600 text-sm sm:text-base italic">
                    {filiale.tagline}
                  </p>
                </CardHeader>

                <CardContent className="p-6 pt-0 space-y-4">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-700 text-sm sm:text-base leading-relaxed">
                    {filiale.description}
                  </p>

                  {/* Services */}
                  <div className="space-y-3">
                    <h4 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluenormal text-base">
                      Services :
                    </h4>
                    <ul className="space-y-2">
                      {filiale.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-foundation-bluenormal rounded-full mt-2 flex-shrink-0"></div>
                          <span className="[font-family:'Roboto',Helvetica] font-normal text-gray-600 text-xs sm:text-sm">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-foundation-bluenormal text-foundation-bluenormal hover:bg-foundation-bluenormal hover:text-white transition-all duration-200"
                    >
                      <span>Découvrir {filiale.name}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Group Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-foundation-bluenormal to-foundation-bluedarker rounded-2xl p-8 sm:p-12 md:p-16"
        >
          <div className="text-center mb-12">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl mb-4">
              Un écosystème intégré
            </h3>
            <p className="[font-family:'Roboto',Helvetica] font-normal text-white/90 text-lg sm:text-xl max-w-3xl mx-auto">
              Le Groupe RENAPROV forme un écosystème complet qui répond à tous les besoins de la communauté camerounaise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">Finance</div>
              <div className="text-white/80 text-sm sm:text-base">Microfinance et services bancaires</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">Santé</div>
              <div className="text-white/80 text-sm sm:text-base">Soins médicaux accessibles</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">Éducation</div>
              <div className="text-white/80 text-sm sm:text-base">Formation et excellence académique</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">Immobilier</div>
              <div className="text-white/80 text-sm sm:text-base">Accès à la propriété</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-white text-foundation-bluenormal hover:bg-white/95 font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              <span>Découvrir tout l'écosystème</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
