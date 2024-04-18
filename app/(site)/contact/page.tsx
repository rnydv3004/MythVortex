import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Whatsapp from "@/components/Whatsapp";

export const metadata: Metadata = {
  title: "Contact | Mythvortex",
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
    <div className="pt-25">
      <div className="max-w-c-1280 mx-auto">
        <h1 className="font-bold text-3xl md:text-4xl text-white">Contact Us</h1>
        <p className="text-sm md:text-base mt-2 text-justify mb-5">We welcome the opportunity to connect with you. Whether you're seeking assistance with web development, web app development, or have inquiries regarding our services, we're here to assist you. Please don't hesitate to reach out to us via the contact form provided below, or feel free to contact us directly via email or phone. Your satisfaction and success are our priorities, and we eagerly anticipate the opportunity to discuss how we can best meet your needs.</p>
      </div>
      <Contact />
      <Whatsapp />
    </div>
  );
};

export default SupportPage;
