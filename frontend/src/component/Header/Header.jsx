import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './assets/logo.png';
import './Header.scss';

function Header() {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navLinks = [
    { path: 'home', text: 'HOME' },
    { path: 'about', text: 'ABOUT' },
    { path: 'contact', text: 'CONTACT' },
    { path: 'login', text: 'LOGIN' },
    { path: 'sign-up', text: 'SIGN UP' },
  ];

  return (
    <header>
      <Navbar collapseOnSelect expand="sm" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="" srcSet="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto">
              {navLinks.map((link, index) => (
                <Nav.Link
                  key={index}
                  href={`#${link.path}`}
                  className={activeLink === link.path ? 'active' : ''}
                  onClick={() => handleLinkClick(link.path)}
                >
                  {link.text}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;