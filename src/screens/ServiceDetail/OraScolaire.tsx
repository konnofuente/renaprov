import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CheckCircle, ArrowRight, Phone, Mail, Globe, School, BookOpen, Calendar, PiggyBank, Users } from "lucide-react";

export const OraScolaire: React.FC = () => {
  const features = [
    {
      icon: <PiggyBank className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Épargne flexible dès 350 FCFA",
      description: "Constituer votre fonds scolaire en épargnant à partir de 350 FCFA selon vos capacités."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Préparation sereine de la rentrée",
      description: "Préparez sereinement la rentrée scolaire en épargnant progressivement."
    },
    {
      icon: <School className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Couverture des frais scolaires",
      description: "Assurez la couverture des frais de scolarité et du matériel scolaire pour vos enfants."
    },
    {
      icon: <Users className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Accompagnement scolaire",
      description: "Bénéficiez d'un accompagnement pour la préparation de la rentrée scolaire."
    }
  ];

  const benefits = [
    "Frais de scolarité et matériel assurés",
    "Tranquillité d'esprit pour les parents",
    "Épargne accessible et progressive",
    "Préparation de la rentrée en toute sérénité"
  ];

  const acquisitionSteps = [
    {
      step: "1",
      title: "Souscription",
      description: "Souscrivez au plan ORA Scolaire et ouvrez votre compte épargne dédié."
    },
    {
      step: "2",
      title: "Épargne régulière",
      description: "Constituer votre fonds en épargnant régulièrement à partir de 350 FCFA."
    },
    {
      step: "3",
      title: "Utilisation des fonds",
      description: "Utilisez votre fonds constitué pour couvrir les frais de scolarité et le matériel scolaire."
    },
    {
      step: "4",
      title: "Rentrée scolaire",
      description: "Assurez la rentrée scolaire de vos enfants en toute sérénité avec votre fonds."
    }
  ];

  return (
    <>
      <SEO
        title="ORA Scolaire - RENAPROV FINANCE SA"
        description="Plan d'épargne permettant de constituer un fond à partir de 350 FCFA dans le but de solutionner les problèmes liés à la rentrée scolaire avec ORA Scolaire."
        keywords="ORA Scolaire, épargne scolaire, rentrée scolaire, frais de scolarité, RENAPROV, microfinance, Cameroun, matériel scolaire"
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
                  ORA Scolaire
                </h1>
                <p className="text-xl lg:text-2xl mb-4 text-blue-100 font-semibold">
                  Préparez la rentrée scolaire en toute sérénité
                </p>
                <p className="text-lg lg:text-xl mb-4 text-blue-100">
                  Épargnez à partir de
                </p>
                <p className="text-2xl lg:text-3xl font-bold mb-4 text-yellow-300">
                  350 FCFA minimum
                </p>
                <p className="text-lg lg:text-xl mb-8 text-blue-100">
                  Plan d'épargne permettant de constituer un fond à partir de 350 FCFA dans le but de solutionner les problèmes liés à la rentrée scolaire.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-foundation-bluenormal hover:bg-gray-100"
                >
                  Souscrire à ORA Scolaire
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
                  src="/service/ORA School.jpeg"
                  alt="ORA Scolaire RENAPROV"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <School className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-gray-700">Rentrée scolaire</span>
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
                ORA Scolaire vous permet de constituer un fonds pour solutionner les problèmes liés à la rentrée scolaire.
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
                  Pourquoi Choisir ORA Scolaire ?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Avec ORA Scolaire, préparez sereinement la rentrée scolaire de vos enfants en épargnant progressivement à partir de 350 FCFA.
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
                  src="/service/ORA School.jpeg"
                  alt="Avantages ORA Scolaire RENAPROV"
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
                Découvrez les étapes simples pour préparer la rentrée scolaire avec ORA Scolaire.
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
                Préparez la Rentrée Scolaire de Vos Enfants Aujourd'hui
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Rejoignez des milliers de parents qui préparent sereinement la rentrée scolaire avec ORA Scolaire.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-foundation-bluenormal hover:bg-gray-100"
              >
                Souscrire à ORA Scolaire
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

