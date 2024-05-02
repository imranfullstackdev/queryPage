import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css'; 

const Header = () => {
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
    <Navbar className="fixed-header" expand="lg">
      <Navbar.Brand href="/">PTCG INDIA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav justify-content-end">
        <Nav className="ml-auto align-items-center ">
          <button className="nav-link" onClick={() => scrollToSection('home')}>Home</button>
          <button className="nav-link" onClick={() => scrollToSection('about-us')}>About Us</button>
          <button className="nav-link" onClick={() => scrollToSection('contact-us')}>Contact Us</button>
          <button className="nav-link" onClick={() => scrollToSection('query')}>Query</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
