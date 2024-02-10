import React from "react";
import Category from "../components/category/Category";
import Products from "../components/products/Products";
import Featured from "../components/featured/Featured";
import Offer from "../components/offer/Offer";
import Vendor from "../components/vendor/Vendor";
import HeroSection from "../components/herosection/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Featured />
      <Category />
      <Offer />
      <Products />
      <Vendor />
    </>
  );
};

export default Home;
