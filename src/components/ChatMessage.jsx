import React from 'react'
import chatbot from "../assets/chatbot.svg"  // Import the chatbot icon

function ChatMessage({chat}) {
  if (chat.role === "model") {
    return (
      <div className="bot-message">
        <img src={chatbot} alt="Bot" />
        <p className="msg-text">{chat.text}</p>
      </div>
    )
  }
  
  return (
    <div className="user-message">
      <p className="msg-text">{chat.text}</p>
    </div>
  )
}

export default ChatMessage