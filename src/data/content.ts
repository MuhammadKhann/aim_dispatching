import { ServiceItem, TruckEquipment, FaqItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'load-booking',
    title: 'Load Booking',
    shortDescription: 'Find and secure suitable freight based on your equipment, current location, preferred lanes, and business revenue targets.',
    detailedDescription: 'We continuously scan leading freight boards, direct broker networks, and high-volume freight lanes to pinpoint profitable loads aligned with your equipment specifications and driver schedule. Every booking is tailored to your preferred destination and schedule.',
    benefits: [
      'Tailored to your preferred running lanes and home time',
      'Minimization of empty deadhead miles between assignments',
      'Pre-screening of broker credit ratings and payment terms',
      'Real-time freight matching across regional and nationwide lanes'
    ],
    operationalHighlights: [
      'Rate per mile (RPM) verification before proposing to driver',
      'Weight, commodity, and appointment time suitability checks',
      'No forced dispatch — driver maintains 100% final booking authority'
    ],
    icon: 'Compass'
  },
  {
    id: 'rate-negotiation',
    title: 'Rate Negotiation',
    shortDescription: 'Negotiate aggressively with brokers and shippers to secure stronger market rates, accessorials, and improved revenue.',
    detailedDescription: 'Freight rates fluctuate hourly based on lane capacity, weather, and demand. Our experienced dispatchers leverage spot market indices and lane-specific intelligence to counter broker offers and secure optimal compensation for your equipment and time.',
    benefits: [
      'Trained negotiation on spot market and direct broker freight',
      'Accessorial rate protection (detention, layover, TONU)',
      'Consistent focus on maximizing your net revenue per mile',
      'Elimination of driver stress while negotiating on the road'
    ],
    operationalHighlights: [
      'Immediate push for standard detention ($50-$75/hr after 2 hours)',
      'Clear inclusion of tarping, extra stops, or hazmat compensation',
      'Written rate confirmations verifying agreed totals before dispatch'
    ],
    icon: 'TrendingUp'
  },
  {
    id: 'broker-setup',
    title: 'Broker Setup',
    shortDescription: 'Fast-track carrier packets, certificate of insurance verification, and broker compliance so you can book without delays.',
    detailedDescription: 'New broker setups often require 15-to-30-page packets, W-9 submissions, safety record reviews, and certificate of insurance (COI) requests. We handle packet execution immediately so you never lose high-paying loads while parked waiting for paperwork approval.',
    benefits: [
      'Rapid completion of broker and shipper carrier packets',
      'Direct coordination with your insurance producer for timely COIs',
      'Expanding your verified broker network with every run',
      'Quick turnaround times so loads do not get booked by competitors'
    ],
    operationalHighlights: [
      'Secure document storage of your MC authority, W-9, and COI',
      'Review of broker terms, payment clauses, and claim policies',
      'Immediate notification once your carrier profile is active'
    ],
    icon: 'FileCheck'
  },
  {
    id: 'paperwork-management',
    title: 'Paperwork Management',
    shortDescription: 'Manage rate confirmations, bills of lading, proof of delivery, and administrative dispatches with organized accuracy.',
    detailedDescription: 'Running a compliant trucking company generates substantial administrative paperwork. AIM Dispatching organizes your rate confirmations, review documents for restrictive clauses, and archives clean digital copies for smooth business operations.',
    benefits: [
      'Thorough review of rate confirmation details and special instructions',
      'Organized digital record keeping for every completed load',
      'Coordination of Signed Bills of Lading (BOL) and Proof of Delivery (POD)',
      'Reduced administrative headache during and after transit'
    ],
    operationalHighlights: [
      'Double-check of delivery appointment times and facility instructions',
      'Quick resolution if lumper receipts or scale tickets are required',
      'Neatly categorized records readily accessible for tax or audit prep'
    ],
    icon: 'FolderKanban'
  },
  {
    id: 'invoicing-assistance',
    title: 'Invoicing Assistance',
    shortDescription: 'Prepare, compile, and organize invoicing documentation immediately following load completion to accelerate payment.',
    detailedDescription: 'Prompt payment depends on accurate, clean paperwork submitted right after delivery. We help assemble your signed delivery receipts, rate con, scale slips, and invoice packages so brokers or shippers process your payment without administrative pushback.',
    benefits: [
      'Prompt consolidation of all required post-delivery documents',
      'Elimination of billing discrepancies before submission',
      'Accelerated cash flow cycle through timely documentation delivery',
      'Organized paper trail protecting against unpaid accessorial claims'
    ],
    operationalHighlights: [
      'Matching rate con lines against BOL and detention records',
      'Verification of broker billing email addresses and portals',
      'Tracking of documentation receipt to prevent delayed disbursements'
    ],
    icon: 'Receipt'
  },
  {
    id: 'factoring-assistance',
    title: 'Factoring Assistance',
    shortDescription: 'Coordinate Notice of Assignment (NOA), credit checks, and schedule uploads with your chosen factoring company.',
    detailedDescription: 'If your trucking business utilizes invoice factoring for same-day or next-day cash flow, we work directly with your factoring provider’s workflow. We coordinate credit checks prior to load confirmation and assist in submitting completed load schedules.',
    benefits: [
      'Pre-booking credit verification through your factoring portal',
      'Streamlined submission of invoice schedules and delivery packets',
      'Support resolving NOA (Notice of Assignment) conflicts with brokers',
      'Works with your existing factoring partner of choice'
    ],
    operationalHighlights: [
      'Confirmation that broker is eligible and approved for factoring',
      'Ensuring clear scans and required signatures are attached',
      'Assistance tracking funding status on submitted schedules'
    ],
    icon: 'CreditCard'
  },
  {
    id: 'route-planning',
    title: 'Route Planning',
    shortDescription: 'Strategize practical routes and backhaul sequences that optimize fuel efficiency, minimize deadhead, and maintain HOS compliance.',
    detailedDescription: 'Dispatching is more than finding one isolated load—it is linking sequential freight opportunities. We analyze your route from pickup to receiver while mapping next-day freight availability in receiver markets, preventing you from hauling into dead freight zones.',
    benefits: [
      'Smart backhaul planning to avoid getting stranded in slow freight markets',
      'Minimization of unpaid repositioning and deadhead miles',
      'Consideration of Hours of Service (HOS) and realistic transit windows',
      'Multi-leg triangle routing strategies for consistent weekly gross'
    ],
    operationalHighlights: [
      'Outbound and inbound freight balance assessment by market region',
      'Weather, mountain pass, and tollway awareness during trip planning',
      'Continuous alignment with your personal preferred time off'
    ],
    icon: 'MapPin'
  }
];

