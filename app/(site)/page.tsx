import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Head from "next/head";
import { TracingBeam } from "@/components/ui/tracing-beam";
import LatestBlog from "@/components/Blog/LatestBlog";

export const metadata: Metadata = {
  title: "MythVortex",
  description: "Where Myths Meet the Innovation",
  keywords: [
    "web development services",
    "app development solutions",
    "custom website design",
    "SEO optimization",
    "digital marketing agency",
    "software development company",
    "mobile app design",
    "ecommerce website solutions",
    "responsive web applications",
    "social media marketing",
    "brand identity services",
    "user interface design",
    "CMS development",
    "progressive web app development",
    "mobile-first web design",
    "e-commerce web development",
    "website redesign",
    "SEO strategy",
    "content marketing services",
    "web development consulting",
    "custom software solutions",
    "API development and integration",
    "cloud-based solutions",
    "website security services",
    "technology consulting firm",
    "software deployment solutions",
    "quality assurance in software",
    "website performance analysis",
    "conversion rate optimization services",
    "responsive web design services",
    "UI/UX optimization",
    "local SEO services",
    "international SEO strategies",
    "pay-per-click advertising",
    "ecommerce website design",
    "website maintenance services",
    "website analytics",
    "web application performance optimization",
    "software architecture design",
    "technology stack consulting",
    "cross-platform app development",
    "scalable software solutions",
    "technology innovation consulting",
    "digital transformation services",
  ],
  creator: "MythVortex",
  category: "Web Development",
  publisher: "MythVortex",
  robots: "index, follow",
  abstract:
    "Explore a world where ancient myths converge with cutting-edge innovation. Welcome to MythVortex, your gateway to a digital realm where timeless stories blend seamlessly with the latest in web development, app solutions, and transformative technologies. Immerse yourself in a journey where creativity meets expertise, and discover how MythVortex is redefining the landscape of digital experiences. Join us on a quest for innovation and excellence, where myths come to life in the realm of technology.",
  applicationName: "MythVortex",
  verification: {
    google: "x4IMt9j9Jpud7qFCuQ6c1vl3QEMYrdGvDGWbvwFlY9A",
  },
};

export default function Home() {
  return (
    <main>
      <Head>
        <link
          rel="canonical"
          href={"https://mythvortex.com/"}
          key="canonical"
        />
      </Head>
      <Hero />
      <Feature />
      <FunFact />
      <LatestBlog/>
      <FAQ />
      <Contact />
    </main>
  );
}
