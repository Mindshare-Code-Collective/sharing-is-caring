import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./dashboard.scss";
import UserProfile from "./dashboard_components/UserProfile";
import UserOffersForm from "./dashboard_components/UserOffersForm";
import UserOffersList from "./dashboard_components/UserOffersList";
import AllOffersList from "./dashboard_components/AllOffersList";
import UserProfileForm from "./dashboard_components/UserProfileForm";

export default function Dashboard() {
  const [ userProducts, setUserProducts ] = useState([]);

  const handleProductSubmit = (newProduct) => {
    setUserProducts([...userProducts, newProduct]);
  };
 
  return (
    <>
      <section>
        <Container fluid className="dashboard-header-container">
          <Row className="dashboard-header-row">
            <Col>
              <h2>Dashboard</h2>
            </Col>
            <Col>
              <h3>Profil</h3>
            </Col>
            <Col>
              <p>zu verschenkende Dinge / Dienstleistungen</p>
              <div>
              </div>
            </Col>
            <Col>
              <p>Chat</p>
            </Col>
            <Col>
              <form className="search-bar">
                <input type="text" placeholder="Suchen..." />
              </form>
            </Col>
            <Col>
              <p>EXIT- Log Out!</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="dashboard-body-container">
        <Container fluid>
          <Row>
            <Col className="dashboard-profil" sm={2}>
              <div>
              <p>Profil</p>
              <p>
              <UserProfile />
              <UserProfileForm />
              </p>
              </div>
            </Col>
            <Col className="dashboard-body" sm={10}>
              <div>
              <h3>Angebote des Users</h3>
              <div className="UsersOffersForm">
              <UserOffersForm onProductSubmit = {handleProductSubmit} />
              </div>
              <div className="UsersOffersList">
              <UserOffersList userProducts={userProducts}/>
              </div>

              </div>
            </Col>
          </Row>
          <Row className="dashboard-allOffers">
            <div>
              <h2>Angebote anderer User</h2>
              <AllOffersList />
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}
