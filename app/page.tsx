import type { Metadata } from "next";
import { Navbar } from "./components/layout/navbar";
import { MouseParallaxHeader } from "./components/mouse-parallax";

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
    <main className="flex flex-col gap-5 h-screen relative">
      <Navbar />
      <div className="absolute w-full h-screen">
        <MouseParallaxHeader />
      </div>
    </main>
  );
}
