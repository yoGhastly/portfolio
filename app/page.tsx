"use client";
import { Navbar } from "./components/layout/navbar";
import { Header } from "./components/layout/header";
import { Fragment, useState } from "react";
import { LoaderBeforeOnload } from "./components/layout/before-onload";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import clsx from "clsx";
import { TextReveal } from "./components/animated/text-reveal";
import { projects } from "@/constants/projects";
import Image from "next/image";
import localFont from "next/font/local";

const PanchangBold = localFont({
  src: "../public/Panchang-Bold.woff",
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [waitComplete, setWaitComplete] = useState(false);

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
              }, 1000);
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
    <main className="flex justify-center items-center flex-col gap-5 relative px-5">
      <Navbar />
      <Header />
      <section className="w-full flex max-w-7xl gap-10 flex-col h-screen mx-auto md:mt-10 px-8">
        <TextReveal
          text="Projects"
          className={clsx("font-mono font-bold text-4xl md:text-7xl")}
        />

        <div className="flex flex-col gap-5">
          {projects.slice(0, 2).map((p, idx) => (
            <section
              key={p.label}
              className={clsx(
                "flex flex-col md:flex-row w-full gap-5",
                idx === 1 && "md:gap-9",
              )}
            >
              <div className="self-center">
                <h2
                  className={clsx(
                    PanchangBold.className,
                    "text-3xl md:text-5xl font-bold",
                  )}
                >
                  {p.label}
                </h2>
                <p className={clsx("font-sans", "max-w-sm")}>{p.description}</p>
              </div>

              <figure className="relative w-full h-48 md:w-96 md:h-60">
                <Image
                  src={p.image}
                  alt={p.label}
                  fill
                  className="object-cover grayscale"
                />
              </figure>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
