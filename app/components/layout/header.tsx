import { ArrowDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import localFont from "next/font/local";
import Image from "next/image";
import React from "react";
import { TextReveal } from "../animated/text-reveal";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const PanchangBold = localFont({
  src: "../../../public/Panchang-Bold.woff",
});

export function Hero() {
  useGSAP(() => {
    gsap.from(".profile-image", {
      opacity: 0,
      delay: 100,
      y: 50,
    });
    gsap.to(".profile-image", {
      opacity: 1,
      y: 0,
    });
  });

  return (
    <header className="flex flex-col gap-3 md:gap-8 mx-auto">
      <article className="flex flex-col md:flex-row w-full h-auto items-end gap-8 mx-auto max-w-7xl justify-between">
        <section className="w-full h-full flex gap-10 flex-col justify-between">
          <TextReveal
            className={clsx(
              PanchangBold.className,
              "text-4xl md:text-7xl font-bold",
            )}
            text="Software Developer"
          />
          <div
            className={clsx(
              "w-full h-80 bg-purple-500 relative self-end profile-image",
            )}
          >
            <Image
              src="/profile.png"
              alt="Diego Espinosa"
              fill
              className="object-cover grayscale"
            />
          </div>
        </section>
        <section className="w-full h-full flex flex-wrap-reverse items-end justify-end">
          <p className="font-sans self-start text-lg md:text-xl max-w-md text-[#9d9d9d] dark:text-[#d4d4d4]">
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
