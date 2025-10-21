// export const dynamic = "force-dynamic";

// import { notFound } from "next/navigation";
// import ServicesContent from "./ServicesContent";

// const services = [
//   {
//     title: "Interior Design Consultation",
//     slug: "interior-design-consultation",
//     category: "Design & Architecture",
//     description:
//       "We provide in-depth design guidance, mood boards, and concept development to match your aesthetic and budget.",
//     costEstimate: "$1,200 - $3,500",
//     image:
//       "https://images.unsplash.com/photo-1719903466697-ee9437c8572f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935",
//   },
//   {
//     title: "Luxury Home Architecture",
//     slug: "luxury-home-architecture",
//     category: "Design & Architecture",
//     description:
//       "Our architectural services blend innovation and timeless design for residential and commercial spaces.",
//     costEstimate: "$15,000 - $40,000",
//     image:
//       "https://images.unsplash.com/photo-1721244653721-bc681b2dfd27?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=748",
//   },

//   {
//     title: "Commercial Renovation",
//     slug: "commercial-renovation",
//     category: "Construction & Renovation",
//     description:
//       "We specialize in upgrading commercial buildings with sustainable and efficient renovation solutions.",
//     costEstimate: "$20,000 - $60,000",
//     image:
//       "https://images.unsplash.com/photo-1698889670683-a40e1be44e46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
//   },

//   {
//     title: "Project Management",
//     slug: "project-management",
//     category: "Consultation & Project Management",
//     description:
//       "Our project managers oversee every detail, ensuring timely delivery and budget adherence.",
//     costEstimate: "$5,000 - $15,000",
//     image:
//       "https://images.unsplash.com/photo-1722501106404-6ce75d0ead53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
//   },

//   {
//     title: "Facility Maintenance",
//     slug: "facility-maintenance",
//     category: "Maintenance & Facility Support",
//     description:
//       "Long-term maintenance plans that ensure your facilities remain in top shape.",
//     costEstimate: "$1,000 - $5,000 per month",
//     image:
//       "https://images.unsplash.com/photo-1719050817004-c76eb7c75c99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1058",
//   },
//   {
//     title: "Facility Support",
//     slug: "facility-support",
//     category: "Maintenance & Facility Support",
//     description:
//       "Long-term maintenance plans that ensure your facilities remain in top shape.",
//     costEstimate: "$1,000 - $5,000 per month",
//     image:
//       "https://images.unsplash.com/photo-1614805137281-8adea8f3967e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=682",
//   },
//   // ...rest of your services
// ];

// export async function generateStaticParams() {
//   return services.map((s) => ({ slug: s.slug }));
// }

// export default function ServiceDetailsPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const service = services.find((s) => s.slug === params.slug);
//   if (!service) return notFound();

//   return <ServicesContent service={service} />;
// }


// export function generateMetadata({ params }: { params: { slug: string } }) {
//   const service = services.find((s) => s.slug === params.slug);
//   if (!service) return { title: "Service Not Found" };
//   return {
//     title: `${service.title} | Lumé Interiors`,
//     description: service.description,
//   };
// }



export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import ServicesContent from "./ServicesContent"; // ✅ fix name (singular)

const services = [
  {
    title: "Interior Design Consultation",
    slug: "interior-design-consultation",
    category: "Design & Architecture",
    description:
      "We provide in-depth design guidance, mood boards, and concept development to match your aesthetic and budget.",
    costEstimate: "$1,200 - $3,500",
    image:
      "https://images.unsplash.com/photo-1719903466697-ee9437c8572f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1935",
  },
  {
    title: "Luxury Home Architecture",
    slug: "luxury-home-architecture",
    category: "Design & Architecture",
    description:
      "Our architectural services blend innovation and timeless design for residential and commercial spaces.",
    costEstimate: "$15,000 - $40,000",
    image:
      "https://images.unsplash.com/photo-1721244653721-bc681b2dfd27?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=748",
  },

     {
       title: "Commercial Renovation",
       slug: "commercial-renovation",
       category: "Construction & Renovation",
       description:
         "We specialize in upgrading commercial buildings with sustainable and efficient renovation solutions.",
       costEstimate: "$20,000 - $60,000",
       image:
         "https://images.unsplash.com/photo-1698889670683-a40e1be44e46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
     },
     {
       title: "Project Management",
       slug: "project-management",
       category: "Consultation & Project Management",
       description:
         "Our project managers oversee every detail, ensuring timely delivery and budget adherence.",
       costEstimate: "$5,000 - $15,000",
       image:
         "https://images.unsplash.com/photo-1722501106404-6ce75d0ead53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
     },
     {
       title: "Facility Maintenance",
       slug: "facility-maintenance",
       category: "Maintenance & Facility Support",
       description:
         "Long-term maintenance plans that ensure your facilities remain in top shape.",
       costEstimate: "$1,000 - $5,000 per month",
       image:
         "https://images.unsplash.com/photo-1719050817004-c76eb7c75c99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1058",
     },
     {
       title: "Facility Support",
       slug: "facility-support",
       category: "Maintenance & Facility Support",
       description:
         "Long-term maintenance plans that ensure your facilities remain in top shape.",
       costEstimate: "$1,000 - $5,000 per month",
       image:
         "https://images.unsplash.com/photo-1614805137281-8adea8f3967e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=682",
     },
  // ... rest of your services
];

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
// Initial 
export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Lumé Interiors`,
    description: service.description,
  };
}

export default function ServiceDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return <ServicesContent service={service} />;
}
