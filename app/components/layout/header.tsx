import { ArrowDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import localFont from "next/font/local";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Velustro } from "uvcanvas";

const PanchangBold = localFont({
  src: "../../../public/Panchang-Bold.woff",
});

export function Hero() {
  useGSAP(() => {
    gsap.from(".fadeIn", {
      opacity: 0,
      y: 50,
    });
    gsap.to(".fadeIn", {
      opacity: 1,
      duration: 1.5,
      y: 0,
    });
  });

  return (
    <header className="flex flex-col gap-3 md:gap-8 mx-auto">
      <article className="flex flex-col md:flex-row w-full h-auto items-end gap-8 mx-auto md:max-w-7xl justify-between">
        <section className="w-full h-full flex gap-10 flex-col justify-between">
          <p
            className={clsx(
              PanchangBold.className,
              "text-[2.5rem] md:text-7xl font-bold",
            )}
          >
            Software Developer
          </p>

          <div
            className={clsx(
              "w-full h-80 bg-transparent relative self-end fadeIn",
            )}
          >
            <Velustro />
          </div>
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
