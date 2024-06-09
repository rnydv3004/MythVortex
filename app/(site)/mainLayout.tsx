"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import ToasterContext from "../context/ToastContext";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";

export default function mainLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

  const path = usePathname()
  return (
    <>
      <ThemeProvider enableSystem={false} attribute="class" defaultTheme="dark">
        {/* <Lines /> */}
        {!(path.includes('/dashboard')) && <Header />}
        <Analytics />
        <SpeedInsights />
        <ToasterContext />
        <Toaster />
        <div className="overflow-hidden">{children}</div>
        {!(path.includes('/dashboard')) &&<Footer />}
        {/* <ScrollToTop /> */}
      </ThemeProvider>
    </>
  );
}
