"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

export default function page() {
  const careerList = [
    {
      type: "Intern",
      opening: "Wordpress Developer",
      Location: "India (Remote)",
      Experience: "Fresher",
    },
    {
      type: "Intern",
      opening: "Web Developer(Next Js)",
      Location: "India (Remote)",
      Experience: "Fresher",
    },
    {
      type: "Intern",
      opening: "Web Developer(React Js)",
      Location: "India (Remote)",
      Experience: "Fresher",
    },
  ];

  return (
    <div className="w-screen overflow-hidden">
      <div className="mx-auto w-full overflow-hidden text-center  min-h-screen flex flex-col justify-center items-center gap-3 md:gap-5">
        <motion.h1
          key="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl"
        >
          We make websites
          <br className="hidden lg:flex" /> that perform.
        </motion.h1>
        <motion.p
          key="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="text-md basiersquare-medium md:text-2xl lg:text-xl"
        >
          Come join us and make the web better.
        </motion.p>
        <motion.a
          href="#openings"
          key="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="inline-flex items-center rounded-lg bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-800 dark:from-slate-700 px-4 py-3 text-white"
        >
          See open positions{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </motion.a>
      </div>
      <div
        id="openings"
        className="flex h-fit min-h-screen w-screen flex-col items-start justify-start overflow-hidden p-5 md:p-10 lg:pt-32"
      >
        <motion.h1
          key="opening-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="text-2xl md:text-3xl lg:text-4xl"
        >
          Current Openings
        </motion.h1>
        <motion.ul
          key="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="  flex h-full w-full grid-cols-5 flex-col gap-10 p-5 lg:p-10 "
        >
          {careerList.map((career, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row w-full items-center justify-start lg:justify-evenly rounded-lg px-5 lg:px-10 py-5 text-base bg-gradient-to-tr from-blue-200 via-white to-blue-50 dark:from-slate-700 text-md md:text-xs lg:text-xl"
            >
              <span className="w-full text-left font-bold md:font-medium lg:font-normal">{career.opening}</span>{" "}
              <span className="w-full text-left">{career.type}</span>{" "}
              <span className="w-full text-left">{career.Location}</span>{" "}
              <span className="w-full text-left">{career.Experience}</span>
              <Link className="w-fit rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white " href={"#how-to-appy"}>
                APPLY
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
      <div
        id="how-to-appy"
        className="flex min-h-screen pb-20 lg:pb-0 h-fit w-screen items-center justify-center"
      >
        <div className="lg:max-w-[50%] rounded-lg border border-slate-200 dark:border-slate-600 flex flex-col lg:flex-row justify-center items-center pt-32 lg:pt-0 p-4 lg:p-10 bg-gradient-to-tr from-blue-200 via-white to-blue-50 dark:from-slate-700">
          <h6 className="p-2 lg:p-10 text-3xl font-extrabold text-center">How <span className="text-xl">to</span> Apply?</h6>
          <div className="p-10 flex flex-col gap-5">
            <p>
              We appreciate your interest in joining our team at MythVortex. To
              apply for one of our open positions, please follow these steps:
            </p>
            <p>
              <span className="font-semibold">Prepare Your CV:</span> Update your resume to highlight your
              skills, experience, and accomplishments relevant to the position
              you are applying for.
            </p>
            <p>
              <span className="font-semibold">Email Application:</span> Send your CV and cover letter as
              attachments to xyz@gmail.com with the subject line: "Application
              for [Position Name] - [Your Full Name]".{" "}
            </p>
            <p>
              <span className="font-semibold">Include Contact Information:</span> Please ensure your
              contact information is clearly mentioned in your CV, and provide a
              reachable phone number in your email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
