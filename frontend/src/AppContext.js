import React, { createContext, useState, useEffect} from "react";
import axios from "axios";
// import {productsAll} from "./assets/products";
import config from './component/config/config';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState();
    //const [userInfo, setUserInfo] = useState();
    const [userObject, setUserObject] = useState();
  
    const storedUserInfo = sessionStorage.getItem('userInfo');
    const [userInfo, setUserInfo] = useState(() => {
      try {
        return storedUserInfo ? JSON.parse(storedUserInfo) : null;
      } catch (e) {
        console.error('Invalid JSON:', storedUserInfo);
        return null;
      }
    });

  useEffect(() => {
      (async () => {
        const response = (await axios.get(config.routes.product.getAllProducts)).data;
        setProducts(response);
      })();
  }, []);
  
  useEffect(() => {
      if(userInfo) {
        (async () => {
          const response = (await axios.get(`${config.routes.user.dashboard + userInfo?.id}`)).data;
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