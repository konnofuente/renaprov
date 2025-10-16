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
  Shield,
  Heart,
  Users,
  Upload,
  FileImage
} from 'lucide-react';

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  dateNaissance: string;
  pieceIdentite: string;
  numeroPiece: string;
  accepteConditions: boolean;
  identityCard: File | null;
}

interface MasoAdhesionFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MasoAdhesionForm: React.FC<MasoAdhesionFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    dateNaissance: '',
    pieceIdentite: '',
    numeroPiece: '',
    accepteConditions: false,
    identityCard: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        identityCard: file
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
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
    
    // Simulation d'envoi du formulaire
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
      adresse: '',
      dateNaissance: '',
      pieceIdentite: '',
      numeroPiece: '',
      accepteConditions: false,
      identityCard: null,
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
            Votre demande d'adhésion à la MASO a été transmise avec succès. 
            Notre équipe vous contactera dans les plus brefs délais.
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
                Adhésion MASO
              </h2>
              <p className="text-gray-600 mt-1">
                Rejoignez la communauté solidaire
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
                    <label className="text-sm font-medium text-gray-700">
                      Nom *
                    </label>
                    <Input
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Prénom *
                    </label>
                    <Input
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      placeholder="Votre prénom"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Date de naissance *
                  </label>
                  <Input
                    name="dateNaissance"
                    type="date"
                    value={formData.dateNaissance}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Adresse complète *
                  </label>
                  <Input
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleInputChange}
                    placeholder="Votre adresse complète"
                    required
                    className="h-12"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Contact Information */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-foundation-bluenormal" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Informations de contact
                  </h3>
                  <p className="text-gray-600">
                    Comment pouvons-nous vous joindre ?
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Téléphone *
                  </label>
                  <Input
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    placeholder="+237 6XX XXX XXX"
                    required
                    className="h-12"
                  />
                </div>

                {/* Benefits Preview */}
                <div className="bg-gradient-to-r from-foundation-bluenormal/5 to-foundation-bluedarker/5 rounded-xl p-6 mt-8">
                  <h4 className="font-semibold text-foundation-bluenormal mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Vos avantages MASO
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-700">-35% frais hospitaliers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-700">-20% frais universitaires</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-red-600" />
                      <span className="text-sm text-gray-700">Tombola exclusive</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Identity & Confirmation */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-foundation-bluenormal" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Pièce d'identité
                  </h3>
                  <p className="text-gray-600">
                    Dernière étape pour finaliser votre adhésion
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Type de pièce d'identité *
                    </label>
                    <select
                      name="pieceIdentite"
                      value={formData.pieceIdentite}
                      onChange={handleInputChange}
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-foundation-bluenormal focus:border-transparent"
                      required
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="cni">Carte Nationale d'Identité</option>
                      <option value="passeport">Passeport</option>
                      <option value="carte-sejour">Carte de Séjour</option>
                      <option value="carte-refugie">Carte de Réfugié</option>
                      <option value="permis-conduire">Permis de Conduire</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Numéro de la pièce *
                    </label>
                    <Input
                      name="numeroPiece"
                      value={formData.numeroPiece}
                      onChange={handleInputChange}
                      placeholder="Numéro de votre pièce d'identité"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                {/* Upload de la pièce d'identité */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Photo de votre pièce d'identité *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-foundation-bluenormal transition-colors duration-200">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="identity-card-upload"
                      required
                    />
                    <label
                      htmlFor="identity-card-upload"
                      className="cursor-pointer flex flex-col items-center gap-3"
                    >
                      {formData.identityCard ? (
                        <div className="flex flex-col items-center gap-2">
                          <FileImage className="w-8 h-8 text-green-600" />
                          <p className="text-sm text-green-600 font-medium">
                            {formData.identityCard.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            Cliquez pour changer
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <Upload className="w-8 h-8 text-gray-400" />
                          <p className="text-sm text-gray-600">
                            Cliquez pour télécharger votre pièce d'identité
                          </p>
                          <p className="text-xs text-gray-500">
                            Formats acceptés: JPG, PNG, PDF (max 5MB)
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Conditions */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Conditions d'adhésion
                  </h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Pièce d'identité valide (CNI, Passeport, etc.)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>500 FCFA pour le carnet d'adhérent</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Cotisation: 100 FCFA/jour (26 000 FCFA/an)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="accepteConditions"
                    checked={formData.accepteConditions}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-foundation-bluenormal border-gray-300 rounded focus:ring-foundation-bluenormal"
                    required
                  />
                  <label className="text-sm text-gray-700">
                    J'accepte les conditions d'adhésion à la MASO et confirme que les informations fournies sont exactes. *
                  </label>
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
                  disabled={isSubmitting}
                  className="bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white flex items-center gap-2"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Finaliser l\'adhésion'}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
