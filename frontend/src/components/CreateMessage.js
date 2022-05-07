import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function CreateMessage() {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  async function handlePost() {
    const theHeaders = new Headers();
    theHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      title: title,
      body: body,
    });

    const requestOptions = {
      method: 'POST',
      headers: theHeaders,
      body: raw,
      redirect: 'follow',
    };
    setLoading(true);
    try {
      await fetch('http://localhost:2000/new', requestOptions);
    } catch (errors) {
      console.log(errors);
      alert(errors.message);
    }
  }

  return (
    <div className="row create-message-row">
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <h3 className="text-center">Create a new message</h3>
        <Form className="text-center">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              placeholder="Message"
              rows={3}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="secondary" type="submit" onClick={handlePost}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreateMessage;
