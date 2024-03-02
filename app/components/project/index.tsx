import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  thumbnail: string;
  url: string;
  description: string;
}

export function Project({ project }: { project: Project }) {
  return (
    <section className="w-full h-full flex flex-col gap-10">
      <div
        className={clsx(
          "w-full h-[25rem] md:h-[45rem] bg-transparent relative self-end",
        )}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">{project.title}</p>
        <p className="max-w-[12rem] hidden md:block">{project.description}</p>
        <Link href={project.url} target="_blank" className="underline">
          See more.
        </Link>
      </div>
    </section>
  );
}
