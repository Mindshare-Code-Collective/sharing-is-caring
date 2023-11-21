import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";


import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer mt-5 p-2 ">
      <Container>
        <Row  >
          <Col>
            <p className="mt-2">© 2023 SCHARING IS CARING™</p>
          </Col>
          <Col className="icons d-flex ">
            <div>
              <a  href="https://www.instagram.com/">
                <FaInstagram />
              </a>
            </div>
            <div>
              <a  href="https://www.facebook.com/">
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
