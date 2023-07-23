import classNames from "classnames";
import React from "react";

const WrapperModule = ({
  children,
  notMargin,
  _width,
  _padding,
}: {
  children: React.ReactNode;
  notMargin: boolean;
  _width: string;
  _padding: string;
}) => {
  return (
    <div
      className={classNames(
        notMargin ? "" : "mt-[180px]",
        "flex flex-col items-center w-full"
      )}
    >
      <div
        className={classNames(
          "w-full  bg-white rounded-xl py-6 px-8",
          _width ? _width : "max-w-[50%]",
          _padding ? _padding : ""
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default WrapperModule;
