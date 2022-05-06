import React from 'react';
import Messages from './Messages';

function MessageContainer({ messages }) {
  return (
    <div className="row message-container-row">
      <Messages messages={messages} />
    </div>
  );
}

export default MessageContainer;
