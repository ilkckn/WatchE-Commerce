import React, { useState, useEffect, useRef } from 'react';
import '../styles/Chat.css';
import { IoMdCloseCircle } from "react-icons/io";

function Chat({ onClose }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Enter tuşuna basıldığında textarea'nın otomatik alt satıra geçmesini engeller
      sendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className='chatContainer'>
      <div className='chatHeader'>
        <h2>Chat</h2>
        <button className='closeBtn' onClick={onClose}>
        <IoMdCloseCircle />
        </button>
      </div>
      <div className='chatBody'>
        {messages.map((msg, index) => (
          <div key={index} className='message'>
            {msg}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className='chatInput'>
        <textarea
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown} // Enter tuşuna basıldığında handleKeyDown fonksiyonunu çağırır
          placeholder='Type your message...'
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
