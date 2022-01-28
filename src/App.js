/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";

import Authentication from "./components/Authentication/Authentication";
import { attemptToRestoreUser } from "./api/signInOut";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const setUserSignedIn = () => {
    setIsAuth(true);
  };

  const setUserSignedOut = () => {
    setIsAuth(false);
  };

  useEffect(() => {
    attemptToRestoreUser(setUserSignedIn, setUserSignedOut);
  }, []);
  return (
    <div className="App">
      <Header isAuth={isAuth} onSignOut={() => setIsAuth(false)} />
      {(isAuth && <Messages />) || (
        <Authentication onAuthChanged={() => setIsAuth(true)} />
      )}
    </div>
  );
}

export default App;
