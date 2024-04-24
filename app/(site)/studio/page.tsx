"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import StudioItem from "@/components/Studio/StudioItem";
import axios from "axios";
import ChangePopUp from "./ChangePopUp";

const products = [
  {
    title: "Mythvortex Contact Dark",
    link: "https://mythvortex.com/contact",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/sc-man.appspot.com/o/studio%2Fcontact_dk.png?alt=media&token=6011344d-bb3b-4a54-b995-8a27eb62641b",
  },
  {
    title: "Mythvorte Blog Light",
    link: "https://mythvortex.com/blog",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/sc-man.appspot.com/o/studio%2Fblog_wh.png?alt=media&token=abf46f4f-cd78-47ab-8d4e-f8a77355d83a",
  },
  {
    title: "Mythvortex Dark",
    link: "https://mythvortex.com",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/sc-man.appspot.com/o/studio%2Fhero_dk.png?alt=media&token=b68cf85f-f811-4f32-a579-a5617c578f3d",
  },
  {
    title: "Mythvortex Workflow Light",
    link: "https://mythvortex.com/workflow",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/sc-man.appspot.com/o/studio%2Foverview_wh.png?alt=media&token=a97f2840-fa71-4772-8200-7cd602deee82",
  },
  {
    title: "Mythvortex Workflow Dark",
    link: "https://mythvortex.com/workflow",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/sc-man.appspot.com/o/studio%2Foverview_dk.png?alt=media&token=e8531ca1-e9fe-4f7c-94a6-cca0174549ee",
  },
  {
    title: "Mythvortex Contact Light",
    link: "https://mythvortex.com/contact",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/sc-man.appspot.com/o/studio%2Fcontact_wh.png?alt=media&token=2f15fa30-5629-4b75-a130-491636ac6607",
  },
  {
    title: "Mythvortex Blog Dark",
    link: "https://mythvortex.com/blog",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/sc-man.appspot.com/o/studio%2Fblog_dk.png?alt=media&token=959dbec7-0ce0-4e82-a822-07c346aa9622",
  },
  {
    title: "Mythvortex Light",
    link: "https://mythvortex.com",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/sc-man.appspot.com/o/studio%2Fhero_wh.png?alt=media&token=124c3b00-674a-45d7-970c-a1dfb91e8ecc",
  },
  {
    title: "Mythvortex Workflow Dark",
    link: "https://mythvortex.com/workflow",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/sc-man.appspot.com/o/studio%2Foverview_dk.png?alt=media&token=e8531ca1-e9fe-4f7c-94a6-cca0174549ee",
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
  const [studioList, setStudioList] = useState([]);
  const [popUp, setPopUp] = useState({
    id: -1,
    title: "",
  });

  useEffect(() => {
    axios.post("/api/studio/fetchStudio").then((res) => {
      if (res.data.success) {
        setStudioList(res.data.result);
        console.log(res.data.result);
      }
    });
  }, []);

  return (
    <div className="min-h-screen pt-14 dark:bg-blacksection">
      <HeroParallax products={products} />

      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        {/* <div className=" mb-10 flex w-full items-start gap-2 rounded-sm border border-green-600 bg-green-300 bg-opacity-25 px-4 py-2 text-justify text-sm font-medium text-green-500 dark:bg-green-700 dark:bg-opacity-35 lg:items-center lg:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-15 animate-pulse fill-green-900 stroke-green-400 pt-0.5 lg:h-6 lg:w-6 lg:pt-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
          Hey there! 😊 Don't worry, we won't bother you with calls unless you
          ask for one. Your peace of mind is our priority.
        </div> */}

        {/* <div className="relative flex flex-col gap-5 lg:flex-row">
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
            className="h-fit w-full rounded-full border-2 border-slate-300 px-4 py-2 pl-8 text-sm outline-none hover:shadow-lg dark:border-slate-700 dark:bg-black lg:w-[400px]"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <div className="flex gap-2 overflow-x-auto">
            {studioList &&
              studioList.map((category: any, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (categorySearchList.includes(category.categoryName)) {
                      setCategorySearchList(
                        categorySearchList.filter(
                          (item) => item != category.categoryName,
                        ),
                      );
                    } else {
                      setCategorySearchList([
                        ...categorySearchList,
                        category.categoryName,
                      ]);
                    }
                  }}
                  className={`${categorySearchList.includes(category.categoryName) ? "border-primary bg-primary text-white" : ""} w-fit cursor-pointer text-nowrap rounded-full border-2 px-4 py-2 text-xs font-semibold dark:border-slate-700`}
                >
                  {category.categoryName}
                </button>
              ))}
          </div>
        </div> */}

        <div className="mb-20 ">
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
                      <>
                        {popUp.id > -1 && (
                          <ChangePopUp
                            itemData={{
                              id: data.id,
                              title: data.title,
                            }}
                            close={setPopUp}
                          />
                        )}

                        <StudioItem
                          key={index}
                          id={data.id}
                          title={data.title}
                          description={data.shortdesc}
                          setDetails={setPopUp}
                          hero={data.image}
                        />
                      </>
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
