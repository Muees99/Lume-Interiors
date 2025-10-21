// // app/projects/projects.ts

// export type Project = {
//   slug: string;
//   title: string;
//   category: "past" | "ongoing" | "recent";
//   description: string;
//   cost: string;
//   date: string;
//   duration: string;
//   location: string;
//   image: string;
//   highlights: string[];
// };

// export const projects: Project[] = [
//   // 🏗️ Past Projects
//   {
//     slug: "lagos-modern-villa",
//     title: "Lagos Modern Villa",
//     category: "past",
//     date: "Completed: May 2024",
//     description:
//       "A contemporary villa in Ikoyi combining open space with luxury minimalism.",
//     cost: "$450,000",
//     duration: "10 months",
//     location: "Ikoyi, Lagos",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
//     highlights: [
//       "Open floor plan with panoramic glazing",
//       "Energy-efficient materials",
//       "Smart lighting integration",
//     ],
//   },
//   {
//     slug: "victoria-island-penthouse",
//     title: "Victoria Island Penthouse",
//     category: "past",
//     date: "Completed: March 2024",
//     description:
//       "A top-floor masterpiece merging art and architecture for urban elites.",
//     cost: "$380,000",
//     duration: "9 months",
//     location: "Victoria Island, Lagos",
//     image:
//       "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
//     highlights: [
//       "Custom Italian marble flooring",
//       "Private rooftop terrace",
//       "360° city view",
//     ],
//   },
//   {
//     slug: "lekki-family-home",
//     title: "Lekki Family Home",
//     category: "past",
//     date: "Completed: January 2024",
//     description:
//       "A family-friendly smart home balancing modern style with comfort.",
//     cost: "$250,000",
//     duration: "8 months",
//     location: "Lekki Phase 1, Lagos",
//     image:
//       "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
//     highlights: [
//       "Smart home automation",
//       "Private pool area",
//       "Minimalist Scandinavian design",
//     ],
//   },
//   {
//     slug: "abuja-corporate-lounge",
//     title: "Abuja Corporate Lounge",
//     category: "past",
//     date: "Completed: November 2023",
//     description:
//       "A sophisticated corporate space designed for productivity and elegance.",
//     cost: "$300,000",
//     duration: "6 months",
//     location: "Maitama, Abuja",
//     image:
//       "https://images.unsplash.com/photo-1688269910939-4c36b34402b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
//     highlights: [
//       "Ergonomic office layout",
//       "Natural light optimization",
//       "Acoustic soundproof design",
//     ],
//   },
//   {
//     slug: "ikeja-luxury-apartments",
//     title: "Ikeja Luxury Apartments",
//     category: "past",
//     date: "Completed: September 2023",
//     description:
//       "A 12-unit luxury apartment complex redefining urban living aesthetics.",
//     cost: "$1.2M",
//     duration: "14 months",
//     location: "Ikeja GRA, Lagos",
//     image:
//       "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80",
//     highlights: [
//       "Green-certified building",
//       "Private balconies",
//       "Rooftop entertainment deck",
//     ],
//   },
//   {
//     slug: "portharcourt-villa",
//     title: "Port Harcourt Villa",
//     category: "past",
//     date: "Completed: July 2023",
//     description:
//       "A beautiful residential villa showcasing cultural design harmony.",
//     cost: "$500,000",
//     duration: "11 months",
//     location: "Port Harcourt, Rivers State",
//     image:
//       "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
//     highlights: [
//       "Traditional meets modern architecture",
//       "Rainwater harvesting system",
//       "Handcrafted wooden interiors",
//     ],
//   },

