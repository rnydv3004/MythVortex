import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import BlogPageLayout from "@/components/Blog/BlogPageLayout";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Blog | Mythvortex",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = async () => {
  return <BlogPageLayout />;
};

export default BlogPage;
