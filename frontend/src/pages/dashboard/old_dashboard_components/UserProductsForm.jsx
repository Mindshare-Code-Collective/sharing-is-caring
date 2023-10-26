import React, { useContext } from "react";
import { AllProductsContext } from "../../../context/AllProductsContext";

export default function UserProductsForm() {
  const { allProducts, setAllProducts } = useContext(AllProductsContext);
  return (
    <div className="user-product-form">
      <h4>Add a product:</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setAllProducts([
            ...allProducts,
            {
              name: e.target.name.value,
              kategorie: e.target.kategorie.value,
              zustand: e.target.zustand.value,
              zustellung: e.target.zustellung.value,
              sonstiges: e.target.sonstiges.value,
              image: e.target.image.value,
              usercontact: e.target.usercontact.value,
            },
          ]);
        }}
      >
        <p>Name des Artikels:</p>
        <input type={"text"} name="name" />
        <p>Kategorie:</p>
        <input type={"text"} name="kategorie" />
        <p>Zustand:</p>
        <input type={"text"} name="zustand" />
        <p>Zustellung:</p>
        <input type={"text"} name="zustellung" />
        <p>Sonstige Infos:</p>
        <input type={"text"} name="sonstiges" />
        <p>Bild:</p>
        <input type={"img"} name="image" />
        <p>usercontact:</p>
        <input type={"email"} name="usercontact" />
        <br></br>
        <button>add</button>
      </form>
    </div>
  );
}
