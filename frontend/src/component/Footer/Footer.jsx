import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer mt-5 p-1">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg="4">
            <p className="mt-3 footer_text">© 2023 SHARING IS CARING™</p>
          </Col>
          <Col lg="4" className="icons d-flex justify-content-center">
            <div>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/">
                <FaSquareFacebook />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/">
                <RiTwitterXLine />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
