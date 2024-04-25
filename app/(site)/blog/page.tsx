import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import BlogPageLayout from "@/components/Blog/BlogPageLayout";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Step into our virtual library of insights and discoveries on our blog page. From thought-provoking analysis to practical tips and tutorials, find everything you need to stay ahead in Technology. ",
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

const BlogPage = async () => {
  return <BlogPageLayout />;
};

export default BlogPage;
