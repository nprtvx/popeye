import React, { useState, useEffect } from 'react';
import Peer from 'simple-peer';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Replace with your signaling server URL

const App = () => {
  const [peer, setPeer] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newPeer = new Peer({ initiator: true, trickle: false });
    setPeer(newPeer);

    socket.on('signal', (data) => {
      newPeer.signal(data);
    });

    newPeer.on('signal', (data) => {
      socket.emit('signal', data);
    });

    newPeer.on('data', (data) => {
      setMessages((prevMessages) => [...prevMessages, `Peer: ${data.toString()}`]);
    });

    return () => {
      newPeer.destroy();
    };
  }, []);

  const sendMessage = () => {
    peer.send(message);
    setMessages((prevMessages) => [...prevMessages, `You: ${message}`]);
    setMessage('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>E2EE Chat App</h1>
      <div style={{ marginBottom: '20px' }}>
        <h3>Messages</h3>
        <div
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            height: '200px',
            overflowY: 'scroll',
            background: '#f9f9f9',
          }}
        >
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
          style={{
            width: '80%',
            padding: '10px',
            marginRight: '10px',
            border: '1px solid #ccc',
          }}
        />
        <button onClick={sendMessage} style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none' }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default App;
