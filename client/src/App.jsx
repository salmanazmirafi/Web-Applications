import Cart from "./pages/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {  createBrowserRouter,  RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    // path: "/",
    // element: <Home />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:category",
        element: <ProductList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ],
  },
]);



const App = () => {


  return (
    <div>
    <RouterProvider router={router} />
  </div>
  );
};

export default App;
