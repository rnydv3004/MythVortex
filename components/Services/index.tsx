"use client";
import React from "react";
import Image from "next/image";
import BusinessMan from "../../public/images/services.png";

const Feature = () => {
  return (
    <section className="w-screen select-none bg-white dark:bg-blackho">
      <div className="container mx-auto grid grid-cols-2 bg-gradient-to-t from-slate-300 via-white to-slate-50 dark:from-black dark:via-slate-700 dark:to-blackho px-8 pt-14 lg:px-20">
        <div className="col-span-2 flex flex-col gap-20 lg:col-span-1 lg:justify-end">
          <div>
            <h2 className="w-full max-w-[340px] text-left text-2xl font-bold text-primary">
              Our Services
            </h2>
            <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300 lg:text-base">
              Our primary focus is on ensuring customer satisfaction.
            </p>
          </div>

          <Image
            src={BusinessMan}
            alt={"services"}
            className="h-fit w-full px-10 lg:max-h-[400px] lg:w-fit lg:pl-20 "
          />
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center gap-2 lg:col-span-1">
          <ul className="flex w-full max-w-[340px] flex-col gap-2 pb-10 text-sm font-semibold text-slate-700 lg:text-base">
            <li className="flex items-center gap-2 overflow-hidden rounded-md border border-slate-100 dark:border-slate-600 bg-white dark:bg-slate-600 dark:text-slate-100 shadow">
              <svg
                className="aspect-square h-10 w-10 rounded-r-3xl bg-primary p-2 text-white lg:h-12 lg:w-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
                  clip-rule="evenodd"
                />
              </svg>
              Consultation
            </li>
            <li className="flex items-center gap-2 overflow-hidden rounded-md border border-slate-100 dark:border-slate-600 bg-white dark:bg-slate-600 dark:text-slate-100 shadow">
              <svg
                className="aspect-square h-10 w-10 rounded-r-3xl bg-primary p-2 text-white lg:h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm16 7H4v7h16v-7ZM5 8a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Zm4-1a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2H9Zm2 1a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z"
                  clip-rule="evenodd"
                />
              </svg>
              Website
            </li>
            <li className="flex items-center gap-2 overflow-hidden rounded-md border border-slate-100 dark:border-slate-600 bg-white dark:bg-slate-600 dark:text-slate-100 shadow">
              <svg
                className="aspect-square h-10 w-10 rounded-r-3xl bg-primary p-2 text-white lg:h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4ZM5 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5Zm14 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4Z" />
              </svg>
              Customized Tool
            </li>
            <li className="flex items-center gap-2 overflow-hidden rounded-md border border-slate-100 dark:border-slate-600 bg-white dark:bg-slate-600 dark:text-slate-100 shadow">
              <svg
                className="aspect-square h-10 w-10 rounded-r-3xl bg-primary p-2 text-white lg:h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z"
                  clip-rule="evenodd"
                />
              </svg>
              Web Application
            </li>
            <li className="flex items-center gap-2 overflow-hidden rounded-md border border-slate-100 dark:border-slate-600 bg-white dark:bg-slate-600 dark:text-slate-100 shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 30 30"
                className="aspect-square h-10 w-10 rounded-r-3xl bg-primary fill-white p-2 lg:h-12"
              >
                <path d="M 9.6777344 1.515625 A 0.50005 0.50005 0 0 0 9.28125 2.3046875 L 10.759766 4.4414062 C 9.3401698 5.5292967 8.3458783 7.145415 8.0800781 9 L 21.919922 9 C 21.654122 7.145415 20.65983 5.5292967 19.240234 4.4414062 L 20.71875 2.3046875 A 0.50005 0.50005 0 0 0 20.306641 1.515625 A 0.50005 0.50005 0 0 0 19.896484 1.7363281 L 18.40625 3.8925781 C 17.398252 3.3277312 16.238794 3 15 3 C 13.761206 3 12.601748 3.3277312 11.59375 3.8925781 L 10.103516 1.7363281 A 0.50005 0.50005 0 0 0 9.6777344 1.515625 z M 12 5 C 12.552 5 13 5.448 13 6 C 13 6.552 12.552 7 12 7 C 11.448 7 11 6.552 11 6 C 11 5.448 11.448 5 12 5 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 5 11 C 4.448 11 4 11.448 4 12 L 4 20 C 4 20.552 4.448 21 5 21 C 5.552 21 6 20.552 6 20 L 6 12 C 6 11.448 5.552 11 5 11 z M 8 11 L 8 21 C 8 22.105 8.895 23 10 23 L 10 26.5 C 10 27.328 10.672 28 11.5 28 C 12.328 28 13 27.328 13 26.5 L 13 23 L 17 23 L 17 26.5 C 17 27.328 17.672 28 18.5 28 C 19.328 28 20 27.328 20 26.5 L 20 23 C 21.105 23 22 22.105 22 21 L 22 11 L 8 11 z M 25 11 C 24.448 11 24 11.448 24 12 L 24 20 C 24 20.552 24.448 21 25 21 C 25.552 21 26 20.552 26 20 L 26 12 C 26 11.448 25.552 11 25 11 z"></path>
              </svg>
              Android Application
            </li>
            <li className="flex items-center gap-2 overflow-hidden rounded-md border border-slate-100 dark:border-slate-600 bg-white dark:bg-slate-600 dark:text-slate-100 shadow">
              <span className="flex aspect-square h-10 w-10 items-center justify-center rounded-r-3xl bg-primary p-2 text-sm text-white lg:h-12">
                iOS
              </span>
              IOS Application
            </li>
            <li className="flex items-center gap-2 overflow-hidden rounded-md border border-slate-100 dark:border-slate-600 bg-white dark:bg-slate-600 dark:text-slate-100 shadow">
              <svg
                className="aspect-square h-10 w-10 rounded-r-3xl bg-primary p-2 text-white lg:h-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              Ecommerce Solution
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Feature;
