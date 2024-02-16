import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, Form, Button, Alert } from 'react-bootstrap';

const ContactForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4rna5mw', 'template_aqf769g', form.current, {
        publicKey: 'ut_aschmqjGgXsNFv',
      })
      .then(
        () => {
          setShowAlert(true); // Show the alert on successful submission
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="mt-4 mb-4" style={{ width: '100vw' }}>
      <Card className="mx-auto" style={{ maxWidth: '600px' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Fadlan, halkaan ku qor su'aasha aad rabtid in lagaaga jawaabo</Card.Title>
          <Form onSubmit={sendEmail} ref={form}>
            {showAlert && (
              <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                Successfully sent! Thanks for reaching out.
              </Alert>
            )}
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="name" required />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" required />
            </Form.Group>
            <Form.Group controlId="message" className="mb-4"> {/* Added margin-bottom here */}
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={5} name="message" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactForm;
