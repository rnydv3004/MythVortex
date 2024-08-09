"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "../../public/images/logo/logo-large.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="z-50 border-t-2 border-stroke bg-white dark:border-blackho dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-10 lg:py-25">
            <div className="flex flex-wrap gap-8 px-5 md:flex-nowrap lg:justify-around lg:gap-0">
              <div className="flex w-full flex-wrap justify-between gap-8 md:flex-row md:flex-nowrap md:justify-around md:gap-0">
                {/* LOGO AND ADDRESS */}
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="animate_top w-full md:mr-25"
                >
                  <Link href="/">
                    <Image
                      src={Logo}
                      className="h-7 w-fit"
                      alt={"Mythvortex"}
                    />
                  </Link>

                  <p className="mb-0 mt-0 pl-1 text-xs font-semibold text-slate-400 dark:text-slate-200">
                    Where Myth Meet Innovation
                  </p>
                  <p className="mb-0 mt-5 font-bold">Address:</p>
                  <p className="mb-0 mt-2 text-xs font-medium">
                    E-25, Street no 5, Sector 44, Noida, India
                    <br />
                    Ph: +91 7678319417, +91 8076054891, +91 8505954844
                  </p>
                  <p className="mb-0 mt-5 text-xs font-medium">
                    180 John St, Toronto, ON M5T1X5
                    <br />
                    Ph: +16475007503
                  </p>
                  <p className="mb-0 mt-5 text-xs font-medium">
                    Email: contact@myhtvortex.com
                  </p>

                  <ul className="mt-2 flex items-center gap-5">
                    {/* Facebook */}
                    <li>
                      <Link
                        href="https://www.facebook.com/people/MythVortex/61555751405440/"
                        target="_blank"
                        aria-label="social icon"
                      >
                        <svg
                          className="fill-[#878787] hover:fill-primary"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1499)">
                            <path
                              d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1499">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>

                    {/* Twitter */}
                    <li>
                      <Link
                        href="https://twitter.com/MythVortex_"
                        target="_blank"
                        aria-label="social icon"
                      >
                        <svg
                          className="fill-[#878787] hover:fill-primary"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1502)">
                            <path
                              d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1502">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>

                    {/* Linkedin */}
                    {/* <li>
                  <Link href="#" target="_blank" aria-label="social icon">
                    <svg
                      className="fill-[#383838] transition-all duration-300 hover:fill-primary dark:fill-[#878787]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path
                          d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li> */}

                    {/* Instagram */}
                    <li>
                      <Link
                        href="https://www.instagram.com/mvx_tech/"
                        target="_blank"
                        aria-label="social icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="20"
                          height="20"
                          className="fill-[#878787] hover:fill-primary"
                          viewBox="0 0 50 50"
                        >
                          <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                        </svg>
                      </Link>
                    </li>

                    {/* QUORA */}
                    <li>
                      <Link
                        href="https://qr.ae/pKdyGl"
                        target="_blank"
                        aria-label="social icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                          className="fill-[#878787] hover:fill-primary"
                        >
                          <path d="M 15.492188 4 C 10.201187 4 5 8.2304531 5 14.439453 C 5 21.556453 11.968844 26.19875 18.214844 24.46875 C 19.260844 26.25175 20.638625 28 23.265625 28 C 27.606625 28 28 24 28 23 L 26.445312 23 C 26.365313 23.716 25.877594 24.457031 24.683594 24.457031 C 23.595594 24.457031 22.810641 23.704594 22.056641 22.558594 C 24.402641 20.743594 25.949219 17.9135 25.949219 14.4375 C 25.954219 8.2025 20.894188 4 15.492188 4 z M 15.492188 6 C 19.536188 6 21.261719 8.9094531 21.261719 14.439453 C 21.266719 16.657453 20.973047 18.450484 20.373047 19.771484 C 19.338047 18.221484 18.054578 17.001953 15.517578 17.001953 C 13.898578 17.001953 12.792719 17.473344 12.011719 18.152344 L 12.658203 19.443359 C 12.987203 19.284359 13.193688 19.289062 13.554688 19.289062 C 15.438688 19.289062 16.404562 20.924969 17.226562 22.542969 C 16.695563 22.701969 16.126234 22.765625 15.490234 22.765625 C 11.510234 22.765625 9.7851563 19.952219 9.7851562 14.449219 C 9.7861563 8.9082188 11.512187 6 15.492188 6 z"></path>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                {/* NAVIGATION */}
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top md:w-full"
                >
                  <h4 className="mb-4 text-lg font-medium text-slate-500 dark:text-slate-400 md:mb-9">
                    Navigation
                  </h4>

                  <ul>
                    <li>
                      <Link
                        href="/"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Home
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Company
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        href="/careers"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/workflow"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Workflow
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                {/* Resources */}
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top md:w-full"
                >
                  <h4 className="mb-4 text-lg font-medium text-slate-500 dark:text-slate-400 md:mb-9 ">
                    Resources
                  </h4>

                  <ul>
                    <li>
                      <Link
                        href="/blog"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/studio"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Studio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/track"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Track
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        href="/under-development"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Research
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/under-development"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Newsletter
                      </Link>
                    </li> */}
                  </ul>
                </motion.div>

                {/* SERVICES */}
                {/* <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top md:w-full"
                >
                  <h4 className="mb-4 text-lg font-medium text-slate-500 dark:text-slate-400 md:mb-9 ">
                    Services
                  </h4>

                  <ul>
                    <li>
                      <Link
                        href="/#service"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Website Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#service"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        WebApp Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#service"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Website Enhancement
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#web-hosting"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Web Hosting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#email-hosting"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Email Hosting
                      </Link>
                    </li>
                  </ul>
                </motion.div> */}

                {/* RESOURCES */}

                {/* OTHERS */}
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top md:w-full"
                >
                  <h4 className="mb-4 text-lg font-medium text-slate-500 dark:text-slate-400 md:mb-9 ">
                    Others
                  </h4>

                  <ul>
                    {/* <li>
                      <Link
                        href="/under-development"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Site Map
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/under-development"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Feedback
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        href="/contact"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#faq"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>

          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 font-medium dark:border-strokedark md:px-20 lg:flex-row lg:justify-between lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-8 text-xs md:text-sm">
                <li>
                  <Link href="#" className="hover:text-primary">
                    English
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Support
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top text-xs md:text-sm"
            >
              <p>
                &copy; {new Date().getFullYear()} MythVortex. All rights
                reserved
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="mt-2 flex items-center gap-5">
                {/* Facebook */}
                <li>
                  <Link
                    href="https://www.facebook.com/people/MythVortex/61555751405440/"
                    target="_blank"
                    aria-label="social icon"
                  >
                    <svg
                      className="fill-[#878787] hover:fill-primary"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1499)">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1499">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>

                {/* Twitter */}
                <li>
                  <Link
                    href="https://twitter.com/MythVortex_"
                    target="_blank"
                    aria-label="social icon"
                  >
                    <svg
                      className="fill-[#878787] hover:fill-primary"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1502)">
                        <path
                          d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1502">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>

                {/* Linkedin */}
                {/* <li>
                  <Link href="#" target="_blank" aria-label="social icon">
                    <svg
                      className="fill-[#383838] transition-all duration-300 hover:fill-primary dark:fill-[#878787]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path
                          d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li> */}

                {/* Instagram */}
                <li>
                  <Link
                    href="https://www.instagram.com/mvx_tech/"
                    target="_blank"
                    aria-label="social icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      className="fill-[#878787] hover:fill-primary"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                    </svg>
                  </Link>
                </li>

                {/* QUORA */}
                <li>
                  <Link
                    href="https://qr.ae/pKdyGl"
                    target="_blank"
                    aria-label="social icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                      className="fill-[#878787] hover:fill-primary"
                    >
                      <path d="M 15.492188 4 C 10.201187 4 5 8.2304531 5 14.439453 C 5 21.556453 11.968844 26.19875 18.214844 24.46875 C 19.260844 26.25175 20.638625 28 23.265625 28 C 27.606625 28 28 24 28 23 L 26.445312 23 C 26.365313 23.716 25.877594 24.457031 24.683594 24.457031 C 23.595594 24.457031 22.810641 23.704594 22.056641 22.558594 C 24.402641 20.743594 25.949219 17.9135 25.949219 14.4375 C 25.954219 8.2025 20.894188 4 15.492188 4 z M 15.492188 6 C 19.536188 6 21.261719 8.9094531 21.261719 14.439453 C 21.266719 16.657453 20.973047 18.450484 20.373047 19.771484 C 19.338047 18.221484 18.054578 17.001953 15.517578 17.001953 C 13.898578 17.001953 12.792719 17.473344 12.011719 18.152344 L 12.658203 19.443359 C 12.987203 19.284359 13.193688 19.289062 13.554688 19.289062 C 15.438688 19.289062 16.404562 20.924969 17.226562 22.542969 C 16.695563 22.701969 16.126234 22.765625 15.490234 22.765625 C 11.510234 22.765625 9.7851563 19.952219 9.7851562 14.449219 C 9.7861563 8.9082188 11.512187 6 15.492188 6 z"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
