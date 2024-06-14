"use client";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../Common/Loader";
import WhatsappImage from "../../public/images/qrwapp.jpg";
import Link from "next/link";

const Whatsapp = () => {
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
        <div className="relative mx-auto mb-25 flex max-w-c-1390 flex-col items-center justify-center gap-10 bg-white px-2 pb-2 pt-2 dark:bg-black md:px-7.5 md:pt-10 lg:px-15 lg:pt-15 xl:px-10 xl:pb-10 xl:pt-10">
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
              className="animate_top z-10 w-full rounded-lg border-2 bg-[#00A884] bg-opacity-100 p-7.5 text-sm shadow-lg placeholder:text-slate-500 dark:border dark:border-strokedark md:w-3/5 lg:w-3/4 xl:p-15 "
            >
              <div className="flex w-full flex-col items-center justify-evenly lg:flex-row">
                <div className="w-full text-lg text-white lg:w-[40%]">
                  
                  <div className="flex flex-row-reverse lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-2 lg:gap-0 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      className="h-8 w-8 lg:h-28 lg:w-28"
                    >
                      <path
                        fill="#fff"
                        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                      ></path>
                      <path
                        fill="#cfd8dc"
                        d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                      ></path>
                      <path
                        fill="#40c351"
                        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                      ></path>
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <h2 className=" lg:mt-4 text-2xl font-semibold text-slate-100 dark:text-white lg:mb-10 lg:text-3xl">
                      Whatsapp Connect
                    </h2>
                  </div>
                  <p className="text-pretty text-sm lg:text-base">
                    Discover how our customized software solutions can
                    revolutionize your business. Start with a free consultation
                    on WhatsApp!
                  </p>
                  <Link
                    className="mb-10 mt-3 lg:mt-4 flex lg:w-[140px] items-center justify-center rounded-md border-2 border-white px-4 py-2 text-sm font-bold hover:bg-white hover:text-[#00A884]"
                    href={"https://wa.me/message/QLFUDPJRAHQ6D1"}
                    target="_blank"
                  >
                    CHAT
                  </Link>
                </div>
                <div className="w-full text-lg text-white lg:w-[40%]">
                  <Image src={WhatsappImage} alt={""} />
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

export default Whatsapp;
