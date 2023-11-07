import userImage from "../../assets/Spielzeug.jpg";
import AddNewProduct from "./AddNewProduct";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function DashboardUserHeader(props) {
  // const [ userProducts, setUserProducts ] = useState([]);
  const { userInfo } = props;
  // const handleProductSubmit = (newProduct) => {
  //   setUserProducts([...userProducts, newProduct]);
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="customers">
      <Container>
        <Row>
          <Col md={12}>
            <div className="titlepage text-center">
              <h2>
                Willkommen{" "}
                {userInfo
                  ? userInfo.name.charAt(0).toUpperCase() +
                    userInfo.name.slice(1)
                  : "User"}
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="satteb text-center">
              <p>
                Fact that a reader will be distracted by the readable content...
              </p>
              <h3>Der Zweck der Verwendung</h3>
              <i>
                <img src={userImage} alt="#" style={{ width: "100px" }} />
              </i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <Button
              style={{
                marginTop: "100px",
                marginLeft: "50%",
                transform: "translateX(-50%)",
              }}
              className="read_more"
              onClick={handleToggleModal}
            >
              Neues Produkt
            </Button>
          </Col>
        </Row>
        <AddNewProduct
          userInfo={userInfo}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </Container>
    </div>
  );
}
