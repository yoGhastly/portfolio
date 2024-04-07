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
      <main className="w-full max-w-6xl mx-auto flex flex-col gap-10 justify-center items-center">
        <Hero />
        <About />
        <ProjectSection />
      </main>
      <Footer />
    </Fragment>
  );
}
