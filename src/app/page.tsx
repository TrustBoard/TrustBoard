"use client";
import {
  WagmiConfig,
  createClient,
  configureChains,
  mainnet,
  goerli,
} from "wagmi";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";
import type { ReactNode } from "react"

const { chains, provider } = configureChains([goerli], [publicProvider()]);

// const { connectors } = getDefaultWallet({
//   appName: "TrustBoard",
//   chains,
// });

const config = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    /*new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),*/
    new WalletConnectConnector({
      chains,
      options: {
        //projectId: process.env.PROJECT_ID_WC,
      },
    }),
    /*
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),*/
  ],
  provider,
});

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
        <main>{children}</main>
    </>
  )
}

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </Layout>
  );
}
