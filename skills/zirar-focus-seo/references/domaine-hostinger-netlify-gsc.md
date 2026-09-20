# Domaine Hostinger vers Netlify et migration Search Console

Cette procédure conserve les serveurs DNS chez Hostinger et ne modifie que les enregistrements web nécessaires pour servir le site Netlify. Elle évite d'interrompre les courriels et transfère les signaux de l'URL `netlify.app` si celle-ci a déjà été indexée.

## 1. Relever l'état avant toute modification

1. Confirmer le domaine exact, le projet Netlify exact, son URL `https://<site>.netlify.app` et le domaine principal souhaité. Avec un DNS externe, Netlify recommande `www` comme domaine principal ; si l'apex est choisi, consigner ce choix et l'appliquer partout.
2. Vérifier quels serveurs de noms sont autoritaires. Si le domaine utilise les nameservers Hostinger, modifier la zone dans **hPanel → Domains → Domain portfolio → Manage → DNS / Nameservers**. Si les nameservers pointent ailleurs, utiliser ce fournisseur DNS et ne pas modifier une zone Hostinger inactive.
3. Exporter ou capturer la zone complète et noter TTL, type, hôte, cible et priorité. Conserver en particulier :
   - tous les `MX` ;
   - tous les `TXT`, dont SPF, DKIM, DMARC et vérifications de services ;
   - les `SRV`, sous-domaines métier et éventuels `CAA` ;
   - les anciennes valeurs web de `@` et `www` nécessaires à un retour arrière.
4. Vérifier l'envoi et la réception de courriels avant le changement. Ne changer ni les nameservers, ni les MX/TXT pour un simple raccordement web. Ne jamais publier dans Git un jeton de vérification, un export DNS client, une adresse électronique privée ou un identifiant de compte.
5. Si Hostinger CDN est actif, vérifier sa configuration avant de toucher `@` ou `www` : Hostinger indique qu'il peut créer ou verrouiller des enregistrements ALIAS/CNAME. Le désactiver complètement si l'éditeur l'exige, sans supprimer les enregistrements de messagerie.

## 2. Obtenir les cibles depuis le projet Netlify

1. Dans le bon projet, ouvrir **Domain management → Production domains → Add a domain** et ajouter le domaine personnalisé.
2. Netlify ajoute normalement l'apex et `www`. Définir le domaine principal retenu ; l'autre variante doit rediriger vers lui.
3. Ouvrir **Pending DNS verification** et relever les cibles affichées pour ce projet et ce réseau. Ces valeurs sont la source de vérité. Une offre High-Performance Edge utilise des cibles particulières.
4. Pour l'apex, préférer l'ALIAS, l'ANAME ou le CNAME aplati vers la cible affichée par Netlify si Hostinger et la configuration du projet le permettent. La cible standard documentée est `apex-loadbalancer.netlify.com`, mais la valeur du panneau Netlify prime.
5. N'utiliser le repli `A @ → 75.2.60.5` que si **Pending DNS verification** confirme cette adresse pour le projet et si le mode ALIAS/ANAME/CNAME aplati n'est pas disponible. Ne jamais appliquer cette IP de mémoire.
6. Pour `www`, utiliser le CNAME exact affiché par Netlify, généralement `<site>.netlify.app`.

