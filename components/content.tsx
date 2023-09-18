import { NextPage } from "next";
import { HTMLAttributes } from "react";

type ContentProps = {
  componentProp: React.ReactNode;
};

const Content: React.FC<ContentProps> = ({ componentProp }) => {
  return (
    <div className="h-screen bg-gradient-to-b from-gradientStart to-gradientEnd">
      {componentProp}
    </div>
  );
};

export default Content;
