import { money, site } from "@/config/site";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  /** Hidden unless the Health Check flag is on. */
  healthCheck?: boolean;
}

const phone = site.contact.phoneDisplay;
const [o1, o2, o3] = site.pricing.offers;

const allFaqs: readonly FaqItem[] = [
  {
    id: "what-is-h006",
    question: "What is the WaterSource H006?",
    answer:
      "The H006 is a 4-in-1 Hydrogen Generation Bottle from WaterSource, sold in Singapore by Evergreen Health Pte Ltd. It is a hydrogen wellness solution that gives you four ways to use hydrogen.",
  },
  {
    id: "what-can-it-do",
    question: "What can H006 do?",
    answer:
      "Hydrogen-rich drinking water, nasal hydrogen inhalation, an ear accessory and an eye-mask accessory. The last three connect to the bottle.",
  },
  {
    id: "home-or-on-the-go",
    question: "Can I use H006 at home or on the go?",
    answer: "Yes. H006 is designed for use at home or on the go.",
  },
  {
    id: "how-to-make-water",
    question: "How do I make hydrogen-rich water with it?",
    answer:
      "Fill the bottle with drinking water, then press the power button once for about 5 minutes, or twice for about 10 minutes.",
  },
  {
    id: "whats-included",
    question: "What is included with each set?",
    answer: `Please call ${phone} to confirm what is included with your set.`,
  },
  {
    id: "price",
    question: "How much does H006 cost in Singapore?",
    answer: `The usual price is ${money(site.pricing.usualPrice)} per set. The current promotion is ${money(o1!.price)} for 1 set, ${money(o2!.price)} for 2 sets and ${money(o3!.price)} for 3 sets.`,
  },
  {
    id: "charging",
    question: "Does H006 need charging or maintenance?",
    answer: `The unit has a battery indicator on its base. Please call ${phone} for charging and care details.`,
  },
  {
    id: "medical-claims",
    question: "Does H006 make any medical claims?",
    answer:
      "No. H006 is a general wellness product and is not intended to diagnose, treat, cure or prevent any disease. Research into hydrogen is ongoing, and it has not tested H006 itself. If you are unwell, pregnant or on medication, please speak to a healthcare professional before use.",
  },
  {
    id: "health-check-part-of-h006",
    question: "Is the Health Check part of H006?",
    answer: `No. The Evergreen AI Precautions Health Check is a separate service from H006 and its pricing. Please call ${phone} to enquire about availability and terms.`,
    healthCheck: true,
  },
  {
    id: "health-check-coverage",
    question: "What does the Health Check cover?",
    answer:
      "It covers eight areas: cardio-cerebrovascular, microcirculation, endocrine, neuromediator, oxidative stress, metabolic, glandular and body constitution. It is not a medical diagnosis.",
    healthCheck: true,
  },
  {
    id: "delivery-warranty",
    question: "How do I enquire about delivery and warranty?",
    answer: `Call ${phone} and we will share delivery and warranty details.`,
  },
];

/** FAQ entries visible under the current feature-flag configuration. */
export const faqs: readonly FaqItem[] = allFaqs.filter((f) => !f.healthCheck || site.flags.showHealthCheck);
