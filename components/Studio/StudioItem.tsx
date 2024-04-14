import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface StudioItemProps {
  item: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
    author: string;
    updated?: string;
    hero: string; // Ensure 'hero' property is defined in the item object
  };
}

const StudioItem: React.FC<StudioItemProps> = ({ item }) => {
  return (
    <div>
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
        className="animate_top h-full rounded-lg border-2 border-slate-200 bg-white p-2 pb-4 shadow-lg dark:border-slate-700 dark:bg-blacksection"
      >
        <div className="relative block aspect-[368/239]">
          <Image
            src={item.hero}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="px-4">
          <h3 className="mb-0 mt-4 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-slate-300 dark:hover:text-white xl:text-sm">
            {item.title.slice(0, 40)}...
          </h3>
          <p className="line-clamp-3 text-justify text-xs">
            {item.description}
          </p>
          <div className="mt-2 flex justify-between">
            <Link href={"/studio/67"} className="flex items-center justify-center gap-2 rounded-sm px-4 py-2 text-xs hover:bg-primary text-slate-600 font-semibold hover:text-white bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-primary" >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              View
            </Link>

            <button className="flex items-center justify-center gap-2 rounded-sm px-4 py-2 text-xs hover:bg-primary text-slate-600 font-semibold hover:text-white bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.8"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              Add
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudioItem;
