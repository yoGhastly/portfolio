"use client";

import { useIsVisible } from "@/hooks/useIsVisible";
import clsx from "clsx";
import { useRef } from "react";

export const TextReveal = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const textRef = useRef(null);
  const isVisible = useIsVisible(textRef);

  return (
    <span
      ref={textRef}
      className={clsx(className, "overflow-hidden")}
      style={{ wordWrap: "break-word" }} // Ensure word wrapping
    >
      {text.split("").map((char, charIndex) => (
        <span
          lang="en"
          className={clsx({
            "animate-text-reveal inline-block hyphens-auto [animation-fill-mode:backwards]":
              isVisible,
          })}
          key={`${char}-${charIndex}`}
          style={{
            animationDelay: `${charIndex * 0.05}s`, // Adjust animation delay
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};
