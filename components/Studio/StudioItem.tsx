"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const StudioItem = ({
  id,
  title,
  description,
  setDetails,
  hero
}: {
  id: any;
  title: any;
  description: any;
  setDetails: any;
  hero: any;
}) => {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push(`/studio/${id}`)}
    >
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
        className="animate_top h-full rounded-md border-2 border-slate-200 bg-white p-2 pb-4 shadow-lg dark:border-slate-700 dark:bg-blacksection"
      >
        <div className="relative block aspect-[368/239] rounded-md bg-slate-200 dark:bg-blackho">
          {hero && (
            <Image
              src={hero}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              loading="lazy"
            />
          )}
        </div>

        <div className="px-4">
          <h3 className="mb-0 mt-4 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-slate-300 dark:hover:text-white xl:text-sm">
            {title.slice(0, 40)}
            {title.length > 40 && "..."}
          </h3>
          <p className="line-clamp-3 text-justify text-xs">{description}</p>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="mt-4 flex justify-end"
          >
            <button
              onClick={() => {
                setDetails({
                  id: id,
                  title: title,
                });
              }}
              className="flex items-center justify-center gap-2 rounded-sm bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-primary hover:text-white dark:bg-slate-700 dark:text-white dark:hover:bg-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              Get Quote
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudioItem;
