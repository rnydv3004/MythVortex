"use client";
import React from "react";
import TechStack from "../../public/images/techStack.png";
import TechEvolve from "../../public/images/techevolve.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function index() {
  return (
    <section className="w-screen select-none bg-white">
      <div className="container mx-auto grid grid-cols-2 bg-gradient-to-bl from-slate-300 via-white to-slate-50 px-8 pt-14 dark:from-slate-900 dark:via-black dark:to-slate-800 lg:px-20">
        <div className="col-span-2 flex flex-col lg:col-span-1 lg:justify-start lg:gap-10">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20, // Start position off-screen to the left
              },
              visible: {
                opacity: 1,
                x: 0, // End position at the original position
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="w-full max-w-[340px] text-left text-2xl font-bold text-primary dark:text-white">
              Technologies We Use
            </h2>
            <p className="mt-1 text-justify text-sm font-semibold text-slate-700 dark:text-slate-300 lg:max-w-[600px] lg:text-base">
              Technology is evolving day by day, and to meet the demands of the
              current market and industry standards, we continuously adopt and
              integrate the latest technologies. Our commitment to staying
              updated ensures that both our team and our services evolve with
              the times.
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0 }, // Define the hidden state
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  delayChildren: 0.3,
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={TechStack}
              alt={"services"}
              className=" ml-auto hidden h-fit w-full lg:right-0 lg:block lg:max-h-[400px] lg:w-fit"
            />
          </motion.div>
        </div>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: 20, // Start position off-screen to the right
            },
            visible: {
              opacity: 1,
              x: 0, // End position at the original position
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="col-span-2 flex-col items-center justify-center gap-2 lg:col-span-1 lg:flex"
        >
          <Image
            src={TechEvolve}
            alt={"services"}
            className="mt-10 h-fit w-full pl-10 lg:max-h-[450px] lg:w-fit lg:pl-20"
          />
        </motion.div>
      </div>
    </section>
  );
}
