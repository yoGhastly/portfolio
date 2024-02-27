import { ArrowDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import localFont from "next/font/local";
import Image from "next/image";
import React from "react";
import { TextReveal } from "../animated/text-reveal";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Parallax } from "react-scroll-parallax";

const PanchangBold = localFont({
  src: "../../../public/Panchang-Bold.woff",
});

export function Hero({ onImageComplete }: { onImageComplete: () => void }) {
  useGSAP(() => {
    gsap.from(".fadeIn", {
      opacity: 0,
      y: 50,
    });
    gsap.to(".fadeIn", {
      opacity: 1,
      duration: 2,
      y: 0,
    });
  });

  return (
    <header className="flex flex-col gap-3 md:gap-8 mx-auto">
      <article className="flex flex-col md:flex-row w-full h-auto items-end gap-8 mx-auto md:max-w-7xl justify-between">
        <section className="w-full h-full flex gap-10 flex-col justify-between">
          <TextReveal
            className={clsx(
              PanchangBold.className,
              "text-[2.5rem] md:text-7xl font-bold",
            )}
            text="Software Developer"
          />

          <Parallax speed={10}>
            <div
              className={clsx(
                "w-full h-80 bg-transparent relative self-end fadeIn",
              )}
            >
              <Image
                src="/profile.png"
                alt="Diego Espinosa"
                fill
                className="object-cover grayscale"
                onLoadingComplete={onImageComplete}
              />
            </div>
          </Parallax>
        </section>
        <section className="w-full h-full flex flex-wrap-reverse items-end justify-end">
          <p className="fadeIn font-sans self-start text-lg md:text-xl max-w-md text-[#020202] dark:text-[#d4d4d4]">
            I believe that great things can be achieved through a combination of
            unwavering passion and perseverance. I&apos;ve spent a long time
            learning from my mistakes and it&apos;s only elevated my need for
            highly-detailed, immaculate design for the web.
          </p>
        </section>
      </article>
      <ArrowDownIcon className="h-14 md:h-24 self-start" />
    </header>
  );
}
