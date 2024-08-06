import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Whatsapp from "@/components/Whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with us easily through our contact page. Whether you have questions, feedback, or inquiries, we're here to assist you. Reach out to us and let's start the conversation!",
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
    "business",
    "Entrepreneurship",
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

const SupportPage = () => {
  return (
    <div className="py-25 bg-slate-50 dark:bg-black">
      
      <Contact />
    </div>
  );
};

export default SupportPage;
