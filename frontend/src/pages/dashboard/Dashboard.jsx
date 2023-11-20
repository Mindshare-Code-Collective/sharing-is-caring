import React from "react";
import "./dashboard.scss";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import DashboardUserHeader from "./DashboardUserHeader";
import ProductCard from "./ProductCard";
import MessagesSlider from "./MessagesSlider";

 
export default function Dashboard(props) {
 
  const { userInfo, userObject } = useContext(AppContext);

  return (
    <div className="sec1">
      <DashboardUserHeader userInfo={userInfo}/>
      <div className="text-center fs-2 mt-5"><h3>MEINE PRODUCTE</h3></div>

      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 m-5" >

      {
    userInfo && userObject && userObject.products.map((product, index) => (
      <ProductCard key={index} product={product} editable/>
    ))
  }
      </div>
      <div className="text-center fs-2 mt-5"><h3>MEINE NACHRICHTEN</h3></div>
      <div className="d-flex justify-content-center align-items-center gap-3 m-5" >

       {/* {
          userInfo && userObject && userObject.conversations.map((conversation, index) => (
          <Messages key={index} conversation={conversation} userInfo={userInfo}/> ))
        } */}
        {
          userInfo && userObject && <MessagesSlider userObject={userObject} userInfo={userInfo}/>
        }

      </div>
    </div>
    );
  };
