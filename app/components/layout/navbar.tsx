import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <nav className="w-full p-3 font-sans">
      <div className="flex w-full md:w-5/6 gap-5 p-4 md:p-2 mx-auto">
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
      </div>
    </nav>
  );
}
