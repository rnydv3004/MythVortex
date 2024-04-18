import React from "react";
import Career from "./Career";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career | Mythvortex",
  description:
    "Explore exciting opportunities and join our team! Discover rewarding career paths, innovative projects, and a supportive work environment. Start your journey with us today!",
  keywords: [
    "mythvortex",
    "innovation",
    "technology",
    "creativity",
    "web application development",
    "developer",
    "web app",
    "website",
    "website development",
    "startup",
  ],
  authors: [{ name: "Mythvortex", url: "https://www.mythvortex.com" }],
  creator: "Mythvortex",
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@yourtwitterhandle",
  //   title: "Mythvortex",
  //   description: "Where Myths Meet The Innovation",
  // },
  robots: "index,follow",
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  publisher: "Mythvortex",
  appleWebApp: {
    capable: true,
    title: "Mythvortex",
    statusBarStyle: "black-translucent",
  },
  category: "Application Development",
};

export default function page() {
  return <Career />;
}
