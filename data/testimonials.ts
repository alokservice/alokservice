export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    location: "Dhaka",
    service: "Cleaning Service",
    rating: 5,
    content:
      "Alok Service transformed my home. Their cleaning team was thorough, professional, and incredibly detailed. Every surface sparkled. I've never been happier with a service provider. Highly recommended!",
    avatar: "/avatar-1.jpg",
  },
  {
    id: "t2",
    name: "Rajesh Kumar",
    location: "Mirpur, Dhaka",
    service: "Pest Control",
    rating: 5,
    content:
      "We had a severe termite issue that no one could fix. Alok Service's team identified the source immediately and resolved it permanently. Their follow-up service is exceptional. Truly professionals.",
    avatar: "/team-1.jpg",
  },
  {
    id: "t3",
    name: "Anita Verma",
    location: "Uttara, Dhaka",
    service: "Home Care",
    rating: 5,
    content:
      "Finding care for my mother was stressful until we found Alok Service. Their caregiver is compassionate, punctual, and incredibly capable. Mom looks forward to her visits. Thank you for your wonderful service.",
    avatar: "/team-2.jpg",
  },
  {
    id: "t4",
    name: "Dr. Suresh Patel",
    location: "Dhaka",
    service: "Nursing Service",
    rating: 5,
    content:
      "As a physician, I recommend Alok Service to my patients for home nursing care. Their nurses are skilled, professional, and follow medical protocols diligently. A trusted partner in patient recovery.",
    avatar: "/team-3.jpg",
  },
  {
    id: "t5",
    name: "Meera Joshi",
    location: "Mirpur, Dhaka",
    service: "Caregiver Support",
    rating: 5,
    content:
      "Being a caregiver for my husband was exhausting until Alok Service stepped in. Their respite care gave me time to recharge while knowing he was in safe hands. A lifeline for family caregivers.",
    avatar: "/team-4.jpg",
  },
  {
    id: "t6",
    name: "Vikram Singh",
    location: "Gulshan, Dhaka",
    service: "Facility Management",
    rating: 5,
    content:
      "Alok Service manages our entire office complex. Their team handles everything seamlessly — cleaning, security, maintenance. Our employees love the well-maintained environment. Outstanding service partner.",
    avatar: "/avatar-2.jpg",
  },
];
