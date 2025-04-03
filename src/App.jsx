import { useState } from 'react';
import './App.css'
import { Chat } from './components/Chat/Chat';
import { Controls } from './components/Controls/Controls';

function App() {
  const [messages, setMessages] = useState([]);

  function handleContentSend(content) {
    setMessages((prevMessages) => [...prevMessages, {content, role: 'user'}]);
  }

  return (
    <>
    <div className="app">
      <header className='header'>
        <img className="logo" src="/chatbot-icon.png"></img>
        <h2 className="title">AI Chatbot</h2>
      </header>

      <div className="chatContainer">
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleContentSend}/>
    </div>      
    </>
  )
}

export default App;
