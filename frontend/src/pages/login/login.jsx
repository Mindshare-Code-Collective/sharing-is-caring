import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.scss";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import config from '../../component/config/config';

const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setUserInfo } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name: name, password: password };
    try {
      const response = await axios.post(`${config.routes.user.login}`, user);
      setUserInfo({ name: user.name, id: response.data.userId });
      // Convert the object to a JSON string
      const userInfo = JSON.stringify({ name: user.name, id: response.data.userId });
      // Store the JSON string in localStorage
      localStorage.setItem('userInfo', userInfo);
      console.log(response.data);
      setName("");
      setPassword("");
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
                <label for="name">Name </label>
                <input
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="name"
                  placeholder="name"
                  id="name"
                  name="name"
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
              <button className="btn-btn">Neu hier ? jetzt registeren!</button>
            </Link>
          </form>
          <br />
        </div>
      </Row>
    </Container>
  );
};

export default Login;
