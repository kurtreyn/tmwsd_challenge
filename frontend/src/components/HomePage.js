import React from 'react';
// import Messages from './Messages';
import CreateMessage from './CreateMessage';
import LoadingScreen from './LoadingScreen';
import MessageContainer from './MessageContainer';
import Header from './Header';

function HomePage({ messages, setMessages, loading, setLoading }) {
  return (
    <div className="container-fluid page-container">
      <Header />
      <CreateMessage />
      {loading ? <LoadingScreen /> : <MessageContainer messages={messages} />}
    </div>
  );
}

export default HomePage;
