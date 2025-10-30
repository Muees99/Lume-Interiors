// import { notFound } from "next/navigation";
// import { projects, getProjectBySlug } from "./projectData";
// import ProjectContent from "./ProjectContent";

// // Generate all static slugs at build time
// export function generateStaticParams() {
//   return projects.map((p) => ({
//     slug: p.slug,
//   }));
// }

// // Generate metadata dynamically per project
// export function generateMetadata({ params }: { params: { slug: string } }) {
//   const project = getProjectBySlug(params.slug);
//   if (!project) return { title: "Project Not Found" };
//   return {
//     title: `${project.title} | Lumé Interiors`,
//     description: project.description,
//   };
// }

// // Server component — no Suspense, no hooks
// export default function ProjectPage({ params }: { params: { slug: string } }) {
//   const project = getProjectBySlug(params.slug);

//   if (!project) {
//     notFound(); // use Next.js global not-found.tsx
//   }

//   return <ProjectContent project={project} />;
// }



import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "./projectData";
import ProjectContent from "./ProjectContent";

export function generateStaticParams() {
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
  if (!project) notFound();
  return <ProjectContent project={project} />;
}
