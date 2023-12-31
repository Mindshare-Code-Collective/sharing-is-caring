import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.scss";
import config from '../../component/config/config';

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        console.error("Passwords don't match!");
        setPasswordsMatch(false);
        return;
      }
      const response = await axios.post(`${config.routes.user.register}`, {
        name: name,
        email: email,
        password: password,
      });
      console.log(response);
      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
      
    } catch (error) {
      console.error(error);
      
    }
  };

  return (
    <div className="register-container">
    <Container className="register-btstrap-con">
      <Row>
        <div className="sec1">
          <form onSubmit={handleSubmit}>
            <h3 className="banner">ANMELDEN</h3>
            <br />
            <div>
              <Col>
                <label for="name">Name</label>
                <input
                  className="form-control"
                  value={name}
                  name="name"
                  id="name"
                  placeholder="Name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Col>
              <br />
            </div>
            <div>
              <Col>
                <label for="email">E-Mail</label>
                <input
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email@mail.com"
                  id="email"
                  name="email"
                  required
                />
              </Col>
            </div>
            <br />
            <div>
              <Col>
                {" "}
                <label for="password">Passwort</label>
                <input
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="*********"
                  id="password"
                  name="password"
                  required
                />
              </Col>
            </div>
            <br />
            <div>
              <Col>
                {" "}
                <label for="password">Passwort bestätigen</label>
                <input
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="*********"
                  id="password"
                  name="password"
                  required
                />
              </Col>
            </div>
            {!passwordsMatch && (
              < div style={{ color: "red "}}>Passwörter stimmen nicht überein!</div>
            )}
            <br/>
            <button type="submit" className="btn-btn">
              Anmelden!
            </button>
            <Link to="/login">
              <br />
              <br />
              <button className="btn-btn">
                Schon angemeldet? Einloggen!
              </button>
            </Link>
          </form>
          <br />
        </div>
      </Row>
    </Container>
    </div>
  );
};

export default Register;