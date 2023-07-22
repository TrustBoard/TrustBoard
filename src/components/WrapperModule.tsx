import React from "react";

const WrapperModule = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center w-full mt-[180px]">
      <div className="w-full max-w-[1300px] bg-white rounded-xl py-6 px-4">
        {children}
      </div>
    </div>
  );
};

export default WrapperModule;
