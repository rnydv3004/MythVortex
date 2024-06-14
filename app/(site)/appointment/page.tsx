"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Formcomponent from "@/components/Appointmentsystem/Formcomponent";
import { Toaster } from "react-hot-toast";
import DarkBg from "../../../public/bg/dark_bg.webp";
import LightBg from "../../../public/bg/white_bg.webp";
import { useTheme } from "next-themes";

export default function Page() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-white dark:bg-slate-800">
        <div className="border-primary-500 h-14 w-14 animate-spin rounded-full border-t-4"></div>
      </div>
    ); 
  }

  return (
    <div className="flex lg:h-screen w-screen bg-transparent lg:justify-center ">
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
