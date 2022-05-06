import React from 'react';

function Message({ messageId, messages }) {
  return messages.map((message) => {
    if (messageId === message.id) {
      return (
        <div className="row secret-message-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 secret-message-col">
            <p>{message.body}</p>
          </div>
        </div>
      );
    } else {
      return <div>Nothing to show here</div>;
    }
  });
}

export default Message;
