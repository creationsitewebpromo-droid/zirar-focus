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

Le formulaire de contact utilise Netlify Forms. Vérifier après publication que la détection de formulaires est active et configurer les notifications dans Netlify. Aucune adresse e-mail professionnelle n’est inscrite dans le code.

## Contenu et SEO

Les visuels de la galerie proviennent des publications publiques du compte [@zirar_focus](https://www.instagram.com/zirar_focus/) ; ils illustrent des événements, spectacles et portraits. Un extrait visuel 720p du Reel est hébergé localement et chargé uniquement à la demande ; le lien vers la publication originale permet de retrouver sa bande-son et sa source. Le logo SVG a été redessiné d’après le monogramme du profil. Ajouter des photos de mariages haute résolution et les coordonnées commerciales confirmées avant d’étendre le portfolio ou la fiche Google.

Le guide de travail SEO propre à ce projet est dans [`skills/zirar-focus-seo/SKILL.md`](skills/zirar-focus-seo/SKILL.md). Les prix, avis, résultats Google et classements ne doivent pas être inventés.
