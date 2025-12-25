import { ArrowRight } from "lucide-react";
import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="
      bg-neutral-900/60
      border border-white/10
      rounded-2xl
      p-6
      shadow-sm
      hover:shadow-lg
      transition
      flex flex-col
    ">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl object-cover h-44 w-full"
      />

      {/* Title */}
      <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-white">
        {project.title}
      </h5>

      {/* Description */}
      <p className="text-gray-400 mb-6 leading-relaxed">
        {project.desc}
      </p>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {project.tech}
        </span>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            text-sm font-medium
            text-white
            bg-neutral-800
            border border-white/10
            px-4 py-2.5
            rounded-lg
            hover:bg-neutral-700
            transition
          "
        >
          View
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
