import React from 'react';
// import { Button, Form, Container, Row, Col, ListGroup } from 'react-bootstrap';
import image01 from "../../assets/Book-3.jpg";
// import MessageDetails from "./MessageDetails";
import { Link } from "react-router-dom";
import './Messages.scss';

export default function Messages(props) {
  const {conversation} = props;
 
   
    return (
   <>
    <div className="">
    <div className="">
      <div className="">
        <div className="">
          <div className=" ">
             <div className='message_image'>
                <img src={conversation.product.picture ? conversation.product.picture : image01} alt="Aa" width="100"/>
              </div>
              <h1>{conversation.product.name}</h1> 
              <p>{conversation.messages[0].messageContent}</p>
              <Link to={`/messages/${conversation._id}`}> 
              <button>Details</button>
              </Link>
             
              {/* {
                loggedUserMessage && loggedUserMessage.map(message => <h3 className="product-category">{message.messageContent}</h3>)
              }
                {
                userMessage && userMessage.map(message => <h3 className="product-category">{message.messageContent}</h3>)
              } */}
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
      );
    };