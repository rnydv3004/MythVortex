import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-md border border-slate-200 bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-6"
      >
        <div className="flex w-full gap-4 items-center mb-2">
          <div className="relative flex min-h-[50px] min-w-[50px] items-center justify-center rounded-2xl bg-primary text-white p-2">
            {icon}
          </div>
          <h3 className="mb-5 w-fit mt-4 text-base font-semibold text-black dark:text-white xl:text-xl">
            {title}
          </h3>
        </div>
        <p className="text-justify">{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
