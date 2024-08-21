import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Videography from "./pages/Videography";
import Photography from "./pages/Photography";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" exact element={<Photography/>} />
          <Route path="/videography" exact element={<Videography />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
