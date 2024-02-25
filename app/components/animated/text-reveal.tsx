"use client";

import clsx from "clsx";

export const TextReveal = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <>
      <h2 className={clsx(className, "overflow-hidden")}>
        {text.match(/./gu)!.map((char, index) => (
          <span
            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
    </>
  );
};
