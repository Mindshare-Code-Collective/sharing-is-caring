import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Contact.scss";
import frau from "../../assets/frau.webp";
import port from "../../assets/mann.webp";

import { VscMail } from "react-icons/vsc";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Courgette&family=Dancing+Script:wght@400;500&family=Satisfy&display=swap');
</style>

const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <section className="banner">
          <div className="col-lg-12 col-md-12">
            <h2>KONTAKT</h2>
          </div>
        </section>
        <br />
        <br />
        <Row  sm='12' className="col-lg-12 col-md-12 ">
          <h3>UNSERE TEAM</h3>
          <br />
          <br />
          <br />
          <Col className="img1 mb-5 ">
            <img className="img" src={frau} alt="" srcset="" />
            <h2 className="img-text">MIAD</h2>
          </Col>
          <Col className="img1 mb-5">
            <img className="img" src={port} alt="" srcset="" />
            <h2 className="img-text">BENNEJ</h2>
          </Col>
          <Col  className="img1 mb-5">
            <img className="img" src={port} alt="" srcset="" />
            <h2 className="img-text">DIRK</h2>
          </Col>
          <Col className="img1  mb-5">
            <img className="img" src={frau} alt="" srcset="" />
            <h2 className="img-text"> SABRIYE </h2>
          </Col>
          <Col className="img1 mb-5 ">
            <img className="img" src={frau} alt="" srcset="" />
            <h2 className="img-text img-text2" > DOREEN </h2>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Row className=" sec1">
          <Col lg="5" className="mb-5">
            <h3 className="py-4 ">KONTAKTIEREN SIE UNS</h3>

            <h5>Email:</h5>
            <p>tauchbörse@development.com</p>
            <br />
            <h5>Phone:</h5>
            <p>+49 1234567890</p>
            <br />
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact-form w-100">
              <Row>
                <Col lg="6">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </Col>

                <Col lg="6">
                  <input
                    className="form-control "
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </Col>
              </Row>
              <br />
              <br />
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <br />
              <Row>
                <Col>
                  <button className="btn-btn" type="submit">
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        <br />
        <br />
         <section className="sec1 sec2">
          <Row  className="col-lg-12 col-md-12">
           
            <Col lg="6" className="mb-5">
              <h5>Newsletter abonnieren</h5>
              <p>
                Newsletter fasst für Sie das Wichtigste vom Tag auf einen Blick
                zusammen. verpassen Sie nichts. Jetzt eintragen und anmelden!
              </p>
            </Col>
            <Col lg="6" className="mb-5">
              <p>Regelmäßig Tipps erhalten</p>
              <form>
                <input
                  className=" mr-sm-2 "
                  type="email"
                  placeholder="Your Email"
                  style={{
                    height: "35px",
                    borderRadius: "5px",
                    width: "70%",
                    marginRight: "8px",
                  }}
                />
                <button className="btn-btn" type="submit">
                  <VscMail />
                </button>
              </form>
            </Col>
             
          </Row>
       </section>
      </Container>
    </div>
  );
};

export default Contact;