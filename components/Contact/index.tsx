"use client";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../Common/Loader";
import Mail from "../../public/images/contact2.png";
import Consult from "../../public/images/contact1.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    content: "",
  });

  const [loader, setLoader] = useState(false);

  function sendMail() {
    // setLoader(true);
    if (formData.fullName === "") {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          }  w-fit rounded-full border-2 border-slate-300 bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-2xl dark:border-slate-600`}
        >
          &#10006; Please Fill Your Name
        </div>
      ));
    } else if (formData.email === "") {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          }  w-fit rounded-full border-2 border-slate-300 bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-2xl dark:border-slate-600`}
        >
          &#10006; Please Fill Your Email
        </div>
      ));
    } else if (formData.subject === "") {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          }  w-fit rounded-full border-2 border-slate-300 bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-2xl dark:border-slate-600`}
        >
          &#10006; Please Fill Subject
        </div>
      ));
    } else if (formData.phone === "") {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          }  w-fit rounded-full border-2 border-slate-300 bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-2xl dark:border-slate-600`}
        >
          &#10006; Please Fill Your Phone
        </div>
      ));
    } else if (formData.content === "") {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          }  w-fit rounded-full border-2 border-slate-300 bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-2xl dark:border-slate-600`}
        >
          &#10006; Please Fill Your content
        </div>
      ));
    } else {
      setLoader(true);
      axios
        .post("/api/mailer", formData)
        .then((res) => {
          console.log("es", res)
          if (res.data.success) {
            toast.custom((t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                }  w-fit rounded-full border-2 border-slate-300 bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-2xl dark:border-slate-600`}
              >
                &#10003; Mail Sent!
              </div>
            ));
            // console.log("content sent");
            setFormData({
              fullName: "",
              email: "",
              subject: "",
              phone: "",
              content: "",
            });
          }
          setLoader(false);
        })
        .catch((error) => {
          console.log(error);
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              }  w-fit rounded-full border-2 border-slate-300 bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-2xl dark:border-slate-600`}
            >
              &#10006; Soething Went Wrong, Try later!
            </div>
          ));
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
        <div className="container relative mx-auto bg-gradient-to-t from-slate-300 via-white to-slate-50 px-8 py-14 dark:from-slate-900 dark:via-black dark:to-slate-800 lg:px-20">
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
            className="animate_left md:w-2/5 lg:w-1/2"
          >
            <h2 className="w-full max-w-[340px] text-left text-2xl font-bold text-primary dark:text-white">
              Consult With Us
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
              <p className="mt-1 text-justify text-sm font-semibold text-slate-700 dark:text-slate-300 lg:max-w-[550px] lg:text-base">
                Reserve a{" "}
                <span className="rounded-sm bg-gradient-to-t from-green-600 via-green-500 to-green-600 px-2 py-0.5 text-sm font-semibold uppercase text-white">
                  free
                </span>{" "}
                consultation slot to receive professional advice and discuss
                your requirements. We’re here to help you make informed
                decisions and achieve your goals
                <br />
                <br />
              </p>

              <button className="mt-5 rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-white">
                Free Consulation
              </button>
              <p className="mt-1 pl-1 text-xs font-semibold text-primary dark:text-slate-300">
                Limited period offer
              </p>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <Image
                src={Consult}
                alt={"services"}
                className="mt-5 h-fit w-full px-10 lg:max-h-[400px] lg:w-fit lg:pl-20 "
              />
            </div>
          </motion.div>
        </div>

        <div className="container relative mx-auto bg-gradient-to-b from-slate-300 via-white to-slate-50 px-8 py-14 dark:from-slate-900 dark:via-black dark:to-slate-800 lg:px-20">
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
            <h2 className="w-full max-w-[340px] text-left text-2xl font-bold text-primary dark:text-white">
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
              <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-300 lg:max-w-[550px] lg:text-justify lg:text-base">
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
                src={Mail}
                alt={"services"}
                className="mt-5 h-fit w-full px-10 lg:max-h-[400px] lg:w-fit lg:pl-20 "
              />
            </div>

            <div className="col-span-2 grid grid-cols-2 rounded-md bg-white p-5 shadow-md dark:border dark:border-slate-700 dark:bg-blacksection lg:col-span-1 lg:p-10">
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
                  value={formData.content}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      content: e.target.value,
                    });
                  }}
                  className="w-full border-b-2 border-slate-300 bg-transparent pb-3.5 text-sm font-medium text-slate-600 outline-none focus:border-primary dark:border-b-2 dark:border-slate-600 dark:text-slate-300 focus:dark:border-primary "
                ></textarea>
              </div>

              <div className="col-span-2 flex flex-wrap gap-4 lg:col-span-2 xl:justify-between ">
                <button
                  aria-label="send content"
                  onClick={() => {
                    sendMail();
                  }}
                  className={`inline-flex h-fit min-w-[150px] items-center justify-center gap-2.5 rounded-sm bg-primary px-4 py-2 text-sm font-semibold uppercase text-white duration-300 ease-in-out hover:bg-primaryho dark:bg-primary dark:hover:bg-primaryho`}
                >
                  {loader ? "Sending" : <>Send</>}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
