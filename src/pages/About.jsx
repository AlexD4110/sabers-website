import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';


const About = () => {
  return (
    <Container fluid className="p-0">
      {/* Hero Section */}
      <Row noGutters>
        <Col>
          <Card className="bg-dark text-white">
            <Card.Img src="/images/7thGrade.JPG" alt="Vernon Travel Basketball" className="img-fluid" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center" style={{ padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <Card.Title className="display-4">Vernon Travel Basketball</Card.Title>
              <Card.Text className="lead">
                Empowering Youth in Vernon, CT
              </Card.Text>
              <Button variant="primary" size="lg" href="/SignUp">Join Us</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

      {/* Carousel Section */}
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Carousel>
            <Carousel.Item>
              <img src="/images/8thGrade1.jpg" className="d-block w-100 img-fluid" alt="First slide" />
              <Carousel.Caption>
                <h3>Our Teams in Action</h3>
                <p>Building teamwork and sportsmanship.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/Image2.jpg" className="d-block w-100 img-fluid" alt="Second slide" />
              <Carousel.Caption>
                <h3>Community Engagement</h3>
                <p>Connecting with our community for support.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="images/YouthNight.jpg" className="d-block w-100 img-fluid" alt="Third slide" />
              <Carousel.Caption>
                <h3>Success on the Court</h3>
                <p>5 out of 7 teams winning playoff games in our first year!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Detailed Information Section */}
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-4">About Vernon Travel Basketball</Card.Title>
              <Card.Text style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                <p>
                  Vernon Travel Basketball is a competitive youth basketball program designed for players in grades 5-8. 
                  Founded in May 2023, the program was created to meet the demand for a more competitive youth basketball 
                  organization in Vernon, Connecticut. Our mission is to provide high-quality training, foster sportsmanship, 
                  and encourage both athletic and personal development in all our participants.
                </p>
                <p>
                  <strong>President and Founder: Alex Deane</strong> identified a significant need in Vernon for a youth basketball 
                  program that not only builds competitive skills but also strengthens character and teamwork. By creating a comprehensive 
                  business plan with minimal funding, Alex successfully revived Vernon Travel Basketball. 
                </p>
                <p>
                  Since its inception, the program has seen tremendous community engagement, generating widespread support from families and local businesses. 
                  Through social media outreach, Vernon Travel Basketball has reached over 8,000 people and attracted a diverse group of 74 players 
                  within just 60 days of launching. The positive impact has been evident as the kids gain confidence, discipline, and a sense of belonging.
                </p>
                <p>
                  Community support has been a vital pillar of our success. By fostering a strong connection with the community, we’ve built a program that helps kids 
                  not only on the basketball court but also off it. Our players have developed valuable life skills such as teamwork, communication, and perseverance, 
                  all while building lasting friendships. Parents, coaches, and community members have all rallied around the program, making it a true grassroots effort 
                  to empower our youth.
                </p>
                <p>
                  In just the first year, Vernon Travel Basketball's competitive spirit shone through, with 5 out of 7 teams advancing to playoff victories. 
                  We continue to prioritize both the personal and athletic growth of our players, offering tailored training programs that focus on individual 
                  skill development. Our goal is to create an environment where kids feel supported, learn valuable life lessons, and can achieve their full potential, 
                  both as athletes and as future leaders in the community. We hope to see <strong>you </strong>in our program!
                </p>
                <Button variant="primary" href="/contact">Contact Us</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
