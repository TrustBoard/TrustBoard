"use client";
import React, { useState, useEffect } from "react";
import { useAccount, useConnect } from 'wagmi'
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image";

export function ConnectProfiles() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
 
  return (
    <div className="flex flex-col gap-0">
      <div className="flex flex-row items-start justify-center gap-0">
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
          className="hover:bg-gray-200 group w-40 h-40 duration-500 flex flex-col items-center justify-start"
        >
          <div className="group-hover:scale-110 duration-300 p-10">
            {connector.name === "MetaMask" ? (<Image src={"/metamask.png"} alt="" width="120" height="120"/>): (<Image src={"/walletconnect.png"} alt="" width="120" height="120"/>)}
          </div>
          
          {/*connector.name*/}
          {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </button>
      ))}
      <div className="flex items-center justify-center bg-white hover:bg-gray-200 w-40 h-40 duration-500">
      <a
                href={`/api/auth/signin`}
                className="flex flex-col items-center group justify-start"
                onClick={(e) => {
                  e.preventDefault()
                  signIn("worldcoin") // when worldcoin is the only provider
                  // signIn() // when there are multiple providers
                }}
              >
                <div className="group-hover:scale-125 scale-110 duration-300">
                  <Image src={"/worldcoin.png"} alt="" width="120" height="120"/>
                </div>
                {/*<span className="opacity-80">World Coin</span>*/}
              </a>
      </div>
      </div>
      <div className="flex items-center text-xs justify-center bg-transparent">
        {error && <div>{error.message}</div>}
      </div>
    </div>
  )
}

export default ConnectProfiles;