Sources : [DNS externe Netlify](https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/) et [gestion apex / www](https://docs.netlify.com/domains/manage-domains/manage-multiple-domains/).

## 3. Modifier uniquement le routage web dans Hostinger

Dans la zone DNS active :

1. Repérer les enregistrements existants de `@` et `www`. Supprimer ou remplacer uniquement les `A`, `AAAA`, ALIAS ou CNAME qui envoient ces deux hôtes vers l'ancien hébergement et qui entreraient en conflit avec les valeurs Netlify.
2. Ne pas supprimer globalement les `AAAA` : retirer seulement les anciens `AAAA` web de `@` ou `www` qui contredisent la cible standard Netlify. Ne toucher à aucun sous-domaine de messagerie.
3. Créer l'enregistrement apex fourni par Netlify :
   - option préférée : ALIAS/ANAME/CNAME aplati, hôte `@`, cible lue dans Netlify ;
   - repli confirmé : A, hôte `@`, cible `75.2.60.5` uniquement après confirmation dans Netlify.
4. Créer `CNAME www → <cible Netlify affichée>`.
5. Relire la zone avant d'enregistrer : les MX, TXT, DKIM, DMARC, SPF, SRV et sous-domaines qui ne concernent pas le site doivent être identiques au relevé initial. Plusieurs TXT au même hôte sont normaux ; ne pas en écraser un pour ajouter la vérification Search Console.
6. Enregistrer, puis attendre la propagation. Hostinger et Netlify indiquent qu'elle peut prendre jusqu'à 24 heures dans leurs guides détaillés.

Sources : [éditeur DNS Hostinger](https://support.hostinger.com/en/articles/1583249-how-to-manage-dns-records-at-hostinger), [A et conflits A/AAAA](https://support.hostinger.com/en/articles/4468886-how-to-manage-a-records), [CNAME Hostinger](https://support.hostinger.com/en/articles/4738777-how-to-manage-cname-records), [ALIAS Hostinger](https://support.hostinger.com/en/articles/10067986-how-to-manage-alias-records).

## 4. Valider DNS et HTTPS

1. Interroger publiquement l'apex (`A` ou ALIAS aplati), `www` (`CNAME`), les `MX` et les TXT de messagerie. Comparer plusieurs résolveurs si la propagation est partielle.
2. Dans Netlify, attendre que **Pending DNS verification** disparaisse puis ouvrir **Domain management → HTTPS**. Netlify provisionne automatiquement un certificat Let's Encrypt après validation DNS.
3. Tester `http` et `https` sur apex et `www`. Une seule variante doit rendre un `200` ; les autres doivent effectuer une redirection permanente directe vers le même chemin sur le domaine principal.
4. Tester le certificat, l'accueil, une page interne, les ressources et le formulaire. Tester aussi l'envoi et la réception de courriels.
5. Si le certificat reste bloqué, chercher d'abord : ancienne valeur `A` ou `AAAA`, plusieurs `A` concurrents, propagation incomplète, DNSSEC incohérent ou `CAA` qui n'autorise pas Let's Encrypt. Ne supprimer un `CAA` qu'après l'avoir relevé et compris ; l'ajuster explicitement est préférable.

Sources : [HTTPS géré par Netlify](https://docs.netlify.com/manage/domains/secure-domains-with-https/https-ssl/) et [diagnostic SSL Netlify](https://docs.netlify.com/manage/domains/troubleshooting/troubleshoot-ssl-and-https/).

## 5. Basculer les URLs du site

1. Mettre le domaine principal HTTPS dans `site` d'`astro.config.*` et reconstruire le site.
2. Vérifier dans le HTML produit que canonical, Open Graph, données structurées, sitemap, `robots.txt`, liens internes et éventuels `hreflang` utilisent le domaine personnalisé.
3. Le sitemap ne doit contenir que les URLs finales du domaine personnalisé. Ne pas référencer les URLs de preview, de déploiement atomique ou `netlify.app`.
4. Ajouter une redirection permanente qui conserve les chemins depuis l'ancienne URL de production Netlify. Exemple dans `public/_redirects`, en remplaçant les deux hôtes :

   ```text
   https://<site>.netlify.app/*  https://<domaine-principal>/:splat  301!
   ```

5. Déployer puis vérifier plusieurs chemins et une URL avec paramètres. Une ancienne page doit arriver directement sur sa page équivalente, jamais toutes les pages sur l'accueil et jamais par une chaîne de redirections.

Source : [redirections par domaine Netlify](https://docs.netlify.com/manage/routing/redirects/redirect-options/#domain-level-redirects).

## 6. Migrer Google Search Console

L'état relevé le 20 septembre 2026 indiquait qu'aucune propriété du projet n'était présente dans le compte Search Console consulté. Revérifier avant d'agir.

### Si `netlify.app` a été public ou indexé

1. Avant la redirection si possible, ajouter dans le même compte Google :
   - une propriété URL-prefix pour `https://<site>.netlify.app/`, vérifiée par balise HTML ou fichier puisque le DNS `netlify.app` ne vous appartient pas ;
   - une propriété Domain pour le domaine personnalisé, vérifiée avec le TXT exact fourni par Search Console dans la zone Hostinger.
2. Ajouter le TXT GSC sans remplacer les TXT SPF, DKIM, DMARC ou autres. Garder les deux méthodes de vérification actives durant la migration.
3. Vérifier la correspondance URL à URL, les canonical vers le nouveau domaine, l'absence de `noindex` et le libre accès de Googlebot au nouveau site.
4. Activer les 301 depuis chaque URL `netlify.app` vers son équivalent, puis les tester avec l'Inspection d'URL et une vérification HTTP indépendante.
5. Depuis l'ancienne propriété, ouvrir **Settings → Change of Address**, choisir la nouvelle propriété et exécuter les contrôles. Google exige que le même compte soit propriétaire des deux propriétés et que les redirections soient déjà en place.
6. Soumettre le nouveau sitemap dans la nouvelle propriété. Inspecter et demander l'indexation de l'accueil et des principales pages de service.
7. Conserver les redirections au moins un an, mettre à jour les liens contrôlés (Instagram, fiche locale, partenaires) et surveiller indexation, clics et erreurs sur les deux propriétés. Des fluctuations temporaires sont normales.

### Si `netlify.app` n'a jamais été indexé

Créer et vérifier la propriété Domain du domaine personnalisé, soumettre son sitemap et inspecter les pages principales. Garder la 301 depuis `netlify.app` pour empêcher un doublon futur ; l'outil Change of Address n'apporte aucun ancien signal s'il n'existe aucune ancienne présence à transférer.

Sources : [guide Google des migrations avec changement d'URL](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), [outil Change of Address](https://support.google.com/webmasters/answer/9370220?hl=fr), [vérification de propriété](https://support.google.com/webmasters/answer/9008080?hl=fr) et [rapport Sitemaps](https://support.google.com/webmasters/answer/7451001?hl=fr).

## 7. Critères de fin et retour arrière

La bascule est terminée quand : DNS apex et `www` répondent comme prévu, HTTPS est valide sur les deux, une seule variante rend le contenu, toutes les anciennes URLs testées font une 301 directe, le sitemap final est lisible, la propriété GSC est vérifiée et le courriel fonctionne toujours.

Si le site ou le courriel casse, arrêter les changements, comparer la zone au relevé initial et restaurer uniquement les enregistrements modifiés. Ne pas restaurer une zone entière sans vérifier qu'aucune modification légitime plus récente ne serait écrasée.
