import image01 from "../../assets/Book-3.jpg";
import "./productCard.scss";
export default function ProductCard(props) {
  // const [ userProducts, setUserProducts ] = useState([]);
  const { product } = props;
  // const handleProductSubmit = (newProduct) => {
  //   setUserProducts([...userProducts, newProduct]);
  // };

  const imgData = localStorage.getItem(
    `${product.name},${product.category},${product.description}`
  );

  return (
    // <div className="gallery col-md-3 col-sm-12 product-card ">
    //   <div className="container_with d-flex flex-column justify-content-center align-items-center">
    //     <div className="row">
    //       <div className="col-md-12">
    //         <div className="text_align_center product-title">
    //           <h2>{product.name}</h2>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="tz-gallery">
    //       <div className="row">
    //         <div className="col-lg-4 col-md-6 ma_bottom30">
    //           <div className="lightbox">
    //             <div className="view_main">
    //               <div className="pose product-image">
    //                 <img
    //                   src={imgData ? imgData : image01}
    //                   alt="Aa"
    //                   width="150"
    //                 />

    //                 <h3>{product.category}</h3>
    //                 <p>{product.condition}</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //  </div>
    <div className="gallery col-md-3 col-sm-12">
      <div className="container_with d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-12">
            <div className="product-card">
              <div className="product-image">
                <img src={imgData ? imgData : image01} alt="Aa" width="150"/>
              </div>
              <div className="product-details">
                <h2 className="product-title">{product.name}</h2>
                <h3 className="product-category">{product.category}</h3>
                <p className="product-condition">{product.condition}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
