export type Pastry = {
  id: string;
  title: string;
  description: string;
  note: string;
  price: number;
  unit: string;
  status: 'live' | 'seasonal';
  season?: string;
};

export const PASTRIES: Pastry[] = [
  {
    id: 'almond-croissant',
    title: 'Almond Croissant',
    description: 'Twice-baked with housemade frangipane and sliced almonds.',
    note: 'Flaky, buttery, not too sweet. The one most people order twice.',
    price: 5,
    unit: 'each',
    status: 'live',
  },
  {
    id: 'cardamom-bun',
    title: 'Cardamom Bun',
    description: 'Soft enriched dough, swirled with cardamom sugar and pearl sugar on top.',
    note: 'Warm out of the oven on Saturday mornings. Pairs well with the Kenyan.',
    price: 4,
    unit: 'each',
    status: 'live',
  },
  {
    id: 'brown-butter-financier',
    title: 'Brown Butter Financier',
    description: 'Almond flour, brown butter, a little honey. Dense and rich in the best way.',
    note: 'Made in small batches. Usually gone by 10.',
    price: 4,
    unit: 'each',
    status: 'live',
  },
  {
    id: 'fruit-galette',
    title: 'Seasonal Fruit Galette',
    description: 'Rough-edged pastry with whatever fruit is good right now.',
    note: 'Changes week to week — ask us what\'s in it.',
    price: 6,
    unit: 'each',
    status: 'seasonal',
    season: 'Saturdays only',
  },
];
