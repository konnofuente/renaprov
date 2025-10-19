import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { 
  Camera, 
  Calendar, 
  MapPin, 
  Users,
  ArrowRight,
  Heart,
  Star,
  Building2,
  GraduationCap,
  Gift
} from "lucide-react";

const galeriePhotos = [
  {
    id: 1,
    title: "Inauguration Complexe Hospitalier LA MAMU",
    date: "27 Mars 2024",
    location: "Yaoundé",
    category: "Santé",
    icon: Building2,
    image: "/hero1.png",
    description: "Cérémonie d'inauguration officielle du Complexe Hospitalier LA MAMU en présence du Gouverneur de la région Centre"
  },
  {
    id: 2,
    title: "Tombola MASO Acte 4",
    date: "13 Juillet 2024",
    location: "Palais Polyvalent des Sports, Yaoundé",
    category: "MASO",
    icon: Gift,
    image: "/hero1.png",
    description: "Grande cérémonie de tirage au sort avec plus de 6 000 mutualistes présents"
  },
  {
    id: 3,
    title: "Ouverture Institut Universitaire BISSAÏ",
    date: "2024",
    location: "Quartier 2 Chevaux, Yaoundé",
    category: "Éducation",
    icon: GraduationCap,
    image: "/hero1.png",
    description: "Inauguration du nouvel institut supérieur avec ses 7 filières spécialisées"
  },
  {
    id: 4,
    title: "Journée Internationale de la Femme",
    date: "8 Mars 2024",
    location: "Yaoundé",
    category: "Événement",
    icon: Heart,
    image: "/hero1.png",
    description: "Célébration de la 39ème édition avec match de gala et activités culturelles"
  },
  {
    id: 5,
    title: "Remise des Villas MASO",
    date: "2023-2024",
    location: "NKOL-NGUET, MFOU",
    category: "MASO",
    icon: Building2,
    image: "/hero1.png",
    description: "Remise solennelle des clés des villas aux bénéficiaires par le gouverneur"
  },
  {
    id: 6,
    title: "Partenariat Canal 2",
    date: "2024",
    location: "Yaoundé",
    category: "Partenariat",
    icon: Star,
    image: "/hero1.png",
    description: "Signature du partenariat stratégique avec Canal2 Internationale"
  },
  {
    id: 7,
    title: "Ouverture Agence Boumnyebel",
    date: "03 Novembre 2023",
    location: "Route Yaoundé-Edea",
    category: "Expansion",
    icon: MapPin,
    image: "/hero1.png",
    description: "Inauguration de la nouvelle agence pour mieux servir la communauté locale"
  },
  {
    id: 8,
    title: "Ouverture Agence Ngousso",
    date: "17 Avril 2023",
    location: "NGOUSSO, Yaoundé",
    category: "Expansion",
    icon: MapPin,
    image: "/hero1.png",
    description: "Extension du réseau avec l'ouverture de l'agence Ngousso"
  }
];

export const GalerieSection = (): JSX.Element => {
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
            GALÉRIE
          </h2>
          <div className="w-24 h-1 bg-foundation-bluenormal mx-auto rounded-full mb-6"></div>
          <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            Revivez les moments marquants et les événements importants de RENAPROV FINANCE S.A
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {galeriePhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer">
                {/* Image Section */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/hero1.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-foundation-bluenormal text-white px-2 py-1 text-xs font-semibold">
                      <photo.icon className="w-3 h-3 mr-1" />
                      {photo.category}
                    </Badge>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700 px-2 py-1 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {photo.date}
                    </Badge>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Camera className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Voir la photo</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-4">
                  <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-sm sm:text-base leading-tight mb-2 line-clamp-2">
                    {photo.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <MapPin className="w-3 h-3" />
                    <span className="[font-family:'Roboto',Helvetica] font-normal text-xs">
                      {photo.location}
                    </span>
                  </div>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-600 text-xs leading-relaxed line-clamp-2">
                    {photo.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-foundation-bluenormal to-foundation-bluedarker rounded-2xl p-8 sm:p-12 md:p-16"
        >
          <div className="text-center mb-12">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl mb-4">
              Moments marquants 2024
            </h3>
            <p className="[font-family:'Roboto',Helvetica] font-normal text-white/90 text-lg sm:text-xl max-w-3xl mx-auto">
              Une année riche en réalisations et en célébrations pour RENAPROV FINANCE S.A
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">1</div>
              <div className="text-white/80 text-sm sm:text-base">Complexe Hospitalier inauguré</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">6K+</div>
              <div className="text-white/80 text-sm sm:text-base">Mutualistes à la Tombola MASO</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">7</div>
              <div className="text-white/80 text-sm sm:text-base">Filières à l'Institut BISSAÏ</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">2</div>
              <div className="text-white/80 text-sm sm:text-base">Nouvelles agences ouvertes</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-white text-foundation-bluenormal hover:bg-white/95 font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Camera className="w-5 h-5 mr-2" />
              <span>Voir toutes les photos</span>
            </Button>
          </div>
        </motion.div>

        {/* Photo Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-2xl sm:text-3xl mb-4">
              Catégories d'événements
            </h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "MASO", icon: Heart, count: "3 événements" },
              { name: "Santé", icon: Building2, count: "1 inauguration" },
              { name: "Éducation", icon: GraduationCap, count: "1 ouverture" },
              { name: "Expansion", icon: MapPin, count: "2 agences" }
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="w-12 h-12 bg-foundation-bluenormal/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <category.icon className="w-6 h-6 text-foundation-bluenormal" />
                </div>
                <h4 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-bluenormal text-lg mb-1">
                  {category.name}
                </h4>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-600 text-sm">
                  {category.count}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
