import React, { useState } from "react";
import styles from "./Chat.module.css";
import {AiOutlineSend} from "react-icons/ai";

function Chat({ client, messageHistory, conversation }) {
  const [inputValue, setInputValue] = useState("");

  // Function to handle sending a message
  const handleSend = async () => {
    if (inputValue) {
      await onSendMessage(inputValue);
      setInputValue("");
    }
  };

  // Function to handle sending a text message
  const onSendMessage = async (value) => {
    return conversation.send(value);
  };

  // MessageList component to render the list of messages
  const MessageList = ({ messages }) => {
    // Filter messages by unique id
    messages = messages.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i,
    );

    return (
        <ul className=" h-full pl-6 border rounded w-full pt-4">
          {messages.map((message, index) => (
            <li
              key={message.id}
              className="messageItem"
              title="Click to log this message to the console">
              <strong>
                {message.senderAddress === client.address ? "You" : "Bot"}:
              </strong>
              <span>{message.content}</span>
              
            </li>
          ))}
        </ul>
    );
  };

  // Function to handle input change (keypress or change event)
  const handleInputChange = (event) => {
    if (event.key === "Enter") {
      handleSend();
    } else {
      setInputValue(event.target.value);
    }
  };
  return (
    <div className={styles.Chat}>
      <div className={styles.messageContainer}>
        <MessageList messages={messageHistory} />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.inputField}
          onKeyPress={handleInputChange}
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Type your text here "
        />
        <button className={styles.sendButton} onClick={handleSend}>
          <AiOutlineSend/>
        </button>
      </div>
    </div>
  );
}

export default Chat;
