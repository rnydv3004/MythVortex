"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggler from "../Header/ThemeToggler";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [sliderValue, setSliderValue] = useState(70);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="relative h-screen select-none overflow-hidden bg-gradient-to-br from-[#f5f7fa] via-blue-100 to-[#c3cfe2] dark:from-slate-900 dark:via-black dark:to-slate-800 pb-0 pt-17">
        <div className=" absolute left-0 top-0 -z-30 h-screen w-screen bg-opacity-20 dark:from-sky-950"></div>
        <Image
          fill
          src="/images/shape/shape-dotted-light-02.svg"
          alt="Dotted"
          className="absolute left-0 top-0 -z-1 dark:hidden"
        />
        <Image
          fill
          src="/images/shape/shape-dotted-dark-02.svg"
          alt="Dotted"
          className="absolute left-0 top-0 -z-1 hidden animate-pulse dark:block"
        />
        <div className="mx-auto h-full flex justify-center items-center max-w-c-1390 px-4 md:px-8 2xl:px-0 ">
          <div className="flex flex-col justify-evenly h-full lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="w-full lg:w-1/2 h-fit">
              <h1 className="mb-5 pr-8 text-3xl font-extrabold text-black dark:text-slate-300 md:text-8xl md:font-extrabold xl:text-7xl ">
                <span className="bg-gradient-to-tr bg-clip-text text-transparent from-black via-slate-600 to-slate-900 dark:from-slate-900 dark:via-gray-200 dark:to-slate-700 ">
                  Where
                </span>{" "}
                <span className="bg-gradient-to-tr from-blue-800 via-blue-500 to-blue-900 dark:from-blue-600 dark:via-sky-500 dark:to-blue-950 bg-clip-text text-transparent">
                  Myths
                </span>{" "}
                <span className="bg-gradient-to-tr bg-clip-text text-transparent from-black via-slate-600 to-slate-900 dark:from-slate-900 dark:via-gray-200 dark:to-slate-700 ">
                  Meet
                </span>{" "}
                <span className="bg-gradient-to-tr bg-clip-text text-transparent from-black via-slate-600 to-slate-900 dark:from-slate-900 dark:via-gray-200 dark:to-slate-700 ">
                  the
                </span>{" "}
                <span className="bg-gradient-to-tr from-blue-800 via-blue-500 to-blue-900 dark:from-blue-600 dark:via-sky-500 dark:to-blue-950 bg-clip-text text-transparent">
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
                  href="/services"
                  className="mb-5 flex w-fit items-center justify-center rounded-full bg-gradient-to-tr from-blue-800 via-blue-500 to-blue-900 dark:from-blue-600 dark:via-sky-500 dark:to-blue-950 px-7.5 py-2.5 text-sm text-white duration-300 ease-in-out hover:bg-blue-800 md:text-regular"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden animate_right h-fit w-full ">
              <div className="relative flex h-full w-full flex-col 2xl:-mr-7.5">
                <div className="flex w-full h-full items-center justify-center gap-2">
                  <div className="flex h-[100%] w-full md:w-[60%] flex-col justify-between gap-4 px-2">
                    {/* 4 INDICATORS */}
                    <div className="flex w-full justify-evenly gap-2">
                      <button className="flex h-fit w-fit  transform animate-floatX items-center justify-center rounded-lg bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 text-white dark:shadow-2xl border-zinc-100 p-2 duration-300 ease-in-out hover:scale-105 active:scale-90 dark:border-slate-600 dark:shadow-gray-900">
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
                      <button className="flex h-fit w-fit transform animate-floatX items-center justify-center rounded-lg bg-white dark:shadow-2xl border-zinc-100 duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-tl p-2 hover:text-white active:scale-90 dark:bg-transparent dark:border-2 dark:border-slate-600 dark:shadow-gray-900">
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
                      <button className="flex h-fit w-fit transform animate-floatX items-center justify-center rounded-lg bg-white dark:shadow-2xl border-zinc-100 duration-300 ease-in-out hover:scale-105 dark:bg-transparent p-2 dark:border-2 hover:bg-gradient-to-tl hover:text-white active:scale-90 dark:border-slate-600 dark:shadow-gray-900">
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
                      <button className="flex h-fit w-fit transform animate-floatX items-center justify-center rounded-lg bg-white dark:bg-transparent dark:border-2 p-2 dark:shadow-2xl border-zinc-100 duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-tl hover:text-white active:scale-90 dark:border-slate-600 dark:shadow-gray-900">
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
                      <div className="flex w-[90%] mx-auto animate-floatX gap-8 rounded-full border-2 px-8 py-2 bg-white dark:shadow-2xl border-zinc-100 duration-300 ease-in-out hover:scale-105 dark:border-slate-600 dark:bg-slate-400 dark:bg-opacity-10 dark:bg-transparent dark:border-2 dark:shadow-gray-900">
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
                      <button className="w-fit animate-floatX self-center rounded-full bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 px-4 py-2  font-light text-white dark:shadow-2xl shadow-slate-600 duration-300 ease-in-out hover:scale-105 active:scale-95 text-xs">
                        Button
                      </button>
                      <button className="w-fit animate-floatY self-center rounded-lg bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 px-4 py-2 text-xs font-light text-white dark:shadow-2xl shadow-slate-600 duration-300 ease-in-out hover:scale-105 active:scale-95">
                        Button
                      </button>
                      <button className="w-fit animate-floatX self-center rounded-sm bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 px-4 py-2 text-xs font-light text-white dark:shadow-2xl shadow-slate-600 duration-300 ease-in-out hover:scale-105 active:scale-95">
                        Button
                      </button>
                    </div>
                    <div className="flex w-[90%] mx-auto items-center min-h-[50px] gap-2 animate-floatX rounded-full border-2 bg-white dark:shadow-2xl shadow-slate-600 outline-none duration-300 ease-in-out  hover:scale-105 dark:border-slate-600 dark:bg-slate-400 dark:bg-opacity-10 dark:text-white dark:shadow-gray-900 dark:bg-transparent dark:border-2">
                      <input
                        placeholder="Type Here..."
                        spellCheck={false}
                        type="text"
                        className="w-full px-6 bg-transparent outline-none text-base font-light "
                      />
                      <button
                        className="bg-gray-2 h-[40px] min-w-[40px] dark:bg-dark-bg hover:dar:text-white mr-1.5 flex cursor-pointer items-center justify-center rounded-full p-1 text-white dark:shadow-2xl shadow-slate-600 duration-300 ease-in-out hover:scale-105
                      bg-blue-700 dark:bg-blue-700 
                      hover:text-white dark:text-white dark:shadow-gray-900 hover:dark:bg-blue-700 lg:static"
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

            <div className="hidden md:block animate_right h-fit w-full lg:w-1/2">
              <div className="relative flex h-full w-full flex-col 2xl:-mr-7.5">
                <div className="flex w-full h-full items-center justify-center gap-2">
                  {/* LOGIN PANEL */}
                  <div className=" md:flex h-full w-[40%] transform  animate-floatY flex-col gap-6 rounded-3xl border-2 p-6 pt-8 dark:shadow-2xl dark:dark:shadow-2xl shadow-zinc-300 backdrop-filter duration-300 ease-in-out border-zinc-100 hover:scale-105 bg-white  dark:border-slate-600 dark:bg-transparent dark:shadow-gray-900">
                    <p className="text-lg font-medium dark:text-white">Login</p>
                    <div className="flex w-full items-center justify-between">
                      <input
                        placeholder="user@gmail.com"
                        type="text"
                        className="dark:text-white w-[80%] h-full border-b-2 border-slate-500 bg-transparent text-sm font-light outline-none"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        height={"22"}
                        width={"22"}
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
                        className="dar:text-white w-[80%] border-b-2 border-slate-500 bg-transparent text-sm font-light outline-none"
                        placeholder="**************"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        height={"22"}
                        width={"22"}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    </div>
                    <p className="cursor-pointer  text-xs font-light hover:text-blue-700">
                      Forget Password?
                    </p>
                    <button className="w-[60%] self-center rounded-full bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 px-4 py-3 text-sm font-light text-white outline-none active:scale-95">
                      Log in
                    </button>
                  </div>
                  <div className="flex h-[100%] w-full md:w-[60%] flex-col justify-between gap-7 px-2">
                    {/* 4 INDICATORS */}
                    <div className="flex w-full justify-evenly gap-2">
                      <button className="flex  w-full transform animate-floatX items-center justify-center rounded-lg bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 py-4 text-white dark:shadow-2xl border-zinc-100 duration-300 ease-in-out hover:scale-105 active:scale-90 dark:border-slate-600 dark:shadow-gray-900">
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
                      <button className="flex w-full transform animate-floatX items-center justify-center rounded-lg bg-white py-4 dark:shadow-2xl border-zinc-100 duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-tl hover:text-white active:scale-90 dark:bg-transparent dark:border-2 dark:border-slate-600 dark:shadow-gray-900">
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
                      <button className="flex w-full transform animate-floatX items-center justify-center rounded-lg bg-white py-4 dark:shadow-2xl border-zinc-100 duration-300 ease-in-out hover:scale-105 dark:bg-transparent dark:border-2 hover:bg-gradient-to-tl hover:text-white active:scale-90 dark:border-slate-600 dark:shadow-gray-900">
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
                      <button className="flex w-full transform animate-floatX items-center justify-center rounded-lg bg-white dark:bg-transparent dark:border-2 py-4 dark:shadow-2xl border-zinc-100 duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-tl hover:text-white active:scale-90 dark:border-slate-600 dark:shadow-gray-900">
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
                      <div className="flex w-full animate-floatX gap-8 rounded-full border-2 px-8 pb-[17px] pt-4 bg-white dark:shadow-2xl border-zinc-100 duration-300 ease-in-out hover:scale-105 dark:border-slate-600 dark:bg-slate-400 dark:bg-opacity-10 dark:bg-transparent dark:border-2 dark:shadow-gray-900">
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
                    <div className="flex w-full justify-between">
                      <ThemeToggler />
                      <button className="w-fit animate-floatX self-center rounded-full bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 px-4 py-2 text-base font-light text-white dark:shadow-2xl shadow-slate-600 duration-300 ease-in-out hover:scale-105 active:scale-95">
                        Button
                      </button>
                      <button className="w-fit animate-floatY self-center rounded-lg bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 px-4 py-2 text-base font-light text-white dark:shadow-2xl shadow-slate-600 duration-300 ease-in-out hover:scale-105 active:scale-95">
                        Button
                      </button>
                      <button className="w-fit animate-floatX self-center rounded-sm bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500 px-4 py-2 text-base font-light text-white dark:shadow-2xl shadow-slate-600 duration-300 ease-in-out hover:scale-105 active:scale-95">
                        Button
                      </button>
                    </div>
                    <div className="flex items-center min-h-[65px] gap-2 animate-floatX rounded-full border-2 bg-white dark:shadow-2xl shadow-slate-600 outline-none duration-300 ease-in-out  hover:scale-105 dark:border-slate-600 dark:bg-slate-400 dark:bg-opacity-10 dark:text-white dark:shadow-gray-900 dark:bg-transparent dark:border-2">
                      <input
                        placeholder="Type Here..."
                        spellCheck={false}
                        type="text"
                        className="w-full px-6 bg-transparent outline-none text-base font-light "
                      />
                      <button
                        className="bg-gray-2 h-[50px] min-w-[50px] dark:bg-dark-bg hover:dar:text-white mr-1.5 flex cursor-pointer items-center justify-center rounded-full p-1 text-white dark:shadow-2xl shadow-slate-600 duration-300 ease-in-out hover:scale-105
                      bg-blue-700 dark:bg-blue-700 
                      hover:text-white dark:text-white dark:shadow-gray-900 hover:dark:bg-blue-700 lg:static"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
