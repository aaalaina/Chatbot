//import React from "react";

// ActionProvider starter code
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc
    //  createClientMessage,
    //  stateRef,
    //  createCustomMessage,
    //  ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
    //  this.createClientMessage = createClientMessage;
    //  this.stateRef = stateRef;
    //  this.createCustomMessage = createCustomMessage;
   }

   greet(){
    const greetMsg = this.createChatBotMessage("Hey! How's it going?")
    this.updateChatBotState(greetMsg)
  }
  updateChatBotState(message){
    this.setState(prevState => ({
        ...prevState, messages : [...prevState.messages, message]
    }))
  }
 }
 
 export default ActionProvider;