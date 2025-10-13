import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const MasoFormSection = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    firstName: "",
    lastName: "",
    birthDate: "",
    birthPlace: "",
    gender: "",
    phone: "",
    email: "",
    // Step 2
    idNumber: "",
    address: "",
    profession: "",
    maritalStatus: "",
    childrenCount: "",
    emergencyContact: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full bg-foundationbluelight py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-foundation-greydarker text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Bulletin de pre-souscription maso
          </h2>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep >= 1 ? 'bg-foundation-bluenormal text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              1
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep >= 2 ? 'bg-foundation-bluenormal text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              2
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-greydarker text-xl mb-6">
                Informations personnelles
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foundation-greydarker mb-2">
                    Nom *
                  </label>
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foundation-greydarker mb-2">
                    Prénom *
                  </label>
                  <Input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full"
                    placeholder="Votre prénom"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foundation-greydarker mb-2">
                    Date de naissance *
                  </label>
                  <Input
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => handleInputChange('birthDate', e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foundation-greydarker mb-2">
                    Lieu de naissance *
                  </label>
                  <Input
                    type="text"
                    value={formData.birthPlace}
                    onChange={(e) => handleInputChange('birthPlace', e.target.value)}
                    className="w-full"
                    placeholder="Ville de naissance"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foundation-greydarker mb-2">
                    Sexe *
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-foundation-bluenormal focus:border-transparent"
                  >
                    <option value="">Sélectionner</option>
                    <option value="male">Masculin</option>
                    <option value="female">Féminin</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foundation-greydarker mb-2">
                    Téléphone *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full"
                    placeholder="+237 XXX XXX XXX"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foundation-greydarker mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-foundation-greydarker text-xl mb-6">
                Informations complémentaires
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foundation-greydarker mb-2">
                    Numéro de pièce d'identité *
                  </label>
                  <Input
                    type="text"
                    value={formData.idNumber}
                    onChange={(e) => handleInputChange('idNumber', e.target.value)}
                    className="w-full"
                    placeholder="Numéro de CNI/Passeport"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foundation-greydarker mb-2">
                    Adresse *
                  </label>
                  <Input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full"
                    placeholder="Votre adresse complète"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foundation-greydarker mb-2">
                    Profession *
                  </label>
                  <Input
                    type="text"
                    value={formData.profession}
                    onChange={(e) => handleInputChange('profession', e.target.value)}
                    className="w-full"
                    placeholder="Votre profession"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foundation-greydarker mb-2">
                    Situation matrimoniale
                  </label>
                  <select
                    value={formData.maritalStatus}
                    onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-foundation-bluenormal focus:border-transparent"
                  >
                    <option value="">Sélectionner</option>
                    <option value="single">Célibataire</option>
                    <option value="married">Marié(e)</option>
                    <option value="divorced">Divorcé(e)</option>
                    <option value="widowed">Veuf/Veuve</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foundation-greydarker mb-2">
                    Nombre d'enfants
                  </label>
                  <Input
                    type="number"
                    value={formData.childrenCount}
                    onChange={(e) => handleInputChange('childrenCount', e.target.value)}
                    className="w-full"
                    placeholder="0"
                    min="0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foundation-greydarker mb-2">
                    Contact d'urgence *
                  </label>
                  <Input
                    type="tel"
                    value={formData.emergencyContact}
                    onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                    className="w-full"
                    placeholder="+237 XXX XXX XXX"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex-1 sm:flex-none px-8 py-3"
            >
              Annuler
            </Button>
            
            {currentStep < 2 ? (
              <Button
                onClick={nextStep}
                className="flex-1 sm:flex-none bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white px-8 py-3"
              >
                Suivant
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="flex-1 sm:flex-none bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white px-8 py-3"
              >
                Soumettre
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
