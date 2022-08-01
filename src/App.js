import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import config from "./Config";
import MessageParser from "./MessageParser";
import './App.css';

function App() {
  return (
    <div className="App">
      <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
    </div>
  );
}

export default App;
