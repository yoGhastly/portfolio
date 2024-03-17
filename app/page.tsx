"use client";
import { Navbar } from "./components/layout/navbar";
import { Fragment } from "react";
import { Hero } from "./components/layout/header";
import { About } from "./components/layout/about-section";
import { ProjectSection } from "./components/layout/project-section";
import { Footer } from "./components/layout/footer";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <main className="flex h-full flex-col md:gap-12 py-0 px-6 md:p-6">
        <Hero />
        <About />
        <ProjectSection />
      </main>
      <Footer />
    </Fragment>
  );
}
