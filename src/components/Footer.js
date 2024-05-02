import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css'; 

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><button className="footer-link" onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button className="footer-link" onClick={() => scrollToSection('about-us')}>About Us</button></li>
              <li><button className="footer-link" onClick={() => scrollToSection('contact-us')}>Contact Us</button></li>
              <li><button className="footer-link" onClick={() => scrollToSection('query')}>Query</button></li>
            </ul>
          </Col>
          <Col md={4} sm={6}>
            <h5>PTCG INDIA</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt tristique ante, vel fermentum ligula volutpat vel.</p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
