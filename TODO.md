# WoodZ Kebab House Illkirch — état et reste à faire

## Fait

- Projet Next.js 16.4.2 (App Router, `app/` à la racine, CSS natif, sans Tailwind), même stack que FreshTea-m.
- Page vitrine unique `app/page.tsx` : hero, bandeau qualité, signatures (Le Wood’Z, Döner Simple, Alaturka), carte complète, concept, infos & horaires, autres restaurants WoodZ, footer, barre d’actions mobile (Appeler / Itinéraire / Carte).
- Thème noir + rouge (`#e31e24`), polices Rye (titres, rappel du logo western) + DM Sans.
- Données :
  - `app/lib/menu.ts` : carte et prix transcrits depuis le panneau « menu-woodz-2025 » du site officiel.
  - `app/lib/site.ts` : adresse, téléphone, horaires, liens, autres restaurants.
- Statut « Ouvert / Fermé » en direct (heure de Paris) et jour courant surligné dans les horaires (`app/components/OpenStatus.tsx`, `HoursTable.tsx`, `useParisNow.ts`).
- SEO : metadata, Open Graph, JSON-LD `Restaurant` avec horaires.
- Visuels récupérés depuis woodz-kebab-house.fr dans `public/images/` (logo, 3 photos sandwichs, photo du chalet Illkirch, plateau, carte originale, badges halal / qualité).
- `npm run lint` et `npm run build` passent.

## Reste à faire

### Vérifications visuelles
- [x] Mobile (390 px) et desktop (1440 px) vérifiés : aucun débordement horizontal, aucune erreur console.
- [x] Photos signatures en 3/2, statut « Ouvert » coloré dans le bloc Infos, pastille « 2 au choix » sur la ligne du nom.
- [x] Hero : photo recadrée (`70% 30%` desktop, `38%` mobile) et voile plus sombre sur mobile pour que le titre reste lisible.

### Contenu à valider avec le client
- [ ] Les « Menus » (Le Wood’Z 15,50 €, etc.) sont présentés comme « sandwich, frites et boisson » d’après les photos du panneau : faire confirmer.
- [ ] Horaires du dimanche (17h – 21h d’après la liste du site, mais le texte du site n’en parle pas).
- [ ] Mention « Viande halal » : reprise du badge de la carte, à confirmer.
- [ ] Pas d’avis clients : le widget Google du site officiel affiche ceux de Sélestat, pas d’Illkirch. Récupérer les vrais avis Illkirch (ou lien « Laisser un avis » avec le place ID Illkirch).
- [ ] Photos supplémentaires propres à Illkirch (intérieur, équipe, plats) si le client en a.

### Médias
- [ ] Les 4 vidéos du site officiel (`frites-croustillantes.mp4`, `pain-artisanal.mp4`, `salade.mp4`, `viande-boeuf-artisanale.mp4`) sont des aperçus iStock filigranés : NE PAS les utiliser. Demander au client des vidéos à lui (ou acheter les licences) pour une vidéo de hero.
- [ ] Convertir les JPG en WebP/AVIF si besoin (next/image optimise déjà à la volée).

### Technique / mise en ligne
- [ ] Choisir le domaine puis définir `NEXT_PUBLIC_SITE_URL` sur Vercel (utilisé par `metadataBase` et le JSON-LD ; défaut `http://localhost:3000`).
- [ ] Déployer sur Vercel (`vercel.json` déjà présent).
- [x] `app/robots.ts` et `app/sitemap.ts`.
- [x] En-têtes de sécurité dans `next.config.ts` (repris de FreshTea-m).
- [ ] Pages légales : mentions légales et politique de confidentialité (infos de la société à demander).
- [x] Icônes : `app/icon.png` (512 px) et `app/apple-icon.png` (180 px), le « Z » rouge du logo sur fond noir.
- [ ] Optionnel : passer sur une structure `/restaurants/[slug]` comme le site mère si d’autres WoodZ suivent.

## Lancer en local

```bash
npm install
npm run dev
```
