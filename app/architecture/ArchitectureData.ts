// app/components/ArchitectureData.ts
export type ArchitectureProject = {
  slug: string;
  title: string;
  location: string;
  contractor: string;
  foundation: string;
  reason: string;
  description: string;
  image: string;
  story: string;
  gallery: string[];
};

export const architectureProjects: ArchitectureProject[] = [
  {
    slug: "horizon-villa",
    title: "The Horizon Villa",
    location: "Lagos, Nigeria",
    contractor: "CrestBuild Associates",
    foundation: "Reinforced Concrete Raft Foundation",
    reason:
      "Coastal terrain required a raft foundation for even load distribution and resistance against shifting soil.",
    description:
      "A luxury modern villa with panoramic glass walls and cascading water elements overlooking the Atlantic.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    story: `
      Horizon Villa represents a milestone in our pursuit of balance between design and engineering.
      The open-plan layout blurs indoor and outdoor boundaries, featuring retractable glass walls,
      custom timber facades, and smart ventilation systems. Every corner of this home speaks to light,
      flow, and quiet sophistication.
    `,
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
      "https://images.unsplash.com/photo-1664718290306-8dc74f5fe511?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=780",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1723470915922-7a96280a38e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    ],
  },
  {
    slug: "skyline-tower",
    title: "Skyline Tower",
    location: "Abuja, Nigeria",
    contractor: "Axis Engineering Group",
    foundation: "Pile Foundation System",
    reason:
      "Deep pile foundations were necessary to handle high-rise structural loads and minimize soil settlement.",
    description:
      "A 40-story glass and steel marvel redefining the Abuja skyline with sustainability and elegance.",
    image:
      "https://images.unsplash.com/photo-1726056005580-2a3f090a9586?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627",
    story: `
      The Skyline Tower stands as a fusion of modern technology and timeless design.  
      Using high-strength steel framing and double-glazed panels, it ensures energy efficiency while offering panoramic views.
      Each floor was designed with natural light optimization and smart HVAC systems that adapt to climate conditions.
    `,
    gallery: [
      "https://images.unsplash.com/photo-1726056005215-24018d999e25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627",
      "https://images.unsplash.com/photo-1726056006876-ce59d38f7ea2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627",
      "https://images.unsplash.com/photo-1605395458921-377601a3df7b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
      "https://images.unsplash.com/photo-1646800474692-e2a34c3da94f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=702",
    ],
  },
  {
    slug: "aurora-complex",
    title: "Aurora Office Complex",
    location: "Port Harcourt, Nigeria",
    contractor: "NeoStruct Engineering",
    foundation: "Pile Foundation with Ground Beams",
    reason:
      "Swampy subsoil required a pile foundation reinforced by ground beams for long-term stability.",
    description:
      "A sleek office complex where sustainability meets performance in every detail.",
    image:
      "https://images.unsplash.com/photo-1590579550920-4f962a5a86d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1033",
    story: `
      Aurora Complex redefines workspace architecture with flexible layouts, biophilic interiors, and
      smart daylight controls. Built with reinforced concrete cores and modular glass panels, it’s
      engineered for energy efficiency and long-term durability in humid environments.
    `,
    gallery: [
      "https://images.unsplash.com/photo-1632913787960-b08ea3fd41af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      "https://images.unsplash.com/photo-1670427778041-677693880b65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1654442137088-e30a30fceb6f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
      "https://images.unsplash.com/photo-1587925064017-0ecb4036275e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    ],
  },
  {
    slug: "avenir-estate",
    title: "The Avenir Estate",
    location: "Abuja, Nigeria",
    contractor: "PrimeForm Construction",
    foundation: "Reinforced Concrete Pad Foundation",
    reason:
      "Optimal for stable soil conditions, supporting low-rise smart homes within the estate.",
    description:
      "A smart residential community designed for sustainability, safety, and serene living.",
    image:
      "https://images.unsplash.com/photo-1714114931959-a1ed97bc530b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    story: `
      The Avenir Estate integrates green energy systems, community gardens, and intelligent home automation.
      Built for modern families, it’s a blueprint for sustainable residential development in West Africa.
    `,
    gallery: [
      "https://images.unsplash.com/photo-1714114931959-a1ed97bc530b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      "https://images.unsplash.com/photo-1628301764672-c90a7591eb33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      "https://images.unsplash.com/photo-1558931055-a688d67f803b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1333",
      "https://images.unsplash.com/photo-1656922141289-cb26d91f98be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    ],
  },
];

export function getArchitectureBySlug(slug: string) {
  return architectureProjects.find((a) => a.slug === slug);
}

export async function generateStaticParams() {
  return architectureProjects.map((a) => ({ slug: a.slug }));
}
