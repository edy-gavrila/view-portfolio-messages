import { initializeApp } from "firebase/app";
import firebaseConfig from "../credentials/firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
console.log("initializing firestore");
const db = getFirestore(app);

const getMessageData = async () => {
  const data = [];
  const messagesCol = collection(db, "messages");

  const messagesSnapShot = await getDocs(messagesCol);
  messagesSnapShot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};

export { getMessageData };
