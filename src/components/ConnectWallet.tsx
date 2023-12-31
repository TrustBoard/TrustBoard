"use client";

import React, { useState } from "react";
import ConnectProfiles from "./ConnectProfiles";

// // import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
// import { alchemyProvider } from 'wagmi/providers/alchemy'
// // import { publicProvider } from 'wagmi/providers/public'

// // import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// // import { InjectedConnector } from 'wagmi/connectors/injected'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

// // Configure chains & providers with the Alchemy provider.
// // Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [mainnet],
//   [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()],
// )

// // Set up wagmi config
// const config = createConfig({
//   autoConnect: true,
//   connectors: [
//     new MetaMaskConnector({ chains }),
//     /*new CoinbaseWalletConnector({
//       chains,
//       options: {
//         appName: 'wagmi',
//       },
//     }),*/
//     new WalletConnectConnector({
//       chains,
//       options: {
//         projectId: "...",
//       },
//     }),
//     /*
//     new InjectedConnector({
//       chains,
//       options: {
//         name: 'Injected',
//         shimDisconnect: true,
//       },
//     }),*/
//   ],
//   publicClient,
//   webSocketPublicClient,
// })

import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";

export function Profile() {
  const { address, connector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  console.log(process.env.PROJECT_ID_WC);
  console.log(process.env.WLD_CLIENT_SECRET);
  console.log(process.env.WLD_CLIENT_ID);

  if (isConnected) {
    return (
      <div>
        <div>Connected to {connector?.name || 'Unknown Connector'}</div>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  }
  return (
    <div>
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && " (unsupported)"}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting)"}
        </button>
      ))}
      {error && <div>{error.message}</div>}
    </div>
  );
}

const ConnectWallet = () => {
  const [openWallet, setOpenWallet] = useState(false);
  const { address, connector, isConnected } = useAccount();

  return (
    <div>
      {openWallet ? (
        <div className="w-full h-screen absolute top-0 left-0 bg-black/60 flex justify-center items-center z-50">
          <button
            onClick={() => setOpenWallet(false)}
            className="absolute top-10 right-10 rounded-xl text-lg px-6 py-3 w-40 font-medium hover:bg-opacity-70 duration-200 bg-color3"
          >
            Close
          </button>
          <div className="border bg-white rounded-xl grid grid-flow-col divide-x-2 items-center overflow-hidden">
            <ConnectProfiles />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpenWallet(true)}
          className="bg-color2 relative text-white rounded-xl px-6 py-3 text-lg font-medium w-40 duration-200"
        >
          {isConnected ? address?.slice(0, 5) + "..." + address?.slice(39, 42) : "Connect" }
          {isConnected ? null : (<div className="w-4 h-4 absolute -top-1 bg-color2 -right-1 rounded-full"/>)}
          {isConnected ? null : (<div className="w-4 h-4 absolute -top-1 bg-color2 -right-1 rounded-full animate-ping"/>)}
        </button>
      )}
      {openWallet ? (
        <button 
        className="bg-transparent relative text-white rounded-xl px-6 py-3 text-lg font-medium w-40 duration-200"
        >
      </button>
      ) : (
        null
      )}
      
    </div>
  );
};

export default ConnectWallet;
