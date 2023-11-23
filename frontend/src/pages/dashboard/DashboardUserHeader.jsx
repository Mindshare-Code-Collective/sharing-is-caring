import userImage from "../../assets/profile.png";
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
  <Container>
    <div className="customers sec1">
          
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage text_align_center">
            <h3>Willkommen {" "}
                {userInfo
                  ? userInfo.name.charAt(0).toUpperCase() +
                    userInfo.name.slice(1)
                  : "User"} </h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="satteb text_align_center">
            <p>
                Schön, dass Du angemeldet bist und unseren Service nutzt!
            </p>
            <h4>Viel Spaß beim Verschenken und Tauschen!</h4>
            <i> <img src={userImage} alt="#" style={{ width: "150px", borderRadius:"50%", height:"150px" }} /></i>
          </div>
        </div>
        </div>
        <Row>
          <Col md={12} className="text-center">
            <Button 
              style={{
                marginTop: "80px",
                marginLeft: "50%",
                transform: "translateX(-50%)",
                background: "#b54f30",
              }}
              className="read_more btn-btn"
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
    </div>  
    </Container>
  );
}
