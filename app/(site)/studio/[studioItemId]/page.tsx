"use client";
import React from "react";
import Image from "next/image";
import StudioItem from "@/components/Studio/StudioItem";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500"
});

export default function page() {
  return (
    <div className="min-h-screen pt-22 lg:pt-5 overflow-hidden p-4">
      <div className="mx-auto w-full lg:max-w-c-1016 lg:px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="lg:grid grid-cols-12 w-full gap-10">
          <div className="relative w-full col-span-12 lg:col-span-7 block aspect-[368/239]">
            <Image
              src={
                "https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?t=st=1713016914~exp=1713020514~hmac=55065452432c42f08bdc9628cb3ccbee16c6ccdf539c0926681f6863aa4b2e34&w=2016"
              }
              alt={"Test"}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="col-span-12 lg:col-span-5 mt-5 lg:mt-0">
            <h1 className="mb-2 text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <label className="text-sm">Category: Website</label>
            <br />
            <label className="lg:mb-1 block text-sm">Sub Catgeory: Contact</label>
            <br />
            <label className={`${roboto.className} text-6xl font-extrabold text-slate-700 dark:text-white`}>999</label>
            <select className="ml-2 rounded-sm border-none bg-transparent font-semibold outline-none">
              <option className="border-none dark:bg-black px-4 py-2">INR</option>
              <option className="border-none dark:bg-black px-4 py-2">CAD</option>
              <option className="border-none dark:bg-black px-4 py-2">USD</option>
            </select>
            <button className="mt-5 flex lg:min-w-[100px] items-center justify-center gap-2 font-medium text-slate-600 rounded-sm px-4 py-2 text-base hover:bg-primary hover:text-white bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.8"
                stroke="currentColor"
                className="h-5 w-5"
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
        <div className="mt-10">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            dolores veritatis delectus, facere praesentium expedita suscipit
            itaque? Esse error incidunt ullam ipsum aliquid officiis sit
            reprehenderit, beatae ducimus repellat fuga recusandae accusamus
            amet! Sapiente perspiciatis obcaecati odit nam distinctio earum iure
            tempore? Quo suscipit modi laudantium temporibus labore libero
            dolore et odit architecto. Dolorem repellendus delectus cupiditate
            repudiandae, dicta qui repellat voluptates obcaecati doloremque rem
            a nihil molestiae, necessitatibus ipsa nobis aut. Eius ea qui magni.
            Sunt perferendis cum, est eligendi, corrupti illo dignissimos rerum
            repellat doloribus minima harum eum ab nam! Praesentium consectetur,
            veritatis fugit perferendis corrupti incidunt voluptate?
          </p>
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -20,
            },

            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_left md:w-2/5 lg:w-1/2 mt-10"
        >
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-4xl">
            Similar
          </h2>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
          {Array.from({ length: 8 }).map((post, key) => (
            <StudioItem
              item={{
                title: "string",
                link: "https://img.freepik.com/free-vector/contact-us-concept-landing-page_23-2148270076.jpg?t=st=1713013018~exp=1713016618~hmac=b452c177a4f434a9f128c9556340f2d2309c54b04ef44536407a2702940a3a8f&w=996",
                thumbnail:
                  "https://img.freepik.com/free-vector/contact-us-concept-landing-page_23-2148270076.jpg?t=st=1713013018~exp=1713016618~hmac=b452c177a4f434a9f128c9556340f2d2309c54b04ef44536407a2702940a3a8f&w=996",
                description: "string",
                author: "string",
                updated: "string",
                hero: "https://img.freepik.com/free-vector/contact-us-concept-landing-page_23-2148270076.jpg?t=st=1713013018~exp=1713016618~hmac=b452c177a4f434a9f128c9556340f2d2309c54b04ef44536407a2702940a3a8f&w=996",
              }}
            />
          ))}
        </div>

        <FAQ />
      </div>
    </div>
  );
}
