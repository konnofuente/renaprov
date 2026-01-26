import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import frCommon from './locales/fr/common.json';
import frHeader from './locales/fr/header.json';
import frFooter from './locales/fr/footer.json';
import frServices from './locales/fr/services.json';
import frHome from './locales/fr/home.json';
import frAbout from './locales/fr/about.json';
import frMission from './locales/fr/mission.json';
import frProducts from './locales/fr/products.json';
import frMaso from './locales/fr/maso.json';
import frRenews from './locales/fr/renews.json';
import frContact from './locales/fr/contact.json';
import frNotFound from './locales/fr/notfound.json';
import frForms from './locales/fr/forms.json';

import enCommon from './locales/en/common.json';
import enHeader from './locales/en/header.json';
import enFooter from './locales/en/footer.json';
import enServices from './locales/en/services.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enMission from './locales/en/mission.json';
import enProducts from './locales/en/products.json';
import enMaso from './locales/en/maso.json';
import enRenews from './locales/en/renews.json';
import enContact from './locales/en/contact.json';
import enNotFound from './locales/en/notfound.json';
import enForms from './locales/en/forms.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        common: frCommon,
        header: frHeader,
        footer: frFooter,
        services: frServices,
        home: frHome,
        about: frAbout,
        mission: frMission,
        products: frProducts,
        maso: frMaso,
        renews: frRenews,
        contact: frContact,
        notfound: frNotFound,
        forms: frForms,
      },
      en: {
        common: enCommon,
        header: enHeader,
        footer: enFooter,
        services: enServices,
        home: enHome,
        about: enAbout,
        mission: enMission,
        products: enProducts,
        maso: enMaso,
        renews: enRenews,
        contact: enContact,
        notfound: enNotFound,
        forms: enForms,
      },
    },
    fallbackLng: 'fr',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // React already escapes
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
  });

// Update HTML lang attribute when language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

// Set initial lang attribute
if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language;
}

export default i18n;
