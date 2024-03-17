import React from "react";
import { Cobe } from "../animated/cobe";
import Link from "next/link";
import TextShine from "../text-shine";

export function Footer() {
  return (
    <footer className="relative bottom-0 flex p-6 flex-col md:flex-row justify-center items-center">
      <Cobe />
      <article className="flex flex-col justify-center w-full gap-5">
        <div className="flex flex-col md:flex-row gap-3 max-w-md md:gap-10 font-mono justify-between w-full md:items-center font-bold">
          <p>Want to work together?</p>
          <p>Send me a message</p>
        </div>
        <Link href="mailto:diego.espinosagrc@uanl.edu.mx">
          <TextShine className="font-mono text-lg md:text-3xl uppercase underline font-bold">
            diego.espinosagrc@uanl.edu.mx
          </TextShine>
        </Link>
      </article>
    </footer>
  )
}
