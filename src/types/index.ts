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

export type EquipmentOption = string;

export type ContactMethodOption = 'Phone Call' | 'Text / SMS' | 'Email';

export interface DispatchInquiryForm {
  fullName: string;
  carrierRole: string;
  contactValue: string; // Phone number or email
  contactTiming: string;
  equipmentType: string;
  preferredLanes: string;
  message: string;
  preferredMethod: ContactMethodOption;
}
