import type { Metadata } from "next";
import { ProfileSection } from "./components/profile-section";
import { SnippetOfTheDay } from "./components/snippet-of-the-day";

export const runtime = "edge";

export const metadata: Metadata = {
  metadataBase: new URL("https://diegoes.vercel.app"),
  title: {
    default: "Diego Espinosa",
    template: "%s | Lee Robinson",
  },
  description: "Developer, MMA enthusiast, and a little bit of  UI designer.",
  openGraph: {
    title: "Diego Espinosa",
    description: "Developer, MMA enthusiast, and a little bit of  UI designer.",
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
    <main className="flex flex-col md:flex-row min-h-screen items-start p-8 md:p-24 gap-8 md:gap-[140px]">
      <ProfileSection />
      <article className="flex items-center justify-center max-w-lg">
        <SnippetOfTheDay />
      </article>
    </main>
  );
}
