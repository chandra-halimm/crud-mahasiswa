import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InputData from "./pages/inputData";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<InputData />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
