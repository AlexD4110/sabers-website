import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'; // Web3Forms API endpoint

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validSubject, setValidSubject] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  const nameRef = useRef();
  const errRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(formData.name.length > 2);
    setValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email));
    setValidSubject(formData.subject.length > 2);
    setValidMessage(formData.message.length > 10);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validForm = validName && validEmail && validSubject && validMessage;
    if (!validForm) {
      setErrMsg("Invalid Entry");
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('subject', formData.subject);
    formDataToSubmit.append('message', formData.message);
    formDataToSubmit.append('access_key', '95f34085-33fb-44f3-9087-790bdfb80496'); // Replace with your Web3Forms access key

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setErrMsg(data.message || 'Failed to send message');
        errRef.current.focus();
      }
    } catch (err) {
      setErrMsg('No Server Response');
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Message Sent Successfully!</h1>
        </section>
      ) : (
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="text-center mb-4">Contact Us</h1>
              <p className="text-center">
                We’d love to hear from you! Please fill out the form below, and we'll get in touch with you shortly.
              </p>
              {errMsg && (
                <Alert ref={errRef} variant="danger" aria-live="assertive">
                  {errMsg}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    ref={nameRef}
                    isValid={validName}
                    isInvalid={formData.name && !validName}
                  />
                  <Form.Control.Feedback type="invalid">
                    <FontAwesomeIcon icon={faTimes} /> Name must be at least 3 characters long.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid">
                    <FontAwesomeIcon icon={faCheck} /> Looks good!
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    isValid={validEmail}
                    isInvalid={formData.email && !validEmail}
                  />
                  <Form.Control.Feedback type="invalid">
                    <FontAwesomeIcon icon={faTimes} /> Please enter a valid email.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid">
                    <FontAwesomeIcon icon={faCheck} /> Looks good!
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formSubject" className="mt-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter the subject"
                    required
                    isValid={validSubject}
                    isInvalid={formData.subject && !validSubject}
                  />
                  <Form.Control.Feedback type="invalid">
                    <FontAwesomeIcon icon={faTimes} /> Subject must be at least 3 characters long.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid">
                    <FontAwesomeIcon icon={faCheck} /> Looks good!
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formMessage" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    required
                    isValid={validMessage}
                    isInvalid={formData.message && !validMessage}
                  />
                  <Form.Control.Feedback type="invalid">
                    <FontAwesomeIcon icon={faTimes} /> Message must be at least 10 characters long.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid">
                    <FontAwesomeIcon icon={faCheck} /> Looks good!
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="mt-4"
                  disabled={!validName || !validEmail || !validSubject || !validMessage}
                >
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Contact;
