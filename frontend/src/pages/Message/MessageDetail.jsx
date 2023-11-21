import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./MessageDetail.scss";

const MessageDetail = (props) => {
  const [messageContent, setMessageContent] = useState();

  const { userInfo, userObject } = props;
  const navigate = useNavigate();

  const { id } = useParams();
  const addMessageToConversationUrl = `http://localhost:3333/messages/addto`;
  const conversation = userObject.conversations.find((conv) => conv._id === id);

  const handleChange = (e) => {
    const { value } = e.target;

    setMessageContent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        addMessageToConversationUrl,
        {
          conversationId: id,
          senderId: userInfo.id,
          messageContent: messageContent,
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
    setMessageContent("");
    navigate("/dashboard");
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        <Row>
          {conversation &&
            conversation.messages.map((message, index) => {
              return message.senderId === userInfo.id ? (
                <div key={index} className="message from-user">
                  {message.messageContent}
                </div>
              ) : (
                <div key={index} className="message from-other-user">
                  {message.messageContent}
                </div>
              );
            })}
        </Row>
      </div>
      <Row>
        <Form className="main_form" method="PATCH">
          <Form.Group className="mb-2">
            <Form.Label>Neue Nachricht:</Form.Label>
            <Form.Control
              as="textarea"
              className="mb-2"
              name="message"
              onChange={handleChange}
              placeholder="Deine Nachricht hier eingeben!"
            />
          </Form.Group>
          <Button className="message_button" onClick={handleSubmit}>
            Abschicken!
          </Button>
        </Form>
      </Row>
    </div>
  );
};

export default MessageDetail;
