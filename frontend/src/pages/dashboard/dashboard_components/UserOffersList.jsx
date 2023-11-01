import React, { useState } from 'react';
import UserOffersForm from './UserOffersForm';


export default function UserOffersList({userProducts}) {

  return (
    <div>
      <h2>UserOffersList</h2>
        {userProducts.map((product, index) => (
          <div key={index} style={{border: "1px solid black"}} >
            <p>Name des Artikels: {product.name}</p>
            <p>Kategorie: {product.category}</p>
            <p>Trade: {product.trade}</p>
            <p>Zustand: {product.condition}</p>
            <p>Zustellung: {product.shipment}</p>
            <p>Sonstige Infos: {product.description}</p>
            <p>Bild: {product.picture}</p>
            <p>User Kontakt: {product.contact}</p>
          </div>
        ))}
    </div>
  )
}
