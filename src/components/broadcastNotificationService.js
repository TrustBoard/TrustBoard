import * as PushAPI from "@pushprotocol/restapi";
import { ethers } from "ethers";
import { signer, channelAddress, env } from "./pushConfig.js";

export async function sendBroadcastNotification() {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer: signer,
      type: 1, // broadcast
      identityType: 2, // direct payload
      notification: {
        title: `Vote Alert:`,
        body: `Vote closes in 60 seconds`
      },
      payload: {
        title: `Vote Alert:`,
        body: `You have 60 seconds remaining to vote, please proceed.`,
        cta: '',
        img: ''
      },
      channel: channelAddress,
      env: env
    });
    console.log("Broadcast notification response:", apiResponse);
  } catch (err) {
    console.error('Error sending broadcast notification:', err);
  }
}