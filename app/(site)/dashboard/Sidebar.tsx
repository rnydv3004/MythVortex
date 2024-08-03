"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoDark from "../../../public/logo_rec.png";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();

  const backgroundStyle = {
    backgroundImage: "url('/bg/side-bg-white.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <aside
      style={backgroundStyle}
      className="h-screen w-[320px] border-r bg-white "
    >
      <div className="flex justify-center border-b-2 border-slate-400 py-2 mb-2">
        <div className="flex items-center gap-2 shadow-sm">
          <div className=" flex w-full items-center justify-between rounded-full  md:w-fit">
            <a href="/">
              <Image
                src={LogoDark}
                alt={""}
                className="aspect-square h-fit w-12 rounded-full border-2 border-slate-700 "
              />
            </a>
          </div>
          <h1 className="text-2xl font-bold text-black">MVX Panel</h1>
        </div>
      </div>

      <ul className="flex flex-col gap-2 px-2">
        <li className="flex h-fit w-full">
          <Link
            className={`${path === "/dashboard" ? "bg-primary font-medium text-white" : " bg-white bg-opacity-55 border border-slate-200 font-medium text-slate-700"} flex w-full items-center gap-2 rounded-sm  px-6 py-2 text-sm hover:bg-blue-600 hover:font-medium hover:text-white`}
            href={"/dashboard"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
              />
            </svg>
            <span>Application</span>
          </Link>
        </li>
        <li className="flex h-fit w-full ">
          <Link
            className={`${path === "/dashboard/request" ? "bg-primary font-medium text-white" : "bg-white bg-opacity-55 border border-slate-200 font-medium text-slate-700"} flex w-full items-center gap-2 rounded-sm  px-6 py-2 text-sm hover:bg-blue-600 hover:font-medium hover:text-white`}
            href={"/dashboard/request"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
              />
            </svg>
            <span>Request</span>
          </Link>
        </li>
        <li className="flex h-fit w-full">
          <Link
            className={`${path === "/dashboard/profile" ? "bg-primary font-medium text-white" : "bg-white bg-opacity-55 border border-slate-200 font-medium text-slate-700"} flex w-full items-center gap-2 rounded-sm  px-6 py-2 text-sm hover:bg-blue-600 hover:font-medium hover:text-white`}
            href={"/dashboard/profile"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <span>My Profile</span>
          </Link>
        </li>
        <li className="flex h-fit w-full">
          <Link
            className={`${path === "/dashboard/support" ? "bg-primary font-medium text-white" : "bg-white bg-opacity-55 border border-slate-200 font-medium text-slate-700"} flex w-full items-center gap-2 rounded-sm  px-6 py-2 text-sm hover:bg-blue-600 hover:font-medium hover:text-white`}
            href={"/dashboard/support"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>

            <span>Support</span>
          </Link>
        </li>
        <li className="flex h-fit w-full">
          <button className="flex w-full items-center gap-2 rounded-sm px-6 py-2 text-left text-sm bg-white bg-opacity-55 border border-slate-200 font-medium text-slate-700 hover:bg-blue-600 hover:font-medium hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
            <span>Log out</span>
          </button>
        </li>
      </ul>
    </aside>
  );
}
