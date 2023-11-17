import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form, Col, Row} from 'react-bootstrap';
import ProductCard from '../dashboard/ProductCard';
import { useNavigate } from "react-router-dom";



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
    <div>
        <Row>
            <Col lg="6">
            <ProductCard product={product}/>
            </Col>
            <Col lg="6">
            <Form className="main_form" method="POST">
            <Form.Group className="mb-2">
                <Form.Label>Nachricht:</Form.Label>
                <Form.Control 
                    as="textarea" 
                    className="mb-2" 
                    name="message"
                    onChange={handleChange} 
                    placeholder="Deine Nachricht hier eingeben!" 
                        />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
                        Abschicken!
            </Button>
        </Form>
            </Col>
        </Row>
 
    </div>
  );
};

export default ProductDetails;