//   // 🔨 Ongoing Projects
//   {
//     slug: "eko-tower-redesign",
//     title: "Eko Tower Redesign",
//     category: "ongoing",
//     date: "In progress (6 months left)",
//     description:
//       "Revamping a corporate skyscraper to meet 2025 energy standards.",
//     cost: "$800,000",
//     duration: "In progress (4 months left)",
//     location: "Eko Atlantic, Lagos",
//     image:
//       "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
//     highlights: [
//       "Facade modernization",
//       "Solar integration",
//       "Smart building sensors",
//     ],
//   },
//   {
//     slug: "lagos-beach-resort",
//     title: "Lagos Beach Resort",
//     category: "ongoing",
//     date: "Ongoing (completion 2026)",
//     description:
//       "A luxury beachfront resort blending sustainability and tranquility.",
//     cost: "$2.1M",
//     duration: "Ongoing (completion 2026)",
//     location: "Ilashe Beach, Lagos",
//     image:
//       "https://images.unsplash.com/photo-1544143086-828f66ac3945?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
//     highlights: [
//       "Ocean-view villas",
//       "Solar cooling system",
//       "Locally sourced materials",
//     ],
//   },
//   {
//     slug: "lagos-tech-hub",
//     title: "Lagos Tech Hub",
//     category: "ongoing",
//     date: "Ongoing (5 months left)",
//     description:
//       "Developing a multi-purpose innovation hub for startups and creators.",
//     cost: "$900,000",
//     duration: "Ongoing (5 months left)",
//     location: "Yaba, Lagos",
//     image:
//       "https://images.unsplash.com/photo-1585675705484-c2239e62a395?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935",
//     highlights: [
//       "Open collaborative spaces",
//       "Smart lighting and cooling",
//       "Biophilic design integration",
//     ],
//   },

//   {
//     slug: "lagos-tech-hub",
//     title: "Lagos Tech Hub",
//     category: "ongoing",
//     date: "Ongoing (5 months left)",
//     description:
//       "Developing a multi-purpose innovation hub for startups and creators.",
//     cost: "$900,000",
//     duration: "Ongoing (5 months left)",
//     location: "Ikoyi, Lagos",
//     image:
//       "https://images.unsplash.com/photo-1592809617704-5fae402e9634?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1333",
//     highlights: [
//       "Open collaborative spaces",
//       "Smart lighting and cooling",
//       "Biophilic design integration",
//     ],
//   },
//   {
//     slug: "lagos-tech-hub",
//     title: "Downtown Art Hub",
//     category: "ongoing",
//     date: "Ongoing (5 months left)",
//     description:
//       "Developing a multi-purpose innovation hub for startups and creators.",
//     cost: "$900,000",
//     duration: "Ongoing (5 months left)",
//     location: "Surulere, Lagos",
//     image:
//       "https://images.unsplash.com/photo-1605429523419-d828acb941d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
//     highlights: [
//       "Open collaborative spaces",
//       "Smart lighting and cooling",
//       "Biophilic design integration",
//     ],
//   },

//   {
//     slug: "lagos-tech-hub",
//     title: " Warehouse Hub",
//     category: "ongoing",
//     date: "Ongoing (5 months left)",
//     description:
//       "Developing a multi-purpose innovation hub for startups and creators.",
//     cost: "$900,000",
//     duration: "Ongoing (5 months left)",
//     location: "Wharf, Lagos",
//     image:
//       "https://images.unsplash.com/photo-1758789667762-56175fe4601c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
//     highlights: [
//       "Open collaborative spaces",
//       "Smart lighting and cooling",
//       "Biophilic design integration",
//     ],
//   },

