export type PageId = 'home' | 'about' | 'services' | 'pricing' | 'faq' | 'contact' | 'get-started';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  benefits: string[];
  operationalHighlights: string[];
  icon: string;
}

export interface TruckEquipment {
  id: string;
  name: string;
  category: 'Enclosed' | 'Open Deck' | 'Expedited' | 'Power Only';
  dimensions: string;
  typicalFreight: string;
  keyAdvantage: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Pricing' | 'Services' | 'Equipment' | 'Onboarding';
}
