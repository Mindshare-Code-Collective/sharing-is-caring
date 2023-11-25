import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Contact.scss";
import port from "../../assets/mann.webp";
import Miad from "../../assets/miad.jpg";
import Sabriye from "../../assets/sabriye.jpg";
import Bennej from "../../assets/bennej.jpg";
import Doreen from "../../assets/doreen.jpg";
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
        <Row  sm='12' className="col-lg-12 col-md-12  ">
          <h3>UNSERES TEAM</h3>
          <br />
          <br />
          <br />
          
          <Col className="img1 mb-5 d-flex justify-content-center m-1">
            <img className="img" src={Miad} alt="" srcset="" />
            <h2 className="img-text">MIAD </h2>
            <p className="img-tex">Frontend Leiter</p>
          </Col>
          <Col className="img1 mb-5 d-flex justify-content-center m-">
            <img className="img" src={Sabriye} alt="" srcset="" />
           
            <h2 className="img-text">SABRIYE</h2>
            <p className="img-tex">Backend Leiter</p>
            
          </Col>
          <Col className="img1  mb-5 d-flex justify-content-center m-2">
            <img className="img" src={Doreen} alt="" srcset="" />
            <h2 className="img-text"> DOREEN </h2>
            <p className="img-tex">Project Leiter</p>
          </Col>  
          <Col  className="img1 mb-5 d-flex justify-content-center m-2">
            <img className="img" src={Bennej} alt="" srcset="" />
            <h2 className="img-text">BENNEJ</h2>
            <p className="img-tex">GitHub Leiter</p>
          </Col>

          <Col className="img1 mb-5 d-flex justify-content-center m-2">
            <img className="img" src={port} alt="" srcset="" />
            <h2 className="img-text" > DIRK</h2>
            <p className="img-tex">Project Leiter</p>
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
            <p>sharing-is-caring@mscc.com</p>
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
                    placeholder="E-Mail"
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
                placeholder="Ihre Nachricht..."
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
                Der Newsletter fasst für Sie das Wichtigste vom Tag auf einen Blick 
                &nbsp; zusammen, damit Sie nichts verpassen! Jetzt eintragen und anmelden!
              </p>
            </Col>
            <Col lg="6" className="mb-5">
              <p>Regelmäßig Tipps erhalten</p>
              <form>
                <input
                  className=" mr-sm-2 "
                  type="email"
                  placeholder="E-Mail"
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