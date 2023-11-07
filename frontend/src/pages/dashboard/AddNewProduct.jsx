import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function AddNewProduct(props) {

  const { showModal, setShowModal, userInfo } = props;
  const [userProduct, setUserProducts] = useState({
    name: '',
    category: '',
    trade: '',
    condition: '',
    shipment: '',
    picture: "",
    user: userInfo?.id,
  });

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      const file = files[0];
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64Data = reader.result;

          setUserProducts({
            ...userProduct,
            [name]: base64Data,
          });
        }
        reader.onerror = (error) => {
          console.error(error);
        }
      };
    } else {
      setUserProducts({
        ...userProduct,
        [name]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();


    localStorage.setItem(`${userProduct.name},${userProduct.category},${userProduct.description}`, userProduct.picture);
    userProduct.picture = "";


    fetch('http://localhost:3333/products/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userProduct)
    })
      .then(response => {
        if (response.ok) {
          console.log("Daten erfolgreich gesendet!");
          setShowModal(!showModal);

        } else {
          console.error("Fehler beim Senden der Daten");
        }
      })
      .catch(error => {
        console.error("Fehler beim Senden der Daten:", error)
      });
  };


  return (
    <Modal size="lg" show={showModal} onHide={handleToggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Neues Produkt</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="request" className="main_form" method="POST" action="http://localhost:3333/products/">
          <Form.Group className="mb-2">
            <Form.Label>Name des Artikels
              <span className="text-danger">  *</span>
            </Form.Label>
            <Form.Control id="name" type="text" name="name" placeholder="Name" required
              onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Kategorie
              <span className="text-danger">  *</span>
            </Form.Label>
            <Form.Control id="category" type="text" name="category" placeholder="Kategorie" required
              onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Trade
              <span className="text-danger">  *</span>
            </Form.Label>
            <Form.Control id="trade" name="trade" as="select" required onChange={handleChange}>
              <option value="" disabled selected>Bitte auswählen:</option>
              <option value="Tauschen">Tauschen</option>
              <option value="Verschenken">Verschenken</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Zustand
              <span className="text-danger">  *</span>
            </Form.Label>
            <Form.Control id="condition" name="condition" as="select" required onChange={handleChange}>
              <option value="" disabled selected>Bitte auswählen:</option>
              <option value="Neu">Neu</option>
              <option value="Gebraucht">Gebraucht</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Zustellung
              <span className="text-danger">  *</span>
            </Form.Label>
            <Form.Control id="shipment" name="shipment" as="select" required onChange={handleChange}>
              <option value="" disabled selected>Bitte auswählen:</option>
              <option value="Abholung">Abholung</option>
              <option value="Versand">Versand</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Beschreibung
              <span className="text-danger">  *</span>
            </Form.Label>
            <Form.Control id="description" as="textarea" name="description" placeholder="Beschreibung" required
              onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Wählen Sie ein Bild aus
              <span className="text-danger">  *</span>
            </Form.Label>
            <Form.Control type="file" name="picture" onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};