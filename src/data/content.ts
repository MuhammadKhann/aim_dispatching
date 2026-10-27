import { ServiceItem, BenefitItem, ProcessStep, FaqItem, EquipmentOption } from '../types';

export const HERO_COPY = {
  headline: 'Reliable Truck Dispatching. Built Around Your Business.',
  supportingText:
    'We help owner-operators and trucking companies find loads, negotiate rates, and manage dispatch paperwork so they can focus on keeping their business moving.',
  primaryCta: 'Get Started',
  secondaryCta: 'Call Us Today',
  phoneDisplay: '(813) 355-9099'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'load-booking',
    title: 'Load Booking',
    description: 'Help carriers find loads that match their equipment, preferred lanes, and schedule.',
    iconName: 'Compass',
    bullets: [
      'Tailored to your preferred running lanes and requested home time',
      'Freight matching across dry van, reefer, flatbed, step deck, and box trucks',
      'Minimization of deadhead miles between delivery points and next pickups'
    ]
  },
  {
    id: 'rate-negotiation',
    title: 'Rate Negotiation',
    description: 'Assist with negotiating rates and reviewing load details before carrier approval.',
    iconName: 'TrendingUp',
    bullets: [
      'Market-tested counters on broker freight based on spot lane capacity',
      'Clear inclusion and confirmation of detention ($50-$75/hr), layover, and TONU',
      'Review of rate confirmations for transparent pay terms before carrier approval'
    ]
  },
  {
    id: 'dispatch-coordination',
    title: 'Dispatch Coordination',
    description: 'Help coordinate pickup and delivery details and communicate with brokers as needed.',
    iconName: 'PhoneCall',
    bullets: [
      'Active communication with broker dispatch desks and shippers on your behalf',
      'Timely check calls, facility directions, and appointment schedule verification',
      'Direct, single point of contact so you can focus on safe driving'
    ]
  },
  {
    id: 'documentation-assistance',
    title: 'Documentation Assistance',
    description: 'Help organize rate confirmations, load paperwork, and other relevant dispatch documents.',
    iconName: 'FileCheck',
    bullets: [
      'Rapid completion of broker carrier packets and insurance certificate (COI) requests',
      'Organized digital archiving of signed BOLs, delivery receipts, and rate cons',
      'Prompt post-delivery paperwork compilation for fast broker or factoring payment'
    ]
  }
];

export const WHY_CHOOSE_BENEFITS: BenefitItem[] = [
  {
    id: 'focus-driving',
    title: 'More Time to Focus on Driving and Operations',
    description:
      'Eliminate the stress of hunting through load boards while behind the wheel. We handle broker calls and administrative coordination so you can focus on safety and road operations.'
  },
  {
    id: 'suitable-loads',
    title: 'Assistance With Finding Suitable Loads',
    description:
      'We search for freight tailored to your equipment capacity, preferred corridors, and schedule. No forced dispatch—you maintain 100% decision-making authority on every load.'
  },
  {
    id: 'rate-negotiations',
    title: 'Help With Rate Negotiations',
    description:
      'We leverage current spot market conditions to counter low broker offers, securing fair freight compensation and protecting your revenue with proper accessorial terms.'
  },
  {
    id: 'organized-paperwork',
    title: 'Organized Paperwork and Dispatch Communication',
    description:
      'From broker packets and insurance requests to signed delivery receipts and rate confirmations, every document is organized systematically for smooth record-keeping.'
  },
  {
    id: 'direct-communication',
    title: 'Direct Communication With the Dispatcher',
    description:
      'No complex call trees or endless hold queues. You speak directly with your dedicated dispatcher who knows your truck, lane preferences, and active assignments.'
  }
];

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    step: '01',
    number: 1,
    title: 'Contact Us',
    description: 'Tell us about your trucking business, equipment type, operating authority, and specific dispatching needs.'
  },
  {
    step: '02',
    number: 2,
    title: 'Discuss Your Requirements',
    description: 'Review our services, fee structure (typically 6%–8%), preferred lanes, and mutual expectations together.'
  },
  {
    step: '03',
    number: 3,
    title: 'Get Started',
    description: 'Complete the required onboarding, agree on the dispatching arrangement, and begin receiving curated load proposals before services start.'
  }
];

export const ABOUT_COPY = {
  founderName: 'Muhammad',
  quote:
    'At AIM Dispatching, our goal is to make dispatching simpler for owner-operators and trucking companies. We focus on clear communication, organized paperwork, and helping carriers find loads that fit their business needs.',
  detailedBio:
    'Founded by Muhammad, AIM Dispatching was established to deliver genuine, carrier-first dispatch support for owner-operators and small fleets across the United States. Rather than acting as freight brokers who prioritize cheap rates for shippers, we act as dedicated back-office partners who work solely for the carrier. Our approach is grounded in direct communication, realistic market rates, and complete respect for the driver.'
};

export const EQUIPMENT_OPTIONS: EquipmentOption[] = [
  'Dry Van (53ft)',
  'Reefer (Refrigerated)',
  'Flatbed',
  'Step Deck',
  'Box Truck (24-26ft)',
  'Power Only',
  'Hotshot / Gooseneck',
  'Other / Multiple Units'
];

export const FAQS: FaqItem[] = [
  {
    id: 'fee-structure',
    question: 'What are your dispatching fees?',
    answer:
      'Our standard dispatch fee is typically 6% to 8% per load depending on your equipment type and agreed dispatch arrangement. There are no hidden administrative charges, signup fees, or long-term restrictive contracts. Qualifying new carriers can also take advantage of our introductory offer of 1 to 3 fee-free loads upon agreement.'
  },
  {
    id: 'forced-dispatch',
    question: 'Is there any forced dispatch?',
    answer:
      'Never. You maintain 100% control over your truck. We find and negotiate loads matching your criteria, present the full details (rates, weight, commodity, pick and drop times), and you always decide whether to accept or decline.'
  },
  {
    id: 'equipment-supported',
    question: 'What types of equipment do you dispatch?',
    answer:
      'We dispatch all major commercial equipment types across the United States, including Dry Vans (53ft), Refrigerated trailers (Reefers), Flatbeds, Step Decks, Box Trucks (24ft–26ft with liftgate), Power Only tractors, and Hotshots.'
  },
  {
    id: 'broker-packets',
    question: 'Do you assist with broker setup packets and paperwork?',
    answer:
      'Yes. When you accept a load from a new broker, we execute the carrier setup packet, coordinate certificate of insurance (COI) requests with your insurance provider, review rate confirmations, and organize all post-delivery documentation.'
  },
  {
    id: 'onboarding-requirements',
    question: 'What documents do I need to get started?',
    answer:
      'To get started, you will need your active Motor Carrier Authority (MC/DOT certificate), Certificate of Insurance (COI) with typical auto liability and cargo coverage, and a signed W-9 form.'
  },
  {
    id: 'contact-channels',
    question: 'How do I communicate with my dispatcher during a run?',
    answer:
      'You have direct phone and text access to your dispatcher. We communicate directly via phone call, SMS, or email—whichever method works best while you are on the road.'
  }
];
