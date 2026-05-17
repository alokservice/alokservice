export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    image: "/team-1.jpg",
    name: "Alok Kumar",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in service management, Alok founded Alok Service with a vision to transform home and healthcare services in Bangladesh.",
  },
  {
    name: "Dr. Neha Gupta",
    role: "Head of Healthcare Services",
    bio: "A qualified physician with 12 years of clinical experience, Dr. Gupta ensures our healthcare services meet the highest medical standards.",
    image: "/team-2.jpg",
  },
  {
    name: "Ravi Mehta",
    role: "Operations Director",
    bio: "Ravi brings 10 years of operational excellence, managing our team of 250+ professionals across Dhaka with efficiency and care.",
    image: "/team-3.jpg",
  },
  {
    name: "Sunita Reddy",
    role: "Quality Assurance Head",
    bio: "Sunita leads our quality initiatives, ensuring every service delivered meets our rigorous standards through systematic audits and feedback.",
    image: "/team-4.jpg",
  },
];
