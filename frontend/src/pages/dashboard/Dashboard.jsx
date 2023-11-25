import React from "react";
import "./dashboard.scss";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import DashboardUserHeader from "./DashboardUserHeader";
import ProductCard from "./ProductCard";
import MessagesSlider from "./MessagesSlider";
import LoadingImage from "./assets/loading.gif";

 
export default function Dashboard(props) {
 
  const { userInfo, userObject } = useContext(AppContext);

  return (
    <div className="sec1">
      <DashboardUserHeader userInfo={userInfo}/>
      <div className="text-center fs-2 mt-5"><h3>MEINE PRODUKTE</h3></div>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 m-5" >

      {
  userInfo && userObject ? (
    userObject.products.map((product, index) => {
      return product.status !== "deleted" ? (
        <ProductCard key={index} product={product} editable />
      ) : null;
    })
  ) : (
    <img src={LoadingImage} width="200" alt="loading" />
  )
}
      </div>
      <div className="text-center fs-2 mt-5"><h3>MEINE NACHRICHTEN</h3></div>
      <div className="d-flex justify-content-center align-items-center gap-3 m-5" >

       
        {
          userInfo && userObject ? 
          <MessagesSlider userObject={userObject} userInfo={userInfo}/> :
          <img src={LoadingImage} width="200" alt="loading"></img>
        }

      </div>
    </div>
    );
  };
