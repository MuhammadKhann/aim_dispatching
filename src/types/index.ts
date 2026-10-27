export type SectionId = 
  | 'hero' 
  | 'services' 
  | 'why-choose' 
  | 'how-it-works' 
  | 'about' 
  | 'faq' 
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Compass' | 'TrendingUp' | 'PhoneCall' | 'FileCheck';
  bullets: string[];
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  number: number;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export type EquipmentOption = 
  | 'Dry Van (53ft)'
  | 'Reefer (Refrigerated)'
  | 'Flatbed'
  | 'Step Deck'
  | 'Box Truck (24-26ft)'
  | 'Power Only'
  | 'Hotshot / Gooseneck'
  | 'Other / Multiple Units';

export type ContactMethodOption = 'Phone Call' | 'Text / SMS' | 'Email';

export interface DispatchInquiryForm {
  fullName: string;
  contactValue: string; // Phone number or email
  equipmentType: EquipmentOption;
  message: string;
  preferredMethod: ContactMethodOption;
}
