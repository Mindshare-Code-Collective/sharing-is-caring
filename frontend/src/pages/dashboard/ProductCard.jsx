import { AppContext } from "../../AppContext";
import image01 from "../../assets/Book-3.jpg";
import "./productCard.scss";
import { useContext } from 'react';
import axios from "axios";
import config from "../../component/config/config";
import { RiReservedFill, RiDeleteBin6Fill } from "react-icons/ri";
import { VscLiveShare } from "react-icons/vsc";

export default function ProductCard({ product, editable = false }) {
  // const [ userProducts, setUserProducts ] = useState([]);
/*   const { product } = props;
 */  // const handleProductSubmit = (newProduct) => {
  //   setUserProducts([...userProducts, newProduct]);
  // };

  /*const imgData = localStorage.getItem(
    `${product.name},${product.category},${product.description}`
  );*/
  const { fetchProducts, userInfo } = useContext(AppContext);

  const onlineProduct = async () => {
    try {
      await axios.patch(config.routes.product.onlineProduct + product._id);
      fetchProducts();
      window.location.reload();
    } catch (error) {
      console.error("Error deleting products:", error);
    }
  }

  const deleteProduct = async () => {
    try {
      await axios.patch(config.routes.product.deleteProduct + product._id);
      fetchProducts();
      window.location.reload();
    } catch (error) {
      console.error("Error deleting products:", error);
    }
  }

  const reserveProduct = async () => {
    try {
      await axios.patch(config.routes.product.reserveProduct + product._id);
      fetchProducts();
      window.location.reload();
    } catch (error) {
      console.error("Error deleting products:", error);
    }
  }


  return (
    <div className="gallery col-md-3 col-sm-12 ">
      <div className="container_with d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-12">
                {
                  product && product.picture && 
                  <div className="product-card">
                    <div className="product-image-details">
                    <div className="product-image">
                      <img src={product.picture ? product.picture : image01} alt="Aa" width="150"/>
                    </div>
                    <div className="product-details">
                      <h2 className="product-title" style={{fontSize: product.name.length > 9 ? `${(9 / product.name.length) * 1.5}rem` : "1.5rem"}}>{product.name}</h2>
                      <h3 className="product-category">{product.category}</h3>
                      <p className="product-condition">{product.condition}</p>
                      <p className="product-status">{product.status}</p>

                    </div>
                    </div>
                    <div className=" product-buttons">
                  { editable && userInfo.id === product.user && product.status !== "online" &&

                      <button className="product-btn-btn" onClick={onlineProduct}>
                        <VscLiveShare />
                      </button>
                    }
                    { editable && userInfo.id === product.user && product.status !== "deleted" &&
                      <button className="product-btn-btn" onClick={deleteProduct}>
                        <RiDeleteBin6Fill />
                      </button>
                    }
                { editable && userInfo.id === product.user && product.status !== "reserved" &&
                  <button className="product-btn-btn" onClick={reserveProduct}>
                    <RiReservedFill /> 
                  </button>
                }
              </div>
 
            </div>
              } 
         </div>

        </div>

      </div>
    </div>

  );
}