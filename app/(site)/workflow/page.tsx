import React from "react";
import WorkFlow from "./WorkFlow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflow | Mythvortex",
  description:
    "Navigate the service lifecycle seamlessly with our comprehensive page workflow. From initiation to completion, unlock clarity and efficiency in every step.",
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

export default function DocsPage() {
  return <WorkFlow />;
}
