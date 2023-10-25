import { useState, createContext, useEffect } from "react";
export const AllProductsContext = createContext();
/* export const starterAllProducts = [
  /* {
    name: "Zimmerpflanze Einblatt",
    kategorie: "Pflanze, Garten",
    zustand: "gut",
    zustellung: "Abholung",
    sonstiges: "mittelgroß",
    image: "hier kommt noch ein Foto",
    usercontact: "pflanzenfreundin@web.de",
  },
]; */

/* const getStarterAllProducts = () => {
  const allProducts = localStorage.getItem("allProducts");
  return allProducts ? JSON.parse(allProducts) : starterAllProducts;
}; */

export default function AllProductsContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState({
    name: "Zimmerpflanze Einblatt",
    kategorie: "Pflanze, Garten",
    zustand: "gut",
    zustellung: "Abholung",
    sonstiges: "mittelgroß",
    image: "hier kommt noch ein Foto",
    usercontact: "pflanzenfreundin@web.de",
  });
  /* => getStarterAllProducts());
  useEffect(() => {
    localStorage.setItem("allProducts", JSON.stringify(allProducts));
  }, [allProducts]) */ return (
    <AllProductsContext.Provider value={{ allProducts, setAllProducts }}>
      {children}
    </AllProductsContext.Provider>
  );
}
