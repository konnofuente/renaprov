import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, User, Mail, Phone, MapPin, Calendar, FileText } from 'lucide-react';

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
}

export const MasoAdhesionForm: React.FC = () => {
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
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8">
        <Card className="text-center">
          <CardContent className="pt-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foundation-bluenormal mb-4">
              Demande d'adhésion envoyée !
            </h3>
            <p className="text-gray-600 mb-6">
              Votre demande d'adhésion à la MASO a été transmise avec succès. 
              Notre équipe vous contactera dans les plus brefs délais pour finaliser votre inscription.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white"
            >
              Nouvelle demande
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-foundation-bluenormal mb-2">
            Formulaire d'Adhésion MASO
          </CardTitle>
          <p className="text-gray-600">
            Rejoignez la communauté solidaire MASO et bénéficiez de nos avantages exclusifs
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Informations personnelles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <User className="w-4 h-4" />
                  Nom *
                </label>
                <Input
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  placeholder="Votre nom"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <User className="w-4 h-4" />
                  Prénom *
                </label>
                <Input
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  placeholder="Votre prénom"
                  required
                />
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Mail className="w-4 h-4" />
                  Email *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="votre@email.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Phone className="w-4 h-4" />
                  Téléphone *
                </label>
                <Input
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  placeholder="+237 6XX XXX XXX"
                  required
                />
              </div>
            </div>

            {/* Adresse */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <MapPin className="w-4 h-4" />
                Adresse complète *
              </label>
              <Input
                name="adresse"
                value={formData.adresse}
                onChange={handleInputChange}
                placeholder="Votre adresse complète"
                required
              />
            </div>

            {/* Date de naissance */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Calendar className="w-4 h-4" />
                Date de naissance *
              </label>
              <Input
                name="dateNaissance"
                type="date"
                value={formData.dateNaissance}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Pièce d'identité */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <FileText className="w-4 h-4" />
                  Type de pièce d'identité *
                </label>
                <select
                  name="pieceIdentite"
                  value={formData.pieceIdentite}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-foundation-bluenormal"
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
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <FileText className="w-4 h-4" />
                  Numéro de la pièce *
                </label>
                <Input
                  name="numeroPiece"
                  value={formData.numeroPiece}
                  onChange={handleInputChange}
                  placeholder="Numéro de votre pièce d'identité"
                  required
                />
              </div>
            </div>

            {/* Conditions d'acceptation */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="accepteConditions"
                  checked={formData.accepteConditions}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-foundation-bluenormal border-gray-300 rounded focus:ring-foundation-bluenormal"
                  required
                />
                <label className="text-sm text-gray-700">
                  J'accepte les conditions d'adhésion à la MASO et confirme que les informations fournies sont exactes. *
                </label>
              </div>
            </div>

            {/* Bouton de soumission */}
            <div className="text-center pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-foundation-bluenormal hover:bg-foundation-bluedark-hover text-white px-8 py-3 text-lg font-semibold"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Remplir le formulaire d\'adhésion'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
