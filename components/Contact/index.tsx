"use client";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../Common/Loader";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [loader, setLoader] = useState(false);

  function sendMail() {
    setLoader(true);
    if (formData.fullName === "") {
      toast.error("Please Fill Your Name", {
        position: "bottom-center",
      });
    } else if (formData.email === "") {
      toast.error("Please Fill Email", {
        position: "bottom-center",
      });
    } else if (formData.subject === "") {
      toast.error("Please Fill Subject", {
        position: "bottom-center",
      });
    } else if (formData.phone === "") {
      toast.error("Please Fill Phone", {
        position: "bottom-center",
      });
    } else if (formData.message === "") {
      toast.error("Please Fill Message", {
        position: "bottom-center",
      });
    } else {
      setLoader(true);
      axios
        .post("/api/mailer", formData)
        .then((res) => {
          toast.success("Mail Sent!", {
            position: "bottom-center",
          });
          if (res.status === 200) {
            console.log("Message sent");
            setFormData({
              fullName: "",
              email: "",
              subject: "",
              phone: "",
              message: "",
            });
          }
          setLoader(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Some Error Occured!", {
            position: "bottom-center",
          });
          setLoader(false);
        });
      
    }

  }

  return (
    <>
      {loader ? (
        <div className="fixed bottom-0 top-0 z-99999 flex h-screen w-screen items-center justify-center overflow-hidden bg-black bg-opacity-30 dark:bg-white dark:bg-opacity-30">
          <div className="h-14 w-14 animate-spin rounded-full border-t-4 border-primary dark:border-white"></div>
        </div>
      ) : (
        <></>
      )}

      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-2 md:px-8 2xl:px-0">
        <div className="relative mx-auto mb-25 flex max-w-c-1390 flex-col items-center justify-center gap-10 bg-sky-50 px-2 pb-2 pt-2 dark:bg-slate-900 md:px-7.5 md:pt-10 lg:px-15 lg:pt-15 xl:px-10 xl:pb-10 xl:pt-10">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42] "></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex w-full justify-center">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-2xl font-medium text-slate-700 dark:text-white xl:text-itemtitle">
                Reach Out for Web Excellence
              </h2>

              <div>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        fullName: e.target.value,
                      });
                    }}
                    className="w-full border-b border-slate-500 bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black  focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      });
                    }}
                    className="w-full border-b border-slate-500 bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        subject: e.target.value,
                      });
                    }}
                    className="w-full border-b border-slate-500 bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      });
                    }}
                    className="w-full border-b border-slate-500 bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      });
                    }}
                    className="w-full border-b border-slate-500 bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between ">
                  <button
                    aria-label="send message"
                    onClick={() => {
                      sendMail();
                    }}
                    className={`inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-primaryho dark:bg-primary dark:hover:bg-primaryho`}
                  >
                    {loader ? (
                      "Sending"
                    ) : (
                      <>
                        Send
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          height={"16"}
                          width={"16"}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
