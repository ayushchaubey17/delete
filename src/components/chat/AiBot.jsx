import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';



const steps = [
  {
      id: '0',
      message: 'Hello who are you??',

      // This calls the next id
      // i.e. id 1 in this case
      trigger: '1',
  }, {
      id: '1',

      // This message appears in
      // the bot chat bubble
      message: "what's your goodName",
      trigger: '2'
  }, {
      id: '2',

      // Here we want the user
      // to enter input
      user: true,
      trigger: '3',
  }, {
      id: '3',
      message: " hi {previousValue}, how can I help you?",
      trigger: 4
  }, {
      id: '4',
      options: [

          // When we need to show a number of
          // options to choose we create alist
          // like this
          { value: 1, label: 'View Listings' },
          { value: 2, label: 'Sign In' },
          { value: 3, label: 'Create Account' },
          { value: 4, label: 'About us' },
          { value: 5, label: 'Contact us' },

      ],
 
  
  }
];

const theme = {
  background: '#F2F2F2',
  headerBgColor: '#071437',
  headerFontSize: '20px',
  botBubbleColor: '#394A4D',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};


const config = {
  botAvatar: "https://t4.ftcdn.net/jpg/02/14/06/59/360_F_214065903_0DiL7CSBjAEOPDUqXlgnhkh2j4nmgCWX.jpg",
  floating: true,
};

export default function AiBot() {
  return (
    <div>
      <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="StayHomely bots"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
    </div>
  )
}
