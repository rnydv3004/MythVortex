"use client";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../Common/Loader";
import BusinessMan from "../../public/images/contact2.png";

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
      <section id="support" className="w-screen select-none bg-white">
        {/* <div className="container mx-auto bg-gradient-to-t from-slate-300 via-white to-slate-50 px-8 py-14 lg:px-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg "></div>
          {[...Array(2000)].map((_, index) => (
            <div
              key={index}
              className="absolute bg-slate-200 dark:bg-slate-800"
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                top: `${Math.floor(index / 50) * 25}px`, // Calculate top position based on index
                left: `${(index % 50) * 25}px`, // Calculate left position based on index
              }}
            />
          ))}

          <div className="">
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
              className="grid grid-cols-2 py-10"
            >
              <div className="col-span-2 grid grid-cols-2 rounded-md bg-white p-5 shadow-md lg:col-span-1 lg:p-10">
                <div className="col-span-2 mb-7.5 flex flex-col gap-7.5 lg:col-span-2 lg:flex-row  lg:justify-between lg:gap-14">
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
                    className="w-full border-b-2 border-slate-300 bg-transparent pb-3.5 text-sm font-medium text-slate-600 outline-none focus:border-primary dark:border-b-2 dark:border-slate-600 dark:text-slate-300 focus:dark:border-primary lg:w-1/2"
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
                    className="w-full border-b-2 border-slate-300 bg-transparent pb-3.5 text-sm font-medium text-slate-600 outline-none focus:border-primary dark:border-b-2 dark:border-slate-600 dark:text-slate-300 focus:dark:border-primary lg:w-1/2"
                  />
                </div>

                <div className="col-span-2 mb-12.5 flex flex-col gap-7.5 lg:col-span-2 lg:flex-row  lg:justify-between lg:gap-14">
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
                    className="w-full border-b-2 border-slate-300 bg-transparent pb-3.5 text-sm font-medium text-slate-600 outline-none focus:border-primary dark:border-b-2 dark:border-slate-600 dark:text-slate-300 focus:dark:border-primary lg:w-1/2"
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
                    className="w-full border-b-2 border-slate-300 bg-transparent pb-3.5 text-sm font-medium text-slate-600 outline-none focus:border-primary dark:border-b-2 dark:border-slate-600 dark:text-slate-300 focus:dark:border-primary lg:w-1/2"
                  />
                </div>

                <div className="col-span-2 mb-11.5 flex lg:col-span-2">
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
                    className="w-full border-b-2 border-slate-300 bg-transparent pb-3.5 text-sm font-medium text-slate-600 outline-none focus:border-primary dark:border-b-2 dark:border-slate-600 dark:text-slate-300 focus:dark:border-primary "
                  ></textarea>
                </div>

                <div className="col-span-2 flex flex-wrap gap-4 lg:col-span-2 xl:justify-between ">
                  <button
                    aria-label="send message"
                    onClick={() => {
                      sendMail();
                    }}
                    className={`inline-flex min-w-[150px] items-center justify-center gap-2.5 rounded-sm bg-primary px-4 py-2 text-sm font-medium text-white duration-300 ease-in-out hover:bg-primaryho dark:bg-primary dark:hover:bg-primaryho`}
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

              <div className="col-span-2 lg:col-span-1">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -20,
                    },

                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_left md:w-2/5 lg:w-1/2"
                >
                  <h2 className="w-full max-w-[340px] text-left text-2xl font-bold text-primary">
                    Free Consulation
                  </h2>
                </motion.div>
                <Image
                  src={BusinessMan}
                  alt={"services"}
                  className="h-fit w-full px-10 lg:max-h-[400px] lg:w-fit lg:pl-20 "
                />
              </div>
            </motion.div>
          </div>
        </div> */}

        <div className="container mx-auto bg-gradient-to-b from-slate-300 via-white to-slate-50 px-8 py-14 lg:px-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg "></div>
          {[...Array(2000)].map((_, index) => (
            <div
              key={index}
              className="absolute bg-slate-200 dark:bg-slate-800"
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                top: `${Math.floor(index / 50) * 25}px`, // Calculate top position based on index
                left: `${(index % 50) * 25}px`, // Calculate left position based on index
              }}
            />
          ))}

          <div className="">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-2/5 lg:w-1/2"
            >
              <h2 className="w-full max-w-[340px] text-left text-2xl font-bold text-primary">
                Contact Us
              </h2>
            </motion.div>
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
              className="grid grid-cols-2"
            >
              <div className="col-span-2 lg:col-span-1">
                <p className="mt-1 text-sm font-semibold text-slate-700 lg:text-base text-justify lg:max-w-[550px]">
                  Please fill out the form with your query, complaint,
                  requirement, or any other request, or email us at{" "}
                  <span className="font-semibold text-primary">
                    contact@mythvortex.com
                  </span>{" "}
                  or{" "}
                  <span className="font-semibold text-primary">
                    support@mythvortex.com
                  </span>
                </p>
                <Image
                  src={BusinessMan}
                  alt={"services"}
                  className="h-fit w-full px-10 mt-5 lg:max-h-[400px] lg:w-fit lg:pl-20 "
                />
              </div>

              <div className="col-span-2 grid grid-cols-2 rounded-md bg-white p-5 shadow-md lg:col-span-1 lg:p-10">
                <div className="col-span-2 mb-7.5 flex flex-col gap-7.5 lg:col-span-2 lg:flex-row  lg:justify-between lg:gap-14">
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
                    className="w-full border-b-2 border-slate-300 bg-transparent pb-3.5 text-sm font-medium text-slate-600 outline-none focus:border-primary dark:border-b-2 dark:border-slate-600 dark:text-slate-300 focus:dark:border-primary lg:w-1/2"
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
                    className="w-full border-b-2 border-slate-300 bg-transparent pb-3.5 text-sm font-medium text-slate-600 outline-none focus:border-primary dark:border-b-2 dark:border-slate-600 dark:text-slate-300 focus:dark:border-primary lg:w-1/2"
                  />
                </div>

                <div className="col-span-2 mb-12.5 flex flex-col gap-7.5 lg:col-span-2 lg:flex-row  lg:justify-between lg:gap-14">
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
                    className="w-full border-b-2 border-slate-300 bg-transparent pb-3.5 text-sm font-medium text-slate-600 outline-none focus:border-primary dark:border-b-2 dark:border-slate-600 dark:text-slate-300 focus:dark:border-primary lg:w-1/2"
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
                    className="w-full border-b-2 border-slate-300 bg-transparent pb-3.5 text-sm font-medium text-slate-600 outline-none focus:border-primary dark:border-b-2 dark:border-slate-600 dark:text-slate-300 focus:dark:border-primary lg:w-1/2"
                  />
                </div>

                <div className="col-span-2 mb-11.5 flex lg:col-span-2">
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
                    className="w-full border-b-2 border-slate-300 bg-transparent pb-3.5 text-sm font-medium text-slate-600 outline-none focus:border-primary dark:border-b-2 dark:border-slate-600 dark:text-slate-300 focus:dark:border-primary "
                  ></textarea>
                </div>

                <div className="col-span-2 flex flex-wrap gap-4 lg:col-span-2 xl:justify-between ">
                  <button
                    aria-label="send message"
                    onClick={() => {
                      sendMail();
                    }}
                    className={`inline-flex min-w-[150px] items-center justify-center gap-2.5 rounded-sm bg-primary px-4 uppercase text-sm font-semibold h-fit py-2 text-white duration-300 ease-in-out hover:bg-primaryho dark:bg-primary dark:hover:bg-primaryho`}
                  >
                    {loader ? (
                      "Sending"
                    ) : (
                      <>
                        Send
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
