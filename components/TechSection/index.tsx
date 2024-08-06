import React from "react";
import TechImage from "../../public/images/tech.png";
import TechEvolve from "../../public/images/techevolve.png";
import Image from "next/image";

export default function index() {
  return (
    <section className="w-screen bg-white select-none">
      <div className="container mx-auto grid grid-cols-2 bg-gradient-to-tr from-slate-300 via-white to-slate-50 px-8 py-14 lg:px-20">
        <div className="col-span-2 flex flex-col lg:gap-10 lg:col-span-1 lg:justify-end">
          <div>
            <h2 className="w-full max-w-[340px] text-left text-2xl font-bold text-primary">
              Technologies We Use
            </h2>
            <p className="mt-1 text-base font-semibold text-slate-700 lg:max-w-[600px] text-justify">
            Technology is evolving day by day, and to meet the demands of the current market and industry standards, we continuously adopt and integrate the latest technologies. Our commitment to staying updated ensures that both our team and our services evolve with the times.
            </p>
          </div>
          <Image
            src={TechEvolve}
            alt={"services"}
            className=" h-fit w-full lg:right-0 lg:max-h-[400px] lg:w-fit"
          />
        </div>
        <div className="col-span-2 flex-col items-center justify-center gap-2 lg:col-span-1 hidden lg:flex">
          <Image
            src={TechImage}
            alt={"services"}
            className="pl-10 h-fit w-full lg:pl-20 lg:max-h-[600px] lg:w-fit"
          />
        </div>
      </div>
    </section>
  );
}
