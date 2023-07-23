import classNames from "classnames";
import React from "react";

const ProgressBar = ({ progress }: any) => {
  return (
    <div className="w-full rounded-3xl bg-color1/60 flex flex-row justify-start h-4 py-[3px]">
      <div
        style={{ width: progress + "%" }}
        className={classNames("bg-color2 mx-1 h-full rounded-3xl")}
      ></div>
    </div>
  );
};

export default ProgressBar;
