"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ItemDatInterface {
  id: number;
  title: string;
}

interface DetailsInterface {
  itemId: number;
  itemTitle: string;
  name: string;
  changeNumber: string | null;
  mode: string;
  email: string;
  phone: string;
  medium: string;
}

export default function ChangePopUp({
  itemData,
  close,
}: {
  itemData: ItemDatInterface;
  close: any;
}) {
  const [details, setDetails] = useState<DetailsInterface>({
    itemId: itemData.id,
    itemTitle: itemData.title,
    name: "",
    changeNumber: "",
    mode: "",
    email: "",
    phone: "",
    medium: "",
  });

  const [task, setTask] = useState({
    changeReq: "",
    sctask: "",
  });

  const [loader, setLoader] = useState(false);

  function addLead() {
    setLoader(true);
    axios
      .post("/api/studio/addQuery", {
        details,
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.data);
          setTask({
            changeReq: res.data.data.changeid,
            sctask: res.data.data.sctask,
          });
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }

  return (
    <div
      onClick={() => {
        close(-1);
      }}
      className="fixed left-0 top-0 z-40 flex h-screen w-screen items-start justify-center bg-black bg-opacity-75 p-2 pt-20 md:items-center md:pt-0"
    >
      {task.changeReq === "" ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="relative z-99999 h-fit w-full rounded-md border border-slate-700 p-5 shadow-xl shadow-black dark:bg-slate-800 md:w-[450px]"
        >
          <button className="absolute right-4 top-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="h-4 w-4 duration-300 hover:scale-125"
              onClick={() => {
                close(-1);
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div>
            <label className="text-xs">Item</label>
            <br />
            <input
              spellCheck={false}
              disabled
              value={itemData.title}
              className="w-full border-b-2 bg-transparent px-4 py-2  pb-0 pl-1 outline-none dark:border-slate-600 dark:text-slate-300 lg:text-sm"
            />
          </div>

          <div className=" grid grid-cols-2 gap-x-5">
            <div className="mt-4 bg-btndark p-2">
              <label className="text-xs">Name</label>
              <input
                value={details.name}
                onChange={(e) => {
                  setDetails({ ...details, name: e.target.value });
                }}
                className="w-full border-b-2 bg-transparent px-4 py-2  pb-0 pl-1 outline-none dark:border-slate-600 dark:text-slate-300 lg:text-sm"
              />
            </div>

            <div className="relative mt-4 bg-btndark p-2">
              <label className="text-xs">Change Number</label>
              <label className="absolute left-2 top-7.5 text-nowrap text-xs text-slate-500">
                (If already have)
              </label>
              <input
                value={details.changeNumber || ""}
                onChange={(e) => {
                  setDetails({ ...details, changeNumber: e.target.value });
                }}
                className="w-full border-b-2 bg-transparent px-4 py-2  pb-0 pl-1 outline-none dark:border-slate-600 dark:text-slate-300 lg:text-sm"
              />
            </div>
          </div>

          <div className="mt-4 bg-btndark p-2">
            <label className="text-xs">Mode of Communication: </label>

            <div className="flex items-end gap-2">
              <input
                onChange={(e) => {
                  setDetails({ ...details, mode: "1" });
                }}
                checked={details.mode === "1" ? true : false}
                type="radio"
                name="communication"
                value={1}
              />
              <label className="text-xs">Email</label>
              <input
                value={details.email}
                onChange={(e) => {
                  setDetails({ ...details, email: e.target.value });
                }}
                className="w-fit flex-1 border-b-2 bg-transparent  px-4 pb-0 pl-1 outline-none dark:border-slate-600 dark:text-slate-300 lg:text-sm"
              />
            </div>

            <div className="mt-1 flex items-end gap-2">
              <input
                onChange={(e) => {
                  setDetails({ ...details, mode: "2" });
                }}
                checked={details.mode === "2" ? true : false}
                type="radio"
                name="communication"
                value={2}
              />
              <label className="text-xs">Phone</label>
              <input
                value={details.phone}
                onChange={(e) => {
                  setDetails({ ...details, phone: e.target.value });
                }}
                className="w-fit flex-1 border-b-2 bg-transparent px-4 pb-0 pl-1 outline-none dark:border-slate-600 dark:text-slate-300 lg:text-sm"
              />
            </div>

            <div className="mt-4 flex items-end gap-2">
              <input
                onChange={(e) => {
                  setDetails({ ...details, mode: "3" });
                }}
                checked={details.mode === "3" ? true : false}
                type="radio"
                name="communication"
                value={3}
              />
              <label className="text-xs">Both</label>
            </div>
          </div>

          <div className="mt-4 bg-btndark p-2">
            <label className="text-xs">How do you know about us?</label>

            <div className="mt-1 flex items-end gap-2">
              <input
                onChange={(e) => {
                  setDetails({ ...details, medium: e.target.value });
                }}
                checked={details.medium === "Existing Customer"}
                type="radio"
                name="medium"
                value={"Existing Customer"}
              />
              <label className="text-xs">Existing Customer</label>
            </div>

            <div className="mt-1 flex items-end gap-2">
              <input
                onChange={(e) => {
                  setDetails({ ...details, medium: e.target.value });
                }}
                checked={details.medium === "Instagram/Facebook"}
                type="radio"
                name="medium"
                value={"Instagram/Facebook"}
              />
              <label className="text-xs">Instagram/Facebook</label>
            </div>

            <div className="mt-1 flex items-end gap-2">
              <input
                onChange={(e) => {
                  setDetails({ ...details, medium: e.target.value });
                }}
                checked={details.medium === "Email Newsletters"}
                type="radio"
                name="medium"
                value={"Email Newsletters"}
              />
              <label className="text-xs">Email Newsletters</label>
            </div>

            <div className="mt-1 flex items-end gap-2">
              <input
                onChange={(e) => {
                  setDetails({ ...details, medium: e.target.value });
                }}
                checked={details.medium === "Google Ads"}
                type="radio"
                name="medium"
                value={"Google Ads"}
              />
              <label className="text-xs">Google Ads</label>
            </div>

            <div className="mt-1 flex items-end gap-2">
              <input
                onChange={(e) => {
                  setDetails({ ...details, medium: e.target.value });
                }}
                checked={details.medium === "Blogs"}
                type="radio"
                name="medium"
                value={"Blogs"}
              />
              <label className="text-xs">Blogs</label>
            </div>

            <div className="mt-1 flex items-end gap-2">
              <input
                onChange={(e) => {
                  setDetails({ ...details, medium: e.target.value });
                }}
                checked={details.medium === "Friend/Family"}
                type="radio"
                name="medium"
                value={"Friend/Family"}
              />
              <label className="text-xs">Friend/Family</label>
            </div>

            <div className="mt-1 flex items-end gap-2">
              <input
                onChange={(e) => {
                  setDetails({ ...details, medium: e.target.value });
                }}
                checked={details.medium === "Others"}
                type="radio"
                name="medium"
                value={"Others"}
              />
              <label className="text-xs">Others</label>
            </div>
          </div>

          <button
            disabled={loader}
            onClick={() => {
              if (details.name && details.mode && details.medium) {
                if (details.mode === "1" && details.email === "") {
                  toast("Please enter email!", {
                    icon: "❌",
                    position: "bottom-center",
                    style: {
                      borderRadius: "10px",
                      background: "#333",
                      color: "#fff",
                    },
                  });
                } else if (details.mode === "2" && details.phone === "") {
                  toast("Please enter phone!", {
                    icon: "❌",
                    position: "bottom-center",
                    style: {
                      borderRadius: "10px",
                      background: "#333",
                      color: "#fff",
                    },
                  });
                } else if (
                  details.mode === "3" &&
                  (details.email === "" || details.phone === "")
                ) {
                  if (details.email === "") {
                    toast("Please enter email!", {
                      icon: "❌",
                      position: "bottom-center",
                      style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                      },
                    });
                  }

                  if (details.phone === "") {
                    toast("Please enter phone!", {
                      icon: "❌",
                      position: "bottom-center",
                      style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                      },
                    });
                  }
                } else {
                  addLead();
                }
              } else {
                toast("Please fill required fields!", {
                  icon: "❌",
                  position: "bottom-center",
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                });
              }
            }}
            className="mt-5 w-full rounded-sm bg-primary px-4 py-2 text-xs font-medium uppercase text-white"
          >
            {loader ? (
              <p className="mx-auto h-6 w-6 animate-spin rounded-full border-t-2 border-white bg-transparent"></p>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      ) : (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="relative h-fit w-full rounded-md border border-slate-700 p-5 shadow-xl shadow-black dark:bg-slate-800 md:w-[450px]"
        >
          <button className="absolute right-4 top-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="h-4 w-4 duration-300 hover:scale-125"
              onClick={() => {
                close(-1);
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <p className="text-sm font-medium">
            Thank you for choosing us! Track updates on our '
            <Link
              className="font-semibold text-blue-400 underline"
              href={"/track"}
            >
              Track
            </Link>
            ' page. Use below detils for monitoring.
            <br />
            <br />
            Change number:{" "}
            <span className="font-semibold text-green-600">
              {task.changeReq}
            </span>{" "}
            <br />
            Service task:{" "}
            <span className="font-semibold text-green-600">{task.sctask}</span>
          </p>
        </div>
      )}
    </div>
  );
}