//   // 🆕 Recent Projects
//   {
//     slug: "abuja-luxury-hotel",
//     title: "Abuja Luxury Hotel",
//     category: "recent",
//     date: "Initiated: October 2025",
//     description:
//       "A 5-star hotel combining sustainable architecture and cultural elegance.",
//     cost: "$1.5M",
//     duration: "12 months",
//     location: "Abuja, FCT",
//     image:
//       "https://images.unsplash.com/photo-1656838611814-3b0bd9c3f6dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
//     highlights: [
//       "Smart climate control",
//       "Infinity rooftop pool",
//       "Cultural art integration",
//     ],
//   },
//   {
//     slug: "lagos-gallery-house",
//     title: "Lagos Gallery House",
//     category: "recent",
//     date: "Initiated: September 2025",
//     description:
//       "A modern home designed as both a living space and private art gallery.",
//     cost: "$600,000",
//     duration: "10 months",
//     location: "Lekki, Lagos",
//     image:
//       "https://images.unsplash.com/photo-1680969219837-1ac8a5e807cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
//     highlights: [
//       "Glass atrium design",
//       "Art display lighting",
//       "Eco-friendly construction",
//     ],
//   },
//   {
//     slug: "abuja-luxury-hotel",
//     title: "Pinnacle Housing Estate",
//     category: "recent",
//     date: "Initiated: October 2025",
//     description:
//       "A 5-star hotel combining sustainable architecture and cultural elegance.",
//     cost: "$1.5M",
//     duration: "12 months",
//     location: "Abuja, FCT",
//     image:
//       "https://images.unsplash.com/photo-1749058387906-f80774c5f48d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
//     highlights: [
//       "Smart climate control",
//       "Infinity rooftop pool",
//       "Cultural art integration",
//     ],
//   },
//   {
//     slug: "abuja-luxury-hotel",
//     title: "Duplex Residence",
//     category: "recent",
//     date: "Initiated: October 2025",
//     description:
//       "A 5-star hotel combining sustainable architecture and cultural elegance.",
//     cost: "$1.5M",
//     duration: "12 months",
//     location: "Abuja, FCT",
//     image:
//       "https://images.unsplash.com/photo-1712806377231-256e4a1f0a8e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
//     highlights: [
//       "Smart climate control",
//       "Infinity rooftop pool",
//       "Cultural art integration",
//     ],
//   },
//   {
//     slug: "abuja-luxury-hotel",
//     title: "Semi-Detached Villas",
//     category: "recent",
//     date: "Initiated: October 2025",
//     description:
//       "A 5-star hotel combining sustainable architecture and cultural elegance.",
//     cost: "$1.5M",
//     duration: "12 months",
//     location: "Abuja, FCT",
//     image:
//       "https://images.unsplash.com/photo-1643297551340-19d8ad4f20ad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
//     highlights: [
//       "Smart climate control",
//       "Infinity rooftop pool",
//       "Cultural art integration",
//     ],
//   },
//   {
//     slug: "abuja-luxury-hotel",
//     title: "Maisonette Complex",
//     category: "recent",
//     date: "Initiated: October 2025",
//     description:
//       "A 5-star hotel combining sustainable architecture and cultural elegance.",
//     cost: "$1.5M",
//     duration: "12 months",
//     location: "Abuja, FCT",
//     image:
//       "https://images.unsplash.com/photo-1648840887119-a9d33c964054?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
//     highlights: [
//       "Smart climate control",
//       "Infinity rooftop pool",
//       "Cultural art integration",
//     ],
//   },
// ];

// export function getProjectBySlug(slug: string) {
//   return projects.find((p) => p.slug === slug);
// }

// export async function generateStaticParams() {
//   return projects.map((project) => ({ slug: project.slug }));
// }

// app/projects/projects.ts

export type Project = {
  slug: string;
  title: string;
  category: "past" | "ongoing" | "recent";
  description: string;
  cost: string;
  date: string;
  duration: string;
  location: string;
  image: string;
  highlights: string[];
};

