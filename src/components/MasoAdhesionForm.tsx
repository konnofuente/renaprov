import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
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
  const { t } = useTranslation("forms");
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
    
    try {
      // Get ID type label
      const idTypeLabel = formData.pieceIdentite 
        ? t(`masoAdhesion.idOptions.${formData.pieceIdentite}` as 'cni' | 'passeport' | 'carte-sejour' | 'carte-refugie' | 'permis-conduire')
        : 'Non spécifié';
      
      // Create email subject
      const subject = encodeURIComponent(`Demande d'adhésion MASO - ${formData.prenom} ${formData.nom}`);
      
      // Create email body with all form data
      const body = encodeURIComponent(`
DEMANDE D'ADHÉSION MASO

═══════════════════════════════════════════════════════
INFORMATIONS PERSONNELLES
═══════════════════════════════════════════════════════
Nom: ${formData.nom}
Prénom: ${formData.prenom}
Date de naissance: ${formData.dateNaissance}
Adresse complète: ${formData.adresse}

═══════════════════════════════════════════════════════
INFORMATIONS DE CONTACT
═══════════════════════════════════════════════════════
Email: ${formData.email}
Téléphone: ${formData.telephone}

═══════════════════════════════════════════════════════
PIÈCE D'IDENTITÉ
═══════════════════════════════════════════════════════
Type de pièce d'identité: ${idTypeLabel}
Numéro de la pièce: ${formData.numeroPiece}
Photo de la pièce d'identité: ${formData.identityCard ? formData.identityCard.name : 'Non téléchargée'}

═══════════════════════════════════════════════════════
NOTE: La photo de la pièce d'identité doit être envoyée séparément en pièce jointe si nécessaire.
═══════════════════════════════════════════════════════
      `);
      
      // Create mailto link
      const mailtoLink = `mailto:stephaniebissai@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message after a short delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 500);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setIsSubmitting(false);
      alert(t("masoAdhesion.error"));
    }
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
            {t("masoAdhesion.successTitle")}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {t("masoAdhesion.successMessage")}
          </p>
          <Button
            onClick={handleClose}
            className="bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white w-full"
          >
            {t("masoAdhesion.close")}
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
              <span className="text-sm text-gray-600">{t("masoAdhesion.stepOf", { current: currentStep, total: totalSteps })}</span>
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
                    {t("masoAdhesion.step1")}
                  </h3>
                  <p className="text-gray-600">
                    {t("masoAdhesion.step1Subtitle")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      {t("masoAdhesion.lastName")} *
                    </label>
                    <Input
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      placeholder={t("masoAdhesion.placeholders.lastName")}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      {t("masoAdhesion.firstName")} *
                    </label>
                    <Input
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      placeholder={t("masoAdhesion.placeholders.firstName")}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {t("masoAdhesion.birthDate")} *
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
                    {t("masoAdhesion.fullAddress")} *
                  </label>
                  <Input
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleInputChange}
                    placeholder={t("masoAdhesion.placeholders.fullAddress")}
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
                    {t("masoAdhesion.step2")}
                  </h3>
                  <p className="text-gray-600">
                    {t("masoAdhesion.step2Subtitle")}
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {t("masoAdhesion.email")} *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("masoAdhesion.placeholders.email")}
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
                    {t("masoAdhesion.benefitsTitle")}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-700">{t("masoAdhesion.benefit1")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-700">{t("masoAdhesion.benefit2")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-red-600" />
                      <span className="text-sm text-gray-700">{t("masoAdhesion.benefit3")}</span>
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
                    {t("masoAdhesion.step3")}
                  </h3>
                  <p className="text-gray-600">
                    {t("masoAdhesion.step3Subtitle")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      {t("masoAdhesion.idTypeLabel")}
                    </label>
                    <select
                      name="pieceIdentite"
                      value={formData.pieceIdentite}
                      onChange={handleInputChange}
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-foundation-bluenormal focus:border-transparent"
                      required
                    >
                      <option value="">{t("masoAdhesion.idSelectPlaceholder")}</option>
                      <option value="cni">{t("masoAdhesion.idOptions.cni")}</option>
                      <option value="passeport">{t("masoAdhesion.idOptions.passeport")}</option>
                      <option value="carte-sejour">{t("masoAdhesion.idOptions.carte-sejour")}</option>
                      <option value="carte-refugie">{t("masoAdhesion.idOptions.carte-refugie")}</option>
                      <option value="permis-conduire">{t("masoAdhesion.idOptions.permis-conduire")}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      {t("masoAdhesion.idNumberLabel")}
                    </label>
                    <Input
                      name="numeroPiece"
                      value={formData.numeroPiece}
                      onChange={handleInputChange}
                      placeholder={t("masoAdhesion.placeholders.idNumber")}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                {/* Upload de la pièce d'identité */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {t("masoAdhesion.idPhotoLabel")}
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
                            {t("masoAdhesion.clickToChange")}
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <Upload className="w-8 h-8 text-gray-400" />
                          <p className="text-sm text-gray-600">
                            {t("masoAdhesion.clickToUpload")}
                          </p>
                          <p className="text-xs text-gray-500">
                            {t("masoAdhesion.formatsAccepted")}
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Conditions */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    {t("masoAdhesion.conditionsTitle")}
                  </h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{t("masoAdhesion.condition1")}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{t("masoAdhesion.condition2")}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{t("masoAdhesion.condition3")}</span>
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
                    {t("masoAdhesion.acceptCheckbox")}
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
                {t("masoAdhesion.previous")}
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
                  {t("masoAdhesion.next")}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white flex items-center gap-2"
                >
                  {isSubmitting ? t("masoAdhesion.submitting") : t("masoAdhesion.submitButton")}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
