import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

export default function BoardMembers() {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentImage('');
  };

  const president = {
    name: "Alex Deane",
    role: "President",
    image: "/images/Alex.JPG",
    bio: "A recent graduate from the University of Connecticut, I restarted the program driven by my passion for working with kids and creating impactful youth programs."
  };

  const members = [
    {
      name: "Melissa Szczycinski",
      role: "Vice President",
      image: "/images/Melissa.jpg",
      bio: "As a psychiatrist with her own practice, Melissa oversees the program's vice-presidential duties, bringing her expertise in mental health to support our youth basketball initiatives."
    },
    {
      name: "Kevin Coniff",
      role: "Treasurer",
      image: "/images/Kevin.png",
      bio: "With a background in finance, Kevin manages the program's finances, ensuring fiscal responsibility and sustainable growth for our organization."
    },
    {
      name: "Jess Coniff",
      role: "Coach",
      image: "/images/Jess.JPEG",
      bio: "Jess leads our sponsorship and fundraising initiatives, working to secure partnerships that help the program thrive."
    }
  ];

  return (
    <Container fluid className="min-vh-100 bg-light py-5">
      <Container>
        <h1 className="text-center mb-5" style={{ fontWeight: 'bold', color: '#343a40' }}>Our Board</h1>

        {/* President Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-5"
          style={{ maxWidth: '750px' }}
        >
          <Card className="shadow-lg" style={{ borderRadius: '10px', overflow: 'hidden' }}>
            <Row className="no-gutters">
              <Col xs={4} className="d-flex align-items-center justify-content-center bg-primary">
                <Button variant="link" onClick={() => handleImageClick(president.image)} style={{ padding: 0 }}>
                  <Card.Img
                    src={president.image}
                    alt={president.name}
                    style={{
                      height: '250px',
                      width: '250px',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      borderRadius: '50%',
                    }}
                  />
                </Button>
              </Col>
              <Col xs={8}>
                <Card.Body className="p-4">
                  <Card.Subtitle className="text-primary text-uppercase mb-2" style={{ fontSize: '1rem' }}>
                    {president.role}
                  </Card.Subtitle>
                  <Card.Title style={{ fontSize: '1.75rem', fontWeight: '600' }}>{president.name}</Card.Title>
                  <Card.Text style={{ fontSize: '1.2rem', color: '#6c757d' }}>{president.bio}</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </motion.div>

        {/* Board Members Grid */}
        <Row className="g-4">
          {members.map((member, index) => (
            <Col xs={12} sm={6} md={6} lg={4} key={member.name} className="d-flex justify-content-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ maxWidth: '550px', width: '100%' }}
              >
                <Card className="shadow-sm h-100" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                  <Button variant="link" onClick={() => handleImageClick(member.image)} style={{ padding: 0 }}>
                    <Card.Img
                      variant="top"
                      src={member.image}
                      alt={member.name}
                      style={{
                        height: '600px',
                        width: '100%',
                        objectFit: 'cover',
                        objectPosition: member.name === "Kevin Coniff" ? 'top 70%' : 'top' // Custom position to lower Kevin's image
                      }}
                    />
                  </Button>
                  <Card.Body className="text-center p-4">
                    <Card.Subtitle className="text-primary text-uppercase mb-2" style={{ fontSize: '1rem' }}>
                      {member.role}
                    </Card.Subtitle>
                    <Card.Title style={{ fontWeight: 'bold', fontSize: '1.75rem' }}>{member.name}</Card.Title>
                    <Card.Text style={{ color: '#6c757d', fontSize: '1.2rem' }}>{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for Full Image */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body className="p-0">
          <img src={currentImage} alt="Full Size" style={{ width: '100%', height: 'auto' }} />
        </Modal.Body>
      </Modal>
    </Container>
  );
}
