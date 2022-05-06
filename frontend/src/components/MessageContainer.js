import React from 'react';
import Messages from './Messages';

function MessageContainer({ messages }) {
  return (
    <div className="container-fluid secret-message-container">
      <div className="row message-container-row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 message-container-col">
          <Messages messages={messages} />
        </div>
      </div>
    </div>
  );
}

export default MessageContainer;
