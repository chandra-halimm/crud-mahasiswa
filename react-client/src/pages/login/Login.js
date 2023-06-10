import { useState } from "react";
import axios from "axios";
import "../../style/homeStyle.css";

const Login = () => {
  const [nip, setNip] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = () => {
    const requestingData = {
      nip: nip,
      password: password,
    };
    axios({
      method: "POST",
      url: "http://localhost:3000/login/",
      data: requestingData,
    })
      .then(() => {
        window.location.replace("/home");
        localStorage.setItem("nip", nip);
        localStorage.setItem("password", password);
      })
      .catch((err) => {
        alert("username atau password yang anda masukan salah");
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container">
        <h1
          className="text-center"
          style={{ marginTop: "20px", color: "#746f6f" }}
        >
          Login Page
        </h1>

        <div className="flex-center">
          <div className="card">
            <form>
              <label>Nip</label>
              <input
                type="number"
                placeholder="masukkan nip anda"
                name="nip"
                required
                onChange={(e) => setNip(e.target.value)}
              />
            </form>
            <form>
              <label>Password</label>
              <input
                type="password"
                placeholder="masukkan password anda"
                name="password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </form>
            <button
              className="button"
              onClick={() => {
                console.log(userLogin());
              }}
            >
              Login
            </button>
            <button
              className="button"
              style={{ marginTop: " -20px" }}
              onClick={() => {
                window.location.replace("/register");
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