export const TRUCK_EQUIPMENT_DATA: TruckEquipment[] = [
  {
    id: 'dry-van',
    name: 'Dry Van',
    category: 'Enclosed',
    dimensions: '53ft enclosed trailer (up to 45,000 lbs)',
    typicalFreight: 'Palletized retail goods, packaged food, electronics, paper, and consumer merchandise.',
    keyAdvantage: 'Highest load volume across all US interstate freight lanes year-round.',
    description: 'The backbone of American freight. We locate high-frequency lanes, predictable distribution hub freight, and minimize dock wait times with screened facilities.'
  },
  {
    id: 'reefer',
    name: 'Reefer (Refrigerated)',
    category: 'Enclosed',
    dimensions: '53ft insulated temperature-controlled trailer',
    typicalFreight: 'Fresh produce, meat, frozen food, dairy, beverages, and sensitive pharmaceuticals.',
    keyAdvantage: 'Recession-resilient demand with premium rate-per-mile opportunities during produce harvests.',
    description: 'Requires strict temperature discipline and proactive route coordination. We secure top-paying reefer freight with proper detention and fuel surcharge protections.'
  },
  {
    id: 'flatbed',
    name: 'Flatbed',
    category: 'Open Deck',
    dimensions: '48ft or 53ft open deck (up to 48,000 lbs)',
    typicalFreight: 'Structural steel, lumber, building materials, piping, and industrial machinery.',
    keyAdvantage: 'High average rates per mile with specialized freight and rapid dock unloading.',
    description: 'We negotiate appropriate tarp and strap compensation while securing stable lanes for standard 48ft and 53ft open deck operations.'
  },
  {
    id: 'step-deck',
    name: 'Step Deck / Single Drop',
    category: 'Open Deck',
    dimensions: 'Lower deck height for cargo up to 10ft tall without special permits',
    typicalFreight: 'Tractors, heavy industrial apparatus, construction vehicles, oversized components.',
    keyAdvantage: 'Ability to haul taller equipment that standard flatbeds cannot legally accommodate.',
    description: 'Our team sources specialized step-deck cargo that commands higher spot margins due to lower competitor trailer availability.'
  },
  {
    id: 'hotshot',
    name: 'Hotshot',
    category: 'Expedited',
    dimensions: 'Class 3-5 dually truck with 30ft-40ft gooseneck trailer (up to 16,500 lbs)',
    typicalFreight: 'Expedited energy sector equipment, agricultural machinery, urgent steel and building products.',
    keyAdvantage: 'Agile maneuvering, lower initial capital cost, and strong regional spot rates.',
    description: 'Hotshot trucking moves fast. We specialize in finding dense, well-paying LTL or full loads that maximize hotshot capacity without exceeding weight limits.'
  },
  {
    id: 'box-truck',
    name: 'Box Truck',
    category: 'Enclosed',
    dimensions: '24ft or 26ft straight box truck (with liftgate / pallet jack)',
    typicalFreight: 'Commercial store deliveries, e-commerce pallets, medical freight, final mile distribution.',
    keyAdvantage: 'Accessible for regional and metro freight where 53ft trailers cannot easily navigate.',
    description: 'We find high-value regional loads, warehouse-to-warehouse transfers, and expedited runs that leverage liftgate capabilities.'
  },
  {
    id: 'power-only',
    name: 'Power Only',
    category: 'Power Only',
    dimensions: 'Class-8 tractor only (hauling customer-owned or leased trailers)',
    typicalFreight: 'Shipper-owned trailers, intermodal chassis, emergency trailer repositioning, FEMA moves.',
    keyAdvantage: 'Eliminates trailer maintenance, purchase cost, and extensive trailer wear.',
    description: 'We keep your tractor rolling by matching with pre-loaded shipper trailers, Amazon relay, and drop-and-hook opportunities across major logistics arteries.'
  },
  {
    id: 'straight-truck',
    name: 'Straight Truck',
    category: 'Enclosed',
    dimensions: 'Medium-duty rigid chassis commercial truck',
    typicalFreight: 'Regional business-to-business distribution, auto parts, industrial consumables.',
    keyAdvantage: 'Dependable regional runs and lower operating fuel expenditures.',
    description: 'Consistent regional freight coordination tailored to drivers who prefer dependable daily or multi-day regional loops.'
  },
  {
    id: 'sprinter-van',
    name: 'Sprinter Van / Cargo Van',
    category: 'Expedited',
    dimensions: 'High-roof extended cargo van (up to 3,500 lbs)',
    typicalFreight: 'Time-critical aerospace components, automotive just-in-time parts, urgent medical samples.',
    keyAdvantage: 'No strict CDL requirement on many configurations, minimal fuel burn, expedited premium pricing.',
    description: 'We locate expedited spot runs and critical freight where shippers pay premium rates for rapid door-to-door delivery.'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-pricing',
    question: 'What does AIM Dispatching charge?',
    answer: 'Our standard dispatching fee typically ranges from 6% to 8% per load depending on your equipment type, operating requirements, and agreed service volume. We believe in 100% transparent pricing without hidden administrative surcharges.',
    category: 'Pricing'
  },
  {
    id: 'faq-new-carrier',
    question: 'Do new carriers get free loads?',
    answer: 'Yes. Qualifying new carriers may receive dispatching service for their first 1 to 3 loads without any dispatch fee, depending on the agreed deal. This allows you to experience our load booking, communication, and rate negotiation firsthand before transitioning to our standard fee structure.',
    category: 'Pricing'
  },
  {
    id: 'faq-truck-types',
    question: 'What types of trucks do you dispatch?',
    answer: 'We dispatch a wide variety of commercial trucks and equipment across the United States, including Dry Vans, Reefers, Flatbeds, Step Decks, Hotshots, Box Trucks, Power Only tractors, Straight Trucks, and Sprinter Vans.',
    category: 'Equipment'
  },
  {
    id: 'faq-negotiation',
    question: 'Do you negotiate rates with brokers?',
    answer: 'Yes. Rate negotiation is a core pillar of our service. We analyze spot market data and lane averages to push brokers for top dollar, while also locking down favorable detention ($50-$75/hr after 2 hrs), layover, and TONU terms.',
    category: 'Services'
  },
  {
    id: 'faq-broker-setup',
    question: 'Do you help with broker setup and carrier packets?',
    answer: 'Yes. We complete broker setup packets, coordinate certificate of insurance (COI) requests with your insurance agent, and ensure your carrier profile is approved so you can book loads quickly without administrative friction.',
    category: 'Services'
  },
  {
    id: 'faq-invoicing',
    question: 'Can you help with invoicing and delivery paperwork?',
    answer: 'Yes. Upon load delivery, we organize your signed Bills of Lading (BOL), rate confirmations, lumper slips, and scale tickets into a clean billing package ready for immediate submission to the broker or your factoring company.',
    category: 'Services'
  },
  {
    id: 'faq-factoring',
    question: 'Do you provide factoring assistance?',
    answer: 'We coordinate directly with your preferred factoring company. We verify broker credit before booking and submit completed paperwork schedules so your cash flow remains consistent and uninterrupted.',
    category: 'Services'
  },
  {
    id: 'faq-small-carriers',
    question: 'Can AIM Dispatching work with small carriers and single-truck owner-operators?',
    answer: 'Absolutely. We specialize in serving single-truck owner-operators, independent carriers, and growing small fleets. You receive the full dedicated attention of a professional logistics back-office without the overhead of hiring in-house staff.',
    category: 'Onboarding'
  },
  {
    id: 'faq-forced-dispatch',
    question: 'Is there forced dispatch?',
    answer: 'Never. You maintain 100% control over your truck. We locate the best available freight, present the details, lane, and rate to you, and you have the final authority to accept or pass on every single load.',
    category: 'Services'
  },
  {
    id: 'faq-onboarding-speed',
    question: 'How quickly can I start with AIM Dispatching?',
    answer: 'Once you provide your MC authority certificate, Certificate of Insurance (COI) listing standard cargo & liability coverage, and signed W-9, we can begin searching and booking loads for you within 24 to 48 business hours.',
    category: 'Onboarding'
  }
];

