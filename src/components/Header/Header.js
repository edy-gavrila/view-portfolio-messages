/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import classes from "./Header.module.css";
import { signOutUser } from "../../api/signInOut";

function Header({ isAuth, onSignOut }) {
  const signOutHandler = () => {
    signOutUser(onSignOut, (error) => console.log(error));
  };
  return (
    <header className={classes.header}>
      <h1>Messages</h1>
      {isAuth && (
        <button type="button" onClick={signOutHandler}>
          Sign Out
        </button>
      )}
    </header>
  );
}

export default Header;
