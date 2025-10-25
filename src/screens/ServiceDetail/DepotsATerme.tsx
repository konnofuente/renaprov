import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CheckCircle, ArrowRight, Phone, Mail, Globe, DollarSign, TrendingUp, Shield } from "lucide-react";

export const DepotsATerme: React.FC = () => {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Dépôt unique minimum",
      description: "Constituez un dépôt unique d'un montant supérieur ou égal à XAF 500,000."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Intérêts post-comptés",
      description: "Bénéficiez des intérêts calculés sur la base d'un taux négociable."
    },
    {
      icon: <Shield className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Sécurité garantie",
      description: "Votre dépôt est protégé et sécurisé pendant toute la durée du placement."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Taux négociable",
      description: "Négociez le taux d'intérêt selon vos besoins et la durée du placement."
    }
  ];

  const benefits = [
    "Placement sécurisé avec des intérêts attractifs",
    "Taux d'intérêt négociable selon la durée",
    "Montant minimum accessible à partir de 500,000 XAF",
    "Calcul des intérêts post-comptés"
  ];

  return (
    <>
      <SEO
        title="Dépôts à Terme - RENAPROV FINANCE SA"
        description="Placez votre argent avec les dépôts à terme RENAPROV. Dépôt unique minimum 500,000 XAF, intérêts post-comptés, taux négociable."
        keywords="dépôts à terme, placement, RENAPROV, microfinance, Cameroun, intérêts, taux négociable, 500000 XAF"
      />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50"
      >
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-foundation-bluenormal to-foundation-bluedark-hover text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Dépôts à Terme
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                  Placez votre argent avec des intérêts attractifs et des taux négociables
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-foundation-bluenormal hover:bg-gray-100"
                >
                  Faire un placement
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="/service/Compte epargne individuel.jpg"
                  alt="Dépôts à Terme RENAPROV"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">Placement sécurisé</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Fonctionnalités Principales
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Les dépôts à terme vous permettent de constituer un placement sécurisé avec des intérêts attractifs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="flex justify-center mb-4">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Pourquoi Choisir les Dépôts à Terme ?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Avec RENAPROV, bénéficiez de conditions avantageuses pour vos placements à terme avec des taux d'intérêt négociables.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="/service/Compte epargne individuel.jpg"
                  alt="Avantages des dépôts à terme RENAPROV"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Conditions du Placement
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez les conditions et avantages des dépôts à terme RENAPROV.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full border-2 border-foundation-bluenormal">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="bg-foundation-bluenormal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Montant Minimum</h3>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-foundation-bluenormal mb-2">500,000 XAF</div>
                      <p className="text-gray-600">
                        Dépôt unique minimum pour ouvrir un compte à terme
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full border-2 border-foundation-bluenormal">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="bg-foundation-bluenormal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Taux Négociable</h3>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-foundation-bluenormal mb-2">Négociable</div>
                      <p className="text-gray-600">
                        Taux d'intérêt négociable selon la durée du placement
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-foundation-bluenormal text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Prêt à Faire un Placement ?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Contactez-nous pour négocier les meilleures conditions pour votre dépôt à terme.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-foundation-bluenormal hover:bg-gray-100"
              >
                Faire un placement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="bg-foundation-bluenormal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Site Web</h3>
                <p className="text-gray-300">renaprov.net</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-foundation-bluenormal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
                <p className="text-gray-300">+237 693 930 231</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-foundation-bluenormal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">service.digital@renaprov.com</p>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
};
