//const PushAPI = require("@pushprotocol/restapi");
//const { signer, channelAddress, env } = require("./pushConfig");

// eneleve export

import * as PushAPI from "@pushprotocol/restapi";
import { ethers } from "ethers";
import { signer, channelAddress, env } from "./pushConfig.js";

export default async function sendTargetedNotification() {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer: signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `[SDK-TEST] Targeted notification TITLE:`,
        body: `[sdk-test] Targeted notification BODY`
      },
      payload: {
        title: `[sdk-test] payload title`,
        body: `sample msg body`,
        cta: '',
        img: ''
      },
      recipients: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // recipient address
      channel: channelAddress,
      env: env
    });
    console.log("Targeted notification response:", apiResponse);
  } catch (err) {
    console.error('Error sending targeted notification:', err);
  }
}

// module.exports = sendTargetedNotification;