/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from "react";
import classes from "./Messages.module.css";

import MessageCard from "../MessageCard/MessageCard";
import { getMessagesFromFirebaseDb } from "../../api/database";

function Messages() {
  const [messages, setMessages] = useState([]);

  const refreshMessageData = () => {
    getMessagesFromFirebaseDb().then((data) => {
      data.sort((a, b) => b.id - a.id);
      setMessages([...data]);
    });
  };
  useEffect(() => {
    refreshMessageData();
  }, []);

  const messageCards = messages.map((message) => (
    <MessageCard
      data={message}
      key={message.id}
      onRefreshMessageData={refreshMessageData}
    />
  ));
  return <main className={classes.main}>{messageCards}</main>;
}

export default Messages;
