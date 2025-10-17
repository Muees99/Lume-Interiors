// import Link from "next/link";
// import { getProjectBySlug } from "../projectData";
// import ProjectContent from "./ProjectContent";

// export default function ProjectPage({ params }: { params: { slug: string } }) {
//   const project = getProjectBySlug(params.slug);

//   if (!project) {
//     return (
//       <div className="max-w-3xl mx-auto px-6 py-24 text-center">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-4">
//           Project Not Found
//         </h1>
//         <Link href="/projects" className="text-[#B98E75] hover:underline">
//           ← Back to Projects
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen pt-24">
//       <div className="max-w-4xl mx-auto px-6">
//         <Link
//           href="/projects"
//           className="text-[#B98E75]  hover:text-amber-200 text-sm mb-8 inline-block"
//         >
//           ← Back to Projects
//         </Link>
//       </div>
//       <ProjectContent project={project} />
//     </div>
//   );
// }



import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "../projectData";
import ProjectContent from "./ProjectContent";


export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Lumé Interiors`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  return <ProjectContent project={project} />;
}
