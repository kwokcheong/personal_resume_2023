import { React, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavigationBar/NavigationBar.css';
import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function NavigationBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const path = window.location.pathname;
    setActiveLink(path);

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Router>
      <Navbar expand="lg" fixed="top" className={isScrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="me-auto">
            <Nav className="ms-auto">
              <li>
                1.
                <Nav.Link
                  href="home"
                  className={/\/home($|\/.*)/.test(activeLink) ? 'current' : ''}
                >
                  Home
                </Nav.Link>
              </li>
              <li>
                2.
                <Nav.Link
                  href="skills"
                  className={
                    /\/skills($|\/.*)/.test(activeLink) ? 'current' : ''
                  }
                >
                  Skills
                </Nav.Link>
              </li>
              <li>
                3.
                <Nav.Link
                  href="projects"
                  className={
                    /\/projects($|\/.*)/.test(activeLink) ? 'current' : ''
                  }
                >
                  Projects
                </Nav.Link>
              </li>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span> Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

export default NavigationBar;
