import React from "react";
// import { Container, Row, Col } from "reactstrap";
import "./dashboard.scss";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import DashboardUserHeader from "./DashboardUserHeader";
import ProductCard from "./ProductCard";
//import products from "../../assets/data/products";
import Messages from "./Messages";

 
export default function Dashboard(props) {
  // const [ userProducts, setUserProducts ] = useState([]);
  const { userInfo, userObject } = useContext(AppContext);
  // const handleProductSubmit = (newProduct) => {
  //   setUserProducts([...userProducts, newProduct]);
  // };
 
  return (
    <div className="sec1">
      <DashboardUserHeader userInfo={userInfo}/>
      <div className="text-center fs-2 mt-5"><h3>MEINE PRODUCTE</h3></div>

      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 m-5  container" >
      {
    userInfo && userObject && userObject.products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))
  }
      </div>
      <Messages/>

    </div>
    );
  };
