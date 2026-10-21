# WoodZ Kebab House Illkirch — état et reste à faire

## Fait

- Projet Next.js 16.4.2 (App Router, `app/` à la racine, CSS natif, sans Tailwind), même stack que FreshTea-m.
- Structure calquée sur le site mère woodz-kebab-house.fr :
  - `/` : page de la marque avec les 3 adresses (cartes restaurant avec statut ouvert/fermé en direct), signatures, concept.
  - `/illkirch`, `/selestat`, `/colmar-houssen` : une page par restaurant (hero, carte complète, infos & horaires, autres restaurants), rendue par `app/components/RestaurantPage.tsx`.
- Données :
  - `app/lib/restaurants.ts` : adresse, téléphone, horaires, photos et SEO de chaque restaurant. Ajouter un restaurant = ajouter une entrée + un dossier `app/<slug>/page.tsx`.
  - `app/lib/menu.ts` : carte et prix 2025 (identiques dans les 3 restaurants).
- Images détourées de chaque plat (menus, assiettes, box, menus enfant) à côté du nom dans la carte : `public/images/carte/`, découpées du panneau `carte-woodz-2025.png` (fond noir retiré, pastilles de prix effacées puis reconstruites).
- Itinéraires construits depuis l’adresse de chaque restaurant : les pages officielles pointent toutes vers la même fiche Google Maps (celle de Sélestat).
- Thème noir + rouge (`#e31e24`), polices Rye (titres) + DM Sans.
- SEO : metadata par page, Open Graph, JSON-LD `Organization` (home) et `Restaurant` (chaque restaurant, avec horaires), robots.txt, sitemap.xml.
- En-têtes de sécurité, favicon et icône Apple (le « Z » rouge du logo).
- `npm run lint` et `npm run build` passent ; toutes les pages vérifiées en 390 px et 1440 px.

## Reste à faire

### Contenu à valider avec le client
- [ ] Les « Menus » (Le Wood’Z 15,50 €, etc.) sont présentés comme « sandwich, frites et boisson » d’après les photos du panneau : faire confirmer.
- [ ] Horaires du dimanche : Illkirch et Houssen 17h – 21h, Sélestat fermé (d’après les listes du site ; les textes n’en parlent pas).
- [ ] Mention « Viande halal » : reprise du badge de la carte, à confirmer.
- [ ] Pas d’avis clients : le widget Google du site officiel affiche ceux de Sélestat sur les 3 pages. Récupérer les fiches Google de chaque restaurant (avis + lien « Laisser un avis »).
- [ ] Photos supplémentaires de chaque restaurant (intérieur, équipe, plats). Les photos actuelles sont petites (680 px pour Illkirch et Houssen).
- [ ] Images des sandwichs seuls (la carte n’a que les visuels « menu » avec canette et frites, donc la rubrique Sandwichs n’a pas d’images).

### Médias
- [ ] Les 4 vidéos du site officiel (`frites-croustillantes.mp4`, `pain-artisanal.mp4`, `salade.mp4`, `viande-boeuf-artisanale.mp4`) sont des aperçus iStock filigranés : NE PAS les utiliser. Les autres vidéos de la médiathèque (`woodz-kebab-house-1.mp4`, `woodz-doner-kebab-house-background.mp4`) ressemblent à des banques d’images (wrap, sachet d’une autre marque) : à vérifier avant usage. Demander au client des vidéos à lui (ou acheter les licences) pour une vidéo de hero.
- [ ] Convertir les JPG en WebP/AVIF si besoin (next/image optimise déjà à la volée).

### Technique / mise en ligne
- [ ] Choisir le domaine puis définir `NEXT_PUBLIC_SITE_URL` sur Vercel (utilisé par `metadataBase` et le JSON-LD ; défaut `http://localhost:3000`).
- [ ] Déployer sur Vercel (`vercel.json` déjà présent).
- [x] `app/robots.ts` et `app/sitemap.ts`.
- [x] En-têtes de sécurité dans `next.config.ts` (repris de FreshTea-m).
- [ ] Pages légales : mentions légales et politique de confidentialité (infos de la société à demander).
- [x] Icônes : `app/icon.png` (512 px) et `app/apple-icon.png` (180 px), le « Z » rouge du logo sur fond noir.

## Lancer en local

```bash
npm install
npm run dev
```
