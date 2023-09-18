import { NextPage } from "next";
import { HTMLAttributes } from "react";

type Props = {
  componentProp: React.ReactNode;
};

const Content: React.FC<Props> = ({ componentProp }) => {
  return (
    <div className="h-16 bg-gradient-to-b from-gradientStart to-gradientEnd">
      {componentProp}
    </div>
  );
};

export default Content;
