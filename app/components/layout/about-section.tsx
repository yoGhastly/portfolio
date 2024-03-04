import React from "react";
import { Parallax } from "react-scroll-parallax";

export function About() {
  return (
    <section className="flex flex-col gap-10 justify-center mt-5">
      <article className="flex flex-col md:flex-row justify-between w-full max-w-7xl mx-auto">
        <p className="font-sans font-bold text-xl flex gap-10">
          00 <span>about</span>
        </p>
        <p className="flex flex-col gap-5 font-sans uppercase text-[#020202] max-w-3xl text-xl md:text-4xl leading-normal dark:text-[#d4d4d4]">
          <p>
            Passionate about frontend web techynologies. I love working at the
            intersection of creativity and user friendly interfaces.
          </p>
          <span>
            When I&apos;m not building or exploring new web experiences,
            I&apos;m probably training MMA.
          </span>
        </p>
      </article>

      <Parallax speed={15}>
        <section className="flex flex-col md:flex-row gap-8 mx-auto justify-center max-w-5xl w-full md:mt-24">
          <p className="font-sans text-[#9d9d9d] text-xl dark:text-[#9d9d9d]">
            A blend of UI and Product engineering
          </p>
          <p className="flex flex-col gap-5 font-sans text-[#020202] text-xl dark:text-[#d4d4d4] max-w-md">
            With a background in design, I work closely with design focused
            teams to build websites and microsites for companies and
            individuals.
            <span>
              I have experience working and collaborating on product teams and
              leading engineering efforts. With my experience in UI and product
              engineering, I solve product problems and build appealing usable
              web experiences.
            </span>
          </p>
        </section>
      </Parallax>
    </section>
  );
}
