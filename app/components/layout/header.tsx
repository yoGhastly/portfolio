"use client";
import React from "react";
import { Instrument_Serif } from "next/font/google";
import clsx from "clsx";
import { Novatrix } from "uvcanvas";
import styles from "../../styles/Hero.module.css";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import { JohnDeereLogo } from "../deere-logo";

const InstrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  fallback: ["Inter"],
});

export function Hero() {
  const downloadResume = () => {
    const downloadLink = "/assets/resume.pdf";
    const link = document.createElement("a");
    link.href = downloadLink;
    link.setAttribute("download", "diego");
    document.body.appendChild(link);
    link.click();
  };
  return (
    <header className="flex flex-col justify-center gap-3 md:gap-8 mx-auto px-8">
      <div
        className={clsx(
          InstrumentSerif.className,
          "text-4xl md:text-5xl text-gray-500 self-center w-full",
          "flex flex-wrap gap-x-3",
          "mt-10 max-w-sm md:max-w-md items-center leading-snug",
        )}
      >
        Hey,
        <span className="text-black">I&apos;m</span>
        <section className="relative inline-block">
          <div className="w-20 h-8 md:h-10 relative mx-2 select-none rounded-md">
            <Novatrix />
          </div>
        </section>{" "}
        <span className="text-black">Diego</span>
        <span className={clsx(styles.heroGradient)}>
          a Frontend Developer
        </span>{" "}
        at
        <section className="relative inline-block">
          <div
            className="relative flex items-center mx-2 select-none rounded-md"
            style={{ width: "200px", height: "50px" }}
          >
            <JohnDeereLogo />
          </div>
        </section>
        based in{" "}
        <span className="text-black">
          Monterrey,{" "}
          <section className="hidden relative md:inline-block mx-2">
            <div className="md:w-full h-8 md:h-10 relative select-none rounded-md">
              <MapPinIcon className="w-full h-full" />
            </div>
          </section>
          MX
        </span>
      </div>
      <Button
        className="font-sans self-start bg-[#f1f1f1] text-black drop-shadow-md"
        title="Download Resume"
        aria-label="Download Resume"
        onClick={downloadResume}
        onPress={downloadResume}
      >
        Resume
      </Button>
    </header>
  );
}
