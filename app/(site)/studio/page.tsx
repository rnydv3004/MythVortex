"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import StudioItem from "@/components/Studio/StudioItem";
import axios from "axios";

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

const CATEGORYLIST = [
  "AI & ML",
  "Technology",
  "IOT",
  "Crypto",
  "Blockchain",
  "Cryptocurrency",
  "AR & VR",
];

export default function Page() {
  const [searchText, setSearchText] = useState("");
  const [categorySearchList, setCategorySearchList] = useState<string[]>([]);
  const [blogData, setBlogData] = useState<any[]>([]);
  const [studioList, setStudioList] = useState([]);

  useEffect(() => {
    axios.post("/api/studio/fetchStudio").then((res) => {
      if (res.data.success) {
        setStudioList(res.data.result);
        console.log(res.data.result);
      }
    });
  }, []);

  return (
    <div className="min-h-screen pt-14">
      <HeroParallax products={products} />

      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className=" mb-10 w-full rounded-sm bg-yellow-300 dark:bg-yellow-700 bg-opacity-25 px-4 py-2 text-yellow-600 flex items-center gap-2 border border-yellow-300 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
          Hey there! 😊 Don't worry, we won't bother you with calls unless you ask for one. Your peace of mind is our priority.
        </div>

        <div className="relative flex flex-col gap-5 lg:flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute left-2 top-2 h-5 w-5 text-slate-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            placeholder="Search here..."
            className="h-fit w-full rounded-full border-2 border-slate-300 px-4 py-2 pl-8 text-sm outline-none hover:shadow-lg dark:border-slate-700 lg:w-[400px]"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <div className="flex gap-2 overflow-x-auto">
            {CATEGORYLIST.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  if (categorySearchList.includes(category)) {
                    setCategorySearchList(
                      categorySearchList.filter((item) => item != category),
                    );
                  } else {
                    setCategorySearchList([...categorySearchList, category]);
                  }
                }}
                className={`${categorySearchList.includes(category) ? "border-primary text-primary" : ""} w-fit cursor-pointer text-nowrap rounded-full border-2 px-4 py-2 text-xs font-semibold dark:border-slate-700`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-20 mt-5">
          {/* {blogData.length === 0 ? <>No Blog Found!</> : <></>} */}

          {studioList &&
            studioList.map((categoryData: any, index) => (
              <div className="flex w-full flex-col">
                <h2 className="mt-10 text-3xl font-semibold">
                  {categoryData.categoryName}
                </h2>
                <div className="my-5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
                  {categoryData.data.map(
                    (data: any, index: React.Key | null | undefined) => (
                      <StudioItem
                        key={index}
                        item={{
                          title: data.title,
                          link: "https://img.freepik.com/free-vector/contact-us-concept-landing-page_23-2148270076.jpg?t=st=1713013018~exp=1713016618~hmac=b452c177a4f434a9f128c9556340f2d2309c54b04ef44536407a2702940a3a8f&w=996",
                          description: data.shortdesc,
                          author: "string",
                          updated: "string",
                          hero: data.image,
                        }}
                      />
                    ),
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
