import { projects } from "@/constants/projects";
import Image from "next/image";
import React, { useRef } from "react";
import TextShine from "../../text-shine";
import localFont from "next/font/local";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Marquee from "react-fast-marquee";

const PanchangBold = localFont({
  src: "../../../../public/Panchang-Bold.woff",
});

export function MobileHeader() {
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
    <section className="flex flex-col gap-10 p-5 relative">
      <article className="flex flex-col gap-5">
        <TextShine
          className={clsx(PanchangBold.className, "text-4xl font-bold")}
        >
          Frontend Developer
        </TextShine>

        <p className="font-sans text-sm text-[#9d9d9d] max-w-xs text-justify">
          I focus on crafting beautiful websites, interfaces and applications.
        </p>

        <p className="font-sans text-sm text-[#9d9d9d] text-justify">
          I believe that great things can be achieved through a combination of
          unwavering passion and perseverance. I&apos;ve spent a long time
          learning from my mistakes and it&apos;s only elevated my need for
          highly-detailed, immaculate design for the web.
        </p>
      </article>

      <Marquee
        ref={container}
        className="flex gap-5 absolute w-full"
        autoFill
        gradient
        gradientColor="rgb(0, 0, 0)"
      >
        {projects.map((p, idx) => (
          <p key={p.label} className="mx-5 font-mono">
            {p.label}
          </p>
        ))}
      </Marquee>
    </section>
  );
}
