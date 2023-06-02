import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/homeStyle.css";
import "../style/form.css";

const EditData = () => {
  const [NIM, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const { id } = useParams();

  const editData = () => {
    const requestingData = {
      nim: NIM,
      name: nama,
      email: email,
      alamat: alamat,
    };
    axios({
      method: "PUT",
      url: "http://localhost:3000/mahasiswa",
      data: requestingData,
    }).then(() => {
      alert("data berhasil diubah");
      window.location.replace("/");
    });
  };

  const getUsersById = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/mahasiswa/${id}`);
      const data = await response.data.data;
      setNim(data.nim);
      setNama(data.name);
      setEmail(data.email);
      setAlamat(data.alamat);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getUsersById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="center">
        <div className="container">
          <h1 className="text-center" style={{ marginTop: "15px" }}>
            Form Edit Data
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
              value={NIM}
              placeholder="masukkan nim anda"
              required
              onChange={(event) => setNim(event.target.value)}
            />
          </form>
          <form>
            <label>Nama</label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={nama}
              placeholder="masukkan nama anda"
              required
              onChange={(event) => setNama(event.target.value)}
            />
          </form>
          <form>
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="masukkan email anda"
              onChange={(event) => setEmail(event.target.value)}
            />
          </form>
          <form>
            <label>Alamat</label>
            <input
              type="text"
              id="alamat"
              name="alamat"
              value={alamat}
              placeholder="masukkan alamat anda"
              required
              onChange={(event) => setAlamat(event.target.value)}
            />
          </form>

          <button
            className="button"
            onClick={() => {
              editData();
            }}
          >
            Edit Data
          </button>
        </div>
      </div>
    </>
  );
};

export default EditData;
