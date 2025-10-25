import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Message de contact de ${formData.nom} ${formData.prenom}`);
      const body = encodeURIComponent(`
Nom: ${formData.nom}
Prénom: ${formData.prenom}
Email: ${formData.email}
Téléphone: ${formData.phone}

Message:
${formData.message}
      `);
      
      const mailtoLink = `mailto:service.digital@renaprov.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        phone: "",
        message: "",
      });
      
      alert("Votre client email s'ouvre pour envoyer votre message à service.digital@renaprov.com");
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map Section */}
          <motion.div
            variants={itemVariants}
            className="order-2 lg:order-1"
          >
            <div className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8!2d11.5021!3d3.848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfb3c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sYaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2scm!4v1234567890123!5m2!1sfr!2scm"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation RENAPROV FINANCE SA"
                className="w-full h-full"
              />
            </div>
            
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="mt-8 space-y-6"
            >
              {/* Address Section */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Adresse</h3>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-foundation-bluenormal mt-1 flex-shrink-0" />
                  <div className="text-gray-700 space-y-1">
                    <p>BP : 13809 Messa, Yaoundé</p>
                    <p>Siège social : Montée Elig-Effa, Yaoundé</p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-foundation-bluenormal flex-shrink-0" />
                    <span className="text-gray-700">+237 693930231</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-foundation-bluenormal flex-shrink-0" />
                    <span className="text-gray-700">+237 695133343</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-foundation-bluenormal flex-shrink-0" />
                    <span className="text-gray-700">+237 690203176</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-foundation-bluenormal flex-shrink-0" />
                    <span className="text-gray-700">service.digital@renaprov.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-10">
              <motion.h2
                variants={itemVariants}
                className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8"
              >
                Envoyer votre question
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <Input
                      id="nom"
                      name="nom"
                      type="text"
                      placeholder="Votre nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <Input
                      id="prenom"
                      name="prenom"
                      type="text"
                      placeholder="Votre prénom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="yourmail@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-4 pr-12"
                    />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+237 684 350 501"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-4 pr-12"
                    />
                    <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-foundation-bluenormal focus:border-transparent resize-none"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 sm:h-[50px] px-5 sm:px-6 bg-foundation-bluenormal hover:bg-foundation-bluedark-hover rounded-[35px] [font-family:'Karla',Helvetica] font-semibold text-white text-sm sm:text-[17px] tracking-[0.20px] leading-5 w-full sm:w-auto transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
