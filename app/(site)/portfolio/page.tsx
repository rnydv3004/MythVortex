"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DarkBg from "../../../public/bg/dark_bg2.webp";
import LightBg from "../../../public/bg/white_bg2.webp";

export default function page() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-white dark:bg-slate-800">
        <div className="border-primary-500 h-14 w-14 animate-spin rounded-full border-t-4"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto lg:aspect-video ">
      
      

      <div className="flex h-fit lg:h-full w-full flex-col justify-normal px-4 md:px-0 lg:mt-30 lg:justify-start lg:px-20">

      <div className="absolute left-0 top-0 -z-10 w-screen overflow-hidden">
        <Image
          priority
          src={theme == "dark" ? DarkBg : LightBg}
          alt={"background"}
          className="h-screen w-full"
        />
      </div>
      
        <div className="flex flex-col lg:flex-row justify-between gap-20 lg:gap-30">
          <div className="  flex h-fit flex-col justify-center mt-10 lg:mt-0">
            {/* heading */}
            <h1 className="mb-0 pr-8 pt-20 text-[1.65rem] font-bold leading-8 text-slate-800 dark:text-slate-300 md:text-6xl md:font-extrabold lg:mt-0 lg:pt-0 lg:text-[36px] lg:leading-[2.5rem]">
              <span className="bg-gradient-to-tr from-black via-gray-600 to-slate-800 bg-clip-text text-transparent dark:from-slate-900 dark:via-gray-200 dark:to-slate-700 ">
                Our
              </span>{" "}
              <span className="bg-gradient-to-tr from-blue-800 via-blue-500 to-blue-900 bg-clip-text text-transparent dark:from-blue-600 dark:via-sky-500 dark:to-blue-950">
                Work
              </span>
            </h1>

            {/* sub desc */}
            <div className="mt-2 w-[80%] text-left font-medium leading-[22px] text-slate-500 dark:text-slate-400 lg:mt-4 lg:w-[400px] lg:leading-6">
              <p className="text-sm lg:text-base">
                we craft captivating digital experiences. Explore our portfolio
                to see how we transform visionary concepts into powerful web
                solutions.
              </p>
            </div>
          </div>

          <div className=" ml-auto h-fit">
            <h2 className="mb-2 text-sm font-semibold text-slate-600">
              Our{" "}
              <span className="border-b-2 border-slate-300 text-primary">
                Principles
              </span>
            </h2>

            <div className="grid w-fit grid-cols-1 lg:grid-cols-2 gap-5">
              
              <div className="lg:aspect-video h-fit lg:h-[150px] rounded-md border-2 dark:border-2 px-4 lg:px-6 py-4 lg:py-4 shadow dark:bg-black dark:bg-opacity-55 dark:border-slate-600 ">
                <h3 className="text-xs lg:text-sm font-semibold text-primary">Quality</h3>
                <p className="mt-2 text-xs lg:text-sm font-medium text-slate-700 dark:text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, nemo.
                </p>
              </div>

              <div className="lg:aspect-video h-fit lg:h-[150px] rounded-md border-2 dark:border-2 px-4 lg:px-6 py-4 lg:py-4 shadow dark:bg-black dark:bg-opacity-55 dark:border-slate-600 ">
                <h3 className="text-xs lg:text-sm font-semibold text-primary">Quality</h3>
                <p className="mt-2 text-xs lg:text-sm font-medium text-slate-700 dark:text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, nemo.
                </p>
              </div>

              <div className="lg:aspect-video h-fit lg:h-[150px] rounded-md border-2 dark:border-2 px-4 lg:px-6 py-4 lg:py-4 shadow dark:bg-black dark:bg-opacity-55 dark:border-slate-600 ">
                <h3 className="text-xs lg:text-sm font-semibold text-primary">Quality</h3>
                <p className="mt-2 text-xs lg:text-sm font-medium text-slate-700 dark:text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, nemo.
                </p>
              </div>

              <div className="lg:aspect-video h-fit lg:h-[150px] rounded-md border-2 dark:border-2 px-4 lg:px-6 py-4 lg:py-4 shadow dark:bg-black dark:bg-opacity-55 dark:border-slate-600 ">
                <h3 className="text-xs lg:text-sm font-semibold text-primary">Quality</h3>
                <p className="mt-2 text-xs lg:text-sm font-medium text-slate-700 dark:text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, nemo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-slate-600 w-full mt-5 lg:hidden"></div>
        
        <div className="relative ml-auto mt-5 w-full rounded-sm border border-r-4 bg-gradient-to-l from-slate-100 via-slate-50 p-2 text-justify text-sm font-semibold text-slate-500 dark:border-slate-600 dark:from-slate-900 dark:via-slate-800 dark:to-slate-800 dark:text-slate-400 lg:bottom-0 lg:ml-0 lg:mt-35 lg:w-[900px] lg:bg-gradient-to-r lg:dark:bg-gradient-to-r ">
          At <span className="font-semibold text-primary">Mythvortex</span>, we
          create digital experiences that captivate and engage. Our portfolio
          showcases the innovation, dedication, and skill our team brings to
          every project. From dynamic e-commerce platforms to robust enterprise
          solutions, explore how we turn visionary concepts into powerful
          digital realities.
        </div>
      </div>

    </div>
  );
}
