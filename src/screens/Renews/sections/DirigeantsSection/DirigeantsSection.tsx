import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { 
  User, 
  Crown, 
  Briefcase, 
  Award,
  Star,
  Building2,
  Users,
  TrendingUp
} from "lucide-react";

const dirigeants = [
  {
    id: 1,
    name: "EMMANUEL NOËL BISSAÏ",
    position: "PRÉSIDENT DU CONSEIL D'ADMINISTRATION",
    image: "/hero1.png",
    description: "Visionnaire et leader spirituel, le Révérend Pasteur Emmanuel Noël BISSAÏ guide le Groupe RENAPROV depuis sa création en 1996 avec une vision claire de l'économie solidaire.",
    icon: Crown,
    featured: true
  },
  {
    id: 2,
    name: "EMMANUELLE NATASHA BISSAÏ",
    position: "ADMINISTRATEUR DIRECTEUR GÉNÉRAL",
    image: "/hero1.png",
    description: "À la tête de la direction générale, Emmanuelle Natasha BISSAÏ assure la mise en œuvre stratégique des orientations du groupe avec expertise et détermination.",
    icon: Briefcase,
    featured: true
  },
  {
    id: 3,
    name: "STÉPHANIE BISSAÏ",
    position: "DIRECTRICE DE L'EXPLOITATION ET DE LA PRODUCTION",
    image: "/hero1.png",
    description: "Responsable de l'exploitation et de la production, Stéphanie BISSAÏ optimise les processus opérationnels pour garantir l'excellence des services.",
    icon: TrendingUp,
    featured: false
  },
  {
    id: 4,
    name: "MBALA NDONGO FERDINAND",
    position: "DIRECTEUR GÉNÉRAL DÉLÉGUÉ",
    image: "/hero1.png",
    description: "Directeur Général Délégué, MBALA NDONGO FERDINAND apporte son expertise managériale pour accompagner la croissance du groupe.",
    icon: Building2,
    featured: false
  },
  {
    id: 5,
    name: "NYEMB MESSINGA CYRILLE",
    position: "DIRECTEUR DE L'ADMINISTRATION DU RÉSEAU",
    image: "/hero1.png",
    description: "En charge de l'administration du réseau, NYEMB MESSINGA CYRILLE assure la coordination et l'efficacité opérationnelle de toutes les agences.",
    icon: Users,
    featured: false
  },
  {
    id: 6,
    name: "DZOKOUO KENGNE ALEX FRIEDMAN",
    position: "DIRECTEUR GÉNÉRAL ADJOINT",
    image: "/hero1.png",
    description: "Directeur Général Adjoint, DZOKOUO KENGNE ALEX FRIEDMAN contribue à la stratégie globale et au développement des activités du groupe.",
    icon: Award,
    featured: false
  }
];

export const DirigeantsSection = (): JSX.Element => {
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
            NOS DIRIGEANTS
          </h2>
          <div className="w-24 h-1 bg-foundation-bluenormal mx-auto rounded-full mb-6"></div>
          <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            Découvrez l'équipe dirigeante qui guide RENAPROV FINANCE S.A vers l'excellence
          </p>
        </motion.div>

        {/* Leadership Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dirigeants.map((dirigeant, index) => (
            <motion.div
              key={dirigeant.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className={`h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                dirigeant.featured ? 'border-2 border-foundation-bluenormal/20 bg-gradient-to-br from-white to-blue-50' : 'border border-gray-200'
              }`}>
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={dirigeant.image}
                    alt={dirigeant.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/hero1.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  {dirigeant.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500 text-white px-3 py-1 text-sm font-semibold">
                        <Star className="w-4 h-4 mr-2" />
                        Leadership
                      </Badge>
                    </div>
                  )}

                  {/* Position Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <dirigeant.icon className="w-6 h-6 text-foundation-bluenormal" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <CardHeader className="p-6">
                  <CardTitle className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-lg sm:text-xl leading-tight mb-2">
                    {dirigeant.name}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <dirigeant.icon className="w-4 h-4 text-gray-500" />
                    <p className="[font-family:'Roboto',Helvetica] font-medium text-gray-600 text-sm sm:text-base">
                      {dirigeant.position}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="p-6 pt-0">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-700 text-sm sm:text-base leading-relaxed">
                    {dirigeant.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Leadership Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-foundation-bluenormal to-foundation-bluedarker rounded-2xl p-8 sm:p-12 md:p-16"
        >
          <div className="text-center mb-12">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl mb-4">
              Notre philosophie de leadership
            </h3>
            <p className="[font-family:'Roboto',Helvetica] font-normal text-white/90 text-lg sm:text-xl max-w-3xl mx-auto">
              Une équipe dirigeante unie par des valeurs communes et une vision partagée
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h4 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-xl mb-2">
                Vision
              </h4>
              <p className="[font-family:'Roboto',Helvetica] font-normal text-white/80 text-sm sm:text-base">
                Promouvoir l'économie solidaire et sortir les Camerounais du cercle vicieux de la pauvreté
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-xl mb-2">
                Mission
              </h4>
              <p className="[font-family:'Roboto',Helvetica] font-normal text-white/80 text-sm sm:text-base">
                Accompagner chaque client dans la réalisation de ses projets avec proximité et excellence
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-xl mb-2">
                Valeurs
              </h4>
              <p className="[font-family:'Roboto',Helvetica] font-normal text-white/80 text-sm sm:text-base">
                Intégrité, solidarité, innovation et engagement envers la communauté camerounaise
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foundation-bluenormal mb-2">28</div>
              <div className="text-gray-600 text-sm sm:text-base">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foundation-bluenormal mb-2">6+</div>
              <div className="text-gray-600 text-sm sm:text-base">Filiales du groupe</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foundation-bluenormal mb-2">30+</div>
              <div className="text-gray-600 text-sm sm:text-base">Agences</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foundation-bluenormal mb-2">100K+</div>
              <div className="text-gray-600 text-sm sm:text-base">Clients satisfaits</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
