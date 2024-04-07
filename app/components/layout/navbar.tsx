import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <nav className="w-full p-6 font-sans z-50 sticky top-0 backdrop-filter backdrop-blur-sm">
      <div className="flex gap-5 items-center md:p-2 mx-auto max-w-sm">
        <Link href="/" className="font-bold">
          <CubeTransparentIcon className="h-8" />
        </Link>
        <Link
          href={`https://github.com/yoGhastly`}
          className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
        >
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/jos%C3%A9-diego-espinosa-garc%C3%ADa-391205223/"
          className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
        >
          LinkedIn
        </Link>
        <Link
          href="https://dribbble.com/diego03825/shots"
          className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
        >
          Dribbble
        </Link>
      </div>
    </nav>
  );
}
