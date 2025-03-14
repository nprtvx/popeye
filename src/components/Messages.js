import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function Messages() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    socket.on('connect_error', (err) => {
      console.error('Connection error:', err);
    });

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
      socket.off('connect_error');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message = {
      text: newMessage,
      user: user.email
    };

    socket.emit('sendMessage', message);
    setNewMessage('');
  };

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.user}</strong>: {message.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Messages;
