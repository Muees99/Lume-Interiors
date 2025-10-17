// import ProjectContent from "./ProjectContent";

// const allProjects = {
// //   "urban-luxury-apartment": {
// //     title: "Urban Luxury Apartment",
// //     hero: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
// //     overview:
// //       "This project represents modern sophistication through neutral tones, open layouts, and natural lighting — achieving a luxurious, calm experience in the heart of the city.",
// //     goals: [
// //       "Maximize natural light and space flow",
// //       "Blend modern materials with timeless finishes",
// //       "Design custom furniture for compact luxury",
// //     ],
// //     outcome:
// //       "Delivered an elegant, functional apartment that merges art and architecture — exceeding client expectations in comfort and aesthetics.",
// //   },
// "urban-luxury-apartment": {
//   title: "Urban Luxury Apartment",
//   hero: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
//   before: "https://images.unsplash.com/photo-1556906781-9a412d0f33f1?auto=format&fit=crop&w=1200&q=80",
//   after: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
//   overview: "This project represents modern sophistication through neutral tones and spatial harmony.",
//   goals: [
//     "Maximize natural light and space flow",
//     "Blend modern materials with timeless finishes",
//     "Design custom furniture for compact luxury"
//   ],
//   outcome: "Delivered an elegant, functional apartment merging art and architecture.",
//   gallery: [
//     "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
//     "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
//     "https://images.unsplash.com/photo-1617103902916-4e92a2ad396b?auto=format&fit=crop&w=1200&q=80"
//   ]
// },
//   "coastal-villa-retreat": {
//     title: "Coastal Villa Retreat",
//     hero: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
//     overview:
//       "Inspired by coastal tranquility, this villa combines organic materials with panoramic ocean views, creating harmony between structure and nature.",
//     goals: [
//       "Use sustainable, locally sourced materials",
//       "Incorporate biophilic design concepts",
//       "Create seamless indoor-outdoor transitions",
//     ],
//     outcome:
//       "Resulted in a serene, nature-inspired retreat that brings the outdoors inside — blending sustainability with luxury.",
//   },
// };

// export async function generateStaticParams() {
//   return Object.keys(allProjects).map((slug) => ({ slug }));
// }

// export default function ProjectPage({ params }: { params: { slug: string } }) {
//   const project = allProjects[params.slug as keyof typeof allProjects];

//   if (!project) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600">
//         <p>Project not found.</p>
//       </div>
//     );
//   }

//   return <ProjectContent project={project} />;
// }


// import Link from "next/link";
// import { getProjectBySlug } from "../projectData";
// import ProjectContent from "./ProjectContent";

// export default function ProjectPage({ params }: { params: { slug: string } }) {
//   const project = getProjectBySlug(params.slug);

//   if (!project) {
//     return (
//       <div className="max-w-3xl mx-auto px-4 py-20 text-center">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-4">
//           Project Not Found
//         </h1>
//         <Link href="/projects" className="text-blue-600 hover:underline">
//           ← Back to Projects
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen">
//       <Link
//         href="/projects"
//         className="block text-gray-600 hover:text-gray-900 text-sm mb-4 max-w-3xl mx-auto pt-10"
//       >
//         ← Back to Projects
//       </Link>
//       <ProjectContent project={project} />
//     </div>
//   );
// }


import Link from "next/link";
import { getProjectBySlug } from "../projectData";
import ProjectContent from "./ProjectContent";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Project Not Found
        </h1>
        <Link href="/projects" className="text-[#B98E75] hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/projects"
          className="text-[#B98E75]  hover:text-amber-200 text-sm mb-8 inline-block"
        >
          ← Back to Projects
        </Link>
      </div>
      <ProjectContent project={project} />
    </div>
  );
}
