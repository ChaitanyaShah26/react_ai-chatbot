import { useState } from 'react';
import './App.css'
import { Chat } from './components/Chat/Chat';
import { Controls } from './components/Controls/Controls';

function App() {
  const [messages, setMessages] = useState(MESSAGES);

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
      <Controls />
    </div>      
    </>
  )
}

const MESSAGES = [
  {
    role: 'user',
    content: 'What is the capital of India?',
  },
  {
    role: 'assistant',
    content: 'New Delhi',
  }
]

export default App;
