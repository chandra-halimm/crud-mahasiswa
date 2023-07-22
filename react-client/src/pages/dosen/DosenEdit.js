import { useState } from "react";
import "../../style/homeStyle.css";
import axios from "axios";

const DosenEdit = () => {
  const [nip, setNip] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");

  const ubahData = () => {
    console.log("yayaya");
  };

  const getUsersById = () => {
    axios({
      method: "GET",
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center" style={{ marginTop: "25px" }}>
          Tambah Data
        </h1>
        <button
          className="button"
          onClick={() => window.location.replace("/dosenhome")}
        >
          Kembali
        </button>
        <form>
          <label for="nim">NIM</label>
          <input
            type="text"
            name="nip"
            id="nip"
            required
            onChange={(event) => {
              setNip(event.target.value);
            }}
          />
        </form>
        <form>
          <label for="nama">Nama</label>
          <input
            type="text"
            name="nama"
            id="nama"
            required
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </form>
        <form>
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </form>
        <form>
          <label for="alamat">Alamat</label>
          <input
            type="text"
            name="alamat"
            id="alamat"
            required
            onChange={(event) => {
              setAlamat(event.target.value);
            }}
          />
        </form>
        <button className="button" onClick={() => ubahData()}>
          Simpan
        </button>
      </div>
    </>
  );
};

export default DosenEdit;
