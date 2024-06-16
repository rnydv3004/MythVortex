"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import DarkBg from "../../../public/bg/dark_bg2.webp";
// import LightBg from "../../../public/bg/white_bg2.webp";
import PortfolioData, { PortfolioInterface } from "./data";

export default function page() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(true);
  const [bgImage, setBgImage] = useState("/bg/white_bg2.webp");

  //   useEffect(() => {
  //     setBgImage(theme === "dark" ? "/bg/dark_bg2.webp" : "/bg/white_bg2.webp");
  //     setMounted(true);
  //   }, []);

  if (!mounted) {
    return (
      <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-white dark:bg-slate-800">
        <div className="border-primary-500 h-14 w-14 animate-spin rounded-full border-t-4"></div>
      </div>
    );
  }

  return (
    <div className=" container mx-auto  lg:aspect-video">
      <div className="blackSquarePattern bg-gradient-to-tr from-white via-slate-100 to-slate-100 dark:bg-gradient-to-tr dark:from-black dark:via-slate-900 dark:to-slate-900">
        <div className="flex h-fit w-full flex-col justify-normal px-4 md:px-0 lg:h-full lg:justify-start lg:px-20 lg:pt-30">
          {/* 
      <div className="absolute left-0 top-0 -z-10 w-screen overflow-hidden">
        <Image
          priority
          src={theme == "dark" ? DarkBg : LightBg}
          alt={"background"}
          className="h-screen w-full"
        />
      </div> */}

          <div className="flex flex-col justify-between gap-20 lg:flex-row lg:gap-30">
            <div className="  mt-10 flex h-fit flex-col justify-center lg:mt-0">
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
                  we craft captivating digital experiences. Explore our
                  portfolio to see how we transform visionary concepts into
                  powerful web solutions.
                </p>
              </div>
            </div>

            <div className=" ml-auto h-fit">
              <h2 className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                Our{" "}
                <span className="border-b-2 border-slate-300 text-primary">
                  Principles
                </span>
              </h2>

              <div className="grid w-fit grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="h-fit rounded-md border-2 bg-white bg-opacity-45 px-4 py-4 shadow-sm dark:border-2 dark:border-slate-600 dark:bg-black dark:bg-opacity-55 lg:aspect-video lg:h-[150px] lg:px-6 lg:py-4 ">
                  <h3 className="text-xs font-semibold text-primary lg:text-sm">
                    Quality
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-400 lg:text-sm">
                    Delivering exceptional, high-performance web solutions with
                    meticulous attention to detail.
                  </p>
                </div>

                <div className="h-fit rounded-md border-2 bg-white bg-opacity-45 px-4 py-4 shadow-sm dark:border-2 dark:border-slate-600 dark:bg-black dark:bg-opacity-55 lg:aspect-video lg:h-[150px] lg:px-6 lg:py-4 ">
                  <h3 className="text-sm font-semibold text-primary lg:text-sm">
                    Innovation
                  </h3>
                  <p className="mt-2 text-xs font-medium text-slate-700 dark:text-slate-400 lg:text-sm">
                    Embracing cutting-edge technologies for competitive and
                    modern web development.
                  </p>
                </div>

                <div className="h-fit rounded-md border-2 bg-white bg-opacity-45 px-4 py-4 shadow-sm dark:border-2 dark:border-slate-600 dark:bg-black dark:bg-opacity-55 lg:aspect-video lg:h-[150px] lg:px-6 lg:py-4 ">
                  <h3 className="text-xs font-semibold text-primary lg:text-sm">
                    Reliability
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-400 lg:text-sm">
                    Dependable service, timely delivery, and transparent
                    communication throughout projects.
                  </p>
                </div>

                <div className="h-fit rounded-md border-2 bg-white bg-opacity-45 px-4 py-4 shadow-sm dark:border-2 dark:border-slate-600 dark:bg-black dark:bg-opacity-55 lg:aspect-video lg:h-[150px] lg:px-6 lg:py-4 ">
                  <h3 className="text-xs font-semibold text-primary lg:text-sm">
                    Continuous Improvement
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-400 lg:text-sm">
                    Ongoing skill enhancement to provide the best web
                    development services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 h-0.5 w-full bg-slate-200 dark:bg-slate-600 lg:hidden"></div>

          <div className="relative ml-auto mt-7 w-full rounded-sm border border-r-4 bg-gradient-to-l from-slate-100 via-slate-50 to-white p-2 text-justify text-sm font-semibold text-slate-500 dark:border-slate-600 dark:from-slate-900 dark:via-slate-800 dark:to-slate-800 dark:text-slate-400 lg:bottom-0 lg:ml-0 lg:mt-35 lg:w-[900px] lg:bg-gradient-to-r lg:shadow-md lg:dark:bg-gradient-to-r ">
            At <span className="font-semibold text-primary">Mythvortex</span>,
            we create digital experiences that captivate and engage. Our
            portfolio showcases the innovation, dedication, and skill our team
            brings to every project. From dynamic e-commerce platforms to robust
            enterprise solutions, explore how we turn visionary concepts into
            powerful digital realities.
          </div>
        </div>

        <div className="relative pb-30 lg:-top-30 lg:px-20">
          {PortfolioData.map((item: PortfolioInterface, index) => (
            <div
              className="mx-auto my-8 grid grid-cols-2 px-4 lg:my-50 lg:gap-5"
              key={index}
            >
              <div
                className={`col-span-2 hidden scale-75 bg-opacity-20 lg:col-span-1 lg:block  ${
                  index % 2 === 0 ? "order-1" : "order-2"
                }`}
                style={{
                  order: index % 2 === 0 ? 1 : 2,
                  marginLeft: index % 2 === 0 ? 0 : "auto",
                }}
              >
                <div className=" aspect-[9/16] w-[340px] bg-slate-200 dark:bg-slate-800 lg:rounded-md">
                  {item.siteBlocked ? (
                    <Link
                      target="_blank"
                      href={item.link}
                      className="relative top-5 mx-auto flex aspect-[9/16] w-[340px] animate-floatY cursor-pointer flex-col items-center justify-center overflow-hidden rounded-md border-2 bg-white shadow-xl dark:border-slate-700 dark:bg-gradient-to-t dark:from-black dark:via-slate-900 dark:to-slate-800 dark:shadow-slate-700"
                      style={{ left: index % 2 === 0 ? "40px" : "-40px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-20"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      <label>redirect to</label>
                      <h6 className="text-xl font-bold">{item.name}</h6>
                    </Link>
                  ) : (
                    <iframe
                      src={item.link}
                      title={item.name}
                      // width="340px"
                      // height="520px"
                      frameBorder="0"
                      className="relative top-5 mx-auto aspect-[9/16] w-[340px] animate-floatY overflow-hidden rounded-md border-2 shadow-xl dark:border-slate-700 dark:shadow-slate-700"
                      style={{ left: index % 2 === 0 ? "40px" : "-40px" }}
                    />
                  )}
                </div>
              </div>

              <div
                className={`col-span-2 my-auto border-t-2 border-slate-200 pt-10 dark:border-slate-600 lg:col-span-1 lg:border-none lg:pt-0 ${
                  index % 2 === 0 ? "order-2" : "order-1"
                }`}
                style={{ order: index % 2 === 0 ? 2 : 1 }}
              >
                <h3 className="w-full text-2xl font-bold text-slate-800 dark:text-slate-300 lg:text-4xl">
                  {item.name}
                </h3>
                <h2 className="font-semibold">{item.type}</h2>
                <p className="pt-5 text-justify text-sm lg:text-base text-slate-700 dark:text-slate-300">
                  {item.desc}
                </p>
                <ul className="pt-5 text-slate-700 dark:text-slate-300">
                  {item.keyPoints.map((points, index) => (
                    <li
                      key={index}
                      className="flex items-center text-justify text-sm gap-2 lg:text-base"
                    >
                      <span className="text-primary ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                          />
                        </svg>
                      </span>

                      {points}
                    </li>
                  ))}
                </ul>
                <Link
                  target="_blank"
                  href={item.link}
                  className="mt-5 flex w-fit items-center gap-2 rounded-sm border-2 border-primary bg-primary bg-opacity-5 px-6 py-2 text-sm font-semibold text-primary hover:bg-opacity-20 lg:text-base"
                >
                  Launch{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
