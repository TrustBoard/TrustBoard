"use client";

import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const ConnectMetamask = () => {
  const [isMetamaskAvailable, setIsMetamaskAvailable] = useState(false);

  const connectToMetamask = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected to MetaMask");
      console.log("Ethereum accounts:", accounts);
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  useEffect(() => {
    // Check if MetaMask is available
    if (typeof window.ethereum !== "undefined") {
      // MetaMask is available
      setIsMetamaskAvailable(true);
      // Your code to connect to MetaMask will go here
    } else {
      setIsMetamaskAvailable(false);
      // MetaMask is not available, display a message to the user or handle the absence accordingly
      console.log("MetaMask is not available");
    }
  }, []);

  return (
    <button
      className="w-64 h-64 flex flex-col items-center justify-center hover:bg-black/20  duration-200"
      disabled={isMetamaskAvailable ? false : true}
      onClick={connectToMetamask}
    >
      <span>MetaMask</span>
      <span>Connect</span>
    </button>
  );
};

export default ConnectMetamask;
