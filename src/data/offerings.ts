export type Offering = {
  id: string;
  country: string;
  title: string;
  farm: string;
  region: string;
  varietal: string;
  process: string;
  elevation: string;
  roast: string;
  harvest: string;
  notes: string;
  weight: string;
  price: number;
  status: 'live' | 'sold-out' | 'soon';
  returns?: string;
  listsOn?: string;
};

export const OFFERINGS: Offering[] = [
  {
    id: 'gesha-banko',
    country: 'Ethiopia',
    title: 'Banko Gotiti',
    farm: 'Banko Gotiti Cooperative',
    region: 'Gedeb, Yirgacheffe',
    varietal: 'Heirloom',
    process: 'Washed',
    elevation: '2,050 m',
    roast: 'Light',
    harvest: 'Dec 2025',
    notes: "Jasmine, bergamot, and a clean finish like white tea. We've been chasing this lot for three years.",
    weight: '250 g',
    price: 22,
    status: 'live',
  },
  {
    id: 'colombia-huila',
    country: 'Colombia',
    title: 'El Mirador',
    farm: 'Finca El Mirador · Orlando Rojas',
    region: 'Pitalito, Huila',
    varietal: 'Pink Bourbon',
    process: 'Washed, 36h fermentation',
    elevation: '1,780 m',
    roast: 'Light-Medium',
    harvest: 'Nov 2025',
    notes: 'Red apple, panela, a syrupy body that coats. The kind of cup that ends and you immediately want another.',
    weight: '250 g',
    price: 19,
    status: 'live',
  },
  {
    id: 'kenya-nyeri',
    country: 'Kenya',
    title: 'Gichathaini AB',
    farm: 'Gichathaini Factory · Tetu FCS',
    region: 'Nyeri',
    varietal: 'SL28, SL34, Ruiru 11',
    process: 'Washed, double-fermentation',
    elevation: '1,850 m',
    roast: 'Light-Medium',
    harvest: 'Jan 2026',
    notes: 'Blackcurrant, tomato leaf, grapefruit pith. Bright and structured — the classic Nyeri profile, done properly.',
    weight: '250 g',
    price: 24,
    status: 'live',
  },
  {
    id: 'guatemala-huehue',
    country: 'Guatemala',
    title: 'La Esperanza',
    farm: 'Finca La Esperanza · Herrera family',
    region: 'Huehuetenango',
    varietal: 'Caturra, Bourbon',
    process: 'Natural, 14 days on raised beds',
    elevation: '1,620 m',
    roast: 'Medium',
    harvest: 'Feb 2026',
    notes: 'Dried fig, dark chocolate, cocoa nib. A restrained natural — ripe, not boozy. Works well in milk.',
    weight: '250 g',
    price: 20,
    status: 'live',
  },
  {
    id: 'rwanda-nyamasheke',
    country: 'Rwanda',
    title: 'Cyato',
    farm: 'Cyato Washing Station',
    region: 'Nyamasheke',
    varietal: 'Red Bourbon',
    process: 'Washed',
    elevation: '1,900 m',
    roast: 'Light',
    harvest: 'Mar 2026',
    notes: 'Peach, lemon verbena, brown sugar. A calm, long cup.',
    weight: '250 g',
    price: 21,
    status: 'sold-out',
    returns: 'Apr 25',
  },
  {
    id: 'honduras-marcala',
    country: 'Honduras',
    title: 'El Puente',
    farm: 'Beneficio El Puente · Moreno family',
    region: 'Marcala, La Paz',
    varietal: 'Parainema',
    process: 'Anaerobic honey',
    elevation: '1,550 m',
    roast: 'Light-Medium',
    harvest: 'April 2026',
    notes: 'Listing opens Saturday. Early cupping: stone fruit, toffee, a clean body.',
    weight: '250 g',
    price: 23,
    status: 'soon',
    listsOn: 'Sat Apr 25',
  },
];
