import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import { useState } from "react";
import Sdata from "./components/shops/Sdata";
import SignUp from "./pages/SignUp";
import Shop from "./pages/Shop";
import New from "./components/newslider/New";

const App = () => {
  //Step 1 :
  const { productItems } = Data;

  const { shopItems } = Sdata;

  //Step 2 :
  const [CartItem, setCartItem] = useState([]);

  //Step 4 :
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  // Stpe: 6
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };
  const currentUser = true;

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {currentUser ? (
            <>
              <Route
                path="/cart"
                element={
                  <Cart
                    CartItem={CartItem}
                    addToCart={addToCart}
                    decreaseQty={decreaseQty}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <Pages
                    productItems={productItems}
                    addToCart={addToCart}
                    shopItems={shopItems}
                  />
                }
              />
              <Route
                path="/shop"
                element={
                  <Shop
                    productItems={productItems}
                    addToCart={addToCart}
                    shopItems={shopItems}
                  />
                }
              />
            </>
          ) : (
            <Route path="/signup" element={<SignUp />} />
          )}
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
