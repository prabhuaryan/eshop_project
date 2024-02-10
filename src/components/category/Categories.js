import React, { useEffect, useState } from "react";
import categoryImage1 from "../../assets/img/cat-1.jpg";
// import categoryImage2 from "../../assets/img/cat-2.jpg";
// import categoryImage3 from "../../assets/img/cat-3.jpg";
// import categoryImage4 from "../../assets/img/cat-4.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/utils";

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    const url = "https://dummyjson.com/products/categories";
    const data = await axios.get(url);
    if (!data) {
      setCategoryData("No category found");
    } else {
      console.log(data);
      setCategoryData(data.data);
    }
  };
  return (
    <div className="container-fluid pt-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Categories</span>
      </h2>
      <div className="row px-xl-5 pb-3">
        {categoryData.map((category, i) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={i}>
              <Link
                className="text-decoration-none"
                to={`https://dummyjson.com/products/category/${category}`}
              >
                <div className="cat-item d-flex align-items-center mb-4">
                  <div
                    className="overflow-hidden"
                    style={{ width: 100, height: 100 }}
                  >
                    <img
                      className="img-fluid"
                      src={categoryImage1}
                      alt="category image"
                    />
                  </div>
                  <div className="flex-fill pl-3">
                    <h6>{capitalizeFirstLetter(category)}</h6>
                    <small className="text-body">50 Products</small>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
