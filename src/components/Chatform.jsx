// Chatform.jsx
import React from 'react'
import { useRef } from 'react';
import { Send } from 'lucide-react'

const Chatform = ({chatHistory, setHistory, generateBotResponse}) => {
    const inputRef = useRef();
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        
        inputRef.current.value = "";
        setHistory(prev => [...prev, {role: "user", text: userMessage}]);
        
        setTimeout(() => {
          setHistory(prev => [...prev, {role: "model", text: "Thinking..."}]);
          generateBotResponse([...chatHistory, {role: "user", text: userMessage}]);
        }, 600);
    }
    
    return (
        <form action="#" className='chat-form' onSubmit={handleFormSubmit}>
            <input 
              ref={inputRef} 
              type="text" 
              placeholder='Message..' 
              className='message-input' 
              required 
            />
            <button className='send-button' type="submit">
                <Send size={20} />
            </button>
        </form>
    )
}

export default Chatform