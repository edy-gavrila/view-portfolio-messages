/* eslint-disable quotes */
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const signInUser = (credentials, onSucces, onFail) => {
  const { email, password } = credentials;
  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence)
    .then(() => signInWithEmailAndPassword(auth, email, password))
    .then(() => {
      onSucces();
    })
    .catch((error) => {
      onFail(error);
    });
};

const signOutUser = (onSuccess, onFail) => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      onSuccess();
    })
    .catch((error) => {
      onFail(error);
    });
};

const isUserSignedIn = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    return true;
  }
  return false;
};

export { signInUser, signOutUser, isUserSignedIn };
