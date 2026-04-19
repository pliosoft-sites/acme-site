export type WholesaleTier = {
  tier: string;
  price: string;
  minimum: string;
  delivery: string;
};

export const WHOLESALE_TIERS: WholesaleTier[] = [
  {
    tier: '5–10 kg / week',
    price: '$21 / kg',
    minimum: '5 kg per order',
    delivery: 'Tue / Fri, Springfield metro',
  },
  {
    tier: '10–25 kg / week',
    price: '$19 / kg',
    minimum: '10 kg per order',
    delivery: 'Tue / Fri, Springfield metro',
  },
  {
    tier: '25 kg+ / week',
    price: 'Contact us',
    minimum: 'Contract, 3-month minimum',
    delivery: 'Direct, scheduled',
  },
];
