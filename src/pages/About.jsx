import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Container fluid className="p-0">
        {/* Hero Section */}
        <Row noGutters>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src="/images/Practice1.JPG" alt="New England Sabers Basketball" className="img-fluid" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center" style={{ padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <Card.Title className="display-4">New England Sabers AAU Basketball</Card.Title>
                <Card.Text className="lead">
                  Elite Development for Grades 4-11 in CT & Western MA
                </Card.Text>
                <Button 
  style={{ backgroundColor: '#7BAFD4', borderColor: '#7BAFD4', color: 'white' }} 
  size="lg" 
  href="/SignUp"
>
  Join Our Elite Program
</Button>

              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>

        {/* Carousel Section */}
        <Row className="justify-content-center mb-4">
          <Col md={10}>
            <Carousel>
              <Carousel.Item>
                <img src="/images/sabers-training.jpg" className="d-block w-100 img-fluid" alt="AAU Training" />
                <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '10px' }}>
                  <h3>Elite AAU Competition</h3>
                  <p>Competing against top regional talent</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="/images/cam.jpeg" className="d-block w-100 img-fluid" alt="Expert Coaching" />
                <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '10px' }}>
                  <h3>Professional Coaching Staff</h3>
                  <p>Director Alex Deane leading in development.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="/images/sabers-tournament.jpg" className="d-block w-100 img-fluid" alt="Tournament Play" />
                <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '10px' }}>
                  <h3>Tournament Exposure</h3>
                  <p>*Competing in premier AAU events across New England and more</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        {/* Program Details Section */}
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-4 shadow-sm">
              <Card.Body>
                <Card.Title className="text-center mb-4">About New England Sabers AAU</Card.Title>
                <Card.Text style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                  <p className="h5 text-muted mb-4 text-center">
                    $1,000 Program Fee Includes: Uniform Package, Tournament Fees, and Professional Coaching
                  </p>
                  <p>
                    The <strong>New England Sabers AAU Basketball Program</strong> is a premier competitive travel team 
                    serving athletes in grades 4-11 across Connecticut and Western Massachusetts. Founded and directed 
                    by <strong>Alex Deane</strong> with elite coaching, our program focuses on developing 
                    complete basketball players through elite competition and professional training.
                  </p>
                  <p>
                    <strong>Program Highlights:</strong>
                  </p>
                  <ul className="mb-4">
                    <li>Competition in 8+ regional tournaments annually</li>
                    <li>College recruitment support for high school athletes</li>
                    <li>Strength and conditioning programming</li>
                    <li>Academic progress monitoring</li>
                  </ul>
                  <p>
                    Our program structure includes:
                  </p>
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <strong>Youth Division (Grades 4-8):</strong>
                      <ul>
                        <li>Fundamental skill development</li>
                        <li>Introduction to competitive systems</li>
                        <li>2 practices/week + weekend tournaments 2 to 3 times a month</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <strong>High School Division (Grades 9-11*):</strong>
                      <ul>
                        <li>College-prep training regimen</li>
                        <li>Exposure tournaments</li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Serving communities from <strong>all over Connecticut to  Western Mass</strong>, we draw top talent from
                    <span className="text-muted">
                      across the states!
                    </span>
                  </p>
                  <div className="text-center mt-5">
  <Button 
    style={{ backgroundColor: '#7BAFD4', borderColor: '#7BAFD4', color: 'white' }} 
    size="lg" 
    href="/SignUp" 
    className="mx-2"
  >
    Register Now
  </Button>
  <Button 
    style={{ borderColor: '#7BAFD4', color: '#7BAFD4' }} 
    variant="outline" 
    size="lg" 
    href="/Contact" 
    className="mx-2"
  >
    Schedule Tryout
  </Button>
</div>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default About;