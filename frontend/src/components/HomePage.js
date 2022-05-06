import React, { useState, useEffect } from 'react';
import MessageContainer from './MessageContainer';
import CreateMessage from './CreateMessage';
import LoadingScreen from './LoadingScreen';

function HomePage() {
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
      <CreateMessage />
      {loading ? <LoadingScreen /> : <MessageContainer messages={messages} />}
    </div>
  );
}

export default HomePage;
