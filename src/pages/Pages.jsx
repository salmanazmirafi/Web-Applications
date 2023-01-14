import React from "react";
import Dcard from "../components/annocument/Annocument";
import Home from "../components/categories/Home";
import Discount from "../components/discount/Discount";
import FlashDeals from "../components/flashDeals/FlashDeals";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Shop from "../components/shops/Shop";
import TopCate from "../components/top/TopCate";
import Wrapper from "../components/wrapper/Wrapper";

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  console.log(shopItems);
  return (
    <div>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Dcard />
      <Wrapper />
    </div>
  );
};

export default Pages;
