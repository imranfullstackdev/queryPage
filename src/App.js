import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import QueryPage from './components/QueryPage';
import { Container } from 'react-bootstrap';
import AboutUs from './Static/AboutUs';
import ContactUs from './components/ContactUs';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <Header />
      <Container>
        <div id="home" className="section">
          <Home />
        </div>
        <div id="about-us" className="section">
          <AboutUs />
        </div>
        <div id="contact-us" className="section">
          <ContactUs />
        </div>
        <div id="query" className="section">
          <QueryPage />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
