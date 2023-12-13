"use client";
import clsx from "clsx";
import React from "react";

export const Chip: React.FC<{ label: string }> = ({ label }) => {
  return (
    <a
      className={clsx(
        "w-full max-w-[225px]",
        "bg-white rounded-full text-black shadow-black",
        "py-1 px-2.5 text-sm",
        "hover:bg-[#d92f60] hover:text-white transition delay-100",
      )}
      href="mailto:diego.espinosagrc@uanl.edu.mx?subject=Project inquiry"
      target="_blank"
    >
      {label}
    </a>
  );
};
