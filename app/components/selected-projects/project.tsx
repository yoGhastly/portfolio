import React from "react";
import Image from "next/image";

interface Props {
  project: Project;
}

interface Project {
  label: string;
  description: string;
  image: string;
  index: string;
}

export const Project: React.FC<Props> = ({ project }) => {
  return (
    <article className="w-full mx-auto shadow-md overflow-hidden font-mono">
      <header>
        <span>{project.index}</span>
        <h1 className="text-2xl font-bold mt-4">{project.label}</h1>
        <p className="text-sm mt-2 w-2/3">{project.description}</p>
      </header>

      <figure className="mt-4">
        <div className="relative w-80 h-80">
          <Image
            src={project.image}
            alt="Project Image"
            fill
            className="object-cover w-full h-full"
          />
        </div>
      </figure>
    </article>
  );
};
