// app/projects/[slug]/page.tsx
// import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { projects, getProjectBySlug } from "./projectData";
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

// export default function ProjectPage({ params }: { params: { slug: string } }) {
//   const project = getProjectBySlug(params.slug);
//   if (!project) return notFound();

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // const searchParams = useSearchParams(); // ✅ works because it's a client component

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-[80vh] text-gray-500">
          <div className="w-16 h-16 border-4 border-[#B98E75] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg font-medium">Loading project details...</p>
        </div>
      }
    >
      <ProjectContent project={project} />
    </Suspense>
  );
}
