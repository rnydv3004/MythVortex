import Image from "next/image";
import React from "react";
import Logo from "../../../../public/logo_rec.png";

export default function page() {
  return (
    <section>
      <div className="h-[340px] w-full bg-blue-500"></div>
      <div className="relative -top-[120px] mx-auto h-[400px] w-[85%] border bg-white p-2">
        <div className="flex justify-between">
          <label className="text-sm font-medium ">
            Partner since: 22 Jan, 2023
          </label>
          <button className="btn-primary text-xs font-bold uppercase">
            Update
          </button>
        </div>
        <div className=" relative -top-[33.5%] mx-auto w-fit -rotate-45 rounded-full border-4 border-white border-b-primary border-l-primary p-2">
          <Image
            className="aspect-square h-[150px] w-[150px] rotate-45 rounded-full"
            src={Logo}
            alt={""}
          />
        </div>

        <div className="relative -top-[30.5%] mx-auto flex w-fit flex-col justify-center ">
          <h2 className="text-2xl font-bold uppercase text-slate-800">
            Lorem, ipsum.
          </h2>
          <p className="text-center">Business</p>
        </div>

        <div className="relative -top-[22.5%] mx-auto min-h-[100px] w-full p-2">
          <h3 className="text-xs font-semibold uppercase text-slate-400">
            General Information
          </h3>
          <div className="mt-4 grid grid-cols-3 gap-5">
            <div className="flex flex-col">
              <label className="text-xs font-semibold">Name</label>
              <input placeholder="Name" className="input-primary" />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-semibold">Type</label>
              <select className="input-primary">
                <option>Individual</option>
                <option>Business</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-semibold">Email</label>
              <input
                disabled
                defaultValue={"user@gmail.com"}
                className="input-primary"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-semibold">Country</label>
              <input placeholder="India" className="input-primary" />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-semibold">Phone</label>
              <input type="tel" placeholder="Phone" className="input-primary" />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-semibold">Alt. Phone</label>
              <input type="tel" placeholder="Phone" className="input-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
