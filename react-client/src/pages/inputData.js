import axios from "axios";
import { useState } from "react";
import "../style/homeStyle.css";
import "../style/form.css";

const InputData = () => {
  const [NIM, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");

  const handleNim = (inputNim) => {
    setNim(inputNim);
  };
  const handleNama = (inputNama) => {
    setNama(inputNama);
  };
  const handleEmail = (inputEmail) => {
    setEmail(inputEmail);
  };
  const handleAlamat = (inputAlamat) => {
    setAlamat(inputAlamat);
  };

  const addData = () => {
    const requestingData = {
      nim: NIM,
      name: nama,
      email: email,
      alamat: alamat,
    };
    axios({
      method: "POST",
      url: "http://localhost:3000/mahasiswa",
      data: requestingData,
    }).then(() => {
      alert("data berhasil ditambah");
    });
  };

  return (
    <>
      <div className="center">
        <div className="container">
          <h1 className="text-center" style={{ marginTop: "15px" }}>
            Form Tambah Data
          </h1>

          <button
            className="button"
            onClick={() => {
              window.location.replace("/");
            }}
          >
            Kembali
          </button>
          <form>
            <label>Nim</label>
            <input
              type="number"
              id="nim"
              name="nim"
              placeholder="masukkan nim anda"
              required
              onChange={(event) => handleNim(event.target.value)}
            />
          </form>
          <form>
            <label>Nama</label>
            <input
              type="text"
              id="nama"
              name="nama"
              placeholder="masukkan nama anda"
              required
              onChange={(event) => handleNama(event.target.value)}
            />
          </form>
          <form>
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="masukkan email anda"
              onChange={(event) => handleEmail(event.target.value)}
            />
          </form>
          <form>
            <label>Alamat</label>
            <input
              type="number"
              id="nim"
              name="nim"
              placeholder="masukkan alamat anda"
              required
              onChange={(event) => handleAlamat(event.target.value)}
            />
          </form>

          <button
            className="button"
            onClick={() => {
              addData();
            }}
          >
            Tambah Data
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
