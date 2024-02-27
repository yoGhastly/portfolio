import { projects } from "@/constants/projects";
import React, { Fragment } from "react";
import { Parallax } from "react-scroll-parallax";
import { Project } from "../project";

export function ProjectSection() {
  return (
    <Fragment>
      <Parallax speed={15}>
        <section className="flex flex-col gap-10 justify-center mt-24 font-sans">
          <article className="flex flex-col md:flex-row justify-between text-xl w-full max-w-7xl mx-auto">
            <p className="font-bold">
              01 <span>projects</span>
            </p>
            <p className="w-[15rem]">
              A collection of recent projects I&apos;ve worked on
            </p>
            <p className="w-[12rem]">Frontend engineering</p>
          </article>
        </section>
      </Parallax>

      <section className="flex flex-col justify-center w-full p-5 mx-auto gap-10 md:mt-24 font-sans">
        {projects.map((p) => (
          <Project
            key={p.label}
            project={{
              title: p.label,
              thumbnail: p.image,
              url: p.url,
              description: p.description,
            }}
          />
        ))}
      </section>
    </Fragment>
  );
}
