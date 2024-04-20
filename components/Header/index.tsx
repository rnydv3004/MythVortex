"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
      onClick={() => setNavigationOpen(!navigationOpen)}
      className={`fixed left-0 top-0 z-99999 w-full select-none bg-opacity-70 py-4 dark:bg-opacity-70 md:h-fit ${
        navigationOpen && "h-full"
      } ${
        stickyMenu
          ? "bg-white !py-4 shadow transition duration-100  dark:bg-black"
          : ""
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 md:flex 2xl:px-0"
      >
        <div className="mr-10 flex w-full items-center justify-between md:w-fit">
          <a href="/">
            <h6 className="text-2xl font-semibold uppercase text-slate-700 dark:text-white">
              <span className="bg-gradient-to-tr from-black via-slate-600 to-slate-900 bg-clip-text text-transparent dark:from-slate-500 dark:via-gray-200 dark:to-slate-400 ">
                Myth
              </span>
              <span className="bg-gradient-to-tr from-blue-800 via-blue-500 to-blue-900 bg-clip-text font-extrabold text-transparent dark:from-blue-600 dark:via-sky-500 dark:to-blue-950">
                Vortex
              </span>
            </h6>
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block md:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible  h-0 w-full items-center justify-between md:visible md:flex md:h-auto md:w-full ${
            navigationOpen &&
            " !visible mt-3 md:mt-0 border-2 dark:border-slate-600 md:border-0 shadow-md h-[90%] rounded-md bg-slate-100 md:bg-transparent bg-opacity-100 p-7.5 dark:bg-blackho md:h-auto md:p-0 md:shadow-none md:dark:bg-transparent"
          }`}
        >
          <nav className={`relative`}>
            <ul className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10 ">
              {menuData.map((menuItem, key) => (
                <li
                  onClick={() => setNavigationOpen(!navigationOpen)}
                  key={key}
                  className={menuItem.submenu && "group relative"}
                >
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setNavigationOpen(!navigationOpen)}
                        className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer sm:fill-waterloo md:fill-transparent group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary font-semibold">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "text-primary hover:text-primary font-semibold"
                          : "hover:text-primary font-medium"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className=" mt-7 flex items-center gap-6 md:mt-0">
            {/* <Link
              href="https://github.com/NextJSTemplates/solid-nextjs"
              className="flex items-center justify-center rounded-full bg-zinc-500 px-7.5 py-2.5 text-xs text-white hover:bg-blue-800 md:text-regular md:duration-300 md:ease-in-out "
            >
              Track Status
            </Link> */}
            <ThemeToggler/>

            <Link
              href="/contact"
              className="rounded-md border-2 border-transparent text-sm bg-primary px-4 py-2 text-white active:scale-90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Header;
