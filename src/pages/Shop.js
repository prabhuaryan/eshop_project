import React ,{useState, useEffect}from "react";
import productImage1 from "../assets/img/product-1.jpg";
import productImage2 from "../assets/img/product-2.jpg";
import productImage3 from "../assets/img/product-3.jpg";
import productImage4 from "../assets/img/product-4.jpg";
import productImage5 from "../assets/img/product-5.jpg";
import productImage6 from "../assets/img/product-6.jpg";
import productImage7 from "../assets/img/product-7.jpg";
import productImage8 from "../assets/img/product-8.jpg";
import productImage9 from "../assets/img/product-9.jpg";
import axios from "axios";
import Sidebar from "../components/sidebar/Sidebar";
const Shop = () => {
  const [products, setProducts]=useState([]);
  useEffect(()=>{
    getProducts();
  },[]);

  const getProducts = async ()=>{
    const products = await axios.get('https://dummyjson.com/products');
    if(!products) return [];
    setProducts(products.data.products);
    console.log("Products",products.data.products);
  }
  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        {/* Shop Sidebar Start */}

        <Sidebar/>
        
        {/* Shop Sidebar End */}

        {/* Shop Product Start */}
        <div className="col-lg-9 col-md-8">
          <div className="row pb-3">
            <div className="col-12 pb-1">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <button className="btn btn-sm btn-light">
                    <i className="fa fa-th-large" />
                  </button>
                  <button className="btn btn-sm btn-light ml-2">
                    <i className="fa fa-bars" />
                  </button>
                </div>
                <div className="ml-2">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-light dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Sorting
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Latest
                      </a>
                      <a className="dropdown-item" href="#">
                        Popularity
                      </a>
                      <a className="dropdown-item" href="#">
                        Best Rating
                      </a>
                    </div>
                  </div>
                  <div className="btn-group ml-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-light dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Showing
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        10
                      </a>
                      <a className="dropdown-item" href="#">
                        20
                      </a>
                      <a className="dropdown-item" href="#">
                        30
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {products.map((product, key)=>{
              return (
                <div className="col-lg-4 col-md-6 col-sm-6 pb-1" key={key}>
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden ">
                  <img
                    className="img w-100"
                    style={{objectFit:'cover'}}
                    src={product.thumbnail} alt="Product Image"
                    width={150}
                    height={150}
                  />
                  <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href="">
                      <i className="fa fa-shopping-cart" />
                    </a>
                    <a className="btn btn-outline-dark btn-square" href="">
                      <i className="far fa-heart" />
                    </a>
                    <a className="btn btn-outline-dark btn-square" href="">
                      <i className="fa fa-sync-alt" />
                    </a>
                    <a className="btn btn-outline-dark btn-square" href="">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href="">
                   {product.title}
                  </a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5> &#8377; {(product.price)-((product.discountPercentage/100)*product.price)}</h5>
                    <h6 className="text-muted ml-2">
                      <del>&#8377; {product.price}</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>({product.rating})</small>
                  </div>
                </div>
              </div>
            </div>
              )
            })}
          </div>
        </div>
        {/* Shop Product End */}
      </div>
    </div>
  );
};

export default Shop;
