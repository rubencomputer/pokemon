"use client";

import { Avatar, Image } from "@nextui-org/react";
import LogOut from "./LogOutButton";

type SidebarProps = {
  userName: string;
  userLevel: number;
  userMotto: string;
  userAvatar?: string;
};

const SideBar: React.FC<SidebarProps> = ({
  userName,
  userLevel,
  userMotto,
  userAvatar,
}) => {
  return (
    <div className="bg-main h-28 md:h-screen w-full basis-1/4 ">
      <div className="flex flex-row md:flex-col justify-center items-center w-full p-12 md:pt-6 md:pb-6 h-full ">
        {/* <div className="items-start md:hidden w-1/3">
          <FontAwesomeIcon className="text-2xl" icon={faBars}></FontAwesomeIcon>
        </div> */}
        <div className="">
          <Image
            width={200}
            height={125}
            alt="Pokemon Logo"
            src="/logo.png"
            className="md:mb-16"
          ></Image>
        </div>

        <Avatar
          className="w-48 h-48 mb-8 hidden md:block"
          src="/avatar.png"
        ></Avatar>
        <h1 className="text-2xl font-bold tracking-wide hidden md:block">
          {userName}
        </h1>
        <h2 className="opacity-50 text-xl font-semibold tracking-wide mb-8 hidden md:block">
          {`Level ${userLevel}`}
        </h2>

        <span className="tracking-wide mb-auto hidden md:block">
          &ldquo;{userMotto}&rdquo;
        </span>
        <div className="self-stretch hidden md:block">
          <LogOut></LogOut>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
