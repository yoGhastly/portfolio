"use client";
import { Navbar } from "./components/layout/navbar";
import { Fragment, useRef, useState } from "react";
import { LoaderBeforeOnload } from "./components/layout/before-onload";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Hero } from "./components/layout/header";
import { Project } from "./components/project";
import MouseContextProvider from "./context/mouse-context";
import DotRing from "./components/animated/dot-ring";
import { projects } from "@/constants/projects";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [waitComplete, setWaitComplete] = useState(false);
  const isSm = useMediaQuery(480);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".progress", {
      value: 100,
      duration: 25,
      animationDelay: 25,
      onUpdate: () => {
        setProgress((p) => {
          if (p >= 100) {
            if (!waitComplete) {
              setTimeout(() => {
                setIsLoading(false);
                setProgress(100);
              }, 500);
              setWaitComplete(true);
            }
            return 100;
          }
          return p + 1;
        });
      },
      ease: "power2.inOut",
    });
  }, []);

  return isLoading ? (
    <main className={`flex justify-center items-center mx-auto h-screen`}>
      <LoaderBeforeOnload progress={progress} />
    </main>
  ) : (
    <MouseContextProvider>
      <Fragment>
        <Navbar />
        <main className="flex h-full flex-col md:gap-12 py-0 px-6 md:p-6">
          <DotRing />
          <Hero />
          <Parallax speed={isSm ? 15 : 30}>
            <section className="flex flex-col gap-10 justify-center">
              <article className="flex flex-col md:flex-row justify-between w-full max-w-7xl mx-auto">
                <p className="font-sans font-bold text-xl flex gap-10">
                  00 <span>about</span>
                </p>
                <p className="flex flex-col gap-5 font-sans uppercase text-[#9d9d9d] max-w-3xl text-lg md:text-4xl leading-normal dark:text-[#d4d4d4]">
                  Passionate about frontend web technologies. I love working at
                  the intersection of creativity and user friendly interfaces.
                  <span>
                    When I&apos;m not building or exploring new web experiences,
                    I&apos;m probably training MMA.
                  </span>
                </p>
              </article>

              <section className="flex gap-8 mx-auto justify-center max-w-2xl w-full md:mt-24">
                <p className="font-sans text-[#9d9d9d] text-xl dark:text-[#9d9d9d] w-[13rem]">
                  A blend of UI and product engineering.
                </p>
                <p className="flex flex-col gap-5 font-sans text-[#9d9d9d] text-xl dark:text-[#d4d4d4] max-w-md">
                  With a background in design, I work closely with design
                  focused teams to build websites and microsites for companies
                  and individuals.
                  <span>
                    I have experience working and collaborating on product teams
                    and leading engineering efforts. With my experience in UI
                    and product engineering, I solve product problems and build
                    appealing usable web experiences.
                  </span>
                </p>
              </section>
            </section>
          </Parallax>

          <Parallax speed={isSm ? 15 : 30}>
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
        </main>
      </Fragment>
    </MouseContextProvider>
  );
}
