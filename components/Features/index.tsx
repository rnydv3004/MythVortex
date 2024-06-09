"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section
        id="features"
        className="border-4 border-x-0 border-y-stroke bg-alabaster py-20 dark:border-y-strokedark dark:bg-black lg:py-15"
      >
        <div className="mx-auto  max-w-c-1315 px-4 md:px-8 xl:px-0">
          
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Explore Standout Services",
              subtitle: "",
              description: ``,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
          
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
