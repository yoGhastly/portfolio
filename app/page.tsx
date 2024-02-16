import type { Metadata } from "next";
import { ProfileSection } from "./components/profile-section";
import { SnippetOfTheDay } from "./components/snippet-of-the-day";
import { SelectedProjects } from "./components/selected-projects";
import Link from "next/link";
import { Suspense } from "react";
import { Navbar } from "./components/layout/navbar";
import Marquee from "react-fast-marquee";
import { projects } from "@/constants/projects";
import { Project } from "./components/selected-projects/project";

export const runtime = "edge";

export const metadata: Metadata = {
  // metadataBase: new URL("https://diegoes.vercel.app"),
  title: {
    default: "Diego Espinosa",
    template: "%s | Diego Espinosa",
  },
  description: "Developer, UI designer, MMA enthusiast.",
  openGraph: {
    title: "Diego Espinosa",
    description: "Developer, UI designer, MMA enthusiast.",
    url: "https://diegoes.vercel.app",
    siteName: "Diego Espinosa",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Diego Espinosa",
    card: "summary_large_image",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col gap-5 min-h-screen">
      <Navbar />
      <section className="flex font-sans flex-col md:flex-row justify-center py-5 px-8 gap-8 md:gap-[140px]">
        <ProfileSection />
        <Suspense fallback={<h2>Snippet of the Day</h2>}>
          <article className="flex items-center justify-center max-w-lg">
            <SnippetOfTheDay />
          </article>
        </Suspense>
      </section>
      <h2 className={`uppercase text-5xl md:text-8xl font-black font-mono`}>
        Selected projects
      </h2>
      <section className="relative">
        <Marquee className="flex gap-3 w-full h-1/2" pauseOnClick>
          {projects.map((project) => (
            <Link key={project.label} href={project.url} target="_blank">
              <Project project={project} />
            </Link>
          ))}
        </Marquee>
      </section>
    </main>
  );
}
