import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  CheckCircle, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  FileText, 
  X, 
  ArrowRight,
  Building,
  CreditCard,
  Shield,
  Users,
  Briefcase,
  Home
} from 'lucide-react';

interface AccountFormData {
  // Informations personnelles
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  dateNaissance: string;
  lieuNaissance: string;
  profession: string;
  adresse: string;
  ville: string;
  
  // Type de compte souhaité
  typeCompte: string;
  
  // Informations supplémentaires
  revenusMensuels: string;
  motifOuverture: string;
  accepteConditions: boolean;
}

interface AccountCreationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const accountTypes = [
  { value: "courant-individuel", label: "Compte Courant Individuel", icon: User },
  { value: "epargne-individuel", label: "Compte Épargne Individuel", icon: CreditCard },
  { value: "courant-entreprise", label: "Compte Courant Entreprise", icon: Building },
  { value: "epargne-entreprise", label: "Compte Épargne Entreprise", icon: Briefcase },
  { value: "salarie", label: "Compte Salarié", icon: Users },
  { value: "prive", label: "Compte Privé", icon: Shield },
];

export const AccountCreationForm: React.FC<AccountCreationFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AccountFormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateNaissance: '',
    lieuNaissance: '',
    profession: '',
    adresse: '',
    ville: '',
    typeCompte: '',
    revenusMensuels: '',
    motifOuverture: '',
    accepteConditions: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showValidationError, setShowValidationError] = useState(false);
  const [attemptedNext, setAttemptedNext] = useState(false);
  const totalSteps = 4;

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Hide validation error when user starts filling fields
    if (showValidationError) {
      setShowValidationError(false);
    }
  };

  // Helper function to check if a field is invalid
  const isFieldInvalid = (fieldName: string, value: string) => {
    if (!attemptedNext) return false;
    
    switch (fieldName) {
      case 'email':
        return !value || !isValidEmail(value);
      default:
        return !value;
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return formData.nom && 
               formData.prenom && 
               formData.email && 
               isValidEmail(formData.email) &&
               formData.telephone && 
               formData.dateNaissance && 
               formData.lieuNaissance;
      case 2:
        return formData.profession && formData.adresse && formData.ville;
      case 3:
        return formData.typeCompte;
      case 4:
        return formData.accepteConditions;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setAttemptedNext(true);
      if (validateCurrentStep()) {
        setCurrentStep(currentStep + 1);
        setShowValidationError(false);
        setAttemptedNext(false);
      } else {
        setShowValidationError(true);
        // Hide error message after 3 seconds
        setTimeout(() => setShowValidationError(false), 3000);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi du formulaire par email
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      dateNaissance: '',
      lieuNaissance: '',
      profession: '',
      adresse: '',
      ville: '',
      typeCompte: '',
      revenusMensuels: '',
      motifOuverture: '',
      accepteConditions: false,
    });
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center animate-in fade-in-0 zoom-in-95 duration-300">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-foundation-bluenormal mb-4">
            Demande envoyée !
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Votre demande de création de compte a été transmise avec succès. 
            Notre équipe vous contactera dans les plus brefs délais pour finaliser votre inscription.
          </p>
          <Button 
            onClick={handleClose}
            className="bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white w-full"
          >
            Fermer
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foundation-bluenormal">
                Création de Compte RENAPROV
              </h2>
              <p className="text-gray-600 mt-1">
                Ouvrez votre compte en quelques étapes
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Étape {currentStep} sur {totalSteps}</span>
              <span className="text-sm font-medium text-foundation-bluenormal">
                {Math.round((currentStep / totalSteps) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-foundation-bluenormal to-foundation-bluedarker h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-foundation-bluenormal" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Informations personnelles
                  </h3>
                  <p className="text-gray-600">
                    Commençons par vos informations de base
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${isFieldInvalid('nom', formData.nom) ? 'text-red-600' : 'text-gray-700'}`}>
                      Nom *
                    </label>
                    <Input
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                      className={`h-12 ${isFieldInvalid('nom', formData.nom) ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${isFieldInvalid('prenom', formData.prenom) ? 'text-red-600' : 'text-gray-700'}`}>
                      Prénom *
                    </label>
                    <Input
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      placeholder="Votre prénom"
                      required
                      className={`h-12 ${isFieldInvalid('prenom', formData.prenom) ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${isFieldInvalid('email', formData.email) ? 'text-red-600' : 'text-gray-700'}`}>
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      required
                      className={`h-12 ${isFieldInvalid('email', formData.email) ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${isFieldInvalid('telephone', formData.telephone) ? 'text-red-600' : 'text-gray-700'}`}>
                      Téléphone *
                    </label>
                    <Input
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      placeholder="+237 6XX XXX XXX"
                      required
                      className={`h-12 ${isFieldInvalid('telephone', formData.telephone) ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${isFieldInvalid('dateNaissance', formData.dateNaissance) ? 'text-red-600' : 'text-gray-700'}`}>
                      Date de naissance *
                    </label>
                    <Input
                      name="dateNaissance"
                      type="date"
                      value={formData.dateNaissance}
                      onChange={handleInputChange}
                      required
                      className={`h-12 ${isFieldInvalid('dateNaissance', formData.dateNaissance) ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${isFieldInvalid('lieuNaissance', formData.lieuNaissance) ? 'text-red-600' : 'text-gray-700'}`}>
                      Lieu de naissance *
                    </label>
                    <Input
                      name="lieuNaissance"
                      value={formData.lieuNaissance}
                      onChange={handleInputChange}
                      placeholder="Ville de naissance"
                      required
                      className={`h-12 ${isFieldInvalid('lieuNaissance', formData.lieuNaissance) ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Professional Information */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-foundation-bluenormal" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Informations professionnelles
                  </h3>
                  <p className="text-gray-600">
                    Aidez-nous à mieux vous connaître
                  </p>
                </div>

                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isFieldInvalid('profession', formData.profession) ? 'text-red-600' : 'text-gray-700'}`}>
                    Profession *
                  </label>
                  <Input
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    placeholder="Votre profession"
                    required
                    className={`h-12 ${isFieldInvalid('profession', formData.profession) ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Revenus mensuels approximatifs
                  </label>
                  <select
                    name="revenusMensuels"
                    value={formData.revenusMensuels}
                    onChange={handleInputChange}
                    className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-foundation-bluenormal focus:border-transparent"
                  >
                    <option value="">Sélectionnez une tranche</option>
                    <option value="0-50000">0 - 50 000 FCFA</option>
                    <option value="50000-100000">50 000 - 100 000 FCFA</option>
                    <option value="100000-200000">100 000 - 200 000 FCFA</option>
                    <option value="200000-500000">200 000 - 500 000 FCFA</option>
                    <option value="500000+">Plus de 500 000 FCFA</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isFieldInvalid('adresse', formData.adresse) ? 'text-red-600' : 'text-gray-700'}`}>
                    Adresse complète *
                  </label>
                  <Input
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleInputChange}
                    placeholder="Votre adresse complète"
                    required
                    className={`h-12 ${isFieldInvalid('adresse', formData.adresse) ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  />
                </div>

                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isFieldInvalid('ville', formData.ville) ? 'text-red-600' : 'text-gray-700'}`}>
                    Ville *
                  </label>
                  <Input
                    name="ville"
                    value={formData.ville}
                    onChange={handleInputChange}
                    placeholder="Votre ville"
                    required
                    className={`h-12 ${isFieldInvalid('ville', formData.ville) ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Account Type Selection */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-foundation-bluenormal" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Type de compte souhaité
                  </h3>
                  <p className="text-gray-600">
                    Choisissez le type de compte qui correspond à vos besoins
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {accountTypes.map((account) => {
                    const IconComponent = account.icon;
                    const isSelected = formData.typeCompte === account.value;
                    const isInvalid = attemptedNext && !formData.typeCompte;
                    
                    return (
                      <div
                        key={account.value}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? 'border-foundation-bluenormal bg-foundation-bluenormal/5'
                            : isInvalid
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, typeCompte: account.value }))}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className={`w-6 h-6 ${isSelected ? 'text-foundation-bluenormal' : isInvalid ? 'text-red-500' : 'text-foundation-bluenormal'}`} />
                          <span className={`font-medium ${isInvalid ? 'text-red-600' : 'text-gray-900'}`}>{account.label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {attemptedNext && !formData.typeCompte && (
                  <p className="text-red-600 text-sm mt-2">Veuillez sélectionner un type de compte</p>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Motif d'ouverture du compte
                  </label>
                  <textarea
                    name="motifOuverture"
                    value={formData.motifOuverture}
                    onChange={handleInputChange}
                    placeholder="Décrivez brièvement pourquoi vous souhaitez ouvrir ce compte..."
                    className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-foundation-bluenormal focus:border-transparent resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-foundation-bluenormal" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Confirmation et conditions
                  </h3>
                  <p className="text-gray-600">
                    Vérifiez vos informations et acceptez nos conditions
                  </p>
                </div>

                {/* Récapitulatif */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Récapitulatif de votre demande
                  </h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Nom complet:</span>
                      <span className="font-medium">{formData.prenom} {formData.nom}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span className="font-medium">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Téléphone:</span>
                      <span className="font-medium">{formData.telephone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Profession:</span>
                      <span className="font-medium">{formData.profession}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Type de compte:</span>
                      <span className="font-medium">
                        {accountTypes.find(acc => acc.value === formData.typeCompte)?.label}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="accepteConditions"
                    checked={formData.accepteConditions}
                    onChange={handleInputChange}
                    className={`mt-1 w-5 h-5 text-foundation-bluenormal border-gray-300 rounded focus:ring-foundation-bluenormal ${
                      attemptedNext && !formData.accepteConditions ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  <label className={`text-sm ${attemptedNext && !formData.accepteConditions ? 'text-red-600' : 'text-gray-700'}`}>
                    J'accepte les conditions générales d'utilisation et confirme que les informations fournies sont exactes. 
                    Je comprends que mon compte sera finalisé en agence avec les documents originaux. *
                  </label>
                </div>
                
                {attemptedNext && !formData.accepteConditions && (
                  <p className="text-red-600 text-sm mt-2">Vous devez accepter les conditions pour continuer</p>
                )}
              </div>
            )}

            {/* Validation Error Message */}
            {showValidationError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 animate-in slide-in-from-top-2 duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-xs font-bold">!</span>
                  </div>
                  <p className="text-red-700 text-sm font-medium">
                    Veuillez remplir tous les champs obligatoires avant de continuer.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-100 mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                Précédent
              </Button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i + 1 <= currentStep ? 'bg-foundation-bluenormal' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white flex items-center gap-2"
                >
                  Suivant
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.accepteConditions}
                  className="bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white flex items-center gap-2"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
