"use client";
import React from "react";
import clsx from "clsx";
import localFont from "next/font/local";

const PanchangBold = localFont({
  src: "../../../public/Panchang-Bold.woff",
});

export function LoaderBeforeOnload({ progress }: { progress: number }) {
  return (
    <div className="flex justify-center items-center mx-auto">
      <h1 className={clsx(PanchangBold.className, "text-6xl font-bold")}>
        Loading{" "}
        <span className="tabular-nums progress">{Math.round(progress)}</span>%
      </h1>
    </div>
  );
}
