import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CheckCircle, ArrowRight, Phone, Mail, Globe, Home, Laptop, Refrigerator, PiggyBank } from "lucide-react";

export const OraEquipement: React.FC = () => {
  const features = [
    {
      icon: <Home className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Acquisition de mobilier",
      description: "Équipez votre domicile ou vos bureaux avec du mobilier de qualité grâce à votre épargne."
    },
    {
      icon: <Laptop className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Équipement informatique et électronique",
      description: "Acquérez des équipements informatiques et électroniques pour votre domicile ou votre entreprise."
    },
    {
      icon: <Refrigerator className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Appareils électroménagers",
      description: "Équipez votre domicile avec des appareils électroménagers modernes et performants."
    },
    {
      icon: <PiggyBank className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Épargne progressive pour l'équipement",
      description: "Constituer votre fonds progressivement pour acquérir l'équipement dont vous avez besoin."
    }
  ];

  const benefits = [
    "Épargne progressive pour l'équipement",
    "Accès à une large gamme de produits",
    "Facilité d'acquisition pour domicile et bureaux",
    "Équipement de qualité pour votre confort"
  ];

  const acquisitionSteps = [
    {
      step: "1",
      title: "Souscription",
      description: "Souscrivez au plan ORA Équipement et ouvrez votre compte épargne dédié."
    },
    {
      step: "2",
      title: "Épargne",
      description: "Constituer votre fonds en épargnant régulièrement selon vos capacités."
    },
    {
      step: "3",
      title: "Sélection de l'équipement",
      description: "Choisissez l'équipement dont vous avez besoin parmi une large gamme de produits."
    },
    {
      step: "4",
      title: "Acquisition",
      description: "Acquérez votre équipement (mobilier, informatique, électronique, électroménager) avec votre fonds."
    }
  ];

  return (
    <>
      <SEO
        title="ORA Équipement - RENAPROV FINANCE SA"
        description="Plan d'épargne permettant de constituer un fond pour acquisition des équipements mobiliers, informatiques, électroniques, électroménager, etc. avec ORA Équipement."
        keywords="ORA Équipement, épargne équipement, mobilier, informatique, électroménager, RENAPROV, microfinance, Cameroun, équipement domicile, équipement bureaux"
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
                  ORA Équipement
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                  Plan d'épargne permettant de constituer un fond pour acquisition des équipements mobiliers, informatiques, électroniques, électroménager, etc.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-foundation-bluenormal hover:bg-gray-100"
                >
                  Souscrire à ORA Équipement
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
                  src="/service/ORA equipement.jpeg"
                  alt="ORA Équipement RENAPROV"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Home className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-gray-700">Équipement complet</span>
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
                ORA Équipement vous permet de constituer un fonds pour équiper votre domicile ou vos bureaux avec des équipements de qualité.
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
                  Pourquoi Choisir ORA Équipement ?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Avec ORA Équipement, équipez votre domicile ou vos bureaux avec des équipements de qualité grâce à une épargne progressive.
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
                  src="/service/ORA equipement.jpeg"
                  alt="Avantages ORA Équipement RENAPROV"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Processus d'Acquisition Section */}
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
                Processus d'Acquisition
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez les étapes simples pour acquérir votre équipement avec ORA Équipement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {acquisitionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-foundation-bluenormal hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="bg-foundation-bluenormal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-white">{step.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                Équipez Votre Domicile ou Vos Bureaux Aujourd'hui
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Rejoignez des milliers de clients qui équipent leur domicile et leurs bureaux avec ORA Équipement.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-foundation-bluenormal hover:bg-gray-100"
              >
                Souscrire à ORA Équipement
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
                <p className="text-gray-300">stephaniebissai@gmail.com</p>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
};

