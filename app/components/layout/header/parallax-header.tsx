"use client";
import { projects } from "@/constants/projects";
import clsx from "clsx";
import Image from "next/image";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import localFont from "next/font/local";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextShine from "../../text-shine";

const PanchangBold = localFont({
  src: "../../../../public/Panchang-Bold.woff",
});

export function MouseParallaxHeader() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(".image-grayscale", {
        duration: 5,
        filter: "grayscale(0%)",
        onUpdate: () => {
          if (!container.current) return;
          const tlp = (tl.progress() * 100) >> 0;
          container.current.style.filter = `grayscale(${100 - tlp}%)`;
        },
      });
    },
    { scope: container },
  );
  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      className="relative flex justify-center items-center w-full h-screen mx-auto"
    >
      <TextShine
        className={clsx(
          PanchangBold.className,
          "font-bold text-3xl md:text-8xl uppercase text-center md:-mt-24",
        )}
      >
        Frontend developer
      </TextShine>

      <MouseParallaxChild
        factorX={0.1}
        factorY={0.5}
        className="grid grid-cols-3 z-10 absolute w-full h-full"
      >
        <div className="w-full h-full flex flex-col items-start justify-between">
          {projects.slice(0, 2).map((p) => (
            <figure
              key={p.label}
              className="relative block aspect-square w-56 h-56 -mt-5 ml-5"
            >
              <Image
                src={p.image}
                alt={p.label}
                fill
                className="object-contain image-grayscale"
              />
            </figure>
          ))}
        </div>
        <section className="flex gap-0">
          <div className="w-full h-full flex flex-col justify-end">
            <div className="flex flex-col gap-10 p-3 w-52">
              <figure
                key={projects[3].label}
                className="relative block aspect-square w-48 h-48"
              >
                <Image
                  src={projects[3].image}
                  alt={projects[3].label}
                  fill
                  className="object-contain image-grayscale"
                />
              </figure>
              <p className="font-sans text-sm text-[#9d9d9d] max-w-xs text-justify">
                I focus on crafting beautiful websites, interfaces and
                applications.
              </p>
            </div>
          </div>

          <figure
            key={projects[4].label}
            className="relative block aspect-square w-48 h-64 -mt-10"
          >
            <Image
              src={projects[4].image}
              alt={projects[4].label}
              fill
              className="object-contain image-grayscale"
            />
          </figure>
        </section>
        <section className="flex gap-0">
          <div className="w-full h-full flex flex-col justify-end">
            <figure
              key={projects[5].label}
              className="relative block aspect-square w-48 h-48"
            >
              <Image
                src={projects[5].image}
                alt={projects[5].label}
                fill
                className="object-contain image-grayscale"
              />
            </figure>
          </div>
          <div className="w-full h-full flex flex-col justify-between">
            <p className="font-sans text-sm text-[#9d9d9d] text-justify">
              I believe that great things can be achieved through a combination
              of unwavering passion and perseverance. I&apos;ve spent a long
              time learning from my mistakes and it&apos;s only elevated my need
              for highly-detailed, immaculate design for the web.
            </p>

            <figure
              key={projects[6].label}
              className="relative block self-end aspect-square w-48 h-48"
            >
              <Image
                src={projects[6].image}
                alt={projects[6].label}
                fill
                className="object-contain image-grayscale"
              />
            </figure>
          </div>
        </section>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
}
