import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pay from "./page/Pay";
import Success from "./page/Success";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/pay" element={<Pay/>} />
          <Route path="/success" element={<Success/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App