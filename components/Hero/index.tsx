"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggler from "../Header/ThemeToggler";
import toast from "react-hot-toast";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [sliderValue, setSliderValue] = useState(70);
  const [dummyMsg, setDummyMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="relative -z-0 h-screen select-none overflow-hidden bg-transparent pb-0 pt-17 dark:from-slate-900 dark:via-black dark:to-slate-800">
        <div className=" absolute left-0 top-0 -z-10 h-screen w-screen bg-opacity-20 dark:from-sky-950"></div>
        <Image
          fill
          src="/images/shape/shape-dotted-light-02.svg"
          alt="Dotted"
          className="absolute left-0 top-0 -z-1 dark:hidden"
          priority
        />
        <Image
          fill
          priority
          src="/images/shape/shape-dotted-dark-02.svg"
          alt="Dotted"
          className="absolute left-0 top-0 -z-1 hidden animate-pulse dark:block"
        />
        <div className="mx-auto flex h-full items-center justify-center  px-4 md:px-8 2xl:px-0">
          <div className="flex h-full flex-col justify-evenly lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="flex h-full w-full flex-col justify-center lg:w-1/2 lg:pl-20">
              <h1 className="mb-5 pr-8 text-3xl font-extrabold text-black dark:text-slate-300 md:text-6xl md:font-extrabold xl:text-6xl ">
                <span className="bg-gradient-to-tr from-black via-slate-700 to-slate-900 bg-clip-text text-transparent dark:from-slate-900 dark:via-gray-200 dark:to-slate-700 ">
                  Where
                </span>{" "}
                <span className="bg-gradient-to-tr from-blue-800 via-blue-500 to-blue-900 bg-clip-text text-transparent dark:from-blue-600 dark:via-sky-500 dark:to-blue-950">
                  Myths
                </span>{" "}
                <span className="bg-gradient-to-tr from-black via-slate-700 to-slate-900 bg-clip-text text-transparent dark:from-slate-900 dark:via-gray-200 dark:to-slate-700 ">
                  Meet
                </span>{" "}
                <span className="bg-gradient-to-tr from-black via-slate-700 to-slate-900 bg-clip-text text-transparent dark:from-slate-900 dark:via-gray-200 dark:to-slate-700 ">
                  the
                </span>{" "}
                <span className="bg-gradient-to-tr from-blue-800 via-blue-500 to-blue-900 bg-clip-text text-transparent dark:from-blue-600 dark:via-sky-500 dark:to-blue-950">
                  Innovation
                </span>
              </h1>
              <p className="text-sm md:text-2xl lg:text-metatitle3">
                Embark on a journey at MythVortex, where mythical narratives
                seamlessly intertwine with innovative wonders, crafting a realm
                of imagination and discovery
              </p>
              <div className="mt-5">
                <Link
                  href="#service"
                  className="mb-5 flex w-fit items-center justify-center rounded-full bg-gradient-to-tr from-blue-800 via-blue-500 to-blue-900 px-7.5 py-2.5 text-sm text-white duration-300 ease-in-out hover:bg-blue-800 dark:from-blue-600 dark:via-sky-500 dark:to-blue-950 md:text-regular"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile */}
            <div className="animate_right h-fit w-full pb-2 md:hidden ">
              <div className="relative flex h-full w-full flex-col 2xl:-mr-7.5">
                <div className="flex h-full w-full items-center justify-center gap-2">
                  <div className="flex h-[100%] w-full flex-col justify-between gap-4 px-2 md:w-[60%]">
                    {/* 4 INDICATORS */}
                    <div className="flex w-full justify-evenly gap-2">
                      <button className="flex h-fit w-fit  transform animate-floatX items-center justify-center rounded-lg border-zinc-100 bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 p-2 text-white duration-300 ease-in-out hover:scale-105 active:scale-90 dark:border-slate-600 dark:shadow-2xl dark:shadow-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          height={"30"}
                          width={"30"}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                      </button>
                      <button className="flex h-fit w-fit transform animate-floatX items-center justify-center rounded-lg border-zinc-100 bg-white p-2 duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-tl hover:text-white active:scale-90 dark:border-2 dark:border-slate-600 dark:bg-transparent dark:shadow-2xl dark:shadow-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          height={"30"}
                          width={"30"}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                          />
                        </svg>
                      </button>
                      <button className="flex h-fit w-fit transform animate-floatX items-center justify-center rounded-lg border-zinc-100 bg-white p-2 duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-tl hover:text-white active:scale-90 dark:border-2 dark:border-slate-600 dark:bg-transparent dark:shadow-2xl dark:shadow-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          height={"30"}
                          width={"30"}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                          />
                        </svg>
                      </button>
                      <button className="flex h-fit w-fit transform animate-floatX items-center justify-center rounded-lg border-zinc-100 bg-white p-2 duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-tl hover:text-white active:scale-90 dark:border-2 dark:border-slate-600 dark:bg-transparent dark:shadow-2xl dark:shadow-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          height={"30"}
                          width={"30"}
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
                    {/* SLIDER */}
                    <div className="w-full">
                      <div className="mx-auto flex w-[90%] animate-floatX gap-8 rounded-full border-2 border-zinc-100 bg-white px-8 py-2 duration-300 ease-in-out hover:scale-105 dark:border-2 dark:border-slate-600 dark:bg-slate-400 dark:bg-transparent dark:bg-opacity-10 dark:shadow-2xl dark:shadow-gray-900">
                        <input
                          type="range"
                          id="slider"
                          name="slider"
                          min="0"
                          max="100"
                          step="1"
                          value={sliderValue}
                          onChange={(e) => {
                            setSliderValue(parseInt(e.target.value));
                          }}
                          className="w-full accent-blue-600"
                        />
                        <p className="w-15 font-semibold text-blue-600 dark:text-white">
                          {sliderValue}%
                        </p>
                      </div>
                    </div>

                    {/*  */}
                    <div className="flex w-[90%] justify-between gap-2">
                      <ThemeToggler />
                      <button className="w-fit animate-floatX self-center rounded-full bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 px-4 py-2  text-xs font-light text-white shadow-slate-600 duration-300 ease-in-out hover:scale-105 active:scale-95 dark:shadow-2xl">
                        Button
                      </button>
                      <button className="w-fit animate-floatY self-center rounded-lg bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 px-4 py-2 text-xs font-light text-white shadow-slate-600 duration-300 ease-in-out hover:scale-105 active:scale-95 dark:shadow-2xl">
                        Button
                      </button>
                      <button className="w-fit animate-floatX self-center rounded-sm bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 px-4 py-2 text-xs font-light text-white shadow-slate-600 duration-300 ease-in-out hover:scale-105 active:scale-95 dark:shadow-2xl">
                        Button
                      </button>
                    </div>
                    <div className="mx-auto flex min-h-[50px] w-[90%] animate-floatX items-center gap-2 rounded-full border-2 bg-white shadow-slate-600 outline-none duration-300 ease-in-out hover:scale-105  dark:border-2 dark:border-slate-600 dark:bg-slate-400 dark:bg-transparent dark:bg-opacity-10 dark:text-white dark:shadow-2xl dark:shadow-gray-900">
                      <input
                        placeholder="Type Here..."
                        spellCheck={false}
                        type="text"
                        className="w-full bg-transparent px-6 text-base font-light outline-none "
                        value={dummyMsg}
                        onChange={(e) => {
                          setDummyMsg(e.target.value);
                        }}
                      />
                      <button
                        onClick={() => {
                          if (dummyMsg === "") {
                            toast.error("Type a message");
                          } else {
                            toast.success(dummyMsg, {
                              position: "bottom-center",
                            });
                            setDummyMsg("");
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            if (dummyMsg === "") {
                              toast.error("Type a message");
                            } else {
                              toast.success(dummyMsg, {
                                position: "bottom-center",
                              });
                              setDummyMsg("");
                            }
                          }
                        }}
                        className="bg-gray-2 dark:bg-dark-bg hover:dar:text-white mr-1.5 flex h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-full bg-blue-700 p-1 text-white shadow-slate-600 duration-300 ease-in-out hover:scale-105
                      hover:text-white dark:bg-blue-700 
                      dark:text-white dark:shadow-2xl dark:shadow-gray-900 hover:dark:bg-blue-700 lg:static"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          height={"27"}
                          width={"22"}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate_right hidden h-full w-full items-end justify-center md:flex lg:w-[70%]">
              <div className="h-[90%] w-full overflow-hidden rounded-tl-lg border bg-slate-100 bg-opacity-30 p-10 pb-0 dark:border-slate-700 dark:bg-blue-800 dark:bg-opacity-20 dark:outline-black">
                <div className="relative flex h-full w-full flex-col 2xl:-mr-7.5">
                  <div className="flex h-full w-full items-center justify-center gap-2">
                    <div className="h-full w-[40%]">
                      {/* TAGS */}
                      <div className="flex animate-floatX gap-2">
                        <button className="rounded-full border border-blue-600 bg-blue-600 bg-opacity-10 px-2 py-1 text-xs font-medium text-blue-600">
                          Development
                        </button>
                        <button className="rounded-full border border-red-600 bg-red-600 bg-opacity-10 px-2 py-1 text-xs font-medium text-red-600">
                          SEO
                        </button>
                        <button className="rounded-full border border-green-600 bg-green-600 bg-opacity-10 px-2 py-1 text-xs font-medium text-green-600">
                          Enhancement
                        </button>
                      </div>

                      {/* LOGIN PANEL */}
                      <div className="h-fit w-fit transform animate-floatY flex-col gap-4 rounded-lg border border-zinc-300 bg-primary p-6 pt-8 text-white shadow-zinc-300 backdrop-filter duration-300 ease-in-out hover:scale-105 dark:border-slate-900 dark:bg-transparent dark:bg-gradient-to-tr dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 dark:dark:shadow-2xl dark:shadow-2xl dark:shadow-gray-900 dark:outline-black md:flex">
                        <p className="text-xs font-medium text-white">Login</p>
                        <div className="flex w-full items-center justify-between">
                          <input
                            placeholder="user@gmail.com"
                            type="text"
                            className="h-full w-[80%] border-b-2 border-slate-300 bg-transparent text-xs font-light text-white placeholder-white outline-none dark:border-slate-500 dark:text-white"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            height={"18"}
                            width={"18"}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                          </svg>
                        </div>
                        <div className="flex w-full items-center justify-between">
                          <input
                            type="password"
                            className="dar:text-white w-[80%] border-b-2 border-slate-300 bg-transparent text-xs font-light placeholder-white outline-none dark:border-slate-500"
                            placeholder="**************"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            height={"18"}
                            width={"18"}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                            />
                          </svg>
                        </div>
                        <p className="cursor-pointer text-xs font-light hover:text-blue-700">
                          Forget Password?
                        </p>
                        <button className="w-[60%] self-center rounded-full bg-gradient-to-tl from-white via-slate-200  to-white px-2 py-2 text-xs font-medium text-slate-900 outline-none active:scale-95">
                          Log in
                        </button>
                      </div>

                      {/* Range */}
                      <div className="mt-5 w-full scale-90">
                        <div className="flex w-full animate-floatX gap-8 rounded-full border bg-white px-8 pb-[17px] pt-4 duration-300 ease-in-out hover:scale-105 dark:border-slate-600 dark:bg-black dark:bg-opacity-30 dark:outline-black">
                          <input
                            type="range"
                            id="slider"
                            name="slider"
                            min="0"
                            max="100"
                            step="1"
                            value={sliderValue}
                            onChange={(e) => {
                              setSliderValue(parseInt(e.target.value));
                            }}
                            className="w-full accent-blue-600"
                          />
                          <p className="w-15 font-semibold text-blue-600 dark:text-white">
                            {sliderValue}%
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 h-full w-full animate-floatYR rounded-lg border bg-white p-4 dark:border-slate-600 dark:bg-black  dark:bg-opacity-30 dark:outline-black">
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
                            <p className="text-medium font-medium dark:text-white">
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
                            <p className="text-medium font-medium dark:text-white">
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
                            <p className="text-medium font-medium dark:text-white">
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
                            <p className="text-medium font-medium dark:text-white">
                              Anil Singh
                            </p>
                            <p className="text-xs font-normal">
                              Yes, It's really great.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex h-[100%] w-full flex-col items-end justify-between gap-5 px-2 md:w-[60%]">
                      {/* 4 INDICATORS */}
                      <div className="flex w-full justify-evenly gap-2">
                        <button className="flex w-full transform animate-floatX items-center justify-center rounded-lg border bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 py-4 text-white duration-300 ease-in-out hover:scale-105 active:scale-90 dark:border-slate-600 dark:shadow-2xl dark:shadow-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            height={"30"}
                            width={"30"}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                          </svg>
                        </button>
                        <button className="flex w-full transform animate-floatX items-center justify-center rounded-lg border bg-white py-4 duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-tl hover:text-primary active:scale-90 dark:border-2 dark:border-slate-600 dark:bg-black dark:bg-opacity-30 dark:outline-black">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            height={"30"}
                            width={"30"}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                            />
                          </svg>
                        </button>
                        <button className="flex w-full transform animate-floatX items-center justify-center rounded-lg border bg-white py-4 duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-tl hover:text-primary active:scale-90 dark:border-2 dark:border-slate-600 dark:bg-black dark:bg-opacity-30 dark:outline-black">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            height={"30"}
                            width={"30"}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                            />
                          </svg>
                        </button>
                        <button className="flex w-full transform animate-floatX items-center justify-center rounded-lg border bg-white py-4 duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-tl hover:text-primary active:scale-90 dark:border-2 dark:border-slate-600 dark:bg-black dark:bg-opacity-30 dark:outline-black">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            height={"30"}
                            width={"30"}
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
                        <div className="flex w-full">
                          <div className="h-16 w-20 min-w-16 rounded-xl bg-slate-100 p-2 dark:bg-slate-700">
                            <Image
                              width={"50"}
                              height={"50"}
                              src={"/images/dance.png"}
                              alt={"dance"}
                            />
                          </div>
                          <div className="flex w-full flex-col items-center justify-center gap-1 dark:text-slate-300">
                            <div className="flex h-fit w-full items-center justify-evenly gap-2 px-8">
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
                              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-slate-600 dark:text-white">
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
                            <div className="w-full px-10">
                              <input
                                className="w-full accent-blue-600"
                                type="range"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/*  */}
                      <div className="flex w-full justify-between">
                        <ThemeToggler />
                        <button className="w-fit self-center rounded-full bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 px-4 py-2 text-base font-light text-white shadow-slate-600 duration-300 ease-in-out hover:scale-105 active:scale-95 dark:shadow-2xl">
                          Button
                        </button>
                        <button className="w-fit self-center rounded-lg bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 px-4 py-2 text-base font-light text-white shadow-slate-600 duration-300 ease-in-out hover:scale-105 active:scale-95 dark:shadow-2xl">
                          Button
                        </button>
                        <button className="w-fit self-center rounded-sm bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 px-4 py-2 text-base font-light text-white shadow-slate-600 duration-300 ease-in-out hover:scale-105 active:scale-95 dark:shadow-2xl">
                          Button
                        </button>
                      </div>

                      <div className="h-full w-full animate-floatY text-black">
                        <div className="mx-auto max-w-md scale-90 rounded-xl border bg-white p-5 py-10 shadow-md dark:border-slate-600 dark:bg-black dark:bg-opacity-60 dark:text-white">
                          <h1 className="mb-2 flex justify-between text-lg font-medium">
                            <span className="pb-2 text-xl">Calender</span>
                            <span className="flex items-center justify-center gap-1 text-base">
                              Jan, 2024{" "}
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
                          </h1>

                          <div className="grid grid-cols-7 gap-2 p-3">
                            <div className="col-span-1 text-center text-sm font-semibold text-slate-400">
                              Sun
                            </div>
                            <div className="col-span-1 text-center text-sm font-semibold text-slate-400">
                              Mon
                            </div>
                            <div className="col-span-1 text-center text-sm font-semibold text-slate-400">
                              Tue
                            </div>
                            <div className="col-span-1 text-center text-sm font-semibold text-slate-400">
                              Wed
                            </div>
                            <div className="col-span-1 text-center text-sm font-semibold text-slate-400">
                              Thu
                            </div>
                            <div className="col-span-1 text-center text-sm font-semibold text-slate-400">
                              Fri
                            </div>
                            <div className="col-span-1 text-center text-sm font-semibold text-slate-400">
                              Sat
                            </div>

                            <div className="col-span-1 text-center text-sm">
                              -
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              1
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              2
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              3
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              4
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              5
                            </div>

                            <div className="col-span-1 text-center text-sm">
                              6
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              7
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              8
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              9
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              10
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              11
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              12
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              13
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              14
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              15
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              16
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              17
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              18
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              19
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              20
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              21
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              22
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              23
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              24
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              25
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              26
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              27
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              28
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              29
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              30
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              31
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              -
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              -
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              -
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              -
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              -
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              -
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              -
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              -
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              -
                            </div>
                            <div className="col-span-1 text-center text-sm">
                              -
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
