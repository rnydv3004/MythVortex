import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-slate-50 px-2 py-20 lg:py-22 dark:bg-blacksection">
      <div className="mx-auto grid max-w-c-1280 grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-4 h-fit rounded-sm border border-slate-300 bg-white p-5 shadow-sm dark:border-blackho dark:bg-black">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium">Change number</label>
            <input
              placeholder="CH006756"
              className="rounded-sm border-2 border-slate-200  bg-slate-200 px-4 py-2 text-sm font-medium text-slate-400 outline-none placeholder:italic placeholder:text-slate-400 hover:border-primary dark:border-blackho dark:bg-blackho dark:placeholder:text-slate-600"
            />
          </div>

          <div className="mt-5 flex flex-col gap-1">
            <label className="text-xs font-medium">STASK number</label>
            <input
              placeholder="SC980045"
              className="rounded-sm border-2 border-slate-200  bg-slate-200 px-4 py-2 text-sm font-medium text-slate-400 outline-none placeholder:italic placeholder:text-slate-400 hover:border-primary dark:border-blackho dark:bg-blackho dark:placeholder:text-slate-600"
            />
          </div>

          <button className="mt-5 w-fit min-w-[100px] rounded-sm bg-primary px-4 py-2 text-sm font-medium text-white">
            Track
          </button>

          <br />
          <br />

          <div className="mt-5 flex flex-col gap-1">
            <label className="text-xs font-medium">Your Message</label>
            <textarea placeholder="This is a message" className="w-full rounded-sm border-2 border-slate-200  bg-slate-200 px-4 py-2 text-sm font-medium text-slate-400 outline-none placeholder:italic placeholder:text-slate-400 hover:border-primary dark:border-blackho dark:bg-blackho dark:placeholder:text-slate-600" />
          </div>

          <div className="mt-5 flex flex-col gap-1">
            <label className="text-xs font-medium">Attachment Link</label>
            <input
              placeholder="https://www.drive.com/iygzvjhvzvjgvj"
              className="rounded-sm border-2 border-slate-200  bg-slate-200 px-4 py-2 text-sm font-medium text-slate-400 outline-none placeholder:italic placeholder:text-slate-400 hover:border-primary dark:border-blackho dark:bg-blackho dark:placeholder:text-slate-600"
            />
          </div>

          <button className="mt-5 w-fit min-w-[100px] rounded-sm bg-primary px-4 py-2 text-sm font-medium text-white">
            Add
          </button>
        </div>

        <div className="col-span-12 lg:col-span-8 rounded-sm border border-slate-300 bg-white p-5 shadow-sm dark:border-blackho dark:bg-black">
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map(() => (
              <button className="rounded-full border-2 border-slate-400 px-4 py-2 text-xs font-semibold text-slate-500 hover:border-primary hover:text-primary dark:border-slate-600">
                SCTASK1
              </button>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-5">
            {Array.from({ length: 5 }).map(() => (
              <div className="w-full rounded-sm  ">
                <div className="flex justify-between text-xs font-normal italic text-slate-600 dark:text-slate-400">
                  <label>Client</label>
                  <label>2023-04-12 12:32</label>
                </div>
                <p className="mt-0.5 rounded-sm border-2 border-slate-200 bg-slate-200 px-4 py-2 text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400 hover:border-primary dark:border-blackho dark:bg-blackho">
                  Task: SC000017 created with change number: CH000015:
                  Appointment System{" "}
                  <Link href={""} className="text-xs text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.8"
                      stroke="currentColor"
                      className="mt-2 h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                    Attachment
                  </Link>
                </p>
              </div>
            ))}
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.6"
              stroke="currentColor"
              className="h-14 w-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
            <p className="text-center text-xs font-medium">
              You can use either the Change number or the STASK number,
              <br />
              or both, to track your request
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
