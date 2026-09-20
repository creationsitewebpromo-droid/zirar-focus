# État vérifié du projet

Dernière mise à jour : **20 septembre 2026**. Toute campagne ultérieure commence par revérifier les interfaces et dater les nouvelles observations.

## Publication et domaine

- Production : `https://zirar-focus.fr/` sur Netlify, HTTPS actif pour le domaine racine et `www`.
- Dépôt de référence : `https://github.com/creationsitewebpromo-droid/zirar-focus`.
- L’ancien hôte `zirar-focus.netlify.app` redirige en 301 vers le domaine personnalisé en conservant le chemin.
- DNS Hostinger observé : apex vers Netlify, `www` en CNAME vers l’hôte Netlify et TXT de vérification Google. Ne pas modifier les autres domaines ou zones.

## Indexation et mesures

- Propriété Domaine Search Console `zirar-focus.fr` validée par DNS.
- `sitemap-index.xml` soumis avec succès. L’accueil puis la galerie ont été ajoutés à la file d’exploration prioritaire via l’Inspection d’URL. Le site étant neuf, aucune performance organique historique fiable n’est encore disponible.
- PageSpeed de référence avant l’ajout de la vidéo : 100/100 en laboratoire sur mobile et ordinateur pour performance, accessibilité, bonnes pratiques et SEO. La vidéo locale utilise `preload="none"` ; refaire la mesure après son déploiement.
- Le premier Rich Results Test de l’accueil ne détectait aucun format éligible. Après publication du `VideoObject`, le test public de `https://zirar-focus.fr/galerie/` détecte **1 élément Vidéo valide, sans avertissement**. Cela rend la page éligible, sans garantir son affichage dans les résultats.
- Une fiche Google Business Profile « Zirar Focus » a été créée dans le compte accessible, avec la catégorie « Photographe de mariage », Avignon comme zone desservie et `https://zirar-focus.fr/` comme site. Elle est **non vérifiée** : Google demande une adresse postale privée de validation, reportée faute de donnée confirmée. Le flux de personnalisation est ouvert à l'étape « Ajouter vos services » ; la fiche ne doit pas être présentée comme publique ou validée. L'autre établissement du compte n'a pas été modifié.

## Contenu et conversion

- Les photos et la vidéo viennent des publications publiques de `@zirar_focus`. Quatre photos haute définition sont affichées dans les pages de conversion et la galerie. La vidéo 720p est chargée uniquement lorsque le visiteur la lance ; le Reel original reste lié pour la bande-son et la source.
- Netlify Forms détecte le formulaire `contact`. Une notification e-mail est active pour chaque nouvelle soumission, vers l’adresse du responsable saisie dans le tableau de bord Netlify et non inscrite dans le dépôt.
- Le téléphone confirmé `+33 6 41 18 97 56` est publié. Les tarifs photo demandés par le propriétaire sont affichés comme points de départ : mariage à **1 730 €, 2 130 € et 2 480 €**, événementiel court à **330 €** ; les durées, déplacements et livrables exacts sont confirmés par devis. Le film reste sur devis.
- Il manque encore une adresse postale privée pour la validation Google. La zone de service Avignon a été saisie dans le profil, sans validation Google à ce stade.
- Ne pas publier de faux prix, de faux avis ou une adresse récupérée depuis un compte technique.

## Recherche de demande

- Google Keyword Planner observait une fourchette moyenne de 10 à 100 recherches mensuelles pour « photographe mariage Avignon » et « photographe événementiel Avignon » ; la concurrence annoncée concernait Google Ads, pas la difficulté SEO.
- Les expressions locales exactes testées dans Google Trends étaient trop faibles pour une conclusion fiable.
- Source d’inspiration tarifaire demandée par le propriétaire et vérifiée le 20 septembre 2026 : [Frédéric Sicard](https://www.frederic-sicard.fr/photographe-avignon-tarifs) affiche trois forfaits photo mariage à **1 750 €, 2 150 € et 2 500 €**. Les points de départ Zirar Focus publiés sont inférieurs de 20 € à ces montants. La comparaison reste indicative car les livrables exacts doivent être confirmés dans chaque devis.
- Pour l’événementiel, [Captation Production](https://www.captation-production.fr/photographe-avignon-forfaits-photos) affiche publiquement un forfait de 2 h 30 à **350 €** ; le point de départ Zirar Focus demandé est **330 €** pour une durée de référence identique, avec périmètre final au devis.
- Les estimations tierces restent des pistes. Search Console et les demandes reçues deviennent les mesures propriétaires dès que le volume le permet.

## Actions externes encore dépendantes du propriétaire

- Finaliser et faire vérifier la fiche Google Business Profile avec une adresse postale réelle fournie par le propriétaire (Google indique qu'elle ne sera pas visible publiquement dans ce flux). Confirmer les services réellement proposés avant de les cocher et ajouter le téléphone confirmé si la fiche doit afficher les appels.
- Ajouter des reportages de mariage haute définition avec autorisation de publication et préciser les livrables définitifs de chaque formule.
