"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";

export default function LatestBlog() {
  const [blogList, setBlogList] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/api/blog/fetchLatest").then((res) => {
      if (res.data.success) {
        setBlogList(res.data.result);
      }
    });
  }, []);

  return (
    <section id="faq" className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <h2 className="relative mb-8 text-3xl font-bold text-black dark:text-white xl:text-4xl ">
          Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:flex-row gap-5">
            {
                blogList.map((blog, index)=>(
                    <BlogItem key={index} blog={blog}/>
                ))
            }
        </div>
      </div>
    </section>
  );
}
