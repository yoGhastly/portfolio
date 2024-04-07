import React from "react";
import { Parallax } from "react-scroll-parallax";

export function About() {
  return (
    <Parallax speed={5}>
      <section className="flex flex-col gap-10 w-full md:max-w-sm mx-auto justify-center mt-5 font-sans px-8 md:px-0">
        <p className="text-gray-600">
          Passionate about frontend web technologies. I love working at the
          intersection of creativity and user{" "}
          <span className="bg-purple-100 text-black">friendly interfaces.</span>{" "}
          When I&apos;m not building or exploring new web experiences, I&apos;m
          probably training MMA.
        </p>

        <section className="flex flex-col gap-8 mx-auto justify-center max-w-5xl w-full">
          <p className="font-sans text-xl">
            A blend of UI and Product engineering.
          </p>
          <p className="text-gray-600">
            With a background in design, I{" "}
            <span className="bg-lime-100 text-black">
              work closely with design focused teams{" "}
            </span>
            to build websites and microsites for companies and individuals.
          </p>

          <p className="text-gray-600">
            I have experience working and collaborating on{" "}
            <span className="bg-red-100 text-black">product teams</span> and
            <span className="bg-amber-100 text-black">
              {" "}
              leading engineering{" "}
            </span>
            efforts. With my experience in UI and product engineering,{" "}
            <span className="text-black">
              I solve product problems and build appealing usable web
              experiences.
            </span>
          </p>
        </section>
      </section>
    </Parallax>
  );
}
