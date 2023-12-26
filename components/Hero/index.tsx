"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="relative select-none overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className=" absolute left-0 top-0 -z-30 h-screen w-screen bg-opacity-20 bg-gradient-to-t from-blue-300 via-transparent to-transparent dark:from-sky-950"></div>
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
          className="absolute left-0 top-0 -z-1 hidden dark:block"
        />
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <p className="mb-4.5 text-base font-semibold text-black dark:text-white">
                🔥 Get{" "}
                <span className="text-lg text-green-600 dark:text-green-400">
                  FREE
                </span>{" "}
                Consultation{" "}
                <Link
                  className="relative rounded-full bg-gradient-to-tr from-amber-400 via-amber-600 to-red-600 px-2 py-1 text-sm text-white"
                  href={""}
                >
                  Coupon
                  <Image
                    src="/images/shape/shape-03.svg"
                    alt="shape"
                    width={21.64}
                    height={21.66}
                    className="absolute -right-1 -top-4 z-1 animate-pulse"
                  />
                </Link>{" "}
                worth 199 INR
              </p>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Your Trusted Partner in this {"   "}
                <span className="text-blue-700 dark:text-blue-500 ">
                  Digital
                </span>
                {"   "}Age
              </h1>
              <p>
                Your trusted partner for premium websites and business tools.
                Whether crafting a stunning website from scratch or transforming
                your existing one into a premium masterpiece, we're here to
                elevate your online presence and empower your business success
              </p>

              <div className="mt-5">
                {/* <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </div>
                </form> */}

                <Link
                  href="https://nextjstemplates.com/templates/solid"
                  className="mb-5 flex w-fit items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-blue-800"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
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
