import React from 'react';
// import Messages from './Messages';
import CreateMessage from './CreateMessage';
import LoadingScreen from './LoadingScreen';
import MessageContainer from './MessageContainer';

function HomePage({ messages, setMessages, loading, setLoading }) {
  return (
    <div>
      <CreateMessage />
      {loading ? <LoadingScreen /> : <MessageContainer messages={messages} />}
    </div>
  );
}

export default HomePage;
