"use client";

import React, { useState } from "react";
import ConnectMetamask from "./ConnectMetamask";

const ConnectWallet = () => {
  const [openWallet, setOpenWallet] = useState(false);

  return (
    <div>
      {openWallet ? (
        <div className="w-full h-screen absolute top-0 left-0 bg-black/60 flex justify-center items-center z-50">
          <button
            onClick={() => setOpenWallet(false)}
            className="absolute top-10 right-8 rounded-xl px-6 py-3 font-medium hover:bg-opacity-70 duration-200 bg-color3"
          >
            Close
          </button>
          <div className="border bg-white rounded-xl grid grid-flow-col divide-x-2 items-center overflow-hidden">
            <ConnectMetamask />
            <ConnectMetamask />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpenWallet(true)}
          className=" bg-color2 text-white rounded-xl px-6 py-3 text-lg font-medium"
        >
          Connect
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
