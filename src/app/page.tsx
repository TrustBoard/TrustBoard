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
        projectId: "53253f5365f89327f743b053fe1da242",
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
