"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Chip } from "@nextui-org/react";

interface Project {
  title: string;
  url: string;
  description: string;
}

export function Project({ project }: { project: Project }) {
  return (
    <Link
      href={project.url}
      target="_blank"
      className="flex justify-center items-center w-fit"
      title={project.description}
      aria-label={project.title}
    >
      <Chip
        variant="light"
        color="default"
        className="w-fit shadow-sm drop-shadow-sm"
        endContent={<ArrowUpRightIcon className="h-3" />}
      >
        {project.title}
      </Chip>
    </Link>
  );
}
