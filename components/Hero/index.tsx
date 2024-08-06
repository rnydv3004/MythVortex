"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import "assets/css/MiniCalender.css";

// import AppointmentImage from "../../public/images/";
import { Team } from "../Team";

const People = [
  {
    id: 1,
    name: "Aryan Yadav",
    designation: "Founder",
    image: "/team/aryan.webp",
  },
  {
    id: 2,
    name: "Sarneet Sachar",
    designation: "Founder",
    image: "/team/sarneet.webp",
  },
  {
    id: 3,
    name: "Shiven Yadav",
    designation: "Founder",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  const [sliderValue, setSliderValue] = useState(70);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="container relative -z-0 mx-auto h-screen max-h-[800px] max-w-c-1390 select-none overflow-hidden px-4 pb-0  dark:from-slate-900 dark:via-black dark:to-slate-800 md:px-8 2xl:px-0">
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

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container flex h-full w-full flex-col justify-center px-4 md:px-0 lg:items-center lg:justify-center"
      >
        {/* heading */}
        <h1 className="mb-0 pr-8 pt-20 text-3xl leading-8 text-slate-800 dark:text-slate-300 md:text-6xl font-extrabold lg:mt-0 lg:pt-0 lg:text-[48px] lg:leading-[2.5rem]">
          <span className="bg-gradient-to-tr from-black via-gray-600 to-slate-800 bg-clip-text text-transparent dark:from-slate-300 dark:via-gray-200 dark:to-slate-500 ">
            Where
          </span>{" "}
          <span className="bg-gradient-to-tr from-blue-800 via-blue-500 to-blue-900 bg-clip-text text-transparent dark:from-blue-600 dark:via-sky-500 dark:to-blue-700">
            Myths
          </span>{" "}
          <span className="text-nowrap bg-gradient-to-tr from-black via-gray-600 to-slate-800 bg-clip-text text-transparent dark:from-slate-300 dark:via-gray-200 dark:to-slate-500 ">
            Meet{" "}
            <span className="bg-gradient-to-tr from-black via-gray-600 to-slate-800 bg-clip-text text-transparent dark:from-slate-300 dark:via-gray-200 dark:to-slate-500 ">
              the
            </span>{" "}
            <span className="bg-gradient-to-tr from-blue-800 via-blue-500 to-blue-900 bg-clip-text text-transparent dark:from-blue-600 dark:via-sky-500 dark:to-blue-700">
              Innovation
            </span>
          </span>
        </h1>

        {/* sub desc */}
          <p className="mt-2 md:w-[90%] text-justify md:text-center font-semibold text-base leading-[22px] text-slate-500 dark:text-slate-400 lg:mt-4 lg:w-2/3 lg:leading-6">
            We build powerful websites, applications, and customized tools.
            Harness the power of code to elevate
            <br className="hidden md:block" />
            your business and bring your vision to life with our expert digital
            solutions.
          </p>

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
              strokeWidth="1.8"
              stroke="currentColor"
              className="size-5 lg:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Link>
        </div>

        <div className="mx-auto md:hidden mt-45 w-fit rounded-sm border-r-4 bg-gradient-to-l from-slate-100 h-fit via-slate-50 p-2 text-justify text-sm font-semibold text-slate-500 dark:border-slate-600 dark:from-slate-900 dark:via-slate-800 dark:to-slate-800 dark:text-slate-400 lg:bottom-0 lg:ml-0 lg:mt-35 lg:bg-gradient-to-r lg:dark:bg-gradient-to-r ">
          Code provides the ultimate flexibility for your application or
          website.
          <br />
          <p className="text-right text-primary dark:text-blue-400">~ Mythvortex</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
