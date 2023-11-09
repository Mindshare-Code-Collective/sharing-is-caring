import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import config from './component/config/config';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [userInfo, setUserInfo] = useState(() => {
    const storedUserInfo = sessionStorage.getItem('userInfo');
    try {
      return storedUserInfo ? JSON.parse(storedUserInfo) : null;
    } catch (e) {
      console.error('Invalid JSON:', storedUserInfo);
      return null;
    }
  });
  const [userObject, setUserObject] = useState();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(config.routes.product.getAllProducts);
      setProducts(response.data.data);
      //console.log(JSON.stringify(response.data));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchUserObject = async () => {
    try {
      const response = await axios.get(`${config.routes.user.dashboard + userInfo?.id}`);
      setUserObject(response.data);
    } catch (error) {
      console.error('Error fetching user object:', error);
    }
  };

  useEffect(() => {
    // Fetch products initially
    fetchProducts();

    // Set up interval to fetch products every 15 minutes (adjust as needed)
    const intervalId = setInterval(fetchProducts, 15 * 60 * 1000);

    return () => {
      // Clear the interval on component unmount
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    // Fetch user object when userInfo changes
    if (userInfo) {
      fetchUserObject();
    } else {
      console.log("You have to log in first to see your dashboard");
    }
  }, [userInfo]);

  return (
    <AppContext.Provider
      value={{
        products,
        userInfo,
        setUserInfo,
        setUserObject,
        userObject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};