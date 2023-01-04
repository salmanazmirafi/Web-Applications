import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Left from "./components/leftBar/Left";
import Navbar from "./components/navbar/Navbar";
import Discovery from "./pages/discover/Discovery";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Messenger from "./pages/messenger/Messenger";
import Register from "./pages/register/Register";
import "./style.css";

const currentUser = true;

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ background: "#F3F2EF", paddingTop: "20px" }}>
          <div
            style={{
              display: "flex",
              width: "1170px",
              margin: "auto",
            }}
          >
            <Left />
            <div style={{ flex: 8 }}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/discovery",
          element: <Discovery />,
        },
        {
          path: "/messenger",
          element: <Messenger />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
