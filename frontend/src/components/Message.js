import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Message({ messages }) {
  useEffect(() => {
    document.addEventListener(
      'click',
      selfDestruct(id, dispMessage[0].title, dispMessage[0].body)
    );
    return function cleanup() {
      document.removeEventListener(
        'click',
        selfDestruct(id, dispMessage[0].title, dispMessage[0].body)
      );
    };
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state.id;
  let dispMessage = messages.filter((message) => message._id === id);

  function selfDestruct(delId, title, body) {
    let theHeaders = new Headers();
    theHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      id: delId,
      title: title,
      body: body,
    });

    let requestOptions = {
      method: 'DELETE',
      headers: theHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`http://localhost:2000/${delId}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }

  return (
    <>
      <div className="row go-home-row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 go-home-col">
          <Button onClick={() => navigate('/')}>Go Back to Messages</Button>
        </div>
      </div>
      <div className="row secret-message-row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 secret-message-col">
          <p>{dispMessage[0].body}</p>
        </div>
      </div>
    </>
  );
}

export default Message;
