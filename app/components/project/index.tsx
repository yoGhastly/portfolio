import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { Label } from "./label";
import localFont from "next/font/local";

interface Project {
  title: string;
  thumbnail: string;
  url: string;
  description: string;
}

const PanchangBold = localFont({
  src: "../../../public/Panchang-Bold.woff",
});

export function Project({ project }: { project: Project }) {
  return (
    <section className="w-full h-full flex flex-col md:flex-row gap-10">
      <div className="flex flex-col w-full gap-3 md:gap-24">
        <Label
          text={project.title}
          url={project.url}
          className={clsx(
            PanchangBold.className,
            "text-3xl md:text-7xl h-20 hover:underline",
          )}
        />
        <p className="text-lg md:text-xl w-[20rem]">{project.description}</p>
      </div>
      <div
        className={clsx(
          "w-full h-[15rem] md:h-[50rem] bg-transparent relative self-end",
        )}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
