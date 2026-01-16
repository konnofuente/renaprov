import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CheckCircle, ArrowRight, Phone, Mail, Globe, FileText, Users, Clock, Shield } from "lucide-react";

export const ProcessusDemandePret: React.FC = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Préparation du Dossier",
      description: "Rassemblez tous les documents nécessaires pour votre demande de prêt.",
      details: [
        "Pièce d'identité valide",
        "Justificatifs de revenus",
        "Relevés bancaires des 3 derniers mois",
        "Justificatif de domicile"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Rendez-vous en Agence",
      description: "Visitez une agence RENAPROV pour déposer votre dossier et rencontrer un conseiller.",
      details: [
        "Prise de rendez-vous recommandée",
        "Entretien avec un conseiller",
        "Vérification des documents",
        "Explication des conditions"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Étude du Dossier",
      description: "Notre équipe étudie votre demande et évalue votre capacité de remboursement.",
      details: [
        "Analyse de votre situation financière",
        "Vérification de vos antécédents",
        "Calcul de votre capacité de remboursement",
        "Évaluation des risques"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Décision et Signature",
      description: "Après approbation, signature du contrat et déblocage des fonds.",
      details: [
        "Notification de la décision",
        "Signature du contrat de prêt",
        "Déblocage des fonds",
        "Mise en place du remboursement"
      ]
    }
  ];

  const requirements = [
    "Être client RENAPROV FINANCE SA",
    "Avoir un revenu régulier et stable",
    "Fournir tous les documents requis",
    "Avoir un bon historique de crédit"
  ];

  return (
    <>
      <SEO
        title="Processus de Demande de Prêt - RENAPROV FINANCE SA"
        description="Découvrez le processus de demande de prêt RENAPROV. Étapes claires, documents requis, conditions d'éligibilité pour obtenir votre crédit."
        keywords="processus prêt, demande crédit, RENAPROV, microfinance, Cameroun, dossier, agence, conditions"
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
                  Processus de Demande de Prêt
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                  Suivez notre processus simple et transparent pour obtenir votre prêt RENAPROV
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-foundation-bluenormal hover:bg-gray-100"
                >
                  Commencer la demande
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
                  src="/service/Compte courant individuel.jpg"
                  alt="Processus de demande de prêt RENAPROV"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-foundation-bluenormal" />
                    <span className="text-sm font-medium text-gray-700">Processus simple</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
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
                Les 4 Étapes du Processus
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre processus de demande de prêt est conçu pour être simple, transparent et efficace.
              </p>
            </motion.div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1">
                    <Card className="h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="bg-foundation-bluenormal w-16 h-16 rounded-full flex items-center justify-center mr-6">
                            {step.icon}
                          </div>
                          <div>
                            <span className="text-sm font-medium text-foundation-bluenormal">
                              Étape {index + 1}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-lg text-gray-600 mb-6">
                          {step.description}
                        </p>
                        <ul className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex-1">
                    <img
                      src="/service/Compte courant individuel.jpg"
                      alt={`Étape ${index + 1} - ${step.title}`}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Conditions d'Éligibilité
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Vérifiez que vous remplissez les conditions requises pour faire une demande de prêt.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {requirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-foundation-bluenormal">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-foundation-bluenormal w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-lg font-medium text-gray-900">
                          {requirement}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
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
                Délais de Traitement
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nos délais de traitement sont optimisés pour vous donner une réponse rapide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="bg-foundation-bluenormal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dépôt du Dossier</h3>
                <p className="text-4xl font-bold text-foundation-bluenormal mb-2">Immédiat</p>
                <p className="text-gray-600">
                  Dès réception de votre dossier complet
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-foundation-bluenormal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Étude du Dossier</h3>
                <p className="text-4xl font-bold text-foundation-bluenormal mb-2">3-5 jours</p>
                <p className="text-gray-600">
                  Analyse et évaluation de votre demande
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-foundation-bluenormal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Déblocage</h3>
                <p className="text-4xl font-bold text-foundation-bluenormal mb-2">24h</p>
                <p className="text-gray-600">
                  Après signature du contrat
                </p>
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
                Prêt à Faire Votre Demande ?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Rendez-vous en agence pour déposer votre dossier et commencer le processus.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-foundation-bluenormal hover:bg-gray-100"
              >
                Rendez-vous en agence
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
