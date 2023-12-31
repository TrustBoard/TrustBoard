import { Client } from "@xmtp/xmtp-js";
import { ethers } from "ethers";
import React, { useEffect, useState, useRef } from "react";
import Chat from "./Chat";
import styles from "./Home.module.css";


export default function Home() {

  // const contacts

  const [messages, setMessages] = useState(null);
  const convRef = useRef(null);
  const clientRef = useRef(null);
  const [signer, setSigner] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isOnNetwork, setIsOnNetwork] = useState(false);
  const [peerAdress, setPeerAdress] = useState("0x937C0d4a6294cdfa575de17382c7076b579DC176");
  const PEER_ADDRESS = peerAdress;



  // Function to load the existing messages in a conversation
  const newConversation = async function (xmtp_client, addressTo) {
    //Creates a new conversation with the address
    if (await xmtp_client?.canMessage(PEER_ADDRESS)) {
      const conversation = await xmtp_client.conversations.newConversation(
        addressTo,
      );
      convRef.current = conversation;
      //Loads the messages of the conversation
      const messages = await conversation.messages();
      setMessages(messages);
    } else {
      console.log("cant message because is not on the network.");
      //cant message because is not on the network.
    }
  };

  // Function to initialize the XMTP client
  const initXmtp = async function () {
    // Create the XMTP client
    const xmtp = await Client.create(signer, { env: "production" });
    //Create or load conversation with Gm bot
    newConversation(xmtp, PEER_ADDRESS);
    // Set the XMTP client in state for later use
    setIsOnNetwork(!!xmtp.address);
    //Set the client in the ref
    clientRef.current = xmtp;
  };


  const handleClick1 = () => {
    setPeerAdress('0x937C0d4a6294cdfa575de17382c7076b579DC176')
    console.log(PEER_ADDRESS)
  }

  const handleClick2 = () => {
    setPeerAdress('0x937C0d4a6294cdfa575de17382c7076b578DC111')
    console.log(peerAdress)

  }

  // Function to connect to the wallet
  const connectWallet = async function () {
    // Check if the ethereum object exists on the window object
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request access to the user's Ethereum accounts
        await window.ethereum.enable();

        // Instantiate a new ethers provider with Metamask
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get the signer from the ethers provider
        setSigner(provider.getSigner());

        // Update the isConnected data property based on whether we have a signer
        setIsConnected(true);

        await initXmtp();
      } catch (error) {
        console.error("User rejected request", error);
      }
    } else {
      console.error("Metamask not found");
    }
  };
  useEffect(() => {
    if (isOnNetwork && convRef.current) {
      // Function to stream new messages in the conversation
      const streamMessages = async () => {
        const newStream = await convRef.current.streamMessages();
        for await (const msg of newStream) {
          const exists = messages.find((m) => m.id === msg.id);
          if (!exists) {
            setMessages((prevMessages) => {
              const msgsnew = [...prevMessages, msg];
              return msgsnew;
            });
          }
        }
      };
      streamMessages();
    }
  }, [messages, isConnected, isOnNetwork]);

  return (
    <div className={styles.Home}>
      {/* Display the ConnectWallet component if not connected */}
      {!isConnected && (
        <div className={styles.walletBtn}>
          <button onClick={connectWallet} className={styles.btnXmtp}>
            Connect Wallet
          </button>
        </div>
      )}
      {isConnected && !isOnNetwork && (
        <div className={styles.xmtp}>
          {signer?.address}
          <button onClick={initXmtp} className={styles.btnXmtp}>
            Connect to XMTP
          </button>
        </div>
      )}
      {/* Render the Chat component if connected, initialized, and messages exist */}
      {isConnected && isOnNetwork && messages && (
        <div className="flex flex-row">
          <ul className="flex flex-col w-60 p-2 gap-2">
            <li>
              <button className=" flex px-16 py-4 border justify-center rounded hover:shadow" onClick={handleClick1}>Contact1</button>
            </li>
            <li>
              <button className=" flex px-16 py-4 border justify-center rounded hover:shadow" onClick={handleClick2}>Contact2</button>
            </li>
          </ul>
          <Chat
            client={clientRef.current}
            conversation={convRef.current}
            messageHistory={messages}
          />
        </div>
      )}
    </div>
  );
}
