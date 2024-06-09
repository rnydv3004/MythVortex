"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <section className="grid grid-cols-2 text-sm">
      <div className="col-span-1 py-44 px-[15%]">
        <h1 className="text-4xl text-black font-bold text-center font-inter">Sign In</h1>
        <p className="text-center relative">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

        <div className="flex flex-col mt-10">
          <label>Email<span className="text-red-600">*</span></label>
          <input className="input-primary" placeholder="Email"/>
        </div>

        <div className="flex flex-col mt-5">
          <label>Password<span className="text-red-600">*</span></label>
          <input  className="input-primary" placeholder="Password"/>
        </div>

        <div className="flex flex-col mt-5">
          <label>OTP<span className="text-red-600">*</span></label>
          <input className="input-primary" placeholder="* * * * * *"/>
        </div>

        <button className="btn-primary mt-4 uppercase w-full font-semibold">Sign Up</button>
        <p className="text-slate-700 font-medium text-xs mt-2">Don't have an account? <span className="text-primary"><Link href={"/auth/signup"}>Sign Up</Link></span></p>
      </div>
      <div></div>
    </section>
  );
};

export default Signin;
