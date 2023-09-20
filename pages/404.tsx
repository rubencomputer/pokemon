import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function Custom404() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Image
        as={NextImage}
        src="/PBC.png"
        width={600}
        height={600}
        radius="sm"
        shadow="sm"
      ></Image>
    </div>
  );
}
