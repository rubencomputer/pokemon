import { Avatar, Image } from "@nextui-org/react";
import { NextPage } from "next";

const Sidebar: NextPage = ({ props }: any) => {
  return (
    <div className="bg-main h-full w-full basis-1/4">
      <div className="flex-col justify-items-center items-center p-12">
        <Image
          width={200}
          height={100}
          alt="Pokemon Logo"
          src="logo.png"
        ></Image>
        <Avatar className="w-48 h-48" src="avatar.png"></Avatar>
        <h1>ASHK123</h1>
        <h2>Level 1</h2>

        <span>"Work hard on your test"</span>
      </div>
    </div>
  );
};
export default Sidebar;
