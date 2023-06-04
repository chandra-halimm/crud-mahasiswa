import { useState } from "react";
import axios from "axios";
import "../../style/homeStyle.css";

const Register = () => {
  const [nip, setNip] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    const requestingData = {
      nip: nip,
      nama: nama,
      password: password,
    };
    axios({
      method: "POST",
      url: "http://localhost:3000/login/register",
      data: requestingData,
    })
      .then(() => {
        alert("Register berhasil");
        window.location.replace("/");
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
              <label>Nama</label>
              <input
                type="text"
                placeholder="masukkan nama anda"
                name="nama"
                required
                onChange={(e) => setNama(e.target.value)}
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
                  console.log(e.target.value);
                }}
              />
            </form>
            <button
              className="button"
              style={{ marginTop: " 30px" }}
              onClick={() => {
                registerUser();
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

export default Register;
