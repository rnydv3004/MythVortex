import React from "react";

export default function page() {
  return (
    <section className="flex gap-2">
      <div className=" w-[50%] rounded-sm border-2 p-2 px-3">
        <h2 className="text-sm  font-semibold uppercase">Request History</h2>

        <div className="flex h-full w-full items-center justify-center">
          <p className="relative bottom-4 text-nowrap rounded-full bg-slate-200 px-4 py-2 text-sm font-semibold flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
            You don't raised any support ticket yet.
          </p>
        </div>
      </div>

      <div className="flex w-[50%] flex-col">
        <div className="rounded-sm bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-500 px-4 py-4">
          <h2 className="text-sm uppercase text-white">
            Raise A Support Ticket
          </h2>

          <div className="">
            <div className="flex w-full flex-col">
              <label
                className="mt-4
             text-xs text-white"
              >
                Message
              </label>
              <textarea className="rounded-sm p-1 px-2 outline-none" />
            </div>

            <button className="mt-2 rounded-sm bg-white px-4 py-2 text-sm font-semibold uppercase text-primary active:scale-95">
              Submit
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
}
