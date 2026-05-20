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
    avatar: "/images/testimonials/avatar-1.jpg",
  },
  {
    id: "t2",
    name: "Rajesh Kumar",
    location: "Mirpur, Dhaka",
    service: "Pest Control",
    rating: 5,
    content:
      "We had a severe termite issue that no one could fix. Alok Service's team identified the source immediately and resolved it permanently. Their follow-up service is exceptional. Truly professionals.",
    avatar: "/images/team/team-1.jpg",
  },
  {
    id: "t3",
    name: "Anita Verma",
    location: "Uttara, Dhaka",
    service: "Home Care",
    rating: 5,
    content:
      "Finding care for my mother was stressful until we found Alok Service. Their caregiver is compassionate, punctual, and incredibly capable. Mom looks forward to her visits. Thank you for your wonderful service.",
    avatar: "/images/team/team-2.jpg",
  },
  {
    id: "t4",
    name: "Dr. Suresh Patel",
    location: "Dhaka",
    service: "Nursing Service",
    rating: 5,
    content:
      "As a physician, I recommend Alok Service to my patients for home nursing care. Their nurses are skilled, professional, and follow medical protocols diligently. A trusted partner in patient recovery.",
    avatar: "/images/team/team-3.jpg",
  },
  {
    id: "t5",
    name: "Meera Joshi",
    location: "Mirpur, Dhaka",
    service: "Baby Care Service",
    rating: 5,
    content:
      "Finding reliable care for my baby was stressful until Alok Service stepped in. Their caregiver is loving, attentive, and incredibly capable. My baby loves her, and I can work with peace of mind. Exceptional service!",
    avatar: "/images/team/team-4.jpg",
  },
  {
    id: "t6",
    name: "Vikram Singh",
    location: "Gulshan, Dhaka",
    service: "Facility Management",
    rating: 5,
    content:
      "Alok Service manages our entire office complex. Their team handles everything seamlessly — cleaning, security, maintenance. Our employees love the well-maintained environment. Outstanding service partner.",
    avatar: "/images/testimonials/avatar-2.jpg",
  },
];
