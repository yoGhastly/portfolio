"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

interface Project {
  title: string;
  thumbnail: string;
  url: string;
  description: string;
}

export function Project({ project }: { project: Project }) {
  return (
    <article className="group md:p-5 w-full">
      <Link href={project.url} className="flex justify-between items-center">
        <div className="flex flex-col md:flex-row max-w-6xl gap-5">
          <p className="font-sans font-bold text-4xl md:text-7xl uppercase">
            {project.title}
          </p>
          <p>{project.description}</p>
        </div>

        <button className="transition rounded-full duration-300 p-3 ease-in-out group-hover:scale-105 group-hover:bg-white flex justify-center items-center">
          <ArrowUpRightIcon className="h-6 group-hover:text-black" />
        </button>
      </Link>
    </article>
  );
}
