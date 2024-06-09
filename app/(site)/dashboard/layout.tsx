import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const backgroundStyle = {
    backgroundImage: "url('/bg/white-wp.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="flex bg-slate-100">
      <Sidebar />
      <div className="h-screen w-full p-2">
        <div
          style={backgroundStyle}
          className="relative h-full w-full overflow-hidden rounded-sm border p-2"
        >
          <div className="absolute left-0 top-0 h-full w-full bg-white bg-opacity-85 z-10"></div>
          <div className="relative z-20">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
