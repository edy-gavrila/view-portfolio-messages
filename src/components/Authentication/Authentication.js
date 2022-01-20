/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, { useRef, useState } from "react";
import classes from "./Authentication.module.css";
import { signInUser } from "../../api/signInOut";

function Authentication({ onAuthChanged }) {
  const userNameRef = useRef();
  const passwordRef = useRef();

  const [authError, setAuthError] = useState({
    isError: false,
    error: { code: null, message: "" },
  });

  const setErrorHandler = (error) => {
    setAuthError({
      isError: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  const clearErrorHandler = () => {
    setAuthError({
      isError: false,
      error: { code: null, message: "" },
    });
  };

  const authSuccessHandler = () => {
    clearErrorHandler();
    onAuthChanged();
  };

  const authenticate = (e) => {
    e.preventDefault();
    const credentials = {
      email: userNameRef.current.value,
      password: passwordRef.current.value,
    };
    signInUser(credentials, authSuccessHandler, setErrorHandler);
  };

  return (
    <div className={classes["login-card-container"]}>
      <h2>Please log in to see your messages</h2>
      <form className={classes["login-form"]} onSubmit={authenticate}>
        <label htmlFor="email">Admin Email</label>
        <input type="email" id="email" ref={userNameRef} required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} required />
        <input type="submit" value="Log In" />
        {authError.isError && (
          <div className={classes["error-container"]}>
            <p>{`Error: ${authError.error.code}`}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Authentication;
