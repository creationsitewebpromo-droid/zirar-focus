# Zirar Focus

Site vitrine Astro de Zirar Focus, photographe et vidéaste de mariage et d’événements à Avignon, en France, au Maroc et à l’international.

## Développement

```bash
npm install
npm run dev
npm run check
npm run build
```

Le site statique est généré dans `dist/`. `astro.config.mjs` utilise `PUBLIC_SITE_URL`, puis `https://zirar-focus.fr` comme domaine canonique pour les métadonnées et le sitemap.

## Déploiement Netlify

Le fichier `netlify.toml` définit `npm run build` et `dist` comme répertoire publié. Pour un déploiement manuel, téléverser **le contenu construit de `dist/`** sur Netlify, pas les sources Astro. Pour un déploiement continu, relier ce dépôt GitHub à un nouveau projet Netlify avec les mêmes paramètres.

Le formulaire de contact utilise Netlify Forms. La détection est active et une notification est configurée dans le tableau de bord Netlify pour chaque nouvelle demande. L’adresse destinataire reste hors du dépôt.

## Contenu et SEO

Les visuels de la galerie proviennent des publications publiques du compte [@zirar_focus](https://www.instagram.com/zirar_focus/) ; quatre versions haute définition sont affichées sur le site. Un extrait visuel 720p du Reel est hébergé localement et chargé uniquement à la demande ; le lien vers la publication originale permet de retrouver sa bande-son et sa source. Le logo visible reprend l’image du profil. Le téléphone commercial confirmé est publié dans l’en-tête, le pied de page et la page de contact.

La page `/tarifs-photographe-avignon/` centralise les offres mariage, séance et événement avec des liens vers un formulaire prérempli. Le fichier `public/llms.txt`, les données structurées, le sitemap et le maillage interne rendent les informations commerciales plus faciles à comprendre pour les moteurs de recherche et les assistants, sans garantir un classement.

Le guide de travail SEO propre à ce projet est dans [`skills/zirar-focus-seo/SKILL.md`](skills/zirar-focus-seo/SKILL.md). Les prix, avis, résultats Google et classements ne doivent pas être inventés.
