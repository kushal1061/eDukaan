import React, { useState } from 'react'
import "./chatbot.css"
import chatbot from "../assets/chatbot.svg"
import Chatform from './Chatform'
import ChatMessage from './ChatMessage'
import { Send, MessageCircle, MinusCircle } from 'lucide-react' // Import icons

function Chatbot() {
  const[chatHistory,setHistory]=useState([]);
  const[isOpen, setIsOpen] = useState(false);
  const generateBotResponse=async (history)=>{
    const updateHistory=(text)=>{
      setHistory(prev => [...prev.filter(msg => msg.text !=="Thinking..."), {role: "model",
        text}])
    }
    history=history.map(({role,text})=>({role,parts:[{text}]}));

      const requestOptions={
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({contents: history})
      }
      try{
        const response=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBt4ntlvYhVkQgc55A_uxkNpsfRnIQ2t5g",requestOptions);
        const data =await response.json();
        if(!response.ok) throw new Error(data.error.message || "something went wrong");

        // clean and update chat history with bot's response
        console.log(data);
        const apiResponseText=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g ,"$1").trim();
        console.log(apiResponseText);
        updateHistory(apiResponseText);
      }
      catch(error){
        console.log(error);
      }
  };
  return (
    <>
     {/* Floating button to open chat when closed */}
     {!isOpen && (
        <button className="chat-toggle-btn" onClick={() => setIsOpen(true)}>
          <MessageCircle size={24} />
          Chat with us
        </button>
      )}
      <div className={`chatBot ${isOpen ? 'open' : ''}`}>
        <div className="chatBotHeader">
          <div>
            <img src={chatbot} alt="" /> Chat Bot
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <MinusCircle size={24} />
          </button>
        </div>
        <div className="chatarea">
          <div className='bot-message'>
            <img src={chatbot} alt="" />
            <p>
              hi There! <br />
              how can i help you there
            </p>
          </div>
          {chatHistory.map((chat,index)=>(
            <ChatMessage key={index} chat={chat} />
          ))}
          
        </div>
        <Chatform chatHistory={chatHistory} setHistory={setHistory}  generateBotResponse={generateBotResponse}></Chatform>
      </div>
    </>
  )
}

export default Chatbot