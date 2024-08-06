import React from "react";
import TechTeam from "../../public/images/techTeam.png";
import Image from "next/image";

export default function index() {
  return (
    <section className="w-screen select-none bg-white">
      <div className="container mx-auto bg-gradient-to-t from-slate-300 via-white to-slate-50 px-8 py-14 lg:px-20">
        <h2 className="w-full max-w-[340px] text-left text-2xl font-bold text-primary">
          Who We Are
        </h2>
        <p className="mt-1 text-justify text-sm lg:text-base font-semibold text-slate-600">
          Above all, we are not merely business professionals; we are a
          passionate team of developers. We excel in designing applications,
          websites, and custom tools to meet your unique requirements. Our
          foremost priority is customer satisfaction, and we pride ourselves on
          delivering honest and reliable services without making false promises.
        </p>
        <div className="col-span-2 flex-col lg:w-[50%] mx-auto items-center justify-center gap-2 lg:col-span-1 lg:flex mt-24 lg:mt-8 lg:pt-10">
          <Image
            src={TechTeam}
            alt={"services"}
            className="h-fit w-full  lg:max-h-[600px] lg:w-fit"
          />
        </div>
      </div>
    </section>
  );
}
