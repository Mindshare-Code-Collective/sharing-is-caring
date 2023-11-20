import { AppContext } from "../../AppContext";
import image01 from "../../assets/Book-3.jpg";
import "./productCard.scss";
import { useContext } from 'react';
import axios from "axios";
import config from "../../component/config/config";

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

  const deleteProduct = async () => {
    try {
      await axios.delete(config.routes.product.deleteProduct + product._id);
      fetchProducts();
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
                  <div className="product-image">
                  <img src={product.picture ? product.picture : image01} alt="Aa" width="150"/>
                  </div>
              <div className="product-details">
                <h2 className="product-title">{product.name}</h2>
                <h3 className="product-category">{product.category}</h3>
                <p className="product-condition">{product.condition}</p>
                { editable && userInfo.id === product.user &&
                  <button className="btn-btn" onClick={deleteProduct}>
                    Löschen
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