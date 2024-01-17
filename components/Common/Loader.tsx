import React from "react";

export default function Loader() {
  return (
    <div className="fixed h-screen w-screen overflow-hidden bg-white bg-opacity-30 z-99999">
      <div className="border-2 border-primary"></div>
    </div>
  );
}
