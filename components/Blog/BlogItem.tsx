"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: any }) => {


  return (
    <Link href={`/blog/${blog.id}`}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg border-2 h-full border-slate-200 bg-white p-2 pb-4 shadow-lg dark:border-slate-700 dark:bg-blacksection"
      >
        <div className="relative  block aspect-[368/239]">
          <Image src={blog.hero} alt={blog.title} fill className="rounded-lg" />
        </div>

        <div className="px-4">
          <h3 className="mb-0 mt-4 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-slate-300 dark:hover:text-white xl:text-sm">
            <div >
              {`${blog.title.slice(0, 40)}...`}
            </div>
          </h3>
          <p className="line-clamp-3 text-justify text-xs">
            {blog.description}
          </p>
          <p className="mt-4 flex justify-between text-xs font-light italic">
            <span>Author: {blog.author}</span>
            {blog.updated && <span>{blog.updated.slice(0, 16).replace("T", " ")}</span>}{" "}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogItem;
