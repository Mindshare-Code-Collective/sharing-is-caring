import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form, Col, Row} from 'react-bootstrap';
// import ProductCard from '../dashboard/ProductCard';
import { useNavigate } from "react-router-dom";
import image01 from "../../assets/Book-3.jpg";
import "./ProductDetails.scss";


const ProductDetails = (props) => {
    const [message, setMessage] = useState();
    const createNewConversationUrl = "http://localhost:3333/messages/send";

    const {products, userInfo} = props;
    const navigate = useNavigate();

    const { id } = useParams();

    const product = products.find((product) => product._id === id);

    const handleChange = (e) => {
    const {value} = e.target;

      setMessage({
        messageContent: value,
        senderId:userInfo.id,
      });
    }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(

        createNewConversationUrl,
        {   product:product._id,
            owner:product.user,
            customer:userInfo.id,
            messages:[message],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

    } catch (error) {
      console.error("Error sending data:", error);
    }
    setMessage("");
    navigate("/");
  };


  return (
    <div className="container productDetails ">
    <Row>
      <Col>
        <Row lg="12" className="mb-5 details">
          <Col >
            <div className="product-img">
              <img
                src={product.picture ? product.picture : image01}
                alt="Aa"
              />
            </div>
          </Col>
          <Col className="" >
            <h1 style={{color:'#b54f30'}}>{product.name}</h1>
            <hr />

            <div class="flex-container">
              <div>
                <h5>ART:</h5>
                <p>{product.category}</p>
              </div>
              <div>
                <h5>TRADE:</h5>
                <p>{product.trade}</p>
              </div>
              <div>
                <h5>ZUSTAND:</h5>
                <p>{product.condition}</p>
              </div>
              <div>
                <h5>ZUSTELLUNG:</h5>
                <p>{product.shipment}</p>
              </div>
              <div class="description-row">
                <h5>BESCHREIBUNG:</h5>
                <p>{product.description}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
            <Col lg="8">
            <Form className="main_form" method="POST">
            <Form.Group className="mb-4">
                <Form.Label>Nachricht:</Form.Label>
                <Form.Control 
                    as="textarea" 
                    className="mb-2" 
                    name="message"
                    onChange={handleChange} 
                    placeholder="Deine Nachricht hier eingeben!" 
                        />
            </Form.Group>
            <Button className='btn-btn' style={{background:'#b54f30', marginBottom:'30px'}} variant="primary" onClick={handleSubmit}>
                        Abschicken!
            </Button>
        </Form>
            </Col>
        </Row>
 
    </div>
  );
};

export default ProductDetails;


