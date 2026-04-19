export const SITE = {
  name: 'Acme Coffee & Roasters',
  tagline: 'Springfield · Est. 2018',
  description:
    "Small-batch coffee roastery on Maple Street, Springfield. Light to medium, traceable, roasted Tuesdays.",
  address: '412 Maple St, Springfield',
  email: 'hello@acmecoffee.example',
  emailWholesale: 'wholesale@acmecoffee.example',
  phone: '(555) 010-4120',
};

function nextTuesday(from: Date): Date {
  const d = new Date(from);
  const day = d.getDay();
  const add = (2 - day + 7) % 7 || 7;
  d.setDate(d.getDate() + add);
  return d;
}

const roastDate = nextTuesday(new Date());
export const NEXT_ROAST = {
  date: roastDate,
  label: roastDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  dayName: roastDate.toLocaleDateString('en-US', { weekday: 'long' }),
};
