import React from "react";
import classes from "./MessageCard.module.css";

const MessageCard = () => {
  const msgData = {
    name: "John Doe",
    email: "johnDoe@email.com",
    subject: "Let's get in touch!",
    message:
      "Hi there, I've been through your portfolio and it looks awesome. I have a project in mind for which your skills would be perfect. If you are interested to hear more, why not get in touch? Cheers",
  };
  return (
    <div className={classes["message-card"]}>
      <h2>{msgData.name}</h2>
      <email>{msgData.email}</email>
      <br />
      <br />
      <h3>{msgData.subject}</h3>
      <p>{msgData.message}</p>
      <button>Email</button>
      <button>Delete</button>
    </div>
  );
};

export default MessageCard;
