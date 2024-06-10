"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggler from "../Header/ThemeToggler";
import toast from "react-hot-toast";
import dayjs, { Dayjs } from "dayjs";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "assets/css/MiniCalender.css";

import AppointmentImage from "../../public/images/appointment.png";
import { Team } from "../Team";

const People = [
  {
    id: 1,
    name: "Sarneet Sachar",
    designation: "Founder",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Aryan Yadav",
    designation: "Founder",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Shiven Yadav",
    designation: "Founder",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Developers",
    designation: "",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

const Hero = () => {
  const [sliderValue, setSliderValue] = useState(70);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative container mx-auto -z-0 h-screen select-none overflow-hidden bg-transparent pb-0 pt-17 dark:from-slate-900 dark:via-black dark:to-slate-800">
      <div className="absolute left-0 top-0 -z-10 h-screen w-screen overflow-hidden">
        {[...Array(2000)].map((_, index) => (
          <div
            key={index}
            className="absolute bg-slate-200 bg-opacity-65 dark:bg-slate-800"
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              top: `${Math.floor(index / 50) * 25}px`, // Calculate top position based on index
              left: `${(index % 50) * 25}px`, // Calculate left position based on index
            }}
          />
        ))}
      </div>

      <div className="mx-auto flex h-full flex-col items-center justify-center overflow-hidden md:px-8 lg:flex-row 2xl:px-0">
        <div className="flex h-full flex-col justify-evenly overflow-hidden lg:flex-row lg:items-center lg:gap-10">
          <div className="justify-normal flex h-full w-full flex-col px-4 md:px-0 lg:w-1/2 lg:justify-center lg:pl-20">
            {/* heading */}
            <h1 className="mb-0 pr-8 pt-20 text-[1.65rem] font-bold leading-8 text-slate-800 dark:text-slate-300 md:text-6xl md:font-extrabold lg:mt-0 lg:pt-0 lg:text-[36px] lg:leading-[2.5rem]">
              <span className="bg-gradient-to-tr from-black via-gray-600 to-slate-800 bg-clip-text text-transparent dark:from-slate-900 dark:via-gray-200 dark:to-slate-700 ">
                Where
              </span>{" "}
              <span className="bg-gradient-to-tr from-blue-800 via-blue-500 to-blue-900 bg-clip-text text-transparent dark:from-blue-600 dark:via-sky-500 dark:to-blue-950">
                Myths
              </span>{" "}
              <span className="text-nowrap bg-gradient-to-tr from-black via-gray-600 to-slate-800 bg-clip-text text-transparent dark:from-slate-900 dark:via-gray-200 dark:to-slate-700 ">
                Meet{" "}
                <span className="bg-gradient-to-tr from-black via-gray-600 to-slate-800 bg-clip-text text-transparent dark:from-slate-900 dark:via-gray-200 dark:to-slate-700 ">
                  the
                </span>{" "}
                <span className="bg-gradient-to-tr from-blue-800 via-blue-500 to-blue-900 bg-clip-text text-transparent dark:from-blue-600 dark:via-sky-500 dark:to-blue-950">
                  Innovation
                </span>
              </span>
            </h1>

            {/* sub desc */}
            <div className="mt-2 w-[80%] text-justify font-medium leading-[22px] text-slate-500 dark:text-slate-400 lg:mt-4 lg:w-2/3 lg:leading-6">
              <p>
                <span className="font-extrabold text-primary underline">
                  ___
                </span>
                Immerse yourself in{" "}
                <span className="font-semibold text-primary">Mythvortex</span>,
                where myth meets cutting-edge web and mobile development,
                crafting unparalleled realms of imagination and adventure.
              </p>
            </div>

            <div className="item-start flex w-[80%] flex-col-reverse gap-2 lg:mt-5 lg:w-fit lg:flex-row lg:items-center lg:gap-5">
              <Link
                href={"/appointment"}
                className="lg:text-md w-fit rounded-sm border-[3px] border-transparent bg-primary px-4 py-2 text-center text-sm font-semibold text-white hover:border-primary hover:bg-transparent hover:text-primary active:scale-90 lg:min-w-[180px]"
              >
                Free Consultation
              </Link>

              <Link
                className="lg:text-md flex w-fit items-center justify-center gap-2 rounded-sm border-primary bg-transparent px-1 py-2 text-left text-sm font-semibold text-primary duration-300 ease-in-out hover:bg-primary hover:text-white active:scale-90 lg:min-w-[180px] lg:border-[3px] lg:px-4 lg:text-center"
                href={"/"}
              >
                View our work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.8"
                  stroke="currentColor"
                  className="size-5 lg:hidden"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </Link>
            </div>

            <div className="relative mt-45 lg:mt-35 lg:bottom-0 ml-auto lg:ml-0 w-[350px] rounded-sm bg-gradient-to-l lg:bg-gradient-to-r lg:dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-800 dark:to-slate-800 from-slate-100 via-slate-50 p-2 text-justify font-semibold border-r-4 dark:border-slate-600 text-slate-500 dark:text-slate-400 text-sm">
            Code provides the ultimate flexibility for your application or
            website.
            <br />
            <p className="text-right text-primary dark:text-blue-400">~ Aryan</p>
          </div>
          </div>

         

          {/* WINDOW */}
          <div className="animate_right  hidden h-full w-full items-end justify-center overflow-visible pl-4 lg:flex lg:w-[800px]">
            <div className="h-[100%] w-full overflow-visible rounded-tl-lg border-2 border-b-0 border-slate-200 bg-slate-200 bg-opacity-30 p-4 pb-0 dark:border-slate-700 dark:bg-blue-800 dark:bg-opacity-20 dark:outline-black md:h-[600px] md:p-10">
              <div className="relative flex h-full w-full flex-col 2xl:-mr-7.5">
                <div className="flex h-full w-full items-center justify-center gap-2">
                  <div className="h-full w-[50%] md:w-[40%]">
                    {/* TAGS */}
                    <div className="flex animate-floatX gap-2">
                      <button className="rounded-full border border-blue-600 bg-blue-600 bg-opacity-10 px-2 py-[0.05rem] text-[0.5rem] font-medium text-blue-600 hover:bg-blue-600 hover:text-white md:py-1 md:text-xs">
                        Development
                      </button>
                      <button className="rounded-full border border-green-600 bg-green-600 bg-opacity-10 px-2 py-[0.05rem] text-[0.5rem] font-medium text-green-600 hover:bg-green-600 hover:text-white md:py-1 md:text-xs">
                        Enhancement
                      </button>
                    </div>

                    {/* LOGIN PANEL */}
                    <Link
                      className="animate-floatYR  overflow-hidden rounded-sm opacity-80 hover:opacity-100"
                      href={"/appointment"}
                    >
                      <Image src={AppointmentImage} alt={"schedule"} />
                      <h3 className="relative bottom-10 flex -rotate-[10deg] justify-center text-center font-semibold text-primary ">
                        Book
                        <span className="h-fit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-6 -rotate-12 text-yellow-600"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
                            />
                          </svg>
                        </span>
                      </h3>
                      <h3 className="relative bottom-10 flex -rotate-[10deg] justify-center text-center font-semibold text-primary">
                        Free Consultation
                      </h3>
                    </Link>

                    {/* Range */}
                    <div className="relative bottom-5 flex items-center justify-between">
                      <Link
                        href={"/"}
                        className="flex w-fit scale-90 animate-floatX items-center justify-center gap-3 rounded-full border-2 border-green-400 bg-green-400 bg-opacity-20 px-4 py-2 opacity-70 hover:opacity-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          className="size-7"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#fff"
                            d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                          ></path>
                          <path
                            fill="#cfd8dc"
                            d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                          ></path>
                          <path
                            fill="#40c351"
                            d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                          ></path>
                          <path
                            fill="#fff"
                            fill-rule="evenodd"
                            d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-xl font-bold text-green-500">
                          Connect
                        </span>
                      </Link>
                      <ThemeToggler />
                    </div>

                    {/* Chat Screen */}
                    <div className="h-full w-full animate-floatYR rounded-lg border bg-white p-2 dark:border-slate-600 dark:bg-black dark:bg-opacity-30 dark:outline-black  md:mt-4 md:p-4">
                      <div className="flex items-center justify-start gap-5 border-b pb-2 dark:border-slate-600  dark:outline-black">
                        <div className="h-10 w-10">
                          <Image
                            priority
                            src={"/images/avatar1.png"}
                            alt={"avatar1"}
                            width={"35"}
                            height={"35"}
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="md:text-medium text-xs font-medium dark:text-white">
                            Anil Singh
                          </p>
                          <p className="text-xs font-normal">
                            Hey! How are you doing?
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start gap-5 border-b py-2 dark:border-slate-600 dark:outline-black">
                        <div className="h-10 w-10">
                          <Image
                            src={"/images/avatar2.png"}
                            alt={"avatar2"}
                            width={"35"}
                            height={"35"}
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="md:text-medium text-xs font-medium dark:text-white">
                            Anjali Mishra
                          </p>
                          <p className="text-xs font-normal">
                            I am good Anil...
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start gap-5 border-b py-2 dark:border-slate-600  dark:outline-black">
                        <div className="h-10 w-10">
                          <Image
                            width={"35"}
                            height={"35"}
                            src={"/images/avatar3.png"}
                            alt={"avatar3"}
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="md:text-medium text-xs font-medium dark:text-white">
                            Nikhil Yadav
                          </p>
                          <p className="text-xs font-normal">
                            Explore the MythVortex
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start gap-5 border-b pb-2 dark:border-slate-600 dark:outline-black">
                        <div className="h-10 w-10">
                          <Image
                            width={"35"}
                            height={"35"}
                            src={"/images/avatar2.png"}
                            alt={"avatar1"}
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="md:text-medium text-xs font-medium dark:text-white">
                            Anil Singh
                          </p>
                          <p className="text-xs font-normal">
                            Yes, It's really great.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex h-[100%] w-[50%] flex-col items-end justify-between gap-5 px-2 md:w-[60%]">
                    <div className="flex w-full justify-between">
                      <Team items={People} />
                      <p className="flex cursor-pointer items-center gap-2 text-2xl font-semibold hover:animate-pulse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                          />
                        </svg>
                        Our Team
                      </p>
                    </div>

                    {/* 4 INDICATORS */}
                    <div className="flex w-full justify-evenly gap-2">
                      <button className="flex w-full animate-floatX items-center justify-center rounded-lg border bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 text-white hover:scale-105 active:scale-90 dark:border-slate-600 dark:shadow-2xl dark:shadow-gray-900 md:py-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          height={"30"}
                          width={"30"}
                          className="scale-50 md:scale-100"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                      </button>

                      <button className="flex w-full animate-floatX items-center justify-center rounded-lg border bg-white hover:scale-105 hover:bg-gradient-to-tl hover:text-primary active:scale-90 dark:border-2 dark:border-slate-600 dark:bg-black dark:bg-opacity-30 dark:outline-black md:py-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          height={"30"}
                          width={"30"}
                          className="scale-50 md:scale-100"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                          />
                        </svg>
                      </button>

                      <button className="flex w-full animate-floatX items-center justify-center rounded-lg border bg-white hover:scale-105 hover:bg-gradient-to-tl hover:text-primary active:scale-90 dark:border-2 dark:border-slate-600 dark:bg-black dark:bg-opacity-30 dark:outline-black md:py-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          height={"30"}
                          width={"30"}
                          className="scale-50 md:scale-100"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                          />
                        </svg>
                      </button>

                      <button className="flex w-full animate-floatX items-center justify-center rounded-lg border bg-white hover:scale-105 hover:bg-gradient-to-tl hover:text-primary active:scale-90 dark:border-2 dark:border-slate-600 dark:bg-black dark:bg-opacity-30 dark:outline-black md:py-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          height={"30"}
                          width={"30"}
                          className="scale-50 md:scale-100"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Player */}
                    <div className="h-fit w-full animate-floatX rounded-xl border bg-white p-2 dark:border-slate-600 dark:bg-black dark:bg-opacity-60">
                      <div className="flex w-full overflow-hidden">
                        <div className="h-10 w-10 min-w-10 rounded-xl bg-slate-100 p-2 dark:bg-slate-700 md:h-16 md:w-20 md:min-w-16">
                          <Image
                            width={"50"}
                            height={"50"}
                            objectFit="true"
                            src={"/images/dance.png"}
                            alt={"dance"}
                          />
                        </div>
                        <div className="flex w-full flex-col items-center justify-center gap-2 overflow-hidden dark:text-slate-300">
                          <div className="flex h-fit w-full items-center justify-evenly gap-1 px-2 md:gap-2 md:px-8">
                            <div className="flex h-full w-2 items-center md:w-10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="currentColor"
                                width={"15"}
                                height={"15"}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                                />
                              </svg>
                            </div>

                            <div className="flex h-full w-2 items-center md:w-10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="currentColor"
                                width={"15"}
                                height={"15"}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.75 19.5 8.25 12l7.5-7.5"
                                />
                              </svg>
                            </div>

                            <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-slate-600 dark:text-white md:h-8 md:w-8">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="currentColor"
                                width={"15"}
                                height={"15"}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                                />
                              </svg>
                            </div>

                            <div className="flex h-full w-2 items-center md:w-10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="currentColor"
                                width={"15"}
                                height={"15"}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </div>

                            <div className="flex h-full w-2 items-center md:w-10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="currentColor"
                                width={"15"}
                                height={"15"}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="hidden w-full px-2 md:block md:px-10 ">
                            <input
                              className="h-1 w-full accent-blue-600 md:h-auto"
                              type="range"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Calender */}
                    <div className="mx-auto max-w-md animate-floatYR rounded-xl border p-2 text-sm shadow-md dark:border-slate-600 dark:bg-black  dark:bg-opacity-60 dark:text-white md:bg-white md:p-2">
                      <div className="calendar-container">
                        <Calendar defaultValue={dayjs().toDate()} />
                      </div>
                    </div>

                    {/* <div className="h-full w-full animate-floatY text-black">
                      <div className="mx-auto max-w-md rounded-xl border p-2 shadow-md dark:border-slate-600 dark:bg-black dark:bg-opacity-60 dark:text-white md:scale-90 md:bg-white md:p-5 md:py-10">
                        <h2 className="mb-2 flex justify-between text-xs font-medium md:text-lg">
                          <span className="text-xs md:pb-2 md:text-xl">
                            Calender
                          </span>
                          <span className="flex items-center justify-center gap-1 text-xs md:text-base">
                            Apr, 2024{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="5"
                              stroke="currentColor"
                              height={"15"}
                              width={"15"}
                              className="text-primary"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </h2>

                        <div className="grid grid-cols-7 gap-2 md:p-3">
                          <div className="col-span-1 text-center text-[0.5rem] font-semibold text-slate-400 md:text-sm">
                            Sun
                          </div>
                          <div className="col-span-1 text-center text-[0.5rem] font-semibold text-slate-400 md:text-sm">
                            Mon
                          </div>
                          <div className="col-span-1 text-center text-[0.5rem] font-semibold text-slate-400 md:text-sm">
                            Tue
                          </div>
                          <div className="col-span-1 text-center text-[0.5rem] font-semibold text-slate-400 md:text-sm">
                            Wed
                          </div>
                          <div className="col-span-1 text-center text-[0.5rem] font-semibold text-slate-400 md:text-sm">
                            Thu
                          </div>
                          <div className="col-span-1 text-center text-[0.5rem] font-semibold text-slate-400 md:text-sm">
                            Fri
                          </div>
                          <div className="col-span-1 text-center text-[0.5rem] font-semibold text-slate-400 md:text-sm">
                            Sat
                          </div>

                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            -
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            1
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            2
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            3
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            4
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            5
                          </div>

                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            6
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            7
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            8
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            9
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            10
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            11
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            12
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            13
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            14
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            15
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            16
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            17
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            18
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            19
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            20
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            21
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            22
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            23
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            24
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            25
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            26
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            27
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            28
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            29
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            30
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            31
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            -
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            -
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            -
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            -
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            -
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            -
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            -
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            -
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            -
                          </div>
                          <div className="col-span-1 py-1 text-center text-[0.3rem] hover:rounded-full hover:bg-blue-600 hover:text-white md:text-sm">
                            -
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
