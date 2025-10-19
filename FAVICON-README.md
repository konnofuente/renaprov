# Favicon RENAPROV

## Description
Favicon personnalisé pour le site RENAPROV FINANCE SA, conçu avec l'identité visuelle de l'entreprise.

## Design
- **Couleurs** : Dégradé bleu (#00ACEE vers #011B26) - couleurs officielles RENAPROV
- **Élément principal** : Lettre "R" stylisée en blanc
- **Accents** : Points décoratifs pour l'élégance
- **Style** : Moderne, professionnel, lisible à toutes les tailles

## Fichiers générés

### Formats disponibles
- `favicon.svg` - Version vectorielle (recommandée pour les navigateurs modernes)
- `favicon.ico` - Format traditionnel (compatible tous navigateurs)
- `favicon-16x16.png` - Version 16x16 pixels
- `favicon-32x32.png` - Version 32x32 pixels
- `apple-touch-icon.png` - Version 180x180 pour iOS
- `site.webmanifest` - Manifest PWA

### Intégration
Les favicons sont automatiquement référencés dans `index.html` :
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
```

## Compatibilité
- ✅ Chrome, Firefox, Safari, Edge (toutes versions récentes)
- ✅ iOS Safari, Android Chrome
- ✅ PWA (Progressive Web App)
- ✅ Rétrocompatibilité avec les anciens navigateurs

## Maintenance
Pour régénérer les favicons :
1. Modifier `public/favicon.svg`
2. Exécuter le script de génération (si nécessaire)
3. Tester sur différents navigateurs

## Notes techniques
- Le favicon SVG utilise un dégradé CSS pour un rendu optimal
- Les versions PNG sont générées avec Sharp pour une qualité optimale
- Le fichier ICO combine les tailles 16x16 et 32x32
- Le manifest PWA permet l'installation sur mobile
