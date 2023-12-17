import clsx from "clsx";
import Image from "next/image";
import { Chip } from "./components/Chip";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start p-8 md:p-24 gap-8 md:gap-16">
      <div
        className={clsx(
          "relative flex place-items-center",
          "before:absolute before:h-[300px] before:w-[480px]",
          "before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial",
          "before:from-white before:to-transparent ",
          "before:blur-2xl before:content-[''] after:absolute",
          "after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3",
          "after:bg-gradient-conic after:from-[#d92f60]",
          "after:via-[#d92f60] after:blur-2xl after:content-['']",
          "before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#d92f60]",
          "before:dark:opacity-10 after:dark:from-red-900 after:dark:via-[#410444]",
          "after:dark:opacity-40 before:lg:h-[360px] z-[-1]",
        )}
      >
        <h1 className="text-[clamp(40px, 11vw, 40px)] font-bold text-black dark:text-white">
          Diego Espinosa
        </h1>
      </div>

      <section className="w-full md:max-w-lg">
        <div className="flex flex-col gap-8">
          <p>
            I&apos;m Diego, a software developer based in Mexico.I focus on
            crafting beautiful, websites, interfaces and applications.
          </p>
          <p>
            Throughout my experience in software development, I have dedicated
            myself to relentlessly honing my craft. I believe that great things
            can be achieved through a combination of unwavering passion and
            perseverance. I&apos;ve spent a long time learning from my mistakes
            and it&apos;s only elevated my need for highly-detailed, immaculate
            design for the web.
          </p>
          <Chip label="Open for new projects in 2024" />
          <div className="flex items-center justify-between max-w-md">
            <p className="text-sm text-gray-600 dark:text-gray-300 flex gap-5">
              Frontend engineer
              <span className="text-black dark:text-white">UX Labs.</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">2023</p>
          </div>
          <hr className="text-gray-600 dark:text-gray-800 opacity-30 h-0.5 max-w-md" />
          <h2 className="font-semibold">Selected Projects</h2>
          <ul className="mx-auto px-8 md:px-0">
            <li className="list-disc">
              <Link href="https://www.xervsware.com" target="_blank">
                <span className="font-bold">Xervsware</span>, a team that loves
                to build tech solutions.
              </Link>
            </li>
            <li className="list-disc">
              <Link href="https://expo.dev/@ghastly/ad-astra" target="_blank">
                <span className="font-bold">Ad astra</span>, a mental health app
                for astronomy enthusiasts.
              </Link>
            </li>
            <li className="list-disc">
              <Link href="https://gea-platform.vercel.app" target="_blank">
                <span className="font-bold">GEA Platform</span>, a platform for
                engineering students.{" "}
              </Link>
            </li>
            <li className="list-disc">
              <Link href="https://geits.tech" target="_blank">
                <span className="font-bold">GEITS</span>, a platform for
                software engineering students.{" "}
              </Link>
            </li>
          </ul>
          <Link
            href="https://github.com/yoGhastly"
            className="hover:text-gray-300 w-fit"
            target="_blank"
          >
            See all projects.
          </Link>
        </div>
      </section>
    </main>
  );
}
