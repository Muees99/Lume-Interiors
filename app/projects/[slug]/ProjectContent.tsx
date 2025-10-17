"use client";

import React from "react";

interface ProjectProps {
  project: {
    title: string;
    date: string;
    content?: string;
    image: string;
  };
}

export default function ProjectContent({ project }: ProjectProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-500 mb-8">{project.date}</p>

      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl mb-8 w-full h-96 object-cover"
      />

      {project.content ? (
        <div className="text-lg leading-relaxed font-serif text-gray-700">
          {project.content
            .trim()
            .split("\n")
            .map((para, i) => (
              <p key={i} className="mb-6">
                {para.trim()}
              </p>
            ))}
        </div>
      ) : (
        <p className="text-gray-500">Content coming soon...</p>
      )}
    </article>
  );
}
