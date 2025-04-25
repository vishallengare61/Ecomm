import React from "react";
import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";
import CategoriesCard from "../Categories-Cards/CategoriesCard";
import FlashSales from "../FlashSale/FlashSales";
import Products from "../Products/Products";
import Offer from "../Offer/Offer";
import Recommended from "../Recommended/Recommended";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <CategoriesCard />
      <FlashSales />
      <Products />
      <Offer />
      <Recommended />
    </div>
  );
};

export default Home;
