import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const products = await axios.get(
      "https://dummyjson.com/products?skip=6&&limit=6"
    );
    if (!products) return [];
    setProducts(products.data.products);
    console.log("Products", products.data.products);
  };
  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      <div className="row px-xl-5">
        {products.map((product, key) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1" key={key}>
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden ">
                  <img
                    className="img w-100"
                    style={{ objectFit: "cover" }}
                    src={product.thumbnail}
                    alt="Product Image"
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
                    <h5>
                      {" "}
                      &#8377;{" "}
                      {product.price -
                        (product.discountPercentage / 100) * product.price}
                    </h5>
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
          );
        })}
      </div>
    </div>
  );
};

export default Products;
