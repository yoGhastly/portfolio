import React from "react";
import { Parallax } from "react-scroll-parallax";

export function About() {
  return (
    <Parallax speed={5}>
      <section className="flex flex-col gap-10 w-full md:max-w-sm mx-auto justify-center mt-5 font-sans px-8 md:px-0">
        <p className="text-gray-600">
          I specialize in AI, ML development, and frontend engineering, building intelligent systems that enhance decision-making 
          in{" "}
          <span className="bg-purple-100 text-black">finance and operations.</span>{" "}
          When I&apos;m not solving complex data challenges or improving AI assistants, I’m training MMA.
        </p>

        <section className="flex flex-col gap-8 mx-auto justify-center max-w-5xl w-full">
          <p className="font-sans text-xl">
            Finance-Focused AI & Data Engineer | Frontend & Product Engineering
          </p>
          <p className="text-gray-600">
            Beyond UI, I collaborate with product and data teams to develop AI-powered tools for {" "}
            <span className="bg-lime-100 text-black">
              financial analysis, credit risk assessment, and enterprise automation.{" "}
            </span>
          </p>

          <p className="text-gray-600">
            I have experience working and collaborating on{" "}
            <span className="bg-red-100 text-black">D&A teams</span> and
            <span className="bg-amber-100 text-black">
              {" "}
              leading engineering{" "}
            </span>
            efforts. My experience spans developing{" "}
            <span className="text-black">
              ML models, optimizing retrieval-augmented generation (RAG) systems, and implementing dynamic data visualization solutions
            </span>
          </p>
        </section>
      </section>
    </Parallax>
  );
}
