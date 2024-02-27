import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Providers } from "./providers";

export const runtime = "edge";

export const metadata: Metadata = {
  metadataBase: new URL("https://diegoes.vercel.app"),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
