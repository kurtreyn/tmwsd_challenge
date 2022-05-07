import React, { useEffect } from 'react';
import CreateMessage from './CreateMessage';
import LoadingScreen from './LoadingScreen';
import MessageContainer from './MessageContainer';
import Header from './Header';

function HomePage({ messages, fetchMessages, loading }) {
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="container-fluid page-container">
      <Header />
      <CreateMessage />
      {loading ? <LoadingScreen /> : <MessageContainer messages={messages} />}
    </div>
  );
}

export default HomePage;
