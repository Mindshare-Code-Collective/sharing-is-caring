import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Header.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {VscSearch} from 'react-icons/vsc'



function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="sm" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img className="logo" src={logo} alt="" srcSet="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto">
              <Link to="/home" className="nav-link">HOME</Link>
              <Link to="/contact" className="nav-link">CONTACT</Link>
              <Link to="/login" className="nav-link">LOGIN</Link>
              <Link to="/register" className="nav-link">SIGN UP</Link>
            </Nav>
            <Form inline className='form-search'>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className='btn'  style={{backgroundColor:'#B54F30'}}> <VscSearch /> </Button>
          </Col>
        </Row>
      </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;