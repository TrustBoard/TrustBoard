"use client";

import ProposalDescription from "@/components/ProposalDescription";
import WrapperModule from "@/components/WrapperModule";

import File from "@/components/Files";

// import {
//   WagmiConfig,
//   createClient,
//   configureChains,
//   mainnet,
//   goerli,
// } from "wagmi";
// import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
// import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
// import { publicProvider } from "wagmi/providers/public";

// const { chains, provider } = configureChains([goerli], [publicProvider()]);

// // const { connectors } = getDefaultWallet({
// //   appName: "TrustBoard",
// //   chains,
// // });

// const config = createClient({
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
//         //projectId: process.env.PROJECT_ID_WC,
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
//   provider,
// });

export default function Home() {
  return (
    <main className="min-h-screen flex-col flex gap-7">
      <WrapperModule>
        <ProposalDescription />
      </WrapperModule>

      <WrapperModule notMargin={true}>
        <div className="flex flex-row gap-4 justify-center items-center w-full">
          <File fileName="Recap week 1" />
          <File fileName="BSA Meeting" />
          <File fileName="ETHcc Lausanne" />
          <File fileName="EPFL Ranking" />
        </div>
      </WrapperModule>
    </main>
  );
}
