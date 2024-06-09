import React from "react";

export default function page() {

  return (
    <div className="z-50 p-2 text-slate-700">
      <h2 className="text-sm font-semibold text-slate-700">My Applications</h2>
      <div className="grid grid-cols-4 gap-5 px-2 py-2">
        {Array.from({ length: 5 }).map((item) => (
          <div className="h-[180px] w-full rounded-lg border-2 border-slate-300 bg-gradient-to-tr from-slate-200 via-slate-100 to-slate-200 text-slate-500 flex flex-col items-center justify-center gap-1 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.8"
              stroke="currentColor"
              className="size-15"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-sm font-medium">Create New Application</p>
          </div>
        ))}
      </div>
    </div>
  );
}
