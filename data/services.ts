export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  industries: string[];
  includedServices: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    id: "cleaning",
    title: "Cleaning Service",
    slug: "cleaning",
    shortDescription:
      "Professional deep cleaning for homes and offices. Sparkling results, guaranteed.",
    description:
      "Alok Service delivers premium cleaning solutions tailored to your space. Our trained professionals use eco-friendly products and advanced techniques to ensure every corner gleams. From routine maintenance to deep cleaning, we handle it all with precision and care.",
    icon: "Sparkles",
    image:
      "/cleaning.jpg",
    features: [
      "Eco-friendly cleaning products",
      "Trained & verified cleaners",
      "Deep cleaning & sanitization",
      "Flexible scheduling",
      "100% satisfaction guarantee",
      "Pet-safe solutions",
    ],
    benefits: [
      "Healthier indoor environment",
      "Saves time & effort",
      "Professional-grade results",
      "Reduces allergens & dust",
      "Extends furniture life",
      "Stress-free experience",
    ],
    process: [
      {
        step: 1,
        title: "Book Online",
        description:
          "Choose your date and service type through our simple booking system.",
      },
      {
        step: 2,
        title: "We Arrive",
        description:
          "Our trained team arrives on time with all equipment and eco-friendly supplies.",
      },
      {
        step: 3,
        title: "Deep Clean",
        description:
          "We thoroughly clean every surface, corner, and hidden area.",
      },
      {
        step: 4,
        title: "Quality Check",
        description:
          "A supervisor inspects the work to ensure it meets our premium standards.",
      },
      {
        step: 5,
        title: "You Enjoy",
        description:
          "Relax in your sparkling clean space. We guarantee your satisfaction.",
      },
    ],
    faqs: [
      {
        question: "How long does a cleaning session take?",
        answer:
          "A standard home cleaning takes 2-4 hours depending on size. Deep cleaning may take 4-6 hours. We'll provide an estimate when you book.",
      },
      {
        question: "Are your cleaning products safe for kids and pets?",
        answer:
          "Yes, we use only eco-friendly, non-toxic cleaning products that are completely safe for children, pets, and the environment.",
      },
      {
        question: "Do I need to be home during cleaning?",
        answer:
          "No, many clients provide access instructions. We're fully insured and trusted. However, you're welcome to be present if you prefer.",
      },
    ],
    industries: [
      "Residential Homes",
      "Apartments & Condos",
      "Office Spaces",
      "Commercial Buildings",
      "Restaurants",
      "Healthcare Facilities",
    ],
    includedServices: [
      "Vacuuming & mopping all floors",
      "Dusting all surfaces",
      "Bathroom deep clean",
      "Kitchen degreasing",
      "Window cleaning (interior)",
      "Trash removal",
    ],
    metaTitle:
      "Professional Cleaning Service | Alok Service – Trusted Home & Office Cleaners",
    metaDescription:
      "Top-rated cleaning service by Alok Service. Eco-friendly products, trained staff, 100% satisfaction. Book your deep cleaning today.",
  },
  {
    id: "pest-control",
    title: "Pest Control",
    slug: "pest-control",
    shortDescription:
      "Safe, effective pest control solutions for homes and businesses.",
    description:
      "Alok Service provides comprehensive pest control services using safe, modern techniques. We eliminate pests at the source and prevent future infestations. Our licensed technicians handle everything from common household pests to specialized commercial treatments.",
    icon: "Bug",
    image:
      "/pest-control.jpg",
    features: [
      "Licensed & trained technicians",
      "Safe, child-friendly treatments",
      "Targeted pest elimination",
      "Preventive protection plans",
      "Eco-friendly solutions",
      "Guaranteed results",
    ],
    benefits: [
      "Protect your family's health",
      "Prevent property damage",
      "Peace of mind 24/7",
      "Cost-effective prevention",
      "Professional expertise",
      "Long-term protection",
    ],
    process: [
      {
        step: 1,
        title: "Inspection",
        description:
          "We thoroughly inspect your property to identify pest type, infestation level, and entry points.",
      },
      {
        step: 2,
        title: "Custom Plan",
        description:
          "We design a targeted treatment plan specific to your pest problem and property type.",
      },
      {
        step: 3,
        title: "Treatment",
        description:
          "Our technicians apply safe, effective treatments to eliminate pests at the source.",
      },
      {
        step: 4,
        title: "Prevention",
        description:
          "We seal entry points and provide recommendations to prevent future infestations.",
      },
      {
        step: 5,
        title: "Follow-up",
        description:
          "We schedule follow-up visits to ensure complete elimination and lasting protection.",
      },
    ],
    faqs: [
      {
        question: "Are your pest control treatments safe for children?",
        answer:
          "Absolutely. We use EPA-approved, eco-friendly treatments that are safe for children and pets when used as directed.",
      },
      {
        question: "How many treatments will I need?",
        answer:
          "Most infestations are resolved in 1-3 treatments. We also offer preventive maintenance plans for ongoing protection.",
      },
      {
        question: "Do you offer emergency pest control?",
        answer:
          "Yes, we provide emergency services for severe infestations. Call our 24/7 helpline for immediate assistance.",
      },
    ],
    industries: [
      "Residential Homes",
      "Restaurants & Cafes",
      "Hotels & Hospitality",
      "Office Buildings",
      "Warehouses",
      "Healthcare Facilities",
    ],
    includedServices: [
      "Complete property inspection",
      "Targeted pest treatment",
      "Entry point sealing",
      "Preventive barrier spray",
      "Follow-up inspection",
      "Treatment warranty",
    ],
    metaTitle:
      "Expert Pest Control Service | Alok Service – Safe & Effective",
    metaDescription:
      "Professional pest control by Alok Service. Safe treatments for homes & businesses. Licensed technicians, guaranteed results. Book now.",
  },
  {
    id: "home-care",
    title: "Home Care Service",
    slug: "home-care",
    shortDescription:
      "Comprehensive home care services for elderly and recovery patients.",
    description:
      "Alok Service's home care program provides compassionate, professional care for elderly individuals and those recovering from illness or surgery. Our trained caregivers assist with daily activities, medication management, and companionship — all in the comfort of your home.",
    icon: "Home",
    image:
      "/home-care.jpg",
    features: [
      "Trained & certified caregivers",
      "Personalized care plans",
      "24/7 availability",
      "Medication management",
      "Companionship services",
      "Family communication updates",
    ],
    benefits: [
      "Aging in place with dignity",
      "Professional medical oversight",
      "Reduced hospital readmissions",
      "Peace of mind for families",
      "Personalized attention",
      "Cost-effective alternative",
    ],
    process: [
      {
        step: 1,
        title: "Free Consultation",
        description:
          "We assess your loved one's needs, preferences, and health requirements in person.",
      },
      {
        step: 2,
        title: "Care Plan Design",
        description:
          "We create a customized care plan tailored to individual needs and schedule.",
      },
      {
        step: 3,
        title: "Caregiver Match",
        description:
          "We match you with a compatible, trained caregiver based on personality and expertise.",
      },
      {
        step: 4,
        title: "Ongoing Care",
        description:
          "Our caregiver provides dedicated support with regular check-ins and adjustments.",
      },
      {
        step: 5,
        title: "Family Updates",
        description:
          "We keep families informed with regular progress reports and open communication.",
      },
    ],
    faqs: [
      {
        question: "How do you match caregivers with clients?",
        answer:
          "We consider medical needs, personality, language preferences, and lifestyle to ensure a compatible match. You can request a change anytime.",
      },
      {
        question: "Can care be provided 24 hours a day?",
        answer:
          "Yes, we offer live-in and 24/7 care options. Plans are fully customizable based on your needs.",
      },
      {
        question: "Are your caregivers medically trained?",
        answer:
          "All our caregivers are certified, background-checked, and receive ongoing training in elderly care, medication management, and emergency response.",
      },
    ],
    industries: [
      "Private Residences",
      "Senior Living Communities",
      "Rehabilitation Centers",
      "Hospice Care",
      "Post-Surgery Recovery",
      "Chronic Condition Management",
    ],
    includedServices: [
      "Personal care assistance",
      "Medication reminders",
      "Meal preparation",
      "Light housekeeping",
      "Companionship & conversation",
      "Mobility assistance",
    ],
    metaTitle:
      "Professional Home Care Service | Alok Service – Compassionate Care at Home",
    metaDescription:
      "Trusted home care by Alok Service. Trained caregivers for elderly & recovery patients. Personalized plans, 24/7 support. Enroll today.",
  },
  {
    id: "nursing",
    title: "Nursing Service",
    slug: "nursing",
    shortDescription:
      "Skilled nursing care at home. Professional, compassionate, reliable.",
    description:
      "Alok Service offers professional nursing care in the comfort of your home. Our registered nurses and licensed practical nurses provide skilled medical care, wound management, medication administration, and health monitoring. We bridge the gap between hospital and home with clinical excellence.",
    icon: "Stethoscope",
    image:
      "/nursing-service.jpg",
    features: [
      "Registered & licensed nurses",
      "Post-surgery wound care",
      "Medication administration",
      "Vital sign monitoring",
      "Care coordination with doctors",
      "Patient & family education",
    ],
    benefits: [
      "Recover in familiar surroundings",
      "Reduce hospital stays",
      "Professional medical oversight",
      "Lower infection risk",
      "Personalized nursing plans",
      "Family involvement encouraged",
    ],
    process: [
      {
        step: 1,
        title: "Needs Assessment",
        description:
          "A senior nurse visits to assess medical needs, home environment, and care requirements.",
      },
      {
        step: 2,
        title: "Care Plan",
        description:
          "We develop a detailed nursing care plan in coordination with your physician.",
      },
      {
        step: 3,
        title: "Nurse Assignment",
        description:
          "We assign a qualified nurse matched to your specific medical needs and schedule.",
      },
      {
        step: 4,
        title: "Skilled Care Delivery",
        description:
          "Our nurse provides professional medical care, monitors progress, and adjusts treatment.",
      },
      {
        step: 5,
        title: "Doctor Coordination",
        description:
          "We maintain regular communication with your healthcare provider for optimal outcomes.",
      },
    ],
    faqs: [
      {
        question: "What types of nursing services do you provide?",
        answer:
          "We offer wound care, medication management, post-surgical care, chronic disease management, IV therapy, and health monitoring among other services.",
      },
      {
        question: "Are your nurses registered and licensed?",
        answer:
          "Yes, all our nurses are fully registered (RN or LPN), licensed, insured, and undergo continuous professional development.",
      },
      {
        question: "How is home nursing different from hospital care?",
        answer:
          "Home nursing provides the same quality of medical care in a familiar setting, reducing stress, infection risk, and costs while speeding up recovery.",
      },
    ],
    industries: [
      "Private Homes",
      "Post-Surgical Recovery",
      "Chronic Illness Management",
      "Elderly Care Facilities",
      "Palliative Care",
      "Rehabilitation Centers",
    ],
    includedServices: [
      "Wound care & dressing changes",
      "Medication administration",
      "Vital sign monitoring",
      "Catheter & ostomy care",
      "Patient education",
      "Emergency response planning",
    ],
    metaTitle:
      "Home Nursing Service | Alok Service – Skilled Nursing at Home",
    metaDescription:
      "Professional home nursing by Alok Service. RNs & LPNs for wound care, medication, post-surgery recovery. Book skilled nursing today.",
  },
  {
    id: "caregiver-support",
    title: "Caregiver Support",
    slug: "caregiver-support",
    shortDescription:
      "Empowering caregivers with professional support and respite care.",
    description:
      "Alok Service understands the challenges of caregiving. Our caregiver support program provides respite care, training, counseling, and professional assistance to family caregivers. We help you maintain balance while ensuring your loved one receives excellent care.",
    icon: "HeartHandshake",
    image:
      "/caregiver-support.jpg",
    features: [
      "Respite care services",
      "Caregiver training programs",
      "24/7 helpline support",
      "Counseling & stress management",
      "Temporary coverage",
      "Support groups",
    ],
    benefits: [
      "Prevent caregiver burnout",
      "Take time for yourself",
      "Learn professional techniques",
      "Reduce family stress",
      "Improve care quality",
      "Build confidence",
    ],
    process: [
      {
        step: 1,
        title: "Caregiver Assessment",
        description:
          "We speak with you to understand your challenges, needs, and the level of support required.",
      },
      {
        step: 2,
        title: "Support Plan",
        description:
          "We design a customized support plan including respite hours, training, and resources.",
      },
      {
        step: 3,
        title: "Respite Care",
        description:
          "Our trained professional takes over while you rest, run errands, or recharge.",
      },
      {
        step: 4,
        title: "Training & Guidance",
        description:
          "We provide hands-on training in care techniques, medication management, and emergency response.",
      },
      {
        step: 5,
        title: "Ongoing Support",
        description:
          "We remain available for advice, backup care, and emotional support whenever needed.",
      },
    ],
    faqs: [
      {
        question: "What is respite care?",
        answer:
          "Respite care provides temporary relief for primary caregivers. Our professional team steps in to care for your loved one, giving you time to rest, work, or attend to personal matters.",
      },
      {
        question: "How much training do you provide?",
        answer:
          "We offer comprehensive training covering medication management, mobility assistance, emergency response, and self-care techniques for caregivers.",
      },
      {
        question: "Can you provide overnight support?",
        answer:
          "Yes, we offer overnight respite care so you can get uninterrupted sleep while we monitor and care for your loved one.",
      },
    ],
    industries: [
      "Family Homes",
      "Elderly Care Settings",
      "Special Needs Care",
      "Palliative Care",
      "Dementia Care",
      "Post-Stroke Recovery",
    ],
    includedServices: [
      "Respite care (hourly & overnight)",
      "Caregiver skills training",
      "Stress management resources",
      "Support group referrals",
      "24/7 helpline",
      "Emergency backup care",
    ],
    metaTitle:
      "Caregiver Support Services | Alok Service – Helping Those Who Care",
    metaDescription:
      "Professional caregiver support by Alok Service. Respite care, training, and counseling for family caregivers. Recharge with confidence.",
  },
  {
    id: "patient-care",
    title: "Patient Care",
    slug: "patient-care",
    shortDescription:
      "Dedicated patient care services for recovery and daily living assistance.",
    description:
      "Alok Service provides comprehensive patient care for individuals recovering from surgery, managing chronic conditions, or needing daily assistance. Our compassionate team ensures comfort, dignity, and professional support throughout your recovery journey.",
    icon: "HeartPulse",
    image:
      "/patient-care.jpg",
    features: [
      "24/7 patient monitoring",
      "Personal hygiene assistance",
      "Mobility & transfer support",
      "Nutrition & meal planning",
      "Medication management",
      "Emotional & mental support",
    ],
    benefits: [
      "Faster recovery at home",
      "Comfortable familiar environment",
      "Reduced hospital readmission",
      "Professional compassionate care",
      "Family peace of mind",
      "Cost-effective solution",
    ],
    process: [
      {
        step: 1,
        title: "Patient Assessment",
        description:
          "Our care coordinator visits to evaluate medical condition, home setup, and care needs.",
      },
      {
        step: 2,
        title: "Care Plan Development",
        description:
          "We create a detailed care plan aligned with your doctor's recommendations and personal preferences.",
      },
      {
        step: 3,
        title: "Caregiver Assignment",
        description:
          "We assign a trained patient care specialist matched to your medical and personal needs.",
      },
      {
        step: 4,
        title: "Daily Care Delivery",
        description:
          "Our team provides consistent, compassionate care with regular progress tracking.",
      },
      {
        step: 5,
        title: "Family Communication",
        description:
          "We keep families updated with daily reports and are always available for questions.",
      },
    ],
    faqs: [
      {
        question: "What conditions do you care for?",
        answer:
          "We care for patients recovering from surgery, stroke, heart conditions, as well as those with chronic illnesses like diabetes, Parkinson's, and dementia.",
      },
      {
        question: "Is patient care available 24/7?",
        answer:
          "Yes, we offer around-the-clock care with live-in options. Shifts can be customized from a few hours to full-time coverage.",
      },
      {
        question: "Do you coordinate with my doctor?",
        answer:
          "Absolutely. We work closely with your healthcare team to ensure care plans are aligned and updated as your condition changes.",
      },
    ],
    industries: [
      "Post-Surgery Recovery",
      "Chronic Disease Management",
      "Elderly Care",
      "Palliative & Hospice Care",
      "Rehabilitation Centers",
      "Home-Bound Patients",
    ],
    includedServices: [
      "Personal hygiene & bathing",
      "Toileting & incontinence care",
      "Mobility & transfer assistance",
      "Meal preparation & feeding",
      "Medication reminders",
      "Companionship & emotional support",
    ],
    metaTitle:
      "Patient Care Services | Alok Service – Compassionate Recovery at Home",
    metaDescription:
      "Professional patient care by Alok Service. Post-surgery, chronic illness, and daily living support. 24/7 availability. Book now.",
  },
  {
    id: "facility-management",
    title: "Facility Management Service",
    slug: "facility-management",
    shortDescription:
      "End-to-end facility management for commercial and residential properties.",
    description:
      "Alok Service offers comprehensive facility management solutions for commercial complexes, residential societies, and institutional properties. From maintenance and security to cleaning and vendor management, we ensure your facility operates seamlessly.",
    icon: "Building2",
    image:
      "/facility-management.jpg",
    features: [
      "Integrated facility management",
      "Maintenance & repairs",
      "Security & surveillance",
      "Housekeeping & sanitation",
      "Vendor management",
      "Energy efficiency optimization",
    ],
    benefits: [
      "Single point of contact",
      "Reduced operational costs",
      "Professional management",
      "24/7 issue resolution",
      "Compliance & safety",
      "Enhanced property value",
    ],
    process: [
      {
        step: 1,
        title: "Site Assessment",
        description:
          "We conduct a comprehensive audit of your facility's systems, infrastructure, and service needs.",
      },
      {
        step: 2,
        title: "Service Proposal",
        description:
          "We present a tailored facility management plan with clear SLAs, timelines, and pricing.",
      },
      {
        step: 3,
        title: "Team Deployment",
        description:
          "We deploy our trained team including supervisors, technicians, and support staff on-site.",
      },
      {
        step: 4,
        title: "Daily Operations",
        description:
          "Our team manages all aspects of facility operations with regular reporting and quality checks.",
      },
      {
        step: 5,
        title: "Performance Review",
        description:
          "We conduct monthly reviews to optimize performance, address concerns, and improve services.",
      },
    ],
    faqs: [
      {
        question: "What types of properties do you manage?",
        answer:
          "We manage commercial offices, residential societies, shopping malls, hospitals, educational institutions, and industrial facilities.",
      },
      {
        question: "How do you handle emergencies?",
        answer:
          "We have a 24/7 emergency response team. For urgent issues, our team is on-site within 2 hours or less.",
      },
      {
        question: "Can you customize service packages?",
        answer:
          "Yes, every facility has unique needs. We design customized packages with flexible SLAs and pricing structures.",
      },
    ],
    industries: [
      "Commercial Offices",
      "Residential Societies",
      "Shopping Malls",
      "Hospitals & Clinics",
      "Educational Institutions",
      "Industrial Facilities",
    ],
    includedServices: [
      "Building maintenance & repairs",
      "Housekeeping & janitorial",
      "Security services",
      "Pest control",
      "Waste management",
      "Landscaping & gardening",
    ],
    metaTitle:
      "Facility Management Service | Alok Service – Professional Property Care",
    metaDescription:
      "End-to-end facility management by Alok Service. Maintenance, security, cleaning & more for commercial & residential properties.",
  },
];

export const serviceCategories = [
  {
    name: "Home Services",
    services: ["cleaning", "pest-control", "facility-management"],
  },
  {
    name: "Healthcare Services",
    services: ["home-care", "nursing", "caregiver-support", "patient-care"],
  },
];
