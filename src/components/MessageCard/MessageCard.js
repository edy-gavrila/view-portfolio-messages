import React from "react";
import classes from "./MessageCard.module.css";

const MessageCard = ({ data }) => {
  return (
    <div className={classes["message-card"]}>
      <h2>{data.name}</h2>
      <small>{data.email}</small>
      <br />
      <br />
      <h3>{data.subject}</h3>
      <p>{data.message}</p>
      <div className={classes["btns-container"]}>
        <button className={`${classes.btn} ${classes["email-btn"]}`}>
          Email
        </button>
        <button className={`${classes.btn} ${classes["delete-btn"]}`}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MessageCard;
