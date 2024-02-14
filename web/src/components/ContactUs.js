import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

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
    <FormContainer>
      <FormTitle>Fadlan, halkaan ku qor su'aasha aad rabtid in lagaaga jawaabo</FormTitle>
      <form onSubmit={sendEmail} ref={form}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <TextArea id="message" name="message" rows="5" required />
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Successfully sent! Thanks for reaching out.
        </Alert>
      )}
    </FormContainer>
  );
};

export default ContactForm;
