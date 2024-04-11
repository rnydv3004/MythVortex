import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Whatsapp from "@/components/Whatsapp";

export const metadata: Metadata = {
  title: "Support | MythVortex",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pt-25">
      <Contact />
      <Whatsapp/>
    </div>
  );
};

export default SupportPage;
