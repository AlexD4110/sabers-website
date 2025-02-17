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
                    by <strong>Alex Deane</strong> - former UConn Women's Basketball Practice Squad Player with years of experience in AAU - 
                    our program brings championship-level experience to player development.
                  </p>
                  {/* New Experience Section */}
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <Card className="h-100 shadow-sm">
                        <Card.Body>
                          <Card.Title>Championship Pedigree</Card.Title>
                          <Card.Text>
                            As a member of Geno Auriemma's UConn Huskies practice squad, I trained daily with 11x National Champions,
                            executing opposing teams' game plans to prepare the nation's top womens program for championship runs. This experience
                            shaped our program's emphasis on:
                            <ul>
                              <li>Detail-oriented preparation</li>
                              <li>High basketball IQ development</li>
                              <li>Championship habits in practice</li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="col-md-6">
                      <Card className="h-100 shadow-sm">
                        <Card.Body>
                          <Card.Title>AAU: My Formative Journey</Card.Title>
                          <Card.Text>
                            My own AAU experience forged both player and character development:
                            <ul>
                              <li>Competed in 200+ games across 8 states</li>
                              <li>Learned resilience through tough losses, esspecially as a younger player</li>
                              <li>Developed leadership as team captain</li>
                              <li>Built lifelong brotherhoods with teammates</li>
                            </ul>
                            These experiences directly inform our holistic approach to developing athletes and young men.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  {/* New Philosophy Section */}
                  <blockquote className="blockquote text-center my-5">
                    <p className="mb-0 font-italic">
                      "AAU basketball taught me that greatness is earned in empty gyms long before the bright lights come on. 
                      Our program instills that same work ethic and mental toughness that builds champions on the court 
                      and in life."
                    </p>
                    <footer className="blockquote-footer mt-2">Alex Deane, Program Director</footer>
                  </blockquote>

                  <p><strong>Program Highlights:</strong></p>
                  <ul>
                    <li>Competition in 8+ regional tournaments annually</li>
                    <li>College recruitment support for high school athletes</li>
                    <li>Strength and conditioning programming</li>
                    <li>Academic progress monitoring</li>
                  </ul>
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
