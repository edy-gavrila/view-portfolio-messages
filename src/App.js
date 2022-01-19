import "./App.css";
import Header from "./components/Header/Header";
import MessageCard from "./components/MessageCard/MessageCard";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <MessageCard />
      </main>
    </div>
  );
}

export default App;
