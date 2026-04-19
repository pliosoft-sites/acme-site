export type VisitFact = { k: string; v: string };

export const VISIT_FACTS: VisitFact[] = [
  { k: 'Saturday', v: '8:00 AM – 12:00 PM · retail, pickup, espresso bar.' },
  { k: 'Tuesday', v: 'Roasting day. No retail. Wholesale pickups by arrangement.' },
  { k: 'Other days', v: "We're off." },
  { k: 'Address', v: '412 Maple St, Springfield' },
  { k: 'Phone', v: '(555) 010-4120 · Saturdays only.' },
  {
    k: 'Parking',
    v: 'Two spots behind the shop off Linden alley. Street parking on Maple is metered Mon–Fri only.',
  },
  {
    k: 'Transit',
    v: 'Bus 14 stops at Maple & 5th, two blocks east. Bike rack at the green door.',
  },
  { k: 'Accessibility', v: 'Single step at the entrance; ramp available on request.' },
];
