import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, ListGroup } from 'react-bootstrap';


export default function Messages(props) {
    // const [ userProducts, setUserProducts ] = useState([]);
    // const {product} = props;
    // const handleProductSubmit = (newProduct) => {
    //   setUserProducts([...userProducts, newProduct]);
    // };
    const [ messages, setMessages ] = useState([]);
    const [ newMessage, setNewMessage ] = useState('');
    const [ sender, setSender ] = useState('Absender');
    const [ offersName, setOffersName ] = useState(''); 

    const getCurrentTimestamp = () => {
      const now = new Date();
      return now.toLocaleString();
    }

    const handleSendMessage = () => {
      if(newMessage) {
        const timestamp = getCurrentTimestamp();
        const messageObject = {
          sender: sender,
          receiver: offersName,
          message: newMessage,
          timestamp: timestamp
        };
        
        setMessages([...messages, messageObject]);
        setNewMessage('');
      }
    }

    const handleDeleteMessage = (index) => {
      const updatedMessages = [...messages];
      updatedMessages.splice(index, 1);
      setMessages(updatedMessages);
    }
   
    return (
     <>
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
                <div className="text-center">
                  <h1>Nachricht senden</h1>
                    <Form className="main_form" method="POST">
                      <Form.Group className="mb-2">
                        <Form.Label>Name des Anbieters des Produkts</Form.Label>
                        <Form.Control 
                          id="OffersName" 
                          type="text" 
                          name="OffersName" 
                          placeholder="Name des Anbieters" 
                          onChange={(e) => setOffersName(e.target.value)}
                          />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Label>Nachricht:</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          className="mb-2" 
                          name="message"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)} 
                          placeholder="Deine Nachricht hier eingeben!" 
                        />
                      </Form.Group>
                      <Button variant="primary" onClick={handleSendMessage}>
                        Abschicken!
                      </Button>
                    </Form>
                </div>

                <div className="mt-4">
                  <h2 className="text-center">Postfach</h2>
                      <ListGroup>
                        {messages.map((message, index) => (
                        <ListGroup.Item key={index}>
                          <strong>Absender:</strong> {message.sender} <br />
                          <strong>Empfänger:</strong> {message.receiver} <br />
                          <strong>Uhrzeit:</strong> {message.timestamp} <br />
                          <strong>Nachricht:</strong> {message.message} 
                          <Button className="deleteButton" variant="primary" onClick={() => handleDeleteMessage(index)}>
                          Löschen
                          </Button>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              </Col>
          </Row>
        </Container>
     </>
      );
    };