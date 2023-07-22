"use client";

import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import AragonSDKWrapper from "@/context/AragonSDK";
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import type { Session } from "next-auth"
import { WagmiConfig, createClient, configureChains, goerli } from "wagmi";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains([goerli], [publicProvider()]);

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
        projectId: process.env.PROJECT_ID_WC,
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

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "TrustBoard",
//   description: "Decentralized Corporate Board",
// };

export default function RootLayout({
  children, session
}: {
  children: React.ReactNode;
  session: any;
}) {
// {
//   Component,
//   pageProps: { session, ...pageProps },
// }: AppProps<{ session: Session }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <WagmiConfig client={config}>
            <AragonSDKWrapper>
              <Header />
              <NavBar />
              {children}
            </AragonSDKWrapper>
          </WagmiConfig>
        </SessionProvider>
      </body>
    </html>
  );
}
