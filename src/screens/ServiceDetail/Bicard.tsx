import React, { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CheckCircle, ArrowRight, Phone, Mail, Globe, CreditCard, Shield, Zap, MapPin, ShoppingCart, Globe2, Lock, RefreshCw, Eye, FileText, Camera, User } from "lucide-react";
import { AccountCreationForm } from "../../components/AccountCreationForm";
import { useNavigate } from "react-router-dom";

export const Bicard: React.FC = () => {
  const [isAccountFormOpen, setIsAccountFormOpen] = useState(false);
  const navigate = useNavigate();

  const features = [
    {
      icon: <CreditCard className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Retirer de l'argent dans nos caisses",
      description: "Retirez facilement de l'argent dans toutes les agences RENAPROV."
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Payer en magasin",
      description: "Effectuez vos achats en magasin avec votre BiCard dans tous les établissements acceptant VISA."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Payer en ligne et sur les plateformes internationales",
      description: "Achetez en ligne sur les sites internationaux et plateformes e-commerce compatibles VISA."
    },
    {
      icon: <Shield className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Effectuer des achats sécurisés",
      description: "Toutes vos transactions sont protégées par des normes bancaires internationales."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Recharger autant de fois que nécessaire",
      description: "Rechargez votre carte dans toutes les agences RENAPROV et utilisez-la immédiatement."
    },
    {
      icon: <Eye className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Contrôler vos dépenses sans risque de découvert",
      description: "Gérez votre budget en temps réel sans risque de découvert."
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-foundation-bluenormal" />,
      title: "Flexibilité totale",
      description: "Rechargez votre carte dans toutes les agences RENAPROV et utilisez-la immédiatement pour vos retraits, paiements ou achats."
    },
    {
      icon: <Shield className="w-8 h-8 text-foundation-bluenormal" />,
      title: "Sécurité renforcée",
      description: "Votre carte est protégée par des normes bancaires internationales et des systèmes antifraude."
    },
    {
      icon: <Globe2 className="w-8 h-8 text-foundation-bluenormal" />,
      title: "Paiement national & international",
      description: "Effectuez vos achats sur les sites, applications, guichets automatiques et terminaux compatibles VISA."
    },
    {
      icon: <User className="w-8 h-8 text-foundation-bluenormal" />,
      title: "Pratique et accessible à tous",
      description: "Pas besoin d'un compte bancaire pour en profiter : la BiCard s'adapte aux réalités des utilisateurs camerounais."
    },
    {
      icon: <Eye className="w-8 h-8 text-foundation-bluenormal" />,
      title: "Contrôle en temps réel",
      description: "Suivez votre solde, rechargez et gérez vos paiements directement en agence et via nos conseillers."
    }
  ];

  const requiredDocuments = [
    {
      icon: <FileText className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Pièce d'identité valide",
      description: "Photocopie d'une CNI, passeport, permis de conduire ou carte de séjour"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Frais d'ouverture",
      description: "Frais d'ouverture selon la politique RENAPROV"
    },
    {
      icon: <Camera className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Photos d'identité",
      description: "Deux photos 4×4"
    },
    {
      icon: <FileText className="w-6 h-6 text-foundation-bluenormal" />,
      title: "Formulaire d'inscription",
      description: "Formulaire d'inscription à remplir en agence"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Se rendre dans l'agence",
      description: "Rendez-vous dans l'agence RENAPROV la plus proche de chez vous."
    },
    {
      step: "2",
      title: "Soumettre les documents",
      description: "Présentez tous les documents requis à votre conseiller."
    },
    {
      step: "3",
      title: "Activer la carte",
      description: "Activez votre carte avec l'aide d'un conseiller RENAPROV."
    },
    {
      step: "4",
      title: "Première recharge",
      description: "Effectuez votre première recharge et commencez à utiliser votre BiCard."
    }
  ];

  return (
    <>
      <SEO
        title="BiCard Renaprov – Votre argent, votre liberté - RENAPROV FINANCE SA"
        description="La BiCard Renaprov est une carte prépayée moderne, sécurisée et rechargeable qui vous permet d'effectuer vos opérations financières en toute simplicité, au Cameroun et à l'international."
        keywords="BiCard, carte prépayée, carte VISA, RENAPROV, microfinance, Cameroun, paiement sécurisé, carte rechargeable, UBA, FOOHANK"
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
                  BiCard Renaprov
                </h1>
                <p className="text-xl lg:text-2xl mb-4 text-blue-100 font-semibold">
                  Votre argent, votre liberté.
                </p>
                <p className="text-lg lg:text-xl mb-8 text-blue-100">
                  La BiCard Renaprov est une carte prépayée moderne, sécurisée et rechargeable qui vous permet d'effectuer vos opérations financières en toute simplicité, au Cameroun et à l'international.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-foundation-bluenormal hover:bg-gray-100"
                    onClick={() => setIsAccountFormOpen(true)}
                  >
                    Obtenir ma BiCard
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => navigate("/contact")}
                  >
                    Trouver une agence
                    <MapPin className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="/new/femme qui arrete une bicard.jpeg"
                  alt="BiCard Renaprov - Carte prépayée VISA"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Service disponible</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Presentation Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Une carte, plus de liberté dans vos transactions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                La BiCard Renaprov, développée en partenariat avec <strong>UBA</strong> et <strong>FOOHANK</strong>, est une solution de paiement rapide et sécurisée. Que vous soyez particulier, étudiant, entrepreneur ou professionnel, la carte vous offre une gestion simple de votre argent et un accès direct aux services Renaprov.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Pourquoi choisir la BiCard Renaprov ?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-start">
                        <div className="mb-4 p-3 bg-foundationbluelight rounded-lg">
                          {benefit.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                Ce que vous pouvez faire avec votre BiCard
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez toutes les fonctionnalités de votre carte prépayée Renaprov.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions Section */}
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
                Comment obtenir votre BiCard ?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Required Documents */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Documents requis
                </h3>
                <div className="space-y-6">
                  {requiredDocuments.map((doc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 p-2 bg-foundationbluelight rounded-lg">
                        {doc.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {doc.title}
                        </h4>
                        <p className="text-gray-600">
                          {doc.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Processus
                </h3>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-foundation-bluenormal text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button 
                    variant="outline"
                    className="w-full sm:w-auto"
                    onClick={() => navigate("/contact")}
                  >
                    Voir les agences Renaprov
                    <MapPin className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="p-8 bg-foundationbluelight rounded-lg">
                  <Lock className="w-16 h-16 text-foundation-bluenormal mb-6" />
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Votre sécurité, notre priorité
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    La BiCard Renaprov est conforme aux standards de sécurité internationaux. Toutes les opérations sont cryptées, protégées et surveillées pour garantir la tranquillité de chaque utilisateur.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 text-center">
                    <Shield className="w-12 h-12 text-foundation-bluenormal mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Normes bancaires</h3>
                    <p className="text-sm text-gray-600">Standards internationaux</p>
                  </Card>
                  <Card className="p-6 text-center">
                    <Lock className="w-12 h-12 text-foundation-bluenormal mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Cryptage avancé</h3>
                    <p className="text-sm text-gray-600">Protection des données</p>
                  </Card>
                  <Card className="p-6 text-center">
                    <Shield className="w-12 h-12 text-foundation-bluenormal mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Antifraude</h3>
                    <p className="text-sm text-gray-600">Systèmes de surveillance</p>
                  </Card>
                  <Card className="p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-foundation-bluenormal mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Conformité</h3>
                    <p className="text-sm text-gray-600">Standards internationaux</p>
                  </Card>
                </div>
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
                Passez à la BiCard aujourd'hui
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Profitez d'une carte moderne, accessible et adaptée à vos besoins quotidiens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-foundation-bluenormal hover:bg-gray-100"
                  onClick={() => setIsAccountFormOpen(true)}
                >
                  Demander ma BiCard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => window.location.href = "tel:+237693930231"}
                >
                  Appeler un conseiller Renaprov
                  <Phone className="ml-2 w-5 h-5" />
                </Button>
              </div>
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
      
      {/* Account Creation Form Modal */}
      <AccountCreationForm 
        isOpen={isAccountFormOpen} 
        onClose={() => setIsAccountFormOpen(false)} 
      />
    </>
  );
};

