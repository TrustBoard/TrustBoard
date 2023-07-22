"use client";
import React, { useState, useEffect } from "react";
import { useAccount, useConnect } from 'wagmi'

export function ConnectProfiles() {
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
          <a href="https://worldcoin-test-jqnmy6dxe-trustboard.vercel.app">World Coin</a>
      </div>
      </div>
      <div className="flex items-center text-xs justify-center">
        {error && <div>{error.message}</div>}
      </div>
    </div>
  )
}

export default ConnectProfiles;

