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
  const { userInfo, products } = useContext(AppContext);
  // const handleProductSubmit = (newProduct) => {
  //   setUserProducts([...userProducts, newProduct]);
  // };
 
  return (
    <>
      <DashboardUserHeader userInfo={userInfo}/>
      <div className="text-center fs-2 mt-5">Meine Produkte</div>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 m-5">
      {
        products?.data.map((product, index) => {
            return (
            <ProductCard key={index} product={product} />
        )
        }

          )
      }
      </div>
      <Messages/>

    </>
    );
  };
