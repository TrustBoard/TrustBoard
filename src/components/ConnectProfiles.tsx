"use client";
import React, { useState, useEffect } from "react";
import { useAccount, useConnect } from 'wagmi'
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export function ConnectProfiles() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
 
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-center gap-2">
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
          className="hover:bg-gray-200 w-40 h-40"
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </button>
      ))}
      <div className="flex items-center justify-center hover:bg-gray-200 w-40 h-40">
      <a
                href={`/api/auth/signin`}
                className="bg-blue-400 hover:bg-blue-800"
                onClick={(e) => {
                  e.preventDefault()
                  signIn("worldcoin") // when worldcoin is the only provider
                  // signIn() // when there are multiple providers
                }}
              >
                World Coin
              </a>
      </div>
      </div>
      <div className="flex items-center text-xs justify-center">
        {error && <div>{error.message}</div>}
      </div>
    </div>
  )
}

export default ConnectProfiles;

