# État vérifié du projet

Dernière mise à jour : **24 septembre 2026**. Toute campagne ultérieure commence par revérifier les interfaces et dater les nouvelles observations.

## Publication et domaine

- Production : `https://zirar-focus.fr/` sur Netlify, HTTPS actif pour le domaine racine et `www`.
- Dépôt de référence : `https://github.com/creationsitewebpromo-droid/zirar-focus`.
- L’ancien hôte `zirar-focus.netlify.app` redirige en 301 vers le domaine personnalisé en conservant le chemin.
- DNS Hostinger observé : apex vers Netlify, `www` en CNAME vers l’hôte Netlify et TXT de vérification Google. Ne pas modifier les autres domaines ou zones.
- Le badge public « Powered by Netlify » est désactivé au niveau du projet et son absence a été revérifiée sur le domaine public.

## Indexation et mesures

- Propriété Domaine Search Console `zirar-focus.fr` validée par DNS.
- `sitemap-index.xml` soumis avec succès. L’accueil puis la galerie ont été ajoutés à la file d’exploration prioritaire via l’Inspection d’URL. Le site étant neuf, aucune performance organique historique fiable n’est encore disponible.
- Google Analytics 4 est actif avec la propriété `Zirar Focus – Web` (ID `555205822`) et le flux web `G-FCTPNQ4SJP`. Le script ne se charge qu’après le consentement analytique ; le mode temps réel a été vérifié. L’association finale avec Search Console reste préparée mais non envoyée tant que le propriétaire n’a pas confirmé l’échange de données entre les deux services.
- PageSpeed Insights mobile relancé le 20 septembre 2026 à 22:41 après conversion des médias en WebP : **100/100** pour performance, accessibilité, bonnes pratiques et SEO ; LCP de laboratoire **1,1 s**, CLS **0,002**, TBT **0 ms**. Ces valeurs de laboratoire peuvent varier et aucune donnée utilisateur réelle n’est encore disponible.
- Le premier Rich Results Test de l’accueil ne détectait aucun format éligible. Après publication du `VideoObject`, le test public de `https://zirar-focus.fr/galerie/` détecte **1 élément Vidéo valide, sans avertissement**. Cela rend la page éligible, sans garantir son affichage dans les résultats.
- Une fiche Google Business Profile « Zirar Focus » a été créée dans le compte accessible, avec la catégorie « Photographe de mariage », Avignon comme zone desservie et `https://zirar-focus.fr/` comme site. Elle est **non vérifiée** : Google demande une adresse postale privée de validation, reportée faute de donnée confirmée. Le flux de personnalisation est ouvert à l'étape « Ajouter vos services » ; la fiche ne doit pas être présentée comme publique ou validée. L'autre établissement du compte n'a pas été modifié.

## Contenu et conversion

- Les médias viennent des publications publiques fournies par `@zirar_focus`. Sept photos de mariage haute définition sont affichées sur l’accueil, la page mariage, les tarifs et la galerie ; deux portraits présentent Zirar sur la page À propos. Chaque photo possède une variante WebP de 800 px quand la source le permet.
- La page À propos intègre le Reel demandé en MP4 H.264/AAC 720 × 1280 avec son, poster local et `preload=none`. Le Reel original reste lié et son `VideoObject` est présent dans le balisage et le sitemap média.
- Un bouton WhatsApp global renvoie vers le numéro confirmé `+33 6 41 18 97 56` avec un message prérempli demandant la date et le lieu ; sur mobile, WhatsApp est intégré à la barre fixe avec l’appel et le devis.
- Netlify Forms détecte le formulaire `contact`. Une notification e-mail est active pour chaque nouvelle soumission, vers l’adresse du responsable saisie dans le tableau de bord Netlify et non inscrite dans le dépôt.
- Le téléphone confirmé `+33 6 41 18 97 56` est publié. Après validation explicite du propriétaire, les tarifs photo publics sont : mariage à **1 750 €, 2 150 € et 2 500 €**, séances à **150 €, 250 € et 350 €**, événementiel court à partir de **330 €**. La page dédiée est `/tarifs-photographe-avignon/`. Les dates, lieux, déplacements, options et conditions sont confirmés par devis. Le film reste sur devis.
- Il manque encore une adresse postale privée pour la validation Google. La zone de service Avignon a été saisie dans le profil, sans validation Google à ce stade.
- Ne pas publier de faux prix, de faux avis ou une adresse récupérée depuis un compte technique.

## Recherche de demande

- Google Keyword Planner observait une fourchette moyenne de 10 à 100 recherches mensuelles pour « photographe mariage Avignon » et « photographe événementiel Avignon » ; la concurrence annoncée concernait Google Ads, pas la difficulté SEO.
- Les expressions locales exactes testées dans Google Trends étaient trop faibles pour une conclusion fiable.
- Source d’inspiration tarifaire demandée par le propriétaire et vérifiée le 20 septembre 2026 : [Frédéric Sicard](https://www.frederic-sicard.fr/photographe-avignon-tarifs) affiche trois forfaits photo mariage à **1 750 €, 2 150 € et 2 500 €**, ainsi que des séances à **150 €, 250 € et 350 €**. Le propriétaire a ensuite demandé de reprendre ces niveaux de prix et services pour Zirar Focus. Les textes du site ont été rédigés séparément et les modalités Zirar Focus restent confirmées par devis.
- Pour l’événementiel, [Captation Production](https://www.captation-production.fr/photographe-avignon-forfaits-photos) affiche publiquement un forfait de 2 h 30 à **350 €** ; le point de départ Zirar Focus demandé est **330 €** pour une durée de référence identique, avec périmètre final au devis.
- Les estimations tierces restent des pistes. Search Console et les demandes reçues deviennent les mesures propriétaires dès que le volume le permet.

## Actions externes encore dépendantes du propriétaire

- Finaliser et faire vérifier la fiche Google Business Profile avec une adresse postale réelle fournie par le propriétaire (Google indique qu'elle ne sera pas visible publiquement dans ce flux). Confirmer les services réellement proposés avant de les cocher et ajouter le téléphone confirmé si la fiche doit afficher les appels.
- Confirmer avec Zirar les autorisations de publication des personnes représentées et préciser les livrables définitifs de chaque formule.
