"use client";
import React from "react";
import TechTeam from "../../public/images/techTeam.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function index() {
  return (
    <section className="w-screen select-none bg-white">
      <div className="container mx-auto bg-gradient-to-t from-slate-300 via-white to-slate-50 px-8 py-14 dark:from-slate-900 dark:via-black dark:to-slate-800 lg:px-20">
        <motion.h2
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
          className="w-full max-w-[340px] text-left text-2xl font-bold text-primary dark:text-white"
        >
          Who We Are
        </motion.h2>
        <motion.p
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
          className="mt-1 text-justify text-sm font-semibold text-slate-500 dark:text-slate-400 lg:text-base"
        >
          Above all, we are not merely business professionals; we are a
          passionate team of developers. We excel in designing applications,
          websites, and custom tools to meet your unique requirements. Our
          foremost priority is customer satisfaction, and we pride ourselves on
          delivering honest and reliable services without making false promises.
        </motion.p>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 20, // Start position off-screen below
            },
            visible: {
              opacity: 1,
              y: 0, // End position at the original position
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="col-span-2 mx-auto mt-24 flex-col items-center justify-center gap-2 lg:col-span-1 lg:mt-8 lg:flex lg:w-[50%] lg:pt-10"
        >
          <Image
            src={TechTeam}
            alt={"services"}
            className="h-fit w-full  lg:max-h-[600px] lg:w-fit"
          />
        </motion.div>
      </div>
    </section>
  );
}
