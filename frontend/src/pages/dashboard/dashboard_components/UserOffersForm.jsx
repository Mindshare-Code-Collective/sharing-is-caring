import React, { useState } from 'react'

export default function UserOffersForm({ onProductSubmit }) {
  const [userProduct, setUserProducts ] = useState({
    name: '',
    kategorie: '',
    zustand: '',
    zustellung: '',
    sonstiges: '',
    image: '',
    userContact: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onProductSubmit(userProduct);
    e.target.reset();
  }

  return (
    <div>
    <div className="user-product-form">
      <h4>Add a product:</h4>
      <form onSubmit={handleSubmit}>
        <p>Name des Artikels*:</p>
        <input 
          type="text" 
          name="name"
          required 
          value={userProduct.name}
          onChange={(e) => setUserProducts({ ...userProduct, name: e.target.value })} 
        />
        <p>Kategorie*:</p>
        <input 
          type="text" 
          name="kategorie"
          required 
          value={userProduct.kategorie}
          onChange={(e) => setUserProducts({ ...userProduct, kategorie: e.target.value })} 
        />
        <p>Zustand*:</p>
        <input 
          type={"text"} 
          name="zustand"
          required 
          value={userProduct.zustand}
          onChange={(e) => setUserProducts({ ...userProduct, zustand: e.target.value})}  
        />
        <p>Zustellung*:</p>
        <input 
          type={"text"} 
          name="zustellung"
          required
          value={userProduct.zustellung}
          onChange={(e) => setUserProducts({ ...userProduct, zustellung: e.target.value})} 
        />
        <p>Sonstige Infos:</p>
        <input 
          type={"text"} 
          name="sonstiges"
          value={userProduct.sonstiges}
          onChange={(e) => setUserProducts({ ...userProduct, sonstiges: e.target.value})} 
        />
        <p>Bild:</p>
        <input 
          type={"text"} 
          name="image" 
          value={userProduct.image}
          onChange={(e) => setUserProducts({ ...userProduct, image: e.target.value})}
        />
        <p>User Kontakt*:</p>
        <input 
          type={"email"} 
          name="usercontact"
          required 
          value={userProduct.usercontact}
          onChange = {(e) => setUserProducts({ ...userProduct, usercontact: e.target.value })} 
        />
        <br></br>
        <button>add</button>
      </form>
    </div>
   </div>
  );
}