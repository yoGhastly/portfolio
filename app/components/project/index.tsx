import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

interface Project {
  title: string;
  thumbnail: string;
  url: string;
  description: string;
}

const PanchandBold = localFont({
  src: "../../../public/Panchang-Bold.woff",
});

export function Project({ project }: { project: Project }) {
  return (
    <section className="w-full h-full flex justify-center">
      <Link
        href={project.url}
        className="w-full h-full max-w-6xl flex justify-center relative p-5"
      >
        <div
          className={clsx(
            "w-full max-w-5xl h-[25rem] md:h-[30rem] bg-transparent relative",
          )}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover rounded-sm md:rounded-3xl"
          />
        </div>
        <p
          className={clsx(
            "absolute hidden md:block bottom-28 font-mono font-bold text-2xl left-0 uppercase",
            "drop-shadow-xl",
          )}
        >
          {project.url}
        </p>

        <p
          className={clsx(
            "absolute top-0 md:top-28 right-5 font-mono w-60 md:text-justify font-bold text-sm md:text-xl md:right-0 uppercase",
            "drop-shadow-xl text-center md:text-start",
          )}
        >
          {project.description}
        </p>
      </Link>
    </section>
  );
}
