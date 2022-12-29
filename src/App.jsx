import Manu from "./components/manu/Manu";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Video from "./pages/video/Video";
import "./App.css";
import SignIn from "./pages/sign/SignIn";

const App = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Manu />
          <div className="main">
            <Navbar />
            <div className="wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video/:id" element={<Video />} />
                <Route path="/signin" element={<SignIn />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
