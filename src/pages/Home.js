import React from "react";
import Products from "../components/products/Products";
import Featured from "../components/featured/Featured";
import Offer from "../components/offer/Offer";
import Vendor from "../components/vendor/Vendor";
import Banner from "../components/banner/Banner";
import Categories from "../components/category/Categories";

const Home = () => {
  return (
    <>
      <Banner />
      <Featured />
      <Categories/>
      <Offer />
      <Products />
      <Vendor />
    </>
  );
};

export default Home;
