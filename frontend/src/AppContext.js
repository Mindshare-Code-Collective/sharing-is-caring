import React, { createContext, useState, useEffect} from "react";
import axios from "axios";
// import {productsAll} from "./assets/products";

export const AppContext = createContext();



const ProductUrl = "http://localhost:3333/products";
const UserUrl = "http://localhost:3333/users/dashboard";


export const AppProvider = ({ children }) => {
    // const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState();
    const [userInfo, setUserInfo] = useState();
    const [userObject, setUserObject] = useState();
  
  useEffect(() => {
      (async () => {
        const response = (await axios.get(ProductUrl)).data;
        setProducts(response);
      })();
  }, []);
  
  useEffect(() => {
      if(userInfo) {
        (async () => {
          const response = (await axios.get(`${UserUrl}/${userInfo?.id}`)).data;
          setUserObject(response);
         // console.log(userObject);
        })();
        } else {
          console.log("You have to log in first to see yor dashboard")
        }
  
  },[userInfo]);

  
    return (
      <AppContext.Provider
        value={{
          products,
          userInfo,
          setUserInfo,
          setUserObject,
          userObject,
        }} >
        {children}
      </AppContext.Provider>
    );
};