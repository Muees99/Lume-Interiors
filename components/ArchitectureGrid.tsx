"use client";
import { architectureProjects } from "../app/architecture/ArchitectureData";
import ArchitectureCard from "./ArchitectureCard";

export default function ArchitectureGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {architectureProjects.map((project, index) => (
        <ArchitectureCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
