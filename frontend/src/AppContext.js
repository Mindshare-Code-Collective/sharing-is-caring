import React, { createContext, useState, useEffect} from "react";
import axios from "axios";
// import {productsAll} from "./assets/products";

export const AppContext = createContext();



const url = "http://localhost:3333/products";

export const AppProvider = ({ children }) => {
    // const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState();
    const [userInfo, setUserInfo] = useState();
  


    useEffect(() => {
      (async () => {
        const response = (await axios.get(url)).data;
        setProducts(response);
      })();
    }, [products]);

    // useEffect(async () => {

    //   fetch(url, {
    //     method: "GET",
    //     headers : {
    //       'Content-Type': 'application/json'
    //     },
    //     })
    //     .then(response => response 
    //     ).then(data => { 
    //       setProducts(data);
    //       console.log(products);
    //     })
    //     .catch(error => {
    //       console.error(error)
    //     });

    // }, [products]);

  
    return (
      <AppContext.Provider
        value={{
          products,
          userInfo,
          setUserInfo,
        }} >
        {children}
      </AppContext.Provider>
    );
};