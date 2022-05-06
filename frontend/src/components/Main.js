import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
// import MessageContainer from './MessageContainer';
import Message from './Message';
// import Messages from './Messages';

function Main() {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:2000/');
      let data = await response.json();
      setMessages(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [messages.length]);

  console.log(messages);
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage
              messages={messages}
              setMessages={setMessages}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route
          exact
          path="/messages/:messageId"
          element={
            <Message
              messages={messages}
              setMessages={setMessages}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
