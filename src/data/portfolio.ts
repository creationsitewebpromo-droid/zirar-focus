export interface PortfolioItem {
  title: string;
  category: string;
  src: string;
  alt: string;
  href: string;
  format: 'landscape' | 'portrait';
  width: number;
  height: number;
  reel?: boolean;
}

export const portfolio: PortfolioItem[] = [
  {
    title: 'L’énergie de la scène',
    category: 'Film · Événement',
    src: '/images/portfolio/film-concert.jpg',
    alt: 'Cadreur sur une scène de concert éclairée en vert',
    href: 'https://www.instagram.com/zirar_focus/reel/Db0Kf20MBbM/',
    format: 'portrait',
    width: 360,
    height: 640,
    reel: true,
  },
  {
    title: 'Portrait d’artiste',
    category: 'Portrait · Scène',
    src: '/images/portfolio/portrait-artiste.jpg',
    alt: 'Portrait expressif d’un artiste souriant sur scène',
    href: 'https://www.instagram.com/zirar_focus/p/DE7Pls-CgUV/',
    format: 'landscape',
    width: 640,
    height: 426,
  },
  {
    title: 'Rencontre en coulisses',
    category: 'Reportage · Rencontre',
    src: '/images/portfolio/rencontre-coulisses.jpg',
    alt: 'Deux hommes se saluent lors d’un événement en noir et blanc',
    href: 'https://www.instagram.com/zirar_focus/p/DBvsW0Vi0rx/',
    format: 'portrait',
    width: 512,
    height: 640,
  },
  {
    title: 'Le mot juste',
    category: 'Reportage · Noir & blanc',
    src: '/images/portfolio/conversation-noir-blanc.jpg',
    alt: 'Deux hommes en costume échangent discrètement dans un intérieur',
    href: 'https://www.instagram.com/zirar_focus/p/DdbYRUxDCjC/',
    format: 'landscape',
    width: 640,
    height: 427,
  },
  {
    title: 'Mouvement',
    category: 'Danse · Création',
    src: '/images/portfolio/danse-mouvement-couleur.jpg',
    alt: 'Danseuses en mouvement sous des lumières roses et orangées',
    href: 'https://www.instagram.com/zirar_focus/p/DcGNV4ZjLoI/',
    format: 'landscape',
    width: 640,
    height: 427,
  },
  {
    title: 'Le geste documentaire',
    category: 'Détail · Noir & blanc',
    src: '/images/portfolio/geste-documentaire.jpg',
    alt: 'Gros plan en noir et blanc de mains tenant des billets',
    href: 'https://www.instagram.com/zirar_focus/p/Db2nkL_s6Yo/',
    format: 'portrait',
    width: 480,
    height: 640,
  },
  {
    title: 'Lumières de la ville',
    category: 'Voyage · Architecture',
    src: '/images/portfolio/architecture-nocturne.jpg',
    alt: 'Architecture éclairée de nuit vue à travers une forme métallique',
    href: 'https://www.instagram.com/zirar_focus/p/Dbx3Wn1s873/',
    format: 'landscape',
    width: 640,
    height: 427,
  },
  {
    title: 'Corps en scène',
    category: 'Danse · Spectacle',
    src: '/images/portfolio/danse-scene-bleu.jpg',
    alt: 'Ensemble de danseurs vêtus de bleu sur une scène',
    href: 'https://www.instagram.com/zirar_focus/p/DXh3sWljKs8/',
    format: 'landscape',
    width: 640,
    height: 426,
  },
  {
    title: 'Traces',
    category: 'Danse · Noir & blanc',
    src: '/images/portfolio/danse-mouvement-noir-blanc.jpg',
    alt: 'Surimpression en noir et blanc de danseurs en mouvement',
    href: 'https://www.instagram.com/zirar_focus/p/DXh3bvejHQP/',
    format: 'landscape',
    width: 640,
    height: 427,
  },
  {
    title: 'Élévation',
    category: 'Danse · Spectacle',
    src: '/images/portfolio/danse-scene-blanc.jpg',
    alt: 'Groupe de danseuses en blanc portant une interprète sur scène',
    href: 'https://www.instagram.com/zirar_focus/p/DUlJaoVDP_Y/',
    format: 'landscape',
    width: 640,
    height: 449,
  },
  {
    title: 'Présence',
    category: 'Portrait · Noir & blanc',
    src: '/images/portfolio/portrait-homme-noir-blanc.jpg',
    alt: 'Portrait en noir et blanc d’un homme âgé en costume',
    href: 'https://www.instagram.com/zirar_focus/p/DVqmevJjK4P/',
    format: 'portrait',
    width: 480,
    height: 640,
  },
];
