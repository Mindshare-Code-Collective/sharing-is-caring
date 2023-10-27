import React, { useState } from 'react';
import UserOffersForm from './UserOffersForm';


export default function UserOffersList({userProducts}) {

  return (
    <div>
      <h2>UserOffersList</h2>
        {userProducts.map((product, index) => (
          <div key={index} style={{border: "1px solid black"}} >
            <p>Name des Artikels: {product.name}</p>
            <p>Kategorie: {product.kategorie}</p>
            <p>Zustand: {product.zustand}</p>
            <p>Zustellung: {product.zustellung}</p>
            <p>Sonstige Infos: {product.sonstiges}</p>
            <p>Bild: {product.image}</p>
            <p>User Kontakt: {product.usercontact}</p>
          </div>
        ))}
    </div>
  )
}
