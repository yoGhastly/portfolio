import React from "react";
import Marquee from "react-fast-marquee";
import { Project } from "./project";
import Link from "next/link";

const projects = [
  {
    index: "01",
    label: "Xervsware",
    description: "A team that loves to build tech solutions.",
    image: "/xervsware.svg",
    url: "https://www.xervsware.com",
  },
  {
    index: "02",
    label: "Monarca",
    description: "A team that loves to build tech solutions.",
    image: "/monarca.svg",
    url: "https://diegoes.vercel.app/projects",
  },
  {
    index: "03",
    label: "Shisho Baby Clothes",
    description: "A team that loves to build tech solutions.",
    image: "/shisho.png",
    url: "https://shishobabyclothes.ae",
  },
  {
    index: "04",
    label: "Ad Astra",
    description: "A team that loves to build tech solutions.",
    image: "/adastra.svg",
    url: "https://expo.dev/@ghastly/ad-astra",
  },
  {
    index: "05",
    label: "GEA",
    description: "A team that loves to build tech solutions.",
    image: "/gea.svg",
    url: "https://gea-platform.vercel.app",
  },
  {
    index: "06",
    label: "GEITS",
    description: "A team that loves to build tech solutions.",
    image: "/geits.svg",
    url: "https://geits.tech",
  },
  {
    index: "07",
    label: "Campanario",
    description: "A team that loves to build tech solutions.",
    image: "/campanario.svg",
    url: "https://campanario-eventos.vercel.app",
  },
];

export function SelectedProjects() {
  return (
    <main className="relative flex flex-col justify-normal md:justify-between items-center min-h-screen">
      <Marquee className="flex w-full h-1/2" pauseOnHover autoFill>
        {projects.map((project) => (
          <Link key={project.label} href={project.url} target="_blank">
            <Project project={project} />
          </Link>
        ))}
      </Marquee>
      <footer className="w-full flex justify-between absolute bottom-[30%] md:bottom-[10%]">
        <h2 className={`uppercase text-5xl md:text-8xl font-black font-mono`}>
          Selected projects
        </h2>

        <Link
          href="https://github.com/yoGhastly"
          className="font-sans text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
        >
          see all.
        </Link>
      </footer>
    </main>
  );
}
