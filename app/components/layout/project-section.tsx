"use client";
import { projects } from "@/constants/projects";
import React from "react";
import { Project } from "../project";
import { Parallax } from "react-scroll-parallax";

export function ProjectSection() {
  return (
    <Parallax speed={5}>
      <section className="flex flex-col gap-10 max-w-sm mx-auto justify-center mt-5 font-sans px-8">
        <p className="">A collection of recent projects I&apos;ve worked on</p>
        <section className="flex flex-grow flex-wrap gap-8">
          {projects.map((p) => (
            <Project key={p.title} project={p} />
          ))}
        </section>
      </section>
    </Parallax>
  );
}
