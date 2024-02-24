"use client";
import { projects } from "@/constants/projects";
import clsx from "clsx";
import Image from "next/image";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import TextShine from "./text-shine";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const positionsDesktop = [
  { top: "15%", left: "5%" },
  { top: "5%", left: "25%" },
  { top: "53%", left: "7%" },
  { top: "68%", left: "30%" },
  { top: "3%", left: "55%" },
  { top: "62%", left: "55%" },
  { top: "10%", left: "80%" },
  { top: "60%", left: "80%" },
];

const positionsMobile = [
  { top: "5%", left: "-5%" },
  { top: "7%", left: "63%" },
  { top: "50%", left: "-10%" },
  { top: "75%", left: "-5%" },
  { top: "25%", left: "40%" },
  { top: "50%", left: "60%" },
  { top: "80%", left: "60%" },
  { top: "25%", left: "-30%" },
];

export function MouseParallaxHeader() {
  const isSm = useMediaQuery(480);
  const positions = isSm ? positionsMobile : positionsDesktop;

  return (
    <header className="w-full h-full relative flex justify-center items-center">
      <article className="flex flex-col gap-8 z-20 items-center justify-center p-5 absolute">
        <TextShine text="Frontend Developer" />
        <p className="font-sans text-center max-w-lg text-[#9d9d9d]">
          I believe that great things can be achieved through a combination of
          unwavering passion and perseverance. I&apos;ve spent a long time
          learning from my mistakes and it&apos;s only elevated my need for
          highly-detailed, immaculate design for the web.
        </p>
      </article>
      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        className="w-full h-full absolute"
      >
        {positions.map((position, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
            }}
          >
            <MouseParallaxChild factorX={0.3} factorY={0.5}>
              <div className={`relative w-48 h-48 md:w-56 md:h-56 group`}>
                <Link href={projects[index].url} target="_blank">
                  <Image
                    src={projects[index].image}
                    alt={projects[index].label}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition delay-100"
                  />
                </Link>
              </div>
            </MouseParallaxChild>
          </div>
        ))}
      </MouseParallaxContainer>
    </header>
  );
}
