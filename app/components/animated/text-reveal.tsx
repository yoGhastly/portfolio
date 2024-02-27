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
  const words = text.split(/\s+/);
  const textRef = useRef(null);
  const isVisible = useIsVisible(textRef);

  return (
    <>
      <span ref={textRef} className={clsx(className, "overflow-hidden")}>
        {words.map((word, wordIndex) => (
          <span key={`word-${wordIndex}`}>
            {word.split("").map((char, charIndex) => (
              <span
                className={clsx({
                  "animate-text-reveal inline-block [animation-fill-mode:backwards]":
                    isVisible,
                })}
                key={`${char}-${charIndex}`}
                style={{
                  animationDelay: `${wordIndex * 0.05 + charIndex * 0.05}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}{" "}
          </span>
        ))}
      </span>
    </>
  );
};
