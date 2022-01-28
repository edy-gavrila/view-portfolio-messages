/* eslint-disable quotes */
import {
  browserLocalPersistence,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const signInUser = (credentials, onSignInSucces, onSignInFail) => {
  const { email, password } = credentials;
  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence)
    .then(() => signInWithEmailAndPassword(auth, email, password))
    .then(() => {
      onSignInSucces();
    })
    .catch((error) => {
      onSignInFail(error);
    });
};

const signOutUser = (onSignOutSuccess, onSignOutFail) => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      onSignOutSuccess();
    })
    .catch((error) => {
      onSignOutFail(error);
    });
};

const attemptToRestoreUser = (onUserLoggenIn, OnUserLoggedOut) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      onUserLoggenIn();
    } else {
      OnUserLoggedOut();
    }
  });
};

export { signInUser, signOutUser, attemptToRestoreUser };
