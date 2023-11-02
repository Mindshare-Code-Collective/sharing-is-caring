import React, { useState } from 'react'

export default function UserOffersForm({ onProductSubmit }) {
  const [userProduct, setUserProducts ] = useState({
    name: '',
    category: '',
    trade: '',
    condition: '',
    shipment: '',
    description: '',
    picture: '',
    contact: ''
  });

/*   const handleSubmit = (e) => {
    e.preventDefault();
    onProductSubmit(userProduct);
    e.target.reset();
  }
 */
const handleSubmit = (e) => {
    e.preventDefault();
    onProductSubmit(userProduct);
    e.target.reset();
    e.currentTarget.reset();

    fetch('http://localhost:3333/products/', {
      method: "POST",
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userProduct)
      })
      .then(response => {
      if(response.ok) {
        console.log("Daten erfolgreich gesendet!");
      } else {
        console.error("Fehler beim Senden der Daten");
      }
      })
      .catch(error => {
        console.error("Fehler beim Senden der Daten:", error)
      });
 };

  return (
    <div>
    <div className="user-product-form">
      <h4>Add a product:</h4>
      <form action="http://localhost:3333/products/" method="post" onSubmit={handleSubmit}>
        <p>Name des Artikels*:</p>
        <input 
          type="text" 
          name="name"
          id="name"
          required 
          value={userProduct.name}
          onChange={(e) => setUserProducts({ ...userProduct, name: e.target.value })} 
        />
        <p>Kategorie*:</p>
        <input 
          type="text" 
          name="category"
          id="category"
          required 
          value={userProduct.category}
          onChange={(e) => setUserProducts({ ...userProduct, category: e.target.value })} 
        />
        <p>Trade*:</p>
        <select 
          id="trade" 
          name="trade"
          value={userProduct.trade} 
          onChange={(e) => setUserProducts({ ...userProduct, trade: e.target.value })}
        >
            <option value="" disabled selected>Bitte auswählen:</option>
            <option value="Tauschen">Tauschen</option>
            <option value="Verschenken">Verschenken</option>
        </select>
        <p>Zustand*:</p>
        <select 
          id="condition" 
          name="condition"
          value={userProduct.condition}
          onChange={(e) => setUserProducts({ ...userProduct, condition: e.target.value })}
        >
            <option value="" disabled selected>Bitte auswählen:</option>
            <option value="Neu">Neu</option>
            <option value="Gebraucht">Gebraucht</option>
        </select>
        <p>Zustellung*:</p>
        <select 
          id="shipment" 
          name="shipment"
          value={userProduct.shipment}
          onChange={(e) => setUserProducts({ ...userProduct, shipment: e.target.value })}
        >
          <option value="" disabled selected>Bitte auswählen:</option>
          <option value="Abholung">Abholung</option>
          <option value="Versand">Versand</option>
        </select>
        <p>Beschreibung:</p>
        <input 
          type={"text"} 
          name="description"
          id="description"
          value={userProduct.description}
          onChange={(e) => setUserProducts({ ...userProduct, description: e.target.value})} 
        />
        <p>Bild:</p>
        <input 
          type={"text"} 
          name="picture"
          id="picture" 
          value={userProduct.picture}
          onChange={(e) => setUserProducts({ ...userProduct, picture: e.target.value})}
        />
        <p>User Kontakt*:</p>
        <input 
          type={"email"} 
          name="contact"
          id="contact"
          required 
          value={userProduct.contact}
          onChange = {(e) => setUserProducts({ ...userProduct, contact: e.target.value })} 
        />
        <br></br>
        <button>add</button>
      </form>
    </div>
   </div>
  );
}