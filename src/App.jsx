import { use, useState } from 'react';
import './App.css'
import { Chat } from './components/Chat/Chat';
import { Controls } from './components/Controls/Controls';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Loader } from './components/Loader/loader';

const googleai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);
const gemini = googleai.getGenerativeModel({ model: "gemini-2.5-flash" });
const chat = gemini.startChat({ history: [] });

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({content, role: 'user'});
    setIsLoading(true);
    try {
      const result = await chat.sendMessage(content);
      addMessage({content: result.response.text(), role: 'assistant'});
    } catch (error) {
      addMessage({content: "Sorry, I couldn't process your request.", role: 'system'});
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
    <div className="app">
      {isLoading && <Loader />}
      <header className='header'>
        <img className="logo" src="public/chatbot-icon.png"></img>
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
