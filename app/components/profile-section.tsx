"use client";

import clsx from "clsx";
import React from "react";
import { Chip } from "./Chip";
import Link from "next/link";

export const ProfileSection = () => {
  return (
    <aside>
      <div
        className={clsx(
          "relative flex place-items-center",
          "before:absolute before:h-[300px] before:w-[480px]",
          "before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial",
          "before:from-transparent before:to-transparent ",
          "before:blur-2xl before:content-[''] after:absolute",
          "after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3",
          "after:bg-gradient-conic after:from-[#d92f60]",
          "after:via-[#d92f60] after:blur-2xl after:content-['']",
          "before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#d92f60]",
          "before:dark:opacity-10 after:dark:from-red-900 after:dark:via-[#410444]",
          "after:dark:opacity-40 before:lg:h-[360px] z-[-1]",
        )}
      >
        <p className="text-2xl font-bold text-[#010101] dark:text-white">
          Diego Espinosa
        </p>
      </div>

      <section className="w-full md:max-w-lg mt-5">
        <div className="flex flex-col gap-8">
          <p>
            I&apos;m Diego, a software developer based in Mexico.I focus on
            crafting beautiful, websites, interfaces and applications.
          </p>
          <p>
            Throughout my experience in software development, I have dedicated
            myself to relentlessly honing my craft. I believe that great things
            can be achieved through a combination of unwavering passion and
            perseverance. I&apos;ve spent a long time learning from my mistakes
            and it&apos;s only elevated my need for highly-detailed, immaculate
            design for the web.
          </p>
          <Chip label="Open for new projects in 2024" />
          <div className="flex items-center justify-between max-w-md">
            <p className="text-sm text-gray-600 dark:text-gray-300 flex gap-5">
              Frontend engineer
              <span className="text-black dark:text-white">UX Labs.</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">2023</p>
          </div>
          <hr className="bg-gray-600 dark:bg-gray-300 opacity-30 h-0.5 max-w-md" />
        </div>
      </section>
    </aside>
  );
};
