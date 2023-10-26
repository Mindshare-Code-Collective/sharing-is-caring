import React, { useState } from 'react';
import UserOffersForm from './UserOffersForm';


export default function UserOffersList() {
  const [ userProducts, setUserProducts ] = useState([]);

  return (
    <div>
      <h2>UserOffersList</h2>
      {
        userProducts.map((product, index) => (
          <div key={index}>
            <p>Produkt Name: {product.name}</p>
            

          </div>
        ))}
    </div>
  )
}
