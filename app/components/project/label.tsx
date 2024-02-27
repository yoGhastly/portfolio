"use client";
import { MouseContext } from "@/app/context/mouse-context";
import Link from "next/link";
import React, { useContext } from "react";

export function Label({
  text,
  url,
  className,
}: {
  text: string;
  url: string;
  className?: string | undefined;
}) {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <Link
      href={url}
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("default")}
      className={className}
    >
      {text}
    </Link>
  );
}
