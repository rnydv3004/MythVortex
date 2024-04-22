"use client";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

const CATEGORYLIST = [
  "AI & ML",
  "Technology",
  "IOT",
  "Crypto",
  "Blockchain",
  "Cryptocurrency",
  "AR & VR",
];

export default function BlogPageLayout() {
  const [searchText, setSearchText] = useState("");
  const [loader, setLoader] = useState(true);
  const [categorySearchList, setCategorySearchList] = useState<string[]>([]);
  const [blogData, setBlogData] = useState<any[]>([]);

  const fetchData = () => {
    setLoader(true);
    axios
      .post("/api/blog/fetchBlog", {
        searchText,
        categorySearchList,
      })
      .then((res) => {
        if (res.data.success) {
          setBlogData(res.data.result);
          console.log(res.data.result);
        }
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [, searchText, categorySearchList]);

  return (
    <>
      <section className="min-h-screen py-24 lg:py-7 xl:py-10">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <h1 className="text-3xl mf:text-4xl text-white font-semibold mb-5">Blog</h1>
          <div className="relative flex flex-col gap-5 lg:flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute left-2 top-2 h-5 w-5 text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              placeholder="Search here..."
              className="h-fit w-full rounded-full border-2 border-slate-300 px-4 py-2 pl-8 text-sm outline-none hover:shadow-lg dark:bg-slate-800 dark:border-slate-700 lg:w-[400px]"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />

            <div className="flex gap-2 overflow-x-auto">
              {CATEGORYLIST.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (categorySearchList.includes(category)) {
                      setCategorySearchList(
                        categorySearchList.filter((item) => item != category),
                      );
                    } else {
                      setCategorySearchList([...categorySearchList, category]);
                    }
                  }}
                  className={`${categorySearchList.includes(category) ? "border-primary text-primary" : ""} w-fit cursor-pointer text-nowrap rounded-full border-2 px-4 py-2 text-xs font-semibold dark:border-slate-700`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {loader ? (
            <div className="flex h-[100%] w-full items-center justify-center pt-20">
              <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-primary"></div>
            </div>
          ) : (
            <div className="mt-15 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
              {blogData.length === 0 ? <>No Blog Found!</> : <></>}

              {blogData.map((post, key) => (
                <BlogItem key={key} blog={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
}
