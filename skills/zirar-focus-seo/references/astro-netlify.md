# Mise en œuvre et vérification Astro + Netlify

## Architecture fondée sur l'intention

Prévoir l'accueil, une page principale « photographe mariage Avignon », une page film de mariage si les vidéos et livrables sont réels, une page événementiel si le service est effectivement proposé, portfolio/cas réels, à propos et contact. Une page tarifs n'affiche que les offres confirmées. Pour Vaucluse, Provence, Maroc ou d'autres villes, créer une URL distincte uniquement si la zone est réellement servie et si la page apporte des preuves locales et un contenu propre. Éviter les variantes de villes qui se répètent avec un nom de lieu changé.

Chaque page doit répondre vite : prestation, lieu réel, style, exemples, déroulé, livrables ou conditions, preuve de confiance et contact. Des galeries de mariages réels avec accord de publication et légendes utiles servent davantage qu'une masse de photos sans contexte. Prévoir les versions linguistiques uniquement si elles sont traduites et maintenues ; les liens `hreflang` doivent correspondre aux URLs effectivement disponibles.

## Vérifications dans le code et la réponse publiée

- `astro.config.*` : domaine `site` de production exact ; `@astrojs/sitemap` configuré si utilisé ; génération statique quand elle convient au projet.
- Page HTML rendue : une balise `title`, une description spécifique, un H1 cohérent, `lang`, canonical absolu vers la bonne URL, liens internes navigables, métadonnées Open Graph et image sociale pertinente.
- `robots.txt` et `sitemap.xml` accessibles ; aucune page essentielle bloquée par `noindex`, `robots.txt`, mot de passe ou canonical vers l'accueil ; ne pas inclure previews, erreurs et doublons dans le sitemap.
- Redirections Netlify : une version canonique du domaine (www ou non), HTTPS et chemins déplacés en 301 sans boucle. Les previews et déploiements de branche ne doivent pas être indexables ; vérifier leurs réponses HTTP et en-têtes au lieu de supposer une configuration par défaut.
- Images : fichiers originaux autorisés, formats adaptés, dimensions déclarées, `srcset`/tailles ou composant `Image`, chargement prioritaire de l'image principale, lazy loading des images hors écran, texte `alt` décrivant les scènes utiles. Prévoir des miniatures de galerie pour éviter de charger les originaux immédiatement.
- Formulaire : fonctionnement réel, validation, anti-spam raisonnable, politique de confidentialité appropriée, suivi de demande qui n'expose pas les données des clients dans le dépôt.

## Données structurées

Utiliser JSON-LD correspondant aux faits visibles : `Organization` ou `LocalBusiness` si la structure et la localisation sont établies, `BreadcrumbList` pour la navigation, `ImageObject`/`VideoObject` seulement si les informations requises sont présentes. Ne pas inventer adresse, horaires, tarifs, notes ou profils sociaux. Le type `LocalBusiness` seul ne fait pas apparaître automatiquement un extrait enrichi ; suivre la documentation Google du type choisi et tester l'URL publique. Vérifier les éventuels doublons de JSON-LD.

## Contrôle avant et après mise en ligne

Exécuter la build, ouvrir toutes les pages clés sur mobile, vérifier la navigation et les formulaires, faire un crawl et examiner le HTML livré. Après déploiement, vérifier canonical, sitemap, robots, réponses HTTP, Rich Results Test et PageSpeed sur les URLs de production. Soumettre le sitemap à GSC si la propriété est vérifiée ; utiliser Inspection de l'URL pour les pages essentielles. Documenter les résultats mesurés et les points en attente d'indexation. Refaire PageSpeed après chargement effectif des images et scripts de production.

## Sources

- [Astro : sitemap](https://docs.astro.build/fr/guides/integrations-guide/sitemap/)
- [Astro : images](https://docs.astro.build/en/guides/images/)
- [Netlify : en-têtes personnalisés](https://docs.netlify.com/manage/routing/headers/)
- [Google Search Central : guide SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google : données structurées LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business)
