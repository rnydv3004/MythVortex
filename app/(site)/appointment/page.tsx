"use client";
import React from "react";
import Image from "next/image";
import Formcomponent from "@/components/Appointmentsystem/Formcomponent";
import { Toaster } from "react-hot-toast";
import DarkBg from "../../../public/bg/dark_bg.webp";
import LightBg from "../../../public/bg/white_bg.webp";
import { useTheme } from "next-themes";

export default function Page() {
  const { theme } = useTheme();
  console.log(theme)

  return (
    <div className="flex h-screen w-screen bg-transparent lg:justify-center ">
      <div className="absolute left-0 top-0 -z-10 h-screen w-screen overflow-hidden">
        <Image
          priority
          src={theme == "dark" ? DarkBg : LightBg}
          alt={"background"}
          className="h-screen w-full"
        />
      </div>
      <div className="flex w-full flex-col overflow-hidden p-[70px] px-0 md:items-center md:justify-center md:p-0 md:pt-0 lg:flex-row">
        <Formcomponent />
        <Toaster />
      </div>
    </div>
  );
}
