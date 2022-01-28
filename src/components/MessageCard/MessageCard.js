/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { deleteMessageFromFirebaseDb } from "../../api/database";
import UserIcon from "../../UI/Icons/UserIcon";
import classes from "./MessageCard.module.css";

function MessageCard({ data, onRefreshMessageData }) {
  const deleteMessageHandler = () => {
    deleteMessageFromFirebaseDb(data.id)
      .then(() => {
        console.log("Message deleted");
        onRefreshMessageData();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={classes["message-card"]}>
      <div className={classes["user-info"]}>
        <UserIcon />
        <div className={classes["name-container"]}>
          <h2>{data.name}</h2>
          <small>{data.email}</small>
        </div>
      </div>
      <div className={classes["message-container"]}>
        <h3>{data.subject}</h3>
        <p>{data.message}</p>
      </div>

      <div className={classes["btns-container"]}>
        <button
          type="button"
          className={`${classes.btn} ${classes["email-btn"]}`}
          onClick={() => window.open(`mailto:${data.email}`)}
        >
          Email
        </button>
        <button
          type="button"
          className={`${classes.btn} ${classes["delete-btn"]}`}
          onClick={deleteMessageHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MessageCard;
