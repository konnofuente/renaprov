import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { 
  Building2, 
  MapPin, 
  Users, 
  Star,
  Quote,
  ArrowRight,
  Calendar,
  Award,
  Shield,
  Heart
} from "lucide-react";

const agences = [
  {
    id: 1,
    name: "AGENCE CENTRALE",
    location: "Immeuble JACO, Centre-ville Yaoundé",
    established: "23 Février 2006",
    director: "NGO BEBGA Marie Noëlle",
    image: "/hero1.png",
    description: "L'Agence centrale de RENAPROV FINANCE S.A, l'une des agences les plus prestigieuses du réseau, impose charisme et respect.",
    features: [
      "Deux vigiles de société de gardiennage",
      "Caméras de surveillance",
      "Grande salle d'attente",
      "Bureaux des chargés clientèles et caissières",
      "Bureau de la comptable d'agence"
    ],
    interview: {
      question: "Comment se porte votre agence ?",
      answer: "L'agence centrale de RENAPROV FINANCE S.A se porte très bien. Tout le personnel a répondu présent et aucune absence n'a été enregistrée. Comme vous pouvez le remarquer notre aimable clientèle est présente dans nos locaux."
    },
    featured: true
  },
  {
    id: 2,
    name: "AGENCE D'EKOUNOU",
    location: "Quartier Ekounou, Yaoundé",
    established: "Rénovée 2024",
    director: "Équipe dévouée",
    image: "/hero1.png",
    description: "Nouvelle Atmosphère, Même Engagement. Située au cœur du quartier Ekounou de Yaoundé, notre agence célèbre une nouvelle ère de service client.",
    features: [
      "Rénovation intérieure moderne",
      "Atmosphère conviviale et professionnelle",
      "Service clientèle exceptionnel",
      "Équipe dévouée et courtoise",
      "Engagement envers l'excellence"
    ],
    interview: {
      question: "Qu'est-ce qui fait la force de votre agence ?",
      answer: "Nous croyons fermement que notre service clientèle est notre plus grande force. Notre équipe dévouée de professionnels est toujours prête à accueillir nos clients avec le sourire et à répondre à leurs besoins de manière efficace et courtoise."
    },
    featured: false
  }
];

export const AgencesSection = (): JSX.Element => {
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
            AGENCES À LA UNE
          </h2>
          <div className="w-24 h-1 bg-foundation-bluenormal mx-auto rounded-full mb-6"></div>
          <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            Découvrez nos agences phares et leurs équipes dévouées qui vous accompagnent au quotidien
          </p>
        </motion.div>

        {/* Agencies Grid */}
        <div className="space-y-16">
          {agences.map((agence, index) => (
            <motion.div
              key={agence.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className={`overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                agence.featured ? 'border-2 border-foundation-bluenormal/20 bg-gradient-to-br from-white to-blue-50' : 'border border-gray-200'
              }`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                    <img
                      src={agence.image}
                      alt={agence.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/hero1.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Featured Badge */}
                    {agence.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-yellow-500 text-white px-3 py-1 text-sm font-semibold">
                          <Star className="w-4 h-4 mr-2" />
                          Agence phare
                        </Badge>
                      </div>
                    )}

                    {/* Location Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700 px-3 py-1 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        {agence.location}
                      </Badge>
                    </div>

                    {/* Established Badge */}
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-foundation-bluenormal text-white px-3 py-1 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        Depuis {agence.established}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-2xl sm:text-3xl leading-tight mb-2">
                        {agence.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building2 className="w-5 h-5" />
                        <span className="[font-family:'Roboto',Helvetica] font-medium text-sm sm:text-base">
                          Directrice : {agence.director}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-700 text-base sm:text-lg leading-relaxed">
                        {agence.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluenormal text-lg">
                          Équipements et services :
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {agence.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-foundation-bluenormal rounded-full mt-2 flex-shrink-0"></div>
                              <span className="[font-family:'Roboto',Helvetica] font-normal text-gray-600 text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Interview Section */}
                      <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <Quote className="w-6 h-6 text-foundation-bluenormal" />
                          <h4 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-bluenormal text-lg">
                            Interview de la Directrice
                          </h4>
                        </div>
                        <div className="space-y-3">
                          <p className="[font-family:'Roboto',Helvetica] font-medium text-gray-800 text-sm sm:text-base">
                            <strong>Q:</strong> {agence.interview.question}
                          </p>
                          <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-700 text-sm sm:text-base italic">
                            <strong>R:</strong> {agence.interview.answer}
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant="outline" 
                          className="border-foundation-bluenormal text-foundation-bluenormal hover:bg-foundation-bluenormal hover:text-white transition-all duration-200"
                        >
                          <span>Visiter cette agence</span>
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

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-foundation-bluenormal to-foundation-bluedarker rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-12">
              <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl mb-4">
                Notre réseau d'agences
              </h3>
              <p className="[font-family:'Roboto',Helvetica] font-normal text-white/90 text-lg sm:text-xl max-w-2xl mx-auto">
                Plus de 30 agences réparties dans tout le Cameroun pour vous servir
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">30+</div>
                <div className="text-white/80 text-sm sm:text-base">Agences</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80 text-sm sm:text-base">Employés</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">100K+</div>
                <div className="text-white/80 text-sm sm:text-base">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
