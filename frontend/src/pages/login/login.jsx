import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.scss";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const baseBackendUrl = "http://localhost:3333/users/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {email:email, password:password};
    try {
      const response = await axios.post(baseBackendUrl, user);
      console.log(response.data);
      setEmail("");
      setPassword("");
      navigate("/dashboard");

      //setUserInfo(user);
      
    } catch (error) {
      console.error(error);
      
    }
  };


  return (
    <Container style={{ width: "40%" }}>
      <Row>
        <div className="sec1 sec2">
          <form onSubmit={handleSubmit}>
            <h3 className="banner">EINLOGGEN</h3>
            <br />
            <br />

            <div>
              <Col>
                <label for="email">E-Mail </label>
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
                <label for="password">Password</label>
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
            <button type="submit" className="btn-btn">
              Einloggen
            </button>
            <Link to="/register">
              <br />
              <br />
              <button className="btn-btn">
                Neu hier ? jetzt registeren!
              </button>
            </Link>
          </form>
          <br />
        </div>
      </Row>
    </Container>
  );
};

export default Login;