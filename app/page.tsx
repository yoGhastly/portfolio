"use client";
import { Navbar } from "./components/layout/navbar";
import { Fragment, useState } from "react";
import { LoaderBeforeOnload } from "./components/layout/before-onload";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Hero } from "./components/layout/header";
import MouseContextProvider from "./context/mouse-context";
import { About } from "./components/layout/about-section";
import { ProjectSection } from "./components/layout/project-section";
import Link from "next/link";
import TextShine from "./components/text-shine";
import { Cobe } from "./components/animated/cobe";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".progress", {
      value: 100,
      duration: 25,
      animationDelay: 25,
      onUpdate: () => {
        setProgress((p) => {
          if (p >= 100) {
            setIsLoading(false);
            return 100;
          }
          return p + 1;
        });
      },
      ease: "power2.inOut",
    });
  }, []);

  return isLoading ? (
    <main
      className={`fadeOut flex justify-center items-center mx-auto h-screen`}
    >
      <LoaderBeforeOnload progress={progress} />
    </main>
  ) : (
    <MouseContextProvider>
      <Fragment>
        <Navbar />
        <main className="flex h-full flex-col md:gap-12 py-0 px-6 md:p-6">
          <Hero />
          <About />
          <ProjectSection />
        </main>
        <footer className="relative bottom-0 flex p-6 flex-col md:flex-row justify-center items-center">
          <Cobe />
          <article className="flex flex-col justify-center w-full gap-5">
            <div className="flex flex-col md:flex-row gap-3 max-w-md md:gap-10 font-mono justify-between w-full md:items-center font-bold">
              <p>Want to work together?</p>
              <p>Send me a message</p>
            </div>
            <Link href="mailto:diego.espinosagrc@uanl.edu.mx">
              <TextShine className="font-mono text-lg md:text-3xl uppercase underline font-bold">
                diego.espinosagrc@uanl.edu.mx
              </TextShine>
            </Link>
          </article>
        </footer>
      </Fragment>
    </MouseContextProvider>
  );
}
