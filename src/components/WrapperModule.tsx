import classNames from "classnames";
import React from "react";

const WrapperModule = ({
  children,
  notMargin,
}: {
  children: React.ReactNode;
  notMargin: boolean;
}) => {
  return (
    <div
      className={classNames(
        notMargin ? "" : "mt-[180px]",
        "flex flex-col items-center w-full"
      )}
    >
      <div className="w-full max-w-[50%] bg-white rounded-xl py-6 px-4">
        {children}
      </div>
    </div>
  );
};

export default WrapperModule;
