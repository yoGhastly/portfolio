"use client";
import React, { Suspense, lazy } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

interface Project {
  title: string;
  thumbnail: string;
  url: string;
  description: string;
}

const OpulentoLazy = lazy(() =>
  import("uvcanvas").then((module) => ({ default: module.Opulento })),
);

export function Project({ project }: { project: Project }) {
  return (
    <section className="w-full h-full flex justify-center">
      <article className="w-full h-full max-w-7xl relative grid grid-cols-1 md:grid-cols-2 p-5">
        <section className="flex flex-col border h-full border-[#4d4d4d]">
          <div className="w-full h-1/2 flex items-center justify-center border border-[#4D4D4D]">
            <p
              className={clsx(
                "font-mono font-bold text-4xl md:text-8xl uppercase",
              )}
            >
              {project.title}
            </p>
          </div>
          <div className="w-full h-full flex justify-evenly items-center p-1.5 md:p-0">
            <p>{project.description}</p>
            <Link
              href={project.url}
              target="_blank"
              className="flex w-11 h-8 md:w-16 md:h-16 justify-center items-center bg-black dark:bg-white rounded-full"
            >
              <ArrowUpRightIcon className="text-white dark:text-black h-4 md:h-10" />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full border border-[#4d4d4d] flex justify-center items-center">
              <p>{project.url}</p>
            </div>
            <div className="hidden md:block w-full h-full">
              <Suspense fallback={<div>Loading...</div>}>
                <OpulentoLazy />
              </Suspense>
            </div>
          </div>
        </section>
        <figure className="aspect-square relative w-full max-w-5xl h-full border border-[#4d4d4d]">
          <Image
            src={project.thumbnail}
            fill
            alt={project.title}
            className="object-cover"
          />
        </figure>
      </article>
    </section>
  );
}
