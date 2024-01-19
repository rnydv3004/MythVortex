"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="border-t-2 border-stroke bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:border-strokedark dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent">
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
                    <h6 className="text-2xl font-semibold uppercase text-slate-700 dark:text-white">
                      <span className="bg-gradient-to-tr from-black via-slate-600 to-slate-900 bg-clip-text text-transparent dark:from-slate-500 dark:via-gray-200 dark:to-slate-400 ">
                        Myth
                      </span>
                      <span className="bg-gradient-to-tr from-blue-800 via-blue-500 to-blue-900 bg-clip-text font-extrabold text-transparent dark:from-blue-600 dark:via-sky-500 dark:to-blue-950">
                        Vortex
                      </span>
                    </h6>
                  </Link>

                  <p className="mb-0 mt-0 font-light text-slate-700 dark:text-slate-200">
                    Where Myth Meet Innovation
                  </p>
                  <p className="mb-0 mt-5">Address:</p>
                  <p className="mb-0 mt-2 text-sm">
                    MythVortex, Plot no 80M,
                    <br />
                    Raees Colony, Chotpur Rd,
                    <br />
                    Alivardipur, Jalpura, Greater Noida{" "}
                  </p>
                  <p className="mb-0 mt-0 text-sm">Pincode - 201306</p>
                  <p className="mb-0 mt-2 text-sm">
                    Email: contact@myhtvortex.com
                  </p>
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
                        href="/contact"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                {/* SERVICES */}
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
                </motion.div>

                {/* RESOURCES */}

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
                        href="/workflow"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Workflow
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Support
                      </Link>
                    </li>
                    <li>
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
                    </li>
                  </ul>
                </motion.div>

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
                    <li>
                      <Link
                        href="/#pricing"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
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

          {/* <div className="px-5 pb-10 md:m-auto md:w-1/2">
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
              className="animate_top w-full"
            >
              <h4 className="mb-4 text-lg font-medium text-black dark:text-white md:mb-9 ">
                Newsletter
              </h4>
              <p className="mb-4 w-[90%]">
                Subscribe to receive future updates
              </p>

              <form action="#" className="w-full">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="w-full rounded-full border border-stroke px-6 py-3 shadow-solid-11 focus:border-primary focus:outline-none dark:border-slate-600 dark:bg-white dark:bg-opacity-10 dark:shadow-md dark:shadow-black dark:focus:border-primary"
                  />

                  <button
                    aria-label="signup to newsletter"
                    className="absolute right-0 p-4"
                  >
                    <svg
                      className="fill-[#757693] hover:fill-primary dark:fill-white"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1487)">
                        <path
                          d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1487">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
          </div> */}

          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col md:px-20 flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
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
              <ul className="flex items-center gap-8 text-sm md:text-base">
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
                  <Link href="#" className="hover:text-primary">
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
              className="animate_top text-sm"
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
              <ul className="flex items-center gap-5">
                <li>
                  <Link href="#" aria-label="social icon">
                    <svg
                      className="fill-[#383838] transition-all duration-300 hover:fill-primary dark:fill-[#878787]"
                      width="24"
                      height="24"
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
                <li>
                  <Link href="#" aria-label="social icon">
                    <svg
                      className="fill-[#383838] transition-all duration-300 hover:fill-primary dark:fill-[#878787]"
                      width="24"
                      height="24"
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
                <li>
                  <Link href="#" aria-label="social icon">
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
                </li>
                <li>
                  <Link href="#" aria-label="social icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      className="fill-[#383838] transition-all duration-300 hover:fill-primary dark:fill-[#878787]"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
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
