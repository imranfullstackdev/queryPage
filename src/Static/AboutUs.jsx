// AboutUs.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css'; 

const AboutUs = () => {
  return (
    <Container className="about-us-container">
      <Row>
        <Col>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
