"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import React, { useRef } from "react";
import { MobileHeader } from "./mobile-header";
import { MouseParallaxHeader } from "./parallax-header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Header() {
  const isSm = useMediaQuery(480);

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
  return isSm ? (
    <div ref={container}>
      <MobileHeader />
    </div>
  ) : (
    <MouseParallaxHeader />
  );
}
