//import React from "react";


// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }

    parse(message) {
      //console.log(message)
      const lcmessage = message.toLowerCase();
      if(lcmessage.includes("hello")||lcmessage.includes("hi")||lcmessage.includes("wassup")){
        this.actionProvider.greet();
      }
    }
  }
  
  export default MessageParser;