import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';

const EventsAndFlyers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClose = () => setShowModal(false);

  const handleShow = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const events = [
    {
      id: 1,
      title: 'Season Opener',
      date: 'December 2nd, 2024',
      description:
        'Come cheer on our teams as we kick off the spring season with exciting games!',
      imageUrl: '../images/VernonNew.svg', 
    },
    {
      id: 2,
      title: 'Community Fundraisers',
      date: 'TBD',
      description:
        'We will be doing fundraising initiatives to help the program thrive!',
      imageUrl: '../images/Image2.jpg', 
    },
  ];

  return (
    <Container className="mt-5">
      <Row>
        {events.map((event, index) => (
          <Col key={event.id} xs={12} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay for each card
            >
              <Card className="h-100 shadow-sm card-hover">
                <Card.Img
                  variant="top"
                  src={event.imageUrl}
                  alt={event.title}
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {event.date}
                  </Card.Subtitle>
                  <Card.Text>
                    {event.description.length > 100
                      ? event.description.substring(0, 100) + '...'
                      : event.description}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleShow(event)}>
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {selectedEvent && (
        <Modal
          show={showModal}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName="animated-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedEvent.title}</Modal.Title>
          </Modal.Header>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Modal.Body>
              <Card.Img
                variant="top"
                src={selectedEvent.imageUrl}
                alt={selectedEvent.title}
                className="modal-img"
              />
              <p>
                <strong>Date:</strong> {selectedEvent.date}
              </p>
              <p>{selectedEvent.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </motion.div>
        </Modal>
      )}
    </Container>
  );
};

export default EventsAndFlyers;
