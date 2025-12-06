import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "RENAPROV - Microfinance de Confiance au Cameroun",
  description = "RENAPROV FINANCE SA - Institution de microfinance au Cameroun. Services financiers accessibles, épargne, crédits, inclusion financière. Devenez propriétaire avec MASO, épargnez avec ORA.",
  keywords = "microfinance, Cameroun, épargne, crédit, inclusion financière, RENAPROV, MASO, ORA, compte courant, compte épargne, finance, Yaoundé, Douala",
  image = "/og-image.jpg",
  url = "https://renaprov.cm",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="RENAPROV FINANCE SA" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="fr" />
      <meta name="revisit-after" content="7 days" />
      
      {/* CamaireTech Developer Credits - SEO Backlinks */}
      <meta name="generator" content="CamaireTech - Innovative IT and Branding Solutions" />
      <meta name="designer" content="CamaireTech" />
      <link rel="dns-prefetch" href="https://camairetech.com" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="RENAPROV FINANCE SA" />
      <meta property="og:locale" content="fr_CM" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#00ACEE" />
      <meta name="msapplication-TileColor" content="#00ACEE" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="RENAPROV" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "RENAPROV FINANCE SA",
          "alternateName": "Réserve Nationale de l'Epargne et de la Provision",
          "description": "Institution de microfinance au Cameroun offrant des services financiers accessibles",
          "url": url,
          "logo": image,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "CM",
            "addressRegion": "Centre",
            "addressLocality": "Yaoundé"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["French"]
          },
          "serviceType": [
            "Microfinance",
            "Épargne",
            "Crédit",
            "Inclusion Financière"
          ],
          "areaServed": {
            "@type": "Country",
            "name": "Cameroon"
          }
        })}
      </script>
      
      {/* Structured Data for Developer/Creator - CamaireTech SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "RENAPROV FINANCE SA",
          "url": url,
          "creator": {
            "@type": "Organization",
            "name": "CamaireTech",
            "url": "https://camairetech.com",
            "description": "Innovative IT and Branding Solutions for Your Business"
          },
          "developer": {
            "@type": "Organization",
            "name": "CamaireTech",
            "url": "https://camairetech.com",
            "sameAs": [
              "https://camairetech.com"
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

