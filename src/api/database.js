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

const firebaseAppReference = initializeApp(firebaseConfig);

const fireStoreDatabase = getFirestore(firebaseAppReference);

const getMessagesFromFirebaseDb = async () => {
  const messagesData = [];
  const messagesDbReference = collection(fireStoreDatabase, "messages");

  const messagesSnapShot = await getDocs(messagesDbReference);
  messagesSnapShot.forEach((document) => {
    messagesData.push({ ...document.data(), id: document.id });
  });
  return messagesData;
};

const deleteMessageFromFirebaseDb = async (id) => {
  const result = await deleteDoc(doc(fireStoreDatabase, "messages", id));
  return result;
};

export { getMessagesFromFirebaseDb, deleteMessageFromFirebaseDb };