export const CORE_BENEFITS = [
  {
    title: 'Professional Load Booking',
    description: 'Targeted load matching across major boards and direct broker relationships based on your lane preferences.'
  },
  {
    title: 'Strong Rate Negotiation',
    description: 'Data-informed counters on broker freight with firm contractual protection for detention, layover, and TONU.'
  },
  {
    title: 'Dedicated Dispatch Support',
    description: 'A direct point of contact coordinating your logistics operations so you stay focused on safe driving.'
  },
  {
    title: 'Broker Setup Assistance',
    description: 'Fast, precise execution of carrier packets and COI requests so you never miss time-sensitive freight.'
  },
  {
    title: 'Paperwork & Billing Management',
    description: 'Thorough review of rate confirmations, organized load archiving, and post-delivery invoicing support.'
  },
  {
    title: 'Flexible 6%–8% Pricing',
    description: 'Straightforward percentage-based pricing with no long-term restrictive locks or hidden administrative fees.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Connect With AIM Dispatching',
    description: 'Submit your carrier details, MC/DOT numbers, and basic equipment specifications to establish your account.'
  },
  {
    step: '02',
    title: 'Share Equipment, Location & Preferences',
    description: 'Tell us where you like to drive, preferred lanes, target gross earnings, and desired home time.'
  },
  {
    step: '03',
    title: 'We Search and Negotiate',
    description: 'We review load boards and direct contacts, filter out low-paying freight, and negotiate top rates for your equipment.'
  },
  {
    step: '04',
    title: 'Approve the Load',
    description: 'You review the lane, rate, pickup, and delivery schedules. You always have 100% final approval authority.'
  },
  {
    step: '05',
    title: 'Stay Moving With Support',
    description: 'Drive safely while we complete broker setup packets, handle check calls, and coordinate billing documentation.'
  }
];
