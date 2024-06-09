"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <section className="grid grid-cols-2 text-sm">
      <div className="col-span-1"></div>
      <div className="col-span-1 px-[15%] py-28">
        <h1 className="text-center font-inter text-4xl font-bold text-black">
          Create your account
        </h1>
        <p className="relative text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="mt-10 flex flex-col">
          <label>
            Email<span className="text-red-600">*</span>
          </label>
          <input className="input-primary" placeholder="Email" />
        </div>

        <div className="mt-5 flex flex-col">
          <label>
            Password<span className="text-red-600">*</span>
          </label>
          <input className="input-primary" placeholder="Password" />
        </div>

        <div className="mt-5 flex flex-col">
          <label>
            Re-type Password<span className="text-red-600">*</span>
          </label>
          <input className="input-primary" placeholder="Re-type Password" />
        </div>

        <div className="mt-5 flex flex-col">
          <label>
            OTP<span className="text-red-600">*</span>
          </label>
          <input className="input-primary" placeholder="* * * * * *" />
        </div>

        <div className="mt-4 flex justify-start gap-1">
          <input className="text-xs" type="checkbox" />
          <label className="text-xs">
            By signing up, I agree to the terms and conditions, privacy policy,
            and cookie policy
          </label>
        </div>

        <button className="btn-primary mt-4 w-full font-semibold uppercase">
          Sign Up
        </button>
        <p className="mt-2 text-xs font-medium text-slate-700">
          Already have an account?{" "}
          <span className="text-primary">
            <Link href={"/auth/signin"}>Sign In</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Signup;
