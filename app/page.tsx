import type { Metadata } from "next";
import { ProfileSection } from "./components/profile-section";
import { SnippetOfTheDay } from "./components/snippet-of-the-day";
import Link from "next/link";
import { Suspense } from "react";
import { Navbar } from "./components/layout/navbar";
import Marquee from "react-fast-marquee";
import { projects } from "@/constants/projects";
import { Project } from "./components/selected-projects/project";
import Image from "next/image";

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
      <section className="mx-auto font-sans py-5 px-8">
        <ProfileSection />
      </section>

      <section className="p-8 grid grid-cols-1 md:grid-cols-4 content-center place-items-center gap-5">
        {projects.map((p) => (
          <Link href={p.url} key={p.label} target="_blank">
            <Project project={p} />
          </Link>
        ))}
      </section>
    </main>
  );
}
