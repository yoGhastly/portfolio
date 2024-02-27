"use client";
import useMousePosition from "@/hooks/useMousePosition";
import "../../../styles/dot-ring.css";
import { useContext } from "react";
import { MouseContext } from "@/app/context/mouse-context";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const DotRing = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const { x, y } = useMousePosition();

  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ringCursor " + cursorType + " hidden md:block"}
      ></div>
      <div
        className={"dot " + cursorType + " hidden md:block"}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;
