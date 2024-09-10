import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faCheck } from '@fortawesome/free-solid-svg-icons'; // Import the icons

const PricingPage = () => {
  return (
    <Container className="my-5">
      {/* Pricing Section */}
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title className="text-center text-primary mb-4">Pricing Page</Card.Title>
              <Card.Text className="text-center">
                The price for the league this year is set at <strong>$230</strong> for approximately 16–20 games. This fee includes the following:
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Access to all league games, including playoffs</ListGroup.Item>
                <ListGroup.Item>Team jerseys provided for each participant</ListGroup.Item>
                <ListGroup.Item>Certified referees for every game</ListGroup.Item>
                <ListGroup.Item>Access to practice facilities on designated days</ListGroup.Item>
                <ListGroup.Item>Post-season awards and recognition ceremony</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Important Information Section */}
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title className="text-center text-danger mb-4">Important Information</Card.Title>
              <Card.Text>Here are some important details you should be aware of:</Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Registration Deadline:</strong> All participants must register for tryouts. Tryouts will tentatively be held around <strong>October 21–October 28th</strong>.</ListGroup.Item>
                <ListGroup.Item><strong>Game Schedule:</strong> Games will be held on weekends, with exact dates to be announced.</ListGroup.Item>
                <ListGroup.Item><strong>Age Groups:</strong> The league is open to participants in Grades 5th through 8th.</ListGroup.Item>
                <ListGroup.Item><strong>Location:</strong> Games will be held in Vernon and surrounding areas.</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Payment Methods Section */}
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title className="text-center text-success mb-4">Payment Methods</Card.Title>
              <Card.Text>
                You can pay the registration fee using the following methods:
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center">
                  {/* Square logo image */}
                  <img 
                    src="../images/square.jpg" // Update the path to your actual file location
                    alt="Square Logo"
                    width="40"
                    height="40"
                    className="me-2" 
                  />
                  Credit/Debit Card via our Square page by clicking&nbsp;   <a href="https://square.link/u/ewnnNB1i" className="text-primary"> here </a>.

                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="me-2" />
                  Cash
                </ListGroup.Item>
                <ListGroup.Item>
        <FontAwesomeIcon icon={faCheck} className="me-2" />
        Check
      </ListGroup.Item>
              </ListGroup>
              <Card.Text className="mt-4">
                If you have any questions, feel free to <a href="/contact" className="text-primary">contact us</a>.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PricingPage;
