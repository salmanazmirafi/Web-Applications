import React from "react";
import Home from "../components/categories/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <div>
      <Home />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
    </div>
  );
};

export default Pages;
