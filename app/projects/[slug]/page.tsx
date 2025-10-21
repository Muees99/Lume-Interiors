export const dynamic = "force-dynamic";

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
