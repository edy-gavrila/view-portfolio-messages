import "./App.css";
import Header from "./components/Header/Header";
import MessageCard from "./components/MessageCard/MessageCard";
import { getMessageData } from "./api/database";
import { useEffect, useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getMessageData().then((data) => {
      data.sort((a, b) => {
        return a.id - b.id;
      });
      setMessages([...data]);
    });
  }, []);
  console.log(messages);

  const messageCards = messages.map((message) => (
    <MessageCard data={message} key={message.id} />
  ));
  return (
    <div className="App">
      <Header />
      <main className="main">{messageCards}</main>
    </div>
  );
}

export default App;
