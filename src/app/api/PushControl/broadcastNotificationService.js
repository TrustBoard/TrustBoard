import * as PushAPI from "@pushprotocol/restapi";
import { ethers } from "ethers";
import { _signer, channelAddress, env } from "./pushConfig.js";

export async function sendBroadcastNotification(title,body) {
  // const {address, enum} = req.body
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer: _signer,
      type: 1, // broadcast
      identityType: 2, // direct payload
      notification: {
        title: title,
        body: body
      },
      payload: {
      title: title,
        body: body,
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

//Use state managementl have to pass differetn title and body as per the response that the user is sending from the front end is yes or no
//