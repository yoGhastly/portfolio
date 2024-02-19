"use client";

import { explanation, snippet } from "@/constants/snippet";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Code } from "@nextui-org/react";
import React from "react";

export const SnippetOfTheDay = () => {
  const isSm = useMediaQuery(480);
  return (
    <div className="mx-auto flex flex-col gap-y-5 md:gap-y-8">
      <h2 className="text-xl">Snippet of the Day</h2>
      <Code className="w-full" color="secondary">
        <pre>
          <p className="text-sm text-white">{snippet}</p>
        </pre>
      </Code>
      <h3 className="text-lg">Explanation</h3>
      <p className="text-gray-400">{explanation}</p>
    </div>
  );
};
