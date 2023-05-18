import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InputData from "./pages/inputData";
import EditData from "./pages/editData";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<InputData />} />
          <Route path="/edit" element={<EditData />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
