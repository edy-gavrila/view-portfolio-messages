/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import firebaseConfig from "../credentials/firebaseConfig";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const getMessageData = async () => {
  const data = [];
  const messagesCol = collection(db, "messages");

  const messagesSnapShot = await getDocs(messagesCol);
  messagesSnapShot.forEach((document) => {
    data.push({ ...document.data(), id: document.id });
  });
  console.log(data);
  return data;
};

const deleteMessage = async (id) => {
  console.log(doc(db, "messages", id));
  const result = await deleteDoc(doc(db, "messages", id));
  return result;
};

export { getMessageData, deleteMessage };
