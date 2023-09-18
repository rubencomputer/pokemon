import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-row justify-between ${inter.className}`}
    >
      <Sidebar></Sidebar>
      <div className="bg-white text-text w-full h-full">Test</div>
    </div>
  );
}
