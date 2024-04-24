"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import AddWorkLog from "./AddWorkLog";

interface TaskData {
  note: string;
  doclink: string;
  sender: string;
  createddate: string;
}

interface FinalDataInterface {
  [sctask: string]: TaskData[];
}

export default function page() {
  const [changeId, setChangeId] = useState("");
  const [sctask, setSctask] = useState("");
  const [selectedTask, setSelectedTask] = useState("");
  const [loader, setLoader] = useState(false);

  const [finalData, setFinalData] = useState<FinalDataInterface>();

  function fetchData() {
    setLoader(true);
    axios
      .post("/api/track/fetchTracks", {
        changeid: changeId,
        sctask: sctask,
      })
      .then((res) => {
        if (res.data.success) {
          setFinalData(res.data.result);
          console.log("--------->", res.data);
          if (Object.keys(res.data.result).length != 0) {
            setSelectedTask(Object.keys(res.data.result)[0]);
          }
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }

  return (
    <div className="min-h-screen bg-slate-50 px-2 py-20 dark:bg-blacksection lg:py-22">
      <div className="mx-auto grid max-w-c-1280 grid-cols-12 gap-5">
        <div className="col-span-12 h-fit rounded-sm border border-slate-300 bg-white p-5 shadow-sm dark:border-blackho dark:bg-black lg:col-span-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium">Change number</label>
            <input
              value={changeId}
              onChange={(e) => {
                setChangeId(e.target.value.toUpperCase());
              }}
              placeholder="CH006756"
              className="rounded-sm border-2 border-slate-100  bg-slate-100 px-4 py-2 text-sm font-medium text-slate-400 outline-none placeholder:italic placeholder:text-slate-400 hover:border-primary dark:border-blackho dark:bg-blackho dark:placeholder:text-slate-600"
            />
          </div>

          <div className="mt-5 flex flex-col gap-1">
            <label className="text-xs font-medium">STASK number</label>
            <input
              value={sctask}
              onChange={(e) => {
                setSctask(e.target.value.toUpperCase());
              }}
              placeholder="SC980045"
              className="rounded-sm border-2 border-slate-100  bg-slate-100 px-4 py-2 text-sm font-medium text-slate-400 outline-none placeholder:italic placeholder:text-slate-400 hover:border-primary dark:border-blackho dark:bg-blackho dark:placeholder:text-slate-600"
            />
          </div>

          <button
            onClick={() => {
              if (changeId || sctask) {
                fetchData();
              } else {
                toast("Please enter either change num or stask!", {
                  icon: "❌",
                  position: "top-center",
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                });
              }
            }}
            disabled={loader}
            className="mt-5 w-fit min-w-[100px] rounded-sm bg-primary px-4 py-2 text-sm font-medium text-white flex justify-center"
          >
            {loader ? (
              <div className="mx-auto h-5  w-5 animate-spin rounded-full border-t-2 border-white"></div>
            ) : (
              (changeId || sctask) && finalData && Object.keys(finalData).length > 0 ?  "Refresh" : "Track"
            )}
          </button>

          <br />
          <br />

          {finalData && Object.keys(finalData).length > 0 && (
            <AddWorkLog sctask={selectedTask} />
          )}
        </div>

        <div className="col-span-12 rounded-sm border border-slate-300 bg-white p-5 shadow-sm dark:border-blackho dark:bg-black lg:col-span-8">
          {finalData && Object.keys(finalData).length === 0 && (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/1000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                className="h-14 w-14  stroke-red-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
              <p className="text-center text-xs font-medium">
                Opps! Wrong Attempt.
                <br /> Recheck your Change number or Stask number
              </p>
            </div>
          )}

          {finalData && finalData.length && (
            <p className="mb-2 text-xs font-medium">Your Service Task</p>
          )}
          <div className="flex flex-wrap gap-2">
            {finalData &&
              Object.keys(finalData).map((sctask, index) => (
                <button
                  onClick={() => {
                    setSelectedTask(sctask);
                  }}
                  key={index}
                  className={`${sctask === selectedTask ? "border-primary bg-primary text-white" : " border-slate-400 text-slate-500 hover:border-primary hover:text-primary dark:border-slate-600"} rounded-full border-2  px-4 py-2 text-xs font-semibold`}
                >
                  {sctask}
                </button>
              ))}
          </div>
          <div className="mt-5 flex flex-col gap-5">
            {finalData &&
              finalData[selectedTask] &&
              finalData[selectedTask].map((item) => (
                <div className="w-full rounded-sm  ">
                  <div className="flex justify-between text-xs font-normal italic text-slate-600 dark:text-slate-400">
                    <label>{!item.sender ? "System" : item.sender}</label>
                    <label>{item.createddate.replace("T", " ").slice(0,16)}</label>
                  </div>
                  <p className="mt-0.5 rounded-sm border-2 border-slate-100 bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600 hover:border-primary dark:border-blackho dark:bg-blackho dark:text-slate-400 lg:text-sm">
                    {item.note}
                    {item.doclink && (
                      <Link
                        target="_blank"
                        href={item.doclink}
                        className="text-xs text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/1000/svg"
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
                    )}
                  </p>
                </div>
              ))}
          </div>
          {!finalData && (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/1000/svg"
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
          )}
        </div>
      </div>
    </div>
  );
}
