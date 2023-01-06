import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Pages />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
