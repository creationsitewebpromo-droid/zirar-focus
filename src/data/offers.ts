export interface PricingOffer {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  details: string[];
  featured?: boolean;
}

export const weddingOffers: PricingOffer[] = [
  {
    id: 'essentielle',
    name: 'Essentielle',
    price: 1750,
    priceLabel: '1 750 €',
    description: 'Des préparatifs jusqu’au cocktail, avec une présence prévue au plus tard jusqu’à 20 h.',
    details: ['250 photos ou plus', 'Photos de couple incluses', 'Traitement professionnel HD', 'Galerie web sécurisée', 'Livraison sous 30 jours'],
  },
  {
    id: 'signature',
    name: 'Signature',
    price: 2150,
    priceLabel: '2 150 €',
    description: 'Des préparatifs jusqu’au dessert, avec une présence prévue au plus tard jusqu’à minuit.',
    details: ['350 photos ou plus', 'Photos de couple incluses', 'Traitement professionnel HD', 'Galerie web sécurisée', 'Livraison sous 30 jours'],
    featured: true,
  },
  {
    id: 'soiree',
    name: 'Soirée',
    price: 2500,
    priceLabel: '2 500 €',
    description: 'Le reportage complet des préparatifs jusqu’à 2 h du matin.',
    details: ['450 photos ou plus', 'Photos de couple incluses', 'Traitement professionnel HD', 'Galerie web sécurisée', 'Livraison sous 30 jours'],
  },
];

export const sessionOffers: PricingOffer[] = [
  {
    id: 'express',
    name: 'Express',
    price: 150,
    priceLabel: '150 €',
    description: 'Portrait, couple, grossesse, famille ou portrait professionnel.',
    details: ['Environ 15 minutes', '2 photos numériques retouchées', 'Sélection en galerie en ligne', 'Livraison sous 15 jours'],
  },
  {
    id: 'portrait',
    name: 'Séance photo',
    price: 250,
    priceLabel: '250 €',
    description: 'Une séance guidée pour un portrait, un couple, une grossesse ou une famille.',
    details: ['Durée : 1 heure', '7 photos numériques retouchées', 'Sélection parmi 25 à 35 images', 'Jusqu’à 3 ou 4 tenues', 'Livraison sous 15 jours'],
    featured: true,
  },
  {
    id: 'audacieuse',
    name: 'Audacieuse',
    price: 350,
    priceLabel: '350 €',
    description: 'Une séance boudoir ou glamour guidée avec une préparation soignée.',
    details: ['Durée : 1 h 30', '10 photos numériques retouchées', 'Mise en beauté incluse', 'Accompagnement pour les poses'],
  },
];

export const weddingOptions = [
  { name: 'Album prestige 30 × 40 · 40 pages', price: '750 €' },
  { name: 'Séance engagement', price: '250 €' },
  { name: 'Séance couple après le mariage', price: '250 €' },
  { name: 'Séance « Trash the dress »', price: '250 €' },
];