export const projects: Project[] = [
  // 🏗️ Past Projects
  {
    slug: "lagos-modern-villa",
    title: "Lagos Modern Villa",
    category: "past",
    date: "Completed: May 2024",
    description:
      "A contemporary villa in Ikoyi combining open space with luxury minimalism.",
    cost: "$450,000",
    duration: "10 months",
    location: "Ikoyi, Lagos",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Open floor plan with panoramic glazing",
      "Energy-efficient materials",
      "Smart lighting integration",
    ],
  },
  {
    slug: "victoria-island-penthouse",
    title: "Victoria Island Penthouse",
    category: "past",
    date: "Completed: March 2024",
    description:
      "A top-floor masterpiece merging art and architecture for urban elites.",
    cost: "$380,000",
    duration: "9 months",
    location: "Victoria Island, Lagos",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Custom Italian marble flooring",
      "Private rooftop terrace",
      "360° city view",
    ],
  },
  {
    slug: "lekki-family-home",
    title: "Lekki Family Home",
    category: "past",
    date: "Completed: January 2024",
    description:
      "A family-friendly smart home balancing modern style with comfort.",
    cost: "$250,000",
    duration: "8 months",
    location: "Lekki Phase 1, Lagos",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Smart home automation",
      "Private pool area",
      "Minimalist Scandinavian design",
    ],
  },

  {
    slug: "portharcourt-villa",
    title: "Port Harcourt Villa",
    category: "past",
    date: "Completed: July 2023",
    description:
      "A beautiful residential villa showcasing cultural design harmony.",
    cost: "$500,000",
    duration: "11 months",
    location: "Port Harcourt, Rivers State",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Traditional meets modern architecture",
      "Rainwater harvesting system",
      "Handcrafted wooden interiors",
    ],
  },

  {
    slug: "abuja-corporate-lounge",
    title: "Abuja Corporate Lounge",
    category: "past",
    date: "Completed: November 2023",
    description:
      "A sophisticated corporate space designed for productivity and elegance.",
    cost: "$300,000",
    duration: "6 months",
    location: "Maitama, Abuja",
    image:
      "https://images.unsplash.com/photo-1688269910939-4c36b34402b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
    highlights: [
      "Ergonomic office layout",
      "Natural light optimization",
      "Acoustic soundproof design",
    ],
  },

  {
    slug: "ikeja-luxury-apartments",
    title: "Ikeja Luxury Apartments",
    category: "past",
    date: "Completed: September 2023",
    description:
      "A 12-unit luxury apartment complex redefining urban living aesthetics.",
    cost: "$1.2M",
    duration: "14 months",
    location: "Ikeja GRA, Lagos",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Green-certified building",
      "Private balconies",
      "Rooftop entertainment deck",
    ],
  },

  // 🔨 Ongoing Projects
  {
    slug: "eko-tower-redesign",
    title: "Eko Tower Redesign",
    category: "ongoing",
    date: "In progress (6 months left)",
    description:
      "Revamping a corporate skyscraper to meet 2025 energy standards.",
    cost: "$800,000",
    duration: "In progress (4 months left)",
    location: "Eko Atlantic, Lagos",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Facade modernization",
      "Solar integration",
      "Smart building sensors",
    ],
  },
  {
    slug: "lagos-tech-hub-yaba",
    title: "Lagos Tech Hub (Yaba)",
    category: "ongoing",
    date: "Ongoing (5 months left)",
    description:
      "Developing a multi-purpose innovation hub for startups and creators.",
    cost: "$900,000",
    duration: "Ongoing (5 months left)",
    location: "Yaba, Lagos",
    image:
      "https://images.unsplash.com/photo-1592809617704-5fae402e9634?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1333",
    highlights: [
      "Open collaborative spaces",
      "Smart lighting and cooling",
      "Biophilic design integration",
    ],
  },
  {
    slug: "lagos-tech-hub",
    title: " Warehouse Hub",
    category: "ongoing",
    date: "Ongoing (5 months left)",
    description:
      "Developing a multi-purpose innovation hub for startups and creators.",
    cost: "$900,000",
    duration: "Ongoing (5 months left)",
    location: "Wharf, Lagos",
    image:
      "https://images.unsplash.com/photo-1758789667762-56175fe4601c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
    highlights: [
      "Open collaborative spaces",
      "Smart lighting and cooling",
      "Biophilic design integration",
    ],
  },

  {
    slug: "downtown-art-hub",
    title: "Downtown Art Hub",
    category: "ongoing",
    date: "Ongoing (5 months left)",
    description:
      "Transforming an old warehouse into a vibrant creative art hub.",
    cost: "$900,000",
    duration: "Ongoing (5 months left)",
    location: "Surulere, Lagos",
    image:
      "https://images.unsplash.com/photo-1605429523419-d828acb941d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
    highlights: [
      "Open collaborative spaces",
      "Smart lighting and cooling",
      "Biophilic design integration",
    ],
  },
  {
    slug: "lagos-beach-resort",
    title: "Lagos Beach Resort",
    category: "ongoing",
    date: "Ongoing (completion 2026)",
    description:
      "A luxury beachfront resort blending sustainability and tranquility.",
    cost: "$2.1M",
    duration: "Ongoing (completion 2026)",
    location: "Ilashe Beach, Lagos",
    image:
      "https://images.unsplash.com/photo-1544143086-828f66ac3945?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    highlights: [
      "Ocean-view villas",
      "Solar cooling system",
      "Locally sourced materials",
    ],
  },

  {
    slug: "lagos-tech-hub",
    title: "Lagos Tech Hub",
    category: "ongoing",
    date: "Ongoing (5 months left)",
    description:
      "Developing a multi-purpose innovation hub for startups and creators.",
    cost: "$900,000",
    duration: "Ongoing (5 months left)",
    location: "Ikoyi, Lagos",
    image:
      "https://images.unsplash.com/photo-1592809617704-5fae402e9634?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1333",
    highlights: [
      "Open collaborative spaces",
      "Smart lighting and cooling",
      "Biophilic design integration",
    ],
  },

  // 🆕 Recent Projects
  {
    slug: "abuja-luxury-hotel-main",
    title: "Abuja Luxury Hotel",
    category: "recent",
    date: "Initiated: October 2025",
    description:
      "A 5-star hotel combining sustainable architecture and cultural elegance.",
    cost: "$1.5M",
    duration: "12 months",
    location: "Abuja, FCT",
    image:
      "https://images.unsplash.com/photo-1712806377231-256e4a1f0a8e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
    highlights: [
      "Smart climate control",
      "Infinity rooftop pool",
      "Cultural art integration",
    ],
  },
  {
    slug: "pinnacle-housing-estate",
    title: "Pinnacle Housing Estate",
    category: "recent",
    date: "Initiated: October 2025",
    description:
      "A contemporary residential estate with family-focused designs and green spaces.",
    cost: "$1.2M",
    duration: "14 months",
    location: "Abuja, FCT",
    image:
      "https://images.unsplash.com/photo-1749058387906-f80774c5f48d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    highlights: [
      "Smart climate control",
      "Infinity rooftop pool",
      "Cultural art integration",
    ],
  },
  {
    slug: "lagos-gallery-house",
    title: "Lagos Gallery House",
    category: "recent",
    date: "Initiated: September 2025",
    description:
      "A modern home designed as both a living space and private art gallery.",
    cost: "$600,000",
    duration: "10 months",
    location: "Lekki, Lagos",
    image:
      "https://images.unsplash.com/photo-1680969219837-1ac8a5e807cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    highlights: [
      "Glass atrium design",
      "Art display lighting",
      "Eco-friendly construction",
    ],
  },
  {
    slug: "downtown-coastal-house",
    title: "Downtown Coastal House",
    category: "recent",
    date: "Initiated: October 2025",
    description:
      "A modern home designed as both a living space and private art gallery.",
    cost: "$23M",
    duration: "10 months",
    location: "Orchid, Lagos",
    image:
      "https://images.unsplash.com/photo-1674157040737-018a6a43a327?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    highlights: [
      "Seaside modern design with open spaces",
      "Art display lighting",
      "Eco-friendly construction",
    ],
  },
  {
    slug: "maisonette-complex",
    title: "Maisonette Complex",
    category: "recent",
    date: "Initiated: October 2025",
    description:
      "A 5-star hotel combining sustainable architecture and cultural elegance.",
    cost: "$1.5M",
    duration: "12 months",
    location: "Jericho,Ibadan",
    image:
      "https://images.unsplash.com/photo-1648840887119-a9d33c964054?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    highlights: [
      "Smart climate control",
      "Infinity rooftop pool",
      "Cultural art integration",
    ],
  },
  {
    slug: " tennis-court-complex",
    title: "Tennis Court Complex",
    category: "recent",
    date: "Initiated: October 2025",
    description:
      "A 5-star hotel combining sustainable architecture and cultural elegance.",
    cost: "$1.5M",
    duration: "12 months",
    location: "Jericho,Ibadan",
    image:
      "https://images.unsplash.com/photo-1709587825135-80b00570c355?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
    highlights: [
      "Smart climate control",
      "Infinity Swimming pool",
      "Cultural art room integration",
    ],
  },
];


export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
