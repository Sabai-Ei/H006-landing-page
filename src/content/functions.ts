export type FunctionId = "drink" | "inhale" | "ear" | "eyes";

export interface H006Function {
  id: FunctionId;
  index: string;
  label: string;
  title: string;
  /** Short line used in hero callouts. */
  calloutText: string;
  /** Card description. */
  summary: string;
  /** "How to use" line. */
  howTo: string;
  illustrationLabel: string;
}

export const functions: readonly H006Function[] = [
  {
    id: "drink",
    index: "01",
    label: "Drink",
    title: "Hydrogen-rich drinking water",
    calloutText: "Made fresh in the bottle",
    summary: "Make fresh hydrogen-rich water right in your bottle.",
    howTo: "Fill with drinking water. Press the power button once for about 5 min, or twice for about 10 min.",
    illustrationLabel: "Illustration of the H006 bottle filled with water and rising hydrogen bubbles",
  },
  {
    id: "inhale",
    index: "02",
    label: "Inhale",
    title: "Nasal hydrogen inhalation",
    calloutText: "Nasal cannula to the unit",
    summary: "Breathe in hydrogen gas through a nasal cannula.",
    howTo: "Plug the nasal cannula into the unit.",
    illustrationLabel: "Illustration of a nasal cannula connected by a tube to the H006 unit",
  },
  {
    id: "ear",
    index: "03",
    label: "Ear",
    title: "Hydrogen ear accessory",
    calloutText: "Ear cannula to the unit",
    summary: "Connect an ear cannula to your H006 unit.",
    howTo: "Plug the ear cannula into the unit.",
    illustrationLabel: "Illustration of an ear with an ear cannula connected by a tube to the H006 unit",
  },
  {
    id: "eyes",
    index: "04",
    label: "Eyes",
    title: "Hydrogen eye-mask accessory",
    calloutText: "Eye-mask to the unit",
    summary: "Connect an eye-mask accessory to your H006 unit.",
    howTo: "Plug the eye-mask cannula into the unit.",
    illustrationLabel: "Illustration of an eye-mask accessory connected by a tube to the H006 unit",
  },
] as const;

export const overview = {
  eyebrow: "The H006 · 4-in-1",
  title: "Four ways to use one bottle.",
  body: "The WaterSource H006 4-in-1 Hydrogen Generation Bottle combines hydrogen-rich drinking water with three accessory functions: nasal hydrogen inhalation, an ear accessory and an eye-mask accessory. Use it at home or on the go.",
  positioning: "One bottle, four ways to boost your well-being — anytime, anywhere.",
  footnote: "Illustrations are simplified and not to scale.",
} as const;

export const steps = [
  {
    title: "Fill and switch on",
    body: "Fill the bottle with drinking water. Press the power button once for about 5 minutes, or twice for about 10 minutes.",
  },
  {
    title: "Drink hydrogen-rich water",
    body: "Watch the hydrogen bubble column rise, then drink the water straight from the bottle.",
  },
  {
    title: "Plug in an accessory",
    body: "Connect the nasal, ear or eye-mask cannula to the unit for hydrogen inhalation.",
    note: "Always follow the instructions supplied with your device.",
  },
] as const;

export const wellness = {
  pill: "Wellness information",
  title: "Wellness information",
  intro: "A few things worth knowing before you buy. H006 is a wellness product, and we do not make medical claims about it.",
  rows: [
    "H006 makes hydrogen-rich water for drinking and generates hydrogen gas for inhalation through its accessories.",
    "Hydrogen is a widely researched topic, but that research has not tested H006 itself.",
    "H006 is not intended to diagnose, treat, cure or prevent any disease. If you are unwell, pregnant or on medication, please speak to a healthcare professional before use.",
  ],
} as const;
