import React from "react";

export default function AllProductsCard({ product }) {
  return (
    <div className="all-products-card">
      <div className="product-img">{product.image}</div>
      <div className="product-infotext">
        <h2>{product.name}</h2>
        <div>
          <span>
            <b>Kategorie:</b> {product.kategorie}
          </span>
        </div>
        <div>
          <span>
            <b> Zustand:</b> {product.zustand}
          </span>
        </div>
        <div>
          <span>
            <b>Zustellung:</b>
            {product.zustellung}
          </span>
        </div>
        <div>
          <span>
            <b>Sonstiges:</b>
            {product.sonstiges}
          </span>
        </div>
        <div>
          <span>
            <b>Kontakt/User:</b>
            {product.usercontact}
          </span>
        </div>
      </div>
    </div>
  );
}
