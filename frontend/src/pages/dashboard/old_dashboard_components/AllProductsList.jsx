import React, { useContext } from "react";
import AllProductsCard from "./AllProductsCard";
import { AllProductsContext } from "../../../context/AllProductsContext";

export default function AllProductsList() {
  const { allProducts } = useContext(AllProductsContext);
  console.log(allProducts.name);
  return (
    <div className="all-products-container">
      <h2 id="allproducts-list-top"> Übersicht aller verfügbaren Artikel: </h2>
      <div className="all-categories-container">
        <h3>Kategorien</h3>
        <ul>
          <li>z.B. Garten</li>
          <li>z.B. Kleidung</li>
          <li>{allProducts}</li>
          <li>...</li>
        </ul>
      </div>
      <div className="products-cards-Container">
        {allProducts &&
          allProducts.map((item, i) => (
            <AllProductsCard product={item} key={i} />
          ))}
      </div>
      <div div className="ankerlinks-container">
        <a className="ankerlinks" href="#allproducts-list-top">
          back to the top
        </a>
      </div>
    </div>
  );
}
