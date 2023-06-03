import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/mahasiswa/Home";
import InputData from "./pages/mahasiswa/inputData";
import EditData from "./pages/mahasiswa/editData";
import Login from "./pages/login/Login";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/input" element={<InputData />} />
          <Route path="/edit/:id" element={<EditData />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
