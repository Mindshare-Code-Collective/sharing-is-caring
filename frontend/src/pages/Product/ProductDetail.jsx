import React, {useState} from 'react';
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Button, Form, Col, Row} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import image01 from "../../assets/Book-3.jpg";
import "./ProductDetails.scss";


const ProductDetails = (props) => {
    const [message, setMessage] = useState();
    const createNewConversationUrl = "http://localhost:3333/messages/send";
    const addMessageToConversationUrl = "http://localhost:3333/messages/addto";

    const {products, userInfo, userObject} = props;
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

    // let conversation_Id;

    const conversation = userObject.conversations.filter((conv) => 
    conv.product._id === id &&
    conv.customer._id === userInfo.id);


    try {

      if (conversation.length > 0) {
        const responsePatch = await axios.patch(
          addMessageToConversationUrl,
          {
            conversationId: conversation[0]._id,
            senderId: userInfo.id,
            messageContent: message.messageContent,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(responsePatch);


      } else {
         const responsePost = await axios.post(

          createNewConversationUrl,
          {   product:id,
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
        console.log(responsePost);
      };

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
          <Col className="flex-container" >
            <Row>
           <Col><h1 style={{color:'#b54f30'}}>{product.name}</h1> </Col> 
          <Col>
          <div style={{border:'solid 3px #0b9595', borderRadius:'18px', width:'200px'}} > 
              <h5 style={{paddingTop:'15px',marginLeft:'15px'}}>ANBIETER:</h5>
                <p style={{paddingTop:'15px'}}> {userInfo
                  ? userInfo.name.charAt(0).toUpperCase() +
                    userInfo.name.slice(1)
                  : "User"}</p>
                  </div>
              </Col>  
           </Row>
            <hr />

            <div className="flex-container">
      
              <div>
                <h5>KATEGORIE:</h5>
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
              <div className="description-row">
                <h5>BESCHREIBUNG:</h5>
                <p>{product.description}</p>
              </div>
              <div>
             
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      {
        userInfo && userInfo.id !== product.user &&
     
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
            <Button className='btn-btn' style={{background:'#b54f30'}}  onClick={handleSubmit}>
                        Abschicken!
            </Button>
        </Form>

            </Col> }
            {
        userInfo && userInfo.id === product.user &&
     
            <div className="userInfo-empty-space"></div> }
            { !userInfo &&
            <Col lg="8">
              <p>Nehmen Sie Kontakt auf zum Anbietenden.</p>
 
            <Link to="/login">
            <Button className='btn-btn' style={{background:'#b54f30', marginBottom:'70px'}}>
                        Zur Anmeldung
            </Button>
            </Link>
   
            </Col>

             }

    
        </Row>
        
 
    </div>
  );
};

export default ProductDetails;


