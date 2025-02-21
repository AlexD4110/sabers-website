import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faCheck, faBasketball, faTrophy, faShirt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import PricingAndDiscounts from '../components/PricingAndDiscounts';

const PricingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Container className="my-5">
        {/* Pricing Section */}
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg border-primary">
              <Card.Body>
                <Card.Title className="text-center text-primary mb-4 display-6">
                  <FontAwesomeIcon icon={faBasketball} className="me-2" />
                  AAU Program Pricing
                </Card.Title>

                {/* Our updated Pricing & Discounts */}
                <PricingAndDiscounts />

                {/* Fee note */}
                <p className="text-center mt-4">
                  Program Fee: <strong>$1,000</strong> per player for the 2024-2025 season.
                </p>

                <ListGroup variant="flush" className="mb-3">
                  <ListGroup.Item className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faTrophy} className="text-success me-2" />
                    Entry fees for 6-8 regional tournaments
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faShirt} className="text-primary me-2" />
                    Full uniform package (2 jerseys, shorts, shooting shirt)
                  </ListGroup.Item>
                  <ListGroup.Item>Professional coaching staff</ListGroup.Item>
                  <ListGroup.Item>Practices (2x/week)</ListGroup.Item>
                  <ListGroup.Item>AAU membership &amp; insurance</ListGroup.Item>
                  <ListGroup.Item>Video breakdown &amp; performance analytics</ListGroup.Item>
                </ListGroup>
                <small className="text-muted">
                  *Additional costs may include travel expenses for national tournaments
                </small>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Program Details Section */}
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Card className="shadow-lg border-danger">
              <Card.Body>
                <Card.Title className="text-center text-danger mb-4">
                  <FontAwesomeIcon icon={faBasketball} className="me-2" />
                  Program Details
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Season Duration:</strong> November 2023 - July 2024
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Age Groups:</strong> 10U, 11U, 12U, 13U, 14U (Based on 2024-25 grade level)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Tryouts:</strong> October 15-22, 2023 (Mandatory evaluation for team placement)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Practice Schedule:</strong>
                    <ul className="mt-2">
                      <li>Winter: Indoor practices (Tue/Thu 6-8PM)</li>
                      <li>Spring/Summer: Outdoor court availability (Mon/Wed/Fri)</li>
                    </ul>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Tournament Schedule:</strong> 2-3 tournaments per month (March-July)
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Payment Section */}
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Card className="shadow-lg border-success">
              <Card.Body>
                <Card.Title className="text-center text-success mb-4">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="me-2" />
                  Payment Options
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex align-items-center">
                    <img 
                      src="/images/square.jpg"
                      alt="Square Payments"
                      width="40"
                      className="me-3"
                    />
                    <div>
                      <strong>Secure Online Payments:</strong> 
                      <a href="https://your-square-link.com" className="ms-2">
                        Pay Registration Fee
                      </a>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Payment Plans:</strong> 5-month installment plan available ($200/month)
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                    Sibling Discount: 10% off for second child, 15% for third+
                  </ListGroup.Item>
                </ListGroup>
                <div className="mt-4 p-3 bg-light rounded">
                  <h5 className="text-dark">Financial Aid Available</h5>
                  <p className="mb-0">
                    Need-based scholarships available for qualified athletes. 
                    <a href="/financial-aid" className="ms-2">Apply Here</a>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default PricingPage;
