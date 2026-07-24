export type Pastry = {
  name: string;
  description: string;
  note?: string;   // a short flavour or "made to order" callout
  price?: string;  // optional — fill in when ready
};

export const PASTRIES: Pastry[] = [
  {
    name: 'Almond croissant',
    description: 'Laminated dough, house-made almond cream, sliced almonds on top.',
    note: 'Made to order — place by Friday for Saturday pickup.',
  },
  {
    name: 'Brown butter financier',
    description:
      'Beurre noisette, almond flour, a little vanilla. Dense in the good way.',
    note: 'Made to order — place by Friday for Saturday pickup.',
  },
  {
    name: 'Cardamom morning bun',
    description:
      'Laminated, rolled in cardamom sugar. Strong on spice, not on sweetness.',
    note: 'Made to order — place by Friday for Saturday pickup.',
  },
];
