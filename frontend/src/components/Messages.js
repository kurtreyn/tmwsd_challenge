import React from 'react';
import { Link } from 'react-router-dom';

function Messages({ messages }) {
  return messages.map((message, i) => {
    return (
      <div className="row message-container-row" key={i}>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 message-container-col">
          <div className="row">
            <Link to={`/messages/${message._id}`} state={{ id: message._id }}>
              <h2>{message.title}</h2>
            </Link>
          </div>
        </div>
      </div>
    );
  });
}

export default Messages;
