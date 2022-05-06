import React from 'react';

function Messages({ messages }) {
  return messages.map((item) => {
    return (
      <div
        className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 message-container-col"
        key={item.id}
      >
        <div className="row">
          <h1>{item.title}</h1>
        </div>
        <div className="row">
          <p>{item.body}</p>
        </div>
      </div>
    );
  });
}

export default Messages;
