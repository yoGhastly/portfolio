"use client";

import { explanation, snippet } from "@/constants/snippet";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import React from "react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

export const SnippetOfTheDay = () => {
  const isSm = useMediaQuery(480);
  return (
    <div className="mx-auto flex flex-col gap-y-5 md:gap-y-8">
      <h2 className="text-xl">Snippet of the Day</h2>
      <CopyBlock
        text={snippet}
        language="typescript"
        codeBlock={false}
        customStyle={{
          maxHeight: "500px",
          height: "auto",
          overflow: "scroll",
          fontSize: isSm ? "13px" : "15px",
        }}
        theme={atomOneDark}
        wrapLongLines={isSm}
      />
      <h3 className="text-lg">Explanation</h3>
      <p className="text-gray-400">{explanation}</p>
    </div>
  );
};
