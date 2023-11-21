import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { LiaFacebook } from "react-icons/lia";

import "./Footer.scss";
const Footer = () => {
  return (
    <div className="d-flex justify-content-between footer mt-4 p-2">
      <Container>
        <Row>
          <Col className="icons d-flex ">
            <div>
              <a style={{fontSize:'30px'}} href="https://www.instagram.com/">
                <FaInstagram />
              </a>
            </div>
            <div>
              <a style={{fontSize:'30px'}} href="https://www.facebook.com/">
                <FaSquareFacebook/>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/">
                <RiTwitterXLine />
              </a>
            </div>
          </Col>

          <Col>
          
            <p className="mt-2">© 2023 SCHARING IS CARING™</p>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
