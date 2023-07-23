import sendTargetedNotification from "./targetedNotificationService.js"
import { sendBroadcastNotification } from "./broadcastNotificationService.js";


async function main() {
  try {
    // Your other application logic and function calls can go here...

    // Call the functions to send notifications
    await sendTargetedNotification();
    await sendBroadcastNotification();
  } catch (error) {
    console.error("Error in main function:", error);
  }
}

main();