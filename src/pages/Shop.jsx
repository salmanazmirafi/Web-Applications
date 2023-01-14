import React from "react";
import ShopIng from "./shops/ShopIng";

const Shop = ({ addToCart, shopItems }) => {
  return (
    <div>
      <ShopIng shopItems={shopItems} addToCart={addToCart} />
    </div>
  );
};

export default Shop;
