import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import { handleChatbot } from '../services';
import { ChatBotLogo } from '../constant';
import 'react-chat-widget/lib/styles.css';
import '../assets/styles/Chatbot.css';



class Chatbot extends Component {

  handleNewUserMessage = (msg) => {
    handleChatbot(msg)
      .then(res => {
        // console.log(res);
        // console.log(res.data);        
        addResponseMessage(res.data.chatbotResponseMsg);
      }).catch(error => {
        // console.log(error.response)
        // console.log(error.response.data)
      });
  }


  render() {
    return (
      <div className='App'>
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar = {ChatBotLogo}
          title='Welcome to the TetraByte Travel ChatBox'
          subtitle=''
          senderPlaceHolder ='Write any question you need...'
          badge=' '
        />
      </div>
    );
  }
}


export { Chatbot };