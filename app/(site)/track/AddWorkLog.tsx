"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function AddWorkLog({ sctask }) {
  const [note, setNote] = useState("");
  const [docLink, setDocLink] = useState("");
  const [admin, setAdmin] = useState("");
  const [loader, setLoader] = useState(false);

  function addLog() {
    setLoader(true);
    axios
      .post("/api/track/addTrack", {
        note,
        docLink,
        admin,
        sctaskid: sctask
      })
      .then((res) => {
        if (res.data.success) {
          setAdmin("");
          setNote("");
          setDocLink("");
          toast("Log Added!", {
            icon: "✅",
            position: "top-center",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        } else {
          toast("Try Again Later!", {
            icon: "❌",
            position: "top-center",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }

  return (
    <>
      <h6 className="text-sm font-semibold">Add Log for <span className="text-green-600">{sctask}</span></h6>
      <div className="mt-5 flex flex-col gap-1">
        <label className="text-xs font-medium">Your Message</label>
        <textarea
          disabled={loader}
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
          placeholder="This is a message"
          className="w-full rounded-sm border-2 border-slate-100  bg-slate-100 px-4 py-2 text-sm font-medium text-slate-400 outline-none placeholder:italic placeholder:text-slate-400 hover:border-primary dark:border-blackho dark:bg-blackho dark:placeholder:text-slate-600"
        />
      </div>

      <div className="mt-5 flex flex-col gap-1">
        <label className="text-xs font-medium">Attachment Link</label>
        <input
          disabled={loader}
          value={docLink}
          onChange={(e) => {
            setDocLink(e.target.value);
          }}
          placeholder="https://www.drive.com/iygzvjhvzvjgvj"
          className="rounded-sm border-2 border-slate-100  bg-slate-100 px-4 py-2 text-sm font-medium text-slate-400 outline-none placeholder:italic placeholder:text-slate-400 hover:border-primary dark:border-blackho dark:bg-blackho dark:placeholder:text-slate-600"
        />
      </div>

      <div className="mt-5 flex flex-col gap-1">
        <label className="text-xs font-medium">Admin code (Optional)</label>
        <input
          disabled={loader}
          value={admin}
          onChange={(e) => {
            setAdmin(e.target.value);
          }}
          className="rounded-sm border-2 border-slate-100  bg-slate-100 px-4 py-2 text-sm font-medium text-slate-400 outline-none placeholder:italic placeholder:text-slate-400 hover:border-primary dark:border-blackho dark:bg-blackho dark:placeholder:text-slate-600"
        />
      </div>

      <button
        onClick={() => {
          if (note) {
            addLog();
          } else {
            toast("Please enter notes!", {
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
        className="mt-5 flex w-fit min-w-[100px] justify-center rounded-sm bg-primary px-4 py-2 text-sm font-medium text-white"
      >
        {loader ? (
          <div className="mx-auto h-5  w-5 animate-spin rounded-full border-t-2 border-white"></div>
        ) : (
          "Add"
        )}
      </button>
    </>
  );
}
