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
        className="animate_top z-40 rounded-3xl border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="flex w-full gap-4 items-center mb-5">
          <div className="relative flex min-h-[55px] min-w-[55px] items-center justify-center rounded-2xl bg-primary">
            <Image src={icon} width={36} height={36} alt="title" />
          </div>
          <h3 className="mb-5 w-fit mt-4 text-xl font-semibold text-black dark:text-white xl:text-xl">
            {title}
          </h3>
        </div>
        <p>{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
