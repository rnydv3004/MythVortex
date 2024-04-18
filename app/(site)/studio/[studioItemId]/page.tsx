"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import StudioItem from "@/components/Studio/StudioItem";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import axios from "axios";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export default function page() {
  const [studioList, setStudioList] = useState([]);

  useEffect(() => {
    axios.post("/api/studio/fetchStudio").then((res) => {
      if (res.data.success) {
        setStudioList(res.data.result);
      }
    });
  }, []);

  return (
    <div className="min-h-screen overflow-hidden p-4 pt-22 lg:pt-5">
      <div className="mx-auto w-full md:px-8 lg:max-w-c-1016 lg:px-4 xl:mt-20 xl:px-0">
        <div className="w-full grid-cols-12 gap-10 lg:grid">
          <div className="relative col-span-12 block aspect-[368/239] w-full lg:col-span-7">
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
          <div className="col-span-12 mt-5 lg:col-span-5 lg:mt-0">
            <h1 className="mb-2 text-2xl font-semibold text-slate-700 dark:text-slate-300 lg:text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <label className="text-sm">Category: Website</label>
            <br />
            <label className="block text-sm lg:mb-1">
              Sub Catgeory: Contact
            </label>
            <br />
            <label
              className={`${roboto.className} text-6xl font-extrabold text-slate-700 dark:text-white`}
            >
              999
            </label>
            <select className="ml-2 rounded-sm border-none bg-transparent font-semibold outline-none">
              <option className="border-none px-4 py-2 dark:bg-black">
                INR
              </option>
              <option className="border-none px-4 py-2 dark:bg-black">
                CAD
              </option>
              <option className="border-none px-4 py-2 dark:bg-black">
                USD
              </option>
            </select>
            <button className="mt-5 flex items-center justify-center gap-2 rounded-sm bg-slate-200 px-4 py-2 text-base font-medium text-slate-600 hover:bg-primary hover:text-white dark:bg-slate-700 dark:text-white dark:hover:bg-primary lg:min-w-[100px]">
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
          className="animate_left mt-10 md:w-2/5 lg:w-1/2"
        >
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-4xl">
            Similar
          </h2>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
          {StudioItem &&
            studioList.map((post, key) => (
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
