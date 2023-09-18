import { Avatar, Image } from "@nextui-org/react";
import { NextPage } from "next";
import LogOut from "./log-out";
import { type } from "os";

type SidebarProps = {
  userName: string;
  userLevel: number;
  userMotto: string;
  userAvatar?: string;
};

const currentUser: SidebarProps = {
  userName: "ASHK123",
  userLevel: 1,
  userMotto: "Work hard on your test",
  userAvatar: "avatar.png",
};

const Sidebar = ({
  userName,
  userLevel,
  userMotto,
  userAvatar,
}: SidebarProps) => {
  return (
    <div className="bg-main h-screen w-full basis-1/4">
      <div className="flex flex-col justify-items-center items-center p-12 pt-6 pb-6 h-full">
        <Image
          width={200}
          height={125}
          alt="Pokemon Logo"
          src="logo.png"
          className="mb-16"
        ></Image>
        <Avatar
          className="w-48 h-48 mb-8"
          src={currentUser.userAvatar}
        ></Avatar>
        <h1 className="text-2xl font-bold tracking-wide">
          {currentUser.userName}
        </h1>
        <h2 className="opacity-50 text-xl font-semibold tracking-wide mb-8">
          {`Level ${currentUser.userLevel}`}
        </h2>

        <span className="tracking-wide mb-auto">
          &ldquo;{currentUser.userMotto}&rdquo;
        </span>
        <div className="self-stretch">
          <LogOut></LogOut>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
