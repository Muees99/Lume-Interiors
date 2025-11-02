import { notFound } from "next/navigation";
import { architectureProjects } from "../ArchitectureData";
import ArchitectureDetailClient from "./ArchitectureDetailClient";

export function generateStaticParams() {
  return architectureProjects.map((project) => ({
    slug: project.slug,
  }));
}

// ✅ Page component
export default function ArchitectureDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = architectureProjects.find((p) => p.slug === params.slug);

  // If slug doesn't match any project, trigger Next.js 404
  if (!project) {
    notFound();
  }

  // Pass the found project to client component
  return <ArchitectureDetailClient project={project} />;
}
