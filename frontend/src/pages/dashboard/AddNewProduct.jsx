import React, { useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { AppContext } from "../../AppContext";
import config from "../../component/config/config";

export default function AddNewProduct(props) {
  const { showModal, setShowModal, userInfo } = props;
  const { addProductToState } = useContext(AppContext);

  const [userProduct, setUserProducts] = useState({
    name: "",
    category: "",
    trade: "",
    condition: "",
    shipment: "",
    description: "", // Add description to the state
    picture: "",
    user: userInfo?.id,
  });

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64Data = reader.result;

          setUserProducts((prevUserProduct) => ({
            ...prevUserProduct,
            picture: base64Data,
          }));
          //console.log('Base64 data:', base64Data);
        };
        reader.onerror = (error) => {
          console.error(error);
        };
      }
    } else {
      setUserProducts({
        ...userProduct,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      name: userProduct.name,
      category: userProduct.category,
      trade: userProduct.trade,
      condition: userProduct.condition,
      shipment: userProduct.shipment,
      description: userProduct.description,
      user: userProduct.user,
      picture: userProduct.picture,
    };

    try {
      const response = await axios.post(
        config.routes.product.createProduct,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        console.log("Data successfully sent!", response.data);
        setShowModal(!showModal);

        // Add the new product to the products state in context
        addProductToState(response.data);

        // Reload the page
        window.location.reload();
      } else {
        console.error("Error sending data:", response.data.error.message);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
    console.log("Reached the end of handleSubmit");
  };

  return (
    <Modal size="lg" show={showModal} onHide={handleToggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Neues Produkt</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          id="request"
          className="main_form"
          method="POST"
          action="http://localhost:3333/products/"
        >
          <Form.Group className="mb-2">
            <Form.Label>
              Name des Artikels
              <span className="text-danger"> *</span>
            </Form.Label>
            <Form.Control
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>
              Kategorie
              <span className="text-danger"> *</span>
            </Form.Label>
            <Form.Control
              id="category"
              name="category"
              as="select"
              required
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Bitte auswählen:
              </option>
              <option value="garten">Garten</option>
              <option value="bücher">Bücher</option>
              <option value="dekoration">Dekoration</option>
              <option value="kleidung">Kleidung</option>
              <option value="schuhe">Schuhe</option>
              <option value="spielzeug">Spielzeug</option>
              <option value="elektronik">Elektronik</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>
              Trade
              <span className="text-danger"> *</span>
            </Form.Label>
            <Form.Control
              id="trade"
              name="trade"
              as="select"
              required
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Bitte auswählen:
              </option>
              <option value="Tauschen">Tauschen</option>
              <option value="Verschenken">Verschenken</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>
              Zustand
              <span className="text-danger"> *</span>
            </Form.Label>
            <Form.Control
              id="condition"
              name="condition"
              as="select"
              required
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Bitte auswählen:
              </option>
              <option value="Neu">Neu</option>
              <option value="Gebraucht">Gebraucht</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>
              Zustellung
              <span className="text-danger"> *</span>
            </Form.Label>
            <Form.Control
              id="shipment"
              name="shipment"
              as="select"
              required
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Bitte auswählen:
              </option>
              <option value="Abholung">Abholung</option>
              <option value="Versand">Versand</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>
              Beschreibung
              <span className="text-danger"> *</span>
            </Form.Label>
            <Form.Control
              id="description"
              as="textarea"
              name="description"
              placeholder="Beschreibung"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>
              Wählen Sie ein Bild aus
              <span className="text-danger"> *</span>
            </Form.Label>
            <Form.Control
              id="picture"
              type="file"
              name="picture"
              onChange={handleChange}
            />
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
}
