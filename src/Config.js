//import React from "react";

// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: "Alaina's testbot",
  initialMessages: [createChatBotMessage(`Hey! If you see this message then you are looking at Alaina's tester chatbot! Feel free to send me a message!`)],
  customStyles: {
  botMessageBox: {
    backgroundColor: "#DAF7A6"
  },
  chatButton:{ 
    backgroundColor: "#DAF7A6"
  },
},
}

export default config;